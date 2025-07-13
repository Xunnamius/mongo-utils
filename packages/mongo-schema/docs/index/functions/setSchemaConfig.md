[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / setSchemaConfig

# Function: setSchemaConfig()

> **setSchemaConfig**(`schemaFn`): `void`

Defined in: [mongo-schema/src/index.ts:29](https://github.com/Xunnamius/mongo-utils/blob/215b087cc1b8fd6914cf3fbe657f77626466f333/packages/mongo-schema/src/index.ts#L29)

Sets global schema singleton (which already includes some built-in defaults).

This function must be called before any call to `getSchemaConfig` or an error
will be thrown.

## Parameters

### schemaFn

[`Functionable`](../type-aliases/Functionable.md)\<[`DbSchema`](../type-aliases/DbSchema.md)\>

## Returns

`void`
