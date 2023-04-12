let tasks = [];
let message = "";
let myTaskDOM = document.querySelector("#myTask");
let addTaskDOM = document.querySelector("#addTask");

function addNewTask() {
  tasks.push(prompt("Insert a to-do list item:"));
  console.log(tasks);
  myTaskDOM.innerText = "I need to do: " + tasks.join(", ");
}
