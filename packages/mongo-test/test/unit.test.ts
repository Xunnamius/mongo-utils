import { safeDeepClone } from '@-xun/js';
import { getDb, getSchemaConfig, setSchemaConfig } from '@-xun/mongo-schema';
import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { toss } from 'toss-expression';

import { resetSharedMemory } from 'multiverse+shared:memory.ts';

import {
  getDummyData,
  hydrateDbWithDummyData,
  setDummyData,
  setupMemoryServerOverride
} from 'universe+mongo-test';

import { ErrorMessage } from 'universe+mongo-test:error.ts';

import {
  asMocked,
  makeMockedMongoConnectMethod,
  mockEnvFactory
} from 'testverse:util.ts';

import type { DbSchema } from '@-xun/mongo-schema';
import type { DummyData } from 'multiverse+shared:schema.ts';
import type { TestDbResult } from 'testverse:util.ts';

jest.mock('mongodb');
jest.mock('mongodb-memory-server');

const now = Date.now();
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
    _generatedAt: now,
    col: [{ item: 1 }, { item: 2 }, { item: 3 }]
  },
  'fake-db-2': {
    _generatedAt: now,
    'col-1': [{ item: 'a' }, { item: 'b' }]
  }
};

beforeEach(() => {
  setSchemaConfig(() => expectedSchema);
  setDummyData(() => expectedData);

  mockMongoClient.connect = makeMockedMongoConnectMethod();

  // eslint-disable-next-line jest/unbound-method
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
          _generatedAt: now,
          col: [{ item: 1 }, { item: 2 }, { item: 3 }]
        },
        'fake-alias-3': {
          _generatedAt: now,
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
          _generatedAt: now,
          col: [{ item: 1 }, { item: 2 }, { item: 3 }]
        },
        'fake-db-2': {
          _generatedAt: now,
          'col-1': [{ item: 'a' }, { item: 'b' }]
        },
        'fake-alias-3': {
          _generatedAt: now,
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
          _generatedAt: now,
          col: [{ item: 1 }, { item: 2 }, { item: 3 }]
        },
        'fake-alias-2': {
          _generatedAt: now,
          'col-1': [{ item: 'a' }, { item: 'b' }]
        },
        'fake-alias-3': {
          _generatedAt: now,
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
      expect(beforeEach).toHaveBeenCalledTimes(1);
      expect(afterAll).toHaveBeenCalledTimes(2);
    } finally {
      // eslint-disable-next-line no-global-assign
      beforeAll = oldBeforeAll;

      // eslint-disable-next-line no-global-assign
      beforeEach = oldBeforeEach;

      // eslint-disable-next-line no-global-assign
      afterAll = oldAfterAll;
    }
  });

  it('runs appropriate functionality at the appropriate points', async () => {
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

        await asMocked(beforeAll).mock.calls[0]![0](
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

        expect(closeClientSpy).toHaveBeenCalled();

        expect(asMocked(mockedMongoMemoryServer.stop)).toHaveBeenCalled();

        setupMemoryServerOverride({ defer: true });

        expect(beforeAll).toHaveBeenCalledTimes(2);
        expect(beforeEach).toHaveBeenCalledTimes(1);
        expect(afterAll).toHaveBeenCalledTimes(2);

        await asMocked(beforeAll).mock.calls[1]![0](
          undefined as unknown as jest.DoneCallback
        );

        Object.keys(getSchemaConfig().databases).map((name) => {
          expect(destroySpy).toHaveBeenCalledWith({ name });
          expect(initializeDbSpy).toHaveBeenCalledWith({ name });
          expect(hydrateDbWithDummyDataSpy).toHaveBeenCalledWith({ name });
        });

        await asMocked(afterAll).mock.calls[1]![0](
          undefined as unknown as jest.DoneCallback
        );

        expect(closeClientSpy).toHaveBeenCalledTimes(2);
        expect(asMocked(mockedMongoMemoryServer.stop)).toHaveBeenCalledTimes(2);
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

      // eslint-disable-next-line jest/unbound-method
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
      const { default: library } = await import('@-xun/mongo-schema');

      const destroySpy = jest
        .spyOn(library, 'destroyDb')
        .mockImplementation(async () => true);

      // eslint-disable-next-line no-global-assign
      beforeAll = jest.fn();

      // eslint-disable-next-line no-global-assign
      beforeEach = jest.fn();

      // eslint-disable-next-line no-global-assign
      afterAll = jest.fn();

      // eslint-disable-next-line jest/unbound-method
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

          // ? Other hooks are also noops
          await expect(
            asMocked(beforeEach).mock.calls[0]![0](
              undefined as unknown as jest.DoneCallback
            )
          ).resolves.toBeUndefined();

          expect(destroySpy).not.toHaveBeenCalled();
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
        .spyOn(library, 'getSchemaConfig')
        .mockImplementation(() => toss(new Error('fake')));

      setupMemoryServerOverride();

      await expect(
        asMocked(beforeEach).mock.calls[0]![0](undefined as unknown as jest.DoneCallback)
      ).rejects.toThrow('fake');

      // ? Calling it a second time turns it into a noop
      await expect(
        asMocked(beforeEach).mock.calls[0]![0](undefined as unknown as jest.DoneCallback)
      ).resolves.toBeUndefined();
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
