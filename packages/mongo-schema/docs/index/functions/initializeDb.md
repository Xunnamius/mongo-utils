[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / initializeDb

# Function: initializeDb()

> **initializeDb**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [mongo-schema/src/index.ts:215](https://github.com/Xunnamius/mongo-utils/blob/24af83c1eb4ad61ca8000850d32c8441db798bb0/packages/mongo-schema/src/index.ts#L215)

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
