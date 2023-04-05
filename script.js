const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const playerSelection = prompt("Your choice: rock, paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice();

let playerScore = 0,
    computerScore = 0;


function getComputerChoice() {
    const random = (min = 1, max = 4) => Math.floor(Math.random() * (max - min)) + min;

    if (random() === 1) return ROCK;
    else if (random() === 2) return PAPER;
    else return SCISSORS;
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === "rock" && computerSelection === "rock") {
        playerScore++;
        computerScore++;
        return result = "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return result = "You are a winner!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return result = "You are a loser!";

    } if (playerSelection === "scissors" && computerSelection === "scissors") {
        playerScore++;
        computerScore++;
        return result = "It's a tie!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return result = "You are a loser!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return result = "You are a winner!";

    } if (playerSelection === "paper" && computerSelection === "paper") {
        playerScore++;
        computerScore++;
        return result = "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return result = "You are a winner!";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
       computerScore++;
        return result = "You are a loser!"; 
    } 
}

function game(){
    for (let i=0; i < 5; i++){
        playRound(playerSelection, computerSelection)
        if (i === 4){
            console.log("It is a tie!");
            break;
        
        }else if (playerScore === computerScore){
            continue;
        }else if (computerScore === 3){
            console.log("You have lost!");
            break;
        }else if (playerScore === 3){
            console.log("You have won!")
            break;
        }
    }
    playerScore = 0;
    computerScore = 0;
}

game();