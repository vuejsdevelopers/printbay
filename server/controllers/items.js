const Item = require("../models/Item");

exports.list = (req, res) => {
  res.send({ message: "It works!" });
};

exports.create = async (req, res) => {
  const item = new Item(req.body);
  try {
    const doc = await item.save();
    res.send({ item: doc });
  } catch (err) {
    res.status(400).send();
  }
};
