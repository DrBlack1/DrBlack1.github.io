

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


    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection('Users').insertOne({
        name: "Dan",
        age: 32,
        location: "Chester, UK"
    }, (err, result) => {
        if (err){
            return console.log('Unable to insert todo', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    client.close();
});




//MongoClient.connect('The URL where your database lives', (err, client) => {});       URL could be Heroku for example, or localhost, second arg is a callback function
//format of URL is mongodb://URL/name of database

//db.collection('name for the collection').insertOne({}, () => {})
//insertOne(document object, callback which fires in good or bad cases.)