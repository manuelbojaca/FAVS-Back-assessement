const app = require("./app");
require("dotenv").config();
const { connect } = require("./db");

const port = process.env.PORT;
connect();

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
