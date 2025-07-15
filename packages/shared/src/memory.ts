import assert from 'node:assert';
import { AsyncLocalStorage } from 'node:async_hooks';

import { createDebugLogger } from 'rejoinder';

import { ErrorMessage } from 'universe+shared:error.ts';

import type { Functionable } from '@-xun/types';
import type { Db, MongoClient } from 'mongodb';
import type { DbSchema, DummyData } from 'universe+shared:schema.ts';

const $memorySymbol = Symbol.for('@-xun/mongo:memory');
const debug = createDebugLogger({ namespace: 'mongo-shared:memory' });

/**
 * A list of keys that, if set to a function value, will have that function
 * called and the return value used to replace said function as the new value of
 * the key when {@link getFromSharedMemory} is called.
 */
const functionableKeys: (keyof SharedMemory)[] = ['dummy', 'schema'];

/**
 * A list of keys that cannot be set by {@link setToSharedMemory}.
 */
const unsettableKeys: (keyof SharedMemory)[] = [
  'asyncLocalStorage',
  'asyncLocalStores',
  'asyncLocalTenantId'
];

/**
 * A shared cache of connection, server schema, and database state.
 *
 * @internal
 */
export type SharedMemory = {
  /**
   * Memoized MongoDB driver client connection.
   */
  client: MongoClient | undefined;
  /**
   * Memoized MongoDB driver Database instances.
   */
  databases: Record<string, Db>;
  /**
   * Memoized resolved database schemas and aliases.
   */
  schema: Functionable<DbSchema | undefined>;
  /**
   * Memoized dummy data.
   */
  dummy: Functionable<DummyData | undefined>;
  /**
   * Whether to allow operating as a global singleton or force usage of the
   * `@-xun/mongo-schema/multitenant` API.
   *
   * @default 'singleton'
   * @see {@link setupForcedMultitenancyOverride}
   */
  mode: 'singleton' | 'multitenant';
  /**
   * When `mode` is `'multitenant'`, this is the storage context that is used.
   *
   * Note that the value of this property is a runtime-wide global singleton
   * that should not and will not ever be reset, not even by calls to
   * {@link resetSharedMemory}.
   */
  readonly asyncLocalStorage: AsyncLocalStorage<SharedMemory>;
  /**
   * Whenever a new store is created (e.g. for an invocation of
   * `asyncLocalStorage.run`), that store is stored here and can be later reused
   * given the same `tenantId` map key.
   *
   * Note that the value of this property is a runtime-wide global singleton
   * that should not and will not ever be reset, not even by calls to
   * {@link resetSharedMemory}.
   */
  readonly asyncLocalStores: Map<string, SharedMemory>;
  /**
   * The `tenantId` of the tenant that owns this `SharedMemory` instance. Will
   * always be `undefined` unless operating in a multitenancy situation.
   */
  readonly asyncLocalTenantId: string | undefined;
};

/**
 * Retrieves a value from shared memory.
 *
 * @internal
 */
export function getFromSharedMemory<T extends keyof SharedMemory>(key: T) {
  let value = getSharedMemoryFromGlobalRuntime({ doForcedMultitenancyCheck: true })[key];

  if (functionableKeys.includes(key) && typeof value === 'function') {
    debug.message('invoking then setting shared memory value function');
    value = value() as SharedMemory[T];
    setToSharedMemory(key, value);
  }

  debug('shared memory retrieved: %O => %O', key, value);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  return value as Exclude<SharedMemory[T], Function>;
}

/**
 * Puts a value into shared memory, overwriting it if it already exists. For
 * keys that accept a function, the function will be invoked lazily.
 *
 * @internal
 */
export function setToSharedMemory<T extends keyof SharedMemory>(
  key: T,
  value: SharedMemory[T]
) {
  assert(!unsettableKeys.includes(key), ErrorMessage.CannotSetReadOnlyProperty(key));

  const memory = getSharedMemoryFromGlobalRuntime({ doForcedMultitenancyCheck: true });
  const oldValue = memory[key];
  memory[key] = value;

  debug('shared memory set: %O set from %O => %O', key, oldValue, value);
}

/**
 * Resets shared memory to its initial state (except `asyncLocalStorage` and
 * `asyncLocalStores`).
 *
 * Note that, in a multitenancy context, only the current tenant's shared memory
 * will be reset unless `clearAsyncLocalStores` is enabled. Also note that, in a
 * multitenancy context, clearing the current tenant's shared memory using this
 * function **will have no effect within the current async scope**. That is: the
 * "reset" **will not be visible to the caller of this function** (i.e. they'll
 * still have full access to the old shared memory as if nothing changed) until
 * the tenant re-enters a relevant async scope at some later point.
 *
 * **WARNING:** this will also set `mode` in global memory back to `'singleton'`
 * if it was previously set to `'multitenant'`.
 *
 * @internal
 */
