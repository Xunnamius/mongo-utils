[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / itemToObjectId

# Function: itemToObjectId()

## Call Signature

> **itemToObjectId**\<`T`\>(`item`, `options`): `null` \| `T`

Defined in: [index.ts:136](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L136)

Reduces an `item` down to its `ObjectId` instance.

When `options.ignoreInvalidId` is `true`, result may be `null`.

### Type Parameters

#### T

`T` *extends* `ObjectId`

### Parameters

#### item

[`IdItem`](../type-aliases/IdItem.md)\<`T`\>

#### options

[`ItemToObjectIdOptions`](../type-aliases/ItemToObjectIdOptions.md) & `object`

### Returns

`null` \| `T`

## Call Signature

> **itemToObjectId**\<`T`\>(`items`, `options`): (`null` \| `T`)[]

Defined in: [index.ts:151](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L151)

Reduces an array of `items` down to their respective `ObjectId` instances.

An attempt is made to eliminate duplicates via `new Set(...)`, but the
absence of duplicates is not guaranteed when `items` contains `WithId<...>`
objects.

When `options.ignoreInvalidId` is `true`, result may contain `null`s.

### Type Parameters

#### T

`T` *extends* `ObjectId`

### Parameters

#### items

[`IdItemArray`](../type-aliases/IdItemArray.md)\<`T`\>

#### options

[`ItemToObjectIdOptions`](../type-aliases/ItemToObjectIdOptions.md) & `object`

### Returns

(`null` \| `T`)[]

## Call Signature

> **itemToObjectId**\<`T`\>(`item`, `options?`): `T`

Defined in: [index.ts:160](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L160)

Reduces an `item` down to its `ObjectId` instance.

### Type Parameters

#### T

`T` *extends* `ObjectId`

### Parameters

#### item

[`IdItem`](../type-aliases/IdItem.md)\<`T`\>

#### options?

[`ItemToObjectIdOptions`](../type-aliases/ItemToObjectIdOptions.md)

### Returns

`T`

## Call Signature

> **itemToObjectId**\<`T`\>(`items`, `options?`): `T`[]

Defined in: [index.ts:171](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L171)

Reduces an array of `items` down to their respective `ObjectId` instances.

An attempt is made to eliminate duplicates via `new Set(...)`, but the
absence of duplicates is not guaranteed when `items` contains `WithId<...>`
objects.

### Type Parameters

#### T

`T` *extends* `ObjectId`

### Parameters

#### items

[`IdItemArray`](../type-aliases/IdItemArray.md)\<`T`\>

#### options?

[`ItemToObjectIdOptions`](../type-aliases/ItemToObjectIdOptions.md)

### Returns

`T`[]
