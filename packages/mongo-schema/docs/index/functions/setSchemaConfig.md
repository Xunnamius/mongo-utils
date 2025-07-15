[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / setSchemaConfig

# Function: setSchemaConfig()

> **setSchemaConfig**(`schemaFn`): `void`

Defined in: [packages/mongo-schema/src/index.ts:29](https://github.com/Xunnamius/mongo-utils/blob/6c3652e366db08824823159badff6f09e1290d0c/packages/mongo-schema/src/index.ts#L29)

Sets global schema singleton (which already includes some built-in defaults).

This function must be called before any call to `getSchemaConfig` or an error
will be thrown.

## Parameters

### schemaFn

[`Functionable`](../type-aliases/Functionable.md)\<`undefined` \| [`DbSchema`](../type-aliases/DbSchema.md)\>

## Returns

`void`
