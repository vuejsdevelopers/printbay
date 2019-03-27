const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "..", ".env.server")
});

app.use("/items", require("./routes/items"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
