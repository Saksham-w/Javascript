let i;
for (i = 1; i <= 100; i = i + 1) {
  if (i % 2 == 0) {
    console.log(i + ' is even');
  } else {
    console.log();
  }
}

//Conditionals

// If-else and if-elseif

// if (condition) {
//   //code if condition is true
// } else {
//   // code if condition is false
// }

// example of if-else condition
let bool = false

if (bool == true) {
  console.log('hey this is true')
} else {
  console.log('hey this is false')
}

//example of if-elseif condition
if (11 > 12) {
  console.log('1')
} else if (12 > 13) {
  console.log('2')
} else {
  console.log('3')
}

//example
let a = 3
if (!(30 < 50)) {
  console.log('a is here') // for true condition
} else {
  console.log('a is not here') // for false condition
}

// Loops
// why loop? --> to prevent code repetition and code duplication

// 1 2 3 4 5 6 7 8 9
// 1 1 1 1 1 1 1 1 1

// print nepal 3 times
// console.log('nepal')
// console.log('nepal')
// console.log('nepal')

// For loop

//syntax
// for (start; end; change) {
// code to be looped
// }


// let i
// i++ ------> i = i+1
// i+=2 ------> i = i+2


let x = 36
if (x % 2 == 0) {
  console.log(x + ' is even')
} else {
  console.log(x + ' is odd')
}

// for (i = 0; i <= 100; i++) {}
