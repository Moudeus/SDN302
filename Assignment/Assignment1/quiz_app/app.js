const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const quizRoutes = require("./routes/quizRoutes");
const questionRoutes = require("./routes/questionRoutes");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// Kết nối MongoDB
connectDB();

// Routes
app.use("/api", quizRoutes);
app.use("/api", questionRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
