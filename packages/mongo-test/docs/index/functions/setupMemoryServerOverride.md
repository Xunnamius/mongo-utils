[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [index](../README.md) / setupMemoryServerOverride

# Function: setupMemoryServerOverride()

> **setupMemoryServerOverride**(`params?`): `object`

Defined in: [mongo-test/src/index.ts:121](https://github.com/Xunnamius/mongo-utils/blob/9457593fbddb1a2627beb438b8436c6e06424188/packages/mongo-test/src/index.ts#L121)

Setup per-test versions of the mongodb client and database connections using
jest lifecycle hooks.

## Parameters

### params?

#### defer?

`boolean`

If `true`, `beforeEach` and `afterEach` lifecycle hooks are skipped and the
database is initialized and hydrated once before all tests are run. **In
this mode, all tests will share the same database state!**

**Default**

```ts
false
```

## Returns

### reinitializeServer()

> **reinitializeServer**: () => `Promise`\<`void`\>

Reset the dummy MongoDb server databases back to their initial states.

Reset the dummy MongoDb server databases back to their initial states.

#### Returns

`Promise`\<`void`\>
