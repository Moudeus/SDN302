const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const postRoutes = require('./routes/posts');
//const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Kết nối MongoDB
connectDB();

// Routes
app.use('/api/post', postRoutes);
//app.use('/api/user', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
