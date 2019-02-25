let rabbit = {
    
    Name: "Sherlock", 
    Colour: "Black & White", 
    Ears: "Uppy",

    bunHop(){
        console.log(`${this.Name} is hopping`)
    },
    
    bunChew(){
        console.log(`${this.Name} is chewing`)
    },

    bunColour() {
        console.log(`the rabbit is ${this.Colour}`)
    },

    bunEars() {
        console.log(`the rabbits ears are ${this.Ears}`)
    }

};

rabbit.bunHop();
rabbit.bunChew();
rabbit.bunColour();
rabbit.bunEars();