const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  preview: {
    type: String,
  },
  content: {
    type: Array,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model('post', PostSchema);
