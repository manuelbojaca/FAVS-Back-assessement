const List = require("../models/list.model");
const Favs = require("../models/fav.model");

module.exports = {
  async create(req, res) {
    try {
      const idUser = req.user;
      const { id } = req.params;
      console.log("UserId: ", idUser, "id: ", id);
      const list = await List.findById(id);
      console.log("User: ", list, "req: ", req.body);
      if (!list) {
        throw new Error("Invalid list");
      }

      const fav = await Favs.create({
        ...req.body,
        list: list._id,
      });
      console.log("Fav: ", fav);
      await list.favs.push(fav);
      await list.save({ validateBeforeSave: false });

      console.log("List: ", list);
      res.status(201).json({ message: "Fav created", data: list });
    } catch (err) {
      res.status(400).json({ message: "Fav create fail", data: err });
    }
  },
};
