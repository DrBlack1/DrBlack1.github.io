/*
	check whether the shop is open at a particular time
	returns the open / closed status of the shop
*/

function getShopStaus(time, day) {
	if(day === "Sunday" || day === "Saturday") {
	return checkWeekendTimes(time)
	} else {
		return checkWeekdaysTimes(time)
	}
}

function checkWeekendTimes(time) {
	if(time > 8 && time < 18) {
		return "shop is open"
	} else {
		return "shop is closed"
	}
}

function checkWeekdayTimes(time) {
	if(time > 7 && time < 20) {
		return "shop is open"
	} else {
		return "shop is closed"
	}
}

console.log(getShopStatus(12,"Saturday"))

// /*
// 	does a thing	
// */
// function some_Time(Time, d) {
// 	if (d === "Sunday") {
// 	if (Time > 8 && Time < 18) {
// 		return "shop is open"
// 	} else {
// 		return "shop is closed"
// 	}
// 	} else if (d === "Saturday") {
// 	if (Time > 8 && Time < 18) {
// 		return "shop is open"
// 	} else {
// 		return "shop is closed"
// 	}
// 	} else if (Time > 6 && Time < 20) {
// 		return "shop is open"
// 	} else {
// 		return "shop is closed"
// 	}
// }

// console.log(some_Time(14, "Sunday"));