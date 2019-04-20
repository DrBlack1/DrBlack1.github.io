const mongoose = require('mongoose');

function connect(){
    mongoose.connect(
        'mongodb+srv://Samburke:12345@cluster0-slu3a.mongodb.net/test?retryWrites=true',
        { 
            useNewUrlParser: true
        })
    console.log("it works")
}

module.exports = connect;