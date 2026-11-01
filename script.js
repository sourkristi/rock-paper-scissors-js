function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let input = prompt("Choose Rock, Paper, or Scissors:");
    if (!input) return "";
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

function playRound(human, computer) {
    if (human === computer) return "tie";
    
    if (
        (human === "Rock" && computer === "Scissors") ||
        (human === "Paper" && computer === "Rock") ||
        (human === "Scissors" && computer === "Paper")
    ) {
        return "win";
    }
    
    return "lose";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const human = getHumanChoice();
        const computer = getComputerChoice();
        const result = playRound(human, computer);

        if (result === "win") {
            humanScore++;
            alert(`Round ${i + 1}: You Win! (${human} beats ${computer})\nScore — You: ${humanScore}, Computer: ${computerScore}`);
        } else if (result === "lose") {
            computerScore++;
            alert(`Round ${i + 1}: You Lose! (${computer} beats ${human})\nScore — You: ${humanScore}, Computer: ${computerScore}`);
        } else {
            alert(`Round ${i + 1}: It's a Tie! (Both chose ${human})\nScore — You: ${humanScore}, Computer: ${computerScore}`);
        }
    }

    // Final Game Results
    if (humanScore > computerScore) {
        alert(`Congratulations! You won the game! Final Score: ${humanScore} - ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(` Bummer! You lost the game. Final Score: ${humanScore} - ${computerScore}`);
    } else {
        alert(` Wow, it's an overall tie game! Final Score: ${humanScore} - ${computerScore}`);
    }
}

alert("Starting game...");
playGame();