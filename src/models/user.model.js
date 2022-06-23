const { Schema, model, models } = require("mongoose");

const userSchema = new Schema(
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
      type: [{ type: Schema.Types.ObjectId, ref: "Lists" }],
      required: false,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;
