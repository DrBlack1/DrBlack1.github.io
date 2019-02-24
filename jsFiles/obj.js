let price = 5;

function order(type, money, taste) {
    console.log('Try pressing chocolate and then espresso on the coffee machine.');
    
    if ((type == 'espresso') && (money <= price) && (taste == 'goodtaste')) {
        console.log('You have ordered espresso, you\'re in for a good time.');
    } else if ((type == 'chocolate') && (money <= price) && (taste='goodtaste')) {
        console.log('You have ordered chocolate, you\'re in for a good time.');
    } else if (money > price) {
        console.log('You don\'t have enough money');
    } else {
        console.log('Error, try again');
    }
}

order('chocolate', 2, 'goodtaste');


let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let randomDay = Math.floor(Math.random() * days.length);
let day = days[randomDay];
let alarm  = '';

let alarmClock = {
    weekendAlarm: `${day} - No alarm needed so do one.`,
    weekdayAlarm: `${day} - Get up at 7am, or 11am if you\'re called Adam.`
}


if ((day == 'Saturday') || (day == 'Sunday')) {
    alarm = alarmClock.weekendAlarm;
    console.log(alarm);
} else {
    alarm = alarmClock.weekdayAlarm;
    console.log(alarm);
}


let person = {
    name: 'Luke',
    age: 22,
    sayHi() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

person.sayHi();


let rabbit = {
    name: 'Sherlock',
    colour: 'Black and White',
    ears: 'uppy',
    bunHop() {
        console.log(`${this.name} is hopping.`);
    },
    bunChew() {
        console.log(`${this.name} is chewing.`);
    }
}

rabbit.bunChew();
rabbit.bunHop();