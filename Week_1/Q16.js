// Print all the even number in an array using loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}



// 2nd way [This is the way to print even numbers in an array using loop]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 1; i < arr.length; i+=2) {
  console.log(arr[i])
}



// 3rd way [This is the way to print odd numbers in an array using loop]

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i+=2) {
  console.log(arr[i])
}