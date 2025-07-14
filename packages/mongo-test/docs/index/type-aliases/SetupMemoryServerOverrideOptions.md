[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / SetupMemoryServerOverrideOptions

# Type Alias: SetupMemoryServerOverrideOptions

> **SetupMemoryServerOverrideOptions** = `object`

Defined in: [packages/mongo-test/src/index.ts:38](https://github.com/Xunnamius/mongo-utils/blob/d24174744181a6638ba06418de88bfce7e92fff4/packages/mongo-test/src/index.ts#L38)

## Properties

### data?

> `optional` **data**: [`Functionable`](Functionable.md)\<[`DummyData`](DummyData.md)\>

Defined in: [packages/mongo-test/src/index.ts:80](https://github.com/Xunnamius/mongo-utils/blob/d24174744181a6638ba06418de88bfce7e92fff4/packages/mongo-test/src/index.ts#L80)

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

Defined in: [packages/mongo-test/src/index.ts:53](https://github.com/Xunnamius/mongo-utils/blob/d24174744181a6638ba06418de88bfce7e92fff4/packages/mongo-test/src/index.ts#L53)

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

Defined in: [packages/mongo-test/src/index.ts:67](https://github.com/Xunnamius/mongo-utils/blob/d24174744181a6638ba06418de88bfce7e92fff4/packages/mongo-test/src/index.ts#L67)

Passed to `setSchemaConfig` at the appropriate point: during
`jest.beforeEach` and `jest.beforeAll` but before this function interacts
with the database.

This data is only written once during `jest.beforeAll` if `defer` is
`true`.

If calling `setSchemaConfig` manually, it must be called _before_
`setupMemoryServerOverride` calls `initializeMemoryServerOverride`
internally (or before `initializeMemoryServerOverride` is called manually
when using `defer: 'without-hooks'`)!
