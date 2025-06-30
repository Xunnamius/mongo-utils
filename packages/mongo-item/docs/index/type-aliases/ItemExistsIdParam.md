[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemExistsIdParam

# Type Alias: ItemExistsIdParam

> **ItemExistsIdParam** = `string` \| `ObjectId` \| \{ `id`: `string` \| `ObjectId`; `key`: `string`; \}

Defined in: [index.ts:14](https://github.com/Xunnamius/mongo-utils/blob/5a4a5a72ee127a824372b4175e7a7f6ab5a03af4/packages/mongo-item/src/index.ts#L14)

Represents the value of the `_id` property of a MongoDB collection entry.
Optionally, a key other than `_id` can be specified using the `{ key: ...,
id: ... }` syntax.
