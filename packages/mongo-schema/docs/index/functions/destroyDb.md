[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / destroyDb

# Function: destroyDb()

> **destroyDb**(`__namedParameters`): `Promise`\<`boolean`\>

Defined in: [packages/mongo-schema/src/index.ts:231](https://github.com/Xunnamius/mongo-utils/blob/22de939f192fb2c686749b8a378c031c83e2b0b0/packages/mongo-schema/src/index.ts#L231)

Drops a database, destroying its collections. If the database does not exist
in shared memory before calling this function, this function becomes a no-op
(but still returns `true`).

## Parameters

### \_\_namedParameters

#### name

`string`

The name or alias of the database to destroy.

## Returns

`Promise`\<`boolean`\>
