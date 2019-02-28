function time_convert(num)
 { 
  let hours = Math.floor(num / 60);  
  let minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));


function timeConvert(n) {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    console.log(timeConvert(200));


    function getHour(value) {
        if (value == null) { return ""; }
        if (value <= 0) { return ""; }
        let hours = Math.floor(value / 60);
        let minutes = value % 60;
        let hour = (hours > 1) ? hours + " hrs " : hours + " hr ";
        let min = (minutes > 0) ? minutes + " mins" : "";
        return hour + min;
    }