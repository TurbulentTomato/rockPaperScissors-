const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const validMoves = ["rock", "paper", "scissors"];
let compChoice = "";
let playerChoice = "";

buttons.forEach(button => {
  button.addEventListener("click", getPlayerChoice)
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  compChoice = validMoves[randomNumber];
}

function getPlayerChoice(event) {
  playerChoice = event.target.value.toLowerCase();
}

