const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' } // Tham chiếu tới User
});

module.exports = mongoose.model('Post', postSchema);
