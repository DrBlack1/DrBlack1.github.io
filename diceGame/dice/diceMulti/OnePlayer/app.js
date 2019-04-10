const rollBtn = document.querySelector('.roll');
const newImg = document.querySelector('.dice-img');
const playerScore = document.querySelector('.score1');
const scoreContainer = document.querySelector('.player1-score');
const resetBtn = document.querySelector('.reset');
const announce = document.querySelector('.title');
let scoreArray = [];

function randomImg() {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    newImg.src = `./img/dice${randomDice}.png`;
    add(randomDice);
    checkOne(randomDice);
}

function add(score) {
    scoreArray.push(score);
    var reducedScore = scoreArray.reduce((prev, cur) => {
        // get total of all items in array
        let total = prev + cur;
        if(total >= 20) {
            rollBtn.disabled = true;
            scoreContainer.innerHTML = 'Score: 20';
            announce.innerHTML = 'You win!';
            resetBtn.style.display = 'block';
        } else {
            return total;
        }
    });
    playerScore.innerHTML = reducedScore;
}

function checkOne(num) {
    if(num == 1) {
        rollBtn.disabled = true;
        scoreContainer.innerHTML = 'Score: 0';
        announce.innerHTML = '1 rolled, Player 2 wins!';
        resetBtn.style.display = 'block';
    }
}

rollBtn.addEventListener('click', randomImg);

resetBtn.addEventListener('click', () => {
    window.location.reload();
})