// backend/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String, // 'guru' atau 'siswa'
});

module.exports = mongoose.model('User', UserSchema);
