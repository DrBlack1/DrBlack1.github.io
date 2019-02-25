let favouriteFilms = ["speed", "upside", "Ants","Jaws", "Up"];
console.log(favouriteFilms);

favouriteFilms.push ("Saw","Scream");
console.log(favouriteFilms);

for (filmindex = 0; filmindex < favouriteFilms.length; filmindex++) {
    console.log(favouriteFilms[filmindex]);
}

//for of expression gives name of films
for(let film of favouriteFilms){
    console.log(film);
}
//for of expression gives position in array of films
for(let film in favouriteFilms){
    console.log(film);
}