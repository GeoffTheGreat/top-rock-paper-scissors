//create array of rock paper and scissor rpsArray
const rpsArray = ["rock", "paper", "scissors"];
//computerPlay function
function computerPlay() {
  //get a random item from the rpsArray
  let randomInt = Math.floor(Math.random() * (3 - 0)) + 0;
  let comPlay = rpsArray[randomInt];
  //return the random item
  return comPlay;
}

//player selection
function playerSelection() {
  //create a variable for the userInput
  let userInput = "";
  //get input from the user and assign it to userInput
  userInput = prompt("Choose your weapon: Rock, Paper or Scissors", "Rock");
  //make userInput standard so it can be referenced to the rpsArray
  userInput = userInput.toLowerCase();
  return userInput;
}

//make a function that takes both the computer play and the user play///playRound
//use conditional statements to determine who has won
//return whether or not the user has won

//create a function called game that implements 5 rounds and prints the result on the console
