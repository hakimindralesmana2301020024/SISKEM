document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  // Simulasi data pengguna
  const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
  ];

  const foundUser = users.find(user => user.username === username && user.password === password);

  if (foundUser) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', foundUser.role);
    localStorage.setItem('username', foundUser.username);

    if (foundUser.role === 'admin') {
      window.location.href = 'admin-dashboard.html';
    } else {
      window.location.href = 'dashboard.html';
    }
  } else {
    errorMsg.textContent = 'Username atau password salah!';
  }
});
