let balance = 500
 
const withdrawCash = (requestedBalance) => {
    if (requestedBalance <= balance) {
        return "Here is your money"
    } else {
        return "Insufficient funds"
    }
  }
 
const checkPin = (pin) => {
    if (pin == 1234) {
      withdrawCash(250);
      return "Correct PIN"
    } else {
      return "Incorrect PIN";
    }
}
 
const cashMachine = (pinNum, withdrawal) => {
    if(checkPin(pinNum) === "Correct PIN" && withdrawCash(withdrawal) === "Here is your money") {
        return `Your Pin is Correct and your remaining balance is ${balance-=withdrawal}`
    } else {
        return 'No Money'
    }
}
 
console.log(cashMachine(1234, 250));