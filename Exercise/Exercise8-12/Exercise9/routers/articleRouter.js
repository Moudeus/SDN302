const express = require("express");
const router = express.Router();
const { validateArticle, validateDateFormat, validateTextLength } = require("../middleware/articleMiddleware");

router.post("/articles", [validateArticle, validateDateFormat, validateTextLength], async (req, res, next) => {
  try {
    const { title, date, text } = req.body;
    res.status(201).json({ message: "Article saved successfully" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
