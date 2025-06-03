import { createDebugLogger } from 'rejoinder';

import type { Db, MongoClient } from 'mongodb';
import type { DbSchema, DummyData } from 'universe+shared:schema.ts';

const $memorySymbol = Symbol.for('@-xun/mongo:memory');
const global = globalThis as unknown as { [$memorySymbol]?: SharedMemory };
const debug = createDebugLogger({ namespace: 'mongo-shared:memory' });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Functionable<T> = T | ((...args: any[]) => T);

/**
 * A shared cache of connection, server schema, and database state.
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
  schema: Functionable<DbSchema> | undefined;
  /**
   * Memoized dummy data.
   */
  dummy: Functionable<DummyData> | undefined;
};

const functionableKeys: (keyof SharedMemory)[] = ['dummy', 'schema'];

/**
 * Retrieves a value from shared memory.
 */
export function getFromSharedMemory<T extends keyof SharedMemory>(key: T) {
  let value = getSharedMemoryContainer()[key];

  if (functionableKeys.includes(key) && typeof value === 'function') {
    debug.message('invoking shared memory value function');
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
 */
export function setToSharedMemory<T extends keyof SharedMemory>(
  key: T,
  value: SharedMemory[T]
) {
  const memory = getSharedMemoryContainer();
  const oldValue = memory[key];
  memory[key] = value;

  debug('shared memory set: %O set from %O => %O', key, oldValue, value);
}

/**
 * Resets shared memory to its initial state.
 */
export function resetSharedMemory() {
  debug('shared memory reset to blank state (was: %O)', global[$memorySymbol]);

  global[$memorySymbol] = undefined;
  getSharedMemoryContainer();
}

/**
 * Returns a copy of the initial state of shared memory.
 */
function getInitialSharedMemoryState(): SharedMemory {
  debug('created new initial shared memory state');
  return {
    client: undefined,
    databases: {},
    schema: undefined,
    dummy: undefined
  };
}

function getSharedMemoryContainer() {
  return (global[$memorySymbol] ??= getInitialSharedMemoryState());
}
