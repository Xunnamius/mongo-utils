[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemExistsOptions

# Type Alias: ItemExistsOptions

> **ItemExistsOptions** = `object`

Defined in: [index.ts:23](https://github.com/Xunnamius/mongo-utils/blob/30f283970ee47dbb7ec096d6e1c461c85dbb401e/packages/mongo-item/src/index.ts#L23)

Available options for the `itemExists` function.

## Properties

### caseInsensitive?

> `optional` **caseInsensitive**: `boolean`

Defined in: [index.ts:35](https://github.com/Xunnamius/mongo-utils/blob/30f283970ee47dbb7ec096d6e1c461c85dbb401e/packages/mongo-item/src/index.ts#L35)

If `true`, ids will be matched in a case-insensitive manner (via locale).

#### Default

```ts
false
```

***

### excludeId?

> `optional` **excludeId**: [`ItemExistsIdParam`](ItemExistsIdParam.md)

Defined in: [index.ts:29](https://github.com/Xunnamius/mongo-utils/blob/30f283970ee47dbb7ec096d6e1c461c85dbb401e/packages/mongo-item/src/index.ts#L29)

Items matching excludeId will be completely ignored by this function.

#### Default

```ts
undefined
```

***

### optimisticCoercion?

> `optional` **optimisticCoercion**: `boolean`

Defined in: [index.ts:43](https://github.com/Xunnamius/mongo-utils/blob/30f283970ee47dbb7ec096d6e1c461c85dbb401e/packages/mongo-item/src/index.ts#L43)

When looking for an item matching `{ _id: id }`, where the descriptor key
is the string `"_id"`, `id` will be optimistically wrapped in a `new
ObjectId(id)` call. Set this to `false` to prevent this.

#### Default

```ts
true
```
