const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "..", ".env.server")
});
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/printbay", {
  useNewUrlParser: true, useCreateIndex: true
});
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/items", require("./routes/items"));

const port = process.env.PORT;
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

module.exports = app;
