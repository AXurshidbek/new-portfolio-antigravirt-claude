/* =========================================================================
   Abdubannobov Xurshidbek — Portfolio Application Logic
   ========================================================================= */

/* --- SVG Icons --- */
const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 7.78l-2.03 9.56c-.15.68-.55.85-1.12.53l-3.1-2.29-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.17 5.77-5.21c.25-.22-.05-.35-.39-.12l-7.14 4.49-3.07-.96c-.67-.21-.68-.67.14-.99l12.01-4.63c.56-.21 1.05.13.84.94z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.5h3.3l-7.2 8.23L23 21.5h-6.63l-5.2-6.8-5.94 6.8H2l7.7-8.8L1.4 2.5h6.8l4.7 6.2 5.34-6.2Zm-1.16 17h1.83L6.98 4.4H5.02l12.06 15.1Z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/></svg>',
  website: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.6 3.6 5.7 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.7-3.6-9s1.2-6.4 3.6-9Z"/></svg>',
  resume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.8 3a2 2 0 0 1-.5 2.1L8 10.2a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.5c1 .4 2 .7 3 .8a2 2 0 0 1 1.7 2Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
};

function socialIcon(key) { return ICONS[key] || ICONS.website; }

/* --- Default Content Data --- */
const DEFAULTS = {
  personal: {
    name: "Xurshidbek Abdubannobov",
    firstName: "Xurshidbek",
    lastName: "Abdubannobov",
    brand: "X. BEK",
    title: "Backend Developer | Python & Django Engineer",
    tagline: "I build scalable backend systems, REST APIs, and high-performance web applications using Python, Django, DRF, FastAPI, and PostgreSQL.",
    availability: "Open to Work",
    bioLead: "Backend Developer with over 2 years of experience building scalable backend systems, REST APIs, and web applications.",
    bio: "I'm a Backend Developer with over 2 years of experience building scalable backend systems, REST APIs, and web applications using Python, Django, Django REST Framework, FastAPI, and PostgreSQL. I enjoy solving complex problems, designing clean architectures, and building products that create real value.\n\nBesides software development, I mentor backend students and have helped many aspiring developers improve their programming skills. I have solved 300+ LeetCode problems and actively participate in startup projects and hackathons.",
    location: "Fergana, Uzbekistan",
    email: "abdubannobovx@gmail.com",
    phone: "+998 90 000 00 00",
    photoUrl: "assets/logo.jpg",
    yearsExperience: "2+",
    availableFor: "Open to Work",
    languages: "Uzbek, English",
    socials: {
      github: "https://github.com/AXurshidbek",
      linkedin: "https://linkedin.com/in/AXurshidbek",
      telegram: "https://t.me/A_Xurshidbek",
      email: "mailto:abdubannobovx@gmail.com",
      website: "https://www.fargoniy.uz/",
      resume: ""
    }
  },
  education: [
    { id: "e1", degree: "Bachelor of Digital Economy", institution: "Fergana State Technical University", location: "Fergana, Uzbekistan", start: "2022", end: "2026 (Expected)", description: "Focusing on digital economic systems, software engineering, software architecture, algorithms, and modern backend web technologies." }
  ],
  experience: [
    { id: "x1", role: "Backend Developer", company: "Software Development", location: "Fergana, Uzbekistan", start: "2024", end: "Present", current: true, description: "Building scalable backend architectures, high-throughput REST APIs, and optimized database systems using Python, Django, DRF, FastAPI, and PostgreSQL.", bullets: ["Architected scalable RESTful microservices and backend infrastructure using Python, Django REST Framework, and FastAPI", "Optimized complex PostgreSQL database queries and schemas for high performance", "Configured Redis caching, authentication systems, and Docker containerized deployments"] },
    { id: "x2", role: "Backend Mentor", company: "Codial IT Academy", location: "Fergana, Uzbekistan", start: "2024", end: "Present", current: true, description: "Mentoring backend development students and helping aspiring developers master Python, Django, and clean API design.", bullets: ["Guided students through real-world backend projects and software architecture best practices", "Taught REST API design, database modeling, and Git version control workflows", "Evaluated student code reviews and helped developers refine technical problem-solving skills"] },
    { id: "x3", role: "Mathematics Teacher", company: "Educational Institution", location: "Fergana, Uzbekistan", start: "2023", end: "2024", current: false, description: "1 year experience teaching mathematics and analytical problem-solving logic.", bullets: ["Developed structured mathematical curricula and problem-solving methodologies", "Helped students build strong logical reasoning and algorithm fundamentals"] }
  ],
  projects: [
    { id: "p1", title: "KarvonSaroy", description: "A comprehensive web platform for logistics and trade management with high-throughput backend architecture.", metric: "Scalable REST APIs & PostgreSQL Integration", tags: ["Python", "Django", "Django REST Framework", "PostgreSQL"], demoUrl: "https://example.com/karvonsaroy-demo", repoUrl: "https://github.com/AXurshidbek/karvonsaroy", featured: true },
    { id: "p2", title: "CashVision", description: "Financial tracking and analytics system with real-time reporting and secure transaction authorization.", metric: "Real-time Financial Analytics Engine", tags: ["FastAPI", "Python", "PostgreSQL", "Redis"], demoUrl: "https://example.com/cashvision-demo", repoUrl: "https://github.com/AXurshidbek/cashvision", featured: true },
    { id: "p3", title: "AdVista", description: "Digital advertisement management and targeting engine built for fast API response times.", metric: "High-concurrency RESTful API architecture", tags: ["Django", "DRF", "Redis", "Docker"], demoUrl: "https://example.com/advista-demo", repoUrl: "https://github.com/AXurshidbek/advista", featured: false },
    { id: "p4", title: "InvestorOS", description: "An investment management platform allowing investors to track assets, returns, and portfolio distributions.", metric: "Secure Multi-tenant Backend System", tags: ["Python", "FastAPI", "PostgreSQL", "System Design"], demoUrl: "https://example.com/investoros-demo", repoUrl: "https://github.com/AXurshidbek/investoros", featured: false },
    { id: "p5", title: "Multi Store E-commerce Platform", description: "Multi-tenant e-commerce system supporting multiple vendor storefronts, dynamic inventory, and checkout.", metric: "Multi-vendor Architecture & High Availability", tags: ["Django REST Framework", "PostgreSQL", "Redis", "Docker"], demoUrl: "https://example.com/multistore-demo", repoUrl: "https://github.com/AXurshidbek/multistore-ecommerce", featured: false }
  ],
  competency: {
    hard: [
      { id: "h1", name: "Python", level: 95 },
      { id: "h2", name: "Django", level: 92 },
      { id: "h3", name: "Django REST Framework", level: 90 },
      { id: "h4", name: "FastAPI", level: 88 },
      { id: "h5", name: "PostgreSQL", level: 88 },
      { id: "h6", name: "SQLite", level: 85 },
      { id: "h7", name: "Redis", level: 82 },
      { id: "h8", name: "Docker", level: 80 },
      { id: "h9", name: "Git", level: 90 },
      { id: "h10", name: "GitHub", level: 90 },
      { id: "h11", name: "Linux", level: 85 },
      { id: "h12", name: "REST API", level: 92 },
      { id: "h13", name: "Authentication", level: 90 },
      { id: "h14", name: "Authorization", level: 90 },
      { id: "h15", name: "System Design", level: 85 }
    ],
    soft: [
      { id: "s1", name: "Problem Solving" },
      { id: "s2", name: "Leadership" },
      { id: "s3", name: "Communication" },
      { id: "s4", name: "Mentoring" },
      { id: "s5", name: "Critical Thinking" },
      { id: "s6", name: "Fast Learning" },
      { id: "s7", name: "Teamwork" },
      { id: "s8", name: "Time Management" }
    ]
  },
  blog: [
    { id: "b1", title: "Solving 300+ LeetCode Problems: Key Backend Insights", date: "2026-06-10", tags: ["Algorithms", "Problem Solving"], excerpt: "Lessons learned from solving 300+ algorithmic challenges and how data structures directly inform backend system design.", content: "Solving over 300 algorithm problems on LeetCode transformed the way I think about software performance and memory management in production systems.\n\nIn backend engineering with Python and Django, understanding time and space complexity isn't just academic — it's the difference between a query taking 5 seconds or 50 milliseconds. Optimized data structures directly improve database index usage, caching strategy, and API response times." },
    { id: "b2", title: "Building Scalable REST APIs with Django & FastAPI", date: "2026-04-15", tags: ["Backend", "Python"], excerpt: "Comparing Django REST Framework and FastAPI for microservices, asynchronous execution, and database ORMs.", content: "When constructing backend systems, choosing between Django REST Framework and FastAPI depends on project requirements, ORM needs, and async concurrency.\n\nWhile DRF provides rapid scaffolding and powerful built-in ORM tools, FastAPI excels at high-concurrency async endpoints. In multi-tenant systems, combining robust PostgreSQL schema design with Redis caching yields resilient backend architectures." },
    { id: "b3", title: "Mentoring Next-Gen Backend Developers", date: "2026-02-20", tags: ["Mentoring", "Education"], excerpt: "What teaching at Codial IT Academy taught me about clean code, documentation, and engineering leadership.", content: "Teaching backend development at Codial IT Academy reinforced a fundamental principle: if you can't explain a software architecture concept simply, you don't understand it deeply enough.\n\nHelping aspiring engineers master Django, REST APIs, and database migrations improved my own code review standards and communication skills as a developer." }
  ],
  contact: {
    lead: "Reach out directly, or use the form — I read every message myself.",
    email: "abdubannobovx@gmail.com",
    phone: "+998 90 000 00 00",
    location: "Fergana, Uzbekistan — remote-friendly",
    socials: {
      github: "https://github.com/AXurshidbek",
      linkedin: "https://linkedin.com/in/AXurshidbek",
      telegram: "https://t.me/A_Xurshidbek",
      email: "mailto:abdubannobovx@gmail.com",
      website: "https://www.fargoniy.uz/",
      resume: ""
    }
  },
  admin: { password: "admin123" }
};

