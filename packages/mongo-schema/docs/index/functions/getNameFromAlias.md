[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / getNameFromAlias

# Function: getNameFromAlias()

> **getNameFromAlias**(`alias`): `string`

Defined in: [mongo-schema/src/index.ts:52](https://github.com/Xunnamius/mongo-utils/blob/da36b2f7ed743ec7d8e66e842457ff4af33ae36e/packages/mongo-schema/src/index.ts#L52)

Accepts a database alias (or real name) and returns its real name.

If the actual database is not listed in the schema, an error is thrown; that
is: if this function doesn't throw, `alias` _must_ either be (1) a
`nameActual` in `schema.databases` or (2) successfully maps to one.

## Parameters

### alias

`string`

## Returns

`string`
