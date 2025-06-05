import assert from 'node:assert';
import inspector from 'node:inspector';

import { mockDateNowMs } from '@-xun/jest';

import {
  closeClient,
  destroyDb,
  getAliasFromName,
  getDb,
  getNameFromAlias,
  getSchemaConfig,
  initializeDb,
  setSchemaConfig
} from '@-xun/mongo-schema';

import { getEnv } from '@-xun/next-env';
import { MongoClient, ObjectId } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { createDebugLogger } from 'rejoinder';

import { getFromSharedMemory, setToSharedMemory } from 'multiverse+shared:memory.ts';

import { ErrorMessage } from 'universe+mongo-test:error.ts';

import type { Document } from 'mongodb';
import type { Functionable } from 'multiverse+shared:memory.ts';
import type { DbSchema, DummyData } from 'multiverse+shared:schema.ts';

const debug = createDebugLogger({ namespace: 'mongo-test' });

export type { DummyData, Functionable };

/**
 * Sets global dummy data singleton (which already includes some built-in
 * defaults).
 *
 * This function must be called before any call to `getDummyData` or an error
 * will be thrown.
 */
export function setDummyData(schemaFn: Functionable<DummyData>) {
  debug('setting schema configuration to memory');
  setToSharedMemory('dummy', schemaFn);
}

/**
 * Imports `getDummyData` from "configverse/get-dummy-data" and calls it.
 */
export function getDummyData(): DummyData {
  debug('returning schema configuration from memory');

  const data = getFromSharedMemory('dummy');
  assert(data, ErrorMessage.NoDummyConfigured());

  return data;
}

/**
 * Fill an initialized database with data. You should call {@link initializeDb}
 * before calling this function.
 */
export async function hydrateDbWithDummyData({
  name
}: {
  /**
   * The name or alias of the database to hydrate.
   */
  name: string;
}) {
  const db = await getDb({ name });
  const nameActual = getNameFromAlias(name);
  const aliases = getAliasFromName(nameActual);

  debug(`hydrating database ${nameActual}`);

  const rawDummyData = getDummyData();
  let dummyData = rawDummyData[nameActual];

  if (aliases[0] !== nameActual) {
    const foundAliases = aliases.filter((alias) => !!rawDummyData[alias]);

    if (foundAliases.length > 1) {
      throw new Error(ErrorMessage.DuplicateAliasSpecifications(foundAliases));
    }

    const alias = foundAliases[0];

    if (alias) {
      if (dummyData) {
        throw new Error(ErrorMessage.DuplicateDatabaseSpecifications(nameActual, alias));
      }

      debug(`(using alias "${alias}")`);
      dummyData = rawDummyData[alias];
    }
  }

  if (!dummyData) {
    throw new Error(ErrorMessage.NoDummyData(nameActual));
  }

  // ? We know for a fact that nameActual is in databases at this point
  const collectionNames = getSchemaConfig().databases[nameActual]!.collections.map(
    (col) => (typeof col === 'string' ? col : col.name)
  );

  await Promise.all(
    Object.entries(dummyData).map(([colName, colSchema]) => {
      if (colName !== '_generatedAt') {
        if (!collectionNames.includes(colName)) {
          throw new Error(ErrorMessage.NoDummyDataCollection(nameActual, colName));
        }

        return db.collection(colName).insertMany([colSchema].flat() as Document[]);
      }
    })
  );
}

/**
 * Setup per-test versions of the mongodb client and database connections using
 * jest lifecycle hooks.
 *
 * **WARNING:** if calling `setSchemaConfig` or `setDummyData` manually, it must
 * be called _before_ `setupMemoryServerOverride`!
 */
