function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("What's your choice? (rock, paper, scissors)");
  choice = choice.toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    console.error("Invalid choice");
  }
}

function playGame() {
  const NUMBER_OF_ROUNDS = 5;

  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
    }

    let humanWon = false;
    if (humanChoice === "rock") {
      humanWon = computerChoice !== "paper";
    } else if (humanChoice === "paper") {
      humanWon = computerChoice !== "scissors";
    } else if (humanChoice === "scissors") {
      humanWon = computerChoice !== "rock";
    }

    if (humanWon) {
      console.log(`You win - ${humanChoice} beats ${computerChoice}!`);
      return "human";
    } else {
      console.log(`You lose - ${computerChoice} beats ${humanChoice}!`);
      return "computer";
    }
  };

  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    const roundWinner = playRound(humanSelection, computerSelection);

    if (roundWinner === "human") {
      humanScore++;
    } else {
      computerScore++;
    }
  }

  if (humanScore > computerScore) {
    console.log("The winner is human!");
  } else if (computerScore > humanScore) {
    console.log("The winner is computer!");
  } else {
    console.log("It's a draw!");
  }
}

playGame();
