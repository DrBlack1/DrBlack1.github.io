
let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose.js');
let {Todo} = require('./models/Todo.js');
let {User} = require('./models/User.js');

let app = express();

app.use(bodyParser.json()); //return value from json value is a function. This is the middleware we give to express

// for resource creation
// creates a new instance of the todo model, and completes it with the text from the request object.
app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        console.log('Todo saved successfully:', doc)
        res.send(doc);
    }, (e) => {
        res.status(400).send(e)
    })
})


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e)
    })
})


app.listen(3000, () => {
    console.log('Started on port 3000')
});


module.exports = {app};

// code here will execute when mongoose has connected


//code below was moved into its own file in models folder
// let Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// todo schema has validators (check the web for a list of the different validators.)

// let newTodo = new Todo({
//     text: '            eat dinner     ',
//     completed: false,
//     completedAt: 8
// })

// .save() method is what adds the document to the database.

// newTodo.save().then((doc) => {
//     console.log('saved todo:', doc)
// }, (e) => {
//     console.log("Can't save")
// })





