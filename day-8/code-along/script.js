// let cart = "eggs, fish, chicken, vegetables";
// console.log(cart);
// cart = cart + ", chocolate";
// console.log(cart);

// convert into array
// square bracket
// element of what data type

// index, position of elements in an array, start with 0
// eggs, index = 0
// fish, index = 1
// chicken, index = 2
// ...

// array of string
const cart = ["eggs", "fish", "chicken", "vegetables", "chocolate"];

// array of number
let price = [0.8, 12, 18, 3, 7];

// array.length
let numberOfItemsInTheCart = cart.length;
console.log(cart);
console.log(numberOfItemsInTheCart);

// add candy into the cart, using method push
// cart = ["fish", "milk"]; => change value
// method Array.push()
cart.push("candy"); // mutate value
console.log(cart);

// method Array.pop()
cart.pop();
console.log(cart);

// method Array.sort()
cart.sort();
console.log(cart);

// method Array.indexOf()
let indexOfEggs = cart.indexOf("eggs");
console.log(indexOfEggs);

// method Array.join()
let message = "Hello honey, I dah beli " + cart.join(", ") + ".";
console.log(message);

//
