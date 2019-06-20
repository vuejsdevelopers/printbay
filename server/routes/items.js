const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/items");
const authenticate = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateIdParam = require("../middleware/validateIdParam");
const validateItemBody = require("../middleware/validateItemBody");

/* eslint-disable max-len */
/**
 * @apiDefine AuthHeader
 * @apiHeader {String} Authorization User'd JSON web token prefixed with "Bearer: "
 * @apiHeaderExample {json} Header example
 * {
 *   "Authorization": "Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
 * }
 */
/* eslint-enable max-len */
/**
 * @apiDefine ItemRequestBody
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
   * @apiUse AuthHeader
   * @apiUse ItemRequestBody
   */
  .post(ItemController.create);

router
  .route("/:id")
  .all(validateIdParam)
  .get(ItemController.read)
  .all(authenticate, admin)
  /**
   * @api {delete} /items/:id Delete an item
   * @apiGroup Item
   * @apiName DeleteItemsId
   * @apiParam {String} id Item's id
   * @apiPermission admin
   * @apiUse AuthHeader
   */
  .delete(ItemController.delete)
  .all(validateItemBody)
  /**
   * @api {patch} /items/:id Update an item
   * @apiGroup Item
   * @apiName PatchItemsId
   * @apiUse AuthHeader
   * @apiUse ItemRequestBody
   * @apiPermission admin
   * @apiParam {String} id Item's id
   */
  .patch(ItemController.update);

module.exports = router;