export function setupMemoryServerOverride({
  defer,
  schema,
  data
}: {
  /**
   * If `true`, the `beforeEach` and `afterEach` lifecycle hooks are skipped and
   * the database is initialized and hydrated once before all tests are run.
   * **In this mode, all tests will share the same database state!**
   *
   * @default false
   */
  defer?: boolean;
  /**
   * Passed to `setSchemaConfig` at the appropriate point: during
   * `jest.beforeEach` and `jest.beforeAll` but before this function interacts
   * with the database.
   *
   * This data is only written once during `jest.beforeAll` if `defer` is
   * `true`.
   *
   * If calling `setSchemaConfig` manually, it must be called _before_
   * `setupMemoryServerOverride`!
   */
  schema?: Functionable<DbSchema>;
  /**
   * Passed to `setDummyData` at the appropriate point: during `jest.beforeEach`
   * and `jest.beforeAll` but before this function interacts with the database.
   *
   * This data is only written once during `jest.beforeAll` if `defer` is
   * `true`.
   *
   * If calling `setDummyData` manually, it must be called _before_
   * `setupMemoryServerOverride`!
   */
  data?: Functionable<DummyData>;
} = {}) {
  // ? If an error (like a bad schema config or misconfigured dummy dataset)
  // ? occurs at any point (e.g. in one of the hooks), the other hooks should
  // ? become noops. Without this, test database state may leak outside the test
  // ? environment. If an .env file is defined, test state could leak into a
  // ? real mongodb instance (super bad!!!)
  let errored = false;

  const debugPort = getEnv().MONGODB_MS_PORT;
  const port =
    // * https://stackoverflow.com/a/67445850/1367414
    debugPort && (getEnv().DEBUG_INSPECTING || inspector.url() !== undefined)
      ? debugPort
      : undefined;

  debug(`using ${port ? `port ${port}` : 'random port'} for mongo memory server`);

  // * The in-memory server is not started until it's needed later on
  const server = new MongoMemoryServer({
    instance: {
      port
      // ? MongoDB errors WITHOUT this line as of version 4.x
      // ? However, MongoDB errors WITH this line as of version 5.x 🙃
      // args: ['--enableMajorityReadConcern=0']
    }
  });

  /**
   * Reset the dummy MongoDb server databases back to their initial states.
   */
  const reinitializeServer = async () => {
    try {
      if (errored) {
        debug.warn(
          'reinitialization was skipped due to a previous jest lifecycle errors'
        );
      } else {
        const databases = Object.keys(getSchemaConfig().databases);
        debug('reinitializing mongo databases');
        await Promise.all(
          databases.map((name) =>
            destroyDb({ name })
              .then(() => initializeDb({ name }))
              .then(() => hydrateDbWithDummyData({ name }))
          )
        );
      }
    } catch (error) {
      errored = true;
      debug.error('an error occurred during reinitialization');
      throw error;
    }
  };

  beforeAll(async () => {
    try {
      if (errored) {
        debug.warn('"beforeAll" jest lifecycle hook was skipped due to previous errors');
      } else {
        setSchemaAndData();
        await server.ensureInstance();
        const uri = server.getUri();
        debug(`connecting to in-memory dummy mongo server at ${uri}`);

        if (port && !(uri.endsWith(`:${port}`) || uri.endsWith(`:${port}/`))) {
          throw new Error(ErrorMessage.PortUnavailable(port));
        }

        setToSharedMemory('client', await MongoClient.connect(uri));
        if (defer) await reinitializeServer();
      }
    } catch (error) {
      errored = true;
      debug.error('an error occurred within "beforeAll" lifecycle hook');
      throw error;
    }
  });

  if (!defer) {
    beforeEach(async () => {
      setSchemaAndData();
      await reinitializeServer();
    });
  }

  afterAll(async () => {
    await closeClient();
    await server.stop({ doCleanup: true, force: true });
  });

  return {
    /**
     * Reset the dummy MongoDb server databases back to their initial states.
     */
    reinitializeServer,
    schema,
    data
  };

  function setSchemaAndData() {
    if (schema) {
      setSchemaConfig(typeof schema === 'function' ? schema : () => schema);
    }

    if (data) {
      setDummyData(typeof data === 'function' ? data : () => data);
    }
  }
}

/**
 * Creates an {@link ObjectId} by explicitly passing `mockDateNowMs` as
 * the inception time, which is the same thing that {@link ObjectId} does
 * internally with the real `Date.now`.
 *
 * **This should only be used in modules with import side-effects that execute
 * before `useMockDateNow` is called** later in downstream code. If you are
 * unsure, you probably don't need to use this function and should just create a
 * new {@link ObjectId} instead.
 *
 * The point of this function is to avoid race conditions when mocking parts of
 * the {@link Date} object that _sometimes_ result in _later_ calls to
 * {@link ObjectId} generating IDs that were _less_ than the IDs generated
 * _before_ it.
 */
export function generateMockSensitiveObjectId() {
  // * Adopted from ObjectId::generate function. Turns out this is the cause of
  // * some flakiness with tests where order is determined by ObjectId.
  // ? The "replacement" for the deprecated constructor returns something else
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  return new ObjectId(Math.floor(mockDateNowMs / 1000));
}
