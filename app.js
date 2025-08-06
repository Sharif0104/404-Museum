// 404 Museum – app.js
// Loads entries.json, renders gallery, handles navigation, search, and filter

const ENTRIES_JSON = 'entries.json';
const GALLERY = document.getElementById('gallery');
const ROOM_NAV = document.getElementById('room-nav');
const CATEGORY_FILTER = document.getElementById('category-filter');
const SEARCH_INPUT = document.getElementById('search-input');
const NO_RESULTS = document.getElementById('no-results');

let entries = [];
let categories = [];
let currentCategory = '';

// Fetch entries.json and initialize
fetch(ENTRIES_JSON)
  .then(res => res.json())
  .then(data => {
    entries = data;
    categories = Array.from(new Set(entries.map(e => e.category))).sort();
    renderRoomNav();
    renderCategoryFilter();
    renderGallery();
  })
  .catch(() => {
    GALLERY.innerHTML = '<p style="color:var(--accent)">Failed to load gallery data.</p>';
  });

// Render navigation buttons for gallery rooms (categories)
function renderRoomNav() {
  ROOM_NAV.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.textContent = 'All';
  allBtn.className = currentCategory ? '' : 'active';
  allBtn.setAttribute('aria-pressed', !currentCategory);
  allBtn.onclick = () => { currentCategory = ''; renderGallery(); updateNav(); };
  ROOM_NAV.appendChild(allBtn);
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat;
    btn.className = currentCategory === cat ? 'active' : '';
    btn.setAttribute('aria-pressed', currentCategory === cat);
    btn.onclick = () => { currentCategory = cat; renderGallery(); updateNav(); };
    ROOM_NAV.appendChild(btn);
  });
}

function updateNav() {
  // Update nav button states
  Array.from(ROOM_NAV.children).forEach(btn => {
    if (!btn.textContent || btn.textContent === 'All') {
      btn.className = currentCategory ? '' : 'active';
      btn.setAttribute('aria-pressed', !currentCategory);
    } else {
      btn.className = btn.textContent === currentCategory ? 'active' : '';
      btn.setAttribute('aria-pressed', btn.textContent === currentCategory);
    }
  });
  // Also update filter dropdown
  CATEGORY_FILTER.value = currentCategory;
}

// Render filter dropdown
function renderCategoryFilter() {
  CATEGORY_FILTER.innerHTML = '<option value="">All Categories</option>';
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    CATEGORY_FILTER.appendChild(opt);
  });
}

// Main gallery rendering
function renderGallery() {
  let filtered = entries;
  const search = (SEARCH_INPUT.value || '').toLowerCase();
  if (currentCategory) filtered = filtered.filter(e => e.category === currentCategory);
  if (CATEGORY_FILTER.value) filtered = filtered.filter(e => e.category === CATEGORY_FILTER.value);
  if (search) {
    filtered = filtered.filter(e =>
      e.title.toLowerCase().includes(search) ||
      e.description.toLowerCase().includes(search) ||
      (e.category && e.category.toLowerCase().includes(search))
    );
  }
  GALLERY.innerHTML = '';
  if (!filtered.length) {
    NO_RESULTS.hidden = false;
    return;
  }
  NO_RESULTS.hidden = true;
  filtered.forEach(entry => {
    const card = document.createElement('article');
    card.className = 'gallery-card';
    card.tabIndex = 0;
    // Screenshot preview
    const img = document.createElement('img');
    img.src = entry.screenshot;
    img.alt = `Screenshot of ${entry.title} 404 page`;
    img.loading = 'lazy';
    card.appendChild(img);
    // Card content
    const content = document.createElement('div');
    content.className = 'card-content';
    const h3 = document.createElement('h3');
    h3.textContent = entry.title;
    content.appendChild(h3);
    const desc = document.createElement('p');
    desc.textContent = entry.description;
    content.appendChild(desc);
    const link = document.createElement('a');
    link.href = entry.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'View 404 Page →';
    content.appendChild(link);
    card.appendChild(content);
    GALLERY.appendChild(card);
  });
}

// Event listeners for search and filter
SEARCH_INPUT.addEventListener('input', renderGallery);
CATEGORY_FILTER.addEventListener('change', e => {
  currentCategory = e.target.value;
  renderGallery();
  updateNav();
});

// Keyboard accessibility: allow Enter/Space to activate nav buttons
ROOM_NAV.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.tagName === 'BUTTON') {
    e.target.click();
  }
});
