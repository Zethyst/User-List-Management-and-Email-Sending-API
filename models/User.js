const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  properties: Map,
});

module.exports = mongoose.model('User', UserSchema);
