[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / destroyDb

# Function: destroyDb()

> **destroyDb**(`__namedParameters`): `Promise`\<`boolean`\>

Defined in: [mongo-schema/src/index.ts:195](https://github.com/Xunnamius/mongo-utils/blob/b7bf3f0b1614e2f06b991c15bbf85968ab91d50b/packages/mongo-schema/src/index.ts#L195)

Drops a database, destroying its collections. If the database does not exist
before calling this function, it will be created first then dropped.

Note that this function does not clear the destroyed database's Db instance
from internal memory for performance reasons.

## Parameters

### \_\_namedParameters

#### name

`string`

The name or alias of the database to destroy.

## Returns

`Promise`\<`boolean`\>
