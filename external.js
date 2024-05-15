// ### Exercise #3

// Write a JavaScript program to construct the following pattern, using a nested for loop.

// ```
// *
// * *
// * * *
// * * * *
// * * * * *
// ```

// Exercise #3

for (let i = 1; i < 6; i++) {
  let star = "";
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  console.log(star);
}

// ### Exercise #4

// Write while loops to do the following:

// ```
// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
// ```
x = 10;
while (x > 0 && x !== 0) {
  x -= 0.5;
  console.log(x);
}

// ```
// - Print all the odd numbers between 1 - 100.
// ```

let y = 1;
while (y < 100) {
  if (y % 2 !== 0) {
    console.log(y);
  }
  y++;
}

// ```
// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
// ```

let n = 6;
let i = 1;
while (i <= n) {
  console.log(i);
  i++;
}

// ```
// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
// ```

let sum = 0;
let z = 1;
let m = 5
while (z <= m) {
  sum += z;
  z += 1
}

console.log(sum);