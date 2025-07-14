[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / destroyDb

# Function: destroyDb()

> **destroyDb**(`__namedParameters`): `Promise`\<`boolean`\>

Defined in: [mongo-schema/src/index.ts:193](https://github.com/Xunnamius/mongo-utils/blob/dc008237cea91d9e0ab0ac3c2601605520a63c0f/packages/mongo-schema/src/index.ts#L193)

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
