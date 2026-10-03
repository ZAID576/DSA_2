//  Write a function that returns the number of negative numbers in an array

let arr = [2, -4, 6, -8, 10, -12];

let count = 0;

function countNegatives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let result = countNegatives(arr);
console.log(result)

// console.log(countNegatives(arr));