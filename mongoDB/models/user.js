const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', user);

// const mongoose = require('mongoose');

// const user = new mongoose.Schema({
//     firstName: {type:String, required: true},
//     lastName: {type:String, required: true},
//     age: {type:Number, required: true},
//     location: {type:String, required: true},

// const query  = user.findOne({
//         'firstName' : ''
// });

//  user.find({},(err,users) => {
//      console.log(users)
//  });
 
// module.exports = mongoose.model('User', user);