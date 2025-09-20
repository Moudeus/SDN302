const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// Lấy danh sách tất cả bài viết
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Lấy thông tin một bài viết theo ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Không tìm thấy bài viết" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Tạo mới một bài viết
router.post("/", async (req, res) => {
  const { title, content, author } = req.body;
  const post = new Post({ title, content, author });
  try {
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Cập nhật bài viết theo ID
router.put("/:id", async (req, res) => {
  const { title, content } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!updatedPost) return res.status(404).json({ message: "Không tìm thấy bài viết" });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Xóa bài viết theo ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: "Không tìm thấy bài viết" });
    res.json({ message: "Đã xóa bài viết" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
