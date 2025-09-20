const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// Kết nối MongoDB
connectDB();

// Routes
app.use("/api/user", userRoutes);
app.use("/api/appointment", appointmentRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
