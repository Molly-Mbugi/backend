const express = require('express');
const app = express();
const path = require('path');

// Serve db.json file
app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'db.json'));
});

// Serve db.json file when users access the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'db.json'));
});

// Define a port to listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

