const express = require('express');
let articles = require('../articles');

const router = express.Router();

// GET all
router.get('/', (req, res) => {
  res.json(articles);
});

// GET by ID
router.get('/:id', (req, res) => {
  const article = articles.find(a => a.id === parseInt(req.params.id));
  article ? res.json(article) : res.status(404).send('Not found');
});

// POST new
router.post('/', (req, res) => {
  const newArticle = { id: articles.length + 1, ...req.body };
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

// PUT update
router.put('/:id', (req, res) => {
  const index = articles.findIndex(a => a.id === parseInt(req.params.id));
  if (index !== -1) {
    articles[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(articles[index]);
  } else {
    res.status(404).send('Not found');
  }
});

// DELETE
router.delete('/:id', (req, res) => {
  articles = articles.filter(a => a.id !== parseInt(req.params.id));
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;
