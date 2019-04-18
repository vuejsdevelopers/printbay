const Item = require("../models/Item");
const { ObjectId } = require("mongodb");

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

exports.read = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send();
  }
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).send();
    }
    res.send({ item });
  } catch (err) {
    res.status(500).send();
  }
};
