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
const validator = require("validator");

const Item = mongoose.model("Item", {
  title: {
    type: String,
    required: true,
    trim: true
  },
  artist: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  year: {
    type: Number
  },
  price: {
    type: Number
  }
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  }
});

app.use("/items", require("./routes/items"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
