const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Change the port if needed

// Define a route handler to serve db.json
app.get('/data', (req, res) => {
  const dbPath = path.join(__dirname, 'db.json');
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Define a route handler to serve episodes
app.get('/episodes', (req, res) => {
  const dbPath = path.join(__dirname, 'db.json');
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    // Assuming your JSON data structure has episodes field
    const episodes = JSON.parse(data).episodes;
    res.json(episodes);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

