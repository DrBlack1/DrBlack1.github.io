const pendulum = document.querySelector('.pendulum');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');


const tiltClockHandsBySeconds = () => {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  hourHand.style.transform = `rotate(${hour * 30 + (minute * .5 % 30)}deg)`;
  minuteHand.style.transform = `rotate(${minute * 6}deg)`;
  secondHand.style.transform = `rotate(${second * 6}deg)`;
}

setInterval(tiltClockHandsBySeconds, 1000);


let digitalTime = document.getElementById('digital');

function digital() {
  const time = new Date();
  const seconds = time.getSeconds();
  const mins = time.getMinutes();
  const hour = time.getHours() % 24;
  const ampm = hour >= 24 ? 'AM' : 'PM';
  digitalTime.textContent = `${hour}:${mins}:${seconds} ${ampm}`;

}

digital();
setInterval(digital, 1000);