const bcrypt = require('bcrypt');
const myPlaintextPassword = 'password';

const diff = 'passw'

bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
    console.log(hash);
    bcrypt.compare(diff, hash, function(err, res) {
        console.log(res);
    });
  });

// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 'not_bacon';

//     bcrypt.hash(myPlaintextPassword, saltRounds, function(err,hash) {
//         console.log(hash);
//         bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
//             console.log(res);
//     });
// });