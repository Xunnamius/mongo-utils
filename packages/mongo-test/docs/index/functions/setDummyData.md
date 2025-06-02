[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setDummyData

# Function: setDummyData()

> **setDummyData**(`schemaFn`): `void`

Defined in: [mongo-test/src/index.ts:38](https://github.com/Xunnamius/mongo-utils/blob/7b7238ccb96b3e04fca5f7608ea8476890bbb153/packages/mongo-test/src/index.ts#L38)

Sets global dummy data singleton (which already includes some built-in
defaults).

This function must be called before any call to `getDummyData` or an error
will be thrown.

## Parameters

### schemaFn

() => [`DummyData`](../type-aliases/DummyData.md)

## Returns

`void`
