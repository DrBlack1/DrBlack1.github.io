// 2 variabales - "day" & "alarm"
// key called weekendAlarm - "No alarm needed, so do one"
// key called weekdayAlarm - "Get up at 7am or 11am if you're called Adam"
// if the day is saturday or sunday set the alarm to weekendAlarm
// if the day is a weekedn day set the alarm to weekdayAlarm 
//if day of the week is "leonna" give error

let day = "Wednesday";
let alarm = 7;

const alarms = {

    weekendAlarm: "No alarm needed, so do one",
    weekdayAlarm: "Get up at 7am or 11am if you're called adam",
    error: "invalid format",
};

if((day == "Saturday") || (day == "Sunday")) {
    alarm = alarms.weekendAlarm;
    console.log(alarm)
}else if (day =="Monday","Tuesday","Wednesday","Thursday","Friday") {
        alarm = alarms.weekdayAlarm;
        console.log(alarm)

} else if (day = alarms.error); {
    console.log (alarm)
}