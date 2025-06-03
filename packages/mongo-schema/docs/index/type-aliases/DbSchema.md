[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / DbSchema

# Type Alias: DbSchema

> **DbSchema** = `object`

Defined in: [shared/src/schema.ts:32](https://github.com/Xunnamius/mongo-utils/blob/a42d1f3bf6df8ecad890c565a46f81f53a45682a/packages/shared/src/schema.ts#L32)

A configuration object representing one or more MongoDB databases and their
aliases.

## Properties

### aliases

> **aliases**: `Record`\<`string`, `string`\>

Defined in: [shared/src/schema.ts:51](https://github.com/Xunnamius/mongo-utils/blob/a42d1f3bf6df8ecad890c565a46f81f53a45682a/packages/shared/src/schema.ts#L51)

These are alternative names to use with `getDb` that map to the names of
databases known to this system. Aliases are specified as `alias:
real-name`.

***

### databases

> **databases**: `Record`\<`string`, \{ `collections`: (`string` \| [`CollectionSchema`](CollectionSchema.md))[]; \}\>

Defined in: [shared/src/schema.ts:36](https://github.com/Xunnamius/mongo-utils/blob/a42d1f3bf6df8ecad890c565a46f81f53a45682a/packages/shared/src/schema.ts#L36)

All databases known to this system. These can be accessed via `getDb`.
