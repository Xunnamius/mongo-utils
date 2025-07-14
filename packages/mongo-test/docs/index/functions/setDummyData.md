[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setDummyData

# Function: setDummyData()

> **setDummyData**(`schemaFn`): `void`

Defined in: [mongo-test/src/index.ts:135](https://github.com/Xunnamius/mongo-utils/blob/2dfe9a5821aec455c625ca725941516da4c8d29f/packages/mongo-test/src/index.ts#L135)

Sets global dummy data singleton (which already includes some built-in
defaults).

This function must be called before any call to `getDummyData` or an error
will be thrown.

## Parameters

### schemaFn

[`Functionable`](../type-aliases/Functionable.md)\<[`DummyData`](../type-aliases/DummyData.md)\>

## Returns

`void`
