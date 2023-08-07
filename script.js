let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice() {
    let comRNG = Math.floor(Math.random() * 3);
    switch (comRNG) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    const outcomes = {
        ROCK: { ROCK: "DRAW", PAPER: "LOSS", SCISSORS: "WIN" },
        PAPER: { ROCK: "WIN", PAPER: "DRAW", SCISSORS: "LOSS" },
        SCISSORS: { ROCK: "LOSS", PAPER: "WIN", SCISSORS: "DRAW" }
    };

    return outcomes[playerSelection][computerSelection];
}

function rps() {
    const rock = document.querySelector(`button[class="rock"]`);   
    const paper = document.querySelector(`button[class="paper"]`);
    const scissors = document.querySelector(`button[class="scissors"]`);

    rock.addEventListener("click", function(){
        const playerSelection = "ROCK"
        game(playerSelection);
    });
    paper.addEventListener("click", function(){
        const playerSelection = "PAPER"
        game(playerSelection);
    });
    scissors.addEventListener("click", function(){
        const playerSelection = "SCISSORS"
        game(playerSelection);
    });
}

function Scoreboard() {
    const playerScoreEl = document.querySelector(`div[class="plrscore"]`);
    const computerScoreEl = document.querySelector(`div[class="comscore"]`);
    const drawScoreEl = document.querySelector(`div[class="drawscore"]`);

    playerScoreEl.textContent = `Player: ${playerScore}`;
    drawScoreEl.textContent = `Draws: ${drawScore}`;
    computerScoreEl.textContent = `Computer: ${computerScore}`;
}

function game(playerSelection) {
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if (result === "WIN") {
            playerScore++;
            console.log(`It's a WIN! ${playerSelection} wins over ${computerSelection}!`);
        } else if (result === "LOSS") {
            computerScore++;
            console.log(`It's a LOSS! ${playerSelection} losses to ${computerSelection}!`);
        } else {
            drawScore++
            console.log(`It's a DRAW! ${playerSelection} is equal to ${computerSelection}!`);
        }
        Scoreboard();
    }


rps();