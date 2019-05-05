const numberToString = (n) => {
    return (String(n))
    
}
console.log(numberToString(98572));

/* coverts a number to a string */

const plusOne = (x) =>{
return (x + 1)
}
console.log(plusOne(5))

/* Adds one to the number */

const minusOne = (y) => {
    return(y-1)
}
console.log(minusOne(5))

/* subtracts one from the number */

const sum = (a, b) => {
    return(a + b)
}
console.log(sum(5, 4))

/* adds the values */

const sub = (c, d) => {
    return (c - d)
}
console.log(sub(9,6))

/* subtracts the numbers */

const multi = (e, f) => {
    return (e*f)
}
console.log(multi(4,5))

/* multiplies the number */

const div = (g, h) => {
    return(g/h)
}
console.log(div(20, 5))

/* divides the numbers */

const square = (i) => {
    return(i*i)
}
console.log(square(5))

/* squares the number */

const calculate = (operation,j,k) => {
    console.log(`${j} ${operation} ${k} = ${(j+k)}`)
console.log(calculate(`+`, 5, 5))

/* prints and worksout kindof */

const isGreaterThan = (l,m) => {
    if (l > m){
        return (true)
    }
    else{
        return (false)
    }
}
console.log(isGreaterThan(7,2))

/* checks if l is greater than m */

const isLessThan = (n,o) => {
    if (n < o){
        return (true)
    }
    else{
        return (false)
    }
}
console.log(isLessThan(7,2))

/* checks if n is less than o */

const areEqual = (p,q) => {
    if (p = q){
        return (true)
    }
    else{
        return (false)
    }
}
console.log(areEqual(7,2))

/* checks if values are equal */

const minimum = (r,s) => {
    if (r < s){
        return (r)
    }
    else if (s < r){
        return (s)
    }
    else {
        console.log("equal")
    }
}
console.log(minimum(7,2))

/*finds the minimum value */

const maximum = (t,u) => {
    if (t > u){
        return (t)
    }
    else if (u > t){
        return (u)
    }
    else {
        console.log("equal")
    }
}
console.log(maximum(7,2))

/* finds the maximum value */

const isEven = (v) =>{
    if (v % 2 === 0){
       console.log("even") 
    }
    else{
        console.log("odd")
    }
}

isEven(6)





