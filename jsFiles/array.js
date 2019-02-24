let freshFruits = [`orange`, `strawberry`,`blakcurrent`, `mango`, `kiwi`];

freshFruits.push("banana", "apple");
console.table(freshFruits);

for(let a = 0; a < freshFruits.length; a++){
    console.log(freshFruits[a]);
}


let favouriteSongs = [`black tide - that fire`, `georgie florida lane - cruise`, `elena sigma - 115`];
console.table(favouriteSongs);
console.table(favouriteSongs[2]);
console.table(favouriteSongs.length);


let favouriteFlims = ["star wars", "the prestige", "the hobbit", "avenges", "x-men"];

favouriteFlims.push("dark knight", "hulk");
console.table(favouriteFlims);

for(let i = 0; i < favouriteFlims.length; i++){
    console.log(favouriteFlims[i]);
}

let favFilms = ["star wars", "the prestige", "the hobbit", "avenges", "x-men"];

favFilms.push("dark knight", "hulk");
console.table(favFilms);

for(let film in favFilms){
    console.log(film);
}

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));


let web1 = ['linkedin', 'udemy', 'youtube'];
let web2 = ['twitter', 'mdn'];

console.log(web1.concat(web2));


var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());

plants.pop();
console.log(plants);


let veg = ['carrot', 'spinach', 'peas', 'sweetcorn'];

console.log(veg.pop());

veg.pop();
console.log(veg);


var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');

console.log(months);

months.splice(4, 1, 'May');

console.log(months);

let days = ['mon', 'wed', 'thur', 'sat', 'sun'];
days.splice(1, 0, 'tue');

console.log(days);

days.splice(4, 1, 'fri');

console.log(days);