[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemToObjectIdOptions

# Type Alias: ItemToObjectIdOptions

> **ItemToObjectIdOptions** = `object`

Defined in: [index.ts:131](https://github.com/Xunnamius/mongo-utils/blob/5a4a5a72ee127a824372b4175e7a7f6ab5a03af4/packages/mongo-item/src/index.ts#L131)

## Properties

### ignoreInvalidId?

> `optional` **ignoreInvalidId**: `boolean`

Defined in: [index.ts:138](https://github.com/Xunnamius/mongo-utils/blob/5a4a5a72ee127a824372b4175e7a7f6ab5a03af4/packages/mongo-item/src/index.ts#L138)

If `true`, inputs that cannot be coerced into an ObjectId will be
replaced with `null` instead of throwing a ValidationError.

#### Default

```ts
false
```
