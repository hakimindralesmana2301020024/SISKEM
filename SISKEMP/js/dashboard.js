// Cek login
if (localStorage.getItem('isLoggedIn') !== 'true') {
  window.location.href = 'index.html';
}

// Logout
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  window.location.href = 'index.html';
}

// Ucapan selamat datang
const username = localStorage.getItem('username') || 'Pengguna';
document.getElementById('welcomeMsg').textContent = `Selamat datang, ${username}!`;

// Data dummy pengaduan user
const dummyPengaduan = [
  { judul: 'Lampu Padam', deskripsi: 'Lampu di lorong A tidak menyala', status: 'Diproses' },
  { judul: 'Air Mati', deskripsi: 'Tidak ada air di toilet lantai 3', status: 'Selesai' }
];

const riwayatContainer = document.getElementById('riwayatPengaduan');

dummyPengaduan.forEach(p => {
  const div = document.createElement('div');
  div.classList.add('card', 'mb-3');
  div.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${p.judul}</h5>
      <p class="card-text">${p.deskripsi}</p>
      <span class="badge bg-${p.status === 'Selesai' ? 'success' : 'warning'}">${p.status}</span>
    </div>
  `;
  riwayatContainer.appendChild(div);
});
