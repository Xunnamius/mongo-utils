/* eslint-disable jest/unbound-method */
import { safeDeepClone } from '@-xun/js';
import { getDb, getSchemaConfig, setSchemaConfig } from '@-xun/mongo-schema';
import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { toss } from 'toss-expression';

import { resetSharedMemory } from 'multiverse+shared:memory.ts';

import {
  generateMockSensitiveObjectId,
  getDummyData,
  hydrateDbWithDummyData,
  setDummyData,
  setupMemoryServerOverride
} from 'universe+mongo-test';

import { ErrorMessage } from 'universe+mongo-test:error.ts';

import {
  asMocked,
  makeMockedMongoConnectMethod,
  mockDateNowMs,
  mockEnvFactory
} from 'testverse:util.ts';

import type { DbSchema } from '@-xun/mongo-schema';
import type { DummyData } from 'multiverse+shared:schema.ts';
import type { TestDbResult } from 'testverse:util.ts';

jest.mock('mongodb');
jest.mock('mongodb-memory-server');

const withMockedEnv = mockEnvFactory({ NODE_ENV: 'test' });

const mockMongoClient = asMocked(MongoClient);
const mockMongoMemoryServer = asMocked(MongoMemoryServer);

const mockedMongoMemoryServer = {
  ensureInstance: jest.fn(),
  getUri: jest.fn(),
  stop: jest.fn()
} as unknown as MongoMemoryServer;

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
    }
  },
  aliases: {
    'fake-alias-1': 'fake-db-1',
    'fake-alias-2': 'fake-db-2',
    'fake-alias-3': 'fake-db-2'
  }
};

const expectedData: DummyData = {
  'fake-db-1': {
    _generatedAt: mockDateNowMs,
    col: [{ item: 1 }, { item: 2 }, { item: 3 }]
  },
  'fake-db-2': {
    _generatedAt: mockDateNowMs,
    'col-1': [{ item: 'a' }, { item: 'b' }]
  }
};

beforeEach(() => {
  setSchemaConfig(() => expectedSchema);
  setDummyData(() => expectedData);

  mockMongoClient.connect = makeMockedMongoConnectMethod();

  asMocked(mockedMongoMemoryServer.getUri).mockImplementation(() => 'mongo-ms-uri:6666');
  mockMongoMemoryServer.mockImplementation(() => mockedMongoMemoryServer);
});

afterEach(() => {
  resetSharedMemory();
});

describe('::getDummyData (and ::setDummyData)', () => {
  it('dynamically imports customizations', async () => {
    expect.hasAssertions();

    expect(getDummyData()).toStrictEqual(expectedData);
  });

  it('rejects if customizations are unavailable', async () => {
    expect.hasAssertions();

    resetSharedMemory();
    expect(() => getDummyData()).toThrow(ErrorMessage.NoDummyConfigured());
  });
});

