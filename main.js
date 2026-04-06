const statusEl = document.getElementById('status');
const statusText = 'musik på väg.';
statusEl.textContent = '';

let i = 0;
function typeStatus() {
  if (i < statusText.length) {
    statusEl.textContent += statusText[i];
    i++;
    setTimeout(typeStatus, 60 + Math.random() * 80);
  }
}
setTimeout(typeStatus, 900);
