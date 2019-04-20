const express = require("express");
const router = express.Router();
const bcrypt = require("./bcrypt");

const Signup = require("../mongodb/schemas/signup");

const mongoConnect = require("../mongodb/connect");
mongoConnect();

router.post("/login", async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;

  let user = await Signup.find({ userName: username });
  console.log(user);
  console.log(password);
  console.log(user[0].password);
  if (user[0]) {
    if (await bcrypt.passwordCompare(password, user[0].password)) {
      username = encodeURIComponent(username);
      res.redirect("/profile/?username=" + username);
    } else {
      res.render("login", { err: "Incorrect username or password" });
    }
  } else {
    res.render("login", { err: "That username does not exist" });
  }
});
module.exports = router;
