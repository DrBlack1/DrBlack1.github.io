
const rollBtn = document.querySelector('.roll');
const newImg = document.querySelector('.dice-img');
const playerScore = document.querySelector('.score1');
const scoreContainer = document.querySelector('.player1-score');
const resetBtn = document.querySelector('.reset');
const announce = document.querySelector('.title');
let scoreArray = [];

function start() {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    newImg.src = `./img/dice${randomDice}.png`;
    checkOne(randomDice);
    add(randomDice);
}

function checkOne(num) {
    if(num == 1) {
        rollBtn.disabled = true;
        scoreContainer.innerHTML = 'Score: 0';
        announce.innerHTML = '1 rolled, Player 2 wins!';
        resetBtn.style.display = 'block';
    }
}

function add(score) {
    scoreArray.push(score);
    var reducedScore = scoreArray.reduce((prev, cur) => {
        // get total of all items in array
        let total = prev + cur;
        if(total >= 20) {
            rollBtn.disabled = true;
            scoreContainer.innerHTML = 'Score: 20';
            announce.innerHTML = 'Player 1 wins!';
            resetBtn.style.display = 'block';
        } else {
            return total;
        }
    });
    playerScore.innerHTML = reducedScore;
}

rollBtn.addEventListener('click', start);


// Player 2
const rollBtn2 = document.querySelector('.roll2');
const newImg2 = document.querySelector('.dice-img2');
const playerScore2 = document.querySelector('.score2');
const scoreContainer2 = document.querySelector('.player2-score');
let scoreArray2 = [];

function start2() {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    newImg2.src = `./img/dice${randomDice}.png`;
    checkOne2(randomDice);
    add2(randomDice);
}

function checkOne2(num) {
    if(num == 1) {
        rollBtn2.disabled = true;
        scoreContainer2.innerHTML = 'Score: 0';
        announce.innerHTML = '1 rolled, Player 1 wins!';
        resetBtn.style.display = 'block';
    }
}

function add2(score) {
    scoreArray2.push(score);
    var reducedScore = scoreArray2.reduce((prev, cur) => {
        // get total of all items in array
        let total = prev + cur;
        if(total >= 20) {
            rollBtn2.disabled = true;
            scoreContainer2.innerHTML = 'Score: 20';
            announce.innerHTML = 'Player 2 wins!';
            resetBtn.style.display = 'block';
        } else {
            return total;
        }
    });
    playerScore2.innerHTML = reducedScore;
}

rollBtn2.addEventListener('click', start2);


resetBtn.addEventListener('click', () => {
    window.location.reload();
})