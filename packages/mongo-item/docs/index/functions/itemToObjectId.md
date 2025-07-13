[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / itemToObjectId

# Function: itemToObjectId()

## Call Signature

> **itemToObjectId**\<`T`\>(`item`, `options`): `null` \| `T`

Defined in: [index.ts:156](https://github.com/Xunnamius/mongo-utils/blob/61eaaa91357753eefdb0e76f611558f417e7cbc4/packages/mongo-item/src/index.ts#L156)

Reduces an `item` down to its ObjectId instance.

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

Defined in: [index.ts:172](https://github.com/Xunnamius/mongo-utils/blob/61eaaa91357753eefdb0e76f611558f417e7cbc4/packages/mongo-item/src/index.ts#L172)

Reduces an array of `items` down to their respective ObjectId
instances.

An attempt is made to eliminate duplicates via `new Set(...)`, but the
absence of duplicates is not guaranteed when `items` contains WithId
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

Defined in: [index.ts:181](https://github.com/Xunnamius/mongo-utils/blob/61eaaa91357753eefdb0e76f611558f417e7cbc4/packages/mongo-item/src/index.ts#L181)

Reduces an `item` down to its ObjectId instance.

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

Defined in: [index.ts:193](https://github.com/Xunnamius/mongo-utils/blob/61eaaa91357753eefdb0e76f611558f417e7cbc4/packages/mongo-item/src/index.ts#L193)

Reduces an array of `items` down to their respective ObjectId
instances.

An attempt is made to eliminate duplicates via `new Set(...)`, but the
absence of duplicates is not guaranteed when `items` contains WithId
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

## Call Signature

> **itemToObjectId**\<`T`\>(`itemOrItems`, `options?`): `Arrayable`\<`null` \| `T`\>

Defined in: [index.ts:203](https://github.com/Xunnamius/mongo-utils/blob/61eaaa91357753eefdb0e76f611558f417e7cbc4/packages/mongo-item/src/index.ts#L203)

Reduces `itemOrItems` down to its ObjectId instance(s).

When `options.ignoreInvalidId` is `true`, result may be or contain
`null`s.

### Type Parameters

#### T

`T` *extends* `ObjectId`

### Parameters

#### itemOrItems

[`IdItem`](../type-aliases/IdItem.md)\<`T`\> | [`IdItemArray`](../type-aliases/IdItemArray.md)\<`T`\>

#### options?

[`ItemToObjectIdOptions`](../type-aliases/ItemToObjectIdOptions.md)

### Returns

`Arrayable`\<`null` \| `T`\>
