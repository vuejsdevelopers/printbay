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

const Item = mongoose.model("Item", {
  title: {
    type: String
  },
  artist: {
    type: String
  },
  image: {
    type: String
  },
  year: {
    type: Number
  },
  price: {
    type: Number
  }
});

app.use("/items", require("./routes/items"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
