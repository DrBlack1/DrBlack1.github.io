class CyberPet {
    constructor(name, animalType) {
        this._name = name;
        this._animalType = animalType;
        this.boredom = 50;
        this.thirst = 50;
        this.hunger = 50;
        this.tired = 50;

    }

    get name() {
        return this._name;
    }

    get animal() {
        return this._animalType;
    }

    play() {
        if (this.boredom <= 40) {
            console.log(`${this.name} needs to be played with`);
        } else {
            console.log(`${this.name} is happy`);
            this.thirst += 10;
            this.boredom -= 20;
            this.hunger += 10;
            this.tired += 10;
        }
    }

    drink() {
        if (this.thirst >= 30) {
            console.log(`${this.name} needs a drink`);
        } else {
            console.log(`${this.name} doesn't need a drink`);
            this.thirst -= 50;
        }
    }

    eat() {
        if (this.hunger >= 30) {
            console.log(`${this.name} is hungry`);
        } else {
            console.log(`${this.name} is full`);
            this.hunger -= 50;
            this.boredom -= 20;
        }
    }

    sleep() {
        if (this.sleep >= 40) {
            console.log(`${this.name} needs sleep`);
        } else {
            console.log(`${this.name} is full of energy`);
            this.tired -= 50;
        }

    }

}

const pet1 = new CyberPet("Bernie", "Bear");
pet1.eat();
pet1.sleep();
console.log(pet1);

const pet2 = new CyberPet("Steve", "Dog");
pet2.play();
pet1.drink();
console.log(pet2);