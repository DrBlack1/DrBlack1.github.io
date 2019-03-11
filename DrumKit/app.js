let boom = new Audio('sounds/boom.wav');
let clap = new Audio('sounds/clap.wav');
let hihat = new Audio('sounds/hihat.wav');
let kick = new Audio('sounds/kick.wav');
let openhat = new Audio('sounds/openhat.wav');
let ride = new Audio('sounds/ride.wav');
let snare = new Audio('sounds/snare.wav');
let tink = new Audio('sounds/tink.wav');
let tom = new Audio('sounds/tom.wav');


// Play drum by keyboard press


document.addEventListener('keydown', (event) => {

    if (event.code == 'KeyA') {
        boom.currentTime = 0;
        boom.play();}

    else if (event.code == 'KeyS') {
        boom.currentTime = 0;
        clap.play();}

    else if (event.code == 'KeyD') {
        boom.currentTime = 0;
        hihat.play();}

    else if (event.code == 'KeyF') {
        boom.currentTime = 0;
        kick.play();}

    else if (event.code == 'KeyG') {
        boom.currentTime = 0;
        openhat.play();}

    else if (event.code == 'KeyH') {
        boom.currentTime = 0;
        ride.play();}

    else if (event.code == 'KeyJ') {
        boom.currentTime = 0;
        snare.play();}

    else if (event.code == 'KeyK') {
        boom.currentTime = 0;
        tink.play();}

    else if (event.code == 'KeyL') {
        boom.currentTime = 0;
        tom.play();}

    }
);


// Play music by mouse click

let boomlocation = document.getElementById('boom')
let claplocation = document.getElementById('clap')
let hihatlocation = document.getElementById('hihat')
let kicklocation = document.getElementById('kick')
let openhatlocation = document.getElementById('openhat')
let ridelocation = document.getElementById('ride')
let snarelocation = document.getElementById('snare')
let tinklocation = document.getElementById('tink')
let tomlocation = document.getElementById('tom')

boomlocation.addEventListener('click', (event) => {
    boom.play();
})

claplocation.addEventListener('click', (event) => {
    clap.play();
})

hihatlocation.addEventListener('click', (event) => {
    hihat.play();
})

kicklocation.addEventListener('click', (event) => {
    kick.play();
})

openhatlocation.addEventListener('click', (event) => {
    openhat.play();
})

ridelocation.addEventListener('click', (event) => {
    ride.play();
})

snarelocation.addEventListener('click', (event) => {
    snare.play();
})

tinklocation.addEventListener('click', (event) => {
    tink.play();
})

tomlocation.addEventListener('click', (event) => {
    tom.play();
})



// Play drum by keyboard press

// Play music by mouse click
