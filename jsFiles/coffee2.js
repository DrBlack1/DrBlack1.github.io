//function 
//console.log "try pressing chocolate and then expresso on the coffee machine"
// if condition "goodtaste" is true && enought money is in account 
//console.log "you're in for a good time" 
//function in a function 
//print balance

let balance = 10
let drink = ["goodtaste", "tea"];
let price = [5, 3]

function coffee (drink, cost) {

    console.log("try pressing chocolate and then expresso on the coffee machine"); 
    
    if (drink == "goodtaste" && cost <= balance) {
        console.log("You're in for a good time") 
    } else {
         console.log("Insufficient funds");
    }
console.log(`drink price is ${price[0]}`)
}

coffee ("goodtaste", 5)

//function checkBalance (balance, price) {

//    console.log(`current balance is ${balance-=price}`);
//}