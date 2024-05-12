const express = require('express');
const app = express();
const port = process.env.PORT || 4000; // Default port is 4000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
