const Auth = require("../models/auth.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sign } = require("jsonwebtoken");

module.exports = {
  async create(req, res) {
    try {
      const data = req.body;
      const encPassword = await bcrypt.hash(data.password, 8);
      const newUser = { ...data, password: encPassword };
      const user = await Auth.create(newUser);

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 24,
      });
      res.status(201).json({
        message: "signup",
        data: { token: token },
      });
    } catch (err) {
      res.status(400).json({ message: "signupfail", data: err });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await Auth.findOne({ email: email });
      if (!user) {
        throw new Error("user no found");
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
      res.status(400).json({ message: "user info invalid" });
    }
  },
};
