import { DUMMY_BEARER_TOKEN, NULL_BEARER_TOKEN } from '@-xun/api-strategy/auth';
import { getCommonSchemaConfig } from '@-xun/api-strategy/mongo';
import { getCommonDummyData } from '@-xun/api-strategy/mongo/dummy';
import { getDb } from '@-xun/mongo-schema';
import { setupMemoryServerOverride } from '@-xun/mongo-test';
import { ObjectId } from 'mongodb';
import { toss } from 'toss-expression';

import { itemExists, itemToObjectId, itemToStringId } from 'universe+mongo-item';
import { ErrorMessage } from 'universe+mongo-item:error.ts';

import { expectExceptionsWithMatchingErrors } from 'testverse:util.ts';

import type { InternalAuthEntry } from '@-xun/api-strategy/auth';
import type { ExpectExceptionsWithMatchingErrorsSpec as Spec } from 'testverse:util.ts';

setupMemoryServerOverride({
  schema: getCommonSchemaConfig(),
  data: getCommonDummyData()
});

describe('::itemExists', () => {
  it('returns true if an item exists in a collection where [key] === id', async () => {
    expect.hasAssertions();

    const col = (await getDb({ name: 'root' })).collection('auth');
    const item =
      (await col.findOne<InternalAuthEntry>()) || toss(new Error('assert failed'));

    await expect(itemExists(col, item._id)).resolves.toBeTrue();
    await expect(itemExists(col, new ObjectId())).resolves.toBeFalse();

    await expect(
      itemExists(col, { key: 'token', id: DUMMY_BEARER_TOKEN })
    ).resolves.toBeTrue();

    await expect(
      itemExists(col, { key: 'token', id: NULL_BEARER_TOKEN })
    ).resolves.toBeFalse();
  });

  it('optimistically coerces strings to ObjectIds unless optimisticCoercion is false', async () => {
    expect.hasAssertions();

    const col = (await getDb({ name: 'root' })).collection('auth');
    const item =
      (await col.findOne<InternalAuthEntry>()) || toss(new Error('assert failed'));

    await expect(itemExists(col, item._id.toString())).resolves.toBeTrue();
    await expect(
      itemExists(col, item._id.toString(), { optimisticCoercion: false })
    ).resolves.toBeFalse();
  });

  it('respects excludeId option', async () => {
    expect.hasAssertions();

    const col = (await getDb({ name: 'root' })).collection('auth');
    const item =
      (await col.findOne<InternalAuthEntry>()) || toss(new Error('assert failed'));

    await expect(itemExists(col, item._id)).resolves.toBeTrue();
    await expect(
      itemExists(col, item._id, {
        excludeId: { key: 'token', id: item.token }
      })
    ).resolves.toBeFalse();

    await expect(
      itemExists(col, { key: 'token', id: item.token }, { excludeId: item._id })
    ).resolves.toBeFalse();
  });

  it('rejects if attempting to exclude using same property as id', async () => {
    expect.hasAssertions();

    const col = (await getDb({ name: 'root' })).collection('auth');
    const item =
      (await col.findOne<InternalAuthEntry>()) || toss(new Error('assert failed'));

    await expect(itemExists(col, item._id, { excludeId: item._id })).rejects.toThrow(
      'cannot lookup an item by property "_id"'
    );

    await expect(
      itemExists(
        col,
        { key: 'token', id: item.token },
        { excludeId: { key: 'token', id: item.token } }
      )
    ).rejects.toThrow('cannot lookup an item by property "token"');
  });

  it('respects caseInsensitive option', async () => {
    expect.hasAssertions();

    const col = (await getDb({ name: 'root' })).collection('auth');

    await expect(
      itemExists(
        col,
        { key: 'token', id: DUMMY_BEARER_TOKEN.toUpperCase() },
        { caseInsensitive: true }
      )
    ).resolves.toBeTrue();

    await expect(
      itemExists(col, { key: 'token', id: DUMMY_BEARER_TOKEN.toUpperCase() })
    ).resolves.toBeFalse();

    const item =
      (await col.findOne<InternalAuthEntry>()) || toss(new Error('assert failed'));

    await expect(itemExists(col, item._id)).resolves.toBeTrue();

    await expect(
      itemExists(col, item._id, {
        excludeId: { key: 'token', id: item.token.toUpperCase() }
      })
    ).resolves.toBeTrue();

    await expect(
      itemExists(col, item._id, {
        excludeId: { key: 'token', id: item.token.toUpperCase() },
        caseInsensitive: true
      })
    ).resolves.toBeFalse();
  });
});

