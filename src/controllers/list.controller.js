const User = require("../models/user.model");
const List = require("../models/list.model");
const { path } = require("../app");

module.exports = {
  async lists(req, res) {
    try {
      const lists = await List.find().populate("favs");
      res.status(200).json({ message: "Lists found", data: lists });
    } catch (err) {
      res.status(500).json({ message: "Lists no found", data: err });
    }
  },

  async show(req, res) {
    try {
      const { id: id } = req.params;
      const list = await List.findById(id).populate("favs");
      res.status(200).json({ message: "List found", data: list });
    } catch {
      res.status(500).json({ message: "List no found", data: err });
    }
  },

  async create(req, res) {
    try {
      const idUser = req.user;
      const user = await User.findById(idUser);
      if (!user) {
        throw new Error("Invalid user");
      }
      const list = await List.create({
        ...req.body,
        user: user._id,
      });
      await user.lists.push(list);
      await user.save({ validateBeforeSave: false });

      console.log("List: ", list);
      res.status(201).json({ message: "List created", data: list });
    } catch (err) {
      res.status(400).json({ message: "List create fail", data: err });
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;
      console.log("Listid: ", id);
      const list = await List.findByIdAndDelete(id);
      await res.status(200).json({ message: "List deleted", data: list });
    } catch (err) {
      res.status(400).json({ message: "List could not be deleted", data: err });
    }
  },
};
