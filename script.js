let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let btnDisabled = false;

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

    rock.addEventListener("click", function () {
        if(!Disabled);{
        const playerSelection = "ROCK"
        game(playerSelection); }});
    paper.addEventListener("click", function () {
        if(!Disabled);{
        const playerSelection = "PAPER"
        game(playerSelection); }});
    scissors.addEventListener("click", function () {
        if(!Disabled);{
        const playerSelection = "SCISSORS"
        game(playerSelection); }});
}

function Disabled(sec) {
    btnDisabled = true;
    setTimeout(function() {btnDisabled = false;}, sec * 1000);
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
    if (btnDisabled) {
        return;
    }

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const roundResultEl = document.querySelector(`div[class="round-result"]`);
    const roundResultExpEl = document.querySelector(`div[class="round-result-exp"]`);

    if (result === "WIN") {
        playerScore++;
        roundResultEl.textContent = `It's a WIN!`
        roundResultExpEl.textContent = `${playerSelection} wins over ${computerSelection}!`;
    } else if (result === "LOSS") {
        computerScore++;
        roundResultEl.textContent = `It's a LOSS!`;
        roundResultExpEl.textContent = `${playerSelection} losses to ${computerSelection}!`;
    } else {
        drawScore++
        roundResultEl.textContent = `It's a DRAW!`;
        roundResultExpEl.textContent = `${playerSelection} is equal to ${computerSelection}!`;
    }


    function declareWinner() {
        if (playerScore === 5) {
            roundResultEl.textContent = `Game Over!`
            roundResultExpEl.textContent = `Player has won!`
        } else if (computerScore === 5) {
            roundResultEl.textContent = `Game Over!`
            roundResultExpEl.textContent = `Computer has won!`
        } else {
            return null;
        }
        Disabled(3);
        
        Scoreboard();
        playerScore = 0;
        computerScore = 0;
        drawScore = 0;
    }

    Scoreboard();
    declareWinner();
}



rps();