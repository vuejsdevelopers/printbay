const { ObjectId } = require("mongodb");

module.exports = function (req, res, next) {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send();
  } else {
    next();
  }
};
