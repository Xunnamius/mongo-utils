[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / destroyDb

# Function: destroyDb()

> **destroyDb**(`__namedParameters`): `Promise`\<`boolean`\>

Defined in: [mongo-schema/src/index.ts:195](https://github.com/Xunnamius/mongo-utils/blob/215b087cc1b8fd6914cf3fbe657f77626466f333/packages/mongo-schema/src/index.ts#L195)

Drops a database, destroying its collections. If the database does not exist
before calling this function, it will be created first then dropped.

Note that this function does not clear the destroyed database's Db instance
from internal memory.

## Parameters

### \_\_namedParameters

#### name

`string`

The name or alias of the database to destroy.

## Returns

`Promise`\<`boolean`\>
