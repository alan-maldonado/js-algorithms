const balancedParens = require('./index');

test('Balanced Parentheses is a function', () => {
  expect(typeof balancedParens).toEqual('function');
});

test('balancedParens should return true if balanced', () => {
  expect(balancedParens('()')).toEqual(true);
});

test('balancedParens should return true if not balanced', () => {
  expect(balancedParens(')(')).toEqual(false);
});

test('balancedParens should return true if not balanced', () => {
  expect(balancedParens('())(')).toEqual(false);
});