const clone = (o) => JSON.parse(JSON.stringify(o));

/* --- State --- */
const STATE = {
  personal: clone(DEFAULTS.personal),
  education: clone(DEFAULTS.education),
  experience: clone(DEFAULTS.experience),
  projects: clone(DEFAULTS.projects),
  competency: clone(DEFAULTS.competency),
  blog: clone(DEFAULTS.blog),
  contact: clone(DEFAULTS.contact),
  admin: clone(DEFAULTS.admin)
};

/* --- Cloud Storage & Sync Engine --- */
const DEFAULT_CLOUD_ENDPOINT = 'https://kvdb.io/GbEtEsmYpRjAN6ev1PDmcb/portfolio_state';

function getCloudEndpoint() {
  return localStorage.getItem('site:cloud_endpoint') || DEFAULT_CLOUD_ENDPOINT;
}

function setCloudEndpoint(url) {
  if (url && url.trim()) {
    localStorage.setItem('site:cloud_endpoint', url.trim());
  } else {
    localStorage.removeItem('site:cloud_endpoint');
  }
}

async function fetchCloudState() {
  const url = getCloudEndpoint();
  if (!url) return null;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 3500);
    const res = await fetch(url, { signal: ctrl.signal });
    clearTimeout(timer);
    if (res.ok) {
      const data = await res.json();
      if (data && data.personal && data.personal.name) {
        return data;
      }
    }
  } catch (err) {
    console.warn('Cloud fetch warning (using local fallback):', err);
  }
  return null;
}

async function pushCloudState(state) {
  const url = getCloudEndpoint();
  if (!url) return false;
  try {
    const payload = {
      ...state,
      updatedAt: new Date().toISOString()
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return res.ok;
  } catch (err) {
    console.warn('Cloud push error:', err);
    return false;
  }
}

async function fetchStaticContent() {
  try {
    const res = await fetch('data/content.json');
    if (res.ok) {
      const data = await res.json();
      if (data && data.personal && data.personal.name) {
        return data;
      }
    }
  } catch (err) { }
  return null;
}

/* --- Browser Storage Engine --- */
async function storageGet(key, fallback) {
  try {
    if (window.storage && typeof window.storage.get === 'function') {
      const res = await window.storage.get(key, true);
      if (res && res.value !== undefined && res.value !== null) {
        return JSON.parse(res.value);
      }
    }
    const val = localStorage.getItem(key);
    if (val !== null) return JSON.parse(val);
    return fallback;
  } catch (e) {
    console.warn(`Storage get error for ${key}:`, e);
    return fallback;
  }
}

async function storageSet(key, value) {
  try {
    const jsonVal = JSON.stringify(value);
    localStorage.setItem(key, jsonVal);
    if (window.storage && typeof window.storage.set === 'function') {
      await window.storage.set(key, jsonVal, true);
    }
    return true;
  } catch (e) {
    console.error(`Storage set error for ${key}:`, e);
    return false;
  }
}

async function saveAllData(toastMsg = 'Saved.') {
  // 1. Save to local storage for immediate persistence
  await Promise.all([
    storageSet('site:personal', STATE.personal),
    storageSet('site:education', STATE.education),
    storageSet('site:experience', STATE.experience),
    storageSet('site:projects', STATE.projects),
    storageSet('site:competency', STATE.competency),
    storageSet('site:blog', STATE.blog),
    storageSet('site:contact', STATE.contact),
    storageSet('site:admin', STATE.admin)
  ]);

  // 2. Broadcast to global cloud database so it works for all visitors on any device/browser
  showToast(toastMsg + ' Syncing to cloud…');
  const cloudOk = await pushCloudState(STATE);
  if (cloudOk) {
    showToast(toastMsg + ' Synced live to cloud for all visitors! ☁️');
  } else {
    showToast(toastMsg + ' Saved locally (cloud sync offline).');
  }
}

async function loadAllData() {
  // 1. First priority: Check Live Global Cloud
  const cloudData = await fetchCloudState();
  if (cloudData && cloudData.personal && !cloudData.personal.name.includes('Aria')) {
    STATE.personal = cloudData.personal;
    STATE.education = cloudData.education || [];
    STATE.experience = cloudData.experience || [];
    STATE.projects = cloudData.projects || [];
    STATE.competency = cloudData.competency || { hard: [], soft: [] };
    STATE.blog = cloudData.blog || [];
    STATE.contact = cloudData.contact || clone(DEFAULTS.contact);
    STATE.admin = cloudData.admin || clone(DEFAULTS.admin);

    // Cache locally for offline availability
    try {
      localStorage.setItem('site:schema_version', '2.2');
      localStorage.setItem('site:personal', JSON.stringify(STATE.personal));
      localStorage.setItem('site:education', JSON.stringify(STATE.education));
      localStorage.setItem('site:experience', JSON.stringify(STATE.experience));
      localStorage.setItem('site:projects', JSON.stringify(STATE.projects));
      localStorage.setItem('site:competency', JSON.stringify(STATE.competency));
      localStorage.setItem('site:blog', JSON.stringify(STATE.blog));
      localStorage.setItem('site:contact', JSON.stringify(STATE.contact));
      localStorage.setItem('site:admin', JSON.stringify(STATE.admin));
    } catch (e) { }
    return;
  }

  // 2. Second priority: Local Storage Cache
  const version = localStorage.getItem('site:schema_version');
  const [personal, education, experience, projects, competency, blog, contact, admin] = await Promise.all([
    storageGet('site:personal', null),
    storageGet('site:education', null),
    storageGet('site:experience', null),
    storageGet('site:projects', null),
    storageGet('site:competency', null),
    storageGet('site:blog', null),
    storageGet('site:contact', null),
    storageGet('site:admin', null)
  ]);

  if (version === '2.2' && personal && personal.name && !personal.name.includes('Aria')) {
    STATE.personal = personal;
    STATE.education = education || [];
    STATE.experience = experience || [];
    STATE.projects = projects || [];
    STATE.competency = competency || { hard: [], soft: [] };
    STATE.blog = blog || [];
    STATE.contact = contact || clone(DEFAULTS.contact);
    STATE.admin = admin || clone(DEFAULTS.admin);
    return;
  }

  // 3. Third priority: Static content.json
  const staticData = await fetchStaticContent();
  if (staticData && staticData.personal && !staticData.personal.name.includes('Aria')) {
    STATE.personal = staticData.personal;
    STATE.education = staticData.education || [];
    STATE.experience = staticData.experience || [];
    STATE.projects = staticData.projects || [];
    STATE.competency = staticData.competency || { hard: [], soft: [] };
    STATE.blog = staticData.blog || [];
    STATE.contact = staticData.contact || clone(DEFAULTS.contact);
    STATE.admin = staticData.admin || clone(DEFAULTS.admin);
    return;
  }

  // 4. Default fallback
  STATE.personal = clone(DEFAULTS.personal);
  STATE.education = clone(DEFAULTS.education);
  STATE.experience = clone(DEFAULTS.experience);
  STATE.projects = clone(DEFAULTS.projects);
  STATE.competency = clone(DEFAULTS.competency);
  STATE.blog = clone(DEFAULTS.blog);
  STATE.contact = clone(DEFAULTS.contact);
  STATE.admin = clone(DEFAULTS.admin);
}

/* --- Theme Management --- */
function initTheme() {
  const getPreferredTheme = () => {
    const saved = localStorage.getItem('site:theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'dark' ? '#0B111E' : '#101826');
    }
  };

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('site:theme', next);
    showToast(`Switched to ${next === 'dark' ? 'Dark' : 'Light'} mode`);
  };

  applyTheme(getPreferredTheme());

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);

  const mobileToggleBtn = document.getElementById('mobileThemeToggleBtn');
  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', toggleTheme);

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('site:theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

function uid(prefix) { return prefix + '_' + Math.random().toString(36).slice(2, 9); }

/* --- Section Configuration --- */
const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'competency', label: 'Skills' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' }
];

