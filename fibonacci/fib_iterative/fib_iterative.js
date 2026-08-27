export function fib(n) {
  let fibonacciNumbers = [0, 1];

  if (n === 1) {
    return [0];
  }

  if (n <= 0) {
    return [];
  }

  let prev;
  let next;
  let value;

  for (let i = 2; i < n; i++) {
    prev = fibonacciNumbers[i - 1];
    next = fibonacciNumbers[i - 2];
    value = prev + next;

    fibonacciNumbers.push(value);
  }

  return fibonacciNumbers;
}

// console.log(fib(2));
