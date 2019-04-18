const Users = require("../models/User");

exports.create = async (req, res) => {
  const user = new Users(req.body);
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