function buildNav() {
  const navLinks = document.getElementById('navLinks');
  const mobileMenu = document.getElementById('mobileMenu');
  const sideNav = document.getElementById('sideNav');
  if (navLinks) navLinks.innerHTML = SECTIONS.map(s => `<a href="#${s.id}" data-sec="${s.id}">${s.label}</a>`).join('');
  if (mobileMenu) {
    mobileMenu.innerHTML =
      `<div class="mobile-theme-row">
        <span>Appearance</span>
        <button class="theme-toggle" id="mobileThemeToggleBtn" aria-label="Toggle theme">
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
      </div>` +
      SECTIONS.map(s => `<a href="#${s.id}" data-sec="${s.id}">${s.label}</a>`).join('') +
      `<div class="nav-social" id="mobileSocial"></div>`;

    const mToggle = document.getElementById('mobileThemeToggleBtn');
    if (mToggle) {
      mToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('site:theme', next);
        showToast(`Switched to ${next === 'dark' ? 'Dark' : 'Light'} mode`);
      });
    }
  }
  if (sideNav) sideNav.innerHTML = SECTIONS.map(s => `<a href="#${s.id}" data-sec="${s.id}"><span class="tip">${s.label}</span></a>`).join('');

  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => { document.getElementById('mobileMenu').classList.remove('open'); });
  });
}

function renderSocialSets() {
  const s = STATE.personal.socials || {};
  const order = ['github', 'linkedin', 'telegram', 'twitter', 'email', 'website', 'resume'];
  const items = order.filter(k => s[k]).map(k => `<a href="${s[k]}" target="_blank" rel="noopener" aria-label="${k}">${socialIcon(k)}</a>`).join('');
  const navSocial = document.getElementById('navSocial');
  const heroSocials = document.getElementById('heroSocials');
  const mobileSocial = document.getElementById('mobileSocial');
  if (navSocial) navSocial.innerHTML = items;
  if (heroSocials) heroSocials.innerHTML = items;
  if (mobileSocial) mobileSocial.innerHTML = items;

  const c = STATE.contact.socials || {};
  const contactSocials = document.getElementById('contactSocials');
  if (contactSocials) {
    contactSocials.innerHTML = order.filter(k => c[k])
      .map(k => `<a href="${c[k]}" target="_blank" rel="noopener" aria-label="${k}">${socialIcon(k)}</a>`).join('');
  }
}

/* --- Render Modules --- */
function renderHero() {
  const p = STATE.personal;
  const brandName = document.getElementById('brandName');
  if (brandName) {
    brandName.textContent = p.brand || (p.name || 'Portfolio').split(' ').map((w, i) => i === 0 ? w[0] + '.' : w).join(' ').toUpperCase();
  }
  const availText = document.getElementById('availabilityText');
  if (availText) availText.textContent = p.availability || '';
  const heroName = document.getElementById('heroName');
  if (heroName) heroName.innerHTML = `${p.firstName || ''}<br><em>${p.lastName || ''}</em>`;
  const heroRole = document.getElementById('heroRole');
  if (heroRole) heroRole.innerHTML = `<span>${p.title || ''}</span><span class="sep">/</span><span>${p.location || ''}</span>`;
  const heroTagline = document.getElementById('heroTagline');
  if (heroTagline) heroTagline.textContent = p.tagline || '';

  const photoFrame = document.querySelector('.hero-photo-frame');
  if (photoFrame) {
    if (p.photoUrl) {
      photoFrame.innerHTML = `<img id="heroPhoto" src="${p.photoUrl}" alt="${p.name || 'Logo'}" onerror="this.parentElement.innerHTML='<div class=\\'hero-photo-placeholder\\'>${ICONS.user}<span>Photo unavailable</span></div>'">`;
    } else {
      photoFrame.innerHTML = `<div class="hero-photo-placeholder">${ICONS.user}<span>${p.name || 'Xurshidbek Abdubannobov'}<br><small style="color:var(--slate-soft);font-size:11px;">Backend Developer</small></span></div>`;
    }
  }

  const footerNote = document.getElementById('footerNote');
  if (footerNote) footerNote.textContent = `© ${new Date().getFullYear()} ${p.name || ''}. Built sheet by sheet.`;
}

