let n = 0

function increment() {
    console.log(n);
    n++;
    document.getElementById("total").textContent = 
    n;
    console.log(n);
    //return n;
}


function decrement() {
    console.log(n);
    n--;
    document.getElementById("total").textContent  =
    n;
    console.log(n);
    //return n;
}


function multiply() {
    console.log(n)
    n = n*n;
    document.getElementById("total").textContent = 
    n;
    console.log(n)
    //return n;
}

function divide() {
    console.log(n)
    n = n/2;
    document.getElementById("total").textContent =
    n;
    console.log(n)
}







