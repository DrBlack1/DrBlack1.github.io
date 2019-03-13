// Result 
// Game Over
// Game Over Alert 
// Current Score 

function diceResult() {
    const random = Math.floor(Math.random()*6)+1;
    return random;
}

function gameOver () {
    currentScore=0;
}

function win() {
    textContent = "GAME OVER!!!!"
}


module.exports = {diceResult, gameOver, win}