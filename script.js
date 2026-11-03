let playerScore = 0;
let computerScore = 0;

// Cache DOM elements
const playerScoreEl = document.querySelector('#player-score');
const computerScoreEl = document.querySelector('#computer-score');
const resultLog = document.querySelector('#result-log');

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    if (playerScore >= 5 || computerScore >= 5) return;

    const computerSelection = getComputerChoice();
    let roundMessage = '';

    if (playerSelection === computerSelection) {
        roundMessage = `It's a tie! Both chose ${playerSelection}.`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        roundMessage = `You win this round! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        roundMessage = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    resultLog.textContent = roundMessage;

    if (playerScore === 5) {
        resultLog.textContent = `Game Over! You won the game ${playerScore} to ${computerScore}!`;
        disableButtons();
    } else if (computerScore === 5) {
        resultLog.textContent = ` Game Over! The computer won the game ${computerScore} to ${playerScore}.`;
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));