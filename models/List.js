const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  customProperties: [{ title: String, fallback: String }],
});

module.exports = mongoose.model('List', ListSchema);
