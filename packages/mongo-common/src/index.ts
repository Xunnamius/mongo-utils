import { mockDateNowMs } from '@-xun/jest';
import { safeDeepClone } from '@-xun/js';

import {
  BANNED_BEARER_TOKEN,
  DEV_BEARER_TOKEN,
  DUMMY_BEARER_TOKEN
} from '@-xun/next-api-common';

import type { DbSchema } from '@-xun/mongo-schema';
import type { DummyData } from '@-xun/mongo-test';

import type {
  InternalAuthEntry,
  InternalLimitedLogEntry,
  InternalRequestLogEntry
} from '@-xun/next-api-common';

export { mockDateNowMs, useMockDateNow } from '@-xun/jest';

/**
 * A JSON representation of the backend Mongo database structure. This is used
 * for common consistent "well-known" db structure across projects.
 *
 * Well-known databases and their well-known collections currently include:
 *   - `root` (collections: `auth`, `request-log`, `limited-log`)
 */
export function getCommonSchemaConfig(additionalSchemaConfig?: DbSchema): DbSchema {
  const schema: DbSchema = {
    databases: {
      root: {
        collections: [
          {
            name: 'auth',
            indices: [
              { spec: 'attributes.owner' },
              { spec: 'deleted' },
              // ! When performing equality matches on embedded documents, field
              // ! order matters and the embedded documents must match exactly.
              // * https://xunn.at/mongo-docs-query-embedded-docs
              // ! Additionally, field order determines internal sort order.
              { spec: ['scheme', 'token'], options: { unique: true } }
            ]
          },
          {
            name: 'request-log',
            indices: [{ spec: 'header' }, { spec: 'ip' }, { spec: 'durationMs' }]
          },
          {
            name: 'limited-log',
            indices: [{ spec: 'header' }, { spec: 'ip' }, { spec: { until: -1 } }]
          }
        ]
      },
      ...additionalSchemaConfig?.databases
    },
    aliases: { ...additionalSchemaConfig?.aliases }
  };

  const actualDatabaseNames = Object.keys(schema.databases);

  Object.entries(schema.aliases).every(([alias, actual]) => {
    if (!actualDatabaseNames.includes(actual)) {
      throw new InvalidAppConfigurationError(
        `aliased database "${actual}" (referred to by alias "${alias}") does not exist in database schema or is not aliasable. Existing aliasable databases: ${actualDatabaseNames.join(
          ', '
        )}`
      );
    }

    if (actualDatabaseNames.includes(alias)) {
      throw new InvalidAppConfigurationError(
        `database alias "${alias}" (referring to actual database "${actual}") is invalid: an actual database with that name already exists in the database schema. You must choose a different alias`
      );
    }
  });

  return schema;
}

/**
 * Returns data used to hydrate well-known databases and their well-known
 * collections.
 *
 * Well-known databases and their well-known collections currently include:
 *   - `root` (collections: `auth`, `request-log`, `limited-log`)
 */
export function getCommonDummyData(additionalDummyData?: DummyData): DummyData {
  return safeDeepClone({ root: dummyRootData, ...additionalDummyData });
}

/**
 * The shape of the well-known `root` database's collections and their test
 * data.
 *
 * @see `DummyData` from the "shared" package
 */
export type DummyRootData = {
  _generatedAt: number;
  auth: InternalAuthEntry[];
  'request-log': InternalRequestLogEntry[];
  'limited-log': InternalLimitedLogEntry[];
};

/**
 * Test data for the well-known `root` database.
 */
export const dummyRootData: DummyRootData = {
  _generatedAt: mockDateNowMs,
  auth: [
    // ! Must maintain order or various unit tests across projects will fail !
    {
      _id: generateMockSensitiveObjectId(),
      deleted: false,
      attributes: { owner: 'local developer', isGlobalAdmin: true },
      scheme: 'bearer',
      token: { bearer: DEV_BEARER_TOKEN }
    },
    {
      _id: generateMockSensitiveObjectId(),
      deleted: false,
      attributes: { owner: 'dummy owner' },
      scheme: 'bearer',
      token: { bearer: DUMMY_BEARER_TOKEN }
    },
    {
      _id: generateMockSensitiveObjectId(),
      deleted: false,
      attributes: { owner: 'banned dummy owner' },
      scheme: 'bearer',
      token: { bearer: BANNED_BEARER_TOKEN }
    }
  ],
  'request-log': Array.from({ length: 22 }).map((_, ndx) => ({
    _id: generateMockSensitiveObjectId(),
    ip: '1.2.3.4',
    header: ndx % 2 ? null : `bearer ${BANNED_BEARER_TOKEN}`,
    method: ndx % 3 ? 'GET' : 'POST',
    route: 'fake/route',
    endpoint: '/fake/:route',
    createdAt: mockDateNowMs + 10 ** 6,
    resStatusCode: 200,
    durationMs: 1234
  })),
  'limited-log': [
    // ! Must maintain order or various unit tests will fail
    {
      _id: generateMockSensitiveObjectId(),
      ip: '1.2.3.4',
      until: mockDateNowMs + 1000 * 60 * 15
    },
    {
      _id: generateMockSensitiveObjectId(),
      ip: '5.6.7.8',
      until: mockDateNowMs + 1000 * 60 * 15
    },
    {
      _id: generateMockSensitiveObjectId(),
      header: `bearer ${BANNED_BEARER_TOKEN}`,
      until: mockDateNowMs + 1000 * 60 * 60
    }
  ]
};
