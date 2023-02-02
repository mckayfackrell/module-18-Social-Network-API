const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// these preform the corresponding CRUD (Create, Read, Update, Delete) operations for Users
router.route("/").get(getUsers).post(createUser);

//the route of /:userId can be used for .get .put and .delete methods
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

//the route of /:userId/friends/:friendId can be used for .post and .delete methods
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
