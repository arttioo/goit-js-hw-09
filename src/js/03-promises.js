import Notiflix from 'notiflix';

const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const a = Number(firstDelay.value);
  const b = Number(delayStep.value);
  const c = Number(amount.value);

  for (let i = 0; i <= c; i += 1) {
    const delayResult = a + b * (i - 1);

    createPromise(i, delayResult)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
