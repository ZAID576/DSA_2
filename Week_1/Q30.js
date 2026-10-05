// Patterns Problems
// Q2: Star printing

let n = 4;

for (let i = 0; i < n+1; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }

  console.log(row);
}