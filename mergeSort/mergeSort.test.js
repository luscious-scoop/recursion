import { mergeSort } from './mergeSort.js';

test('Sorts an array of length zero ', () => {
  expect(mergeSort([])).toEqual([]);
});

test('Sorts an array of length one ', () => {
  expect(mergeSort([73])).toEqual([73]);
});

test('Sorts an array of length four ', () => {
  expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
});

test('Sorts an array of length five ', () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('Sorts an array of length eight ', () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13,
  ]);
});

test('sort floats', () => {
  expect(mergeSort([99.7, 23.3, 8.9, 6.4, 1.5])).toEqual([
    1.5, 6.4, 8.9, 23.3, 99.7,
  ]);
});
