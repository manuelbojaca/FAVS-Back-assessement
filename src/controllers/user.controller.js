const User = require("../models/user.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sign } = require("jsonwebtoken");

module.exports = {
  async list(req, res) {
    try {
      const users = await User.find();
      res.status(200).json({ message: "Users found", data: users });
    } catch (err) {
      res.status(404).json({ message: "User not found" });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        const encPassword = await bcrypt.hash(password, 8);
        const newUser = { email: email, password: encPassword };
        user = await User.create(newUser);
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error("user no valid");
      }
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24,
      });
      res.status(201).json({
        menssage: "user loged",
        token: token,
      });
    } catch (err) {
      res
        .status(400)
        .json({ message: "user info invalid but has been created a new user" });
    }
  },
};
