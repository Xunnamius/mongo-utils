[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [index](../README.md) / getClient

# Function: getClient()

> **getClient**(`init?`): `Promise`\<`MongoClient`\>

Defined in: [packages/mongo-schema/src/index.ts:111](https://github.com/Xunnamius/mongo-utils/blob/22de939f192fb2c686749b8a378c031c83e2b0b0/packages/mongo-schema/src/index.ts#L111)

Lazily connects to the server on-demand, memoizing the result.

Optionally accepts a set of initialization parameters that will be used
instead of calling `getEnv` when creating a new client. This is useful in,
for instance, multitenant situations where it is not possible to rely on
exclusive control over `process.env`.

## Parameters

### init?

#### MONGODB_URI

`string`

## Returns

`Promise`\<`MongoClient`\>
