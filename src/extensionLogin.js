const axios = require('axios');

async function extensionLoginRequest() {
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  console.log(username, password);
}

document.addEventListener('DOMContentLoaded', async function () {
  var btn = document.getElementById('submitBtn');
  btn.addEventListener('click', function () {
    alert('button clicked');
  });
});