describe('::itemToObjectId', () => {
  it('reduces an item down to its ObjectId instance', async () => {
    expect.hasAssertions();

    const id = new ObjectId();

    expect(itemToObjectId({ _id: id })).toBe(id);
    expect(itemToObjectId(id.toString())).toStrictEqual(id);
    expect(itemToObjectId(id)).toBe(id);
  });

  it('reduces an array of items down to their respective ObjectId instances', async () => {
    expect.hasAssertions();

    const ids = [new ObjectId(), new ObjectId(), new ObjectId()];

    expect(itemToObjectId(ids)).toStrictEqual(ids);

    expect(
      itemToObjectId([{ _id: ids[0]! }, { _id: ids[1]! }, { _id: ids[2]! }])
    ).toStrictEqual(ids);

    expect(
      itemToObjectId([ids[0]!.toString(), ids[1]!.toString(), ids[2]!.toString()])
    ).toStrictEqual(ids);
  });

  it('duplicate ObjectIds are eliminated during simple array reduction', async () => {
    expect.hasAssertions();

    const id = new ObjectId();
    const ids = [id];

    expect(itemToObjectId(ids)).toStrictEqual(ids);

    expect(itemToObjectId([id.toString(), id.toString(), id.toString()])).toStrictEqual(
      ids
    );
  });

  it('throws if item is irreducible or invalid', async () => {
    expect.hasAssertions();

    const errors = [
      [null, ErrorMessage.InvalidItem(null, 'ObjectId')],
      [undefined, ErrorMessage.InvalidItem('undefined', 'ObjectId')],
      [[null], ErrorMessage.InvalidItem(null, 'ObjectId')],
      [[undefined], ErrorMessage.InvalidItem('undefined', 'ObjectId')],
      [{}, ErrorMessage.InvalidItem('[object Object]', 'ObjectId')],
      [[{}], ErrorMessage.InvalidItem('[object Object]', 'ObjectId')],
      ['bad', ErrorMessage.InvalidItem('bad', 'ObjectId')],
      [['bad'], ErrorMessage.InvalidItem('bad', 'ObjectId')],
      [[new ObjectId(), 'bad'], ErrorMessage.InvalidItem('bad', 'ObjectId')]
    ] as Spec<[Parameters<typeof itemToObjectId>[0]], 'single-parameter'>;

    await expectExceptionsWithMatchingErrors(
      errors,
      (params) => itemToObjectId(...params),
      { singleParameter: true }
    );
  });

  it('does not throw if item is irreducible/invalid if ignoreInvalidId is true', async () => {
    expect.hasAssertions();

    expect(() => itemToObjectId('bad')).toThrow();
    expect(() => itemToObjectId('bad', { ignoreInvalidId: true })).not.toThrow();

    expect(() => itemToObjectId(['bad'])).toThrow();
    expect(() => itemToObjectId(['bad'], { ignoreInvalidId: true })).not.toThrow();
  });
});

describe('::itemToStringId', () => {
  it('reduces an item down to its string representation', async () => {
    expect.hasAssertions();

    const id = new ObjectId();
    const idString = id.toString();

    expect(itemToStringId({ _id: id })).toBe(idString);
    expect(itemToStringId(idString)).toBe(idString);
    expect(itemToStringId(id)).toBe(idString);
  });

  it('reduces an array of items down to string representations', async () => {
    expect.hasAssertions();

    const ids = [new ObjectId(), new ObjectId(), new ObjectId()];
    const idStrings = ids.map(String);

    expect(itemToStringId(ids)).toStrictEqual(idStrings);

    expect(
      itemToStringId([{ _id: ids[0]! }, { _id: ids[1]! }, { _id: ids[2]! }])
    ).toStrictEqual(idStrings);

    expect(
      itemToStringId([ids[0]!.toString(), ids[1]!.toString(), ids[2]!.toString()])
    ).toStrictEqual(idStrings);
  });

  it('throws if item is irreducible', async () => {
    expect.hasAssertions();

    const errors = [
      [null, ErrorMessage.InvalidItem(null, 'ObjectId')],
      [undefined, ErrorMessage.InvalidItem('undefined', 'ObjectId')],
      [[null], ErrorMessage.InvalidItem(null, 'ObjectId')],
      [[undefined], ErrorMessage.InvalidItem('undefined', 'ObjectId')],
      [{}, ErrorMessage.InvalidItem('[object Object]', 'ObjectId')],
      [[{}], ErrorMessage.InvalidItem('[object Object]', 'ObjectId')],
      ['bad', ErrorMessage.InvalidItem('bad', 'ObjectId')],
      [['bad'], ErrorMessage.InvalidItem('bad', 'ObjectId')],
      [[new ObjectId(), 'bad'], ErrorMessage.InvalidItem('bad', 'ObjectId')]
    ] as Spec<[Parameters<typeof itemToStringId>[0]], 'single-parameter'>;

    await expectExceptionsWithMatchingErrors(
      errors,
      (params) => itemToStringId(...params),
      { singleParameter: true }
    );
  });

  it.todo('does not throw if item is irreducible/invalid if ignoreInvalidId is true');
});
