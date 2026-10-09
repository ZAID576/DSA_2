// Patterns Problems
// Q1: Star printing

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }

  console.log(row);
}

// 2nd way [This code will give the similar output as above code but this code is written in a little different way]

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row = row + "*";
  }

  console.log(row);
}



// 3rd way [This code will give the similar output as above code but this code is written in a little different way]

let n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row = row + "*";
  }

  console.log(row);
}
