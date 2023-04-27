import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.classList.add("welcome-page-div")
  element.innerHTML = String.raw`
    <h1 class="welcome-page-heading">WELCOME</h1>
    <label for="name" class="name-label">What should we call you?</label>
    <input type="text" id="name" name="name" required class="name-input">
    <button id="${START_QUIZ_BUTTON_ID}" class="button-style">START</button>
    <img class="toad" src="./src/images/toad.png">
    <img class="toad1" src="./src/images/toad.png" >
  `;
  
  return element;
};
