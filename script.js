//logic for tic tac toe

let current = "X";
let counter = 1;
let block = document.getElementById("game-blocks");
let player = document.getElementById("player");
let turnNumber = document.getElementById("turn-number");
let newGame = document.getElementById("new-game");
let resultsNode = document.getElementById("results");

newGame.addEventListener("click", (e) => {
  location.reload();
});
function blockClick(e) {
  block = e.target;
  current = counter % 2 === 0 ? "O" : "X";
  counter += 1;
  block.textContent = current;
  block.disabled = true;
  player.textContent = current === "X" ? "O" : "X";
  turnNumber.textContent = counter;
  results();
  block.removeEventListener('click',blockClick);
  
}

function results() {
  let elements = Array.from(document.getElementsByClassName("block"));
  let pattern = elements.map((el) => {
    return el.textContent;
  });
  let horizontalCheck = (arr) => {
    // let patternString = arr.join(" ");
    // console.log(patternString);
    // if (patternString.includes("X X X") || patternString.includes("O O O")) {
    //   return true;
    // }
    // return false;
    for (let i = 0; i < 9; i += 3) {
        let check = arr[i] + arr[i + 1] + arr[i + 2];
  
        if (check === "XXX" || check === "OOO") {
            console.log(check);
          return true;
        }
        // return false;
      }
  };

  let verticalCheck = (arr) => {
    for (let i = 0; i < 3; i++) {
      let check = arr[i] + arr[3 + i] + arr[6 + i];

      if (check === "XXX" || check === "OOO") {
        return true;
      }
      // return false;
    }
  };

  let diagonalCheck = (arr) => {
    diag1 = arr[0] + arr[4] + arr[8];
    diag2 = arr[2] + arr[4] + arr[6];

    if (
      diag1 === "OOO" ||
      diag1 === "XXX" ||
      diag2 === "OOO" ||
      diag2 === "XXX"
    ) {
      console.log(diag1, diag2);
      return true;
    }
    return false;
  };

  if (verticalCheck(pattern)) {
    console.log(current, "Won vertically");
    resultsNode.textContent = current + " Won the game!";
    return;
    
  } else if (horizontalCheck(pattern)) {
    console.log(current, "Won horizontally!");
    resultsNode.textContent = current + " Won the game!";
    return;
  } else if (diagonalCheck(pattern)) {
    console.log(current, "Won diagonally!");
    resultsNode.textContent = current + " Won the game!";
    return;
  } else {
    if (pattern.join("").trim().length === 9) {
      console.log("Game drew!");
      resultsNode.textContent = "Game Drew!";

      return;
    } else {
      console.log("next turn");
    }
  }
}


block.addEventListener("click", blockClick);
