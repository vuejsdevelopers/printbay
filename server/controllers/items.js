const Item = require("../models/Item");

exports.list = async (req, res) => {
  try {
    const items = await Item.find();
    res.send({ items });
  } catch (err) {
    res.status(500).send();
  }
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
