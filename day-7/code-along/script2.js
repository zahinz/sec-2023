// variable dom
let firstNameDOM = document.querySelector("#firstName");
let lastNameDOM = document.querySelector("#lastName");
let fullNameDOM = document.querySelector("#fullName");
let birthYearDOM = document.querySelector("#birthYear");
let ageDOM = document.querySelector("#age");
let driveCarDOM = document.querySelector("#driveCar");

// variable value
let firstName = prompt("First name");
let lastName = prompt("Last name");
let fullName = firstName + " " + lastName;
let birthYear = prompt("Birth year");
let age = 2023 - parseInt(birthYear);
let permittedToDriveACar;

// psuedocode
// check age if more or equal than 16, let permittedToDriveACar = "Permitted"
// check age if less than 16, let permittedToDriveACar = "Not permitted"
if (age >= 16) {
  //true statement
  permittedToDriveACar = "Permitted";
} else {
  permittedToDriveACar = "Not Permitted";
}

// insert variable value into DOM innerText
firstNameDOM.innerText = firstName;
lastNameDOM.innerText = lastName;
fullNameDOM.innerText = fullName;
birthYearDOM.innerText = birthYear;
ageDOM.innerText = age;
driveCarDOM.innerText = permittedToDriveACar;
