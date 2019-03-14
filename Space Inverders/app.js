window.onload = function () {
    //canvas content
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //generates
    let max = 100;//maximum stars
    let stars = [];

    //loops with i 
    for (let i = 0; i < max; i++) {
        stars.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 5 + 2,//min 2px & max 7px
            d: Math.random() + 1,//density of stars
        })
    }

    //draw stars to canvas
    function drawStars() {
        ctx.clearRect(0, 0, W, H);
        ctx.fillstyle = "white";
        ctx.beginPath();
        for (let i = 0; i < max; i++) {
            let f = stars[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        }
        ctx.fill();
        moveStars();
    }

    //animate stars
    let angle = 0;

    function moveStars() {
        angle += 0.01;
        for (let i = 0; i < max; i++) {
            let f = stars[i];
            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) + 2;
            if (f.y > H) {
                stars[i] = { x: Math.random() * W, y: 0, r: f.r, d: f.d };
            }
        }
    }
    setInterval(drawStars, 25);
}

//field
let container = document.getElementById('container');
let field = new Field();
field.initialise(container);
field.start();

function randomise() {
    field.stop();
    field.stars = Math.random() * 1000 + 50;
    field.stand = Math.random() * 30 + 5;
    field.stand = Math.random() * 50 + field.stand;
    field.start();
}

let x = canvas.width / 2; //center
let bulletSpeed = -5; // ship bullets
let bulletShot = -5 // ememy bullets

//lifes & scores
let health = 100;
let life = 3;
let score = 0;

//ship width & height
let shipWidth = 50;
let shipHeight = 50;
let shipX = (canvas.width - shipWidth) / 2;
let shipY = canvas.height - (shipHeight + 70);
let shipTop = (canvas.height - (shipHeight + 20));
let imgShip = new Image();
imgShip.src = "./img/ship.svg";

//ememy columns
let vaderColumnCount = 11;
let vaderRowCount = 5;
let Width = 60;
let vaderHeight = 60;
let vaderPadding = 7;
let vaderOffSetTop = 70;
let vaderOffSetLeft = 5;
let deletedRows = 0;
let deletedRightColumns = 0;
let deletedLeftColumns = 0;
let vaderWaves = 10;

//enemy imges
let vader1 = new Image();
let vader2 = new Image();
let vader3 = new Image();
vader1.src = './img/vaders1.png'
vader2.src = './img/vaders2.png'
vader3.src = './img/vaders3.png'

let vader = [];
let lives =[];
let pause = false;

for (let c = 0; c < vaderColumnCount; c++) {
    vader[c] = [];
    for (let r = 0; r < vaderRowCount; r++) {
        vader[c][r] = {
            x: 0,
            y: 0,
            status: 1
        };
    }
}

//menu
let rightPressed = false;
let leftPressed = false;
let enterPressed = false;
let gameInProgress = false;
let aliensDefeated = false;
let bossDefeated = false;


function keyDownHandler(e) {
    e.preventDefault()
if (e.keyCode == 39) {
   rightPressed = true;
} else if (e.keyCode == 37) {
   leftPressed = true;
} else if (e.keyCode == 13){
   enterPressed = true;
}
}

function keyUpHandler(e) {
    e.preventDefault();
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    } else if (e.keyCode == 13) {
        enterPressed = false;
    }
}





// (function() {
// let a = document.createElement('script'); a.type = 'text/javascript'; a.async = true;
// a.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
// let s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(a, s);
// })();


// function Field() {
// 	this.fps = 30;
// 	this.canvas = null;
// 	this.width = 0;
// 	this.height = 0;
// 	this.minVelocity = 15;
// 	this.maxVelocity = 30;
// 	this.stars = 100;
// 	this.intervalId = 0;
// }

// Field.prototype.initialise = function(div) {
// 	let self = this;

// 	this.containerDiv = div;
// 	self.width = window.innerWidth;
// 	self.height = window.innerHeight;

