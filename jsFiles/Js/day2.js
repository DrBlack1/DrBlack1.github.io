/*
var str = 'all around the world'
var res = str.slice(7, 8);
console.log(res.toUpperCase());

console.log('all around the world'.toUpperCase().charAt(7));
*/

/*
\let name = 'Liam'
let age = 25
let likeDan = true 
console.log(age);
*/

/*
let num = 25
num ++
num += 4
console.log(num)
*/
/*
let favouriteDrink = "Vimto"
console.log (`My favourie drink is ${favouriteDrink}`)

let name = "Liam"
let age  = 25 
let favouriteColour = 'purple'
console.log(`My name is ${name}, i am ${age} years old and my favourite colour is ${favouriteColour}`)
*/

let space1 = "X"
let space2 = "O"
let space3 = ""
let space4 = "X"
let space5 = "X"
let space6 = ""
let space7 = "O"
let space8 = ""
let space9 = ""

console.log("   |     |   ")
console.log(`${space1}  |  ${space2}  |  ${space3}`)
console.log("   |     |   ")
console.log("- - - - - - -")
console.log("   |     |   ")
console.log(`${space4}  |  ${space5}  |  ${space6}`)
console.log("   |     |   ")
console.log("- - - - - - -")
console.log("   |     |   ")
console.log(`${space7}  |  ${space8}   |  ${space9}`)
console.log("   |     |   ")



let lowerBound = 2
let upperBound = 7
let diff = upperBound - lowerBound
let ans = Math.floor((Math.random()*diff+1))+lowerBound

console.log(`i would like ${ans}  drinks`)

console.log("hello".repeat(5))

for(var counter = 1; counter<=3; counter++)
console.log("hello")

let str = "operfljbigohlrdmnjcvgikfkglfdkfgjhbmvflkgmlvbhilkmwdasfmdnskdjredowlsdpflfkfgjfejidfugyhfregw"
console.log(str.search("hi"))
console.log(str.substring(32, 41))


age = "20"
if (age > 17 ){console.log("yes i can serve you")}
else{console.log("you aren't old enough")}