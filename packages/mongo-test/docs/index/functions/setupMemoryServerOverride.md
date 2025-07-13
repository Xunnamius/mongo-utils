[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setupMemoryServerOverride

# Function: setupMemoryServerOverride()

## Call Signature

> **setupMemoryServerOverride**(`options`): [`SetupMemoryServerOverrideReturnType`](../type-aliases/SetupMemoryServerOverrideReturnType.md)

Defined in: [mongo-test/src/index.ts:201](https://github.com/Xunnamius/mongo-utils/blob/2c2d08fac5a6c27f61576027effcc96f7546f6a8/packages/mongo-test/src/index.ts#L201)

Setup per-test versions of the mongodb client and database connections using
jest lifecycle hooks.

**WARNING:** you must call `initializeMemoryServerOverride` manually!

**WARNING:** if calling `setSchemaConfig` or `setDummyData` manually, it must
be called _before_ `setupMemoryServerOverride`!

### Parameters

#### options

[`SetupMemoryServerOverrideOptions`](../type-aliases/SetupMemoryServerOverrideOptions.md) & `object`

### Returns

[`SetupMemoryServerOverrideReturnType`](../type-aliases/SetupMemoryServerOverrideReturnType.md)

## Call Signature

> **setupMemoryServerOverride**(`options?`): `Omit`\<[`SetupMemoryServerOverrideReturnType`](../type-aliases/SetupMemoryServerOverrideReturnType.md), `"initializeMemoryServerOverride"`\>

Defined in: [mongo-test/src/index.ts:211](https://github.com/Xunnamius/mongo-utils/blob/2c2d08fac5a6c27f61576027effcc96f7546f6a8/packages/mongo-test/src/index.ts#L211)

Setup per-test versions of the mongodb client and database connections using
jest lifecycle hooks.

**WARNING:** if calling `setSchemaConfig` or `setDummyData` manually, it must
be called _before_ `setupMemoryServerOverride`!

### Parameters

#### options?

[`SetupMemoryServerOverrideOptions`](../type-aliases/SetupMemoryServerOverrideOptions.md)

### Returns

`Omit`\<[`SetupMemoryServerOverrideReturnType`](../type-aliases/SetupMemoryServerOverrideReturnType.md), `"initializeMemoryServerOverride"`\>
