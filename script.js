// Lenis Scroll ----------------------------------------------------------------------

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Featured Properties Section -------------------------------------------------------------

const properties = [
  {
    title: "Japanese Minka Townhouse",
    location: "New Town Central Road, Kolkata",
    beds: 3, baths: 2, sqft: 1800,
    price: "₹ 20,120", type: "rent",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80"
  },
  {
    title: "Modern Studio Apartment",
    location: "Salt Lake Sector V, Kolkata",
    beds: 1, baths: 1, sqft: 650,
    price: "₹ 12,500", type: "rent",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80"
  },
  {
    title: "Heritage Villa with Garden",
    location: "Alipore, Kolkata",
    beds: 5, baths: 4, sqft: 4200,
    price: "₹ 85,000", type: "sale",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
  },
  {
    title: "Cozy 2BHK Flat",
    location: "Tollygunge, Kolkata",
    beds: 2, baths: 1, sqft: 950,
    price: "₹ 18,000", type: "rent",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"
  },
  {
    title: "Penthouse with Terrace",
    location: "Park Street, Kolkata",
    beds: 4, baths: 3, sqft: 3100,
    price: "₹ 1,20,000", type: "new",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80"
  },
  {
    title: "Compact Office Space",
    location: "Rajarhat, Kolkata",
    beds: 0, baths: 2, sqft: 1100,
    price: "₹ 35,000", type: "sale",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
  }
];

const badgeMap = {
  rent: { cls: "badge-rent", label: "For Rent" },
  sale: { cls: "badge-sale", label: "For Sale" },
  new: { cls: "badge-new", label: "New Launch" }
};

const bedSVG = `<img class="meta-icon" src="./contents/img/bed-icon.png" alt="bed-Img">`;
const bathSVG = `<img class="meta-icon" src="./contents/img/bathroom-icon.png" alt="bath-Img">`;
const sqftSVG = `<img class="meta-icon" src="./contents/img/sqft-icon.png" alt="sqft-Img">`;

const grid = document.getElementById('listings');

properties.forEach(p => {
  const badge = badgeMap[p.type];
  const bedMeta = p.beds > 0
    ? `<div class="meta-item">${bedSVG} ${p.beds} Bedroom${p.beds > 1 ? 's' : ''}</div><div class="divider-line"></div>`
    : '';

  grid.innerHTML += `
    <div class="card">
      <img class="card-img" src="${p.image}" alt="${p.title}" onerror="this.src='https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80'"/>
      <span class="badge ${badge.cls}">${badge.label}</span>
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-location">
          <img class="pin" src="/contents/img/location-icon.png" alt="Location"> ${p.location}
        </div>
        <div class="card-meta">
          ${bedMeta}
          <div class="meta-item">${bathSVG} ${p.baths} Bathroom${p.baths > 1 ? 's' : ''}</div>
          <div class="divider-line"></div>
          <div class="meta-item">${sqftSVG} ${p.sqft.toLocaleString()} Sqft</div>
        </div>
        <div class="card-footer">
          <div class="price">${p.price}<span>/month</span></div>
          <a class="main-button" href="#">View Details</a>
        </div>
      </div>
    </div>`;
});


// Image slider -------------------------------------------------------------------------------------------

