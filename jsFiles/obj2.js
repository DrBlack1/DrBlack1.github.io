class Car {
    constructor(manufacturer, model, colour) {
        this._manufacturer = manufacturer;
        this._model = model;
        this._colour = colour;
        this._accelerator = 90;
        this._brake = 10;
        this._turning = 10;
        this._beeping = 10;
    }
getManufacturer(){
    return this._manufacturer;
}
getModel(){
    return this._model;
}
getColour(){
    return this._colour;
}
getAccelerator(){
    return this._accelerator;
}
getBrake(){
    return this._brake;
}
getTurning(){
    return this._turning;
}
getBeeping(){
    return this._beeping;
}

}

const car1 = new Car("VW","Passat","Silver");
console.log(car1);
console.log(car1.getAccelerator());

const car2 = new Car("Audi","A3","Black")
console.log(car2);
console.log(car2.getBeeping());



let person = {
        
    name: "Patto",
    Age: 27,
    Height: 6, 
   
    SayHi(){
        console.log(`My name is ${this.name}`)
    }
    }

;

person.SayHi();

/*person.songs = ['dance','sing`, jump,']; 
console.log(hello)
console.log(person);
let person2 = {
    name: "Bob",
    Age: 102,
    Height: 200,
};
person2.songs = ['jump', 'scream', 'shout'];
console.log(person2);
*/