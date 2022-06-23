const { Schema, model, models } = require("mongoose");

const listsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    favs: [
      {
        type: { type: Schema.Types.ObjectId, ref: "Favs" },
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const Lists = model("Lists", listsSchema);
module.exports = Lists;
