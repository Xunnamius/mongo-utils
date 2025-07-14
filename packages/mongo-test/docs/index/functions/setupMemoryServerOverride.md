[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setupMemoryServerOverride

# Function: setupMemoryServerOverride()

> **setupMemoryServerOverride**(`options?`): [`SetupMemoryServerOverrideReturnType`](../type-aliases/SetupMemoryServerOverrideReturnType.md)

Defined in: [mongo-test/src/index.ts:216](https://github.com/Xunnamius/mongo-utils/blob/3343ce66b0dc9028c5726affd9e45509aa5b1201/packages/mongo-test/src/index.ts#L216)

Setup per-test versions of the mongodb client and database connections using
jest lifecycle hooks.

If using `defer: 'without-initialization'`, `initializeMemoryServerOverride`
must be called manually at least once.

**WARNING:** if calling `setSchemaConfig` or `setDummyData` manually, they
must be invoked _before_ `setupMemoryServerOverride`!

## Parameters

### options?

[`SetupMemoryServerOverrideOptions`](../type-aliases/SetupMemoryServerOverrideOptions.md)

## Returns

[`SetupMemoryServerOverrideReturnType`](../type-aliases/SetupMemoryServerOverrideReturnType.md)
