const button = document.getElementById('open-cameo');
const userName = localStorage.getItem('Username');
const authenticated = localStorage.getItem('Authenticated');

if (authenticated) {
  document.getElementById('check').innerHTML = `   
  <div class="container"> 
  <div class="header"> 
    <div class="logo">
      <img src="icons/cameo-logo-minified.svg" alt="Cameo logo"> 
    </div> 
    <h1 class="p">Track your job search with ease &nbsp;📝</h1> 
    <hr>
  </div>
  <div class="how-it-works">
    <h2>How it works:</h2>
    <p>Simply click the Cameo icon next to a job posting and it'll automatically be saved to your Cameo Sheet &nbsp;🤟</p>
  </div>
  <div class="cameo-button">
    <button id="open-cameo">Open Cameo &nbsp;▸</button>
  </div>
  <div class="footer">
    <hr>
    <p class="copyright">© 2023 Cameo Inc. All rights reserved.</p>
  </div>
</div>`;
} else {
  document.getElementById('check').innerHTML = `
    <div class="container">
      <div class="header">
        <div class="logo">
          <img src="icons/cameo-logo-minified.svg" alt="Cameo logo" style="margin-bottom: 4rem;">
        </div>

        <div style="margin: 0 auto;">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" style="margin-bottom: 1rem;" required>
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" style="margin-bottom: 1rem;" required>
            
            <div class="cameo-button" style="padding:1rem; display:block; margin-top:2rem; margin-bottom: 4rem;">
                <button id="submitBtn" value="Log in">Log in &nbsp;</button>
            </div>
        </div>
    
      <div class="footer">
        <hr>
        <p class="copyright">© 2023 Cameo Inc. All rights reserved.</p>
      </div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', async function() {
  const button = document.getElementById("open-cameo");
  if (button) {
    button.addEventListener('click', () => {
      chrome.tabs.create({ url: 'http://localhost:3000/', active: true });
    });
  }
})
