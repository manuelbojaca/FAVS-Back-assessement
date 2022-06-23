const { Schema, model, models } = require("mongoose");

const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Favs = model("User", userSchema);
module.exports = Favs;
