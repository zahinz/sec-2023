let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenOrOdd = [];
// ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']

// scan array number start from index 0 until final index
// check the value of element even? odd?
// if even print 'even'
// if odd print 'odd'

//
//
// LOOP
//
//

let cart = ["egg", "chicken", "vegetable", "milk"];
let cartPluralised = [];

// 3 argument, sepparate by ;,
// argument 1 (declaration) : variable declaration set initial value
// argument 2 (boolean : true @ false) : condition to stop/break the loop
// argument 3 (expression) : what to do after a cycle completes
// console.log("start");
// for (let i = 0; i < 10; i = i + 1) {
//   // loop scope
//   console.log("start loop");
//   console.log(i, "value of i inside loop");
//   console.log("end loop");
// }
// console.log("end");

// iterate
// for (let i = 0; i < cart.length; i++) {
//   cartPluralised.push(cart[i] + "s");
// }

// console.log(cart);
// console.log(cartPluralised);

// for (let i = 1; i < 11; i++) {
//   //check if the number is even
//   if (i % 2 === 0) {
//     console.log(i, "even");
//   }
//   // if the number is odd
//   else {
//     console.log(i, "odd");
//   }
// }

// iterate array number, push into array evenOrOdd the state of each number

console.log(number);
console.log(evenOrOdd);

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    evenOrOdd.push("even");
  } else {
    evenOrOdd.push("odd");
  }
}

console.log(number);
console.log(evenOrOdd);
