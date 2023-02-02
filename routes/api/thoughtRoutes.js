const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// route will be /api/thoughts to get all thoughts and create a new thought
router.route("/").get(getThoughts).post(createThought);

// the route for /:thoughtId will .get a single thought, .put (update) a single thought and .delete (delete) a single thought
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// the /:thoughtId/reactions will .post (create) a new reaction
router.route("/:thoughtId/reactions").post(addReaction);

// /:thoughtId/reactions/:reactionsId deletes the specified reaction with the id number in the route
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
