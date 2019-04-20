console.log('Firing up app.js and levelling up');

const fs = require('fs');
const_ = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;

const coffee = require('./coffee');
let instruction = process.argv[2]
console.log('instruction is:', instruction);
console.log('this is process.argv:', process.argv);
console.log('this is yargs argv', argv)

if (instruction === 'add') {
    console.log('Yeah! adding a coffee')
    coffee.addOrder(argv.name, argv.order)
} else if (instruction === 'list'){
    console.log('Here is a list of the coffees')
    coffee.showAllOrders()
} else if (instruction === 'specific'){
    coffee.gettSpecificOrder(argv.name)
} else if (instruction === 'remove') {
    console.log('removing coffee.boohoo.')
} else {
    console.log('Um... no.')
}