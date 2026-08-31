export function mergeSort(array) {
  // base case

  if (array.length <= 1) {
    return array;
  }

  let leftArray = mergeSort(array.slice(0, array.length / 2));
  let rightArray = mergeSort(array.slice(array.length / 2));

  // merge code
  let i = 0;
  let j = 0;
  let result = [];

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      result.push(leftArray[i]);
      i++;
    } else {
      result.push(rightArray[j]);
      j++;
    }
  }
  for (let k = i; k < leftArray.length; k++) {
    result.push(leftArray[k]);
  }
  for (let z = j; z < rightArray.length; z++) {
    result.push(rightArray[z]);
  }

  return result;
}
