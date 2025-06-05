[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / setSchemaConfig

# Function: setSchemaConfig()

> **setSchemaConfig**(`schemaFn`): `void`

Defined in: [mongo-schema/src/index.ts:28](https://github.com/Xunnamius/mongo-utils/blob/da36b2f7ed743ec7d8e66e842457ff4af33ae36e/packages/mongo-schema/src/index.ts#L28)

Sets global schema singleton (which already includes some built-in defaults).

This function must be called before any call to `getSchemaConfig` or an error
will be thrown.

## Parameters

### schemaFn

[`Functionable`](../type-aliases/Functionable.md)\<[`DbSchema`](../type-aliases/DbSchema.md)\>

## Returns

`void`
