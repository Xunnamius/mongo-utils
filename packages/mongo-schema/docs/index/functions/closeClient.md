[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / closeClient

# Function: closeClient()

> **closeClient**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [mongo-schema/src/index.ts:127](https://github.com/Xunnamius/mongo-utils/blob/a2c37d2a89b0f062b340656f02cf8c9f66c5e7a4/packages/mongo-schema/src/index.ts#L127)

Kills the MongoClient instance and any related database connections and
clears shared memory.

If `clearCache` is `true` (default), internal shared memory will be cleared
when this function is called. Set this to `false` if invoking this function
anywhere other than at the top level of an application. Libraries meant to be
invoked by such applications should be wary when using this function to clear
shared memory since there could be multiple instances of this package in
memory that could be relying upon it.

## Parameters

### \_\_namedParameters

#### clearCache?

`boolean` = `true`

## Returns

`Promise`\<`void`\>
