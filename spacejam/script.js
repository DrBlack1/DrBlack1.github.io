let paragraph = document.querySelector('.change-me');

console.log('the paragraph', paragraph)

paragraph.textContent = "I like this!";

let div1 = document.getElementById('div1');
let unicycle = document.getElementById('unicycle');
let paragraphs = document.getElementById('p');
let queryAll = document.getElementById('unicycle');
let queryUnicycle = document.getElementById('unicycle, #div2');
let text = '<h1>Hello World</h1>';

queryUnicycle.innerHTML = text;

// for (i = 0; i < queryAll.clientHeight; ++i) {
//     queryAll[i].innerHTML = text;
// }

let body = document.querySelector('body');
body.style.bachground = 'yellow';

let body = document.querySelector('body');
let isYellow = false;
function switchColor(){
    if(isYellow) {
        body.style.background = "black";
    } else {
        body.style.background = 'yellow';
    }
    isYellow = !isYellow;
}
setInterval(switchColor, 2000);



function myMove() {
    let elem = document.getElementById("myAnimation");
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

let td = document.getElementById('td');
td.animate([
    {transform: 'scale(1)', background: 'red', opacity: 1, offset: 0},
    {transform: 'scale(.5), rotate(270deg)', background: 'blue', opacity: .5, offset: .2},
    {transform: 'scale(1), rotate(0deg)', background: 'red', opacity: 1, offset: 1},
]), {
    duration: 2000, //milliseconds
    easing: 'linear', //'inner' a bezier curve, etc.
    delay: 10, //milliseconds
    iterations: Infinity, //or a number
    direction: 'normal', //'normal', 'reverse', etc,
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
};