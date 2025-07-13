[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setDummyData

# Function: setDummyData()

> **setDummyData**(`schemaFn`): `void`

Defined in: [mongo-test/src/index.ts:113](https://github.com/Xunnamius/mongo-utils/blob/2c2d08fac5a6c27f61576027effcc96f7546f6a8/packages/mongo-test/src/index.ts#L113)

Sets global dummy data singleton (which already includes some built-in
defaults).

This function must be called before any call to `getDummyData` or an error
will be thrown.

## Parameters

### schemaFn

[`Functionable`](../type-aliases/Functionable.md)\<[`DummyData`](../type-aliases/DummyData.md)\>

## Returns

`void`
