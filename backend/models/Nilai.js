// backend/models/Nilai.js
const mongoose = require('mongoose');

const NilaiSchema = new mongoose.Schema({
  siswa: String,
  pelajaran: String,
  nilai: Number,
});

module.exports = mongoose.model('Nilai', NilaiSchema);
