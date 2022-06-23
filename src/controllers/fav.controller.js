const List = require("../models/list.model");
const Favs = require("../models/fav.model");

module.exports = {
  async create(req, res) {
    try {
      const idUser = req.user;
      const { id: id } = req.params;
      console.log("UserId: ", idUser, "id: ", id);
      const list = await List.findById(id);
      console.log("User: ", list, "req: ", req.body);
      if (!user) {
        throw new Error("Invalid user");
      }
      const fav = await Favs.create({
        ...req.body,
        user: user,
      });
      await list.favs.push(fav);
      await list.save({ validateBeforeSave: false });

      console.log("List: ", list);
      res.status(201).json({ message: "List created", data: list });
    } catch (err) {
      res.status(400).json({ message: "List create fail", data: err });
    }
  },
};
