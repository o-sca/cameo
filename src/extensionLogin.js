const axios = require('axios');

async function extensionLoginRequest() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  const URL =
    'https://5d2e-2001-569-70c7-4300-8095-1aac-6db8-57ad.ngrok.io/api/v1/login';
  const options = {
    data: {
      username: username,
      password: password,
    },
  };

  let authenticated = true;

  if (authenticated) {
    localStorage.setItem('Username', options.data.username);
    localStorage.setItem('Authenticated', true);
    window.location.replace('popup.html');
  } else {
    alert('Please enter the correct login details!');
  }
}

document.addEventListener('DOMContentLoaded', async function () {
  var btn = document.getElementById('submitBtn');

  btn.addEventListener('click', extensionLoginRequest);
});