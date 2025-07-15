[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / DbSchema

# Type Alias: DbSchema

> **DbSchema** = `object`

Defined in: [packages/shared/src/schema.ts:32](https://github.com/Xunnamius/mongo-utils/blob/77082e38194fa309dd2d5b6f34405fcc81cec406/packages/shared/src/schema.ts#L32)

A configuration object representing one or more MongoDB databases and their
aliases.

## Properties

### aliases

> **aliases**: `Record`\<`string`, `string`\>

Defined in: [packages/shared/src/schema.ts:51](https://github.com/Xunnamius/mongo-utils/blob/77082e38194fa309dd2d5b6f34405fcc81cec406/packages/shared/src/schema.ts#L51)

These are alternative names to use with `getDb` that map to the names of
databases known to this system. Aliases are specified as `alias:
real-name`.

***

### databases

> **databases**: `Record`\<`string`, \{ `collections`: (`string` \| [`CollectionSchema`](CollectionSchema.md))[]; \}\>

Defined in: [packages/shared/src/schema.ts:36](https://github.com/Xunnamius/mongo-utils/blob/77082e38194fa309dd2d5b6f34405fcc81cec406/packages/shared/src/schema.ts#L36)

All databases known to this system. These can be accessed via `getDb`.
