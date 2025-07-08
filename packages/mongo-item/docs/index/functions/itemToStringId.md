[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / itemToStringId

# Function: itemToStringId()

## Call Signature

> **itemToStringId**\<`T`\>(`item`): `string`

Defined in: [index.ts:262](https://github.com/Xunnamius/mongo-utils/blob/30f283970ee47dbb7ec096d6e1c461c85dbb401e/packages/mongo-item/src/index.ts#L262)

Reduces an `item` down to the string representation of its ObjectId
instance.

### Type Parameters

#### T

`T` *extends* `ObjectId`

### Parameters

#### item

[`IdItem`](../type-aliases/IdItem.md)\<`T`\>

### Returns

`string`

## Call Signature

> **itemToStringId**\<`T`\>(`items`): `string`[]

Defined in: [index.ts:267](https://github.com/Xunnamius/mongo-utils/blob/30f283970ee47dbb7ec096d6e1c461c85dbb401e/packages/mongo-item/src/index.ts#L267)

Reduces an array of `items` down to the string representations of their
respective ObjectId instances.

### Type Parameters

#### T

`T` *extends* `ObjectId`

### Parameters

#### items

[`IdItemArray`](../type-aliases/IdItemArray.md)\<`T`\>

### Returns

`string`[]

## Call Signature

> **itemToStringId**\<`T`\>(`itemOrItems`): `Arrayable`\<`string`\>

Defined in: [index.ts:272](https://github.com/Xunnamius/mongo-utils/blob/30f283970ee47dbb7ec096d6e1c461c85dbb401e/packages/mongo-item/src/index.ts#L272)

Reduces `itemOrItems` down to the string representation(s) of its
ObjectId instance(s).

### Type Parameters

#### T

`T` *extends* `ObjectId`

### Parameters

#### itemOrItems

[`IdItem`](../type-aliases/IdItem.md)\<`T`\> | [`IdItemArray`](../type-aliases/IdItemArray.md)\<`T`\>

### Returns

`Arrayable`\<`string`\>
