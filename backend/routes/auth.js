// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Dummy login (belum pake hash)
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });
  if (user) {
    res.json({ success: true, role: user.role });
  } else {
    res.json({ success: false, message: 'Login gagal' });
  }
});

// Register (tambah user baru)
router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  const newUser = new User({ username, password, role });
  await newUser.save();
  res.json({ success: true });
});

// ⬇️ Pindahin ke paling bawah
module.exports = router;
