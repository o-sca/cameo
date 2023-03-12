
const button = document.getElementById('open-cameo');

button.addEventListener('click', () => {
  chrome.tabs.create({ url: 'https://www.youtube.com/' });
});
