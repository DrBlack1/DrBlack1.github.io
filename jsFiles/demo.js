/* Welcome to your third CodeNation session. This Pen gives you an introduction to working with variables and using them in useful ways. It covers working with let, var and const and what functionality you get with each one. */

/*----------------------------------------------------------------------------*/

/* Demo 1: The code snippet below showcases how to create variables using the var, let and const keywords. It also demonstrates how to assign values to a variable using the = assignment statement. It's like getting a box, writing favourite drink on the side of it and putting coffee inside the box. When we want our favourite drink, we call on the variable, or the box, and get it. */


let favouriteDrink = "coffee";
console.log(favouriteDrink)
favouriteDrink = 'Fanta'
console.log(favouriteDrink)



let firstName = "Sergio";
console.log(firstName)

firstName = 'Leroy'
console.log(firstName)


var drinkCost = 3.50;


favouriteDrink = 'coke'

console.log(favouriteDrink)

const favouriteBand = 'Oasis'

console.log(favouriteBand)

favouriteBand = 'lol'
console.log(favouriteBand)
/* Demo 2: The code snippet below showcases how we can overwrite variables using assignment statements once a variable has been created. In this example, we declare i using let i and then log the value to the console. After that, we refer to i again, this time without the let keyboard, store a new value inside it and log that. On the console, you can see 10 and 20 get logged.
*/

/*
let i = 10;
console.log(i)
i = 20;
console.log(i)
*/

// Try creating a variable using const and calling it luckyNumber with a value of 10 inside it. Once you have done that, try to store a new value inside it using an assignment statement on the next line. What happens?

/* Demo 3 : Everyone loves a bit of maths. Or something like that. Below you can see how we can use mathematical operators to store and change values inside variables. */

/*
let thisNumber = 50;

thisNumber *=2;

console.log(thisNumber)

let numberOfLaptops = 1;

numberOfLaptops++; // increments value by 1
console.log(numberOfLaptops)
*/


//Create a variable called niceNumber and assign it a value of 10. Using mathematical operators, try to get the variable to store a value of 13 and log it to the console

/* Demo 1: Welcome to functions. There are a lot of things covered in this lab so follow along carefully and ask for help when you need it! In the snippet below, take a moment to let it sink in how it works. Follow the logic and change it to log both true and false to the console. */


let coffeeIsGrinding = false;
    console.log(coffeeIsGrinding)


const pressGrindBeans = () => {

  if (coffeeIsGrinding ) {

    console.log("Stopping the grind");
    coffeeIsGrinding = false;
  }  else {
    console.log("Grinding is about to begin");
    coffeeIsGrinding = true;
    console.log(coffeeIsGrinding)
  }

  }


pressGrindBeans();



/* Demo 2: Here's an example of a function that includes a parameter. Parameters are responsible for functions being able to work on different data inputs. Edit the snippet below to include two parameters.*/

/*
let orderCount = 0;

const takeOrder = (topping) => {

  console.log(`Pizza with ${topping}`)

  orderCount++;
}

takeOrder("pineapple");

*/
/*
const getSubTotal = (itemCount) => {

 return itemCount *7.5;

}

console.log(getSubTotal(orderCount));
*/


/* Demo 3: Create a function that gives a running total of the bill, with each pizza costing 9 pounds. Every time a pizza is ordered, 9 pounds should be added to a variable and the cost should be printed to the console. Complete the snippet below. */


/*
const getSubTotal = (itemCount) => {

// something goes here

}

console.log(getSubTotal(//something goes here));
*/

/* Demo 4: Add a new function that calculates the total cost, with 10% added as a tip. */

/* Demo 1: Welcome to arrays. These are a wonderful tool that let you build lists and store multiple items of data under a single identifier. More than that, you're able to get control over how data is stored in them, manipulate and change it too. Check out the below examples to see what you can do with arrays. */

/* You can see below how arrays are declared. Just like a variable.... but then we add the square brackets and everything changes. */

/*let coffeeOrder = [‘Sam - Cortado’, ‘Stuart - Cortado’, ‘Dan - Mocha’]; */

/* Add a new item to the array and log the results to the console. */

/* Demo 2: Create a new array containing your favourite songs, about 3 of them, and log it to the console. */


/* Accessing individual parts of an array gives you ultimate flexibility in working with your data. Check out below - what happens? */

/*
console.log(coffeeOrder[2])
*/

/* The square bracket denotes the part of the list you'd like to display. */

/*Demo 3 : Because they're like variables, they can be updated just like them. To do that, we just set the array name down and using square brackets, pick where in the list we'd like our new information to be stored. */

/* coffeeOrder [1] = "Vanilla latte" */

/* The effect of that is...? Log it to see. */

/* Demo 4: We can use properties on arrays just like variables! Try getting the length of our coffeeOrder array and logging it to the console */

/* Demo 5 : Push Pop. Do you remember those sweets? No worries - they're here in JavaScript anyway. You can use push to add items to our list and use pop to remove. See below. */

/* coffeeOrder.push(“Dave - tea”); */ // this will add an item

/* coffeeOrder.pop(); */ // this removes items

/* Demo 6: Create a list of your favourite websites (3 of them) and then add another 2 once you’ve created the list

Then remove the last website. */
/*
var withdrawal = (amount, req) => {

  let pin = 1234;

  if (amount < req && pin === 1234) {

    console.log ("good")
  }

}

const fundCheck = () => {

 var funds = 200;

  return funds;
}

withdrawal(100, fundCheck())
*/

/*

const favClub = () => {
let club = 'City';

if ( club === 'Utd' || club === 'Liverpool') {

  console.log("git.");

}

else if ( club === 'City') {

  console.log ('ee');
}
}

favClub();

*/
