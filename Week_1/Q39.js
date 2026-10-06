// Write a function that returns the count of digits in a number

function countDigits(n) {

  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let result = countDigits(4545);
console.log(result);



// Solving "Edge Cases" of Negative number input [eg. "-6"] and 0 input.

function countDigits(n) {
  if (n == 0) return 1;  // This line of code is to solve "Edge Case -> for 0 number input"

  n = Math.abs(n); // converting negative number to positive [This line of code is to solve the  "Edge Case -> of negative number input"]

  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let result = countDigits(-4545);
console.log(result);
