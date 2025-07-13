[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / getAliasFromName

# Function: getAliasFromName()

> **getAliasFromName**(`nameActual`): `string`[]

Defined in: [mongo-schema/src/index.ts:78](https://github.com/Xunnamius/mongo-utils/blob/1d7d3698d252dda690d492a169428cc4921f850e/packages/mongo-schema/src/index.ts#L78)

Accepts a database name (or an alias) and returns one or more aliases.

If the named database has no aliases listed in the schema, said database name
is returned as a single-element array. If said database name is not listed in
the schema, an error is thrown.

That is: if this function doesn't throw, `nameActual` _must_ (1) be in
`schema.databases` and (2) map to zero or more aliases.

## Parameters

### nameActual

`string`

## Returns

`string`[]
