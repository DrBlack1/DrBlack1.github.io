const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/signup', {
    useNewUrlParser: true
});

const user = new User ({
    firstName: "Warren",
    lastName: "Pitterson",
    age: 29,
    location: "Manchester"
});

user.save()