// ============================================================
//  URBANTIC — details-page.js  (Product / Detail Page)
//  data.js handles: populateDetailPage(), lightbox functions
//  This file handles: burger menu, page title, burger close on nav link
// ============================================================


// ── BURGER MENU ──────────────────────────────────────────────

const burger = document.getElementById('burger-btn');
const drawer = document.getElementById('mobile-drawer');

if (burger && drawer) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    drawer.classList.toggle('open');
  });

  // Close drawer when any nav link inside it is clicked
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      drawer.classList.remove('open');
    });
  });
}


// ── DYNAMIC PAGE TITLE ───────────────────────────────────────
// Runs after data.js has already set the property on the page.
// data.js sets document.title inside populateDetailPage(),
// but we also guard here in case the timing differs.

document.addEventListener('DOMContentLoaded', () => {
  const id = parseInt(localStorage.getItem('urbantic_selected_id'), 10);

  // PROPERTIES comes from data.js (loaded before this file)
  if (typeof PROPERTIES !== 'undefined' && id) {
    const p = PROPERTIES.find(x => x.id === id);
    if (p) {
      document.title = `URBANTIC | ${p.name}`;
    }
  }
});