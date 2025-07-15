[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setDummyData

# Function: setDummyData()

> **setDummyData**(`dataFn`): `void`

Defined in: [packages/mongo-test/src/index.ts:161](https://github.com/Xunnamius/mongo-utils/blob/8747a56a8e988c89d29bdd6b87729b00fdd17503/packages/mongo-test/src/index.ts#L161)

Sets global dummy data singleton (which already includes some built-in
defaults).

This function must be called before any call to `getDummyData` or an error
will be thrown.

## Parameters

### dataFn

[`Functionable`](../type-aliases/Functionable.md)\<`undefined` \| [`DummyData`](../type-aliases/DummyData.md)\>

## Returns

`void`
