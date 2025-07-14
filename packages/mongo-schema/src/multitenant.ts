import { createDebugLogger } from 'rejoinder';

import {
  getInitialSharedMemoryState,
  getSharedMemoryFromGlobalRuntime
} from 'multiverse+shared:memory.ts';

import type { SharedMemory } from 'multiverse+shared:memory.ts';

const debug = createDebugLogger({ namespace: 'mongo-schema:multitenant' });

/**
 * When this function is called, invocations of any function export of the
 * `@-xun/mongo-*` package must be wrapped by
 * {@link runWithMongoSchemaMultitenancy} or an error will be thrown.
 *
 * **This function must be called as early as possible** and certainly before
 * any other imports from `@-xun/mongo-*` are invoked.
 *
 * If `setupForcedMultitenancyOverride` is not called but
 * {@link runWithMongoSchemaMultitenancy} is used anyway, invocations to
 * `@-xun/mongo-*` exports that are not wrapped by
 * {@link runWithMongoSchemaMultitenancy} will fall back on the default
 * runtime-global shared singleton instead of throwing an error. This can lead
 * to confusion and should generally be avoided, hence the existence of this
 * function.
 *
 * Multitenant mode is useful when writing an application with multiple
 * instances of `@-xun/mongo-*` packages nested deep in their dependency trees
 * that, when taken together, require two or more disparate configurations (i.e.
 * different schemas, different dummy data). This is beyond what is possible
 * with a runtime-global shared singleton.
 *
 * @see {@link runWithMongoSchemaMultitenancy}
 */
export function setupForcedMultitenancyOverride(mode: SharedMemory['mode']) {
  const globalSharedMemory = getSharedMemoryFromGlobalRuntime({
    doForcedMultitenancyCheck: false
  });

  debug(
    'internal shared memory mode set to: %O (was: %O)',
    mode,
    globalSharedMemory.mode
  );

  globalSharedMemory.mode = mode;
}

/**
 * This function runs `@-xun/mongo-*` functions called within `runtime` using a
 * separate global memory from the same functions called outside of `runtime`.
 *
 * This is useful when running multiple `@-xun/mongo-*` with disparate global
 * configurations within the same JavaScript runtime environment, since it lets
 * each group of calls to setup and use its own version of "global" "shared"
 * configuration.
 *
 * Invoking this function multiple times with the same `tenantId` each
 * invocation will reuse the respective "global shared" configuration first
 * created for said identifier. This means different invocations of
 * `runWithMongoSchemaMultitenancy` using the same `tenantId` will also share
 * the same "global" configuration.
 *
 * @see {@link setupForcedMultitenancyOverride}
 */
export async function runWithMongoSchemaMultitenancy(
  tenantId: string,
  runtime: () => Promise<void>
) {
  const initialStore = getInitialSharedMemoryState(tenantId);
  let localStore = initialStore.asyncLocalStores.get(tenantId);

  if (!localStore) {
    localStore = initialStore;
    localStore.asyncLocalStores.set(tenantId, localStore);
    debug.message('new local store created for tenant %O', tenantId);
  } else {
    debug('previous local store reused for tenant %O', tenantId);
  }

  debug('calling runtime callback with store: %O', localStore);
  return localStore.asyncLocalStorage.run(localStore, () => {
    return runtime();
  });
}
