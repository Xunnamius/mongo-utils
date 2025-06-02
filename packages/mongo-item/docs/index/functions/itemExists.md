[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / itemExists

# Function: itemExists()

## Call Signature

> **itemExists**\<`T`\>(`collection`, `id`, `options?`): `Promise`\<`boolean`\>

Defined in: [index.ts:48](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L48)

Checks if an item matching `{ _id: id }` exists within `collection`.

### Type Parameters

#### T

`T` *extends* `Document`

### Parameters

#### collection

`Collection`\<`T`\>

#### id

`string` | `ObjectId`

#### options?

[`ItemExistsOptions`](../type-aliases/ItemExistsOptions.md)

### Returns

`Promise`\<`boolean`\>

## Call Signature

> **itemExists**\<`T`\>(`collection`, `descriptor`, `options?`): `Promise`\<`boolean`\>

Defined in: [index.ts:57](https://github.com/Xunnamius/mongo-utils/blob/0a3dc93c94448d436dc8dc4e3070f0fd468aa02e/packages/mongo-item/src/index.ts#L57)

Checks if an item matching `{ [descriptor.key]: descriptor.id }` exists
within `collection`.

### Type Parameters

#### T

`T` *extends* `Document`

### Parameters

#### collection

`Collection`\<`T`\>

#### descriptor

##### id

`string` \| `ObjectId`

##### key

`string`

#### options?

[`ItemExistsOptions`](../type-aliases/ItemExistsOptions.md)

### Returns

`Promise`\<`boolean`\>
