import { MongoClient } from 'mongodb';

import { resetSharedMemory } from 'multiverse+shared:memory.ts';

import {
  closeClient,
  destroyDb,
  getAliasFromName,
  getClient,
  getDb,
  getNameFromAlias,
  getSchemaConfig,
  initializeDb,
  setSchemaConfig
} from 'universe+mongo-schema';

import { ErrorMessage } from 'universe+mongo-schema:error.ts';

import {
  asMocked,
  makeMockedMongoConnectMethod,
  mockEnvFactory
} from 'testverse:util.ts';

import type { DbSchema } from 'universe+mongo-schema';
import type { TestDbResult } from 'testverse:util.ts';

jest.mock('mongodb');

const withMockedEnv = mockEnvFactory({ NODE_ENV: 'test' });
const mockMongoClient = asMocked(MongoClient);

const expectedSchema: DbSchema = {
  databases: {
    'fake-db-1': {
      collections: ['col']
    },

    'fake-db-2': {
      collections: [
        'col-1',
        { name: 'col-2', createOptions: { capped: true } },
        { name: 'col-3', indices: [{ spec: 'some-key' }] },
        {
          name: 'col-4',
          indices: [{ spec: ['some-key', -1], options: { comment: '' } }]
        }
      ]
    },

    'fake-db-3': {
      collections: ['col']
    }
  },
  aliases: {
    'fake-alias-1': 'fake-db-1',
    'fake-alias-2': 'fake-db-2',
    'fake-alias-3': 'fake-db-2'
  }
};

beforeEach(() => {
  setSchemaConfig(() => expectedSchema);
  mockMongoClient.connect = makeMockedMongoConnectMethod();
});

afterEach(() => {
  resetSharedMemory();
});

describe('::getSchemaConfig', () => {
  it('dynamically imports customizations', async () => {
    expect.hasAssertions();

    expect(getSchemaConfig()).toStrictEqual(expectedSchema);
  });

  it('rejects if customizations are unavailable', async () => {
    expect.hasAssertions();

    resetSharedMemory();
    expect(() => getSchemaConfig()).toThrow(ErrorMessage.NoSchemaConfigured());
  });
});

describe('::getClient', () => {
  it("creates client if it doesn't already exist", async () => {
    expect.hasAssertions();

    await withMockedEnv(
      async () => {
        const client = await getClient();
        await expect(getClient()).resolves.toBe(client);
        expect(mockMongoClient.connect).toHaveBeenCalledTimes(1);
        expect(client.close()).toBe('abc');
      },
      { MONGODB_URI: 'abc' }
    );
  });
});

describe('::getDb', () => {
  it("creates db and connection if it doesn't already exist", async () => {
    expect.hasAssertions();

    await withMockedEnv(
      async () => {
        expect(mockMongoClient.connect).toHaveBeenCalledTimes(0);
        const db = await getDb({ name: 'fake-db-1' });
        await expect(getDb({ name: 'fake-db-1' })).resolves.toBe(db);
        expect(mockMongoClient.connect).toHaveBeenCalledTimes(1);
        await expect(getDb({ name: 'fake-db-2' })).resolves.not.toBe(db);
        expect(mockMongoClient.connect).toHaveBeenCalledTimes(1);
        expect(db.databaseName).toBe('fake-db-1');
      },
      { MONGODB_URI: 'abc' }
    );
  });

  it('automatically initializes newly created databases unless initialize is false', async () => {
    expect.hasAssertions();

    await withMockedEnv(
      async () => {
        const db = await getDb({ name: 'fake-db-1', initialize: false });
        expect(db.createCollection).not.toHaveBeenCalled();
        await getDb({ name: 'fake-db-1' });
        expect(db.createCollection).not.toHaveBeenCalled();
        const db2 = await getDb({ name: 'fake-db-2' });
        expect(db2.createCollection).toHaveBeenCalled();
        await getDb({ name: 'fake-db-2' });
        expect(db2.createCollection).toHaveBeenCalled();
      },
      { MONGODB_URI: 'abc' }
    );
  });

  it('returns db using alias', async () => {
    expect.hasAssertions();

    await withMockedEnv(
      async () => {
        const db1 = await getDb({ name: 'fake-db-1' });
        await expect(getDb({ name: 'fake-alias-1' })).resolves.toBe(db1);

        const db2 = await getDb({ name: 'fake-alias-2' });
        await expect(getDb({ name: 'fake-db-2' })).resolves.toBe(db2);
      },
      { MONGODB_URI: 'abc' }
    );
  });
});

