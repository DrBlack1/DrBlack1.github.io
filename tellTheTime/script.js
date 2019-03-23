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


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var time = document.getElementById('time');
  m = checkTime(m);
  s = checkTime(s);
  time.innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

startTime();

function runClock(){
  var hourHand = document.getElementById("hours");
  var minuteHand = document.getElementById("minutes");
  var secondHand = document.getElementById("seconds");
  var today = new Date();
  var hour = today.getHours() % 12;
  var minute = today.getMinutes();
  var second = today.getSeconds();
  
  var hourRotation = (30 * hour) + minute * 0.5;
  var minuteRotation = 6 * minute;
  var secondRotation = 6 * second;

  if (secondRotation == 0) {
      secondHand.transition = 'none';
      secondHand.transform = "rotate(0deg)";
  } else {
      secondHand.transform = "rotate(" + secondRotation + "deg)";
      secondHand.transition = "transform 0.25s cubic-bezier(.4,2.08,.55,.44)";
  }   

  if (minuteRotation == 0) {
      minuteHand.transition = 'none';
      minuteHand.transform = "rotate(0deg)";
  } else {
      minuteHand.transform = "rotate(" + minuteRotation + "deg)";
      minuteHand.transition = "transform 0.3s cubic-bezier(.4,2.08,.55,.44)";
  }
  
  hourHand.transform = "rotate(" + hourRotation + "deg)";

  requestAnimationFrame(runClock);
}

runClock();