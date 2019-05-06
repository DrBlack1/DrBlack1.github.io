
const Character = require("./classes/character");
const Player = require("./classes/player");

// new Characters

let mario = new Character('mario', 'cape')
let marioMoves = ['Jump', 'Pipe-clean']
mario.pickMoves(marioMoves)


let yoshi = new Character('yoshi', 'fireball');
let yoshiMoves = ['dodge', 'kick']
yoshi.pickMoves(yoshiMoves);


// new players 
let elliot = new Player("Elliot");
elliot.pickCharacter(mario)


let kas = new Player('Kas', yoshi);
kas.pickCharacter(yoshi)


// console.log(elliot._pick[0]._moves)
// console.log(kas)
// console.log(kas._pick[0]._moves)

let elliot = new Player("elliot", characterArr);

const moveOne = document.querySelector('.move1');
const moveTwo = document.querySelector('.move2');
const moveThree = document.querySelector('.move3');
const moveFour = document.querySelector('.move4');

let turn = true;
let playerOneHealth = 0;
let playerTwoHealth = 0;
let playerDamage;
let character;

let health1 = document.querySelector('.healthBarOne');
let health2 = document.querySelector('.healthBarTwo');

function attackDamage(min, max) {
  return Math.floor(Math.random() * (max-min) + min)
}

moveOne.addEventListener("click", attackOne = () => {
  let playerDamage = attackDamage(10, 15);
    if (turn) {
      playerTwoHealth += playerDamage;
      health2.style.width = (playerTwoHealth + '%');
    } else if (turn === false) {
      playerOneHealth += playerDamage;
      health1.style.width = playerOneHealth; 
    }
  });





// module.exports = battle;

