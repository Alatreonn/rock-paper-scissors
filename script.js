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

const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
console.log(playerSelection);

console.log(playRound(playerSelection, computerSelection));