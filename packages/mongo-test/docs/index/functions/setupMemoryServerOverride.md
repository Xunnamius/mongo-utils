[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setupMemoryServerOverride

# Function: setupMemoryServerOverride()

> **setupMemoryServerOverride**(`__namedParameters`): `object`

Defined in: [mongo-test/src/index.ts:127](https://github.com/Xunnamius/mongo-utils/blob/86f3ab47600d8c0cc020457428d5e0ac6739da3d/packages/mongo-test/src/index.ts#L127)

Setup per-test versions of the mongodb client and database connections using
jest lifecycle hooks.

**WARNING:** if calling `setSchemaConfig` or `setDummyData` manually, it must
be called _before_ `setupMemoryServerOverride`!

## Parameters

### \_\_namedParameters

#### data?

[`Functionable`](../type-aliases/Functionable.md)\<[`DummyData`](../type-aliases/DummyData.md)\>

Passed to `setDummyData` at the appropriate point: during `jest.beforeEach`
and `jest.beforeAll` but before this function interacts with the database.

This data is only written once during `jest.beforeAll` if `defer` is
`true`.

If calling `setDummyData` manually, it must be called _before_
`setupMemoryServerOverride`!

#### defer?

`boolean`

If `true`, the `beforeEach` and `afterEach` lifecycle hooks are skipped and
the database is initialized and hydrated once before all tests are run.
**In this mode, all tests will share the same database state!**

**Default**

```ts
false
```

#### schema?

[`Functionable`](../type-aliases/Functionable.md)\<`DbSchema`\>

Passed to `setSchemaConfig` at the appropriate point: during
`jest.beforeEach` and `jest.beforeAll` but before this function interacts
with the database.

This data is only written once during `jest.beforeAll` if `defer` is
`true`.

If calling `setSchemaConfig` manually, it must be called _before_
`setupMemoryServerOverride`!

## Returns

### data

> **data**: `undefined` \| [`Functionable`](../type-aliases/Functionable.md)\<[`DummyData`](../type-aliases/DummyData.md)\>

### reinitializeServer()

> **reinitializeServer**: () => `Promise`\<`void`\>

Reset the dummy MongoDb server databases back to their initial states.

Reset the dummy MongoDb server databases back to their initial states.

#### Returns

`Promise`\<`void`\>

### schema

> **schema**: `undefined` \| [`Functionable`](../type-aliases/Functionable.md)\<`DbSchema`\>
