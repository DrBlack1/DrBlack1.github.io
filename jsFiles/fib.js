// let fibonacci = [0, 1];
// for(let i = fibonacci.length; i < 22; i++) {
//     fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
// }
// console.log(fibonacci);


function fib(n){
    if(n < 2) return n;
    
    return fib(n - 1) + fib(n - 2);
  }

  console.log(fib(3))