function renderAbout() {
  const p = STATE.personal;
  const aboutLead = document.getElementById('aboutLead');
  if (aboutLead) aboutLead.innerHTML = p.bioLead || '';
  const aboutBody = document.getElementById('aboutBody');
  if (aboutBody) aboutBody.innerHTML = (p.bio || '').split('\n').filter(Boolean).map(par => `<p>${par}</p>`).join('');
  const facts = [
    { k: 'Location', v: p.location },
    { k: 'Experience', v: p.yearsExperience ? p.yearsExperience + ' years' : '' },
    { k: 'Available for', v: p.availableFor },
    { k: 'Languages', v: p.languages },
  ].filter(f => f.v);
  const factList = document.getElementById('factList');
  if (factList) factList.innerHTML = facts.map(f => `<li><span class="k">${f.k}</span><span class="v">${f.v}</span></li>`).join('');
}

function renderEducation() {
  const el = document.getElementById('educationList');
  if (!el) return;
  if (!STATE.education.length) { el.innerHTML = '<p class="a-empty">No education entries yet.</p>'; return; }
  el.innerHTML = STATE.education.map(e => `
    <div class="t-item">
      <div class="t-dates">${e.start} — ${e.end}</div>
      <div>
        <h3 class="t-role">${e.degree}</h3>
        <p class="t-org">${e.institution}${e.location ? ` <span class="loc">— ${e.location}</span>` : ''}</p>
        ${e.description ? `<p class="t-desc">${e.description}</p>` : ''}
      </div>
    </div>`).join('');
}

function renderExperience() {
  const el = document.getElementById('experienceList');
  if (!el) return;
  if (!STATE.experience.length) { el.innerHTML = '<p class="a-empty">No experience entries yet.</p>'; return; }
  el.innerHTML = STATE.experience.map(x => `
    <div class="t-item">
      <div class="t-dates">${x.start} — ${x.current ? 'Present' : x.end}</div>
      <div>
        <h3 class="t-role">${x.role}</h3>
        <p class="t-org">${x.company}${x.location ? ` <span class="loc">— ${x.location}</span>` : ''}</p>
        ${x.description ? `<p class="t-desc">${x.description}</p>` : ''}
        ${x.bullets && x.bullets.length ? `<ul class="t-bullets">${x.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
      </div>
    </div>`).join('');
}

function renderProjects() {
  const el = document.getElementById('projectsList');
  if (!el) return;
  if (!STATE.projects.length) { el.innerHTML = '<p class="a-empty">No projects yet.</p>'; return; }
  el.innerHTML = STATE.projects.map((pr, i) => `
    <div class="proj-card">
      <div class="proj-top">
        <span class="proj-idx">${String(i + 1).padStart(2, '0')}</span>
        ${pr.featured ? '<span class="proj-badge">Featured</span>' : ''}
      </div>
      <h3>${pr.title}</h3>
      <p>${pr.description || ''}</p>
      ${pr.metric ? `<p class="proj-metric">${pr.metric}</p>` : ''}
      <div class="proj-tags">${(pr.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="proj-links">
        ${pr.demoUrl ? `<a href="${pr.demoUrl}" target="_blank" rel="noopener">Live demo ${ICONS.arrow}</a>` : ''}
        ${pr.repoUrl ? `<a href="${pr.repoUrl}" target="_blank" rel="noopener">Source ${ICONS.arrow}</a>` : ''}
      </div>
    </div>`).join('');
}

function renderCompetency() {
  const hard = STATE.competency.hard || [];
  const soft = STATE.competency.soft || [];
  const hardEl = document.getElementById('hardSkillsList');
  const softEl = document.getElementById('softSkillsList');
  if (hardEl) {
    hardEl.innerHTML = hard.map(h => `
      <div class="skill-row">
        <div class="sr-top"><span class="name">${h.name}</span><span class="val">${h.level}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${h.level}%"></div></div>
      </div>`).join('') || '<p class="a-empty">No hard skills yet.</p>';
  }
  if (softEl) {
    softEl.innerHTML = soft.map(s => `<span class="soft-pill">${s.name}</span>`).join('') || '<p class="a-empty">No soft skills yet.</p>';
  }
}

function fmtDate(d) {
  try { return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }); }
  catch (e) { return d; }
}

function readTime(text) {
  const words = (text || '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200)) + ' min read';
}

function renderBlog() {
  const el = document.getElementById('blogList');
  if (!el) return;
  if (!STATE.blog.length) { el.innerHTML = '<p class="a-empty">No posts yet.</p>'; return; }
  const sorted = [...STATE.blog].sort((a, b) => new Date(b.date) - new Date(a.date));
  el.innerHTML = sorted.map((b, i) => `
    <div class="blog-card" data-blog-id="${b.id}">
      <div class="blog-cover">
        ${b.cover ? `<img src="${b.cover}" alt="">` : ''}
        <span class="bc-idx">NOTE ${String(i + 1).padStart(2, '0')}</span>
      </div>
      <div class="blog-body">
        <div class="blog-meta">${fmtDate(b.date)} · ${readTime(b.content)}</div>
        <h3>${b.title}</h3>
        <p>${b.excerpt || ''}</p>
        <span class="blog-read">Read note ${ICONS.arrow}</span>
      </div>
    </div>`).join('');

  el.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => openBlogDetail(card.dataset.blogId));
  });
}

function openBlogDetail(id) {
  const post = STATE.blog.find(b => b.id === id);
  if (!post) return;
  const label = document.getElementById('boSheetLabel');
  if (label) label.textContent = (post.tags && post.tags[0]) || 'Field note';
  const content = document.getElementById('boContent');
  if (content) {
    content.innerHTML = `
      <span class="mono-label">${fmtDate(post.date)} · ${readTime(post.content)}</span>
      <h1>${post.title}</h1>
      ${post.cover ? `<div class="bo-cover"><img src="${post.cover}" alt=""></div>` : ''}
      <div class="bo-body">${(post.content || '').split('\n').filter(Boolean).map(par => `<p>${par}</p>`).join('')}</div>
      ${post.tags && post.tags.length ? `<div class="bo-tags">${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
    `;
  }
  const overlay = document.getElementById('blogOverlay');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBlogDetail() {
  const overlay = document.getElementById('blogOverlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderContact() {
  const c = STATE.contact;
  const contactLead = document.getElementById('contactLead');
  if (contactLead) contactLead.textContent = c.lead || '';
  const items = [
    { k: 'Email', v: c.email, href: 'mailto:' + c.email },
    { k: 'Phone', v: c.phone, href: 'tel:' + (c.phone || '').replace(/\s/g, '') },
    { k: 'Based in', v: c.location, href: null },
  ].filter(i => i.v);
  const infoList = document.getElementById('contactInfoList');
  if (infoList) {
    infoList.innerHTML = items.map(i => `<li><span class="k">${i.k}</span>${i.href ? `<a href="${i.href}">${i.v}</a>` : `<span>${i.v}</span>`}</li>`).join('');
  }
}

/* --- Contact Form Event Listener --- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cfName').value;
    const email = document.getElementById('cfEmail').value;
    const msg = document.getElementById('cfMessage').value;
    const to = STATE.contact.email || STATE.personal.email;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    showToast('Opening your email client…');
  });
}

/* --- Toast Notification System --- */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* --- ScrollSpy Navigation --- */
function initScrollSpy() {
  const secEls = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
  const setActive = (id) => {
    document.querySelectorAll('[data-sec]').forEach(a => {
      a.classList.toggle('active', a.dataset.sec === id);
    });
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { setActive(en.target.id); }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  secEls.forEach(el => io.observe(el));
}

function initChrome() {
  const burgerBtn = document.getElementById('burgerBtn');
  if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu) mobileMenu.classList.toggle('open');
    });
  }
  const boCloseBtn = document.getElementById('boCloseBtn');
  if (boCloseBtn) boCloseBtn.addEventListener('click', closeBlogDetail);
  const adminEntryBtn = document.getElementById('adminEntryBtn');
  if (adminEntryBtn) adminEntryBtn.addEventListener('click', enterAdminMode);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBlogDetail();
      if (document.body.classList.contains('admin-mode') && adminLoggedIn) {
        exitAdminMode();
      }
    }
  });
}

