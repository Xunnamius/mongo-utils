[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / DbSchema

# Type Alias: DbSchema

> **DbSchema** = `object`

Defined in: [shared/src/schema.ts:32](https://github.com/Xunnamius/mongo-utils/blob/da36b2f7ed743ec7d8e66e842457ff4af33ae36e/packages/shared/src/schema.ts#L32)

A configuration object representing one or more MongoDB databases and their
aliases.

## Properties

### aliases

> **aliases**: `Record`\<`string`, `string`\>

Defined in: [shared/src/schema.ts:51](https://github.com/Xunnamius/mongo-utils/blob/da36b2f7ed743ec7d8e66e842457ff4af33ae36e/packages/shared/src/schema.ts#L51)

These are alternative names to use with `getDb` that map to the names of
databases known to this system. Aliases are specified as `alias:
real-name`.

***

### databases

> **databases**: `Record`\<`string`, \{ `collections`: (`string` \| [`CollectionSchema`](CollectionSchema.md))[]; \}\>

Defined in: [shared/src/schema.ts:36](https://github.com/Xunnamius/mongo-utils/blob/da36b2f7ed743ec7d8e66e842457ff4af33ae36e/packages/shared/src/schema.ts#L36)

All databases known to this system. These can be accessed via `getDb`.
