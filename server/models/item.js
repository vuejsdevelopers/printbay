const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
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

module.exports = mongoose.model("Item", ItemSchema);
