password = "cat"
passlength =(password.length)
if(passlength < "8"){console.log("password too short")}
else{console.log(password) }


num = 19

if (num % 3 === 0 || num % 5 === 0){console.log("the number is divisable by 3 or 5")}
else{console.log("the number is not divisable by 3 or 5")}

number = 15

if (number % 3 === 0 && number % 5===0){console.log("fizz bang")}
else if (number % 5 === 0){console.log("bang")}
else if (number %3 ===0){console.log("fizz")}
else{console.log(number)}



num = "2003"
num1 = num.split("")
num2 = num1.reverse("")
num3 = num2.join("")
if(num === num3){
    console.log("Number is a palindrome")
}else
{console.log("number is not a palindrome")
}




time = 6
placeOfWork = "Manchester"
townOfHome = "Salford"
if (time <= 7 || time > 17){console.log(`${townOfHome}`)}
else if (time >= 8 || time > 16){console.log(`${placeOfWork}`)}
else{console.log("Commuting")}


/*
str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

console.log(str.lastIndexOf("a, e, i ,o, u")) */

/* Challenge 8 */


num1 = 4
num2 = 3
add = num1+num2
multi = num1*num2

if (add% 2 === 0){console.log(add)}
else{console.log(multi)}