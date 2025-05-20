// Proteksi halaman admin
if (localStorage.getItem('isLoggedIn') !== 'true' || localStorage.getItem('role') !== 'admin') {
  window.location.href = 'index.html';
}

function logout() {
  localStorage.clear();
  window.location.href = 'index.html';
}
