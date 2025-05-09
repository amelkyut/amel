// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


// Inisialisasi aplikasi Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/akademi-elemental', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch((err) => console.error('MongoDB connection error:', err));

// Rute API
// Pastikan file auth.js dan nilai.js ada di folder routes
const authRoutes = require('./routes/auth');
const nilaiRoutes = require('./routes/nilai');

app.use('/auth', authRoutes);
app.use('/nilai', nilaiRoutes);

// Penyajian file statis dari folder frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rute fallback untuk SPA
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
