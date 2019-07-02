const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/user");
const authenticate = require("../middleware/auth");

/**
 * @apiDefine UserResponse200
 * @apiSuccess (200) {String} id The user's id
 * @apiSuccess (200) {String} name Name of the user
 * @apiSuccess (200) {String} email Email of the user
 * @apiSuccess (200) {String} role User's role
 */
router
  .route("/")
  /**
   * @api {post} /users Create a new user
   * @apiGroup User
   * @apiName PostUsers
   * @apiPermission none
   * @apiVersion 1.0.0
   * @apiParam (Request body) {String} name Name of the user.
   * @apiParam (Request body) {String} email Email of the user.
   * @apiParam (Request body) {String} password Password of the user.
   * @apiParamExample {json} Request body example
   *  {
   *    "name": "John Smith",
   *    "email": "user@test.com",
   *    "password": "test1234"
   *  }
   * @apiUse UserResponse200
   * @apiUse 400
   */
  .post(UsersController.create)
  .all(authenticate)
  /**
   * @api {get} /users Read a user
   * @apiGroup User
   * @apiName GetUsers
   * @apiPermission user
   * @apiVersion 1.0.0
   * @apiUse UserResponse200
   * @apiUse 401
   */
  .get(UsersController.read);

router
  .route("/login")
  /**
   * @api {get} /users/login Log in user
   * @apiGroup User
   * @apiName GetUsersLogin
   * @apiPermission user
   * @apiVersion 1.0.0
   * @apiUse UserResponse200
   * @apiUse 400
   * @apiUse 404
   */
  .post(UsersController.login);

router
  .route("/logout")
  .all(authenticate)
  /**
   * @api {get} /users/logout Log out user
   * @apiGroup User
   * @apiName GetUsersLogout
   * @apiPermission user
   * @apiVersion 1.0.0
   * @apiUse 401
   */
  .get(UsersController.logout);

module.exports = router;
