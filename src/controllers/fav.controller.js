const Favs = require("../models/fav.model");
const Lists = require("../models/list.model");

module.exports = {
  async create(req, res) {
    try {
      const { id } = req.params;
      const list = await Lists.findById(id);
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
