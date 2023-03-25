let pacManDOM = document.querySelector("#pacMan");

let newTop = 0;
let newLeft = 0;

/* This is an event listener that listens for a keydown event. When a keydown event is detected, the
function is called. The function checks which key was pressed and moves the pacman accordingly. */
document.addEventListener("keydown", function (event) {
  let tentativeTop = newTop;
  let tentativeLeft = newLeft;

  if (event.key === "ArrowUp") {
    pacManDOM.style.transform = "rotate(90deg)";
    if (tentativeTop > 0) {
      tentativeTop -= 10;
    }
  }
  if (event.key === "ArrowDown") {
    pacManDOM.style.transform = "rotate(270deg)";
    if (tentativeTop <= 550) {
      tentativeTop += 10;
    }
  }
  if (event.key === "ArrowRight") {
    pacManDOM.style.transform = "rotate(180deg)";
    if (tentativeLeft <= 550) {
      tentativeLeft += 10;
    }
  }
  if (event.key === "ArrowLeft") {
    pacManDOM.style.transform = "rotate(0deg)";
    if (tentativeLeft > 0) {
      tentativeLeft -= 10;
    }
  }

  // Check for wall collisions
  if (!isCollidingWithWall(tentativeTop, tentativeLeft)) {
    newTop = tentativeTop;
    newLeft = tentativeLeft;
    pacManDOM.style.top = `${newTop}px`;
    pacManDOM.style.left = `${newLeft}px`;
    consumeDot();
  }
});

/**
 * If the top or bottom of Pac-Man is between the top and bottom of the wall, and the left or right of
 * Pac-Man is between the left and right of the wall, then Pac-Man is colliding with the wall
 * @param top - the top position of the pacman
 * @param left - the left position of the pacman
 * @returns A boolean value.
 */
function isCollidingWithWall(top, left) {
  const walls = document.querySelectorAll(".wall");
  for (let i = 0; i < walls.length; i++) {
    const wallTop = parseInt(walls[i].style.top, 10);
    const wallLeft = parseInt(walls[i].style.left, 10);
    const wallBottom = wallTop + 40;
    const wallRight = wallLeft + 40;

    const pacManTop = top;
    const pacManLeft = left;
    const pacManBottom = top + 40;
    const pacManRight = left + 40;

    if (
      (pacManTop >= wallTop && pacManTop < wallBottom) ||
      (pacManBottom > wallTop && pacManBottom <= wallBottom)
    ) {
      if (
        (pacManLeft >= wallLeft && pacManLeft < wallRight) ||
        (pacManRight > wallLeft && pacManRight <= wallRight)
      ) {
        return true;
      }
    }
  }
  return false;
}

/**
 * It returns a random number between 0 and max, rounded down to the nearest 10
 * @param max - The maximum value of the random number.
 * @returns A random number between 0 and max.
 */
function getRandomPosition(max) {
  return Math.floor(Math.random() * (max / 10)) * 10;
}

/**
 * It selects all the ghosts, then for each ghost, it sets the top and left position to a random number
 * between 0 and 560
 */
function positionGhosts() {
  const ghosts = document.querySelectorAll(".ghost");

  ghosts.forEach((ghost) => {
    const randomTop = getRandomPosition(560);
    const randomLeft = getRandomPosition(560);

    ghost.style.top = `${randomTop}px`;
    ghost.style.left = `${randomLeft}px`;
  });
}

/* It selects all the ghosts, then for each ghost, it sets the top and left position to a random number
between 0 and 560 */
positionGhosts();

/**
 * It returns a random direction
 * @param ghost - the ghost object
 * @returns a random direction from the directions array.
 */
function changeDirection(ghost) {
  const directions = ["up", "down", "left", "right"];
  const randomIndex = Math.floor(Math.random() * directions.length);
  return directions[randomIndex];
}

/**
 * If the ghost isn't colliding with a wall, move it in the direction it's currently going. If it is
 * colliding with a wall, change the direction of the ghost
 * @param ghost - the ghost that we're moving
 * @param direction - The direction the ghost is currently moving in.
 * @returns The direction of the ghost
 */
function moveGhost(ghost, direction) {
  let currentTop = parseInt(ghost.style.top, 10);
  let currentLeft = parseInt(ghost.style.left, 10);
  let tentativeTop = currentTop;
  let tentativeLeft = currentLeft;

  if (direction === "up") {
    if (tentativeTop > 0) {
      tentativeTop -= 10;
    }
  }
  if (direction === "down") {
    if (tentativeTop <= 550) {
      tentativeTop += 10;
    }
  }
  if (direction === "left") {
    if (tentativeLeft > 0) {
      tentativeLeft -= 10;
    }
  }
  if (direction === "right") {
    if (tentativeLeft <= 550) {
      tentativeLeft += 10;
    }
  }

  // Check for wall collisions
  if (!isCollidingWithWall(tentativeTop, tentativeLeft)) {
    ghost.style.top = `${tentativeTop}px`;
    ghost.style.left = `${tentativeLeft}px`;
  } else {
    // If there's a collision, change the direction of the ghost
    direction = changeDirection(ghost);
  }

  return direction;
}

/**
 * Every 5 seconds, change the direction of each ghost, and every 100ms, move each ghost in the
 * direction it's currently facing.
 */
function startMovingGhosts() {
  const ghosts = document.querySelectorAll(".ghost");

  ghosts.forEach((ghost) => {
    let currentDirection = changeDirection(ghost);

    // Change the direction every 5 seconds
    setInterval(() => {
      currentDirection = changeDirection(ghost);
    }, 5000);

    // Move the ghost every 100ms
    setInterval(() => {
      currentDirection = moveGhost(ghost, currentDirection);
    }, 100);
  });
}

