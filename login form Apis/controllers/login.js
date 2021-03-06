const bcryptjs = require("bcryptjs");
const UserModel = require("../models/userSchema");

const loginCon = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ message: "Required field are missing" });
  }

  UserModel.findOne({ email }, async (error, user) => {
    if (error) {
      res.send(error);
    } else if (user) {
      //   console.log(user.password);
      await bcryptjs
        .compare(password, user.password)
        .then((password) => {
          if (password) {
            res.send({ message: "user successfully login" });
          } else {
            res.send({ message: "Invalid User" });
          }
        })
        .catch((err) => {
          res.send(err);
        });
    } else {
      res.json({ message: "Invalid User" });
    }
  });
};

module.exports = loginCon;