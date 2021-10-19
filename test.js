const parentheses = require('./index');

test('Parentheses is a function', () => {
  expect(typeof parentheses).toEqual('function');
});

test('parentheses should return true if balanced', () => {
  expect(parentheses('()')).toEqual(true);
});

test('parentheses should return true if not balanced', () => {
  expect(parentheses(')(')).toEqual(false);
});
