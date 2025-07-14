[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / SetupMemoryServerOverrideReturnType

# Type Alias: SetupMemoryServerOverrideReturnType

> **SetupMemoryServerOverrideReturnType** = `object`

Defined in: [mongo-test/src/index.ts:82](https://github.com/Xunnamius/mongo-utils/blob/2dfe9a5821aec455c625ca725941516da4c8d29f/packages/mongo-test/src/index.ts#L82)

## Properties

### data

> **data**: [`DummyData`](DummyData.md) \| `undefined`

Defined in: [mongo-test/src/index.ts:125](https://github.com/Xunnamius/mongo-utils/blob/2dfe9a5821aec455c625ca725941516da4c8d29f/packages/mongo-test/src/index.ts#L125)

Reified dummy data object (i.e. what was passed to
`setupMemoryServerOverride` resolved to an object).

***

### initializeMemoryServerOverride()

> **initializeMemoryServerOverride**: () => `Promise`\<`void`\>

Defined in: [mongo-test/src/index.ts:97](https://github.com/Xunnamius/mongo-utils/blob/2dfe9a5821aec455c625ca725941516da4c8d29f/packages/mongo-test/src/index.ts#L97)

Initialize a dummy in-memory mongodb memory server and client and override
internal memory so that all mongo-related tooling uses them. This function
must be called at least once before any attempt is made to connect or
initialize any underlying databases.

**WARNING: invoking this function more than once without also calling
`killMemoryServerOverride` in-between invocations may lead to undefined
behavior.**

**WARNING:** if calling `setSchemaConfig` or `setDummyData` manually, they
must be invoked before `initializeMemoryServerOverride` is called manually
when using `defer: 'without-initialization'`!

#### Returns

`Promise`\<`void`\>

***

### killMemoryServerOverride()

> **killMemoryServerOverride**: () => `Promise`\<`void`\>

Defined in: [mongo-test/src/index.ts:105](https://github.com/Xunnamius/mongo-utils/blob/2dfe9a5821aec455c625ca725941516da4c8d29f/packages/mongo-test/src/index.ts#L105)

Calls closeClient, and then MongoMemoryServer.stop on the
internal mongodb memory server.

This function is always called once automatically by Jest via the
`afterAll` hook.

#### Returns

`Promise`\<`void`\>

***

### reinitializeServerDatabases()

> **reinitializeServerDatabases**: () => `Promise`\<`void`\>

Defined in: [mongo-test/src/index.ts:110](https://github.com/Xunnamius/mongo-utils/blob/2dfe9a5821aec455c625ca725941516da4c8d29f/packages/mongo-test/src/index.ts#L110)

Reset the dummy mongodb server databases back to their initial states, but
leave the internal server-client connection alone.

#### Returns

`Promise`\<`void`\>

***

### resetSharedMemory

> **resetSharedMemory**: *typeof* `resetSharedMemory`

Defined in: [mongo-test/src/index.ts:115](https://github.com/Xunnamius/mongo-utils/blob/2dfe9a5821aec455c625ca725941516da4c8d29f/packages/mongo-test/src/index.ts#L115)

Dangerously resets internal memory shared across `@-xun/mongo-X` packages
to its initial state.

***

### schema

> **schema**: `DbSchema` \| `undefined`

Defined in: [mongo-test/src/index.ts:120](https://github.com/Xunnamius/mongo-utils/blob/2dfe9a5821aec455c625ca725941516da4c8d29f/packages/mongo-test/src/index.ts#L120)

Reified schema object (i.e. what was passed to `setupMemoryServerOverride`
resolved to an object).
