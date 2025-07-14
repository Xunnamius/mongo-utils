[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / SetupMemoryServerOverrideOptions

# Type Alias: SetupMemoryServerOverrideOptions

> **SetupMemoryServerOverrideOptions** = `object`

Defined in: [mongo-test/src/index.ts:38](https://github.com/Xunnamius/mongo-utils/blob/32f7f4be31d1b2d896b46940a0a2f1886cd751cd/packages/mongo-test/src/index.ts#L38)

## Properties

### data?

> `optional` **data**: [`Functionable`](Functionable.md)\<[`DummyData`](DummyData.md)\>

Defined in: [mongo-test/src/index.ts:79](https://github.com/Xunnamius/mongo-utils/blob/32f7f4be31d1b2d896b46940a0a2f1886cd751cd/packages/mongo-test/src/index.ts#L79)

Passed to `setDummyData` at the appropriate point: during `jest.beforeEach`
and `jest.beforeAll` but before this function interacts with the database.

This data is only written once during `jest.beforeAll` if `defer` is
`true`.

If calling `setDummyData` manually, it must be called _before_
`setupMemoryServerOverride` calls `initializeMemoryServerOverride`
internally (or before `initializeMemoryServerOverride` is called manually
when using `defer: 'without-initialization'`)!

***

### defer?

> `optional` **defer**: `boolean` \| `"without-initialization"`

Defined in: [mongo-test/src/index.ts:52](https://github.com/Xunnamius/mongo-utils/blob/32f7f4be31d1b2d896b46940a0a2f1886cd751cd/packages/mongo-test/src/index.ts#L52)

If `true`, the `beforeEach` and `afterEach` lifecycle hooks are skipped and
the database is initialized and hydrated once before all tests are run.

**In this mode, all tests will share the same database state!**

To start off with a fully functional mongodb memory server client but
without any initialization or hydration tasks being run whatsoever, set
`defer: 'without-initialization'` then invoke
`initializeMemoryServerOverride` manually.

#### Default

```ts
false
```

***

### schema?

> `optional` **schema**: [`Functionable`](Functionable.md)\<`DbSchema`\>

Defined in: [mongo-test/src/index.ts:66](https://github.com/Xunnamius/mongo-utils/blob/32f7f4be31d1b2d896b46940a0a2f1886cd751cd/packages/mongo-test/src/index.ts#L66)

Passed to `setSchemaConfig` at the appropriate point: during
`jest.beforeEach` and `jest.beforeAll` but before this function interacts
with the database.

This data is only written once during `jest.beforeAll` if `defer` is
`true`.

If calling `setSchemaConfig` manually, it must be called _before_
`setupMemoryServerOverride` calls `initializeMemoryServerOverride`
internally (or before `initializeMemoryServerOverride` is called manually
when using `defer: 'without-initialization'`)!
