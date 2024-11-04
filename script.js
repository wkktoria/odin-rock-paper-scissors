const VALID_CHOICES = [
  ["rock", "🪨"],
  ["paper", "🧻"],
  ["scissors", "✂️"],
];
const MAX_SCORE = 5;

const buttons = document.querySelector(".buttons");
const roundResultText = document.querySelector("#round-result");
const humanScoreText = document.querySelector("#human-score");
const computerScoreText = document.querySelector("#computer-score");
const humanSelectionText = document.querySelector("#human-selection");
const computerSelectionText = document.querySelector("#computer-selection");
const resetButton = document.querySelector("#reset-button");

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    roundResultText.textContent = "It's a draw!";
    return;
  }

  let humanWon = false;

  if (humanChoice === "rock") {
    humanWon = computerChoice !== "paper";
  } else if (humanChoice === "paper") {
    humanWon = computerChoice !== "scissors";
  } else if (humanChoice === "scissors") {
    humanWon = computerChoice !== "rock";
  } else {
  }

  if (humanWon) {
    roundResultText.textContent = "You won!";
    humanScore++;
  } else {
    roundResultText.textContent = "Computer won!";
    computerScore++;
  }

  humanScoreText.textContent = `Your score: ${humanScore}`;
  computerScoreText.textContent = `Computer score: ${computerScore}`;
};

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
};

buttons.addEventListener("click", (event) => {
  if (isGameFinished()) {
    announceWinner();
    reset();
  } else {
    const humanChoice = event.target.dataset.value;
    if (humanChoice === undefined) {
      return;
    }

    const computerChoice = getComputerChoice();

    humanSelectionText.textContent = `Your selection: ${event.target.textContent}`;
    computerSelectionText.textContent = `Computer selection: ${computerChoice[1]}`;

    playRound(humanChoice, computerChoice[0]);
  }
});

function isGameFinished() {
  return humanScore === MAX_SCORE || computerScore === MAX_SCORE;
}

function announceWinner() {
  if (humanScore > computerScore) {
    alert("You won the game!");
  } else {
    alert("Computer won the game!");
  }
}

function reset() {
  humanScore = 0;
  computerScore = 0;

  roundResultText.textContent = "Start playing to see the result!";

  humanScoreText.textContent = `Your score: ${humanScore}`;
  computerScoreText.textContent = `Computer score: ${computerScore}`;

  humanSelectionText.textContent = "Your selection: %";
  computerSelectionText.textContent = "Computer selection: %";
}
