import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  PROGRESS_BAR_ID
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { changeProgress, createProgressBarElement} from '../views/progressBar.js';
import { showFinalPage } from './finalPage.js';
import { showInformation } from '../views/informationViev.js';
import { changeScore } from '../views/progressBar.js';

export const initQuestionPage = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const existingProgressBar = document.getElementById(PROGRESS_BAR_ID); // moved the existing logic that existed in progressBar.js for added readability 
  if (!existingProgressBar) { 
  const progressElement = createProgressBarElement(); // create progress bar elements if they don't already exist
  document.body.prepend(progressElement); // prepend them to the body, outside of userInterface which is cleared and rewritten everytime the next button is clicked
  }

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
 
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

  document
  .getElementById(NEXT_QUESTION_BUTTON_ID)
  .classList.add('button-disabled')
  
  changeProgress(currentQuestion) // Progressbar line

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
     selectedListItem.classList.add('yes');
     quizData.score+=10;
     happyMario.classList.add('hello-happy-mario');
     changeScore(quizData.score)
    } else {
     selectedListItem.classList.add('no');
     sadMario.classList.add('hello-sad-mario');
     
     showCorrectAnswer()
      
     const questionElement = document.querySelector('.question');
     questionElement.style.display = 'none';
     const imageElement = document.querySelector('.question-image');
     if (imageElement) {
      imageElement.style.display = 'none';
    }

     showInformation(quizData.currentQuestionIndex)
    }
    
    document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .removeAttribute('disabled')
    document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .classList.remove('button-disabled')
  
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

const updateQuestionNumInProgressBar = () => {
  const questionNumElement = document.getElementById('questionNum');
  questionNumElement.textContent = quizData.currentQuestionIndex + 1;
}
const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  if (quizData.currentQuestionIndex === quizData.questions.length) {
   showFinalPage()
  } else {
    updateQuestionNumInProgressBar();
    initQuestionPage();
  }
};
