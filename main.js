// ─── Status line types itself out ─────────────────────────────────────────────
// On load, the "music incoming." text types itself one character at a time.

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


// ─── Signup ───────────────────────────────────────────────────────────────────

function handleSignup() {
  const email   = document.getElementById('email').value.trim();
  const confirm = document.getElementById('confirm');
  if (!email || !email.includes('@')) return;
  // TODO: wire up to a real email service (e.g. Mailchimp, Buttondown)
  confirm.classList.add('visible');
  document.getElementById('email').value = '';
}

document.getElementById('email').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSignup();
});
