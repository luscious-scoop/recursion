export function fibRec(n, fibonacciNumbers = [0], index = 0) {
  if (n === 1) {
    return fibonacciNumbers;
  }

  let prev = fibonacciNumbers[index];
  let next = fibonacciNumbers[index - 1] ?? 1;

  let value = prev + next;

  fibonacciNumbers.push(value);
  return fibRec(n - 1, fibonacciNumbers, index + 1);
}

console.log(fibRec(4));
