[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / destroyDb

# Function: destroyDb()

> **destroyDb**(`__namedParameters`): `Promise`\<`boolean`\>

Defined in: [mongo-schema/src/index.ts:193](https://github.com/Xunnamius/mongo-utils/blob/a42d1f3bf6df8ecad890c565a46f81f53a45682a/packages/mongo-schema/src/index.ts#L193)

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
