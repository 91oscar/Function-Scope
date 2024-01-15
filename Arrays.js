//Arrays are a way to group multiple items together.They're a way to represent a list of things.

// Arrays are zero-Index = 0

let try1 = [1, 2, 3, 4, 5];

//         0  1   2  3  4

// Last index -1

let try2 = [1, 2, 3, 4, 5];

//         -5 -4 -3 -2 -1

// 1
let favouriteFoods = [
  ["paella", "Cocido Madrileño"],
  ["Sunday roast", "Firsh chips"],
];
console.log(favouriteFoods[0][1]);

// 2
let favouriteColours = ["Blue", "Green", "Yellow", "red"];
console.log(favouriteColours.at(-2));

// 3
let favouriteNumbers = [7, 13, 2, 98];
console.log(favouriteNumbers[favouriteNumbers.length - [3]]);
