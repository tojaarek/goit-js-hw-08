import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector("input[name='email']");
const message = document.querySelector("textarea[name='message']");
const button = document.querySelector("button[type='submit']");

const saveData = throttle(() => {
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

form.addEventListener('input', saveData);

function restoreData() {
  const dataRestored = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (dataRestored) {
    email.value = dataRestored.email;
    message.value = dataRestored.message;
  }
}

restoreData();

function handleSubmit(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
}

button.addEventListener('submit', handleSubmit);
