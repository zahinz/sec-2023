let heightDOM = document.querySelector("#height");
let weightDOM = document.querySelector("#weight");
let calculateBtnDOM = document.querySelector("#calculate-btn");
let bmiAdviceDOM = document.querySelector("#bmi-advice");

// add event listener click at button
calculateBtnDOM.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(weightDOM.value, heightDOM.value);
  // calculate

  // condition based on bmi category

  // insert new text
  bmiAdviceDOM.innerText =
    parseInt(weightDOM.value) + parseInt(heightDOM.value);
});

// get the value from heightDOM, weightDOM
