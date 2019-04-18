const Users = require("../models/User");

exports.create = async (req, res) => {
  const user = new Users(req.body);
  try {
    const doc = await user.save();
    res.send({ user: doc });
  } catch (err) {
    res.status(400).send(err);
  }
};
