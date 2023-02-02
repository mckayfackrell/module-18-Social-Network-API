// used to create the Express.js app
const express = require("express");
// connect to a database.
const db = require("./config/connection");
// sets up the application's endpoints
const routes = require("./routes");

// sets the port to either the value of process.env.PORT, or 3001 if process.env.PORT is not defined
const PORT = process.env.PORT || 3001;
// creates an Express.js app using the 'express' function
const app = express();

// configures the app to use the 'express.urlencoded' and 'express.json' middlewares to parse incoming request bodies as URL-encoded data and JSON data, respectively
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// configures the app to use the imported 'routes' module
app.use(routes);

// connects to the database using the './config/connection' module, and listens for the 'open' event on the connection object. When the connection to the database is opened, the app starts listening on the specified port, and logs a message to the console indicating that the server is listening
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}!`);
  });
});
