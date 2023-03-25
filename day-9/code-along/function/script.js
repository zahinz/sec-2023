// mango lassi
// ingredient = manggo + yogurt + lemon zest + condense milk
// process = blend
let ingredient1 = "manggo";
let ingredient2 = "yogurt";
let ingredient3 = "lemon zest";
let ingredient4 = "condense milk";

// let mangoLassiRecipe =
//   "I made this drink with " +
//   ingredient1 +
//   " " +
//   ingredient2 +
//   " " +
//   ingredient3 +
//   " " +
//   ingredient4 +
//   ".";

// 1. template string
let mangoLassiRecipe = `I made this drink with ${ingredient1}, ${ingredient2}, ${ingredient3}, ${ingredient4}`;

// fresh orange
// ingredient = orange + sugar + water + ice
// process = blend
let ingredient5 = "orange";
let ingredient6 = "sugar";
let ingredient7 = "water";
let ingredient8 = "ice";
let freshOrangeRecipe = `I made this drink with ${ingredient5}, ${ingredient6}, ${ingredient7}, ${ingredient8}`;
// console.log(mangoLassiRecipe);
// console.log(freshOrangeRecipe);

// 2. function declaration
function blendAJuice(arg1, arg2, arg3, arg4) {
  // log I made this drink with manggo, yogurt, lemon zest, condense milk
  let statement = `I made this drink with ${arg1}, ${arg2}, ${arg3}, ${arg4}`;
  //   outcome return a value
  return statement;
}

// 3. function will not execute unless we invoke them
// invoke a function / run / call a function
// blendAJuice();

// 4. pass an argument inside a function
// blendAJuice("manggo");
// blendAJuice("orange");

// pass all arguments in a function
// blendAJuice("manggo", "yogurt", "lemon zest", "condense milk");
// blendAJuice("orange", "sugar", "ice", "water");

// modify blendAJuice function and log complete recipe statement
// example = I made this drink with manggo, yogurt, lemon zest, condense milk

// 5. every function can return a value
let mangoLassi = blendAJuice("manggo", "yogurt", "lemon zest", "condense milk");
let freshOrange = blendAJuice("orange", "sugar", "ice", "water");

console.log(mangoLassi, 1);
console.log(freshOrange, 2);
