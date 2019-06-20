const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/user");
const authenticate = require("../middleware/auth");

router
  .route("/")
  /**
   * @api {post} /users Create a new user
   * @apiGroup User
   * @apiName PostUsers
   * @apiPermission none
   * @apiParam (Request body) {String} name Name of the user
   * @apiParam (Request body) {String} email Email of the user
   * @apiParam (Request body) {String} password Password of the user
   * @apiParamExample {json} Request body example
   * {
   *   "name": "John Smith",
   *   "email": "user@test.com",
   *   "password": "test1234"
   * }
   * @apiSuccess (200) {String} id The user's id
   * @apiSuccess (200) {String} name Name of the user
   * @apiSuccess (200) {String} email Email of the user
   * @apiSuccess (200) {String} role User's role
   */
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
