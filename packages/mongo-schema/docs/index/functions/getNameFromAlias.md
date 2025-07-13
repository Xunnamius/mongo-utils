[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / getNameFromAlias

# Function: getNameFromAlias()

> **getNameFromAlias**(`alias`): `string`

Defined in: [mongo-schema/src/index.ts:53](https://github.com/Xunnamius/mongo-utils/blob/1d7d3698d252dda690d492a169428cc4921f850e/packages/mongo-schema/src/index.ts#L53)

Accepts a database alias (or real name) and returns its real name.

If the actual database is not listed in the schema, an error is thrown; that
is: if this function doesn't throw, `alias` _must_ either be (1) a
`nameActual` in `schema.databases` or (2) successfully maps to one.

## Parameters

### alias

`string`

## Returns

`string`
