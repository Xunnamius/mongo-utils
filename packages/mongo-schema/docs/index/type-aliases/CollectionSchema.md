[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / CollectionSchema

# Type Alias: CollectionSchema

> **CollectionSchema** = `object`

Defined in: [shared/src/schema.ts:8](https://github.com/Xunnamius/mongo-utils/blob/a42d1f3bf6df8ecad890c565a46f81f53a45682a/packages/shared/src/schema.ts#L8)

A configuration object representing a MongoDB collection.

## Properties

### createOptions?

> `optional` **createOptions**: `Parameters`\<`Db`\[`"createCollection"`\]\>\[`1`\]

Defined in: [shared/src/schema.ts:17](https://github.com/Xunnamius/mongo-utils/blob/a42d1f3bf6df8ecad890c565a46f81f53a45682a/packages/shared/src/schema.ts#L17)

An object passed directly to the MongoDB `createCollection` function via
the `createOptions` parameter.

***

### indices?

> `optional` **indices**: `object`[]

Defined in: [shared/src/schema.ts:22](https://github.com/Xunnamius/mongo-utils/blob/a42d1f3bf6df8ecad890c565a46f81f53a45682a/packages/shared/src/schema.ts#L22)

An object representing indices to be created on the MongoDB collection via
`createIndex`.

#### options?

> `optional` **options**: `CreateIndexParams`\[`2`\]

#### spec

> **spec**: `CreateIndexParams`\[`1`\]

***

### name

> **name**: `string`

Defined in: [shared/src/schema.ts:12](https://github.com/Xunnamius/mongo-utils/blob/a42d1f3bf6df8ecad890c565a46f81f53a45682a/packages/shared/src/schema.ts#L12)

The valid MongoDB name of the collection.
