const axios = require('axios');

async function extensionLoginRequest() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  console.log(username);
  alert(username);

  const URL = '';
  const options = {
    data: {
      username: username,
      password: password,
    },
  };

  //const { data } = await axios.post(URL, options);

  //placeholder, will use if the authenticated status is true to evaluate.
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
  console.log(btn);

  btn.addEventListener('click', extensionLoginRequest);
});
