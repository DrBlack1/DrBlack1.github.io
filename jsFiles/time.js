function testNum(a) {
    if (a > 0) {
      return "positive";
    } else {
      return "NOT positive";
    }
  }
  
  console.log(testNum(-5));

  function days(i) {
      if(i > 0) {
          return "Weekdays"
      } else {
          return "Weekends"
      }
  }

  console.log(days(-5));

// let timeAlarm = {
// weekendAlarm: 'no time needed',
// weekdaysAlarm: 'get up between 7am or 11am'
// console.log(timeAlarm),;

// day = "sunday";
// if(day == "saturday" || day == "sunday"){
//     console.log("lol")
// } else {
//     console.log("p")
// };

// isItWeekEnd = function() {
//     var d = new Date();
//     var dateValue = d.getDay(); 
//     if(dateValue == 0 || dateValue == 6)
//         return true;
//     else 
//         return false;  
// }

// var d = new Date();
// var weekday = new Array(7);
// weekday[0] =  "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];

// function days() {
//     let dayOfWeek = 5;//friday
//     let day = new Day(2);
//     let day = day.getDay() - dayOfWeek;
//     if (day > 0) {
//         day.setday(day.getDay() + 6);
//     }
//     else if (day < 0) {
//         day.setDay(day.getDay() + ((-1) * day))
//     }
//     console.log(day);
// }

// let weekendAlarm = 1;
// let weekdaysAlarm = 2;


// function weekendAlarm(time) {
// console.log("show hours from 7am to 11am")
// } if (hours > 0) {
//     hours = hours * -1;
// } else if (hours == 7) {
//     hours = 11;
// } else {
//     hours = hours;
// };

// bio: function() {
//     alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//   },
//   greeting: function() {
//     alert('Hi! I\'m ' + this.name[0] + '.');
//   }