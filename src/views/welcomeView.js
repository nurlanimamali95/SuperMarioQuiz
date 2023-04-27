import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <div class="welcome-page-div">
  <h1 class="welcome-page-heading">WELCOME</h1>
  <label for="name" class="name-label">What should we call you?</label>
  <input type="text" id="name" name="name" required class="name-input">
  </div>
  <div class="button-div">
  <button id="${START_QUIZ_BUTTON_ID}" class="button-style">START</button>
  <img class="toad" src="https://upload.wikimedia.org/wikipedia/en/d/d1/Toad_3D_Land.png" >
  <img class="toad1" src="https://upload.wikimedia.org/wikipedia/en/d/d1/Toad_3D_Land.png" >
  </div>
  `;
  
  return element;
};
