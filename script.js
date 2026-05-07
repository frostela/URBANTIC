// ============================================================
//  URBANTIC — script.js  (Home Page)
//  Card rendering & filter tabs are handled by data.js
//  This file: Lenis, burger menu, image slideshow
// ============================================================


// ── LENIS SMOOTH SCROLL ──────────────────────────────────────

const lenis = new Lenis({ autoRaf: true });


// ── BURGER MENU ──────────────────────────────────────────────

const burger = document.getElementById('burger-btn');
const drawer = document.getElementById('mobile-drawer');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  drawer.classList.toggle('open');
});


// ── IMAGE SLIDESHOW (cursor trail) ───────────────────────────

(function () {
  const section = document.getElementById('image-slideshows');
  if (!section) return;

  const imageSrcs = [
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
    "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80",
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=600&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=600&q=80",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  ];

  // Build image pool
  const pool = [];
  imageSrcs.forEach((src) => {
    const img = document.createElement('img');
    img.className = 'trail-img';
    img.src = src;
    img.style.top = '0';
    img.style.left = '0';
    section.appendChild(img);
    pool.push(img);
  });

  const isTouchDevice = () => navigator.maxTouchPoints > 0 || ('ontouchstart' in window);

  let poolIndex = 0;
  let lastX = 0, lastY = 0, lastTime = 0;
  const DISTANCE_THRESHOLD = 80;
  const TIME_THRESHOLD = 90;

  function getImgSize() {
    return window.innerWidth <= 600
      ? { w: 140, h: 180 }
      : { w: 220, h: 280 };
  }

  function spawnAt(x, y) {
    const el = pool[poolIndex % pool.length];
    poolIndex++;

    const { w, h } = getImgSize();
    const rotation = (Math.random() - 0.5) * 20;
    const posX = x - w / 2;
    const posY = y - h / 2;

    gsap.killTweensOf(el);
    gsap.set(el, { x: posX, y: posY, opacity: 0, scale: 0.8, rotation, zIndex: 100 + poolIndex });
    gsap.to(el, { opacity: 1, scale: 1, duration: 0.22, ease: 'power2.out' });
    gsap.to(el, { y: posY - 35, opacity: 0, scale: 0.88, duration: 1.1, delay: 0.28, ease: 'power3.in' });
  }

  // Desktop: mouse trail
  section.addEventListener('mousemove', (e) => {
    if (isTouchDevice()) return;
    const rect = section.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const dx = mouseX - lastX;
    const dy = mouseY - lastY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const now = Date.now();

    if (dist > DISTANCE_THRESHOLD && now - lastTime > TIME_THRESHOLD) {
      spawnAt(mouseX, mouseY);
      lastX = mouseX;
      lastY = mouseY;
      lastTime = now;
    }
  });

  // Mobile: auto-floating images
  let autoInterval = null;

  function randomBetween(a, b) { return a + Math.random() * (b - a); }

  function spawnAutoImage() {
    const secW = section.offsetWidth;
    const secH = section.offsetHeight;
    const { w, h } = getImgSize();
    const pad = 30;
    const x = randomBetween(pad + w / 2, secW - pad - w / 2);
    const y = randomBetween(pad + h / 2, secH - pad - h / 2);
    spawnAt(x, y);
  }

  function startAutoFloat() {
    if (autoInterval) return;
    spawnAutoImage();
    setTimeout(spawnAutoImage, 300);
    setTimeout(spawnAutoImage, 600);
    autoInterval = setInterval(spawnAutoImage, 900);
  }

  function stopAutoFloat() {
    if (autoInterval) { clearInterval(autoInterval); autoInterval = null; }
  }

  // Update hint text
  const hintText   = document.getElementById('trail-hint-text');
  const bottomHint = document.getElementById('bottom-hint');
  if (isTouchDevice()) {
    if (hintText)   hintText.textContent   = 'Sit back and explore';
    if (bottomHint) bottomHint.textContent = 'Swipe up to continue';
  }

  // Pause when off-screen (saves battery on mobile)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (isTouchDevice()) {
        if (entry.isIntersecting) startAutoFloat();
        else stopAutoFloat();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);

  if (isTouchDevice()) startAutoFloat();

})();