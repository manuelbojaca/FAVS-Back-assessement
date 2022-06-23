const { Schema, model, models } = require("mongoose");

const favsSchema = new Schema(
  {
    name: {
      type: String,
      reuired: true,
    },
    favs: [
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
    ],
  },
  { timestamps: true }
);

const Favs = model("Favs", favsSchema);
module.exports = Favs;
