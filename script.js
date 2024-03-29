const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
//const playerSelection = () => prompt("Your choice: rock, paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice();
const imgs = document.querySelectorAll(".main-left img");
//console.log(imgs);

let playerScore = 0,
    computerScore = 0;

    if (playerScore === 5 || computerScore === 5){
        playerScore = 0;
        computerScore = 0;
        document.querySelector(".d-score-you").textContent = `${playerScore}`;
        document.querySelector(".d-score-comp").textContent = `${computerScore}`;
    }

imgs.forEach(img => img.addEventListener("click", () => {
    const compChoice = getComputerChoice();
    const roundResult = playRound(img.id, compChoice);
    document.querySelector(".d-msg").textContent = `${roundResult}`;
    
    const compImg = document.querySelector("#comp-choice-img");
    compImg.setAttribute("src", `imgs/${compChoice}.png`);

    document.querySelector(".d-score-you").textContent = `${playerScore}`;
    document.querySelector(".d-score-comp").textContent = `${computerScore}`;

   
    if (playerScore === 5 || computerScore === 5){
        const popUp = document.querySelector(".result-alert-container");
        popUp.classList.add("result-alert-container-visible");
        
        const resultSign = document.querySelector(".result-sign");
        resultSign.classList.add("result-sign-anim");

        const paraRes = document.querySelector(".p-result");
        const replayBtn = document.querySelector(".btn-play");

        if (playerScore === 5){
            paraRes.textContent = "You have beaten the computer!";
        } else {
            paraRes.textContent = "You have been beaten by the computer!";
        }

        replayBtn.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        document.querySelector(".d-score-you").textContent = `${playerScore}`;
        document.querySelector(".d-score-comp").textContent = `${computerScore}`;
        popUp.classList.remove("result-alert-container-visible");
        resultSign.classList.remove("result-sign-anim");
        document.querySelector(".d-msg").textContent = "Choose yor object!";
        compImg.setAttribute("src", ``)

        });

    }

}));



function getComputerChoice() {
    const random = (min = 1, max = 4) => Math.floor(Math.random() * (max - min)) + min;

    if (random() === 1) return ROCK;
    else if (random() === 2) return PAPER;
    else return SCISSORS;
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === "rock" && computerSelection === "rock") {

        return result = "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return result = "You are a winner!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return result = "You are a loser!";

    } if (playerSelection === "scissors" && computerSelection === "scissors") {

        return result = "It's a tie!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return result = "You are a loser!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return result = "You are a winner!";

    } if (playerSelection === "paper" && computerSelection === "paper") {
 
        return result = "It's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return result = "You are a winner!";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
       computerScore++;
        return result = "You are a loser!"; 
    } 
}
