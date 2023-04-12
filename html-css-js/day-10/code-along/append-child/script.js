console.log("start to do list");

// 1
// what trigger : button click - finished
// what is the content : input value - finished
// validate only string to be submitted - finished
// what is new child : <li> - finished
// new created li inner text = input value - finished
// append <ol>

// 2
// new feature : important check -> text list change to red
// dom checkbox and check the value
// value === true, add new style at newLiDOM, color = red

// 3
// empty value newTaskDOM

// 4
// apppend multiple child in the same time
// input propmt, text
// each task is sepparated using ','
// hello world = 1 task
// hello world, hello mars = 2 tasks
// hello world, marhaba mars, hola jupiter = 3 tasks
// convert string task
// loop, iterate array of tasks
// create new li
// append ol to insert li

let btnSubmitDOM = document.querySelector("#btnSubmit");
let newTaskDOM = document.querySelector("#newTask");
let listContainerDOM = document.querySelector("#ListContainer");
let importantCheckboxDOM = document.querySelector("#importantCheckbox");

initialiseMultipleTasks();

// add task insert in the prompt
function initialiseMultipleTasks() {
  let promptTask = prompt("Insert your prompt(s) here");
  // safe guard
  if (promptTask === null) return;
  let taskArray = promptTask.split(",");

  for (let i = 0; i < taskArray.length; i++) {
    let value = taskArray[i].trim();
    let newLiDOM = document.createElement("li");
    newLiDOM.innerText = value;
    listContainerDOM.appendChild(newLiDOM);
  }
}

// add new task when press button
btnSubmitDOM.addEventListener("click", newTask);
document.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    newTask();
  }
});

function newTask() {
  // safe guard, condition to return
  if (newTaskDOM.value === "") return;

  // create new li using javascript
  let newLiDOM = document.createElement("li");
  newLiDOM.innerText = newTaskDOM.value;

  let isImportant = importantCheckboxDOM.checked; // boolean
  if (isImportant) {
    //   add style to newLiTask = color ;'red
    newLiDOM.style.color = "red";
  }

  // get the parent and append a child inside it
  // parent : listContainerDOM, child : newLiDOM
  listContainerDOM.appendChild(newLiDOM);

  // empty the form
  resetForm();
}

function resetForm() {
  newTaskDOM.value = "";
  importantCheckboxDOM.checked = false;
}
