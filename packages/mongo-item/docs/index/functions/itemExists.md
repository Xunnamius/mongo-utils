[**@-xun/mongo-item**](../../README.md)

***

[@-xun/mongo-item](../../README.md) / [index](../README.md) / itemExists

# Function: itemExists()

## Call Signature

> **itemExists**\<`T`\>(`collection`, `id`, `options?`): `Promise`\<`boolean`\>

Defined in: [index.ts:49](https://github.com/Xunnamius/mongo-utils/blob/6d8fd135282108c666a758aaa66b65ddbaefc6f2/packages/mongo-item/src/index.ts#L49)

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

Defined in: [index.ts:58](https://github.com/Xunnamius/mongo-utils/blob/6d8fd135282108c666a758aaa66b65ddbaefc6f2/packages/mongo-item/src/index.ts#L58)

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

## Call Signature

> **itemExists**\<`T`\>(`collection`, `id`, `options?`): `Promise`\<`boolean`\>

Defined in: [index.ts:66](https://github.com/Xunnamius/mongo-utils/blob/6d8fd135282108c666a758aaa66b65ddbaefc6f2/packages/mongo-item/src/index.ts#L66)

Checks if an item matching `id` exists within `collection`.

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
