
const express = require('express');
const app = express();
const port = process.env.PORT || 4000; // Set the default port to 4000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, '0.0.0.0', () => { // Explicitly bind to the 0.0.0.0 address
  console.log(`Server is running on port ${port}`);
});
