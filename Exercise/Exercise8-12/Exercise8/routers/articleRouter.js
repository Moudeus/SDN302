const express = require("express");
const router = express.Router();

// Simulated article saving operation
router.post("/articles", async (req, res, next) => {
  try {
    const { title, date, text } = req.body;

    // Simulate article saving logic
    if (!title || !text || !date) {
      throw new Error("Missing required article fields");
    }

    res.status(201).json({ message: "Article saved successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
