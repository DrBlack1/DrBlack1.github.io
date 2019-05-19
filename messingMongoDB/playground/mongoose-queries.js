const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/Todo.js');
const {User} = require('./../server/models/User.js');

// let id = '5c374eea73b7a393919d50c4';

// if (!ObjectID.isValid(id)){
//     console.log("ID is not valid");
// } else {
//     console.log("Id is valid");
// }

// // 3 different methods for querying

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })


// // findOne grabs first item it finds
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo ', todo)
// })

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         console.log("ID not found")
//     }
//     console.log('Todo by Id ', todo)
// }).catch((e) => {console.log(e)})

let id = '5c345ad01f410588a3995c66';

User.findById(id).then((user) => {
    if (!user) {
        console.log("User not found");
    } else {
        console.log('User:', user.email )
    }

}).catch((e) => {console.log("not a valid id")})