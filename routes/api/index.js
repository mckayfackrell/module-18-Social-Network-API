// import the express, userRoutes and thoughtRoutes modules
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes");

// any routes defined in the userRoutes module will be accessible under the /users path, and any routes defined in the thoughtRoutes module will be accessible under the /thoughts path
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
