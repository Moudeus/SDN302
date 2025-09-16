const express = require('express');
const articleRouter = require('./routers/articleRouter');
const videoRouter = require('./routers/videoRouter');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/articles', articleRouter);
app.use('/videos', videoRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
