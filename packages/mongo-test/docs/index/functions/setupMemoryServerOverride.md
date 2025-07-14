[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setupMemoryServerOverride

# Function: setupMemoryServerOverride()

> **setupMemoryServerOverride**(`options?`): [`SetupMemoryServerOverrideReturnType`](../type-aliases/SetupMemoryServerOverrideReturnType.md)

Defined in: [mongo-test/src/index.ts:227](https://github.com/Xunnamius/mongo-utils/blob/2dfe9a5821aec455c625ca725941516da4c8d29f/packages/mongo-test/src/index.ts#L227)

Setup per-test versions of the mongodb client and database connections using
jest lifecycle hooks.

If using `defer: 'without-initialization'`, `initializeMemoryServerOverride`
must be called manually at least once.

**WARNING:** if calling `setSchemaConfig` or `setDummyData` manually, they
must be invoked _before_ `setupMemoryServerOverride` calls
`initializeMemoryServerOverride` internally (or before
`initializeMemoryServerOverride` is called manually when using `defer:
'without-initialization'`)!

## Parameters

### options?

[`SetupMemoryServerOverrideOptions`](../type-aliases/SetupMemoryServerOverrideOptions.md)

## Returns

[`SetupMemoryServerOverrideReturnType`](../type-aliases/SetupMemoryServerOverrideReturnType.md)
