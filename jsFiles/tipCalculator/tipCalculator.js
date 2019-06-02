let tipCalculator = {
    billAmount: 0,
    howIsYourService: 0,
    peopleSharing: 4,
    tip: 0
}


const billAmountFunc = (bill) => {
    if (bill <= 70) {
        alert("Okay, lets pay it!")
    } else if (bill > 70) {
        alert("mmm... was the service good enough?")
    }
};

tipCalculator.billAmount = prompt("How much is the bill?")
billAmountFunc(tipCalculator.billAmount);

// was the service good enough?
const wasServiceGoodFunc = (service) => {
    if (service >= 8) {
        alert('Lets leave a good tip!')
    } else if (service < 5) {
        alert('In this case, we are not going to leave a tip.')
    } else {
        alert('We will think about leaving a tip.')
    }
};

tipCalculator.howIsYourService = prompt("How much would you rate the service from 0 to 10?")
wasServiceGoodFunc(tipCalculator.howIsYourService);



//calculate how much each one needs to pay
let calculatePay = tipCalculator.billAmount / tipCalculator.peopleSharing
const calculateHowMuchEveryonePays = () => {
    alert(`Each 4 of us needs to pay ${calculatePay}!`)
}

calculateHowMuchEveryonePays();


///calculating tip
let calculateTip = (tipCalculator.billAmount / 100 * 15) / tipCalculator.peopleSharing
const calculateHowMuchTip = () => {
    if (tipCalculator.howIsYourService >= 8) {
    alert(`And the tip each one needs to put in is ${calculateTip}.`) 
} else {
    calculateTotalFunc()
}
}

calculateHowMuchTip();


///the total amount that people owe
let calculateTotal = calculatePay + calculateTip
const calculateTotalFunc = () => {
    alert(`And the total for each one of us would be ${calculateTotal}.`)
}

calculateTotalFunc();