describe('::hydrateDbWithDummyData', () => {
  it('fills a database with dummy data (multi-item collections)', async () => {
    expect.hasAssertions();

    const db = (await getDb({ name: 'fake-db-1' })) as TestDbResult;

    await expect(hydrateDbWithDummyData({ name: 'fake-db-1' })).resolves.toBeUndefined();

    Object.entries(getDummyData()['fake-db-1']!).forEach(([colName, colData]) => {
      if (colName !== '_generatedAt') {
        expect(db.collection).toHaveBeenCalledWith(colName);
        expect(db.insertMany_).toHaveBeenCalledWith(colData);
      }
    });
  });

  it('handles non-aliased databases with single-item collections', async () => {
    expect.hasAssertions();

    setSchemaConfig(() => {
      return {
        databases: {
          'fake-db-1': {
            collections: ['col']
          }
        },
        aliases: {}
      };
    });

    setDummyData(() => {
      return {
        'fake-db-1': {
          _generatedAt: 0,
          col: { item: 'single', name: 'just-the-one' }
        }
      };
    });

    const db = (await getDb({ name: 'fake-db-1' })) as TestDbResult;

    await expect(hydrateDbWithDummyData({ name: 'fake-db-1' })).resolves.toBeUndefined();

    expect(db.collection).toHaveBeenCalledWith('col');
    expect(db.insertMany_).toHaveBeenCalledWith([getDummyData()['fake-db-1']!.col]);
  });

  it('accepts an alias as a name', async () => {
    expect.hasAssertions();

    const db = (await getDb({ name: 'fake-alias-1' })) as TestDbResult;

    await expect(
      hydrateDbWithDummyData({ name: 'fake-alias-1' })
    ).resolves.toBeUndefined();

    Object.entries(getDummyData()['fake-db-1']!).forEach(([colName, colData]) => {
      if (colName !== '_generatedAt') {
        expect(db.collection).toHaveBeenCalledWith(colName);
        expect(db.insertMany_).toHaveBeenCalledWith(colData);
      }
    });
  });

  it('reverse-maps database name to alias when necessary', async () => {
    expect.hasAssertions();

    setDummyData(() => {
      return {
        'fake-db-1': {
          _generatedAt: mockDateNowMs,
          col: [{ item: 1 }, { item: 2 }, { item: 3 }]
        },
        'fake-alias-3': {
          _generatedAt: mockDateNowMs,
          'col-1': [{ item: 'a' }, { item: 'b' }]
        }
      };
    });

    const db = (await getDb({ name: 'fake-db-2' })) as TestDbResult;

    await expect(hydrateDbWithDummyData({ name: 'fake-db-2' })).resolves.toBeUndefined();

    Object.entries(getDummyData()['fake-alias-3']!).forEach(([colName, colData]) => {
      if (colName !== '_generatedAt') {
        expect(db.collection).toHaveBeenCalledWith(colName);
        expect(db.insertMany_).toHaveBeenCalledWith(colData);
      }
    });
  });

  it('throws if both actual database name and alias represent the same dummy data', async () => {
    expect.hasAssertions();

    setDummyData(() => {
      return {
        'fake-db-1': {
          _generatedAt: mockDateNowMs,
          col: [{ item: 1 }, { item: 2 }, { item: 3 }]
        },
        'fake-db-2': {
          _generatedAt: mockDateNowMs,
          'col-1': [{ item: 'a' }, { item: 'b' }]
        },
        'fake-alias-3': {
          _generatedAt: mockDateNowMs,
          'col-1': [{ item: 'a' }, { item: 'b' }]
        }
      };
    });

    await expect(hydrateDbWithDummyData({ name: 'fake-alias-3' })).rejects.toThrow(
      ErrorMessage.DuplicateDatabaseSpecifications('fake-db-2', 'fake-alias-3')
    );

    await expect(hydrateDbWithDummyData({ name: 'fake-db-2' })).rejects.toThrow(
      ErrorMessage.DuplicateDatabaseSpecifications('fake-db-2', 'fake-alias-3')
    );
  });

  it('throws if two aliases represent the same dummy data', async () => {
    expect.hasAssertions();

    setDummyData(() => {
      return {
        'fake-db-1': {
          _generatedAt: mockDateNowMs,
          col: [{ item: 1 }, { item: 2 }, { item: 3 }]
        },
        'fake-alias-2': {
          _generatedAt: mockDateNowMs,
          'col-1': [{ item: 'a' }, { item: 'b' }]
        },
        'fake-alias-3': {
          _generatedAt: mockDateNowMs,
          'col-1': [{ item: 'a' }, { item: 'b' }]
        }
      };
    });

    await expect(hydrateDbWithDummyData({ name: 'fake-alias-2' })).rejects.toThrow(
      ErrorMessage.DuplicateAliasSpecifications(['fake-alias-2', 'fake-alias-3'])
    );

    await expect(hydrateDbWithDummyData({ name: 'fake-alias-3' })).rejects.toThrow(
      ErrorMessage.DuplicateAliasSpecifications(['fake-alias-2', 'fake-alias-3'])
    );
  });

  it('throws if database in schema has no corresponding dummy data', async () => {
    expect.hasAssertions();

    setSchemaConfig(() => {
      return {
        databases: {
          'fake-db-2': {
            collections: ['col']
          }
        },
        aliases: {}
      };
    });

    setDummyData(() => {
      return {
        'fake-db-1': {
          _generatedAt: 0,
          col: { item: 'single', name: 'just-the-one' }
        }
      };
    });

    await expect(hydrateDbWithDummyData({ name: 'fake-db-2' })).rejects.toThrow(
      ErrorMessage.NoDummyData('fake-db-2')
    );
  });

  it('throws if collection referenced in dummy data is not in schema', async () => {
    expect.hasAssertions();

    const expectedData_ = safeDeepClone(expectedData);
    expectedData_['fake-db-2']!['col-does-not-exist'] = [{ fake: true }];

    setDummyData(() => expectedData_);

    await expect(hydrateDbWithDummyData({ name: 'fake-db-2' })).rejects.toThrow(
      ErrorMessage.NoDummyDataCollection('fake-db-2', 'col-does-not-exist')
    );
  });
});

