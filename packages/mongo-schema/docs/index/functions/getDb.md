[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / getDb

# Function: getDb()

> **getDb**(`__namedParameters`): `Promise`\<`Db`\>

Defined in: [mongo-schema/src/index.ts:146](https://github.com/Xunnamius/mongo-utils/blob/6752859d077967d85bc29849c2e5df89e9a031eb/packages/mongo-schema/src/index.ts#L146)

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
