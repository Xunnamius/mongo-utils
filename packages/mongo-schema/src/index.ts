import assert from 'node:assert';

import { ServerValidationError } from '@-xun/api-error';
import { getEnv } from '@-xun/env';
import { MongoClient } from 'mongodb';
import { createDebugLogger } from 'rejoinder';

import {
  getFromSharedMemory,
  resetSharedMemory,
  setToSharedMemory
} from 'multiverse+shared:memory.ts';

import { ErrorMessage } from 'universe+mongo-schema:error.ts';

import type { Functionable } from 'multiverse+shared:memory.ts';
import type { CollectionSchema, DbSchema } from 'multiverse+shared:schema.ts';

const debug = createDebugLogger({ namespace: 'mongo-schema' });

export type { CollectionSchema, DbSchema, Functionable };

/**
 * Sets global schema singleton (which already includes some built-in defaults).
 *
 * This function must be called before any call to `getSchemaConfig` or an error
 * will be thrown.
 */
export function setSchemaConfig(schemaFn: Functionable<DbSchema>) {
  debug('setting schema configuration to memory');
  setToSharedMemory('schema', schemaFn);
}

/**
 * Returns global schema singleton.
 */
export function getSchemaConfig(): DbSchema {
  debug('returning schema configuration from memory');

  const schema = getFromSharedMemory('schema');
  assert(schema, ErrorMessage.NoSchemaConfigured());

  return schema;
}

/**
 * Accepts a database alias (or real name) and returns its real name.
 *
 * If the actual database is not listed in the schema, an error is thrown; that
 * is: if this function doesn't throw, `alias` _must_ either be (1) a
 * `nameActual` in `schema.databases` or (2) successfully maps to one.
 */
export function getNameFromAlias(alias: string) {
  const schema = getSchemaConfig();
  const nameActual = schema.aliases[alias] || alias;

  if (alias !== nameActual) {
    debug(`mapped alias "${alias}" to database name "${nameActual}"`);
  }

  if (!schema.databases[nameActual]?.collections) {
    throw new ServerValidationError(ErrorMessage.UnknownDatabaseAlias(nameActual));
  }

  return nameActual;
}

/**
 * Accepts a database name (or an alias) and returns one or more aliases.
 *
 * If the named database has no aliases listed in the schema, said database name
 * is returned as a single-element array. If said database name is not listed in
 * the schema, an error is thrown.
 *
 * That is: if this function doesn't throw, `nameActual` _must_ (1) be in
 * `schema.databases` and (2) map to zero or more aliases.
 */
export function getAliasFromName(nameActual: string): string[] {
  const schema = getSchemaConfig();

  if (!schema.databases[nameActual]?.collections) {
    throw new ServerValidationError(ErrorMessage.UnknownDatabaseAlias(nameActual));
  }

  const aliases = Object.entries(schema.aliases)
    .filter(([, name]) => name === nameActual)
    .map(([alias]) => alias);

  if (aliases.length) {
    debug(
      `reverse-mapped database name "${nameActual}" to alias${
        aliases.length === 1 ? ` "${aliases.toString()}"` : `es: ${aliases.join(', ')}`
      }`
    );

    return aliases;
  } else {
    return [nameActual];
  }
}

/**
 * Lazily connects to the server on-demand, memoizing the result.
 */
export async function getClient() {
  if (!getFromSharedMemory('client')) {
    const uri = getEnv().MONGODB_URI;
    debug('connecting to mongo server at %O', uri);
    setToSharedMemory('client', await MongoClient.connect(uri));
  } else {
    debug('connected (from memory) to mongo server');
  }

  return getFromSharedMemory('client')!;
}

/**
 * Kills the MongoClient instance and any related database connections and
 * clears shared memory.
 *
 * If `clearCache` is `true` (default), internal shared memory will be cleared
 * when this function is called. Set this to `false` if invoking this function
 * anywhere other than at the top level of an application. Libraries meant to be
 * invoked by such applications should be wary when using this function to clear
 * shared memory since there could be multiple instances of this package in
 * memory that could be relying upon it.
 */
export async function closeClient({ clearCache = true }: { clearCache?: boolean } = {}) {
  const client = getFromSharedMemory('client');

  /* istanbul ignore else */
  if (client) {
    debug('closing server connection');
    await client.close();
  }

  if (clearCache) {
    resetSharedMemory();
  }
}

/**
 * Lazily connects to a database on-demand, memoizing the result. If the
 * database does not yet exist, it is both created and initialized by this
 * function. The latter can be prevented by setting `initialize` to `false`.
 */
export async function getDb({
  name,
  initialize
}: {
  /**
   * The name or alias of the database to retrieve.
   */
  name: string;
  /**
   * Set to `false` to prevent `getDb` from calling `initializeDb` if the
   * database does not exist prior to acquiring it.
   *
   * @default true
   */
  initialize?: boolean;
}) {
  const nameActual = getNameFromAlias(name);
  const databases = getFromSharedMemory('databases');

  if (!databases[nameActual]) {
    debug(`acquiring mongo database "${nameActual}"`);

    const client = await getClient();

    const existingDatabases = (
      await client.db('admin').admin().listDatabases()
    ).databases.map(({ name }) => name);

    databases[nameActual] = client.db(nameActual);

    if (initialize !== false && !existingDatabases.includes(nameActual)) {
      debug(`calling initializeDb since "${nameActual}" was just created`);
      await initializeDb({ name: nameActual });
    }
  } else {
    debug(`acquired (from memory) mongo database "${nameActual}"`);
  }

  return databases[nameActual];
}

/**
 * Drops a database, destroying its collections. If the database does not exist
 * before calling this function, it will be created first then dropped.
 *
 * Note that this function does not clear the destroyed database's Db instance
 * from internal memory for performance reasons.
 */
export async function destroyDb({
  name
}: {
  /**
   * The name or alias of the database to destroy.
   */
  name: string;
}) {
  const nameActual = getNameFromAlias(name);
  debug(`destroying database "${nameActual}" and its collections`);
  return (
    !getFromSharedMemory('databases')[nameActual] ||
    (await getDb({ name })).dropDatabase()
  );
}

/**
 * Creates a database and initializes its collections. If the database does not
 * exist before calling this function, it will be created first. This function
 * should only be called on empty or brand new databases **and not on databases
 * with pre-existing collections.**
 */
export async function initializeDb({
  name
}: {
  /**
   * The name or alias of the database to initialize.
   */
  name: string;
}) {
  const db = await getDb({ name, initialize: false });
  const nameActual = getNameFromAlias(name);

  debug(`initializing database "${nameActual}"`);

  await Promise.all(
    getSchemaConfig().databases[nameActual]!.collections.map((colNameOrSchema) => {
      const colSchema: CollectionSchema =
        typeof colNameOrSchema === 'string'
          ? {
              name: colNameOrSchema
            }
          : colNameOrSchema;

      debug(`initializing collection "${nameActual}.${colSchema.name}"`);
      return db.createCollection(colSchema.name, colSchema.createOptions).then((col) => {
        return Promise.all(
          colSchema.indices?.map((indexSchema) =>
            col.createIndex(indexSchema.spec, indexSchema.options || {})
          ) || []
        );
      });
    })
  );
}
