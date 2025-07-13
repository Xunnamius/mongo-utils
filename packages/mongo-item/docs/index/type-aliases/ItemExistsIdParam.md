[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemExistsIdParam

# Type Alias: ItemExistsIdParam

> **ItemExistsIdParam** = `string` \| `ObjectId` \| \{ `id`: `string` \| `ObjectId`; `key`: `string`; \}

Defined in: [index.ts:15](https://github.com/Xunnamius/mongo-utils/blob/61eaaa91357753eefdb0e76f611558f417e7cbc4/packages/mongo-item/src/index.ts#L15)

Represents the value of the `_id` property of a MongoDB collection entry.
Optionally, a key other than `_id` can be specified using the `{ key: ...,
id: ... }` syntax.
