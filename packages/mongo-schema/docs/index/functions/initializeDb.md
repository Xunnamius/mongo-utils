[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / initializeDb

# Function: initializeDb()

> **initializeDb**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [packages/mongo-schema/src/index.ts:221](https://github.com/Xunnamius/mongo-utils/blob/77082e38194fa309dd2d5b6f34405fcc81cec406/packages/mongo-schema/src/index.ts#L221)

Creates a database and initializes its collections. If the database does not
exist before calling this function, it will be created first. This function
should only be called on empty or brand new databases **and not on databases
with pre-existing collections.**

## Parameters

### \_\_namedParameters

#### name

`string`

The name or alias of the database to initialize.

## Returns

`Promise`\<`void`\>