function renderPublicSite() {
  renderHero();
  renderAbout();
  renderEducation();
  renderExperience();
  renderProjects();
  renderCompetency();
  renderBlog();
  renderContact();
  renderSocialSets();
}

/* =========================================================================
   ADMIN PANEL MODULE
   ========================================================================= */
let adminActiveTab = 'personal';
let adminLoggedIn = false;

const ADMIN_TABS = [
  { id: 'personal', label: 'Personal info' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'competency', label: 'Competency' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact & Security' },
  { id: 'cloud', label: 'Cloud & Sync ☁️' }
];

function enterAdminMode() {
  document.body.classList.add('admin-mode');
  window.scrollTo(0, 0);
  renderAdminRoot();
}

function exitAdminMode() {
  document.body.classList.remove('admin-mode');
  renderPublicSite();
  window.scrollTo(0, 0);
}

function renderAdminRoot() {
  const root = document.getElementById('adminRoot');
  if (!root) return;
  if (!adminLoggedIn) {
    root.innerHTML = adminLoginTemplate();
    wireAdminLogin();
  } else {
    root.innerHTML = adminShellTemplate();
    wireAdminShell();
    renderAdminTab();
  }
}

function adminLoginTemplate() {
  return `
    <div class="admin-login-screen">
      <div class="admin-login-card">
        <span class="mono-label">Restricted Access</span>
        <h1>Admin sign-in</h1>
        <form id="adminLoginForm">
          <div class="form-field">
            <label>Password</label>
            <input type="password" id="adminPassInput" placeholder="Enter admin password" autofocus required>
          </div>
          <div class="admin-error" id="adminLoginError" style="display:none;"></div>
          <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">Sign in</button>
        </form>
        <button class="btn btn-ghost" id="adminBackBtn" style="width:100%; justify-content:center; margin-top:10px;">← Back to site</button>
        <p class="admin-hint">Default password: <strong>admin123</strong>. Change it from the Contact & Security tab after signing in.</p>
      </div>
    </div>`;
}

function wireAdminLogin() {
  const backBtn = document.getElementById('adminBackBtn');
  if (backBtn) backBtn.addEventListener('click', exitAdminMode);
  const form = document.getElementById('adminLoginForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = document.getElementById('adminPassInput').value;
      if (val === (STATE.admin.password || DEFAULTS.admin.password)) {
        adminLoggedIn = true;
        renderAdminRoot();
      } else {
        const err = document.getElementById('adminLoginError');
        if (err) {
          err.textContent = 'Incorrect password. Try again.';
          err.style.display = 'block';
        }
      }
    });
  }
}

function adminShellTemplate() {
  return `
    <div class="admin-shell">
      <div class="admin-side">
        <div class="admin-brand">PORTFOLIO / ADMIN</div>
        <div class="admin-nav">
          ${ADMIN_TABS.map(t => `<button data-tab="${t.id}" class="${t.id === adminActiveTab ? 'active' : ''}">${t.label}</button>`).join('')}
        </div>
        <div class="admin-side-foot">
          <button class="btn-sm" id="adminQuickSyncBtn" style="background:var(--copper);color:#ffffff;border:none;width:100%;font-weight:600;margin-bottom:8px;cursor:pointer;">☁️ Sync to Cloud Now</button>
          <button class="btn-sm" id="adminExportBtn" style="background:transparent;color:var(--paper-text-dim);border-color:var(--ink-line);width:100%;">Export Data (JSON)</button>
          <button class="btn-sm" id="adminImportBtn" style="background:transparent;color:var(--paper-text-dim);border-color:var(--ink-line);width:100%;">Import Data (JSON)</button>
          <input type="file" id="adminImportFile" accept=".json" style="display:none;">
          <button class="btn-sm" id="adminViewSiteBtn" style="background:transparent;color:var(--paper-text);border-color:var(--ink-line);width:100%;margin-top:4px;">View live site</button>
          <button class="btn-sm" id="adminLogoutBtn" style="background:transparent;color:var(--paper-text-dim);border-color:var(--ink-line);width:100%;">Log out</button>
        </div>
      </div>
      <div class="admin-main" id="adminMain"></div>
    </div>`;
}

function wireAdminShell() {
  document.querySelectorAll('.admin-nav button').forEach(btn => {
    btn.addEventListener('click', () => {
      adminActiveTab = btn.dataset.tab;
      document.querySelectorAll('.admin-nav button').forEach(b => b.classList.toggle('active', b === btn));
      renderAdminTab();
    });
  });
  const viewSiteBtn = document.getElementById('adminViewSiteBtn');
  if (viewSiteBtn) viewSiteBtn.addEventListener('click', exitAdminMode);

  const logoutBtn = document.getElementById('adminLogoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', () => {
    adminLoggedIn = false;
    renderAdminRoot();
  });

  const quickSyncBtn = document.getElementById('adminQuickSyncBtn');
  if (quickSyncBtn) {
    quickSyncBtn.addEventListener('click', async () => {
      quickSyncBtn.disabled = true;
      quickSyncBtn.textContent = 'Syncing...';
      const ok = await pushCloudState(STATE);
      if (ok) {
        showToast('Successfully synced to cloud for all visitors! ☁️');
      } else {
        showToast('Sync failed. Please check network connection.');
      }
      quickSyncBtn.disabled = false;
      quickSyncBtn.textContent = '☁️ Sync to Cloud Now';
    });
  }

  const exportBtn = document.getElementById('adminExportBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(STATE, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Backup data exported.');
    });
  }

  const importBtn = document.getElementById('adminImportBtn');
  const importFile = document.getElementById('adminImportFile');
  if (importBtn && importFile) {
    importBtn.addEventListener('click', () => importFile.click());
    importFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async (evt) => {
        try {
          const imported = JSON.parse(evt.target.result);
          if (imported && imported.personal) {
            Object.assign(STATE, imported);
            await saveAllData('Portfolio data restored & synced to cloud!');
            renderAdminTab();
          } else {
            alert('Invalid portfolio backup file format.');
          }
        } catch (err) {
          alert('Error parsing backup JSON file.');
        }
      };
      reader.readAsText(file);
    });
  }
}

function renderAdminTab() {
  const main = document.getElementById('adminMain');
  if (!main) return;
  const renderers = {
    personal: adminRenderPersonal,
    education: adminRenderList('education'),
    experience: adminRenderList('experience'),
    projects: adminRenderList('projects'),
    competency: adminRenderCompetency,
    blog: adminRenderList('blog'),
    contact: adminRenderContact,
    cloud: adminRenderCloud
  };
  main.innerHTML = '';
  if (renderers[adminActiveTab]) renderers[adminActiveTab](main);
}

function fld(label, id, value, type = 'text') {
  if (type === 'textarea') {
    return `<div class="a-field"><label>${label}</label><textarea id="${id}">${value || ''}</textarea></div>`;
  }
  return `<div class="a-field"><label>${label}</label><input type="${type}" id="${id}" value="${(value || '').toString().replace(/"/g, '&quot;')}"></div>`;
}

function v(id) { const el = document.getElementById(id); return el ? el.value : ''; }

