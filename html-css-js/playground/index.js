let heightDOM,
  weightDOM,
  bmiDOM,
  height = 0,
  weight = 0,
  bmi = 0;

heightDOM = document.querySelector("#height");
weightDOM = document.querySelector("#weight");
bmiDOM = document.querySelector("#calculatedBmi");

heightDOM.addEventListener(
  "change",
  (e) => (height = parseInt(e.target.value || 0))
);
weightDOM.addEventListener(
  "change",
  (e) => (weight = parseInt(e.target.value || 0))
);

function calculateBmi() {
  bmiDOM.innerText = height + weight;
}
