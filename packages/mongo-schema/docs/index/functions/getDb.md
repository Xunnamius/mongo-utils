[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / getDb

# Function: getDb()

> **getDb**(`__namedParameters`): `Promise`\<`Db`\>

Defined in: [packages/mongo-schema/src/index.ts:185](https://github.com/Xunnamius/mongo-utils/blob/22de939f192fb2c686749b8a378c031c83e2b0b0/packages/mongo-schema/src/index.ts#L185)

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
