const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/data', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');
    res.json(JSON.parse(data));
  });
});

app.post('/update', (req, res) => {
  const newData = req.body;
  fs.writeFile('data.json', JSON.stringify(newData, null, 2), (err) => {
    if (err) return res.status(500).send('Error writing file');
    res.json({ message: 'Data updated successfully', data: newData });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
