// Function to generate the computer's choice based on a random number (0 = Rock, 1 = Paper, 2 = Scissors)
function getComputerChoice(random) {
  let string = "";
  // Compare the random number with 0, 1, or 2 and assign a corresponding value
  if (random === 0) {
    string = "rock";
  } else if (random === 1) {
    string = "paper";
  } else {
    string = "scissors";
  }
  return string;
}
// Function to validate and process the user's input
function getHumanChoice(string) {
  if (string === null) {
    return false;
  }
  if (typeof string !== "string") {
    return "Invalid input. Please enter Rock, Paper, or Scissors.";
  }
  // Convert the user input to lowercase for case-insensitive comparison
  const input = string.toLowerCase();

  if (input === "rock" || input === "paper" || input === "scissors") {
    return input;
  }
  return "Invalid choice. Please enter rock, paper, or scissors.";
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 3);
    let computerSelection = getComputerChoice(randomNum);
    console.log(computerSelection);

    let input = prompt(
      "Please enter one of the following: Rock, Paper, or Scissors"
    );
    let humanSelection = getHumanChoice(input);

    // manage errors
    if (humanSelection === false) {
      console.log("Input cancelled. Game over");
      break;
    } else if (humanSelection.startsWith("Invalid")) {
      console.log(humanSelection);
      continue;
    } else {
      console.log("Human choice:", humanSelection);
    }

    playRound(humanSelection, computerSelection);
    console.log(
      `Scores after round ${
        i + 1
      }: Human: ${humanScore}, Computer: ${computerScore}`
    );
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "rock")
    ) {
      computerScore++;
      console.log("Computer wins this round!");
    } else {
      humanScore++;
      console.log("You win this round!");
    }
  }

  console.log(`Final Score: Human: ${humanScore}, computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
