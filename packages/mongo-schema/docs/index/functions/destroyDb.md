[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / destroyDb

# Function: destroyDb()

> **destroyDb**(`__namedParameters`): `Promise`\<`boolean`\>

Defined in: [mongo-schema/src/index.ts:193](https://github.com/Xunnamius/mongo-utils/blob/e3ec31e0a6fc665c34c6cfcada5f75d068e58b2c/packages/mongo-schema/src/index.ts#L193)

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
