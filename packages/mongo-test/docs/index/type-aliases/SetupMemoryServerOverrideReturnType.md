[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / SetupMemoryServerOverrideReturnType

# Type Alias: SetupMemoryServerOverrideReturnType

> **SetupMemoryServerOverrideReturnType** = `object`

Defined in: [mongo-test/src/index.ts:78](https://github.com/Xunnamius/mongo-utils/blob/7bdf5df8efa1ef93abd7bb3fdb53c4692e49a788/packages/mongo-test/src/index.ts#L78)

## Properties

### data

> **data**: [`DummyData`](DummyData.md) \| `undefined`

Defined in: [mongo-test/src/index.ts:117](https://github.com/Xunnamius/mongo-utils/blob/7bdf5df8efa1ef93abd7bb3fdb53c4692e49a788/packages/mongo-test/src/index.ts#L117)

Reified dummy data object (i.e. what was passed to
`setupMemoryServerOverride` resolved to an object).

***

### initializeMemoryServerOverride()

> **initializeMemoryServerOverride**: () => `Promise`\<`void`\>

Defined in: [mongo-test/src/index.ts:89](https://github.com/Xunnamius/mongo-utils/blob/7bdf5df8efa1ef93abd7bb3fdb53c4692e49a788/packages/mongo-test/src/index.ts#L89)

Initialize a dummy in-memory mongodb memory server and client and override
internal memory so that all mongo-related tooling uses them. This function
must be called at least once before any attempt is made to connect or
initialize any underlying databases.

**WARNING: invoking this function more than once without also calling
`killMemoryServerOverride` in-between invocations may lead to undefined
behavior.**

#### Returns

`Promise`\<`void`\>

***

### killMemoryServerOverride()

> **killMemoryServerOverride**: () => `Promise`\<`void`\>

Defined in: [mongo-test/src/index.ts:97](https://github.com/Xunnamius/mongo-utils/blob/7bdf5df8efa1ef93abd7bb3fdb53c4692e49a788/packages/mongo-test/src/index.ts#L97)

Calls closeClient, and then MongoMemoryServer.stop on the
internal mongodb memory server.

This function is always called once automatically by Jest via the
`afterAll` hook.

#### Returns

`Promise`\<`void`\>

***

### reinitializeServerDatabases()

> **reinitializeServerDatabases**: () => `Promise`\<`void`\>

Defined in: [mongo-test/src/index.ts:102](https://github.com/Xunnamius/mongo-utils/blob/7bdf5df8efa1ef93abd7bb3fdb53c4692e49a788/packages/mongo-test/src/index.ts#L102)

Reset the dummy mongodb server databases back to their initial states, but
leave the internal server-client connection alone.

#### Returns

`Promise`\<`void`\>

***

### resetSharedMemory

> **resetSharedMemory**: *typeof* `resetSharedMemory`

Defined in: [mongo-test/src/index.ts:107](https://github.com/Xunnamius/mongo-utils/blob/7bdf5df8efa1ef93abd7bb3fdb53c4692e49a788/packages/mongo-test/src/index.ts#L107)

Dangerously resets internal memory shared across `@-xun/mongo-X` packages
to its initial state.

***

### schema

> **schema**: `DbSchema` \| `undefined`

Defined in: [mongo-test/src/index.ts:112](https://github.com/Xunnamius/mongo-utils/blob/7bdf5df8efa1ef93abd7bb3fdb53c4692e49a788/packages/mongo-test/src/index.ts#L112)

Reified schema object (i.e. what was passed to `setupMemoryServerOverride`
resolved to an object).
