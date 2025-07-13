[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemToObjectIdOptions

# Type Alias: ItemToObjectIdOptions

> **ItemToObjectIdOptions** = `object`

Defined in: [index.ts:141](https://github.com/Xunnamius/mongo-utils/blob/61eaaa91357753eefdb0e76f611558f417e7cbc4/packages/mongo-item/src/index.ts#L141)

## Properties

### ignoreInvalidId?

> `optional` **ignoreInvalidId**: `boolean`

Defined in: [index.ts:148](https://github.com/Xunnamius/mongo-utils/blob/61eaaa91357753eefdb0e76f611558f417e7cbc4/packages/mongo-item/src/index.ts#L148)

If `true`, inputs that cannot be coerced into an ObjectId will be
replaced with `null` instead of throwing a ValidationError.

#### Default

```ts
false
```
