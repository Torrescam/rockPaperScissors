// Create a function that takes a random number as an argument
function getComputerChoice(random) {
  // Declare a variable to store the computer's choice
  let string = "";

  // Compare the random number with 0, 1, or 2 and assign a corresponding value
  if (random === 0) {
    string = "Rock";
  } else if (random === 1) {
    string = "Paper";
  } else {
    string = "Scissors";
  }
  // Return the computer's choice
  return string;
}
// Define the maximum number for the range of random numbers (0 to 2)
const max = 3;

// Generate a random number between 0 and 2
let randomNum = Math.floor(Math.random() * max);

// Call the function with the generated random number and print the result
console.log(getComputerChoice(randomNum));
