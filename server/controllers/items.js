exports.list = (req, res) => {
  res.send({ message: "It works!" });
};

exports.create = (req, res) => {
  console.log(req.body);
  res.send({ message: "Received POST "});
};
