import {PROGRESS_BAR_ID} from '../constants.js'
import { quizData } from '../data.js';

// function progressBar line
export const changeProgress = (progress) => {
  
  progress=(quizData.currentQuestionIndex*10)+10;

    const progressbar = document.getElementById(PROGRESS_BAR_ID)
      progressbar.style.width = `${progress}%`; 

    };

    export const createProgressBarElement = () => {
      const existingProgressBar = document.getElementById(PROGRESS_BAR_ID);
      if (existingProgressBar) {
        // Progress bar already exists, do nothing
        return;
      }
      // create a new div element
      const divBar = document.createElement('div');
      divBar.className = "progress-container";
      divBar.innerHTML = String.raw`<div id="${PROGRESS_BAR_ID}"></div>`;
    
      // append the div element to the body
    
      // I commented out the following line since it was added in the wrong spot. How might 
      // you modify progressBar.js so you don't need to create the div here?
       document.body.appendChild(divBar);
    };