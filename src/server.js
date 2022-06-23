const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { connect } = require("./db");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
const userRouter = require("./routes/user.routes");
const listRouter = require("./routes/list.routes");
const favRouter = require("./routes/fav.routes");
connect();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", userRouter);
app.use("/api", listRouter);
app.use("/fav", favRouter);

app.listen(port, () => {
  console.log("App running OK");
});
