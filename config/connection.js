const { connect, connection } = require('mongoose');

// sets a connection to either the MONGODB_URI environment variable if it's available, or to a local development database 
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB';

// connects to a MongoDB database with the specified connection string
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
