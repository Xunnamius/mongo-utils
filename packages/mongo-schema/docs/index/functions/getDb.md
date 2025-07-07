[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / getDb

# Function: getDb()

> **getDb**(`__namedParameters`): `Promise`\<`Db`\>

Defined in: [mongo-schema/src/index.ts:147](https://github.com/Xunnamius/mongo-utils/blob/b7bf3f0b1614e2f06b991c15bbf85968ab91d50b/packages/mongo-schema/src/index.ts#L147)

Lazily connects to a database on-demand, memoizing the result. If the
database does not yet exist, it is both created and initialized by this
function. The latter can be prevented by setting `initialize` to `false`.

## Parameters

### \_\_namedParameters

#### initialize?

`boolean`

Set to `false` to prevent `getDb` from calling `initializeDb` if the
database does not exist prior to acquiring it.

**Default**

```ts
true
```

#### name

`string`

The name or alias of the database to retrieve.

## Returns

`Promise`\<`Db`\>
