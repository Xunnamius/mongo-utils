[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setupMemoryServerOverride

# Function: setupMemoryServerOverride()

> **setupMemoryServerOverride**(`options?`): [`SetupMemoryServerOverrideReturnType`](../type-aliases/SetupMemoryServerOverrideReturnType.md)

Defined in: [packages/mongo-test/src/index.ts:253](https://github.com/Xunnamius/mongo-utils/blob/32ba933cdcc5496e9bd66fa6760c833e1df18e87/packages/mongo-test/src/index.ts#L253)

Setup per-test versions of the mongodb client and database connections using
jest lifecycle hooks.

If using `defer: 'without-hooks'` mode specifically,
`initializeMemoryServerOverride` must be called manually at least once.

**WARNING:** if calling `setSchemaConfig` or `setDummyData` manually, they
must be invoked _before_ `setupMemoryServerOverride` is called. When using
`defer` mode, `setSchemaConfig` and `setDummyData` can be invoked after
`initializeMemoryServerOverride` is called but _must be invoked before
`reinitializeServerDatabases` is called_.

## Parameters

### options?

[`SetupMemoryServerOverrideOptions`](../type-aliases/SetupMemoryServerOverrideOptions.md)

## Returns

[`SetupMemoryServerOverrideReturnType`](../type-aliases/SetupMemoryServerOverrideReturnType.md)
