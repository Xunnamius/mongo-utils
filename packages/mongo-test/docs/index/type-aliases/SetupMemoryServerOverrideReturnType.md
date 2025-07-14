[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / SetupMemoryServerOverrideReturnType

# Type Alias: SetupMemoryServerOverrideReturnType

> **SetupMemoryServerOverrideReturnType** = `object`

Defined in: [packages/mongo-test/src/index.ts:83](https://github.com/Xunnamius/mongo-utils/blob/d24174744181a6638ba06418de88bfce7e92fff4/packages/mongo-test/src/index.ts#L83)

## Properties

### data

> **data**: [`DummyData`](DummyData.md) \| `undefined`

Defined in: [packages/mongo-test/src/index.ts:150](https://github.com/Xunnamius/mongo-utils/blob/d24174744181a6638ba06418de88bfce7e92fff4/packages/mongo-test/src/index.ts#L150)

Reified dummy data object (i.e. what was passed to
`setupMemoryServerOverride` resolved to an object).

***

### initializeMemoryServerOverride()

> **initializeMemoryServerOverride**: () => `Promise`\<`void`\>

Defined in: [packages/mongo-test/src/index.ts:111](https://github.com/Xunnamius/mongo-utils/blob/d24174744181a6638ba06418de88bfce7e92fff4/packages/mongo-test/src/index.ts#L111)

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

Defined in: [packages/mongo-test/src/index.ts:123](https://github.com/Xunnamius/mongo-utils/blob/d24174744181a6638ba06418de88bfce7e92fff4/packages/mongo-test/src/index.ts#L123)

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

Defined in: [packages/mongo-test/src/index.ts:133](https://github.com/Xunnamius/mongo-utils/blob/d24174744181a6638ba06418de88bfce7e92fff4/packages/mongo-test/src/index.ts#L133)

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

Defined in: [packages/mongo-test/src/index.ts:140](https://github.com/Xunnamius/mongo-utils/blob/d24174744181a6638ba06418de88bfce7e92fff4/packages/mongo-test/src/index.ts#L140)

Dangerously resets internal memory shared across `@-xun/mongo-X` packages
to its initial state.

This is an exposed internal method that should be used very carefully.

***

### schema

> **schema**: `DbSchema` \| `undefined`

Defined in: [packages/mongo-test/src/index.ts:145](https://github.com/Xunnamius/mongo-utils/blob/d24174744181a6638ba06418de88bfce7e92fff4/packages/mongo-test/src/index.ts#L145)

Reified schema object (i.e. what was passed to `setupMemoryServerOverride`
resolved to an object).
