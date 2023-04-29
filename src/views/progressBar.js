import {PROGRESS_BAR_ID} from '../constants.js'
import { quizData } from '../data.js';
import { PROGRESS_SCORE } from '../constants.js';

// function progressBar line
export const changeProgress = (progress) => {
  progress=(quizData.currentQuestionIndex*10)+10;
  const progressbar = document.getElementById(PROGRESS_BAR_ID)
  progressbar.style.width = `${progress}%`;
};
export const changeScore = (score) => {
  const progressScore = document.getElementById(PROGRESS_SCORE)
  //change color
  progressScore.style.color = 'red';
  if (score<=30) {
    progressScore.style.color = 'red';
  } else if (quizData.score > 30 && quizData.score <= 70) {
    progressScore.style.color = 'black';
  }
 else {
  progressScore.style.color = 'green';
 }
 
  progressScore.textContent = `${score}`;
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
        <div class="points" id="${PROGRESS_SCORE}">0</div>
      </div>
      </div>`;
      //document.body.prepend(element);
    return element;
  };