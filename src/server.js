const app = require("./app");
require("dotenv").config();
const { connect } = require("./db");

const port = process.env.PORT;
connect();

app.listen(port, () => {
  console.log("App running OK");
});
