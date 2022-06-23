const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { connect } = require("./src/db");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
const authRouter = require("./src/routes/auth.routes");
const favsRouter = require("./src/routes/favs.routes");
connect();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", favsRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log("App running OK");
});
