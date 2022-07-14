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
function playRound(compChoice, playerChoice) {
  //create variable to return a message
  let retMessage = "";
  //use conditional statements to determine who has won
  // main if statements used to determine the outcome
  if (playerChoice === "rock") {
    if (compChoice === "scissors") {
      retMessage = "You Won! Rock beats Scissors";
      return retMessage;
    } else if (compChoice === "paper") {
      retMessage = "You Lose! Paper beats Rock";
      return retMessage;
    } else {
      retMessage = "Its a draw!";
      return retMessage;
    }
  }
  if (playerChoice === "paper") {
    if (compChoice === "rock") {
      retMessage = "You Won! Paper beats Rock";
      return retMessage;
    } else if (compChoice === "scissors") {
      retMessage = "You Lose! Scissors beats Paper";
      return retMessage;
    } else {
      retMessage = "Its a draw!";
      return retMessage;
    }
  }
  if (playerChoice === "scissors") {
    if (compChoice === "paper") {
      retMessage = "You Won! Scissors beats Paper";
      return retMessage;
    } else if (compChoice === "rock") {
      retMessage = "You Lose! Rock beats Scissors";
      return retMessage;
    } else {
      retMessage = "Its a draw!";
      return retMessage;
    }
  }
  // conditional statement that returns a error when the user inputs any other input than rock paper or scissors
  if (
    playerChoice != "rock" ||
    playerChoice != "paper" ||
    playerChoice != "scissors"
  ) {
    retMessage =
      "Invalid selection please choose between: Rock Paper or Scissors";
  }
}
//return whether or not the user has won

//create a function called game that implements 5 rounds and prints the result on the console
