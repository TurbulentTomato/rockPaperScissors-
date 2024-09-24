const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const validMoves = ["rock", "paper", "scissors"];
let compChoice = "";
let playerChoice = "";

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  compChoice = validMoves[randomNumber];
}
