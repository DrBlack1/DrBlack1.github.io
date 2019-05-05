/*
const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount}
    from account number ${accnum}`)
}
cashWithdrawal(300,50449921)
cashWithdrawal(30, 50449921)
cashWithdrawal(200,50449921)

const coffeeOrder = (size, typeOfDrink) => {
    console.log(`Ordering a ${size} ${typeOfDrink}`)
}
coffeeOrder("large", "coffee")
coffeeOrder("small", "latte")
coffeeOrder("medium", "capuchino")



const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
console.log(`The temperature is ` + getFahrenheit(15)+`F`)






const factorial = (n) => {
    if ((n === 0) || (n === 1)) { return 1;
    } else {
    return (n * factorial(n-1));
    } }
    console.log(factorial(33))
}

*/


pin = 1994

const withdrawCash = (inputCode, amount, balance, accnum) => {
if (pin === inputCode && amount <= balance){
    console.log(`Withdrawing ${amount} from account ${accnum}`)}
else
{console.log("Cannot process request")}
}

withdrawCash (1994, 500, 500, 123456789)




/*
Write a function called pinChecker
Parameters: attemptedPin and actualPin
If attemptedPin and actualPin ar ethe same return true
Otherwise return false
*/

const pinChecker = (attemptedPin, actualPin) => {
    if (attemptedPin === actualPin){
        return true 
    } else {
        return false
}
}

const balanceChecker = (withdrawAmount, balance) => {
    if (withdrawAmount <= balance){
        return true;
    }
    else {
        return false; 
    }
}

const cashWithdrawal = (attemptedPin, actualPin, withdrawAmount, balance) => {
    if (pinChecker(attemptedPin, actualPin) == true && balanceChecker(withdrawAmount, balance) == true) {
        console.log(`Withdrawing ${withdrawAmount}`)
    } else if(pinChecker(attemptedPin, actualPin) == false && balanceChecker(withdrawAmount, balance) == true) {
        console.log("incorrect pin")
    }
    else if(pinChecker(attemptedPin, actualPin) == true && balanceChecker(withdrawAmount, balance) == false) {
        console.log("Insufficient funds")}
    else{console.log("Incorrect pin")}
        
    
}

cashWithdrawal(1234, 1234, 50, 100)

