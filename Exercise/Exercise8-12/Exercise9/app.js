const express = require("express");
const app = express();
const port = 3000;
const articleRouter = require("./routers/articleRouter");

app.use(express.json()); // Middleware để parse JSON
app.use("/api", articleRouter); // Gắn router với tiền tố /api

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "An error occurred, please try again later." });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
