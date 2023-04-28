import { USER_INTERFACE_ID } from '../constants.js';
import { quizData } from '../data.js';
import { getUserName } from './welcomePage.js';
import { initQuestionPage } from './questionPage.js';

export const showFinalPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";

  const userName = getUserName();

  const totalPoints = 100;

  const finalMessage = document.createElement('div');
  finalMessage.classList.add("final-page-div")

  // different text depending on a score
  if (quizData.score < 30) {
    finalMessage.innerText = `Better luck next time, ${userName}. You earned ${quizData.score} points out of ${totalPoints} possible`;
    const gif = document.createElement("img")
    gif.classList.add("gif-style")
    gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2QwNmMyMzEwNjI0MDIwNzA3YmFhY2MxM2EyODcxNjZhNmFiZjJmYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/lYiQWU9xMJrBsb2RHX/giphy.gif"
    finalMessage.appendChild(gif)
  } else if (quizData.score >= 30 && quizData.score <= 70) {
    finalMessage.innerText = `Good job, ${userName}! You earned ${quizData.score} points out of ${totalPoints} possible points.`;
    const gif = document.createElement("img")
    gif.classList.add("gif-style")
    gif.src = "https://media1.giphy.com/media/20Mmcse81nQ38dSwvo/giphy.gif?cid=ecf05e47w8uow8d5kadl5u104fr07cigo7cm6h0292xced1y&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    finalMessage.appendChild(gif)
  } else {
    finalMessage.innerText = `Well done, ${userName}! You earned ${quizData.score} points out of ${totalPoints} possible points.`;
    const gif = document.createElement("img")
    gif.classList.add("gif-style")
    gif.src = "https://media0.giphy.com/media/2A760H1p8R9UNpYCba/giphy.gif?cid=ecf05e47jn0fff7tt2bxu3ludfytcix7fz5tf5ygd90awtfn&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    finalMessage.appendChild(gif)
  }

  // New Game button
  const newGameButton = document.createElement('button');
  newGameButton.classList.add("newgame-button-style")
  newGameButton.innerText = 'New Game';
  newGameButton.addEventListener('click', startNewGame);
  newGameButton.classList.add('button-style');


  userInterface.appendChild(finalMessage);
  userInterface.appendChild(newGameButton)

  const superMarioTeam = document.createElement("div")
  superMarioTeam.innerHTML = "Created with love by SuperMarioTeam "
  superMarioTeam.classList.add("moving-text")

  const avatar1 = document.createElement("img")
  avatar1.src = "./src/images/nurlan.gif"
  avatar1.classList.add("avatar");
  const avatar2 = document.createElement("img")
  avatar2.src = "./src/images/anastasia.gif"
  avatar2.classList.add("avatar");
  const avatar3 = document.createElement("img")
  avatar3.src = "./src/images/evghen.gif"
  avatar3.classList.add("avatar");

  userInterface.appendChild(superMarioTeam)
  superMarioTeam.appendChild(avatar1);
  superMarioTeam.appendChild(avatar2);
  superMarioTeam.appendChild(avatar3);
};

const startNewGame = () => {
  // Reset the quiz data and start a new game
  quizData.currentQuestionIndex = 0;
  quizData.score = 0;
  initQuestionPage();
};
