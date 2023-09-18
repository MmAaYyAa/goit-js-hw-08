import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
//console.log(form);
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  const feedback = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
    localStorage.setItem(localStorageKey, JSON.stringify(feedback));
    console.log(feedback)
}

let savedFeedback = localStorage.getItem(localStorageKey);
if (savedFeedback) {
    savedFeedback = JSON.parse(savedFeedback);
    form.elements.email.value = savedFeedback.email;
    form.elements.message.value = savedFeedback.message;
} else {
    form.elements.email.value = '';
    form.elements.message.value = '';
};

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();

    console.log({
        email: form.elements.email.value,
        message: form.elements.message.value,
    });

    form.reset();
  localStorage.removeItem(localStorageKey);
};

 

