import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


const startButton = document.querySelector('button[data-start]');
const input = document.querySelector('input#datetime-picker');
const displayDays = document.querySelector('.value[data-days]');
const displayHours = document.querySelector('.value[data-hours]');
const displayMinutes = document.querySelector('.value[data-minutes]');
const displaySeconds = document.querySelector('.value[data-seconds]');
const currentTime = Date.now();
const MILISECONDS_UNIT = 1000;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(new Date(selectedDates).getTime());
    // console.log(currentTime);
    if (new Date(selectedDates).getTime() <= currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
      disableButtons(true);
    } else {
      disableButtons(false);
    }
    console.log(selectedDates[0]);
  },
};

flatpickr(input, options);

startButton.addEventListener('click', onBtnStart);

function onBtnStart(evt) {
  timer.start();
  // disableButtons(true);
}
function disableButtons(status) {
  startButton.disabled = status;
}

const timer = {
  isActive: false,
  intervalId: null,
  start() {
    if (this.isActive) {
      return;
    }
    const startDate = new Date(input.value);
    const startTime = startDate.getTime();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const time = convertMs(deltaTime);
      updClockface(time);
      if (deltaTime < MILISECONDS_UNIT) {
        clearInterval(this.intervalId);
      }
    }, MILISECONDS_UNIT);
  },
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = MILISECONDS_UNIT;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updClockface({ days, hours, minutes, seconds }) {
  displayDays.textContent = `${days}`;
  displayHours.textContent = `${hours}`;
  displayMinutes.textContent = `${minutes}`;
  displaySeconds.textContent = `${seconds}`;
}
