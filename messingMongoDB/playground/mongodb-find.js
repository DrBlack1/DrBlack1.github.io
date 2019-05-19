

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

db.collection('Users').find().toArray().then((docs) => {
    console.log('Users')
    console.log(JSON.stringify(docs, undefined, 2))
}, (err) => {
    console.log('unable to fetch todos', err)
})

// can call find with no args (no query) fetch them all regardless of value - all documents from todos collection.
// returns mongodb cursor (not the documents themselves) cursor has a ton of methods - .toArray creates an array of our documents
//toArray returns a promise, which means we can use .then() after. 
// find() queries inside curly brackets using key value pairs


// db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`)
   
// }, (err) => {
//     console.log('unable to fetch todos', err)
// })


    //client.close();


    
});

