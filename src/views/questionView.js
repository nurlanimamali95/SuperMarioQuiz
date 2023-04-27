import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { PROGRESS_BAR_ID } from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, questionCounter) => {
  
  const element = document.createElement('div'); 

  //check if the current question has an image

  let imageElement = '';
  if (quizData.questions[quizData.currentQuestionIndex].image) {
    imageElement = `<img src="${quizData.questions[quizData.currentQuestionIndex].image}" width="200">`;
  }

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <div class="status-bar">
    <h3>Q:${questionCounter}/10</h3>  
    <div class="progress-container">
    <div id="${PROGRESS_BAR_ID}"></div>
    </div>
    <div class="points-container">
    <div class="image-container"></div>
    <div class="points">${100}</div>
    </div>
    </div>
    <div class="main-container">
    <h1 class="question">${question}</h1>
    ${imageElement}
    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;


  return element;
};