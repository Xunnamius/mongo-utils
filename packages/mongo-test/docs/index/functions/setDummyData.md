[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setDummyData

# Function: setDummyData()

> **setDummyData**(`schemaFn`): `void`

Defined in: [mongo-test/src/index.ts:45](https://github.com/Xunnamius/mongo-utils/blob/7cfa70e74faea87417478ce206acc46284349fd3/packages/mongo-test/src/index.ts#L45)

Sets global dummy data singleton (which already includes some built-in
defaults).

This function must be called before any call to `getDummyData` or an error
will be thrown.

## Parameters

### schemaFn

[`Functionable`](../type-aliases/Functionable.md)\<[`DummyData`](../type-aliases/DummyData.md)\>

## Returns

`void`
