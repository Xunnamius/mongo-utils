[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setDummyData

# Function: setDummyData()

> **setDummyData**(`schemaFn`): `void`

Defined in: [mongo-test/src/index.ts:38](https://github.com/Xunnamius/mongo-utils/blob/9457593fbddb1a2627beb438b8436c6e06424188/packages/mongo-test/src/index.ts#L38)

Sets global dummy data singleton (which already includes some built-in
defaults).

This function must be called before any call to `getDummyData` or an error
will be thrown.

## Parameters

### schemaFn

() => [`DummyData`](../type-aliases/DummyData.md)

## Returns

`void`
