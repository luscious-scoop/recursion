import { fibRec } from './fib_rec.js';

test('Returns empty array if n is zero or less', () => {
  expect(fibRec(0)).toEqual([]);
});

test('Returns the fibonacci series upto 1', () => {
  expect(fibRec(1)).toEqual([0]);
});

test('Returns the fibonacci series upto 2', () => {
  expect(fibRec(2)).toEqual([0, 1]);
});

test('Returns the fibonacci series upto 3', () => {
  expect(fibRec(3)).toEqual([0, 1, 1]);
});

test('Returns the fibonacci series upto 4', () => {
  expect(fibRec(4)).toEqual([0, 1, 1, 2]);
});
test('Returns the fibonacci series upto 5', () => {
  expect(fibRec(5)).toEqual([0, 1, 1, 2, 3]);
});

test('Returns the fibonacci series upto 8', () => {
  expect(fibRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
