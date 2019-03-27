const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/items");

router
  .route("/")
  .get(ItemController.list);

module.exports = router;
