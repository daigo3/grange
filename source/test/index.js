const test = require('tape');
const grange = require('../grange');

test('simple number range', assert => {
  const msg = 'should produce a simple range';

  const [...actual] = grange(3, 6);
  const expected = [3, 4, 5, 6];

  assert.same(actual, expected, msg);
  assert.end();
});

test('step', assert => {
  const message = 'should obey step increment argument';

  const [...actual] = grange(2, 6, { step: 2 });
  const expected = [2, 4, 6];

  assert.same(actual, expected, message);
  assert.end();
});

test('transform', assert => {
  const message = 'should use transform function if provided';

  const [...actual] = grange(1, 3, n => n * 2);
  const expected = [2, 4, 6];

  assert.same(actual, expected, message);
  assert.end();
});

test('decrement', assert => {
  const message = 'should decrement when start > end';

  const [...actual] = grange(3, 1);
  const expected = [3, 2, 1];

  assert.same(actual, expected, message);
  assert.end();
});
