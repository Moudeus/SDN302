const express = require('express');
let videos = require('../videos');

const router = express.Router();

// GET all
router.get('/', (req, res) => {
  res.json(videos);
});

// GET by ID
router.get('/:id', (req, res) => {
  const video = videos.find(v => v.id === parseInt(req.params.id));
  video ? res.json(video) : res.status(404).send('Not found');
});

// POST new
router.post('/', (req, res) => {
  const newVideo = { id: videos.length + 1, ...req.body };
  videos.push(newVideo);
  res.status(201).json(newVideo);
});

// PUT update
router.put('/:id', (req, res) => {
  const index = videos.findIndex(v => v.id === parseInt(req.params.id));
  if (index !== -1) {
    videos[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(videos[index]);
  } else {
    res.status(404).send('Not found');
  }
});

// DELETE
router.delete('/:id', (req, res) => {
  videos = videos.filter(v => v.id !== parseInt(req.params.id));
  res.json({ message: 'Deleted successfully' });
});

module.exports = router;
