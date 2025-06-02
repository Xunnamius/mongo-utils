[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemToObjectIdOptions

# Type Alias: ItemToObjectIdOptions

> **ItemToObjectIdOptions** = `object`

Defined in: [index.ts:121](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L121)

## Properties

### ignoreInvalidId?

> `optional` **ignoreInvalidId**: `boolean`

Defined in: [index.ts:128](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L128)

If `true`, inputs that cannot be coerced into an ObjectId will be
replaced with `null` instead of throwing a ValidationError.

#### Default

```ts
false
```
