[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / SetupMemoryServerOverrideReturnType

# Type Alias: SetupMemoryServerOverrideReturnType

> **SetupMemoryServerOverrideReturnType** = `object`

Defined in: [mongo-test/src/index.ts:78](https://github.com/Xunnamius/mongo-utils/blob/2c2d08fac5a6c27f61576027effcc96f7546f6a8/packages/mongo-test/src/index.ts#L78)

## Properties

### data

> **data**: [`DummyData`](DummyData.md) \| `undefined`

Defined in: [mongo-test/src/index.ts:103](https://github.com/Xunnamius/mongo-utils/blob/2c2d08fac5a6c27f61576027effcc96f7546f6a8/packages/mongo-test/src/index.ts#L103)

Reified dummy data object (i.e. what was passed to
`setupMemoryServerOverride` resolved to an object).

***

### initializeMemoryServerOverride()

> **initializeMemoryServerOverride**: () => `Promise`\<`void`\>

Defined in: [mongo-test/src/index.ts:84](https://github.com/Xunnamius/mongo-utils/blob/2c2d08fac5a6c27f61576027effcc96f7546f6a8/packages/mongo-test/src/index.ts#L84)

Initialize the in-memory mongodb memory server and override internal memory
so that it is used. This function must be called at least once before any
attempt is made to connect to the underlying database.

#### Returns

`Promise`\<`void`\>

***

### reinitializeServer()

> **reinitializeServer**: () => `Promise`\<`void`\>

Defined in: [mongo-test/src/index.ts:88](https://github.com/Xunnamius/mongo-utils/blob/2c2d08fac5a6c27f61576027effcc96f7546f6a8/packages/mongo-test/src/index.ts#L88)

Reset the dummy MongoDb server databases back to their initial states.

#### Returns

`Promise`\<`void`\>

***

### resetSharedMemory

> **resetSharedMemory**: *typeof* `resetSharedMemory`

Defined in: [mongo-test/src/index.ts:93](https://github.com/Xunnamius/mongo-utils/blob/2c2d08fac5a6c27f61576027effcc96f7546f6a8/packages/mongo-test/src/index.ts#L93)

Dangerously resets internal memory shared across `@-xun/mongo-X` packages
to its initial state.

***

### schema

> **schema**: `DbSchema` \| `undefined`

Defined in: [mongo-test/src/index.ts:98](https://github.com/Xunnamius/mongo-utils/blob/2c2d08fac5a6c27f61576027effcc96f7546f6a8/packages/mongo-test/src/index.ts#L98)

Reified schema object (i.e. what was passed to `setupMemoryServerOverride`
resolved to an object).