// 	window.addEventListener('resize', function resize(event) {
// 		self.width = window.innerWidth;
// 		self.height = window.innerHeight;
// 		self.canvas.width = self.width;
// 		self.canvas.height = self.height;
// 		self.draw();
// 	});

// 	let canvas = document.createElement('canvas');
// 	div.appendChild(canvas);
// 	this.canvas = canvas;
// 	this.canvas.width = this.width;
// 	this.canvas.height = this.height;
// };

// Field.prototype.start = function() {

// 	let stars = [];
// 	for(let i=0; i<this.stars; i++) {
// 		stars[i] = new Star(Math.random()*this.width, Math.random()*this.height, Math.random()*3+1,
// 		 (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
// 	}
// 	this.stars = stars;

// 	let self = this;
// 	this.intervalId = setInterval(function() {
// 		self.update();
// 		self.draw();	
// 	}, 1000 / this.fps);
// };

// Field.prototype.stop = function() {
// 	clearInterval(this.intervalId);
// };

// Field.prototype.update = function() {
// 	let dt = 1 / this.fps;

// 	for(let i=0; i<this.stars.length; i++) {
// 		let star = this.stars[i];
// 		star.y += dt * star.velocity;
// 		if(star.y > this.height) {
// 			this.stars[i] = new Star(Math.random()*this.width, 0, Math.random()*3+1, 
// 		 	(Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
// 		}
// 	}
// };

// Field.prototype.draw = function() {

// 	let ctx = this.canvas.getContext("2d");
//  	ctx.fillStyle = '#000000';
// 	ctx.fillRect(0, 0, this.width, this.height);
// 	ctx.fillStyle = '#ffffff';
// 	for(let i=0; i<this.stars.length;i++) {
// 		let star = this.stars[i];
// 		ctx.fillRect(star.x, star.y, star.size, star.size);
// 	}
// };

// function Star(x, y, size, velocity) {
// 	this.x = x;
// 	this.y = y; 
// 	this.size = size;
// 	this.velocity = velocity;
// }


// let p;
// let e;

// function setup() {
//     createCanvas(600, 600);
//     p = new Player();
//     for(let i = 0; 1 < a; i++){
//         e[i] = new Enemy(i*40 + 40, 40);
//     }
// }

// function draw() {
//     background(0);
//     p.drawPlayer();
//     p.movePlayer();
//     for(let i = 0; 1 < a; i++){
//         e[i] = new Enemy(i*40 + 40, 40);
//     }
// }

// function Player() {
//     this.x = 275;
//     this.y = 550;
//     this.w = 50;
//     this.h = 20;

//     this.drawPlayer = function() {
//         fill(255)
//         noStroke();
//         rect(this.x, this.y, this.w, this.h);
//     }

//     this.movePlayer = function() {
//         this.x = mouseX = this.w/2;
//     }
// }

// function Enemy(x, y) {
//     this.x = x;
//     this.y = y;
//     this.r = 20;

//     this.drawEnemy = function() {
//         fill(0, 255, 0);
//         noStroke();
//         ellipse(this.x, this.y, this.r, this.r);
//     }
// }

// function shipMoving (x, y){ 

//     let shipMoving = document.getElementById("ship");

//         let right = false,
//             left = false,
//             shoot = false

//     document.addEventListener('keydown', press)
//         function press(event){
//             if (event.keyCode === 39){
//                 right = true
//             } 
//             if (event.keyCode === 37){
//                 left = true 
//             }
//             if (event.keyCode === 32){
//                 shoot = true
//             }
//         } 
//     document.addEventListener('keyup', release)
//         function release(event){
//             if (event.keyCode === 39){
//                 right = false
//             } 
//             if (event.keyCode === 37){
//                 left = false 
//             }    
//             if (event.keyCode === 32){
//                 shoot = false3
//             }
//         }
//     }
