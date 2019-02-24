var pin = 1234;
var balance = 300;
var pinAttempt = Number(prompt("Please enter your PIN"));


while(pinAttempt !== pin){
    var pinAttempt = Number(prompt("INCORRECT PIN. Please try again"));
};

var amount = Number(prompt("PIN Correct. How much would you like to withdraw?"));

while(amount > balance){
    var amount = Number(prompt("You do not have enough money in your account. The maximum amount you can withdraw is £" + balance));
};

alert("Transaction Successful! You have withdrawn £" + amount);

let balance = 300

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

console.log(cashMachine(1234, 250))

// Withdraw cash from a cash machine

let accountData = [[123456, 1000, 1234],[654321, 500, 4331]];
const correctPin = 1234;
let availableBalance = 1000;

const checkPin = (inputPin, accountNumber) => {
    let i= 0;
    while (i < accountData.length-1) {
        if (accountData[i][0] == accountNumber) {
            if (inputPin == accountData[i][2]) {
                return true;
            } else {
                return false;
            }
        } else {
            i++;
        }
    }
}

const checkBalance = (requestAmount, accountNumber) => {
    balanceAmount = checkAccountData(accountNumber);
    if (!balanceAmount) {
        return null;
    } else if (requestAmount > balanceAmount) {
        return false;
    } else {
        return true;
    }
}

const checkAccountData = (accountNumber) => {
    let i = 0;
        while (i < accountData.length-1) {
            if (accountData[i][0] == accountNumber) {
                return accountData[i][1];
            } else if (i < accountData.length-1) {
                i++;
            } else {
                return false;
            }
    }
}

const withdrawCash = (pin, amount, accountNumber) => {
    if (checkPin(pin, accountNumber) && checkBalance(amount, accountNumber)) {
        availableBalance -= amount;
        console.log(`You have your money, your new balance is ${availableBalance}`);
    } else if(!checkPin(pin, accountNumber)) {
        console.log(`Your PIN is incorrect, sorry!`);
    } else if(checkBalance(amount, accountNumber) === false) {
        console.log(`Y'all don't have enough money`);
    } else if(checkBalance(amount, accountNumber) === null) {
        console.log(`Account unknown.`)
    }
}

withdrawCash(1234,100,123456);
