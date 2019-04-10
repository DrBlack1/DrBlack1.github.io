const diceImg = document.querySelector('.dice-img');
const rollBtn = document.querySelector('.roll-btn');
const holdBtn = document.querySelector('.hold-btn');
const player1 = document.querySelector('.player1-container');
const player2 = document.querySelector('.player2-container');
const p1CurrentScore = document.querySelector('.p1-cur-score');
const p2CurrentScore = document.querySelector('.p2-cur-score');
const p1Score = document.querySelector('.player1-score');
const p2Score = document.querySelector('.player2-score');
const p1Title = document.querySelector('.player1-title');
const p2Title = document.querySelector('.player2-title');
const reset = document.querySelector('.new-game');
let isPlaying, totalScore, currentScore;

init();

rollBtn.addEventListener('click', () => {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `./img/dice${randomDice}.png`;
    diceImg.style.display = 'block';
    if (isPlaying) {
        // player 1
        if(randomDice !== 1) {
            totalScore[0] += randomDice;
            p1CurrentScore.textContent = totalScore[0];
            // reset score if hold button is pressed during round
            if(true) {
                holdBtn.addEventListener('click', () => {
                    totalScore[0] = 0;
                })
            }
        } else {
            // if a 1 is rolled, reset score and update UI
            totalScore[0] = 0;
            p1Title.textContent = 'You rolled a 1!';
            p1CurrentScore.textContent = 0;
            p1Score.textContent = 0;
            setTimeout(() => {
                p1Title.textContent = 'Player 1';
            }, 1000);
            player2.classList.add('p2-active');
            player1.classList.remove('p1-active');
            // switch player
            isPlaying = false;
        }
    } else {
        // player 2
        if (randomDice !== 1) {
            totalScore[1] += randomDice;
            p2CurrentScore.textContent = totalScore[1];
            // reset score if hold button is pressed during round
            if(true){
                holdBtn.addEventListener('click', () => {
                    totalScore[1] = 0;
                })
            }
        } else {
            // if a 1 is rolled, reset score and update UI
            totalScore[0] = 0;
            p2Title.textContent = 'You rolled a 1!';
            p2CurrentScore.textContent = 0;
            p2Score.textContent = 0;
            setTimeout(() => {
                p2Title.textContent = 'Player 2';
            }, 1000);
            player2.classList.remove('p2-active');
            player1.classList.add('p1-active');
            // switch player
            isPlaying = true;
        }
    }
});

// change player when hold btn is clicked
holdBtn.addEventListener('click', () => {
    if (isPlaying) {
        // Add current score to total score
        currentScore[0] += totalScore[0];
        // update ui
        p1Score.textContent = currentScore[0];
        p1CurrentScore.textContent = 0;
        player2.classList.add('p2-active');
        player1.classList.remove('p1-active');

        if (currentScore[0] >= 10) {
            p1Title.textContent = 'Winner!';
            rollBtn.style.display = 'none';
            holdBtn.style.display = 'none';
            player2.classList.remove('p2-active');
            player1.style.backgroundColor = '#d1c349';
            player2.style.backgroundColor = 'gray';
            player1.classList.remove('p1-active');
        } else {
            isPlaying = !isPlaying;
        }
        // check if player won game
        
    } else if (!isPlaying){
        // Add current score to total score
        currentScore[1] += totalScore[1];

        // update ui
        p2Score.textContent = currentScore[1];
        p2CurrentScore.textContent = 0;

        // check if player won game
        if (currentScore[1] >= 10) {
            p2Title.textContent = 'Winner!';
            rollBtn.style.display = 'none';
            holdBtn.style.display = 'none';
            player2.classList.remove('p2-active');
            player2.style.backgroundColor = '#d1c349';
            player1.style.backgroundColor = 'gray';
            player1.classList.remove('p1-active');
        } else {
            isPlaying = !isPlaying;
        }
    }
})

function init() {
    currentScore = [0, 0];
    totalScore = [0, 0];
    isPlaying = true;
    p1Score.textContent = totalScore[0];
    p1CurrentScore.textContent = currentScore[0]
    p2Score.textContent = totalScore[1];
    p2CurrentScore.textContent = currentScore[1];
    player1.style.backgroundColor = '#d83232';
    player2.style.backgroundColor = '#4067ba';
    p1Title.textContent = 'Player 1';
    p2Title.textContent = 'Player 2';
    rollBtn.style.display = 'block';
    holdBtn.style.display = 'block';
}

reset.addEventListener('click', init);