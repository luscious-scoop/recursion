import { fib } from './fib_iterative.js';

test('Returns the fibonacci series upto 1', () => {
  expect(fib(1)).toEqual([0]);
});
