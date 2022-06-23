const { Schema, model, models } = require("mongoose");

const authSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lists: {
      type: [{ type: Schema.Types.ObjectId, ref: "Favs" }],
      required: false,
    },
  },
  { timestamps: true }
);

const Auth = model("Auth", authSchema);
module.exports = Auth;
