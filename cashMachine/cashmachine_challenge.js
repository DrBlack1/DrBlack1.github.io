let setPinNumber = 1234;
let deposit = 100;
let balance = 2000;


//first let's check the pin 
const checkPinNumber = (inputtedPinNumber) => {
    if (inputtedPinNumber === 1234) {
        alert("Good, this is the right PIN.")
        ifYourPinIsCorrect()
} else if (inputtedPinNumber != 1234) {
        alert("Sorry mate, wrong PIN.")
    }
};

let inputtedPinNumber = prompt("Please enter your pin here.");
checkPinNumber(inputtedPinNumber);

let ifYourPinIsCorrect = prompt("Do you want to... \n 1. Deposit \n 2.Check balance \n 3.Withdraw")


//first action
const depositDeposit = (desiredDeposit) => {   
    alert("Click OK to deposit.")
};
let desiredDeposit = prompt("Please enter the amount you want to deposit here.")
depositDeposit();



//second action
const checkBalance = () => {
    prompt("You have 2000 on your account. How much would you like to withdraw?")
};
checkBalance();


//third action
const withdrawAmount = (requestedAmount) => {
    if (requestedAmount <= balance) {
    alert("Thank you for your request. Cash will be erogated soon.")
} else if (requestedAmount > balance) {
    alert("You don't have enough money.")
}
};
let requestedAmount = prompt("For security reasons, please re-enter here the amount you wish to withdraw.")
withdrawAmount(requestedAmount);