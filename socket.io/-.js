router.post('/createCoffee', (req, res, next)=> {
  console.log(req.body.name);
  res.redirect('/');
});