describe('::setupMemoryServerOverride', () => {
  it('registers jest hooks with respect to defer', async () => {
    expect.hasAssertions();

    const oldBeforeAll = beforeAll;
    const oldBeforeEach = beforeEach;
    const oldAfterAll = afterAll;

    try {
      // eslint-disable-next-line no-global-assign
      beforeAll = jest.fn();

      // eslint-disable-next-line no-global-assign
      beforeEach = jest.fn();

      // eslint-disable-next-line no-global-assign
      afterAll = jest.fn();

      setupMemoryServerOverride();

      expect(beforeAll).toHaveBeenCalledTimes(1);
      expect(beforeEach).toHaveBeenCalledTimes(1);
      expect(afterAll).toHaveBeenCalledTimes(1);

      setupMemoryServerOverride({ defer: true });

      expect(beforeAll).toHaveBeenCalledTimes(2);
      expect(beforeEach).toHaveBeenCalledTimes(2);
      expect(afterAll).toHaveBeenCalledTimes(2);

      setupMemoryServerOverride({ defer: 'without-hooks' });

      expect(beforeAll).toHaveBeenCalledTimes(3);
      expect(beforeEach).toHaveBeenCalledTimes(3);
      expect(afterAll).toHaveBeenCalledTimes(3);
    } finally {
      // eslint-disable-next-line no-global-assign
      beforeAll = oldBeforeAll;

      // eslint-disable-next-line no-global-assign
      beforeEach = oldBeforeEach;

      // eslint-disable-next-line no-global-assign
      afterAll = oldAfterAll;
    }
  });

  it('runs appropriate functionality at the appropriate points with and without args', async () => {
    expect.hasAssertions();

    const oldBeforeAll = beforeAll;
    const oldBeforeEach = beforeEach;
    const oldAfterAll = afterAll;

    try {
      await withMockedEnv(async () => {
        const { default: library } = await import('@-xun/mongo-schema');
        const { default: testLibrary } = await import('universe+mongo-test');

        const destroySpy = jest
          .spyOn(library, 'destroyDb')
          .mockImplementation(async () => true);

        const initializeDbSpy = jest
          .spyOn(library, 'initializeDb')
          .mockImplementation(async () => undefined);

        const hydrateDbWithDummyDataSpy = jest
          .spyOn(testLibrary, 'hydrateDbWithDummyData')
          .mockImplementation(async () => undefined);

        const closeClientSpy = jest
          .spyOn(library, 'closeClient')
          .mockImplementation(async () => undefined);

        const databaseNames = Object.keys(expectedSchema.databases);

        // eslint-disable-next-line no-global-assign
        beforeAll = jest.fn();

        // eslint-disable-next-line no-global-assign
        beforeEach = jest.fn();

        // eslint-disable-next-line no-global-assign
        afterAll = jest.fn();

        resetSharedMemory();

        expect(() => getSchemaConfig()).toThrow();
        expect(() => getDummyData()).toThrow();

        expect(beforeAll).toHaveBeenCalledTimes(0);
        expect(beforeEach).toHaveBeenCalledTimes(0);
        expect(afterAll).toHaveBeenCalledTimes(0);

        // * Mode: default

        {
          setupMemoryServerOverride({
            schema: expectedSchema,
            data: expectedData
          });

          // ? No lifecycle hooks have been invoked yet
          expect(() => getSchemaConfig()).toThrow();
          expect(() => getDummyData()).toThrow();

          expect(beforeAll).toHaveBeenCalledTimes(1);
          expect(beforeEach).toHaveBeenCalledTimes(1);
          expect(afterAll).toHaveBeenCalledTimes(1);

          expect(destroySpy).not.toHaveBeenCalled();
          expect(initializeDbSpy).not.toHaveBeenCalled();
          expect(hydrateDbWithDummyDataSpy).not.toHaveBeenCalled();

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          await asMocked(beforeAll).mock.calls[0]![0](
            undefined as unknown as jest.DoneCallback
          );

          expect(() => getSchemaConfig()).not.toThrow();
          expect(() => getDummyData()).not.toThrow();

          expect(destroySpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(initializeDbSpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(hydrateDbWithDummyDataSpy).toHaveBeenCalledTimes(databaseNames.length);

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          await asMocked(beforeEach).mock.calls[0]![0](
            undefined as unknown as jest.DoneCallback
          );

          expect(destroySpy).toHaveBeenCalledTimes(2 * databaseNames.length);
          expect(initializeDbSpy).toHaveBeenCalledTimes(2 * databaseNames.length);
          expect(hydrateDbWithDummyDataSpy).toHaveBeenCalledTimes(
            2 * databaseNames.length
          );

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          await asMocked(afterAll).mock.calls[0]![0](
            undefined as unknown as jest.DoneCallback
          );

          expect(destroySpy).toHaveBeenCalledTimes(2 * databaseNames.length);
          expect(initializeDbSpy).toHaveBeenCalledTimes(2 * databaseNames.length);
          expect(hydrateDbWithDummyDataSpy).toHaveBeenCalledTimes(
            2 * databaseNames.length
          );

          expect(closeClientSpy).toHaveBeenCalledTimes(1);
          expect(asMocked(mockedMongoMemoryServer.stop)).toHaveBeenCalledTimes(1);
        }

        // * Mode: `defer: true`

        {
          asMocked(beforeAll).mockClear();
          asMocked(beforeEach).mockClear();
          asMocked(afterAll).mockClear();
          destroySpy.mockClear();
          initializeDbSpy.mockClear();
          hydrateDbWithDummyDataSpy.mockClear();
          closeClientSpy.mockClear();
          asMocked(mockedMongoMemoryServer.stop).mockClear();
          resetSharedMemory();

          setupMemoryServerOverride({
            schema: expectedSchema,
            data: expectedData,
            defer: true
          });

          // ? No lifecycle hooks have been invoked yet
          expect(() => getSchemaConfig()).toThrow();
          expect(() => getDummyData()).toThrow();

          expect(beforeAll).toHaveBeenCalledTimes(1);
          expect(beforeEach).toHaveBeenCalledTimes(1);
          expect(afterAll).toHaveBeenCalledTimes(1);

          expect(destroySpy).not.toHaveBeenCalled();
          expect(initializeDbSpy).not.toHaveBeenCalled();
          expect(hydrateDbWithDummyDataSpy).not.toHaveBeenCalled();

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          await asMocked(beforeAll).mock.calls[0]![0](
            undefined as unknown as jest.DoneCallback
          );

          expect(destroySpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(initializeDbSpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(hydrateDbWithDummyDataSpy).toHaveBeenCalledTimes(databaseNames.length);

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          await asMocked(beforeEach).mock.calls[0]![0](
            undefined as unknown as jest.DoneCallback
          );

          expect(destroySpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(initializeDbSpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(hydrateDbWithDummyDataSpy).toHaveBeenCalledTimes(databaseNames.length);

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          await asMocked(afterAll).mock.calls[0]![0](
            undefined as unknown as jest.DoneCallback
          );

          expect(destroySpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(initializeDbSpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(hydrateDbWithDummyDataSpy).toHaveBeenCalledTimes(databaseNames.length);

          expect(closeClientSpy).toHaveBeenCalledTimes(1);
          expect(asMocked(mockedMongoMemoryServer.stop)).toHaveBeenCalledTimes(1);

          expect(() => getSchemaConfig()).not.toThrow();
          expect(() => getDummyData()).not.toThrow();
        }

        // * Mode: `defer: 'without-hooks'`

        {
          asMocked(beforeAll).mockClear();
          asMocked(beforeEach).mockClear();
          asMocked(afterAll).mockClear();
          destroySpy.mockClear();
          initializeDbSpy.mockClear();
          hydrateDbWithDummyDataSpy.mockClear();
          closeClientSpy.mockClear();
          asMocked(mockedMongoMemoryServer.stop).mockClear();
          resetSharedMemory();

          const {
            initializeMemoryServerOverride,
            reinitializeServerDatabases,
            killMemoryServerOverride
          } = setupMemoryServerOverride({
            schema: expectedSchema,
            data: expectedData,
            defer: 'without-hooks'
          });

          // ? No lifecycle hooks have been invoked yet
          expect(() => getSchemaConfig()).toThrow();
          expect(() => getDummyData()).toThrow();

          expect(destroySpy).not.toHaveBeenCalled();
          expect(initializeDbSpy).not.toHaveBeenCalled();
          expect(hydrateDbWithDummyDataSpy).not.toHaveBeenCalled();

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          await asMocked(beforeAll).mock.calls[0]![0](
            undefined as unknown as jest.DoneCallback
          );

          expect(destroySpy).not.toHaveBeenCalled();
          expect(initializeDbSpy).not.toHaveBeenCalled();
          expect(hydrateDbWithDummyDataSpy).not.toHaveBeenCalled();

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          await asMocked(beforeEach).mock.calls[0]![0](
            undefined as unknown as jest.DoneCallback
          );

          expect(destroySpy).not.toHaveBeenCalled();
          expect(initializeDbSpy).not.toHaveBeenCalled();
          expect(hydrateDbWithDummyDataSpy).not.toHaveBeenCalled();

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          await asMocked(afterAll).mock.calls[0]![0](
            undefined as unknown as jest.DoneCallback
          );

          expect(destroySpy).not.toHaveBeenCalled();
          expect(initializeDbSpy).not.toHaveBeenCalled();
          expect(hydrateDbWithDummyDataSpy).not.toHaveBeenCalled();

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          // ? Still not available yet in this mode
          expect(() => getSchemaConfig()).toThrow();
          expect(() => getDummyData()).toThrow();

          await initializeMemoryServerOverride();

          expect(destroySpy).not.toHaveBeenCalled();
          expect(initializeDbSpy).not.toHaveBeenCalled();
          expect(hydrateDbWithDummyDataSpy).not.toHaveBeenCalled();

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          await reinitializeServerDatabases();

          expect(destroySpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(initializeDbSpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(hydrateDbWithDummyDataSpy).toHaveBeenCalledTimes(databaseNames.length);

          expect(closeClientSpy).not.toHaveBeenCalled();
          expect(asMocked(mockedMongoMemoryServer.stop)).not.toHaveBeenCalled();

          await killMemoryServerOverride();

          expect(destroySpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(initializeDbSpy).toHaveBeenCalledTimes(databaseNames.length);
          expect(hydrateDbWithDummyDataSpy).toHaveBeenCalledTimes(databaseNames.length);

          expect(closeClientSpy).toHaveBeenCalledTimes(1);
          expect(asMocked(mockedMongoMemoryServer.stop)).toHaveBeenCalledTimes(1);

          expect(() => getSchemaConfig()).not.toThrow();
          expect(() => getDummyData()).not.toThrow();
        }
      });
    } finally {
      // eslint-disable-next-line no-global-assign
      beforeAll = oldBeforeAll;

      // eslint-disable-next-line no-global-assign
      beforeEach = oldBeforeEach;

      // eslint-disable-next-line no-global-assign
      afterAll = oldAfterAll;
    }
  });

  it('uses debug port when inspecting', async () => {
    expect.hasAssertions();

    const oldBeforeAll = beforeAll;
    const oldBeforeEach = beforeEach;
    const oldAfterAll = afterAll;

    try {
      // eslint-disable-next-line no-global-assign
      beforeAll = jest.fn();

      // eslint-disable-next-line no-global-assign
      beforeEach = jest.fn();

      // eslint-disable-next-line no-global-assign
      afterAll = jest.fn();

      await withMockedEnv(
        async () => {
          setupMemoryServerOverride();

          asMocked(mockedMongoMemoryServer.getUri).mockImplementation(
            () => 'mongo-ms-uri:5678'
          );

          await asMocked(beforeAll).mock.calls[0]![0](
            undefined as unknown as jest.DoneCallback
          );

          expect(mockMongoMemoryServer).toHaveBeenCalledWith({
            instance: expect.objectContaining({ port: 5678 })
          });
        },
        {
          VSCODE_INSPECTOR_OPTIONS: 'exists',
          MONGODB_MS_PORT: '5678'
        }
      );
    } finally {
      // eslint-disable-next-line no-global-assign
      beforeAll = oldBeforeAll;

      // eslint-disable-next-line no-global-assign
      beforeEach = oldBeforeEach;

      // eslint-disable-next-line no-global-assign
      afterAll = oldAfterAll;
    }
  });

  it('rejects hook if port does not match uri (EADDRINUSE)', async () => {
    expect.hasAssertions();

    const oldBeforeAll = beforeAll;
    const oldBeforeEach = beforeEach;
    const oldAfterAll = afterAll;

    try {
      // eslint-disable-next-line no-global-assign
      beforeAll = jest.fn();

      // eslint-disable-next-line no-global-assign
      beforeEach = jest.fn();

      // eslint-disable-next-line no-global-assign
      afterAll = jest.fn();

      asMocked(mockedMongoMemoryServer.getUri).mockImplementationOnce(
        () => 'uri-not-ending-in-colon-5678'
      );

      await withMockedEnv(
        async () => {
          setupMemoryServerOverride();

          await expect(
            asMocked(beforeAll).mock.calls[0]![0](
              undefined as unknown as jest.DoneCallback
            )
          ).rejects.toThrow(ErrorMessage.PortUnavailable(5678));
        },
        {
          VSCODE_INSPECTOR_OPTIONS: 'exists',
          MONGODB_MS_PORT: '5678'
        }
      );
    } finally {
      // eslint-disable-next-line no-global-assign
      beforeAll = oldBeforeAll;

      // eslint-disable-next-line no-global-assign
      beforeEach = oldBeforeEach;

      // eslint-disable-next-line no-global-assign
      afterAll = oldAfterAll;
    }
  });

  it('turns rejected lifecycle hooks into noops', async () => {
    expect.hasAssertions();

    const oldBeforeAll = beforeAll;
    const oldBeforeEach = beforeEach;
    const oldAfterAll = afterAll;

    try {
      const { default: schemaLibrary } = await import('@-xun/mongo-schema');

      const destroySpy = jest
        .spyOn(schemaLibrary, 'destroyDb')
        .mockImplementation(async () => true);

      const closeClientSpy = jest
        .spyOn(schemaLibrary, 'closeClient')
        .mockImplementation(async () => undefined);

      // eslint-disable-next-line no-global-assign
      beforeAll = jest.fn();

      // eslint-disable-next-line no-global-assign
      beforeEach = jest.fn();

      // eslint-disable-next-line no-global-assign
      afterAll = jest.fn();

      asMocked(mockedMongoMemoryServer.getUri).mockImplementationOnce(
        () => 'uri-not-ending-in-colon-5678'
      );

      await withMockedEnv(
        async () => {
          setupMemoryServerOverride();

          await expect(
            asMocked(beforeAll).mock.calls[0]![0](
              undefined as unknown as jest.DoneCallback
            )
          ).rejects.toThrow(ErrorMessage.PortUnavailable(5678));

          // ? Calling it a second time turns it into a noop
          await expect(
            asMocked(beforeAll).mock.calls[0]![0](
              undefined as unknown as jest.DoneCallback
            )
          ).resolves.toBeUndefined();

          // ? Other hooks are also noops...
          await expect(
            asMocked(beforeEach).mock.calls[0]![0](
              undefined as unknown as jest.DoneCallback
            )
          ).resolves.toBeUndefined();

          expect(destroySpy).not.toHaveBeenCalled();

          // ? ... except afterAll, which always does cleanup
          await expect(
            asMocked(afterAll).mock.calls[0]![0](
              undefined as unknown as jest.DoneCallback
            )
          ).resolves.toBeUndefined();

          expect(closeClientSpy).toHaveBeenCalled();
        },
        {
          VSCODE_INSPECTOR_OPTIONS: 'exists',
          MONGODB_MS_PORT: '5678'
        }
      );

      asMocked(beforeAll).mockReset();
      asMocked(beforeEach).mockReset();
      asMocked(afterAll).mockReset();

      jest
        .spyOn(schemaLibrary, 'getSchemaConfig')
        .mockImplementation(() => toss(new Error('fake')));

      setupMemoryServerOverride();

      await expect(
        asMocked(beforeEach).mock.calls[0]![0](undefined as unknown as jest.DoneCallback)
      ).rejects.toThrow('fake');

      // ? Calling it a second time turns it into a noop
      await expect(
        asMocked(beforeEach).mock.calls[0]![0](undefined as unknown as jest.DoneCallback)
      ).resolves.toBeUndefined();

      asMocked(beforeAll).mockReset();
      asMocked(beforeEach).mockReset();
      asMocked(afterAll).mockReset();

      closeClientSpy.mockImplementation(async () => toss(new Error('fake badness')));

      setupMemoryServerOverride();

      // ? Always runs regardless of the other hooks, never becomes a noop, but
      // ? still handles errors as gracefully
      await expect(
        asMocked(afterAll).mock.calls[0]![0](undefined as unknown as jest.DoneCallback)
      ).rejects.toThrow('fake badness');
    } finally {
      // eslint-disable-next-line no-global-assign
      beforeAll = oldBeforeAll;

      // eslint-disable-next-line no-global-assign
      beforeEach = oldBeforeEach;

      // eslint-disable-next-line no-global-assign
      afterAll = oldAfterAll;
    }
  });

  it('always returns a resetSharedMemory function and always returns "schema" and "data" as objects', async () => {
    expect.hasAssertions();

    const oldBeforeAll = beforeAll;
    const oldBeforeEach = beforeEach;
    const oldAfterAll = afterAll;

    try {
      // eslint-disable-next-line no-global-assign
      beforeAll = jest.fn();

      // eslint-disable-next-line no-global-assign
      beforeEach = jest.fn();

      // eslint-disable-next-line no-global-assign
      afterAll = jest.fn();

      await withMockedEnv(
        async () => {
          const expectedSchema: DbSchema = {
            databases: { 'something-or-other': { collections: [] } },
            aliases: {}
          };

          const expectedData: DummyData = {
            'something-or-other': { _generatedAt: Date.now() }
          };

          {
            const { schema, data, resetSharedMemory } = setupMemoryServerOverride({
              schema: () => expectedSchema,
              data: () => expectedData
            });

            expect(schema).toBe(expectedSchema);
            expect(data).toBe(expectedData);
            expect(resetSharedMemory).toBeFunction();
          }

          {
            const { schema, data, resetSharedMemory } = setupMemoryServerOverride({
              schema: expectedSchema,
              data: expectedData
            });

            expect(schema).toBe(expectedSchema);
            expect(data).toBe(expectedData);
            expect(resetSharedMemory).toBeFunction();
          }
        },
        {
          VSCODE_INSPECTOR_OPTIONS: 'exists',
          MONGODB_MS_PORT: '5678'
        }
      );
    } finally {
      // eslint-disable-next-line no-global-assign
      beforeAll = oldBeforeAll;

      // eslint-disable-next-line no-global-assign
      beforeEach = oldBeforeEach;

      // eslint-disable-next-line no-global-assign
      afterAll = oldAfterAll;
    }
  });
});

describe('::generateMockSensitiveObjectId', () => {
  it('runs to completion', async () => {
    expect.hasAssertions();
    expect(() => generateMockSensitiveObjectId()).not.toThrow();
  });
});
