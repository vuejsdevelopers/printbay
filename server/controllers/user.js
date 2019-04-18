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

exports.read = async (req, res) => {
  let token;
  try {
    token = req.header("authorization").split(" ")[1];
  } catch (err) {
    return res.status(401).send({ message: "Authorization token invalid." });
  }
  try {
    const user = await Users.findByToken(token);
    res.send({ user });
  } catch (err) {
    res.status(401).send(err);
  }
};
