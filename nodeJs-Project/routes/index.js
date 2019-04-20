const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const west = { name: 'Daniel', age:26, cool:true}
  // res.send('Hey! It works!');
  // res.json(west);
  // res.send(req.query.name);
  res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  // res.send('it works!')
  // res.send(req.params.name)
  res.send(reverse);
});

module.exports = router;
