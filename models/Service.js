const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  id: {
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
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Service = mongoose.model('service', ServiceSchema);
