const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

buttonStart.addEventListener('click', onButtonStart);
buttonStop.addEventListener('click', onButtonStop);

function onButtonStart() {
  timerId = setInterval(setBodyColor, 1000);
  disableButtons(true);
}

function onButtonStop() {
  clearInterval(timerId);
  disableButtons(false);
}
function disableButtons(status) {
  buttonStart.disabled = status;
  buttonStop.disabled = !status;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setBodyColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
}
