//Loops let us repeat a line of code multiple times. Like the if statement, a loop is one of the most useful constructs in programming.

// for (let i = 0; i < 5; i++) {
//   console.log("Iteration", i);
// }

// .push with for
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

//Loop 1 (Create an array of your favourite animals, loop over the array and write it to the console.)

let favouriteAnimals = [`tiger`, `lion`, `chameleon`, `dog`, `cat`, `chicken`];

for (let i = 0; i < favouriteAnimals.length; i++) {
  console.log(`Iteration `, i, favouriteAnimals[i]);
}

//Loop 2 (Create an array of your favourite colours, loop over the array and write it to the console.)

let favouriteColours = [`blue`, `yellow`, `green`, `red`, `black`];

for (const arr of favouriteColours) {
  console.log(arr);
}

//Loop 3 9 Create an array of your favourite numbers. Loop over the array and log each item to the console. Infinity is a number in JavaScript. (But learn how to kill your browser tabs in task/activity manager before you loop until i = Infinity!)

let favouriteNumbers = [2, 7, 13, 69, 33, 8, 6];

for (let i = 0; i < favouriteNumbers.length; i--) {
  console.log(`Iteration`, i, favouriteNumbers[i]);
}
