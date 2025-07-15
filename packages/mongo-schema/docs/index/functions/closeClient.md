[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / closeClient

# Function: closeClient()

> **closeClient**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [packages/mongo-schema/src/index.ts:133](https://github.com/Xunnamius/mongo-utils/blob/7b25b3728184acdc4dd308dd54ecbebd6fc132bd/packages/mongo-schema/src/index.ts#L133)

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
