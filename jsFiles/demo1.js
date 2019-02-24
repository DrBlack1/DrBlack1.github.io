function square(number) {
    let squareNumber = number * number
    console.log(squareNumber);
};

square(5);

function factorial(n) {
    if((n === 0) || (n ===1)) {
        return 1;
    } else {
        return(n * factorial(n-1));
    }
}

console.log(factorial(33));



let coffeeIsGrinding = false;
    console.log(coffeeIsGrinding)


const pressGrindBeans = () => {
  
  if (coffeeIsGrinding) {
    console.log("Stopping the grind");
    coffeeIsGrinding = false;
  }  else {
    console.log("Grinding is about to begin");
    coffeeIsGrinding = true;
    console.log(coffeeIsGrinding)
  }  
  }
  
pressGrindBeans();