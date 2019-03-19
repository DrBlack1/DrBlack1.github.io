var express = require('express');
var router = express.Router();
const User = require('../models/user');

const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello', subtitle: 'subtitle', });
});

router.post('/', async function(req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  let salt = await bcrypt.genSalt(13);
  let hash = await bcrypt.hash(password, salt);
  
  const user = new User({
    name,
    email,
    password: hash
  });

  let searchedUser = await User.find({name: name});
  console.log(searchedUser);

  if(searchedUser.length === 0) {
    user.save();
  } else {
      console.log('error, user already exists');
  }
    // user.save();

});


module.exports = router;