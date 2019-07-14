const Item = require("../models/item");

exports.fetch = async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (err) {
    res.status(500).send();
  }
};

exports.create = async (req, res) => {
  const item = new Item(req.body);
  try {
    const doc = await item.save();
    res.send(doc);
  } catch (err) {
    res.status(400).send();
  }
};

exports.read = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).send();
    }
    res.send(item);
  } catch (err) {
    res.status(500).send();
  }
};

exports.update = async (req, res) => {
  try {
    const doc = await Item.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    doc ? res.send(doc) : res.status(404).send();
  } catch (err) {
    res.status(500).send();
  }
};

exports.delete = async (req, res) => {
  try {
    const item = await Item.findOneAndDelete({ _id: req.params.id });
    item
      ? res.send(item)
      : res.status(404).send();
  } catch (err) {
    res.status(500).send();
  }
};
