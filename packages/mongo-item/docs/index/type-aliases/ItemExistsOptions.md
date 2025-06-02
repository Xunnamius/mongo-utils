[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemExistsOptions

# Type Alias: ItemExistsOptions

> **ItemExistsOptions** = `object`

Defined in: [index.ts:21](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L21)

Available options for the `itemExists` function.

## Properties

### caseInsensitive?

> `optional` **caseInsensitive**: `boolean`

Defined in: [index.ts:33](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L33)

If `true`, ids will be matched in a case-insensitive manner (via locale).

#### Default

```ts
false
```

***

### excludeId?

> `optional` **excludeId**: [`ItemExistsIdParam`](ItemExistsIdParam.md)

Defined in: [index.ts:27](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L27)

Items matching excludeId will be completely ignored by this function.

#### Default

```ts
undefined
```

***

### optimisticCoercion?

> `optional` **optimisticCoercion**: `boolean`

Defined in: [index.ts:41](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L41)

When looking for an item matching `{ _id: id }`, where the descriptor key
is the string `"_id"`, `id` will be optimistically wrapped in a `new
ObjectId(id)` call. Set this to `false` to prevent this.

#### Default

```ts
true
```
