let bodyDOM = document.querySelector("body");

bodyDOM.addEventListener("click", drawDot);
bodyDOM.addEventListener("mousemove", drawLine);

function drawDot(event) {
  let newTop = event.clientY;
  let newLeft = event.clientX;
  //  create new div
  let newDiv = document.createElement("div");
  // div give a class .dot
  newDiv.classList.add("dot");
  // update div top and left by using clientX and clientY
  newDiv.style.top = `${newTop}px`;
  newDiv.style.left = `${newLeft}px`;
  // appendChild newDiv inside bodyDOM
  bodyDOM.appendChild(newDiv);
}

function drawLine(event) {
  let newTop = event.clientY;
  let newLeft = event.clientX;
  //  create new div
  let newDiv = document.createElement("div");
  // div give a class .dot
  newDiv.classList.add("dot");
  // update div top and left by using clientX and clientY
  newDiv.style.top = `${newTop}px`;
  newDiv.style.left = `${newLeft}px`;
  // appendChild newDiv inside bodyDOM
  bodyDOM.appendChild(newDiv);
}
