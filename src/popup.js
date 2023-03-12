const button = document.getElementById('open-cameo');

const userName = localStorage.getItem('Username');
const authenticated = localStorage.getItem('Authenticated');

if (authenticated) {
  window.location.replace('popup.html');
} else {
  window.location.replace('login.html');
}
