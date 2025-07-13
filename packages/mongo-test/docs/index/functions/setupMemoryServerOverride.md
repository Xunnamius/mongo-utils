[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setupMemoryServerOverride

# Function: setupMemoryServerOverride()

> **setupMemoryServerOverride**(`__namedParameters`): `object`

Defined in: [mongo-test/src/index.ts:131](https://github.com/Xunnamius/mongo-utils/blob/a6c2112fab3deadd3d025a547cf8d9c912b8daa6/packages/mongo-test/src/index.ts#L131)

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

`boolean` \| `"without-initialization"`

If `true`, the `beforeEach` and `afterEach` lifecycle hooks are skipped and
the database is initialized and hydrated once before all tests are run.

**In this mode, all tests will share the same database state!**

To start off with a fully functional mongodb memory server client but
without any initialization tasks being run whatsoever, set `defer:
'without-initialization'`. In this scenario, consider calling
`reinitializeServer` manually, if necessary.

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

> **data**: `undefined` \| [`DummyData`](../type-aliases/DummyData.md)

### reinitializeServer()

> **reinitializeServer**: () => `Promise`\<`void`\>

Reset the dummy MongoDb server databases back to their initial states.

Reset the dummy MongoDb server databases back to their initial states.

#### Returns

`Promise`\<`void`\>

### resetSharedMemory()

> **resetSharedMemory**: (`__namedParameters`) => `void`

Dangerously resets internal memory shared across `@-xun/mongo-X` packages
to its initial state.

Resets shared memory to its initial state.

#### Parameters

##### \_\_namedParameters

###### preserve?

keyof `SharedMemory`[] = `[]`

#### Returns

`void`

### schema

> **schema**: `undefined` \| `DbSchema`
