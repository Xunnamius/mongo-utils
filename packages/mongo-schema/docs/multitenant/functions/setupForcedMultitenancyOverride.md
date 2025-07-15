[**@-xun/mongo-schema**](../../README.md)

***

[@-xun/mongo-schema](../../README.md) / [multitenant](../README.md) / setupForcedMultitenancyOverride

# Function: setupForcedMultitenancyOverride()

> **setupForcedMultitenancyOverride**(`mode`): `void`

Defined in: [packages/mongo-schema/src/multitenant.ts:36](https://github.com/Xunnamius/mongo-utils/blob/7b25b3728184acdc4dd308dd54ecbebd6fc132bd/packages/mongo-schema/src/multitenant.ts#L36)

When this function is called, invocations of any function export of the
`@-xun/mongo-*` package must be wrapped by
[runWithMongoSchemaMultitenancy](runWithMongoSchemaMultitenancy.md) or an error will be thrown.

**This function must be called as early as possible** and certainly before
any other imports from `@-xun/mongo-*` are invoked.

If `setupForcedMultitenancyOverride` is not called but
[runWithMongoSchemaMultitenancy](runWithMongoSchemaMultitenancy.md) is used anyway, invocations to
`@-xun/mongo-*` exports that are not wrapped by
[runWithMongoSchemaMultitenancy](runWithMongoSchemaMultitenancy.md) will fall back on the default
runtime-global shared singleton instead of throwing an error. This can lead
to confusion and should generally be avoided, hence the existence of this
function.

Multitenant mode is useful when writing an application with multiple
instances of `@-xun/mongo-*` packages nested deep in their dependency trees
that, when taken together, require two or more disparate configurations (i.e.
different schemas, different dummy data). This is beyond what is possible
with a runtime-global shared singleton.

## Parameters

### mode

`"singleton"` | `"multitenant"`

## Returns

`void`

## See

[runWithMongoSchemaMultitenancy](runWithMongoSchemaMultitenancy.md)
