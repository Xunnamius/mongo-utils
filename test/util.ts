import type { Db, MongoClient } from 'mongodb';

/**
 ** This file exports test utilities specific to this project and beyond what is
 ** exported by @-xun/jest; these can be imported using the testversal aliases.
 */

// ? These will always come from @-xun/symbiote and @-xun/jest (transitively)
// {@symbiote/notInvalid
//   - @-xun/jest
//   - @-xun/test-mock-argv
//   - @-xun/test-mock-exit
//   - @-xun/test-mock-import
//   - @-xun/test-mock-env
//   - @-xun/test-mock-fixture
//   - @-xun/test-mock-output
// }

export * from '@-xun/jest';

export type TestDbResult = Db & {
  insertMany_: ReturnType<typeof jest.fn>;
  createIndex_: ReturnType<typeof jest.fn>;
};

export function makeMockedMongoConnectMethod() {
  return jest.fn((url: string) => {
    return Promise.resolve({
      url,

      db(name: string) {
        const insertMany = jest.fn();
        const createIndex = jest.fn();

        return {
          parentUrl: url,
          databaseName: name,
          dropDatabase: jest.fn(),
          collection: jest.fn(() => ({ insertMany })),
          createIndex: jest.fn(),
          createCollection: jest.fn(() => Promise.resolve({ createIndex })),
          admin: jest.fn(() => ({
            listDatabases: jest.fn(() => ({
              databases: [
                { name: 'auth' },
                { name: 'request-log' },
                { name: 'limited-log' }
              ]
            }))
          })),
          insertMany_: insertMany,
          createIndex_: createIndex
        };
      },

      close() {
        return url;
      }
    } as unknown as MongoClient);
    // TODO: fix this unnecessary cast when jest 30 releases and types are fixed
  }) as unknown as jest.MockedFunctionDeep<typeof MongoClient.connect>;
}
