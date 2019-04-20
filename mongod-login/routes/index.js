const express = require("express");
const router = express.Router();
const bcrypt = require("./bcrypt");

const Signup = require("../mongodb/schemas/signup");

const mongoConnect = require("../mongodb/connect");
mongoConnect();

router.get("/", (req, res, next) => {
  res.render("create", { title: "form" });
});

router.get("/login", (req, res, next) => {
  res.render("login", { title: "form" });
});

router.post("/", async (req, res, next) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

  let user = await Signup.find({ userName: username });
  console.log(user);

  if (!user[0]) {
    const signup = new Signup({
      userName: username,
      email: email,
      password: await bcrypt.hashPassword(password)
    });

    username = encodeURIComponent(username);
    signup.save();
    res.redirect("/profile/?username=" + username);
  } else {
    res.render("create", { err: "user with that name already exists" });
  }
});

/**
 * query db
 * compare entered pass w/ pass from db
 * if compare = true
 * login
 * else err
 */

router.get("/profile", async (req, res, next) => {
  let username = req.param("username");
  let user = await Signup.find({ userName: username });

  res.render("profile", {
    password: user[0].password,
    username: user[0].userName,
    email: user[0].email
  });
});
module.exports = router;
