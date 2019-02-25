let film = ["speed", "upside", "Ghostbusters","Jaws"];

for (filmindex = 0; filmindex < film.length; filmindex++) {
    console.log(film[filmindex]);
}

function filmcheck (film) {
    if (film[2] == "Ghostbusters") {
        console.log("Living the good life"); 
    } else { 
    console.log ("You're not good");
    }

    }

        filmcheck(film)