const FEEDBACK_FORM_STATE = 'feedback-form-state';
const input = document.querySelector('.feedback-form');
const throttle = require('lodash.throttle');

try {
  const savedInputValue = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE));

  if (savedInputValue) {
    input.email.value = savedInputValue.email;
    input.message.value = savedInputValue.message;
  }
} catch {
  console.error('Set state error: ', error.message);
}

input.addEventListener('input', throttle(handlerInput, 500));

/**
 * Зберігає у локальне сховище об'єкт з поточними значеннями полів форми
 */
function handlerInput() {
  const inputValue = { email: input.email.value, message: input.message.value };

  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(inputValue));
}

input.addEventListener('submit', handlerSubmit);

/**
 * Виводить у консоль об'єкт з поточними значеннями полів форми та очищує сховище і поля форми
 * @param {SubmitEvent} evt
 */
function handlerSubmit(evt) {
  evt.preventDefault();

if(!input.email.value || !input.message.value){
    alert('Fill in the input fields!');
    return;
}

  const submittedValue = {
    email: input.email.value,
    message: input.message.value,
  };

  console.log(submittedValue);

  input.reset();

  removeItemLocalStorage(FEEDBACK_FORM_STATE);
}

/**
 * Видаляє з локального сховища запис з ключем key
 * @param {String} key
 */
function removeItemLocalStorage(key) {
  localStorage.removeItem(key);
}
