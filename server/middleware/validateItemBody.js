module.exports = function (req, res, next) {
  const body = {};
  ["title", "artist", "year", "price", "image"].forEach(prop => {
    if (req.body.hasOwnProperty(prop)) {
      body[prop] = req.body[prop];
    }
  });
  req.body = body;
  next();
};
