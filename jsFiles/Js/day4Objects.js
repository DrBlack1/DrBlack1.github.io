/* person = object; name, age, mood are keys, liam, 25, good are values*/

let person = { 
name: "Liam", 
age: 25,
mood: "good",
sayHi(){
    return (`Hello, my name is ${this.name}`)
},
greeting (){
if (this.mood == "good")
    return ("Hi, nice to see you!")
 else return ("Hi, now go away!")
}

};

console.log(person.name)
console.log(person['name'])
person['Favourite Drinks']=['Water','Vimto','Carling'];
person.FavouriteBiscuits = ['Bourbon','Custard Cream'] 
person['Favourite Bands'] = ['Queen','David Bowie']

console.log(person.sayHi())


let Rabbit = {
    name: "Sherlock",
    colour: "Black & White",
    ears: "Uppy",
    bunHop (){
        return (`${this.name} is hopping`)
    },
    bunChew (){
        return (`${this.name} is chewing`)
    }
}
console.log(Rabbit.bunHop())
console.log(Rabbit.bunChew())
console.log(Object.keys(Rabbit));
delete Rabbit.name
console.log(Rabbit)

