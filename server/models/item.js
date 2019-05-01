const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
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
}, {
  toJSON: {
    transform: (doc, { _id, title, artist, image, year, price }) =>
      ({ id: _id, title, artist, image, year, price })
  }
});

module.exports = mongoose.model("Item", ItemSchema);