(function () {
  const section = document.getElementById('image-slideshows');

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

  // Build pool
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

  // Detect touch device
  const isTouchDevice = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  // ─── DESKTOP: Mouse trail ──────────────────────────────────────
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

    gsap.set(el, {
      x: posX,
      y: posY,
      opacity: 0,
      scale: 0.8,
      rotation: rotation,
      zIndex: 100 + poolIndex
    });

    gsap.to(el, {
      opacity: 1,
      scale: 1,
      duration: 0.22,
      ease: 'power2.out',
    });

    gsap.to(el, {
      y: posY - 35,
      opacity: 0,
      scale: 0.88,
      duration: 1.1,
      delay: 0.28,
      ease: 'power3.in',
    });
  }

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

  // ─── MOBILE / TABLET: Auto-floating images ─────────────────────
  let autoInterval = null;

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }

  function spawnAutoImage() {
    const el = pool[poolIndex % pool.length];
    poolIndex++;

    const secW = section.offsetWidth;
    const secH = section.offsetHeight;
    const { w, h } = getImgSize();

    // Random position across the full section with some padding
    const pad = 30;
    const posX = randomBetween(pad, secW - w - pad);
    const posY = randomBetween(pad, secH - h - pad);
    const rotation = (Math.random() - 0.5) * 22;

    gsap.killTweensOf(el);

    gsap.set(el, {
      x: posX,
      y: posY,
      opacity: 0,
      scale: 0.75,
      rotation: rotation,
      zIndex: 100 + poolIndex
    });

    // Float in
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
    });

    // Hold then float up and fade
    gsap.to(el, {
      y: posY - 50,
      opacity: 0,
      scale: 0.9,
      duration: 1.6,
      delay: 0.8,
      ease: 'power2.inOut',
    });
  }

  function startAutoFloat() {
    if (autoInterval) return;
    // Fire a few immediately so section isn't empty
    spawnAutoImage();
    setTimeout(spawnAutoImage, 300);
    setTimeout(spawnAutoImage, 600);
    // Then keep spawning
    autoInterval = setInterval(spawnAutoImage, 900);
  }

  function stopAutoFloat() {
    if (autoInterval) {
      clearInterval(autoInterval);
      autoInterval = null;
    }
  }

  // Update hint text for touch users
  function updateHints() {
    const hint = document.getElementById('trail-hint-text');
    const bottomHint = document.getElementById('bottom-hint');
    if (isTouchDevice()) {
      if (hint) hint.textContent = 'Sit back and explore';
      if (bottomHint) bottomHint.textContent = 'Swipe up to continue';
    }
  }

  // Use IntersectionObserver to start/stop auto-float
  // when section is visible (saves battery when scrolled away)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && isTouchDevice()) {
        startAutoFloat();
      } else {
        stopAutoFloat();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(section);

  // Also start immediately if already touch + visible
  updateHints();
  if (isTouchDevice()) startAutoFloat();

})();

// catagories -----------------------------------------------------------------------------------------------------------------------------------

