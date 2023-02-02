// import the Express.js Router function and the ./api module
const router = require("express").Router();
const apiRoutes = require("./api");

// mount the imported apiRoutes module at the path /api, meaning any routes defined in the apiRoutes module will be accessible under the /api path
router.use("/api", apiRoutes);

// catch-all route for requests to unknown routes
router.use((req, res) => res.send("Wrong route!"));

module.exports = router;
