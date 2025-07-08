[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / closeClient

# Function: closeClient()

> **closeClient**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [mongo-schema/src/index.ts:128](https://github.com/Xunnamius/mongo-utils/blob/e660bab1cfa1635b90c350f428af902be0cc655f/packages/mongo-schema/src/index.ts#L128)

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
