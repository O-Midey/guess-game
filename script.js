"use strict";

// Creating a random secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Declaring variables
let score = 10;
let highScore = 0;
let button = document.querySelector("button");
let message = document.querySelector(".message");
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highScore;

// Function to display the message
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// Function to check the user input against the secret number
function checkNumber() {
  let userInput = Number(document.querySelector(".input").value);

  // IF THERE IS NO INPUT
  if (!userInput) {
    message.textContent = "Enter a number between 1 and 20";
    message.style.color = "red";
  }

  // IF INPUT IS EQUAL TO SECRET NUMBER
  else if (userInput === secretNumber) {
    message.textContent = "YOU GUESSED RIGHT 🎉";
    document.querySelector(".secret-number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector("body").style.backgroundColor = "green";
  }

  // IF INPUT IS NOT CORRECT
  else if (userInput !== secretNumber) {
    if (score > 1) {
      displayMessage(userInput < secretNumber ? "Go higher" : "Go lower");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You have lost the game";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
}

// Reset Button Function
const reset = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "rgb(24, 24, 24)";
  document.querySelector(".secret-number").textContent = "?";
  message.textContent = "Take a guess...";
  document.querySelector(".input").value = "";
  score = 10;
  document.querySelector(".score").textContent = score;
};

// Add event listener to the reset button
document.querySelector(".reset").addEventListener("click", reset);

// Add event listener to the check button
button.addEventListener("click", checkNumber);

// Add event listener for whenever the "enter" key is hit
document.querySelector(".input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkNumber();
  }
});
