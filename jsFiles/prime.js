let primeArray = [];

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function getPrimeLimit() {
    for(i = 2; i < 100; i++) {
        if(isPrime(i)) {
            primeArray.push(i);
        }
    }
    console.table(primeArray.splice(0, 21))
}

getPrimeLimit();