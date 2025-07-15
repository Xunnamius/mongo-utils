[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / SetupMemoryServerOverrideReturnType

# Type Alias: SetupMemoryServerOverrideReturnType

> **SetupMemoryServerOverrideReturnType** = `object`

Defined in: [packages/mongo-test/src/index.ts:84](https://github.com/Xunnamius/mongo-utils/blob/78da2e96c8ecb2db1e9e0e0ecca9e2e7a885109d/packages/mongo-test/src/index.ts#L84)

## Properties

### data

> **data**: [`DummyData`](DummyData.md) \| `undefined`

Defined in: [packages/mongo-test/src/index.ts:151](https://github.com/Xunnamius/mongo-utils/blob/78da2e96c8ecb2db1e9e0e0ecca9e2e7a885109d/packages/mongo-test/src/index.ts#L151)

Reified dummy data object (i.e. what was passed to
`setupMemoryServerOverride` resolved to an object).

***

### initializeMemoryServerOverride()

> **initializeMemoryServerOverride**: () => `Promise`\<`void`\>

Defined in: [packages/mongo-test/src/index.ts:112](https://github.com/Xunnamius/mongo-utils/blob/78da2e96c8ecb2db1e9e0e0ecca9e2e7a885109d/packages/mongo-test/src/index.ts#L112)

Initialize a dummy in-memory mongodb memory server and client and override
internal memory so that all mongo-related tooling uses them.

If using `defer: true` mode, you do not need to call this function manually
as it has already been called for you. However, you may also wish to call
`reinitializeServerDatabases` at some point to initialize the underlying
databases and collections.

If using `defer: 'without-hooks'` mode, nothing is called for you. That is:
this function _must_ be called at least once before any attempt is made to
connect or initialize any underlying databases (such as with
`reinitializeServerDatabases`); afterwards, `killMemoryServerOverride` must
be called at least once, and must always be called before calling
`initializeMemoryServerOverride` again.

**WARNING: invoking this function more than once without also calling
`killMemoryServerOverride` in-between invocations may lead to undefined
behavior.**

**WARNING:** if calling `setSchemaConfig` or `setDummyData` manually in
`defer` mode, they can be invoked after `initializeMemoryServerOverride` is
called, but _must be invoked before `reinitializeServerDatabases` is
called_. On the other hand, if calling said functions manually when _not_
in `defer` mode, they _must be invoked before `setupMemoryServerOverride`
is called_.

#### Returns

`Promise`\<`void`\>

***

### killMemoryServerOverride()

> **killMemoryServerOverride**: () => `Promise`\<`void`\>

Defined in: [packages/mongo-test/src/index.ts:124](https://github.com/Xunnamius/mongo-utils/blob/78da2e96c8ecb2db1e9e0e0ecca9e2e7a885109d/packages/mongo-test/src/index.ts#L124)

Calls `closeClient`, and then `MongoMemoryServer`stop} on the internal
mongodb memory server.

This function is called automatically by Jest via the `afterAll` hook when
_not_ in `defer: 'without-hooks'` mode.

**WARNING: when in `defer: 'without-hooks'` mode, this function _must_ be
called manually at least once before the relevant testing runtime/scope
concludes (e.g. using Jest's `afterAll` hook) or you risk memory leaks.**

#### Returns

`Promise`\<`void`\>

***

### reinitializeServerDatabases()

> **reinitializeServerDatabases**: () => `Promise`\<`void`\>

Defined in: [packages/mongo-test/src/index.ts:134](https://github.com/Xunnamius/mongo-utils/blob/78da2e96c8ecb2db1e9e0e0ecca9e2e7a885109d/packages/mongo-test/src/index.ts#L134)

Reset the dummy mongodb server databases back to their initial states, but
leave the internal server-client connection alone.

This function is called automatically by Jest via the `beforeAll` hook
_unless_ in `defer: 'without-hooks'` mode. This function is called again by
Jest via the `beforeEach` hook _except_ when in `defer` mode (i.e. both
`defer: true` or `defer: 'without-hooks'`).

#### Returns

`Promise`\<`void`\>

***

### resetSharedMemory

> **resetSharedMemory**: *typeof* `resetSharedMemory`

Defined in: [packages/mongo-test/src/index.ts:141](https://github.com/Xunnamius/mongo-utils/blob/78da2e96c8ecb2db1e9e0e0ecca9e2e7a885109d/packages/mongo-test/src/index.ts#L141)

Dangerously resets internal memory shared across `@-xun/mongo-X` packages
to its initial state.

This is an exposed internal method that should be used very carefully.

***

### schema

> **schema**: `DbSchema` \| `undefined`

Defined in: [packages/mongo-test/src/index.ts:146](https://github.com/Xunnamius/mongo-utils/blob/78da2e96c8ecb2db1e9e0e0ecca9e2e7a885109d/packages/mongo-test/src/index.ts#L146)

Reified schema object (i.e. what was passed to `setupMemoryServerOverride`
resolved to an object).
