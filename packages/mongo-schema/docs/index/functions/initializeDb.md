[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / initializeDb

# Function: initializeDb()

> **initializeDb**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [mongo-schema/src/index.ts:216](https://github.com/Xunnamius/mongo-utils/blob/6752859d077967d85bc29849c2e5df89e9a031eb/packages/mongo-schema/src/index.ts#L216)

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
