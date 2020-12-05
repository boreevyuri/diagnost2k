const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  preview: {
    type: String,
  },
  content: {
    type: Array,
  },
});

module.exports = Content = mongoose.model('content', ContentSchema);
