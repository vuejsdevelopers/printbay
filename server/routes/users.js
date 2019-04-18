const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/user");

router
  .route("/")
  .post(UsersController.create);

module.exports = router;
