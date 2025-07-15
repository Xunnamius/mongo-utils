[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / destroyDb

# Function: destroyDb()

> **destroyDb**(`__namedParameters`): `Promise`\<`boolean`\>

Defined in: [packages/mongo-schema/src/index.ts:198](https://github.com/Xunnamius/mongo-utils/blob/7b25b3728184acdc4dd308dd54ecbebd6fc132bd/packages/mongo-schema/src/index.ts#L198)

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
