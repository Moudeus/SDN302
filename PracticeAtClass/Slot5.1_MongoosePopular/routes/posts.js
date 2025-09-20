const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Post');

// POST: Tạo User mới
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
});

// POST: Tạo Post mới (gắn với User)
router.post('/posts', async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
});

// GET: Lấy danh sách Post và populate User
router.get('/posts', async (req, res) => {
    const posts = await Post.find().populate('author', 'name email'); // Populate với select các trường cụ thể
    res.json(posts);
});

module.exports = router;
