const Api = require("../models/auth.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sign } = require("jsonwebtoken");
const { create } = require("./auth.controller");

module.exports = {
  async lists(req, res) {
    try {
      const lists = await Api.find();
      res.status(200).json({ message: "Lists no found", data: lists });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
