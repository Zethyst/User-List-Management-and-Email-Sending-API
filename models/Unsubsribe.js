const mongoose = require('mongoose');

const UnsubscribeSchema = new mongoose.Schema({
  email: { type: String, required: true },
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true },
});

module.exports = mongoose.model('Unsubscribe', UnsubscribeSchema);