/* Admin: Personal */
function adminRenderPersonal(main) {
  const p = STATE.personal;
  const s = p.socials || {};
  main.innerHTML = `
    <div class="admin-header"><div><span class="mono-label">Section</span><h2>Personal info</h2></div></div>
    <div class="admin-panel-card">
      <h3>Identity & Title</h3>
      <div class="a-grid2">
        ${fld('First name', 'pFirst', p.firstName)}
        ${fld('Last name', 'pLast', p.lastName)}
      </div>
      <div class="a-grid2">
        ${fld('Brand / Logo text', 'pBrand', p.brand || 'X. BEK')}
        ${fld('Title / role', 'pTitle', p.title)}
      </div>
      <div class="a-grid2">
        ${fld('Availability status', 'pAvail', p.availability)}
        ${fld('Photo URL (leave blank for placeholder)', 'pPhoto', p.photoUrl)}
      </div>
      ${fld('Tagline (shown large on the hero)', 'pTagline', p.tagline, 'textarea')}
    </div>
    <div class="admin-panel-card">
      <h3>About section</h3>
      ${fld('Lead sentence (HTML allowed, e.g. <em>)', 'pLead', p.bioLead, 'textarea')}
      ${fld('Bio (use a blank line to start a new paragraph)', 'pBio', p.bio, 'textarea')}
      <div class="a-grid2">
        ${fld('Location', 'pLoc', p.location)}
        ${fld('Years of experience', 'pYears', p.yearsExperience)}
      </div>
      <div class="a-grid2">
        ${fld('Available for', 'pAvailFor', p.availableFor)}
        ${fld('Languages', 'pLang', p.languages)}
      </div>
    </div>
    <div class="admin-panel-card">
      <h3>Header & Hero Social / Resume Links</h3>
      <div class="a-grid2">
        ${fld('Email', 'pEmail', p.email)}
        ${fld('Phone', 'pPhone', p.phone)}
      </div>
      <div class="a-grid2">
        ${fld('GitHub URL', 'pGithub', s.github)}
        ${fld('LinkedIn URL', 'pLinkedin', s.linkedin)}
      </div>
      <div class="a-grid2">
        ${fld('Telegram URL', 'pTelegram', s.telegram)}
        ${fld('X / Twitter URL', 'pTwitter', s.twitter)}
      </div>
      <div class="a-grid2">
        ${fld('Website URL', 'pWebsite', s.website)}
        ${fld('Resume / CV URL', 'pResume', s.resume)}
      </div>
    </div>
    <div class="a-actions"><button class="btn-sm primary" id="pSaveBtn">Save changes</button></div>
  `;
  document.getElementById('pSaveBtn').addEventListener('click', async () => {
    STATE.personal = {
      ...STATE.personal,
      firstName: v('pFirst'), lastName: v('pLast'), brand: v('pBrand'), title: v('pTitle'), availability: v('pAvail'),
      tagline: v('pTagline'), photoUrl: v('pPhoto'), bioLead: v('pLead'), bio: v('pBio'),
      location: v('pLoc'), yearsExperience: v('pYears'), availableFor: v('pAvailFor'), languages: v('pLang'),
      email: v('pEmail'), phone: v('pPhone'),
      name: `${v('pFirst')} ${v('pLast')}`.trim(),
      socials: {
        github: v('pGithub'),
        linkedin: v('pLinkedin'),
        telegram: v('pTelegram'),
        twitter: v('pTwitter'),
        email: v('pEmail') ? (v('pEmail').startsWith('mailto:') ? v('pEmail') : 'mailto:' + v('pEmail')) : '',
        website: v('pWebsite'),
        resume: v('pResume')
      }
    };
    await saveAllData('Personal info saved.');
  });
}

/* Admin: Generic Lists (Education, Experience, Projects, Blog) */
function adminRenderList(kind) {
  return function (main) {
    const items = STATE[kind];
    const titleMap = { education: 'Education', experience: 'Experience', projects: 'Projects', blog: 'Blog posts' };
    main.innerHTML = `
      <div class="admin-header">
        <div><span class="mono-label">Section</span><h2>${titleMap[kind]}</h2></div>
        <button class="btn-sm primary" id="addNewBtn">+ Add ${kind === 'blog' ? 'post' : 'entry'}</button>
      </div>
      <div id="listWrap"></div>
      <div id="formWrap"></div>
    `;
    renderListItems(kind, items);
    document.getElementById('addNewBtn').addEventListener('click', () => renderItemForm(kind, null));
  };
}

function itemSummary(kind, item) {
  if (kind === 'education') return { title: item.degree, sub: `${item.institution} · ${item.start}–${item.end}` };
  if (kind === 'experience') return { title: item.role, sub: `${item.company} · ${item.start}–${item.current ? 'Present' : item.end}` };
  if (kind === 'projects') return { title: item.title, sub: (item.tags || []).join(', ') };
  if (kind === 'blog') return { title: item.title, sub: fmtDate(item.date) };
}

function renderListItems(kind, items) {
  const wrap = document.getElementById('listWrap');
  if (!wrap) return;
  if (!items.length) { wrap.innerHTML = '<p class="a-empty">Nothing here yet — add your first entry.</p>'; return; }
  wrap.innerHTML = items.map(item => {
    const { title, sub } = itemSummary(kind, item);
    return `<div class="admin-list-item" data-id="${item.id}">
      <div><p class="aim-title">${title}</p><p class="aim-sub">${sub}</p></div>
      <div class="aim-actions">
        <button class="btn-sm" data-act="edit">Edit</button>
        <button class="btn-sm danger" data-act="delete">Delete</button>
      </div>
    </div>`;
  }).join('');
  wrap.querySelectorAll('[data-act="edit"]').forEach(b => {
    b.addEventListener('click', (e) => {
      const id = e.target.closest('.admin-list-item').dataset.id;
      renderItemForm(kind, STATE[kind].find(i => i.id === id));
    });
  });
  wrap.querySelectorAll('[data-act="delete"]').forEach(b => {
    b.addEventListener('click', async (e) => {
      const id = e.target.closest('.admin-list-item').dataset.id;
      if (!confirm('Delete this entry? This cannot be undone.')) return;
      STATE[kind] = STATE[kind].filter(i => i.id !== id);
      await saveAllData('Entry deleted.');
      renderListItems(kind, STATE[kind]);
      const formWrap = document.getElementById('formWrap');
      if (formWrap) formWrap.innerHTML = '';
    });
  });
}

