exports.list = (req, res) => {
  res.send({ message: "It works!" });
};

exports.create = (req, res) => {
  res.send({ message: "Received POST "});
};
