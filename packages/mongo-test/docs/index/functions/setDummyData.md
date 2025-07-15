[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setDummyData

# Function: setDummyData()

> **setDummyData**(`dataFn`): `void`

Defined in: [packages/mongo-test/src/index.ts:161](https://github.com/Xunnamius/mongo-utils/blob/170f60129a434186097720a50e45ec85181864f4/packages/mongo-test/src/index.ts#L161)

Sets global dummy data singleton (which already includes some built-in
defaults).

This function must be called before any call to `getDummyData` or an error
will be thrown.

## Parameters

### dataFn

[`Functionable`](../type-aliases/Functionable.md)\<`undefined` \| [`DummyData`](../type-aliases/DummyData.md)\>

## Returns

`void`
