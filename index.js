const playerSelectionDisplay = document.createElement("h2");
document.body.appendChild(playerSelectionDisplay);

const humanScoreDisplay = document.createElement("h3");
document.body.appendChild(humanScoreDisplay);

const computerScoreDisplay = document.createElement("h3");
document.body.appendChild(computerScoreDisplay);

const tieMessage = document.createElement("h3");
tieMessage.id = "tieMessage";
document.body.appendChild(tieMessage);

const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
button1.textContent = "rock";
button2.textContent = "paper";
button3.textContent = "scissors";
document.body.append(button1, button2, button3);

const gameButtons = document.querySelectorAll("button");
gameButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
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

function handleButtonClick(e) {
  let randomNum = Math.floor(Math.random() * 3);
  let computerSelection = getComputerChoice(randomNum);
  const humanSelection = e.target.textContent;
  playerSelectionDisplay.innerHTML = `YOU: ${humanSelection} <br> BOT ${computerSelection} `;

  playRound(humanSelection, computerSelection);
}

function playerWin(humanChoice, computerChoice) {
  return (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  );
}

let computerScore = 0;
let humanScore = 0;
function playRound(humanChoice, computerChoice) {
  tieMessage.textContent = "";
  if (humanChoice === computerChoice) {
    tieMessage.textContent = "It's a tie!";
  } else if (playerWin(humanChoice, computerChoice)) {
    humanScore++;
    humanScoreDisplay.innerHTML = `Human Score: ${humanScore} <br> You win this round!`;
  } else {
    computerScore++;
    computerScoreDisplay.innerHTML = `Bot Score: ${computerScore} <br> The bot wins this round!`;
  }

  if (humanScore === 5) {
    humanScoreDisplay.textContent = "You win the game!";
    gameButtons.forEach((button) => {
      button.removeEventListener("click", handleButtonClick);
    });
  } else if (computerScore === 5) {
    computerScoreDisplay.textContent = "The bot wins the game!";
    gameButtons.forEach((button) => {
      button.removeEventListener("click", handleButtonClick);
    });
  }
}
