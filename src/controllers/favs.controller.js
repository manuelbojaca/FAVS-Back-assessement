const Api = require("../models/auth.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sign } = require("jsonwebtoken");
const { create } = require("./auth.controller");
const Auth = require("../models/auth.model");

module.exports = {
  async lists(req, res) {
    try {
      const lists = await Api.find();
      res.status(200).json({ message: "Lists no found", data: lists });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async show(req, res) {
    try {
      const { id: id } = req.params;
      const list = await Api.findById(id);
      res.status(200).json({ message: "List found", data: list });
    } catch {
      res.status(500).json(err);
    }
  },

  async create(req, res) {
    try {
      const idUser = req.user;
      console.log("UserId: ", idUser);
      const user = await Auth.findById(idUser);
      console.log("User: ", user, "req: ", req.body);
      if (!user) {
        throw new Error("Invalid user");
      }
      const list = await Api.create({
        ...req.body,
        user: user,
      });
      console.log("List: ", list);
      res.status(201).json({ message: "List created", data: list });
    } catch (err) {
      res.status(400).json({ message: "List create fail", data: err });
    }
  },
};
