function order(topping) {
    console.log(`You have added ${topping} to your sandwhich.`);
}

order('cheese');


let names = ['Patt', 'Bob', 'Sophie'];
names.unshift('Sarah');
console.table(names);


for (i = 0; i < 6; i++) {
    console.log(Math.floor(Math.random() * 50) + 1);
}

console.log('---');

for(i = 9; i >= 0; i--) {
    console.log(i);
}


let films = ['Interstellar', 'Toy Story', 'Toy Story 2', 'Toy Story 3', 'Cars'];
films.push('Cars 2', 'Cars 3');

for(filmIndex = 0; filmIndex < films.length; filmIndex++){
    console.log(films[filmIndex]);
}

console.log('////////////////');

for(film in films) {
    console.log(film);
}

let films = ['Cars', 'Cars 2', 'Ghostbusters', 'Cars 3'];

for (film of films) {
    console.log(film);
}

const filmCheck = (array) => {
    if (array[2] == 'Ghostbusters') {
        console.log('You\'re living the good life!');
    } else {
        console.log('You\'re not good, not good at all');
    }
}

filmCheck(films);