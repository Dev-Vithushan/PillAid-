const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

// MongoDB connection string (replace with your own values)
const url = 'mongodb://localhost:27017/myapp';

// Connect to the database
MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error(err);
    return;
  }

  // Set up the API routes
  const db = client.db();
  app.get('/users', (req, res) => {
    const collection = db.collection('users');
    collection.find().toArray((err, users) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error fetching users from database');
      } else {
        res.send(users);
      }
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
