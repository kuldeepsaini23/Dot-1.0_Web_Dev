const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPosition = [
  //Row wise
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  //Column wise
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  //diagonally
  [0, 4, 8],
  [2, 4, 6],
];

//lets create a function to initialize the game
function initGame() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];

  //Ui pe bhi update karna padegaa
  boxes.forEach((box, index) => {
    box.innerText = "";
    box.style.pointerEvents = "all";
    //*remove green color from here, initalize box with css properties again
    box.classList = `box box${index+1}`;


  });
  newGameBtn.classList.remove("active");
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}
initGame();

//swap karo turn
function swapturn() {
  if(currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

  //Ui update karo
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}


//check karo winner
function checkGameOver(){
  let answer = "";

  winningPosition.forEach((position) => {
    //*all 3 boxes must be non empty and all 3 boxes must have exactly same value
    if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") && gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]]) {

      //*Check if winner is X
      if(gameGrid[position[0]] === "X") {
        answer = "X";
      } else {
        answer = "O";
      }

      //*disable pointer event 
      boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });

      //*now we know X or 0 is the winner and now mark green color on the boxes
      boxes[position[0]].classList.add("win");
      boxes[position[1]].classList.add("win");
      boxes[position[2]].classList.add("win");
    }
  });

  //*we have a winner
  if(answer !== ""){
    gameInfo.innerText = `Winner is ${answer}`;
    newGameBtn.classList.add("active");
    return; //return karo function se kyuki koi jeet gya hh toh retuen krdo
  }

  //*When there is no winner (Tied)
  let fillCount = 0;
  gameGrid.forEach((box) => {
    if(box !== ""){
      fillCount++;
    }
  });

  //*Board is full
  if(fillCount === 9) {
    gameInfo.innerText = "Game Tied!";
    newGameBtn.classList.add("active");
  }
}

function handleClick(index) {
  if (gameGrid[index] === "") {
    //!Ui me update karo
    boxes[index].innerText = currentPlayer;//!box ke ander X ya 0 aagya

    //!gameGrid me update karo js me
    gameGrid[index] = currentPlayer;
    boxes[index].style.pointerEvents = "none";

    //swap karo turn
    swapturn();

    //koi jeet toh nhi gya na
    checkGameOver();
  }
}

// Event Listeners on each boxes
boxes.forEach((box, index) => {
  box.addEventListener("click", ()=>
  handleClick(index));
});

newGameBtn.addEventListener("click", initGame);