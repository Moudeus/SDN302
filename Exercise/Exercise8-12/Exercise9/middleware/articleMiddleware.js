// middleware/articleMiddleware.js
const validateArticle = (req, res, next) => {
  const { title, date, text } = req.body;
  if (!title || !date || !text) {
    return res.status(400).json({ error: "All fields (title, date, text) are required" });
  }
  if (title.length < 3) {
    return res.status(400).json({ error: "Title must be at least 3 characters long" });
  }
  next();
};

const validateDateFormat = (req, res, next) => {
  const { date } = req.body;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    return res.status(400).json({ error: "Date must be in YYYY-MM-DD format" });
  }
  next();
};

const validateTextLength = (req, res, next) => {
  const { text } = req.body;
  if (text.length < 10) {
    return res.status(400).json({ error: "Text must be at least 10 characters long" });
  }
  next();
};

module.exports = { validateArticle, validateDateFormat, validateTextLength };
