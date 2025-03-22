// math.test.js
const addNumbers = require('./math');

test('adds 2 + 3 to equal 5', () => {
  expect(addNumbers(2, 3)).toBe(5);
});

test('adds -1 + -1 to equal -2', () => {
  expect(addNumbers(-1, -1)).toBe(-2);
});

test('adds 0 + 0 to equal 0', () => {
  expect(addNumbers(0, 0)).toBe(0);
});