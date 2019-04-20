const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("Signup", signupSchema);
