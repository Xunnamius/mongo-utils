[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setDummyData

# Function: setDummyData()

> **setDummyData**(`schemaFn`): `void`

Defined in: [mongo-test/src/index.ts:41](https://github.com/Xunnamius/mongo-utils/blob/3fca190c25d9eb11f9f0d26a5f7526b5b45a52b2/packages/mongo-test/src/index.ts#L41)

Sets global dummy data singleton (which already includes some built-in
defaults).

This function must be called before any call to `getDummyData` or an error
will be thrown.

## Parameters

### schemaFn

[`Functionable`](../type-aliases/Functionable.md)\<[`DummyData`](../type-aliases/DummyData.md)\>

## Returns

`void`
