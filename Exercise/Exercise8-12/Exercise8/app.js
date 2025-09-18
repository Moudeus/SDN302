const express = require("express");
const app = express();
const port = 3000;
const articleRouter = require("./routers/articleRouter");
const videoRouter = require("./routers/videoRouter");

// Middleware to parse JSON body
app.use(express.json());

// Use routers
app.use("/api", articleRouter); // Prefix /api for article routes
app.use("/api", videoRouter); // Prefix /api for video routes

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).json({ error: "An error occurred, please try again later." });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
