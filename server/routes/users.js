const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/user");

router
  .route("/")
  .post(UsersController.create)
  .get(UsersController.read);

module.exports = router;
