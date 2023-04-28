import { quizData } from '../data.js';
import { ANSWERS_LIST_ID } from '../constants.js';

export const showInformation = (ttt) => {
    const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  
    // const questionTexts = quizData.questions.map(question => question.info).join(' ');

    const infoArray = quizData.questions.map((question) => {
        if (ttt===question.text) {
        return question.info;}
      }).join(' ');
      
   
    const informationView = document.createElement('div');
  
       informationView.innerText = `${infoArray}`;
       answersListElement.appendChild(informationView);
  }
