[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / closeClient

# Function: closeClient()

> **closeClient**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [packages/mongo-schema/src/index.ts:140](https://github.com/Xunnamius/mongo-utils/blob/22de939f192fb2c686749b8a378c031c83e2b0b0/packages/mongo-schema/src/index.ts#L140)

Kills the MongoClient instance and any related database connections and
clears shared memory.

If `clearCache` is `true` (default), internal shared memory will be cleared
when this function is called.

Set `clearCache` to `false` if invoking this function anywhere other than at
the top level of an application. Libraries meant to be invoked by such
applications should be wary when using this function to clear shared memory
since there could be multiple instances of this package in memory that could
be relying upon it.

Set `clearCache` to `'all-tenants'` in a multitenancy scenario when invoking
this function outside of an async context with the goal of closing all
clients across all tenants.

## Parameters

### \_\_namedParameters

#### clearCache?

`boolean` \| `"all-tenants"` = `true`

**Default**

```ts
true
```

## Returns

`Promise`\<`void`\>
