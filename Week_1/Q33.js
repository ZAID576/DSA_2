// Patterns Problems
// Q5: Increasing star triangle

let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}




// 2nd way [This code will give the similar output as above code but this code is written in a little different way]


let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i+1; j++) {
    row = row + "*";
  }

  console.log(row);
}

