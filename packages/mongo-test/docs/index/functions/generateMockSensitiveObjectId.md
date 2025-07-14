[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / generateMockSensitiveObjectId

# Function: generateMockSensitiveObjectId()

> **generateMockSensitiveObjectId**(): `ObjectId`

Defined in: [mongo-test/src/index.ts:385](https://github.com/Xunnamius/mongo-utils/blob/2dfe9a5821aec455c625ca725941516da4c8d29f/packages/mongo-test/src/index.ts#L385)

Creates an ObjectId by explicitly passing `mockDateNowMs` as the
inception time, which is the same thing that ObjectId does internally
with the real `Date.now`.

**This should only be used in modules with import side-effects that execute
before `useMockDateNow` is called** later in downstream code. If you are
unsure, you probably don't need to use this function and should just create a
new ObjectId instead.

The point of this function is to avoid race conditions when mocking parts of
the Date object that _sometimes_ result in _later_ calls to
ObjectId generating IDs that were _less_ than the IDs generated
_before_ it.

## Returns

`ObjectId`
