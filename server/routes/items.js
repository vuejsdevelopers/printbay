const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/items");
const authenticate = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateIdParam = require("../middleware/validateIdParam");
const validateItemBody = require("../middleware/validateItemBody");

router
  .route("/")
  .get(ItemController.fetch)
  .all(authenticate, admin)
  .all(validateItemBody)
  .post(ItemController.create);

router
  .route("/:id")
  .all(validateIdParam)
  .get(ItemController.read)
  .all(authenticate, admin)
  .delete(ItemController.delete)
  .all(validateItemBody)
  .patch(ItemController.update);

module.exports = router;