/* It selects all the ghosts, then for each ghost, it sets the top and left position to a random number
between 0 and 560 */
positionGhosts();

/* It's calling the startMovingGhosts function. */
startMovingGhosts();

/**
 * It returns a random number between 0 and the maximum value, rounded down to the nearest multiple of
 * 40
 * @param max - The maximum width or height of the canvas.
 * @returns A random number between 0 and the max value divided by 40.
 */
function getRandomPosition(max) {
  return Math.floor(Math.random() * (max / 40 - 1)) * 40;
}

/**
 * Create 20 walls, place them randomly on the game board, and append them to the DOM
 */
function createWalls() {
  const maze = document.getElementById("maze");

  for (let i = 0; i < 20; i++) {
    const wall = document.createElement("div");
    wall.classList.add("wall");
    const randomTop = getRandomPosition(590);
    const randomLeft = getRandomPosition(590);

    // Align walls with their dimensions (40px)
    const alignedTop = Math.round(randomTop / 40) * 40;
    const alignedLeft = Math.round(randomLeft / 40) * 40;

    // Ensure walls are placed within the game board
    const topWithinBounds = Math.min(alignedTop, 590 - 40);
    const leftWithinBounds = Math.min(alignedLeft, 590 - 40);

    wall.style.top = `${topWithinBounds}px`;
    wall.style.left = `${leftWithinBounds}px`;

    maze.appendChild(wall);
  }
}

// Call createWalls function on page load
createWalls();

// ...

/**
 * For every possible top and left position, if the position is not colliding with a wall, create a dot
 * at that position
 */
function createDots() {
  const maze = document.getElementById("maze");

  for (let top = 0; top < 600; top += 40) {
    for (let left = 0; left < 600; left += 40) {
      if (!isCollidingWithWall(top, left)) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.top = `${top + 15}px`; // Adding 15px to center the dot
        dot.style.left = `${left + 15}px`; // Adding 15px to center the dot
        dot.style.zIndex = 1; // Add this line to position dots above walls
        maze.appendChild(dot);
      }
    }
  }
}

// Call createDots function on page load
createDots();

// ...
// Add this code after the existing code
let score = 0;
let lives = 3;
const scoreDisplay = document.createElement("div");

/**
 * It updates the score display by setting the innerHTML of the scoreDisplay variable to the current
 * score and lives
 */
function updateScoreDisplay() {
  scoreDisplay.innerHTML = `Score: ${score} | Lives: ${lives}`;
  document.body.insertBefore(scoreDisplay, document.body.firstChild);
}

/**
 * If the top or bottom of the pacman is within the top or bottom of the dot, and the left or right of
 * the pacman is within the left or right of the dot, then remove the dot and increase the score
 */
function consumeDot() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    const dotTop = parseInt(dot.style.top, 10);
    const dotLeft = parseInt(dot.style.left, 10);
    const dotBottom = dotTop + 20;
    const dotRight = dotLeft + 20;

    const pacManTop = newTop;
    const pacManLeft = newLeft;
    const pacManBottom = newTop + 20;
    const pacManRight = newLeft + 20;

    if (
      (pacManTop >= dotTop && pacManTop < dotBottom) ||
      (pacManBottom > dotTop && pacManBottom <= dotBottom)
    ) {
      if (
        (pacManLeft >= dotLeft && pacManLeft < dotRight) ||
        (pacManRight > dotLeft && pacManRight <= dotRight)
      ) {
        dot.remove();
        score += 10;
        updateScoreDisplay();
      }
    }
  });
}

/**
 * If the top or bottom of the pacman is between the top and bottom of the ghost, and the left or right
 * of the pacman is between the left and right of the ghost, then the pacman has collided with the
 * ghost
 */
function checkCollisionWithGhost() {
  const ghosts = document.querySelectorAll(".ghost");
  const pacManTop = newTop;
  const pacManLeft = newLeft;
  const pacManBottom = newTop + 40;
  const pacManRight = newLeft + 40;

  ghosts.forEach((ghost) => {
    const ghostTop = parseInt(ghost.style.top, 10);
    const ghostLeft = parseInt(ghost.style.left, 10);
    const ghostBottom = ghostTop + 40;
    const ghostRight = ghostLeft + 40;

    if (
      (pacManTop >= ghostTop && pacManTop < ghostBottom) ||
      (pacManBottom > ghostTop && pacManBottom <= ghostBottom)
    ) {
      if (
        (pacManLeft >= ghostLeft && pacManLeft < ghostRight) ||
        (pacManRight > ghostLeft && pacManRight <= ghostRight)
      ) {
        lives--;
        updateScoreDisplay();
        resetGame();
      }
    }
  });
}

/**
 * If the player has no lives left, alert the player that the game is over, reset the lives and score
 * to their starting values, and reset the position of the ghosts and Pac-Man
 */
function resetGame() {
  if (lives <= 0) {
    alert("Game Over!");
    lives = 3;
    score = 0;
    updateScoreDisplay();
  }
  pacManDOM.style.top = "0px";
  pacManDOM.style.left = "0px";
  newTop = 0;
  newLeft = 0;
  positionGhosts();
}

// Call updateScoreDisplay on page load
updateScoreDisplay();

// Add this code after the existing code
setInterval(() => {
  checkCollisionWithGhost();
}, 100);
