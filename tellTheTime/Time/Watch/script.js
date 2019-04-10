const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');

function setDate() {
    // get the date
    const now = new Date();
    // gets seconds
    const seconds = now.getSeconds();
    // divide seconds by 60 then * by 360 to get a degree value
        // add 90 because clock hands start off at hour:45 
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // rotate the second-hand element based on secondsDegree value
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // get minutes
    const mins = now.getMinutes();
    // convert minutes to a degree value
    const minsDegrees = ((mins / 60 ) * 360) + 90;
    // rotate the min-hand element based on minsDegree value
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    // get hours
    const hours = now.getHours();
    // convert hours to a degree value
    const hourDegrees = ((hours / 12) * 360) + 90;
    // rotate the hour-hand element based on hourDegrees value
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
// call function every second
setInterval(setDate, 1000);