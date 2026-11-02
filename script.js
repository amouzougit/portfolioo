'use strict';
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('kevoamouzou@gmail.com');
    copyStatus.textContent = 'Adresse copiée.';
  } catch {
    copyStatus.textContent = 'Écrivez à kevoamouzou@gmail.com ou utilisez le lien ci-dessus.';
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
