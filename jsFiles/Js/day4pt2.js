/*
for (i = 9; i >= 0; i--) {
    console.log(i);
}

let favouriteBands = ["Queen", "David Bowie","Duran Duran", "Hall & Oates"]
for (bandIndex = 0; bandIndex < favouriteBands.length; bandIndex++){
    console.log(favouriteBands[bandIndex]);
}

*/
let faveFilms = ["ConAir","SW","Bond","GhostBusters"]
console.log(faveFilms)
faveFilms.push("Highlander","LOTR")
console.log(faveFilms)
for (filmIndex = 0; filmIndex < faveFilms.length; filmIndex++){
    console.log(faveFilms[filmIndex])
}
/*
Make the array take one parameter which is an array of films and check that
*/


const filmcheck =(film) => {
    if (film[2] === "GhostBusters")
    console.log("Yay its GhostBusters")
    else (console.log("Boo, we wanted GhostBusters"))
}
filmcheck(faveFilms)





const sum = (value) => {
       total = 0;
      for (i = 0; i < value; i++)
    if (i % 3 === 0 || i % 5 === 0)
    {
        total += i
    }
return total
}
console.log(sum(1000))



