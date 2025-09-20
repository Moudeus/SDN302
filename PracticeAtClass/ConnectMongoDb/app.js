const express = require("express");
const connectDB = require("./config/database");
const postsRouter = require("./routes/posts");

require("dotenv").config();

const app = express();

// Kết nối cơ sở dữ liệu MongoDB
connectDB();

// Middleware để parse JSON
app.use(express.json());

// Định tuyến cho các bài viết
app.use("/api/posts", postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
