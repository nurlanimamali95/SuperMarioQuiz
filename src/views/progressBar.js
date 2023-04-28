import {PROGRESS_BAR_ID} from '../constants.js'
import { quizData } from '../data.js';

// function progressBar line
export const changeProgress = (progress) => {
  progress=(quizData.currentQuestionIndex*10)+10;
  const progressbar = document.getElementById(PROGRESS_BAR_ID)
  progressbar.style.width = `${progress}%`;
};

  export const createProgressBarElement = () => {
    const element = document.createElement('div');
    element.classList.add("status-bar");
    element.innerHTML = String.raw`
      <h3><span id="questionNum">1</span>/10</h3>  
      <div class="progress-container">
        <div id="${PROGRESS_BAR_ID}"></div>
      </div>
      <div class="points-container">
        <div class="house"></div>
        <div class="points">${100}</div>
      </div>
      </div>
      `;
      //document.body.prepend(element);
    return element;
  };