[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / setSchemaConfig

# Function: setSchemaConfig()

> **setSchemaConfig**(`schemaFn`): `void`

Defined in: [mongo-schema/src/index.ts:28](https://github.com/Xunnamius/mongo-utils/blob/de7eb2cb622eb37c8f7baa418d1b15b45f10fa44/packages/mongo-schema/src/index.ts#L28)

Sets global schema singleton (which already includes some built-in defaults).

This function must be called before any call to `getSchemaConfig` or an error
will be thrown.

## Parameters

### schemaFn

[`Functionable`](../type-aliases/Functionable.md)\<[`DbSchema`](../type-aliases/DbSchema.md)\>

## Returns

`void`
