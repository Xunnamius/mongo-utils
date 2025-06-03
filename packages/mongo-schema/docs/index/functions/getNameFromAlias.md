[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / getNameFromAlias

# Function: getNameFromAlias()

> **getNameFromAlias**(`alias`): `string`

Defined in: [mongo-schema/src/index.ts:51](https://github.com/Xunnamius/mongo-utils/blob/a42d1f3bf6df8ecad890c565a46f81f53a45682a/packages/mongo-schema/src/index.ts#L51)

Accepts a database alias (or real name) and returns its real name.

If the actual database is not listed in the schema, an error is thrown; that
is: if this function doesn't throw, `alias` _must_ either be (1) a
`nameActual` in `schema.databases` or (2) successfully maps to one.

## Parameters

### alias

`string`

## Returns

`string`
