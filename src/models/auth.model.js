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
      type: [{ type: Schema.Types.ObjectId, ref: "List" }],
      required: false,
    },
  },
  { timestamps: true }
);

const Auth = model("User", userSchema);
module.exports = Auth;
