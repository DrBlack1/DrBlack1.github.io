const multi =(num1, num2) => {
return(num1*num2)
}
let result = multi(4,4)
console.log(result)

/* Arrays */

array =[[1, 2, 3], [0, 2, 4] , [1, 3, 5]]
console.log(array[0])
console.log(array[1][2])
array [1][1] = 7
console.log(array)

/* logs the array [1,2,3];
logs the number in position 2 for the first array;
changes the number in position 1 from the first array to 7;
prints the new array */

let faveBands = ["Queen","David Bowie","Duran Duran"]
console.log(faveBands)
console.log(faveBands[0])
faveBands[2]= "Hall & Oates"
/* Replaces the 3rd item in the Array */
faveBands.push("Foo Fighters")
/* Adds an element to the Array */
console.log(faveBands)
console.log(faveBands.length)
faveBands.pop()
/* Removes last item from the Array */
console.log(faveBands)
faveBands.shift()
/* Removes the first element */
console.log(faveBands)
faveBands.unshift("Queen")
/* Adds to the start of the Array */
console.log(faveBands)
console.log(faveBands.slice(2))
/*removes everything before position 2, if (0,2) would keep everything between the numbers */

drinks = ["water", "Vimto", "Coke","Fanta","Carling"]
drinks.splice(1,3) 
/* Keeps everything before position 1 and after position 3, if (3) would keep everything before position 3*/
console.log(drinks)


faveWebsites = ["Reddit","Facebook","Twitter"]
console.log(faveWebsites)
faveWebsites.push("SkySportsNews","Miniclip")
console.log(faveWebsites)
faveWebsites.pop()
console.log(faveWebsites)
