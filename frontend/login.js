// frontend/login.js
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const result = await response.json();

  if (result.success) {
    if (result.role === 'guru') {
      window.location.href = 'guru.html';
    } else {
      window.location.href = 'siswa.html?siswa=' + username;
    }
  } else {
    alert('Login gagal!');
  }
});
