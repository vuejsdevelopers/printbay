const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/items");
const authenticate = require("../middleware/auth");
const admin = require("../middleware/admin");

router
  .route("/")
  .get(ItemController.list)
  .all(authenticate, admin)
  .post(ItemController.create);

router
  .route("/:id")
  .get(ItemController.read);

module.exports = router;
