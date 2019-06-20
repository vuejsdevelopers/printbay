const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/items");
const authenticate = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateIdParam = require("../middleware/validateIdParam");
const validateItemBody = require("../middleware/validateItemBody");

router
  .route("/")
  /**
   * @api {get} /items Fetch all items
   * @apiGroup Item
   * @apiName GetItems
   */
  .get(ItemController.fetch)
  .all(authenticate, admin)
  .all(validateItemBody)
  /**
   * @api {post} /items Create an item
   * @apiGroup Item
   * @apiName PostItems
   * @apiParam (Request body) {String} title Title of the item
   * @apiParam (Request body) {String} [artist] Item's artist
   * @apiParam (Request body) {String} [image] URL of the item's image
   * @apiParam (Request body) {Number} [year] Year of the item's creation
   * @apiParam (Request body) {Number} [price] Price of the item
   * @apiParamExample {json} Request body example
   * {
   *   "title": "Self-Portrait",
   *   "artist": "Vincent van Gogh",
   *   "year": 1889,
   *   "image": "https://images.nga.gov/?service=asset&action=show_preview&asset=149207",
   *   "price": 29.95
   * }
   */
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
