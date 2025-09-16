const express = require('express');
const app = express();
const PORT = 3000;
let articles = require('./articles');

app.use(express.json());

// GET all
app.get('/articles', (req, res) => {
  res.json(articles);
});

// GET by ID
app.get('/articles/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  article ? res.json(article) : res.status(404).send('Not found');
});

// POST new
app.post('/articles', (req, res) => {
  const newArticle = { id: articles.length + 1, ...req.body };
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

// PUT update
app.put('/articles/:id', (req, res) => {
  const index = articles.findIndex(a => a.id === parseInt(req.params.id));
  if (index !== -1) {
    articles[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(articles[index]);
  } else {
    res.status(404).send('Not found');
  }
});

// DELETE
app.delete('/articles/:id', (req, res) => {
  articles = articles.filter(a => a.id !== parseInt(req.params.id));
  res.json({ message: 'Deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
