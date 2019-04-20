const bcrypt = require("bcrypt");

async function hashPassword(password) {
  let hashedPassword = await bcrypt.hash(password, 13);
  if (password.length > 0) {
    return hashedPassword;
  }
}

async function passwordCompare(password, hashedPassword) {
  let compare = await bcrypt.compare(password, hashedPassword);
  return compare;
}

module.exports = { passwordCompare, hashPassword };
