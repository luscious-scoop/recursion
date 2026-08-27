import { fib } from './fib_iterative.js';

test('Returns the fibonacci series upto 1', () => {
  expect(fib(1)).toEqual([0]);
});

test('Returns the fibonacci series upto 2', () => {
  expect(fib(2)).toEqual([0, 1]);
});

test('Returns the fibonacci series upto 3', () => {
  expect(fib(3)).toEqual([0, 1, 1]);
});

test('Returns the fibonacci series upto 4', () => {
  expect(fib(4)).toEqual([0, 1, 1, 2]);
});
test('Returns the fibonacci series upto 5', () => {
  expect(fib(5)).toEqual([0, 1, 1, 2, 3]);
});

test('Returns the fibonacci series upto 8', () => {
  expect(fib(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
