const db = require("../models");
const User = db.users;

const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.create = (req, res) => {
  const { username, password, email } = req.body;
  // TODO: Add in checking if password is entered or not (to handle automatic accounts rather than own made)
  let hashedPassword;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
    } else {
      hashedPassword = hash;
    }
  });

  User.create({
    username: username,
    password: hashedPassword,
    email: email,
    balance: 0,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
