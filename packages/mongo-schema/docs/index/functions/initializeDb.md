[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / initializeDb

# Function: initializeDb()

> **initializeDb**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [mongo-schema/src/index.ts:216](https://github.com/Xunnamius/mongo-utils/blob/a2c37d2a89b0f062b340656f02cf8c9f66c5e7a4/packages/mongo-schema/src/index.ts#L216)

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
