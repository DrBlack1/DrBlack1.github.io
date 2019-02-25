//sets a countdown to the date we want to finish on 
let countDownDate = new Date("Dec 25, 2019 00:00:00").getTime();

// runs the function, gets the current time and takes it away from the countdownDate
    let run = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

//works out the days/hours/minutes/seconds     

    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24)) /(1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((distance % (1000*60)) /1000);

}


// calls the function every second
,1000);

console.log(countDownDate);


// incomplete, needs finishing  