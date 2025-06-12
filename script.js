function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}
function closePopup() {
  document.getElementById('announcement-popup').style.display = 'none';
  sessionStorage.setItem('seenPopup', 'true');
}
function toggleLogin() {
  const username = prompt('Username:');
  const password = prompt('Password:');
  if (username === 'admin' && password === 'password') {
    document.getElementById('privateContent').style.display = 'block';
  } else {
    alert('Access denied!');
  }
}
window.onload = function() {
  if (!sessionStorage.getItem('seenPopup')) {
    document.getElementById('announcement-popup').style.display = 'block';
  }
};