export function resetSharedMemory({
  clearAsyncLocalStores = false
}: {
  /**
   * If `true`, all the stores used by the `asyncLocalStorage` will be deleted,
   * resulting in a _complete_ reset of relevant system state.
   *
   * This is tantamount to calling `resetSharedMemory` across every tenant in a
   * multitenancy configuration. However, note that currently-executing async
   * workloads, which will still have their store in scope when the reset
   * happens, will retain their stores until they exit said scope.
   *
   * @default false
   */
  clearAsyncLocalStores?: boolean;
} = {}) {
  debug('resetting shared memory reset to blank state...');

  const { asyncLocalStores } = getSharedMemoryFromGlobalRuntime({
    reset: true,
    doForcedMultitenancyCheck: false
  });

  if (clearAsyncLocalStores) {
    asyncLocalStores.clear();
  }
}

/**
 * Returns a brand new copy of the initial state of shared memory object.
 *
 * It is usually not very useful to call this function directly. Prefer
 * {@link getFromSharedMemory}, {@link setToSharedMemory}, and
 * {@link resetSharedMemory} over this function.
 *
 * Note that the `asyncLocalStorage` and `asyncLocalStores` properties, once set
 * in global singleton memory, will strictly equal all past instances of
 * themselves. This is true even in the object returned by this function. This
 * means there is only ever one {@link AsyncLocalStorage} instance in play per
 * runtime.
 *
 * @internal
 */
export function getInitialSharedMemoryState(tenantId?: string): SharedMemory {
  const global = globalThis as unknown as { [$memorySymbol]?: SharedMemory };
  const { asyncLocalStorage, asyncLocalStores } = global[$memorySymbol] || {};

  debug('created new initial shared memory state');

  return {
    client: undefined,
    databases: {},
    schema: undefined,
    dummy: undefined,
    mode: 'singleton',
    asyncLocalStorage: asyncLocalStorage ?? new AsyncLocalStorage(),
    asyncLocalStores: asyncLocalStores ?? new Map(),
    asyncLocalTenantId: tenantId
  };
}

/**
 * Prefer {@link getFromSharedMemory}, {@link setToSharedMemory}, and
 * {@link resetSharedMemory} over this function.
 *
 * This function should only be used when needing to avoid multitenancy checks,
 * which is only necessary when manipulating `asyncLocalStorage` or
 * `asyncLocalStores` directly.
 *
 * @internal
 */
export function getSharedMemoryFromGlobalRuntime({
  reset = false,
  doForcedMultitenancyCheck
}: {
  /**
   * If `true`, global memory will be wiped with respect to the current `mode`
   * setting. A newly constructed memory object instance will be
   * returned.
   */
  reset?: boolean;
  /**
   * If `true` and this function is called outside of an appropriate
   * AsyncLocalStorage context when `mode` in global memory is `'multitenant'`,
   * this function will throw.
   */
  doForcedMultitenancyCheck: boolean;
}) {
  const global = globalThis as unknown as { [$memorySymbol]?: SharedMemory };
  const globalSharedMemory = (global[$memorySymbol] ??= getInitialSharedMemoryState());

  const { asyncLocalStorage, asyncLocalStores } = globalSharedMemory;
  const localSharedMemory = asyncLocalStorage.getStore();

  let sharedMemoryToReturn: SharedMemory;

  if (localSharedMemory) {
    if (reset) {
      debug.message(
        'reset local multitenant memory object from previous value: %O',
        localSharedMemory
      );

      assert(localSharedMemory.asyncLocalTenantId, ErrorMessage.MissingTenantId());

      sharedMemoryToReturn = getInitialSharedMemoryState(
        localSharedMemory.asyncLocalTenantId
      );

      asyncLocalStores.set(localSharedMemory.asyncLocalTenantId, sharedMemoryToReturn);
    } else {
      debug('retrieved local multitenant memory object');
      sharedMemoryToReturn = localSharedMemory;
    }
  } else if (doForcedMultitenancyCheck && globalSharedMemory.mode === 'multitenant') {
    throw new Error(ErrorMessage.IllegalAccessOfSingleton());
  } else {
    if (reset) {
      debug.message(
        'reset global singleton memory object from previous value: %O',
        global[$memorySymbol]
      );

      sharedMemoryToReturn = global[$memorySymbol] = getInitialSharedMemoryState();
    } else {
      debug('retrieved global singleton memory object');
      sharedMemoryToReturn = globalSharedMemory;
    }
  }

  return sharedMemoryToReturn;
}
