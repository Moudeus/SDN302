const express = require("express");
const router = express.Router();

// Simulated video saving operation
router.post("/videos", async (req, res, next) => {
  try {
    const { title, duration, url } = req.body;

    // Simulate video saving logic
    if (!title || !duration || !url) {
      throw new Error("Missing required video fields");
    }

    res.status(201).json({ message: "Video saved successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
