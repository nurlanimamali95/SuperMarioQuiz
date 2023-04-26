import { USER_INTERFACE_ID } from '../constants.js';
import { quizData } from '../data.js';
import { getUserName } from './welcomePage.js';

export const showFinalPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const userName = getUserName();

  const totalPoints = 100;

  const finalMessage = document.createElement('div');

  // different text depending on a score
  if (quizData.score < 30) {
    finalMessage.innerText = `Better luck next time, ${userName}. You earned ${quizData.score} points out of ${totalPoints} possible`;
  } else if (quizData.score >= 30 && quizData.score <= 70) {
    finalMessage.innerText = `Good job, ${userName}! You earned ${quizData.score} points out of ${totalPoints} possible points.`;
  } else {
    finalMessage.innerText = `Well done, ${userName}! You earned ${quizData.score} points out of ${totalPoints} possible points.`;
  }

  // New Game button
  const newGameButton = document.createElement('button');
  newGameButton.innerText = 'New Game';
  newGameButton.addEventListener('click', startNewGame);
  newGameButton.classList.add('button-style');
  finalMessage.appendChild(newGameButton);

  userInterface.appendChild(finalMessage);
};

const startNewGame = () => {
  // Reset the quiz data and start a new game
  quizData.currentQuestionIndex = 0;
  quizData.score = 0;
  initQuestionPage();
};