function renderItemForm(kind, item) {
  const formWrap = document.getElementById('formWrap');
  if (!formWrap) return;
  const isNew = !item;
  let html = '';

  if (kind === 'education') {
    const it = item || { id: uid('e'), degree: '', institution: '', location: '', start: '', end: '', description: '' };
    html = `<div class="admin-panel-card"><h3>${isNew ? 'New' : 'Edit'} education entry</h3>
      ${fld('Degree / program', 'fDegree', it.degree)}
      <div class="a-grid2">${fld('Institution', 'fInst', it.institution)}${fld('Location', 'fLoc', it.location)}</div>
      <div class="a-grid2">${fld('Start year', 'fStart', it.start)}${fld('End year', 'fEnd', it.end)}</div>
      ${fld('Description', 'fDesc', it.description, 'textarea')}
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save entry</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`;
    formWrap.innerHTML = html;
    bindCancel();
    document.getElementById('saveItemBtn').addEventListener('click', () => saveListItem('education', it.id, {
      id: it.id, degree: v('fDegree'), institution: v('fInst'), location: v('fLoc'), start: v('fStart'), end: v('fEnd'), description: v('fDesc')
    }));
  }

  if (kind === 'experience') {
    const it = item || { id: uid('x'), role: '', company: '', location: '', start: '', end: '', current: false, description: '', bullets: [] };
    html = `<div class="admin-panel-card"><h3>${isNew ? 'New' : 'Edit'} experience entry</h3>
      <div class="a-grid2">${fld('Role / title', 'fRole', it.role)}${fld('Company', 'fCompany', it.company)}</div>
      <div class="a-grid2">${fld('Location', 'fLoc', it.location)}${fld('Start year', 'fStart', it.start)}</div>
      <div class="a-grid2">
        ${fld('End year (ignored if current)', 'fEnd', it.end)}
        <div class="a-field"><label>Currently working here?</label>
          <select id="fCurrent"><option value="no" ${!it.current ? 'selected' : ''}>No</option><option value="yes" ${it.current ? 'selected' : ''}>Yes</option></select>
        </div>
      </div>
      ${fld('Short description', 'fDesc', it.description, 'textarea')}
      ${fld('Highlights (one per line)', 'fBullets', (it.bullets || []).join('\n'), 'textarea')}
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save entry</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`;
    formWrap.innerHTML = html;
    bindCancel();
    document.getElementById('saveItemBtn').addEventListener('click', () => saveListItem('experience', it.id, {
      id: it.id, role: v('fRole'), company: v('fCompany'), location: v('fLoc'), start: v('fStart'), end: v('fEnd'),
      current: v('fCurrent') === 'yes', description: v('fDesc'),
      bullets: v('fBullets').split('\n').map(s => s.trim()).filter(Boolean)
    }));
  }

  if (kind === 'projects') {
    const it = item || { id: uid('p'), title: '', description: '', metric: '', tags: [], demoUrl: '', repoUrl: '', featured: false };
    html = `<div class="admin-panel-card"><h3>${isNew ? 'New' : 'Edit'} project</h3>
      ${fld('Project title', 'fTitle', it.title)}
      ${fld('Description', 'fDesc', it.description, 'textarea')}
      ${fld('Key metric / result (optional)', 'fMetric', it.metric)}
      ${fld('Tags / tech stack (comma separated)', 'fTags', (it.tags || []).join(', '))}
      <div class="a-grid2">${fld('Live demo URL', 'fDemo', it.demoUrl)}${fld('Source / repo URL', 'fRepo', it.repoUrl)}</div>
      <div class="a-field"><label>Featured project?</label>
        <select id="fFeatured"><option value="no" ${!it.featured ? 'selected' : ''}>No</option><option value="yes" ${it.featured ? 'selected' : ''}>Yes</option></select>
      </div>
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save project</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`;
    formWrap.innerHTML = html;
    bindCancel();
    document.getElementById('saveItemBtn').addEventListener('click', () => saveListItem('projects', it.id, {
      id: it.id, title: v('fTitle'), description: v('fDesc'), metric: v('fMetric'),
      tags: v('fTags').split(',').map(s => s.trim()).filter(Boolean),
      demoUrl: v('fDemo'), repoUrl: v('fRepo'), featured: v('fFeatured') === 'yes'
    }));
  }

  if (kind === 'blog') {
    const it = item || { id: uid('b'), title: '', date: new Date().toISOString().slice(0, 10), tags: [], excerpt: '', content: '', cover: '' };
    html = `<div class="admin-panel-card"><h3>${isNew ? 'New' : 'Edit'} post</h3>
      ${fld('Title', 'fTitle', it.title)}
      <div class="a-grid2">${fld('Publish date', 'fDate', it.date, 'date')}${fld('Tags (comma separated)', 'fTags', (it.tags || []).join(', '))}</div>
      ${fld('Cover image URL (optional)', 'fCover', it.cover)}
      ${fld('Excerpt (shown on the blog list)', 'fExcerpt', it.excerpt, 'textarea')}
      ${fld('Full content (use a blank line for a new paragraph)', 'fContent', it.content, 'textarea')}
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save post</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`;
    formWrap.innerHTML = html;
    bindCancel();
    document.getElementById('saveItemBtn').addEventListener('click', () => saveListItem('blog', it.id, {
      id: it.id, title: v('fTitle'), date: v('fDate'), tags: v('fTags').split(',').map(s => s.trim()).filter(Boolean),
      cover: v('fCover'), excerpt: v('fExcerpt'), content: v('fContent')
    }));
  }

  function bindCancel() {
    const cancelBtn = document.getElementById('cancelItemBtn');
    if (cancelBtn) cancelBtn.addEventListener('click', () => { formWrap.innerHTML = ''; });
  }
}

async function saveListItem(kind, id, data) {
  const idx = STATE[kind].findIndex(i => i.id === id);
  if (idx > -1) STATE[kind][idx] = data; else STATE[kind].push(data);
  await saveAllData('Saved.');
  renderListItems(kind, STATE[kind]);
  const formWrap = document.getElementById('formWrap');
  if (formWrap) formWrap.innerHTML = '';
}

/* Admin: Competency */
function adminRenderCompetency(main) {
  const comp = STATE.competency;
  main.innerHTML = `
    <div class="admin-header"><div><span class="mono-label">Section</span><h2>Competency</h2></div></div>
    <div class="admin-panel-card">
      <h3>Hard skills</h3>
      <p class="a-help">Drag the slider to set a proficiency level shown as a bar on the site.</p>
      <div id="hardSkillRows"></div>
      <div class="a-actions"><button class="btn-sm" id="addHardBtn">+ Add hard skill</button></div>
    </div>
    <div class="admin-panel-card">
      <h3>Soft skills</h3>
      <div id="softSkillRows"></div>
      <div class="a-actions"><button class="btn-sm" id="addSoftBtn">+ Add soft skill</button></div>
    </div>
    <div class="a-actions"><button class="btn-sm primary" id="compSaveBtn">Save changes</button></div>
  `;
  drawHardRows(); drawSoftRows();

  function drawHardRows() {
    const el = document.getElementById('hardSkillRows');
    if (!el) return;
    el.innerHTML = comp.hard.map(h => `
      <div class="a-field" data-hid="${h.id}">
        <label>Skill name</label>
        <input type="text" class="h-name" value="${h.name.replace(/"/g, '&quot;')}">
        <div class="a-level-row" style="margin-top:8px;">
          <input type="range" min="0" max="100" value="${h.level}" class="h-level">
          <span class="a-level-val">${h.level}%</span>
          <button class="btn-sm danger h-del" type="button">Remove</button>
        </div>
      </div>`).join('') || '<p class="a-empty">No hard skills yet.</p>';
    document.querySelectorAll('.h-level').forEach(inp => {
      inp.addEventListener('input', (e) => { e.target.closest('.a-level-row').querySelector('.a-level-val').textContent = e.target.value + '%'; });
    });
    document.querySelectorAll('.h-del').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.closest('[data-hid]').dataset.hid;
        comp.hard = comp.hard.filter(h => h.id !== id);
        drawHardRows();
      });
    });
  }

  function drawSoftRows() {
    const el = document.getElementById('softSkillRows');
    if (!el) return;
    el.innerHTML = comp.soft.map(s => `
      <div class="a-field" data-sid="${s.id}" style="display:flex; gap:10px; align-items:center;">
        <input type="text" class="s-name" value="${s.name.replace(/"/g, '&quot;')}" style="flex:1;">
        <button class="btn-sm danger s-del" type="button">Remove</button>
      </div>`).join('') || '<p class="a-empty">No soft skills yet.</p>';
    document.querySelectorAll('.s-del').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.closest('[data-sid]').dataset.sid;
        comp.soft = comp.soft.filter(s => s.id !== id);
        drawSoftRows();
      });
    });
  }

  document.getElementById('addHardBtn').addEventListener('click', () => {
    comp.hard.push({ id: uid('h'), name: 'New skill', level: 70 });
    drawHardRows();
  });
  document.getElementById('addSoftBtn').addEventListener('click', () => {
    comp.soft.push({ id: uid('s'), name: 'New skill' });
    drawSoftRows();
  });

  document.getElementById('compSaveBtn').addEventListener('click', async () => {
    document.querySelectorAll('#hardSkillRows [data-hid]').forEach(row => {
      const id = row.dataset.hid;
      const h = comp.hard.find(x => x.id === id);
      if (h) { h.name = row.querySelector('.h-name').value; h.level = parseInt(row.querySelector('.h-level').value, 10); }
    });
    document.querySelectorAll('#softSkillRows [data-sid]').forEach(row => {
      const id = row.dataset.sid;
      const s = comp.soft.find(x => x.id === id);
      if (s) { s.name = row.querySelector('.s-name').value; }
    });
    STATE.competency = comp;
    await saveAllData('Competency saved.');
  });
}

