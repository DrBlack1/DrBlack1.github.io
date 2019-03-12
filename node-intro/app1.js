const os = require('os');
const fs = require('fs');

let userDetails = os.usewrInfo().username;

fs.appendFile('oh-hi.text', `Hello ${userDetails}`, (err) =>{
    if (err){
        console.log('oops');
    }
});

//fs = file system
//os = operating system