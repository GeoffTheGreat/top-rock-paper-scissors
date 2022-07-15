//create array of rock paper and scissor rpsArray
const rpsArray = ["rock", "paper", "scissors"];
let compScore = 0;
let humanScore = 0;
//computerPlay function
function computerPlay() {
  //get a random item from the rpsArray
  let randomInt = Math.floor(Math.random() * (3 - 0)) + 0;
  let comPlay = rpsArray[randomInt];
  //return the random item
  return comPlay;
}

//player selection
function playerSelection(e) {
  //create a variable for the userInput
  let userInput = e.target.id;
  let winArr = playRound(computerPlay(), userInput);
  winner(winArr);
}

function winner(winArr) {
  let whoWon = winArr[0];
  let winMessage = winArr[1];
  let element;
  let retMessage = document.getElementById("result--message");
  if (whoWon === "player") {
    humanScore++;
    element = document.getElementById("humanRes");
    element.textContent = humanScore;
  }
  if (whoWon === "computer") {
    compScore++;
    element = document.getElementById("cpuRes");
    element.textContent = compScore;
  }
  retMessage.textContent = winMessage;
  if (compScore === 5 || humanScore === 5) {
    const bod = document.body;
    const endDiv = document.createElement("div");
    endDiv.setAttribute("id", "endscreen");
    const endMessage = document.createElement("p");
    if (compScore === 5) {
      endMessage.textContent =
        "You have lost. Your failure is eternal. Would you like to try again?";
    } else if (humanScore === 5) {
      endMessage.textContent =
        "You have Won. Your victory is eternal, the immanent threat is still there. Would you like to try again?";
    }
    humanScore = 0;
    document.getElementById("humanRes").textContent = humanScore;
    compScore = 0;
    document.getElementById("cpuRes").textContent = compScore;
    endMessage.setAttribute("id", "end-message");
    const endBtn = document.createElement("button");
    endBtn.textContent = "Go Again?";
    endBtn.setAttribute("id", "end-button");
    endDiv.append(endMessage);
    endDiv.append(endBtn);
    bod.append(endDiv);
    const endTimes = document.getElementById("end-button");
    endTimes.addEventListener("click", () => endDiv.remove());
  }
}
//make a function that takes both the computer play and the user play///playRound
function playRound(compChoice, playerChoice) {
  //create variable to return a message
  let retMessage = "";
  //string variable that stores the value of who has won
  let whoWon = "";

  //use conditional statements to determine who has won
  // main if statements used to determine the outcome
  if (playerChoice === "rock") {
    if (compChoice === "scissors") {
      retMessage = "You Won! Rock beats Scissors";
      whoWon = "player";
    } else if (compChoice === "paper") {
      retMessage = "You Lose! Paper beats Rock";
      whoWon = "computer";
    } else {
      retMessage = "Its a draw!";
      whoWon = "draw";
    }
  }
  if (playerChoice === "paper") {
    if (compChoice === "rock") {
      retMessage = "You Won! Paper beats Rock";
      whoWon = "player";
    } else if (compChoice === "scissors") {
      retMessage = "You Lose! Scissors beats Paper";
      whoWon = "computer";
    } else {
      retMessage = "Its a draw!";
      whoWon = "draw";
    }
  }
  if (playerChoice === "scissors") {
    if (compChoice === "paper") {
      retMessage = "You Won! Scissors beats Paper";
      whoWon = "player";
    } else if (compChoice === "rock") {
      whoWon = "computer";
      retMessage = "You Lose! Rock beats Scissors";
    } else {
      retMessage = "Its a draw!";
      whoWon = "draw";
    }
  }
  return [whoWon, retMessage];
}

//create a function called game that implements 5 rounds and prints the result on the console
//this is my attempt at event listeners and handlers

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissors");

rock.addEventListener("click", playerSelection);
paper.addEventListener("click", playerSelection);
scissor.addEventListener("click", playerSelection);

function restart() {
  // humanScore = 0;
  // compScore = 0;
  // endDiv.remove();
  console.log("hello");
}
