[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / itemToStringId

# Function: itemToStringId()

## Call Signature

> **itemToStringId**\<`T`\>(`item`): `string`

Defined in: [index.ts:230](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L230)

Reduces an `item` down to the string representation of its `ObjectId`
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

Defined in: [index.ts:235](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L235)

Reduces an array of `items` down to the string representations of their
respective `ObjectId` instances.

### Type Parameters

#### T

`T` *extends* `ObjectId`

### Parameters

#### items

[`IdItemArray`](../type-aliases/IdItemArray.md)\<`T`\>

### Returns

`string`[]
