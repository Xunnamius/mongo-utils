[**@-xun/mongo-test**](../../README.md)

***

[@-xun/mongo-test](../../README.md) / [error](../README.md) / ErrorMessage

# Variable: ErrorMessage

> `const` **ErrorMessage**: `object`

Defined in: [packages/mongo-test/src/error.ts:5](https://github.com/Xunnamius/mongo-utils/blob/8747a56a8e988c89d29bdd6b87729b00fdd17503/packages/mongo-test/src/error.ts#L5)

A collection of possible error and warning messages.

## Type declaration

### DuplicateAliasSpecifications()

> **DuplicateAliasSpecifications**(`foundAliases`): `string`

#### Parameters

##### foundAliases

`string`[]

#### Returns

`string`

### DuplicateDatabaseSpecifications()

> **DuplicateDatabaseSpecifications**(`nameActual`, `alias`): `string`

#### Parameters

##### nameActual

`string`

##### alias

`string`

#### Returns

`string`

### NoDummyConfigured()

> **NoDummyConfigured**(): `string`

#### Returns

`string`

### NoDummyData()

> **NoDummyData**(`nameActual`): `string`

#### Parameters

##### nameActual

`string`

#### Returns

`string`

### NoDummyDataCollection()

> **NoDummyDataCollection**(`nameActual`, `colName`): `string`

#### Parameters

##### nameActual

`string`

##### colName

`string`

#### Returns

`string`

### PortUnavailable()

> **PortUnavailable**(`port`): `string`

#### Parameters

##### port

`string` | `number`

#### Returns

`string`
