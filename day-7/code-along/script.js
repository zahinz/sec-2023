// console.log("Nama saya zahin");

// data type
// 1. Number : 1,2,3
// 2. Integer, Big Integer, Decimals, Floats
// 3. string : "Hello world"
// 4. Array : ['Ali', 'Abu', 'Anwar', 'Rafizi']
// 5. Object : {key:value} : {name:'Zahin', age:'29', born:'KL'}

// variable in javascript
// basket equal basket, put data in it

// invented earlier
// non scope boundry discoverability
//! avoid using var
// var firstName = "Ahmad"; //using var
// invented later
// scope boundry discoverability

// hard coded value
// let firstName = "Asrar"; //using let
// let lastName = "Othman"; //using let

// prompt value
let firstName = prompt("What is your first name");
let lastName = prompt("What is your last name");
const birthYear = prompt("What is your birth year"); //using const
const date = new Date();
let year = date.getFullYear();
let age = year - parseInt(birthYear);
console.log(date);
console.log(year);
console.log(age);

console.log(firstName);
console.log(lastName);
console.log(birthYear);

console.log("--------------");
// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof birthYear);

// changing value in variable

// firstName = "Nabhan";
// lastName = "Asrar";

// console.log(firstName);
// console.log(lastName);

let fullName = firstName + " " + lastName;
let greetings =
  "Hello, my name is " + fullName + ". I am " + age + " years old";
console.log(fullName);
alert(greetings);

// using a prompt get value for birthYear
// console.log user age

// using DOM insert greetings dalam h1
let greetingsDOM = document.querySelector("#greetings");
console.log(greetingsDOM);
greetingsDOM.innerText = greetings;
