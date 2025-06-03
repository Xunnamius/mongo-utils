[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / setSchemaConfig

# Function: setSchemaConfig()

> **setSchemaConfig**(`schemaFn`): `void`

Defined in: [mongo-schema/src/index.ts:27](https://github.com/Xunnamius/mongo-utils/blob/24af83c1eb4ad61ca8000850d32c8441db798bb0/packages/mongo-schema/src/index.ts#L27)

Sets global schema singleton (which already includes some built-in defaults).

This function must be called before any call to `getSchemaConfig` or an error
will be thrown.

## Parameters

### schemaFn

() => [`DbSchema`](../type-aliases/DbSchema.md)

## Returns

`void`
