const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/user");
const authenticate = require("../middleware/auth");

router
  .route("/")
  .post(UsersController.create)
  .all(authenticate)
  .get(UsersController.read);

router
  .route("/login")
  .post(UsersController.login);

router
  .route("/logout")
  .all(authenticate)
  .get(UsersController.logout);

module.exports = router;
