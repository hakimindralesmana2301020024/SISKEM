// Cek login
if (localStorage.getItem('isLoggedIn') !== 'true') {
  window.location.href = 'index.html';
}

// Fungsi logout
function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'index.html';
}

// Tangani Form Pengaduan
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('pengaduanForm');
  const list = document.getElementById('listPengaduan');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const judul = document.getElementById('judul').value;
    const deskripsi = document.getElementById('deskripsi').value;

    const item = document.createElement('div');
    item.classList.add('mt-3', 'p-3', 'border', 'rounded');
    item.innerHTML = `<strong>${judul}</strong><p>${deskripsi}</p>`;

    list.prepend(item);
    form.reset();
  });
});
