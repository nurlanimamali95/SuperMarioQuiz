import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.classList.add("welcome-page-div")
  element.innerHTML = String.raw`
      <section class="welcome-section">
        <h1 class="welcome-page-heading">WELCOME</h1>
        <label for="name" class="name-label">What should we call you?</label>
        <input type="text" id="name" name="name" required class="name-input">
      </section>
      <div class="start">
        <button id="${START_QUIZ_BUTTON_ID}" class="button-style-start">START</button>
        <img class="toads toad1" src="./src/images/toad.png">
        <img class="toads toad2" src="./src/images/toadflipped.png" >
      </div>
  `;
  
  return element;
};
