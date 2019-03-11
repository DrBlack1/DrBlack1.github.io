let score = [0,0];
let roundScore = 0;
const winningScore = 20;
let gamePlaying = 1;
let activePlayer = 0;
let lastDice = 0;

document.getElementById('player_0').style.border = '15px dashed #EC2128';

function init() {
    let newGame = document.getElementById('reset')
    newGame.addEventListener('click', function() {
        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying = true;
        document.getElementById('playerScore_0').textContent = '0'; 
        document.getElementById('playerScore_1').textContent = '0';
        document.getElementById('current_Score_0').textContent = '0'; 
        document.getElementById('current_Score_1').textContent = '0';
        document.getElementById("diceImg").src = "";
        document.getElementById('name_0').style.textContent = 'Player 1';
        document.getElementById('name_1').style.textContent = 'Player 2';
        document.getElementById('roll').display = 'block';
        document.getElementById('hold').display = 'block';
        document.getElementById('player_0').style.border = '15px dashed #EC2128';
        document.getElementById('player_1').style.border = 'none';  
    })
}

init();

function click(){
    let roll = document.getElementById('roll');
    roll.addEventListener('click', function() {
        if (gamePlaying) {
            let diceNum = Math.floor(Math.random() * 6) + 1
            document.getElementById("diceImg").src = `./img/dice${diceNum}.png`;
            if(diceNum !== 1) {
                roundScore += diceNum;
                document.querySelector("#current_Score_" + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }
            lastDice = diceNum;
        }
});
};6

click();

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current_Score_0').textContent = '0'; 
    document.getElementById('current_Score_1').textContent = '0';

    if (activePlayer == 0){
        document.getElementById('player_0').style.border = '15px dashed #EC2128'
        document.getElementById('player_1').style.border = 'none'

    } else {
        document.getElementById('player_1').style.border = '15px dashed #7DE28E'
        document.getElementById('player_0').style.border = 'none'
    }
  }

function dice() {
    let hold = document.getElementById('hold');
    hold.addEventListener('click', function(){
        if(gamePlaying) {
            score[activePlayer] += roundScore;
            document.querySelector('.playerScore_' + activePlayer).textContent = score[activePlayer];
            if (score && roundScore >= winningScore) {
                document.querySelector('#name_' + activePlayer).textContent = 'WINNER!';
                document.getElementById('roll').style.display = 'none';
                document.getElementById('hold').style.display = 'none';
                gameplaying = false;
            } else {
                nextPlayer()
            }
        }
    });
}

dice();