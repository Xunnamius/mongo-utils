[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / SetupMemoryServerOverrideOptions

# Type Alias: SetupMemoryServerOverrideOptions

> **SetupMemoryServerOverrideOptions** = `object`

Defined in: [packages/mongo-test/src/index.ts:39](https://github.com/Xunnamius/mongo-utils/blob/78da2e96c8ecb2db1e9e0e0ecca9e2e7a885109d/packages/mongo-test/src/index.ts#L39)

## Properties

### data?

> `optional` **data**: [`Functionable`](Functionable.md)\<[`DummyData`](DummyData.md)\>

Defined in: [packages/mongo-test/src/index.ts:81](https://github.com/Xunnamius/mongo-utils/blob/78da2e96c8ecb2db1e9e0e0ecca9e2e7a885109d/packages/mongo-test/src/index.ts#L81)

Passed to `setDummyData` at the appropriate point: during `jest.beforeEach`
and `jest.beforeAll` but before this function interacts with the database.

This data is only written once during `jest.beforeAll` if `defer` is
`true`.

If calling `setDummyData` manually, it must be called _before_
`setupMemoryServerOverride` calls `initializeMemoryServerOverride`
internally (or before `initializeMemoryServerOverride` is called manually
when using `defer: 'without-hooks'`)!

***

### defer?

> `optional` **defer**: `boolean` \| `"without-hooks"`

Defined in: [packages/mongo-test/src/index.ts:54](https://github.com/Xunnamius/mongo-utils/blob/78da2e96c8ecb2db1e9e0e0ecca9e2e7a885109d/packages/mongo-test/src/index.ts#L54)

If `true`, the `beforeEach` and `afterEach` lifecycle hooks are skipped and
the database is initialized and hydrated once before all tests are run.

**In this mode, all tests will share the same database state!**

To start off with all of the above—i.e. a fully functional mongodb memory
server and client—but without any automatic initialization, lifecycle
hooks, or hydration tasks being run whatsoever, set `defer:
'without-hooks'` then invoke `initializeMemoryServerOverride` and
`killMemoryServerOverride` manually.

#### Default

```ts
false
```

***

### schema?

> `optional` **schema**: [`Functionable`](Functionable.md)\<`DbSchema`\>

Defined in: [packages/mongo-test/src/index.ts:68](https://github.com/Xunnamius/mongo-utils/blob/78da2e96c8ecb2db1e9e0e0ecca9e2e7a885109d/packages/mongo-test/src/index.ts#L68)

Passed to `setSchemaConfig` at the appropriate point: during
`jest.beforeEach` and `jest.beforeAll` but before this function interacts
with the database.

This data is only written once during `jest.beforeAll` if `defer` is
`true`.

If calling `setSchemaConfig` manually, it must be called _before_
`setupMemoryServerOverride` calls `initializeMemoryServerOverride`
internally (or before `initializeMemoryServerOverride` is called manually
when using `defer: 'without-hooks'`)!