describe('::closeClient', () => {
  it('closes client and deletes memory', async () => {
    expect.hasAssertions();

    await withMockedEnv(
      async () => {
        const client = await getClient();
        await expect(getClient()).resolves.toBe(client);
        await closeClient();
        await expect(getClient()).resolves.not.toBe(client);
      },
      { MONGODB_URI: 'abc' }
    );
  });
});

describe('::destroyDb', () => {
  it('drops database', async () => {
    expect.hasAssertions();

    await withMockedEnv(
      async () => {
        const db = await getDb({ name: 'fake-db-1' });
        expect(db.dropDatabase).toHaveBeenCalledTimes(0);
        await destroyDb({ name: 'fake-db-2' });
        expect(db.dropDatabase).toHaveBeenCalledTimes(0);
        await destroyDb({ name: 'fake-db-1' });
        expect(db.dropDatabase).toHaveBeenCalledTimes(1);
      },
      { MONGODB_URI: 'abc' }
    );
  });
});

describe('::getNameFromAlias', () => {
  it('returns an actual database name', async () => {
    expect.hasAssertions();

    expect(getNameFromAlias('fake-alias-2')).toBe('fake-db-2');
  });

  it('passes through actual database name if given', async () => {
    expect.hasAssertions();

    expect(getNameFromAlias('fake-db-3')).toBe('fake-db-3');
  });

  it('throws if database is not in schema', async () => {
    expect.hasAssertions();

    expect(() => getNameFromAlias('fake-alias-x')).toThrow(
      ErrorMessage.UnknownDatabaseAlias('fake-alias-x')
    );
  });
});

describe('::getAliasFromName', () => {
  it('returns one or more aliases', async () => {
    expect.hasAssertions();

    expect(getAliasFromName('fake-db-1')).toStrictEqual(['fake-alias-1']);

    expect(getAliasFromName('fake-db-2')).toStrictEqual([
      'fake-alias-2',
      'fake-alias-3'
    ]);
  });

  it('passes through actual database name if given', async () => {
    expect.hasAssertions();

    expect(getAliasFromName('fake-db-3')).toStrictEqual(['fake-db-3']);
  });

  it('throws if database is not in schema', async () => {
    expect.hasAssertions();
    expect(() => getAliasFromName('fake-alias-3')).toThrow(
      ErrorMessage.UnknownDatabaseAlias('fake-alias-3')
    );
  });
});

describe('::initializeDb', () => {
  it("initializes a database's collections according to schema", async () => {
    expect.hasAssertions();

    await withMockedEnv(
      async () => {
        const schema = getSchemaConfig();
        const db1 = await getDb({ name: 'fake-db-1' });
        const db2 = await getDb({ name: 'fake-db-2' });

        await initializeDb({ name: 'fake-db-1' });
        await initializeDb({ name: 'fake-db-2' });

        schema.databases['fake-db-1']!.collections.forEach((col) => {
          expect(db1.createCollection).toHaveBeenCalledWith(
            ...(typeof col === 'string'
              ? [col, undefined]
              : [col.name, col.createOptions])
          );
        });

        schema.databases['fake-db-2']!.collections.forEach((col) => {
          if (typeof col === 'string') {
            expect(db2.createCollection).toHaveBeenCalledWith(col, undefined);
          } else {
            expect(db2.createCollection).toHaveBeenCalledWith(
              col.name,
              col.createOptions
            );

            if (col.indices) {
              col.indices.forEach((spec) =>
                expect((db2 as TestDbResult).createIndex_).toHaveBeenCalledWith(
                  spec.spec,
                  spec.options || {}
                )
              );
            }
          }
        });
      },
      { MONGODB_URI: 'abc' }
    );
  });
});
