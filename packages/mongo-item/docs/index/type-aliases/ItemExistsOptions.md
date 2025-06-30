[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / ItemExistsOptions

# Type Alias: ItemExistsOptions

> **ItemExistsOptions** = `object`

Defined in: [index.ts:22](https://github.com/Xunnamius/mongo-utils/blob/6d8fd135282108c666a758aaa66b65ddbaefc6f2/packages/mongo-item/src/index.ts#L22)

Available options for the `itemExists` function.

## Properties

### caseInsensitive?

> `optional` **caseInsensitive**: `boolean`

Defined in: [index.ts:34](https://github.com/Xunnamius/mongo-utils/blob/6d8fd135282108c666a758aaa66b65ddbaefc6f2/packages/mongo-item/src/index.ts#L34)

If `true`, ids will be matched in a case-insensitive manner (via locale).

#### Default

```ts
false
```

***

### excludeId?

> `optional` **excludeId**: [`ItemExistsIdParam`](ItemExistsIdParam.md)

Defined in: [index.ts:28](https://github.com/Xunnamius/mongo-utils/blob/6d8fd135282108c666a758aaa66b65ddbaefc6f2/packages/mongo-item/src/index.ts#L28)

Items matching excludeId will be completely ignored by this function.

#### Default

```ts
undefined
```

***

### optimisticCoercion?

> `optional` **optimisticCoercion**: `boolean`

Defined in: [index.ts:42](https://github.com/Xunnamius/mongo-utils/blob/6d8fd135282108c666a758aaa66b65ddbaefc6f2/packages/mongo-item/src/index.ts#L42)

When looking for an item matching `{ _id: id }`, where the descriptor key
is the string `"_id"`, `id` will be optimistically wrapped in a `new
ObjectId(id)` call. Set this to `false` to prevent this.

#### Default

```ts
true
```
