const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const validMoves = ["rock", "paper", "scissors"];
let compChoice = "";
let playerChoice = "";
let playerScore = 0;
let compScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", playGame)
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  compChoice = validMoves[randomNumber];
}

function getPlayerChoice(event) {
  playerChoice = event.target.value;
}

function playGame(event) {
  getComputerChoice();
  getPlayerChoice(event);
  let winner = ""
  if (playerChoice === compChoice) {
    winner = "No one"
  }
  else {
    switch (playerChoice) {
      case "rock":
        if (compChoice === "paper") {
          winner = "Computer";
          compScore++;
          break;
        }
      //if compChoice == sisccors, 
      //breakthrough will happen and we get desired result
      case "paper":
        if (compChoice === "rock") {
          winner = "Player";
          playerScore++;
          break;
        }
      //again using breakthrough
      case "scissors":
        if (compChoice === "rock") {
          winner = "Computer";
          compScore++;
          break;
        } else {
          winner = "Player";
          playerScore++;
          break;
        }
      default:
        message = "error";
    }
  }
  let message = `
Computer Played: ${compChoice} <br>
Player Played: ${playerChoice} <br>
${winner} wins!!! <br>
Player Score: ${playerScore} <br>
Computer Score: ${compScore}
`
  display.innerHTML = message;
}

