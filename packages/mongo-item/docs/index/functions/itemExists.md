[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / itemExists

# Function: itemExists()

## Call Signature

> **itemExists**\<`T`\>(`collection`, `id`, `options?`): `Promise`\<`boolean`\>

Defined in: [index.ts:53](https://github.com/Xunnamius/mongo-utils/blob/61eaaa91357753eefdb0e76f611558f417e7cbc4/packages/mongo-item/src/index.ts#L53)

Checks if an item matching `{ _id: id }` exists within `collection`,
returning the result (`boolean`).

This function **does not throw** if the item is not found.

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

Defined in: [index.ts:65](https://github.com/Xunnamius/mongo-utils/blob/61eaaa91357753eefdb0e76f611558f417e7cbc4/packages/mongo-item/src/index.ts#L65)

Checks if an item matching `{ [descriptor.key]: descriptor.id }` exists
within `collection`,
returning the result (`boolean`).

This function **does not throw** if the item is not found.

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

## Call Signature

> **itemExists**\<`T`\>(`collection`, `id`, `options?`): `Promise`\<`boolean`\>

Defined in: [index.ts:76](https://github.com/Xunnamius/mongo-utils/blob/61eaaa91357753eefdb0e76f611558f417e7cbc4/packages/mongo-item/src/index.ts#L76)

Checks if an item matching `id` exists within `collection`, returning the
result (`boolean`).

This function **does not throw** if the item is not found.

### Type Parameters

#### T

`T` *extends* `Document`

### Parameters

#### collection

`Collection`\<`T`\>

#### id

[`ItemExistsIdParam`](../type-aliases/ItemExistsIdParam.md)

#### options?

[`ItemExistsOptions`](../type-aliases/ItemExistsOptions.md)

### Returns

`Promise`\<`boolean`\>
