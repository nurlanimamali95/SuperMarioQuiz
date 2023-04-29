import { quizData } from '../data.js';
import { ANSWERS_LIST_ID } from '../constants.js';

export const showInformation = (index) => {
    const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  
    // const questionTexts = quizData.questions.map(question => question.info).join(' ');

    const infoArray = [];
    quizData.questions.forEach((question, i) => {
      if (i === index) {
        infoArray.push(question.info);
      }
    });
      
    const questionImageContainer = document.querySelector('.question-image-container');
    const informationView = document.createElement('div');
    informationView.classList.add('hint');
  
       informationView.innerText = `${infoArray}`;
       questionImageContainer.appendChild(informationView);
  }
