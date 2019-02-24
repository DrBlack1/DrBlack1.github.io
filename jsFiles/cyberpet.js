class Animal {
    constructor(type) {
        this.type = type;
        this.hunger = 50;
        this.thirst = 50;
        this.boredom = 50;
    }
    playWith() {
        this.thirst++;
        this.boredom--;
    }
    giveFood() {
        this.hunger--;
        this.boredom++;
    }
    giveDrink() {
        this.thirst--;
        this.boredom++;
    }
}
const dog = new Animal('dog');
dog.playWith();
console.log(dog);
dog.giveFood();
console.log(dog);
dog.giveDrink();
console.log(dog);


// class Dog {
//     constructor(type){
//         this.type = type;
//         this.food = 50;
//         this.water = 50;
//         this.bord = 50;
//     }

//     playWith() {
//         this.water++;
//         this.bord--;
//     }

//     giveWater() {
//         this.water--;
//         this.bord++;
//     }

//     giveFood() {
//         this.food--;
//         this.bord++;
//     };

// }
// const dog1 = new Dog('dog1');
// dog1.playWith();
// console.log(dog1.playWith);
// dog1.giveWater();
// console.log(dog1.water);
// dog1.giveFood();
// console.log(dog1.giveFood);