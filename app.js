const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
// Middleware
app.use(cors());
// Endpoint to get image filenames from JSON file
app.get('/images', (req, res) => {
  fs.readFile(path.join(__dirname, 'data/images.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading image data.');
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
