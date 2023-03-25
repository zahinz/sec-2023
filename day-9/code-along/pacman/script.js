let pacManDOM = document.querySelector("#pacMan");

let newTop = 0;
let newLeft = 0;

// add event listener at document to rotate id pacMan according to keyboard press
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    pacManDOM.style.transform = "rotate(90deg)";
    console.log(newTop);
    if (newTop > 0) {
      newTop = newTop - 10;
      pacManDOM.style.top = `${newTop}px`;
    }
  }
  if (event.key === "ArrowDown") {
    pacManDOM.style.transform = "rotate(270deg)";
    if (newTop <= 550) {
      newTop = newTop + 10;
      pacManDOM.style.top = `${newTop}px`;
    }
  }
  if (event.key === "ArrowRight") {
    pacManDOM.style.transform = "rotate(180deg)";
    console.log(newLeft);
    if (newLeft <= 550) {
      newLeft = newLeft + 10;
      pacManDOM.style.left = `${newLeft}px`;
    }
  }
  if (event.key === "ArrowLeft") {
    pacManDOM.style.transform = "rotate(0deg)";
    console.log(newLeft);
    if (newLeft > 0) {
      newLeft = newLeft - 10;
      pacManDOM.style.left = `${newLeft}px`;
    }
  }
});

// complete the challenge implement and update values of newTop and newLeft when user keypress ArrowLeft, ArrowRight, ArrowUp
// new condition to avoid the pacman move beyond black box
