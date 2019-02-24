let name = 'Patt';
let age = 27;
let superbowlFan = true;

let songs = ['song1', 'song2', 'song3', 'song4'];
songs.push('song5');
console.log(songs);

for(song of songs) {
    console.log(song);
}


let balance = 500;
function withdraw(amount) {
    console.log(`You have withdrawn £${amount}, you have £${balance - amount} remaining.`);
}

withdraw(200);

class Cars {
    constructor(manufacturer, model, color) {
        this._manufacturer = manufacturer;
        this._model = model;
        this._color = color;
    }
    getManufacturer() {
        return this._manufacturer;
    }
    getModel() {
        return this._model;
    }
    getColor() {
        return this._color;
    }
    getAccelerate() {
        return '0 - 60 in 6s';
    }
    getBraking() {
        return 'Brakes are sharp';
    }
    getBeeping() {
        return 'Loud beep';
    }
    getTurning() {
        return 'Good handling';
    }
}
const car1 = new Cars('Merc', 'C Class', 'Red');
const car2 = new Cars('VW', 'Polo', 'Green');
const car3 = new Cars('Suzuki', 'Swift', 'Silver');
console.log(car1);
console.log(car2.getBraking());
console.log(car3);

class Animal {
 constructor(type) {
  this.type = type;
  this.hunger = 50;
  this.thirst = 50;
  this.boredom = 50;
 }
 get typeOfAnimal() {
  return this.type;
 }
 set typeOfAnimal(type) {
  this.type = type;
  console.log(`You changed the type to ${type}`);
 }
 giveFood() {
  console.log(`Your ${this.type} has been fed but now your ${this.type} is bored!`);
  this.boredom+=25;
  this.hunger-=25;
  return this;
 }
 playWith(){
  console.log(`Your ${this.type} has had fun but now your ${this.type} is thirsty and hungry!`);
  this.boredom-=25;
  this.thirst+=25;
  this.hunger+=25;
  return this;
 }
 giveDrink() {
  console.log(`Your ${this.type} has had a drink but now your ${this.type} is bored!`);
  this.boredom += 25;
  this.thirst -= 25;
  return this;
 }
}


class Dog extends Animal {
 constructor(type, name) {
  super(name);
  this.type = type;
 }
 doBark() {
  console.log('Woof!');
 }
}

class Cow extends Animal{
    constructor(type, name){
        super(name);
        this.type = type;
    }
    doMoo() {
        console.log('Mooooo!');
    }
}

const dog1 = new Dog('dog', 'bob');
dog1.playWith();
console.log(dog1);

const cow1 = new Cow('cow', 'barry');
cow1.giveDrink();
console.log(cow1);