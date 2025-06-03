[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / setSchemaConfig

# Function: setSchemaConfig()

> **setSchemaConfig**(`schemaFn`): `void`

Defined in: [mongo-schema/src/index.ts:27](https://github.com/Xunnamius/mongo-utils/blob/cbbfc60f0aa219fa5ddd4eb8cc805a007ebd4902/packages/mongo-schema/src/index.ts#L27)

Sets global schema singleton (which already includes some built-in defaults).

This function must be called before any call to `getSchemaConfig` or an error
will be thrown.

## Parameters

### schemaFn

() => [`DbSchema`](../type-aliases/DbSchema.md)

## Returns

`void`
