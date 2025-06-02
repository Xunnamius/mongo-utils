[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / getAliasFromName

# Function: getAliasFromName()

> **getAliasFromName**(`nameActual`): `string`[]

Defined in: [mongo-schema/src/index.ts:69](https://github.com/Xunnamius/mongo-utils/blob/338b7589e5e51031f1d3bb7a988f4892cb8fc0ef/packages/mongo-schema/src/index.ts#L69)

Accepts a database name (or an alias) and returns one or more aliases. If the
named database has no aliases listed in the schema, said database name is
returned as a single-element array. If said database name is not listed in
the schema, an error is thrown.

## Parameters

### nameActual

`string`

## Returns

`string`[]
