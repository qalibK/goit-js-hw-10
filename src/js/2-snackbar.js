import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  delayInput: document.querySelector('#delay'),
  fulfilledInput: document.querySelector('input[value="fulfilled"]'),
  rejectedInput: document.querySelector('input[value="rejected"]'),
  createBtn: document.querySelector('button[type="submit"]'),
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  createNotification().then(onFullfield).catch(onRejected);
});
refs.delayInput.addEventListener('input', userSelectedDelay);

function userSelectedDelay() {
  return parseInt(refs.delayInput.value);
}

const createNotification = () => {
  const time = userSelectedDelay();

  const fullfield = refs.fulfilledInput.checked;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fullfield) {
        resolve();
      } else {
        reject();
      }
    }, time);
  });

  return promise;
};

function onFullfield(result) {
  iziToast.show({ 
    message: `✅ Fulfilled promise in ${userSelectedDelay()}ms`,
    position: 'topRight',
    timeout: 5000,
    backgroundColor: '#78e08f',
    messageColor: '#ffffff',
    close: true,
    closeOnEscape: true,
    progressBarColor: '#ffffff',
    progressBar: true,
    layout: 2,
    maxWidth: 400,
    animateInside: true,
    transitionIn: 'fadeInRight',
    transitionOut: 'fadeOutRight',
  });
}

function onRejected(error) {
  iziToast.show({
    message: `❌ Rejected promise in ${userSelectedDelay()}ms`,
    position: 'topRight',
    timeout: 5000,
    backgroundColor: '#ff6b6b',
    messageColor: '#ffffff',
    close: true,
    closeOnEscape: true,
    progressBarColor: '#ffffff',
    progressBar: true,
    layout: 2,
    maxWidth: 400,
    animateInside: true,
    transitionIn: 'fadeInRight',
    transitionOut: 'fadeOutRight',
  });
}
