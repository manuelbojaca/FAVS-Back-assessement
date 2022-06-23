const User = require("../models/user.model");
const List = require("../models/list.model");

module.exports = {
  async lists(req, res) {
    try {
      const lists = await List.find();
      res.status(200).json({ message: "Lists no found", data: lists });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async show(req, res) {
    try {
      const { id: id } = req.params;
      const list = await List.findById(id);
      res.status(200).json({ message: "List found", data: list });
    } catch {
      res.status(500).json(err);
    }
  },

  async create(req, res) {
    try {
      const idUser = req.user;
      console.log("UserId: ", idUser);
      const user = await User.findById(idUser);
      console.log("User: ", user, "req: ", req.body);
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
};
