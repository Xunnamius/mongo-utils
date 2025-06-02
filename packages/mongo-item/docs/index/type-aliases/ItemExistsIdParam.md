[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemExistsIdParam

# Type Alias: ItemExistsIdParam

> **ItemExistsIdParam** = `string` \| `ObjectId` \| \{ `id`: `string` \| `ObjectId`; `key`: `string`; \}

Defined in: [index.ts:13](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L13)

Represents the value of the `_id` property of a MongoDB collection entry.
Optionally, a key other than `_id` can be specified using the `{ key: ...,
id: ... }` syntax.
