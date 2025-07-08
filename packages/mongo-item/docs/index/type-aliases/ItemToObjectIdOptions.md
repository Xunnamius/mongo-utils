[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemToObjectIdOptions

# Type Alias: ItemToObjectIdOptions

> **ItemToObjectIdOptions** = `object`

Defined in: [index.ts:141](https://github.com/Xunnamius/mongo-utils/blob/30f283970ee47dbb7ec096d6e1c461c85dbb401e/packages/mongo-item/src/index.ts#L141)

## Properties

### ignoreInvalidId?

> `optional` **ignoreInvalidId**: `boolean`

Defined in: [index.ts:148](https://github.com/Xunnamius/mongo-utils/blob/30f283970ee47dbb7ec096d6e1c461c85dbb401e/packages/mongo-item/src/index.ts#L148)

If `true`, inputs that cannot be coerced into an ObjectId will be
replaced with `null` instead of throwing a ValidationError.

#### Default

```ts
false
```
