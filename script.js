'use strict';
const data = window.SITE_DATA || {};
document.querySelectorAll('[data-name]').forEach(el => { if (data.name) el.textContent = data.name; });
if (data.bio) document.querySelector('[data-bio]').textContent = data.bio;
document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu');
const nav = document.getElementById('navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
const email = String(data.email || '').trim();
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  const link = document.getElementById('email-link');
  link.href = 'mailto:' + encodeURIComponent(email) + '?subject=' + encodeURIComponent('Rozmowa o Ethereum — CryptoServing');
  link.hidden = false;
  document.getElementById('contact-description').textContent = email;
  const copy = document.getElementById('copy-email');
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    const status = document.getElementById('contact-status');
    try { await navigator.clipboard.writeText(email); status.textContent = 'Adres skopiowany.'; }
    catch { status.textContent = 'Zaznacz i skopiuj adres widoczny powyżej.'; }
  });
}
