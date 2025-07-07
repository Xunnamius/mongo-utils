[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemExistsIdParam

# Type Alias: ItemExistsIdParam

> **ItemExistsIdParam** = `string` \| `ObjectId` \| \{ `id`: `string` \| `ObjectId`; `key`: `string`; \}

Defined in: [index.ts:15](https://github.com/Xunnamius/mongo-utils/blob/f4f436a17e3a4dfdb6460c5eeb717c55d6f392c1/packages/mongo-item/src/index.ts#L15)

Represents the value of the `_id` property of a MongoDB collection entry.
Optionally, a key other than `_id` can be specified using the `{ key: ...,
id: ... }` syntax.
