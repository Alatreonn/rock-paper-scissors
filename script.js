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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();

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
    }

    console.log("Final Scores:");
    console.log(` Player:` + playerScore);
    console.log(` Computer: ` + computerScore);
    console.log(` Draws ` + drawScore);
}

game();