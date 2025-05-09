// backend/routes/nilai.js
const express = require('express');
const router = express.Router();
const Nilai = require('../models/Nilai');

// Input nilai oleh guru
router.post('/input', async (req, res) => {
  const { siswa, pelajaran, nilai } = req.body;
  const newNilai = new Nilai({ siswa, pelajaran, nilai });
  await newNilai.save();
  res.json({ success: true });
});

// Lihat nilai oleh siswa
router.get('/:siswa', async (req, res) => {
  const nilai = await Nilai.find({ siswa: req.params.siswa });
  res.json(nilai);
});

module.exports = router;
