
//3 variables 1 string, 1 number, 1 boolean done 
//array 4 items - add something to the end done 
//loop to cycle through the array
//function to withdraw an amount with balance remaining showing 


let balance = 1000
let accountName = ["Patto", "Bob", "Jerry"]
let pinNumber = 1234
let openComment = "Hello"

console.log(openComment)

let additions = accountName.push ("Terry", "Top")
console.log(accountName);

for (Names = 0; Names < accountName.length; Names++) {
    console.log(accountName[Names]);
}

;

const withdrawal = ( Pin, amount ) => {
    if ((Pin == pinNumber) && (amount <= balance)) {
        console.log(`Successfully withdraw of ${amount}, Reamining balance is ${balance-=amount}`)
    }
    console.log()
}


withdrawal(1234, 400)


// check pin
// check balance
// return "something" if pin is correct
// if pin incorrect return "incorrect pin"
// if balance was insufficent then "return insufficent funds"
// if all smashing -> GO GO GO

let pinNumber = 1234 
let balance = 200

const cashWithdrawal = (pin, amount) => {
    if (pin === pinNumber && amount <= balance) {

        console.log( `Succesfully Withdraw amount: ${amount} Remaining balance ${balance-=amount}`)
    }   else if  (pin === pinNumber && amount >=balance) {
        console.log(`Insufficient funds: Amount requested ${amount} Remaining balance ${balance}`)
    }   else 
        console.log("Wrong Pin")
}


cashWithdrawal (1234,50)
cashWithdrawal (1234,100) 
cashWithdrawal (1233,300)
cashWithdrawal (1234,300)