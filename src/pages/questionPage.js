import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  PROGRESS_BAR_ID
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { changeProgress } from '../views/progressBar.js';
import { showFinalPage } from './finalPage.js';
import { showInformation } from '../views/informationViev.js';

const createProgressBarElement = () => {
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
  // document.body.appendChild(divBar);
};

export const initQuestionPage = () => {

  createProgressBarElement();
  
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
 
  const questionElement = createQuestionElement(currentQuestion.text, quizData.currentQuestionIndex + 1, currentQuestion.image);


  correctAnswerKey = currentQuestion.correct;
  

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    answerElement.setAttribute('data-key', key);
    answerElement.addEventListener('click', selectAnswer)
  }

// this code disabled and active button
  document
  .getElementById(NEXT_QUESTION_BUTTON_ID)
  .setAttribute('disabled', true)

  
  // const currentBar = changeProgress((quizData.currentQuestionIndex * 10)+10); // Progressbar line
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
  
  // Flag for not selecting two items and also counting the score
  quizData.answerSelected = false;
};

let correctAnswerKey;

const selectAnswer = (event) => {
  if (quizData.answerSelected) {
    return;
  }
  
    const selectedListItem = event.target;
    const userAnswer = selectedListItem.dataset.key;
    const happyMario = document.querySelector('.happy-mario')
    const sadMario = document.querySelector('.sad-mario')

    quizData.answerSelected = true;

    if (userAnswer === correctAnswerKey) {
     selectedListItem.classList.add('yes')
     quizData.score+=10
     happyMario.classList.add('hello-happy-mario')
    } else {
     selectedListItem.classList.add('no')
     sadMario.classList.add('hello-sad-mario')
     
     showCorrectAnswer()

     const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

     showInformation(currentQuestion.text)
    }
    
    document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .removeAttribute('disabled')
  
};

const showCorrectAnswer = () => {
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  const answerElements = answersListElement.querySelectorAll('li');

  answerElements.forEach((answerElement) => {
    const answerKey = answerElement.dataset.key;

    if (answerKey === correctAnswerKey) {
      answerElement.classList.add('yes');
    }
  });
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  if (quizData.currentQuestionIndex === quizData.questions.length) {
   showFinalPage()
  } else {
    initQuestionPage();
  }
};
