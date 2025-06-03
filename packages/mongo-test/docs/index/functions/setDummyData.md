[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setDummyData

# Function: setDummyData()

> **setDummyData**(`schemaFn`): `void`

Defined in: [mongo-test/src/index.ts:40](https://github.com/Xunnamius/mongo-utils/blob/5dae38e1cc28fd8c7677f5bf0a5fab35bb89b366/packages/mongo-test/src/index.ts#L40)

Sets global dummy data singleton (which already includes some built-in
defaults).

This function must be called before any call to `getDummyData` or an error
will be thrown.

## Parameters

### schemaFn

() => [`DummyData`](../type-aliases/DummyData.md)

## Returns

`void`
