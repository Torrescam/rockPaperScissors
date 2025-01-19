// Function to generate the computer's choice based on a random number (0 = Rock, 1 = Paper, 2 = Scissors)
function getComputerChoice(random) {
  let string = "";

  // Compare the random number with 0, 1, or 2 and assign a corresponding value
  if (random === 0) {
    string = "Rock";
  } else if (random === 1) {
    string = "Paper";
  } else {
    string = "Scissors";
  }
  return string;
}
// Generate a random number and get the computer's choice
const max = 3;
let randomNum = Math.floor(Math.random() * max);
console.log(getComputerChoice(randomNum));

// Function to validate and process the user's input
function getHumanChoice(string) {
  let result = "";

  if (string === "Rock") {
    result = string;
  } else if (string === "Paper") {
    result = string;
  } else if (string === "Scissors") {
    result = string;
  } else {
    result = "Invalid choice, please enter Rock, Paper, or Scissors.";
  }

  return result;
}
// Prompt the user for input and display the validated choice
let input = prompt(
  "Please enter one of the following: Rock, Paper, or Scissors"
);
console.log(getHumanChoice(input));
