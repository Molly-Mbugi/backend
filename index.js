const express = require('express');
const fs = require('fs'); // Require the file system module
const path = require('path');
const app = express();
const port = process.env.PORT || 4000; // Default port is 4000

// Define a route to serve the content of db.json
app.get('/data', (req, res) => {
  // Construct the path to db.json
  const dbPath = path.join(__dirname, 'db.json');
  
  // Read the content of db.json file
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    // Send the content of db.json as the response
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
