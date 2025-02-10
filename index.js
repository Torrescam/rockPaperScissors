//Selection player and bot display elements
const youSelection = document.querySelector("#you-selectionDisplay");
const botSelection = document.querySelector("#bot-selectionDisplay");

const youScoreDisplay = document.querySelector(".you-score");
const botScoreDisplay = document.querySelector(".bot-score");

//Adding eventListener to the button(rock, paper, scissors)
const gameButtons = document.querySelectorAll(".buttons-container button");
gameButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

//creating dinamic message for tie and gameWinner
const playerScoresContainer = document.querySelector(".player-scores");
const tieMessage = document.createElement("h3");
tieMessage.id = "tieMessage";
tieMessage.style.color = "#615b4f";
tieMessage.style.display = "none";

const winMessage = document.createElement("h3");
winMessage.id = "winMessage";
winMessage.style.color = "#615b4f";
winMessage.style.display = "none";

// Appending the messages to the player scores container
playerScoresContainer.append(tieMessage, winMessage);

// Function to generate the computer's choice based on a random number (0 = Rock, 1 = Paper, 2 = Scissors)
function getComputerChoice(random) {
  if (random === 0) {
    return "./img/button-img/rock.png";
  } else if (random === 1) {
    return "./img/button-img/paper.png";
  } else {
    return "./img/button-img/scissors.png";
  }
}

// Handling button clicks to start a new round
function handleButtonClick(e) {
  // Get the player's selection based on the clicked button
  const humanSelection =
    e.target.tagName === "IMG"
      ? e.target.getAttribute("src")
      : e.target.querySelector("img").getAttribute("src");

  // Generate the computer's random selection
  let randomNum = Math.floor(Math.random() * 3);
  let computerSelection = getComputerChoice(randomNum);

  // Display player and bot selections
  document.querySelector("#you-selectionDisplay img").src = humanSelection;
  document.querySelector("#bot-selectionDisplay img").src = computerSelection;

  // Play a round and determine the outcome
  playRound(humanSelection, computerSelection);
}

// Function to check if the player wins against the computer
function playerWin(humanChoice, computerChoice) {
  return (
    (humanChoice.includes("rock.png") &&
      computerChoice.includes("scissors.png")) ||
    (humanChoice.includes("scissors.png") &&
      computerChoice.includes("paper.png")) ||
    (humanChoice.includes("paper.png") && computerChoice.includes("rock.png"))
  );
}

// Game state variables
let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  // Hide the tie message at the start of each round
  tieMessage.style.display = "none";

  if (humanChoice === computerChoice) {
    tieMessage.textContent = "It's a tie!";
    tieMessage.style.display = "block";

    // Hide player scores during tie message display
    youScoreDisplay.style.display = "none";
    botScoreDisplay.style.display = "none";
  } else {
    // Show player scores if it's not a tie
    youScoreDisplay.style.display = "block";
    botScoreDisplay.style.display = "block";

    // Update the score based on who won the round
    if (playerWin(humanChoice, computerChoice)) {
      humanScore++;
      youScoreDisplay.textContent = humanScore;
    } else {
      computerScore++;
      botScoreDisplay.textContent = computerScore;
    }
  }

  // Check if the player or the bot has won the game
  if (humanScore === 5) {
    winMessage.textContent = "🎉You win!";
    winMessage.style.display = "block";

    youScoreDisplay.style.display = "none";
    botScoreDisplay.style.display = "none";

    // Disable the buttons
    gameButtons.forEach((button) => {
      button.disabled = true;
      button.style.pointerEvents = "none";
    });
  } else if (computerScore === 5) {
    winMessage.textContent = "🤖 Bot wins!";
    winMessage.style.display = "block";

    youScoreDisplay.style.display = "none";
    botScoreDisplay.style.display = "none";

    gameButtons.forEach((button) => {
      button.disabled = true;
      button.style.pointerEvents = "none";
    });
  }
}

// Function to reset the game state to the initial values
document.addEventListener("DOMContentLoaded", function () {
  function resetGame() {
    computerScore = 0;
    humanScore = 0;

    youScoreDisplay.textContent = humanScore;
    botScoreDisplay.textContent = computerScore;

    tieMessage.style.display = "none";
    winMessage.style.display = "none";

    youScoreDisplay.style.display = "block";
    botScoreDisplay.style.display = "block";

    const youSelectionImage = document.querySelector(
      "#you-selectionDisplay img"
    );
    youSelectionImage.src = "./img/icon-fist.png";

    const botSelectionImage = document.querySelector(
      "#bot-selectionDisplay img"
    );
    botSelectionImage.src = "./img/icon-fist.png";

    // Enable the buttons for a new game
    gameButtons.forEach((button) => {
      button.disabled = false;
      button.style.pointerEvents = "auto";
    });
  }
  // Add event listener to the reset button
  const buttonReset = document.querySelector("#button-reset");
  buttonReset.addEventListener("click", resetGame);
});
