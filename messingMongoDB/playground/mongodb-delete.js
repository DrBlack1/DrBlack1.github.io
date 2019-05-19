

//can use object destructuring
/*
eg 
var myObject = {name: 'dan', age: 25}
var {name} = myObject;

because libraries are just objects, we can use destructuring on libraries.
*/
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb') // exactly the same as the code above. Just means we don't have to include the . notation on the end.

//  var obj = new ObjectID(); now we can generate objectID's anywhere we like

// we can pull off anything from the mongodb library inside the destructured variable, seperate them with commas (see above)

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err){
        return console.log('unable to connect to mongoDB server')
    }
    console.log('connected to MongoDB server') 
    const db = client.db('TodoApp')

//deleteMany
db.collection('Todos').deleteMany({text: 'Eat breakfast'}).then((results) => {
    console.log(results)
})  

//deleteOne works the same as deleteMany except it deletes the first item it finds that matches then stops.


//findOneAndDelete finds the first one

db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result)
})

    //client.close();


    
});

