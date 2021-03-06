const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const { auth } = require("./utils/auth");

const app = express();
const userRouter = require("./routes/user.routes");
const listRouter = require("./routes/list.routes");
const favRouter = require("./routes/fav.routes");
const favController = require("./controllers/fav.controller");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", userRouter);
app.use("/api", listRouter);
app.use("/fav", favRouter);

// app.post(
//   "/fav/:id",
//   auth, //(req, res) => {
//   //const user = req.user;
//   //console.log("USer: ", user);
//   favController.create
// );

module.exports = app;