const properties_for_ctg = [
  {
    title: "Japanese Minka Townhouse",
    location: "New Town Central Road, Kolkata",
    beds: 2, baths: 3, sqft: 2500,
    price: "₹ 20,120", type: "rent",
    category: "all",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80"
  },
  {
    title: "Japanese Minka Shop Buy",
    location: "New Town Central Road, Kolkata",
    beds: 2, baths: 3, sqft: 2500,
    price: "₹ 20,120", type: "sale",
    category: "all",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"
  },
  {
    title: "Japanese Minka Shop Buy",
    location: "New Town Central Road, Kolkata",
    beds: 2, baths: 3, sqft: 2500,
    price: "₹ 20,120", type: "rent",
    category: "all",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80"
  },
  {
    title: "Luxury Villa with Pool",
    location: "Alipore, Kolkata",
    beds: 5, baths: 4, sqft: 4500,
    price: "₹ 85,000", type: "sale",
    category: "villa",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80"
  },
  {
    title: "Spacious Garden Villa",
    location: "Ballygunge, Kolkata",
    beds: 4, baths: 3, sqft: 3800,
    price: "₹ 65,000", type: "rent",
    category: "villa",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80"
  },
  {
    title: "Modern Heritage Villa",
    location: "Jodhpur Park, Kolkata",
    beds: 6, baths: 5, sqft: 5200,
    price: "₹ 1,10,000", type: "sale",
    category: "villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80"
  },
  {
    title: "Cozy 2BHK Apartment",
    location: "Salt Lake Sector V, Kolkata",
    beds: 2, baths: 1, sqft: 950,
    price: "₹ 18,000", type: "rent",
    category: "2bhk",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80"
  },
  {
    title: "Modern 2BHK Flat",
    location: "Tollygunge, Kolkata",
    beds: 2, baths: 2, sqft: 1100,
    price: "₹ 22,000", type: "rent",
    category: "2bhk",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80"
  },
  {
    title: "Furnished 2BHK Studio",
    location: "Rajarhat, Kolkata",
    beds: 2, baths: 1, sqft: 880,
    price: "₹ 15,500", type: "rent",
    category: "2bhk",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80"
  },
  {
    title: "Spacious 3BHK Apartment",
    location: "Park Street, Kolkata",
    beds: 3, baths: 2, sqft: 1600,
    price: "₹ 38,000", type: "rent",
    category: "3bhk",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
  },
  {
    title: "Premium 3BHK Penthouse",
    location: "Elgin Road, Kolkata",
    beds: 3, baths: 3, sqft: 2100,
    price: "₹ 55,000", type: "sale",
    category: "3bhk",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80"
  },
  {
    title: "3BHK Corner Flat",
    location: "Behala, Kolkata",
    beds: 3, baths: 2, sqft: 1450,
    price: "₹ 29,000", type: "rent",
    category: "3bhk",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"
  },
  {
    title: "Prime Office Space",
    location: "Sector V, Salt Lake, Kolkata",
    beds: 0, baths: 2, sqft: 1800,
    price: "₹ 45,000", type: "rent",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
  },
  {
    title: "Retail Shop Ground Floor",
    location: "Gariahat, Kolkata",
    beds: 0, baths: 1, sqft: 650,
    price: "₹ 28,000", type: "rent",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
  },
  {
    title: "Corporate Office Suite",
    location: "New Town, Kolkata",
    beds: 0, baths: 3, sqft: 3200,
    price: "₹ 90,000", type: "sale",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=600&q=80"
  },
  {
    title: "New Launch Tower A",
    location: "Action Area II, Kolkata",
    beds: 3, baths: 2, sqft: 1500,
    price: "₹ 42,000", type: "new",
    category: "new",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80"
  },
  {
    title: "New Project Sky Residency",
    location: "Rajarhat, Kolkata",
    beds: 4, baths: 3, sqft: 2200,
    price: "₹ 68,000", type: "new",
    category: "new",
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=600&q=80"
  },
  {
    title: "Grand New Launch Villas",
    location: "EM Bypass, Kolkata",
    beds: 5, baths: 4, sqft: 3600,
    price: "₹ 95,000", type: "new",
    category: "new",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80"
  },
];

const ctgGrid = document.getElementById('grid');

function renderCards(filter) {
  ctgGrid.innerHTML = '';
  const filtered = filter === 'all'
    ? properties_for_ctg
    : properties_for_ctg.filter(p => p.category === filter);

  filtered.forEach(p => {
    const badge = badgeMap[p.type];
    const bedMeta = p.beds > 0
      ? `<div class="meta-item">${bedSVG} ${p.beds} Bedroom${p.beds > 1 ? 's' : ''}</div><div class="divider-line"></div>`
      : '';

    const priceLabel = p.type === 'rent' ? '/month' : '';

    ctgGrid.innerHTML += `
      <div class="card">
        <img class="card-img" src="${p.image}" alt="${p.title}" onerror="this.src='https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80'"/>
        <span class="badge ${badge.cls}">${badge.label}</span>
        <div class="card-body">
          <div class="card-title">${p.title}</div>
          <div class="card-location">
            <img class="pin" src="./contents/img/location-icon.png" alt="Location"> ${p.location}
          </div>
          <div class="card-meta">
            ${bedMeta}
              <div class="meta-item">${bathSVG} ${p.baths} Bathroom${p.baths > 1 ? 's' : ''}</div>
              <div class="divider-line"></div>
              <div class="meta-item">${sqftSVG} ${p.sqft.toLocaleString()} Sqft</div>
          </div>
          <div class="card-footer">
          <div class="price">${p.price}<span>/month</span></div>
          <a class="main-button" href="#">View Details</a>
        </div>
      </div>
    </div>`;
  });
}

// Tab switching
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderCards(tab.dataset.filter);
  });
});

// Initial render
renderCards('all');