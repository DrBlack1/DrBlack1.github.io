let foodOrder = ["Bread","Cheese", "milk","biscuits","crisps"];

let additions = foodOrder.unshift ("Snacks","Treats");
console.log(foodOrder);


//let songs = ["Haddaway - What is love", "Ghetts - Black Rose", "Eric Prydz - Opus"]
//console.log(songs) ;

let website = ["Instagram", "Facebook","Twitter", "TSB", "Amazon"];
console.table(website);

//Adds items to the end
let additions = website.push ("Ebay", "LinknIn");
console.table(website);

//Shifts 1st item off table 
website.shift();
console.table(website);

//Removes last item
website.pop();
console.table(website);

//Reverses an array
website.reverse();
console.table(website);