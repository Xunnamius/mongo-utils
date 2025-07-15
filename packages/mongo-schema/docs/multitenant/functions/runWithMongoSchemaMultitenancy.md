[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [multitenant](../README.md) / runWithMongoSchemaMultitenancy

# Function: runWithMongoSchemaMultitenancy()

> **runWithMongoSchemaMultitenancy**(`tenantId`, `runtime`): `Promise`\<`void`\>

Defined in: [packages/mongo-schema/src/multitenant.ts:66](https://github.com/Xunnamius/mongo-utils/blob/7b25b3728184acdc4dd308dd54ecbebd6fc132bd/packages/mongo-schema/src/multitenant.ts#L66)

This function runs `@-xun/mongo-*` functions called within `runtime` using a
separate global memory from the same functions called outside of `runtime`.

This is useful when running multiple `@-xun/mongo-*` packages with disparate
global configurations within the same JavaScript runtime, since it lets each
group of calls to use its own version of "global" "shared" configuration.

When invoking this function multiple times with the same `tenantId`, each
invocation will reuse the respective "global shared" configuration first
created for that `tenantId`. This means different invocations of
`runWithMongoSchemaMultitenancy` using the same `tenantId` will also share
the same "global" configuration.

## Parameters

### tenantId

`string`

### runtime

() => `Promise`\<`void`\>

## Returns

`Promise`\<`void`\>

## See

[setupForcedMultitenancyOverride](setupForcedMultitenancyOverride.md)
