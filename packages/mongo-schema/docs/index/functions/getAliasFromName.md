[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / getAliasFromName

# Function: getAliasFromName()

> **getAliasFromName**(`nameActual`): `string`[]

Defined in: [packages/mongo-schema/src/index.ts:79](https://github.com/Xunnamius/mongo-utils/blob/22de939f192fb2c686749b8a378c031c83e2b0b0/packages/mongo-schema/src/index.ts#L79)

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
