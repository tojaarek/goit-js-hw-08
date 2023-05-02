import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector("input[name='email']");
const message = document.querySelector("textarea[name='message']");
const button = document.querySelector("button[type='button']");

const saveData = throttle(() => {
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}, 500);

form.addEventListener('input', saveData);

function restoreData() {
  const stored = localStorage.getItem('feedback-form-state');
  if (!stored) return;
  const dataRestored = JSON.parse(stored);
  email.value = dataRestored.email;
  message.value = dataRestored.message;
}

restoreData();

function handleSubmit(event) {
  event.preventDefault();
  const dataRestored = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(`email: ${dataRestored.email}, message: ${dataRestored.message}`);
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

button.addEventListener('click', event => {
  event.stopPropagation();
  handleSubmit(event);
});
