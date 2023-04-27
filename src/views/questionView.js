import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { PROGRESS_BAR_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, questionCounter, imageUrl) => {
  const element = document.createElement('div'); 

  const questionImage = imageUrl ? `<img class="question-image" src="${imageUrl}" alt="Question image" />` : '';

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  
    <div class="status-bar">
    <h3>${questionCounter}/10</h3>  
    <div class="progress-container">
    <div id="${PROGRESS_BAR_ID}"></div>
    </div>
    <div class="points-container">
      <div class="house"></div>
      <div class="points">${100}</div>
    </div>
    </div>
    <div class="main-container">
      <div class="question-image-container">
        ${questionImage}
        <h1 class="question">${question}</h1>
     </div>
    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <div class="happy-mario"></div>
    </div>
    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <div class="sad-mario"></div>
  `;


  return element;
};
