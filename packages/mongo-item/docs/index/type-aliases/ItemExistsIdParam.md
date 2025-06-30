[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemExistsIdParam

# Type Alias: ItemExistsIdParam

> **ItemExistsIdParam** = `string` \| `ObjectId` \| \{ `id`: `string` \| `ObjectId`; `key`: `string`; \}

Defined in: [index.ts:14](https://github.com/Xunnamius/mongo-utils/blob/6d8fd135282108c666a758aaa66b65ddbaefc6f2/packages/mongo-item/src/index.ts#L14)

Represents the value of the `_id` property of a MongoDB collection entry.
Optionally, a key other than `_id` can be specified using the `{ key: ...,
id: ... }` syntax.
