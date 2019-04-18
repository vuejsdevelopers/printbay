const Users = require("../models/User");

exports.create = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new Users({ name, email, password });
  try {
    const doc = await user.save();
    const token = await doc.generateAuthToken();
    res
      .header("authorization", `Bearer ${token}`)
      .send({ user: doc });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res
      .header("authorization", `Bearer ${token}`)
      .send({ user });
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.read = async (req, res) => res.send({ user: req.user });