/* Admin: Contact & Security */
function adminRenderContact(main) {
  const c = STATE.contact;
  const s = c.socials || {};
  main.innerHTML = `
    <div class="admin-header"><div><span class="mono-label">Section</span><h2>Contact & Security</h2></div></div>
    <div class="admin-panel-card">
      <h3>Contact details</h3>
      ${fld('Intro line (shown above the form)', 'cLead', c.lead, 'textarea')}
      <div class="a-grid2">${fld('Email', 'cEmail', c.email)}${fld('Phone', 'cPhone', c.phone)}</div>
      ${fld('Location', 'cLoc', c.location)}
    </div>
    <div class="admin-panel-card">
      <h3>Social & Resume links (contact section)</h3>
      <div class="a-grid2">${fld('GitHub URL', 'cGithub', s.github)}${fld('LinkedIn URL', 'cLinkedin', s.linkedin)}</div>
      <div class="a-grid2">${fld('Telegram URL', 'cTelegram', s.telegram)}${fld('X / Twitter URL', 'cTwitter', s.twitter)}</div>
      <div class="a-grid2">${fld('Website URL', 'cWebsite', s.website)}${fld('Resume / CV URL', 'cResume', s.resume)}</div>
    </div>
    <div class="admin-panel-card">
      <h3>Admin password</h3>
      <p class="a-help">Update your sign-in password for managing your portfolio content.</p>
      ${fld('Admin password', 'cAdminPass', STATE.admin.password, 'password')}
    </div>
    <div class="a-actions"><button class="btn-sm primary" id="contactSaveBtn">Save changes</button></div>
  `;
  document.getElementById('contactSaveBtn').addEventListener('click', async () => {
    STATE.contact = {
      lead: v('cLead'), email: v('cEmail'), phone: v('cPhone'), location: v('cLoc'),
      socials: {
        github: v('cGithub'),
        linkedin: v('cLinkedin'),
        telegram: v('cTelegram'),
        twitter: v('cTwitter'),
        website: v('cWebsite'),
        resume: v('cResume')
      }
    };
    STATE.admin = { password: v('cAdminPass') || DEFAULTS.admin.password };
    await saveAllData('Contact & Security saved.');
  });
}

/* Admin: Cloud & Global Sync */
function adminRenderCloud(main) {
  const currentEndpoint = getCloudEndpoint();
  main.innerHTML = `
    <div class="admin-header">
      <div><span class="mono-label">Realtime Worldwide Synchronization</span><h2>Cloud & Global Sync ☁️</h2></div>
    </div>
    
    <div class="admin-panel-card">
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
        <span style="display:inline-block; width:12px; height:12px; border-radius:50%; background:#10B981; box-shadow:0 0 10px #10B981;"></span>
        <strong style="font-size:16px;">Global Live Sync is Active</strong>
      </div>
      <p style="color:var(--slate); margin-bottom:16px; line-height:1.6;">
        Your changes are saved to an open, global Cloud KV Database. Whenever you update anything in this admin panel, it is broadcast live so that <strong>all visitors across all browsers and devices</strong> will instantly see your new content, projects, and posts!
      </p>

      <div class="a-field">
        <label>Cloud Database Endpoint (KV Store)</label>
        <input type="text" id="cloudEndpointInput" value="${currentEndpoint.replace(/"/g, '&quot;')}" style="font-family:var(--font-mono); font-size:13px;">
      </div>

      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:16px;">
        <button class="btn-sm primary" id="cloudPushBtn">🚀 Push Local Changes to Cloud</button>
        <button class="btn-sm" id="cloudPullBtn">⬇️ Pull Latest from Cloud</button>
        <button class="btn-sm" id="cloudResetEndpointBtn">↺ Reset to Default Cloud URL</button>
      </div>
    </div>

    <div class="admin-panel-card">
      <h3>Static Repository Content</h3>
      <p style="color:var(--slate); margin-bottom:16px; line-height:1.6;">
        Want to save your current portfolio state directly into your git repository? Click below to download the compiled <code>content.json</code> file, which you can place in <code>public/data/content.json</code> for permanent offline repository bundling.
      </p>
      <button class="btn-sm" id="cloudDownloadJsonBtn" style="border-color:var(--copper); color:var(--copper);">📥 Download data/content.json</button>
    </div>
  `;

  document.getElementById('cloudPushBtn').addEventListener('click', async () => {
    const btn = document.getElementById('cloudPushBtn');
    btn.disabled = true;
    btn.textContent = 'Pushing to cloud...';
    const ok = await pushCloudState(STATE);
    if (ok) {
      showToast('Successfully published all changes to the cloud! Visible to everyone worldwide. 🌍');
    } else {
      showToast('Failed to connect to cloud endpoint. Check network connection.');
    }
    btn.disabled = false;
    btn.textContent = '🚀 Push Local Changes to Cloud';
  });

  document.getElementById('cloudPullBtn').addEventListener('click', async () => {
    const btn = document.getElementById('cloudPullBtn');
    btn.disabled = true;
    btn.textContent = 'Fetching from cloud...';
    const cloudData = await fetchCloudState();
    if (cloudData && cloudData.personal) {
      Object.assign(STATE, cloudData);
      await saveAllData('Pulled latest cloud state successfully! ☁️');
      renderAdminTab();
    } else {
      showToast('Could not fetch remote state or cloud store is empty.');
    }
    btn.disabled = false;
    btn.textContent = '⬇️ Pull Latest from Cloud';
  });

  document.getElementById('cloudResetEndpointBtn').addEventListener('click', () => {
    setCloudEndpoint(DEFAULT_CLOUD_ENDPOINT);
    document.getElementById('cloudEndpointInput').value = DEFAULT_CLOUD_ENDPOINT;
    showToast('Reset endpoint to default global cloud.');
  });

  document.getElementById('cloudEndpointInput').addEventListener('change', (e) => {
    setCloudEndpoint(e.target.value);
    showToast('Cloud endpoint updated.');
  });

  document.getElementById('cloudDownloadJsonBtn').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(STATE, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = "content.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast('content.json downloaded.');
  });
}

/* =========================================================================
   APPLICATION INITIALIZATION
   ========================================================================= */
(async function init() {
  initTheme();
  buildNav();
  initChrome();
  await loadAllData();
  renderPublicSite();
  initScrollSpy();
})();
