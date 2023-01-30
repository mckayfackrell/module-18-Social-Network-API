const express = require('express');
const mongodb = require('mongodb').MongoClient;
const data = require('./models/User');

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/socialDB`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    // Drops any documents, if they exist
    db.collection('social').deleteMany({});
    // Adds data to database
    db.collection('social').insertMany(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res);
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);