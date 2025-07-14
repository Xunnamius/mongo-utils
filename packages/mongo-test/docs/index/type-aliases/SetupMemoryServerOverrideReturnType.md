[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / SetupMemoryServerOverrideReturnType

# Type Alias: SetupMemoryServerOverrideReturnType

> **SetupMemoryServerOverrideReturnType** = `object`

Defined in: [mongo-test/src/index.ts:82](https://github.com/Xunnamius/mongo-utils/blob/32f7f4be31d1b2d896b46940a0a2f1886cd751cd/packages/mongo-test/src/index.ts#L82)

## Properties

### data

> **data**: [`DummyData`](DummyData.md) \| `undefined`

Defined in: [mongo-test/src/index.ts:130](https://github.com/Xunnamius/mongo-utils/blob/32f7f4be31d1b2d896b46940a0a2f1886cd751cd/packages/mongo-test/src/index.ts#L130)

Reified dummy data object (i.e. what was passed to
`setupMemoryServerOverride` resolved to an object).

***

### initializeMemoryServerOverride()

> **initializeMemoryServerOverride**: () => `Promise`\<`void`\>

Defined in: [mongo-test/src/index.ts:102](https://github.com/Xunnamius/mongo-utils/blob/32f7f4be31d1b2d896b46940a0a2f1886cd751cd/packages/mongo-test/src/index.ts#L102)

Initialize a dummy in-memory mongodb memory server and client and override
internal memory so that all mongo-related tooling uses them. This function
must be called at least once before any attempt is made to connect or
initialize any underlying databases.

If using `defer` mode, you may also wish to call
`reinitializeServerDatabases` afterwards to initialize the underlying
databases and collections.

**WARNING: invoking this function more than once without also calling
`killMemoryServerOverride` in-between invocations may lead to undefined
behavior.**

**WARNING:** if calling `setSchemaConfig` or `setDummyData` manually, they
can be invoked after `initializeMemoryServerOverride` is called, but _must
be invoked before `reinitializeServerDatabases` is called_ when using
`defer` mode.

#### Returns

`Promise`\<`void`\>

***

### killMemoryServerOverride()

> **killMemoryServerOverride**: () => `Promise`\<`void`\>

Defined in: [mongo-test/src/index.ts:110](https://github.com/Xunnamius/mongo-utils/blob/32f7f4be31d1b2d896b46940a0a2f1886cd751cd/packages/mongo-test/src/index.ts#L110)

Calls `closeClient`, and then `MongoMemoryServer`stop} on the internal
mongodb memory server.

This function is always called once automatically by Jest via the
`afterAll` hook.

#### Returns

`Promise`\<`void`\>

***

### reinitializeServerDatabases()

> **reinitializeServerDatabases**: () => `Promise`\<`void`\>

Defined in: [mongo-test/src/index.ts:115](https://github.com/Xunnamius/mongo-utils/blob/32f7f4be31d1b2d896b46940a0a2f1886cd751cd/packages/mongo-test/src/index.ts#L115)

Reset the dummy mongodb server databases back to their initial states, but
leave the internal server-client connection alone.

#### Returns

`Promise`\<`void`\>

***

### resetSharedMemory

> **resetSharedMemory**: *typeof* `resetSharedMemory`

Defined in: [mongo-test/src/index.ts:120](https://github.com/Xunnamius/mongo-utils/blob/32f7f4be31d1b2d896b46940a0a2f1886cd751cd/packages/mongo-test/src/index.ts#L120)

Dangerously resets internal memory shared across `@-xun/mongo-X` packages
to its initial state.

***

### schema

> **schema**: `DbSchema` \| `undefined`

Defined in: [mongo-test/src/index.ts:125](https://github.com/Xunnamius/mongo-utils/blob/32f7f4be31d1b2d896b46940a0a2f1886cd751cd/packages/mongo-test/src/index.ts#L125)

Reified schema object (i.e. what was passed to `setupMemoryServerOverride`
resolved to an object).
