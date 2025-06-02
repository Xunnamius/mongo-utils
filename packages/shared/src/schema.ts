import type { Db } from 'mongodb';

export type CreateIndexParams = Parameters<Db['createIndex']>;

/**
 * A configuration object representing a MongoDB collection.
 */
export type CollectionSchema = {
  /**
   * The valid MongoDB name of the collection.
   */
  name: string;
  /**
   * An object passed directly to the MongoDB `createCollection` function via
   * the `createOptions` parameter.
   */
  createOptions?: Parameters<Db['createCollection']>[1];
  /**
   * An object representing indices to be created on the MongoDB collection via
   * `createIndex`.
   */
  indices?: {
    spec: CreateIndexParams[1];
    options?: CreateIndexParams[2];
  }[];
};

/**
 * A configuration object representing one or more MongoDB databases and their
 * aliases.
 */
export type DbSchema = {
  /**
   * All databases known to this system. These can be accessed via `getDb`.
   */
  databases: Record<
    string,
    {
      /**
       * An array of MongoDB collections.
       */
      collections: (string | CollectionSchema)[];
    }
  >;

  /**
   * These are alternative names to use with `getDb` that map to the names of
   * databases known to this system. Aliases are specified as `alias:
   * real-name`.
   */
  aliases: Record<string, string>;
};

/**
 * Generic dummy data used to hydrate databases and their collections.
 */
export type DummyData = {
  /**
   * The data inserted into each collection in the named database.
   * `databaseName` can also be an alias.
   */
  [databaseName: string]: {
    /**
     * Timestamp of when this dummy data was generated (in ms since unix epoch).
     */
    _generatedAt: number;

    /**
     * The objects (if array) or object (if non-array) inserted into the
     * named collection.
     */
    [collectionName: string]: unknown;
  };
};
