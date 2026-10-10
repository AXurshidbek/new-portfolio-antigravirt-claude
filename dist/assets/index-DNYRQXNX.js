(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const b={github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z"/></svg>',telegram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 7.78l-2.03 9.56c-.15.68-.55.85-1.12.53l-3.1-2.29-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.17 5.77-5.21c.25-.22-.05-.35-.39-.12l-7.14 4.49-3.07-.96c-.67-.21-.68-.67.14-.99l12.01-4.63c.56-.21 1.05.13.84.94z"/></svg>',twitter:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.5h3.3l-7.2 8.23L23 21.5h-6.63l-5.2-6.8-5.94 6.8H2l7.7-8.8L1.4 2.5h6.8l4.7 6.2 5.34-6.2Zm-1.16 17h1.83L6.98 4.4H5.02l12.06 15.1Z"/></svg>',email:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/></svg>',website:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.6 3.6 5.7 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.7-3.6-9s1.2-6.4 3.6-9Z"/></svg>',resume:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.8 3a2 2 0 0 1-.5 2.1L8 10.2a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.5c1 .4 2 .7 3 .8a2 2 0 0 1 1.7 2Z"/></svg>',pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'};function j(t){return b[t]||b.website}const m={personal:{name:"Xurshidbek Abdubannobov",firstName:"Xurshidbek",lastName:"Abdubannobov",brand:"X. BEK",title:"Backend Developer | Python & Django Engineer",tagline:"I build scalable backend systems, REST APIs, and high-performance web applications using Python, Django, DRF, FastAPI, and PostgreSQL.",availability:"Open to Work",bioLead:"Backend Developer with over 2 years of experience building scalable backend systems, REST APIs, and web applications.",bio:`I'm a Backend Developer with over 2 years of experience building scalable backend systems, REST APIs, and web applications using Python, Django, Django REST Framework, FastAPI, and PostgreSQL. I enjoy solving complex problems, designing clean architectures, and building products that create real value.

Besides software development, I mentor backend students and have helped many aspiring developers improve their programming skills. I have solved 300+ LeetCode problems and actively participate in startup projects and hackathons.`,location:"Fergana, Uzbekistan",email:"abdubannobovx@gmail.com",phone:"+998 90 000 00 00",photoUrl:"assets/logo.jpg",yearsExperience:"2+",availableFor:"Open to Work",languages:"Uzbek, English",socials:{github:"https://github.com/AXurshidbek",linkedin:"https://linkedin.com/in/abdubannobov",telegram:"https://t.me/abdubannobov",email:"mailto:abdubannobovx@gmail.com",website:"https://www.fargoniy.uz/",resume:""}},education:[{id:"e1",degree:"Bachelor of Digital Economy",institution:"Fergana State Technical University",location:"Fergana, Uzbekistan",start:"2022",end:"2026 (Expected)",description:"Focusing on digital economic systems, software engineering, software architecture, algorithms, and modern backend web technologies."}],experience:[{id:"x1",role:"Backend Developer",company:"Software Development",location:"Fergana, Uzbekistan",start:"2024",end:"Present",current:!0,description:"Building scalable backend architectures, high-throughput REST APIs, and optimized database systems using Python, Django, DRF, FastAPI, and PostgreSQL.",bullets:["Architected scalable RESTful microservices and backend infrastructure using Python, Django REST Framework, and FastAPI","Optimized complex PostgreSQL database queries and schemas for high performance","Configured Redis caching, authentication systems, and Docker containerized deployments"]},{id:"x2",role:"Backend Mentor",company:"Codial IT Academy",location:"Fergana, Uzbekistan",start:"2024",end:"Present",current:!0,description:"Mentoring backend development students and helping aspiring developers master Python, Django, and clean API design.",bullets:["Guided students through real-world backend projects and software architecture best practices","Taught REST API design, database modeling, and Git version control workflows","Evaluated student code reviews and helped developers refine technical problem-solving skills"]},{id:"x3",role:"Mathematics Teacher",company:"Educational Institution",location:"Fergana, Uzbekistan",start:"2023",end:"2024",current:!1,description:"1 year experience teaching mathematics and analytical problem-solving logic.",bullets:["Developed structured mathematical curricula and problem-solving methodologies","Helped students build strong logical reasoning and algorithm fundamentals"]}],projects:[{id:"p1",title:"KarvonSaroy",description:"A comprehensive web platform for logistics and trade management with high-throughput backend architecture.",metric:"Scalable REST APIs & PostgreSQL Integration",tags:["Python","Django","Django REST Framework","PostgreSQL"],demoUrl:"https://example.com/karvonsaroy-demo",repoUrl:"https://github.com/AXurshidbek/karvonsaroy",featured:!0},{id:"p2",title:"CashVision",description:"Financial tracking and analytics system with real-time reporting and secure transaction authorization.",metric:"Real-time Financial Analytics Engine",tags:["FastAPI","Python","PostgreSQL","Redis"],demoUrl:"https://example.com/cashvision-demo",repoUrl:"https://github.com/AXurshidbek/cashvision",featured:!0},{id:"p3",title:"AdVista",description:"Digital advertisement management and targeting engine built for fast API response times.",metric:"High-concurrency RESTful API architecture",tags:["Django","DRF","Redis","Docker"],demoUrl:"https://example.com/advista-demo",repoUrl:"https://github.com/AXurshidbek/advista",featured:!1},{id:"p4",title:"InvestorOS",description:"An investment management platform allowing investors to track assets, returns, and portfolio distributions.",metric:"Secure Multi-tenant Backend System",tags:["Python","FastAPI","PostgreSQL","System Design"],demoUrl:"https://example.com/investoros-demo",repoUrl:"https://github.com/AXurshidbek/investoros",featured:!1},{id:"p5",title:"Multi Store E-commerce Platform",description:"Multi-tenant e-commerce system supporting multiple vendor storefronts, dynamic inventory, and checkout.",metric:"Multi-vendor Architecture & High Availability",tags:["Django REST Framework","PostgreSQL","Redis","Docker"],demoUrl:"https://example.com/multistore-demo",repoUrl:"https://github.com/AXurshidbek/multistore-ecommerce",featured:!1}],competency:{hard:[{id:"h1",name:"Python",level:95},{id:"h2",name:"Django",level:92},{id:"h3",name:"Django REST Framework",level:90},{id:"h4",name:"FastAPI",level:88},{id:"h5",name:"PostgreSQL",level:88},{id:"h6",name:"SQLite",level:85},{id:"h7",name:"Redis",level:82},{id:"h8",name:"Docker",level:80},{id:"h9",name:"Git",level:90},{id:"h10",name:"GitHub",level:90},{id:"h11",name:"Linux",level:85},{id:"h12",name:"REST API",level:92},{id:"h13",name:"Authentication",level:90},{id:"h14",name:"Authorization",level:90},{id:"h15",name:"System Design",level:85}],soft:[{id:"s1",name:"Problem Solving"},{id:"s2",name:"Leadership"},{id:"s3",name:"Communication"},{id:"s4",name:"Mentoring"},{id:"s5",name:"Critical Thinking"},{id:"s6",name:"Fast Learning"},{id:"s7",name:"Teamwork"},{id:"s8",name:"Time Management"}]},blog:[{id:"b1",title:"Solving 300+ LeetCode Problems: Key Backend Insights",date:"2026-06-10",tags:["Algorithms","Problem Solving"],excerpt:"Lessons learned from solving 300+ algorithmic challenges and how data structures directly inform backend system design.",content:`Solving over 300 algorithm problems on LeetCode transformed the way I think about software performance and memory management in production systems.

In backend engineering with Python and Django, understanding time and space complexity isn't just academic — it's the difference between a query taking 5 seconds or 50 milliseconds. Optimized data structures directly improve database index usage, caching strategy, and API response times.`},{id:"b2",title:"Building Scalable REST APIs with Django & FastAPI",date:"2026-04-15",tags:["Backend","Python"],excerpt:"Comparing Django REST Framework and FastAPI for microservices, asynchronous execution, and database ORMs.",content:`When constructing backend systems, choosing between Django REST Framework and FastAPI depends on project requirements, ORM needs, and async concurrency.

While DRF provides rapid scaffolding and powerful built-in ORM tools, FastAPI excels at high-concurrency async endpoints. In multi-tenant systems, combining robust PostgreSQL schema design with Redis caching yields resilient backend architectures.`},{id:"b3",title:"Mentoring Next-Gen Backend Developers",date:"2026-02-20",tags:["Mentoring","Education"],excerpt:"What teaching at Codial IT Academy taught me about clean code, documentation, and engineering leadership.",content:`Teaching backend development at Codial IT Academy reinforced a fundamental principle: if you can't explain a software architecture concept simply, you don't understand it deeply enough.

Helping aspiring engineers master Django, REST APIs, and database migrations improved my own code review standards and communication skills as a developer.`}],contact:{lead:"Reach out directly, or use the form — I read every message myself.",email:"abdubannobovx@gmail.com",phone:"+998 90 000 00 00",location:"Fergana, Uzbekistan — remote-friendly",socials:{github:"https://github.com/AXurshidbek",linkedin:"https://linkedin.com/in/abdubannobov",telegram:"https://t.me/abdubannobov",email:"mailto:abdubannobovx@gmail.com",website:"https://www.fargoniy.uz/",resume:""}},admin:{password:"admin123"}},p=t=>JSON.parse(JSON.stringify(t)),r={personal:p(m.personal),education:p(m.education),experience:p(m.experience),projects:p(m.projects),competency:p(m.competency),blog:p(m.blog),contact:p(m.contact),admin:p(m.admin)};async function v(t,e){try{if(window.storage&&typeof window.storage.get=="function"){const i=await window.storage.get(t,!0);if(i&&i.value!==void 0&&i.value!==null)return JSON.parse(i.value)}const n=localStorage.getItem(t);return n!==null?JSON.parse(n):e}catch(n){return console.warn(`Storage get error for ${t}:`,n),e}}async function g(t,e){try{const n=JSON.stringify(e);return localStorage.setItem(t,n),window.storage&&typeof window.storage.set=="function"&&await window.storage.set(t,n,!0),!0}catch(n){return console.error(`Storage set error for ${t}:`,n),!1}}async function H(){const t=localStorage.getItem("site:schema_version"),[e,n,i,a,s,o,d,u]=await Promise.all([v("site:personal",p(m.personal)),v("site:education",p(m.education)),v("site:experience",p(m.experience)),v("site:projects",p(m.projects)),v("site:competency",p(m.competency)),v("site:blog",p(m.blog)),v("site:contact",p(m.contact)),v("site:admin",p(m.admin))]);if(t!=="2.0"||!e||!e.name||e.name.includes("Aria")||e.name.includes("Novak")||e.photoUrl&&e.photoUrl.includes("portrait")){try{localStorage.clear(),localStorage.setItem("site:schema_version","2.0")}catch{}r.personal=p(m.personal),r.education=p(m.education),r.experience=p(m.experience),r.projects=p(m.projects),r.competency=p(m.competency),r.blog=p(m.blog),r.contact=p(m.contact),r.admin=p(m.admin);return}r.personal=e,r.education=n,r.experience=i,r.projects=a,r.competency=s,r.blog=o,r.contact=d,r.admin=u}function y(t){return t+"_"+Math.random().toString(36).slice(2,9)}const $=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"education",label:"Education"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"competency",label:"Skills"},{id:"blog",label:"Blog"},{id:"contact",label:"Contact"}];function F(){const t=document.getElementById("navLinks"),e=document.getElementById("mobileMenu"),n=document.getElementById("sideNav");t&&(t.innerHTML=$.map(i=>`<a href="#${i.id}" data-sec="${i.id}">${i.label}</a>`).join("")),e&&(e.innerHTML=$.map(i=>`<a href="#${i.id}" data-sec="${i.id}">${i.label}</a>`).join("")+'<div class="nav-social" id="mobileSocial"></div>'),n&&(n.innerHTML=$.map(i=>`<a href="#${i.id}" data-sec="${i.id}"><span class="tip">${i.label}</span></a>`).join("")),document.querySelectorAll(".mobile-menu a").forEach(i=>{i.addEventListener("click",()=>{document.getElementById("mobileMenu").classList.remove("open")})})}function N(){const t=r.personal.socials||{},e=["github","linkedin","telegram","twitter","email","website","resume"],n=e.filter(u=>t[u]).map(u=>`<a href="${t[u]}" target="_blank" rel="noopener" aria-label="${u}">${j(u)}</a>`).join(""),i=document.getElementById("navSocial"),a=document.getElementById("heroSocials"),s=document.getElementById("mobileSocial");i&&(i.innerHTML=n),a&&(a.innerHTML=n),s&&(s.innerHTML=n);const o=r.contact.socials||{},d=document.getElementById("contactSocials");d&&(d.innerHTML=e.filter(u=>o[u]).map(u=>`<a href="${o[u]}" target="_blank" rel="noopener" aria-label="${u}">${j(u)}</a>`).join(""))}function U(){const t=r.personal,e=document.getElementById("brandName");e&&(e.textContent=t.brand||(t.name||"Portfolio").split(" ").map((u,h)=>h===0?u[0]+".":u).join(" ").toUpperCase());const n=document.getElementById("availabilityText");n&&(n.textContent=t.availability||"");const i=document.getElementById("heroName");i&&(i.innerHTML=`${t.firstName||""}<br><em>${t.lastName||""}</em>`);const a=document.getElementById("heroRole");a&&(a.innerHTML=`<span>${t.title||""}</span><span class="sep">/</span><span>${t.location||""}</span>`);const s=document.getElementById("heroTagline");s&&(s.textContent=t.tagline||"");const o=document.querySelector(".hero-photo-frame");o&&(t.photoUrl?o.innerHTML=`<img id="heroPhoto" src="${t.photoUrl}" alt="${t.name||"Logo"}" onerror="this.parentElement.innerHTML='<div class=\\'hero-photo-placeholder\\'>${b.user}<span>Photo unavailable</span></div>'">`:o.innerHTML=`<div class="hero-photo-placeholder">${b.user}<span>${t.name||"Xurshidbek Abdubannobov"}<br><small style="color:var(--slate-soft);font-size:11px;">Backend Developer</small></span></div>`);const d=document.getElementById("footerNote");d&&(d.textContent=`© ${new Date().getFullYear()} ${t.name||""}. Built sheet by sheet.`)}function O(){const t=r.personal,e=document.getElementById("aboutLead");e&&(e.innerHTML=t.bioLead||"");const n=document.getElementById("aboutBody");n&&(n.innerHTML=(t.bio||"").split(`
`).filter(Boolean).map(s=>`<p>${s}</p>`).join(""));const i=[{k:"Location",v:t.location},{k:"Experience",v:t.yearsExperience?t.yearsExperience+" years":""},{k:"Available for",v:t.availableFor},{k:"Languages",v:t.languages}].filter(s=>s.v),a=document.getElementById("factList");a&&(a.innerHTML=i.map(s=>`<li><span class="k">${s.k}</span><span class="v">${s.v}</span></li>`).join(""))}function q(){const t=document.getElementById("educationList");if(t){if(!r.education.length){t.innerHTML='<p class="a-empty">No education entries yet.</p>';return}t.innerHTML=r.education.map(e=>`
    <div class="t-item">
      <div class="t-dates">${e.start} — ${e.end}</div>
      <div>
        <h3 class="t-role">${e.degree}</h3>
        <p class="t-org">${e.institution}${e.location?` <span class="loc">— ${e.location}</span>`:""}</p>
        ${e.description?`<p class="t-desc">${e.description}</p>`:""}
      </div>
    </div>`).join("")}}function W(){const t=document.getElementById("experienceList");if(t){if(!r.experience.length){t.innerHTML='<p class="a-empty">No experience entries yet.</p>';return}t.innerHTML=r.experience.map(e=>`
    <div class="t-item">
      <div class="t-dates">${e.start} — ${e.current?"Present":e.end}</div>
      <div>
        <h3 class="t-role">${e.role}</h3>
        <p class="t-org">${e.company}${e.location?` <span class="loc">— ${e.location}</span>`:""}</p>
        ${e.description?`<p class="t-desc">${e.description}</p>`:""}
        ${e.bullets&&e.bullets.length?`<ul class="t-bullets">${e.bullets.map(n=>`<li>${n}</li>`).join("")}</ul>`:""}
      </div>
    </div>`).join("")}}function z(){const t=document.getElementById("projectsList");if(t){if(!r.projects.length){t.innerHTML='<p class="a-empty">No projects yet.</p>';return}t.innerHTML=r.projects.map((e,n)=>`
    <div class="proj-card">
      <div class="proj-top">
        <span class="proj-idx">${String(n+1).padStart(2,"0")}</span>
        ${e.featured?'<span class="proj-badge">Featured</span>':""}
      </div>
      <h3>${e.title}</h3>
      <p>${e.description||""}</p>
      ${e.metric?`<p class="proj-metric">${e.metric}</p>`:""}
      <div class="proj-tags">${(e.tags||[]).map(i=>`<span class="tag">${i}</span>`).join("")}</div>
      <div class="proj-links">
        ${e.demoUrl?`<a href="${e.demoUrl}" target="_blank" rel="noopener">Live demo ${b.arrow}</a>`:""}
        ${e.repoUrl?`<a href="${e.repoUrl}" target="_blank" rel="noopener">Source ${b.arrow}</a>`:""}
      </div>
    </div>`).join("")}}function X(){const t=r.competency.hard||[],e=r.competency.soft||[],n=document.getElementById("hardSkillsList"),i=document.getElementById("softSkillsList");n&&(n.innerHTML=t.map(a=>`
      <div class="skill-row">
        <div class="sr-top"><span class="name">${a.name}</span><span class="val">${a.level}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${a.level}%"></div></div>
      </div>`).join("")||'<p class="a-empty">No hard skills yet.</p>'),i&&(i.innerHTML=e.map(a=>`<span class="soft-pill">${a.name}</span>`).join("")||'<p class="a-empty">No soft skills yet.</p>')}function S(t){try{return new Date(t+"T00:00:00").toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function R(t){const e=(t||"").trim().split(/\s+/).length;return Math.max(1,Math.round(e/200))+" min read"}function G(){const t=document.getElementById("blogList");if(!t)return;if(!r.blog.length){t.innerHTML='<p class="a-empty">No posts yet.</p>';return}const e=[...r.blog].sort((n,i)=>new Date(i.date)-new Date(n.date));t.innerHTML=e.map((n,i)=>`
    <div class="blog-card" data-blog-id="${n.id}">
      <div class="blog-cover">
        ${n.cover?`<img src="${n.cover}" alt="">`:""}
        <span class="bc-idx">NOTE ${String(i+1).padStart(2,"0")}</span>
      </div>
      <div class="blog-body">
        <div class="blog-meta">${S(n.date)} · ${R(n.content)}</div>
        <h3>${n.title}</h3>
        <p>${n.excerpt||""}</p>
        <span class="blog-read">Read note ${b.arrow}</span>
      </div>
    </div>`).join(""),t.querySelectorAll(".blog-card").forEach(n=>{n.addEventListener("click",()=>Q(n.dataset.blogId))})}function Q(t){const e=r.blog.find(s=>s.id===t);if(!e)return;const n=document.getElementById("boSheetLabel");n&&(n.textContent=e.tags&&e.tags[0]||"Field note");const i=document.getElementById("boContent");i&&(i.innerHTML=`
      <span class="mono-label">${S(e.date)} · ${R(e.content)}</span>
      <h1>${e.title}</h1>
      ${e.cover?`<div class="bo-cover"><img src="${e.cover}" alt=""></div>`:""}
      <div class="bo-body">${(e.content||"").split(`
`).filter(Boolean).map(s=>`<p>${s}</p>`).join("")}</div>
      ${e.tags&&e.tags.length?`<div class="bo-tags">${e.tags.map(s=>`<span class="tag">${s}</span>`).join("")}</div>`:""}
    `);const a=document.getElementById("blogOverlay");a&&a.classList.add("open"),document.body.style.overflow="hidden"}function A(){const t=document.getElementById("blogOverlay");t&&t.classList.remove("open"),document.body.style.overflow=""}function V(){const t=r.contact,e=document.getElementById("contactLead");e&&(e.textContent=t.lead||"");const n=[{k:"Email",v:t.email,href:"mailto:"+t.email},{k:"Phone",v:t.phone,href:"tel:"+(t.phone||"").replace(/\s/g,"")},{k:"Based in",v:t.location,href:null}].filter(a=>a.v),i=document.getElementById("contactInfoList");i&&(i.innerHTML=n.map(a=>`<li><span class="k">${a.k}</span>${a.href?`<a href="${a.href}">${a.v}</a>`:`<span>${a.v}</span>`}</li>`).join(""))}const M=document.getElementById("contactForm");M&&M.addEventListener("submit",t=>{t.preventDefault();const e=document.getElementById("cfName").value,n=document.getElementById("cfEmail").value,i=document.getElementById("cfMessage").value,a=r.contact.email||r.personal.email,s=encodeURIComponent(`Portfolio contact from ${e}`),o=encodeURIComponent(`${i}

— ${e} (${n})`);window.location.href=`mailto:${a}?subject=${s}&body=${o}`,f("Opening your email client…")});let P;function f(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),clearTimeout(P),P=setTimeout(()=>e.classList.remove("show"),2600))}function J(){const t=$.map(i=>document.getElementById(i.id)).filter(Boolean),e=i=>{document.querySelectorAll("[data-sec]").forEach(a=>{a.classList.toggle("active",a.dataset.sec===i)})},n=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&e(a.target.id)})},{rootMargin:"-40% 0px -55% 0px",threshold:0});t.forEach(i=>n.observe(i))}function _(){const t=document.getElementById("burgerBtn");t&&t.addEventListener("click",()=>{const i=document.getElementById("mobileMenu");i&&i.classList.toggle("open")});const e=document.getElementById("boCloseBtn");e&&e.addEventListener("click",A);const n=document.getElementById("adminEntryBtn");n&&n.addEventListener("click",K),window.addEventListener("keydown",i=>{i.key==="Escape"&&(A(),document.body.classList.contains("admin-mode")&&B&&I())})}function C(){U(),O(),q(),W(),z(),X(),G(),V(),N()}let w="personal",B=!1;const Z=[{id:"personal",label:"Personal info"},{id:"education",label:"Education"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"competency",label:"Competency"},{id:"blog",label:"Blog"},{id:"contact",label:"Contact & Security"}];function K(){document.body.classList.add("admin-mode"),window.scrollTo(0,0),x()}function I(){document.body.classList.remove("admin-mode"),C(),window.scrollTo(0,0)}function x(){const t=document.getElementById("adminRoot");t&&(B?(t.innerHTML=te(),ne(),k()):(t.innerHTML=Y(),ee()))}function Y(){return`
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
    </div>`}function ee(){const t=document.getElementById("adminBackBtn");t&&t.addEventListener("click",I);const e=document.getElementById("adminLoginForm");e&&e.addEventListener("submit",n=>{if(n.preventDefault(),document.getElementById("adminPassInput").value===(r.admin.password||m.admin.password))B=!0,x();else{const a=document.getElementById("adminLoginError");a&&(a.textContent="Incorrect password. Try again.",a.style.display="block")}})}function te(){return`
    <div class="admin-shell">
      <div class="admin-side">
        <div class="admin-brand">PORTFOLIO / ADMIN</div>
        <div class="admin-nav">
          ${Z.map(t=>`<button data-tab="${t.id}" class="${t.id===w?"active":""}">${t.label}</button>`).join("")}
        </div>
        <div class="admin-side-foot">
          <button class="btn-sm" id="adminExportBtn" style="background:transparent;color:var(--paper-text-dim);border-color:var(--ink-line);width:100%;">Export Data (JSON)</button>
          <button class="btn-sm" id="adminImportBtn" style="background:transparent;color:var(--paper-text-dim);border-color:var(--ink-line);width:100%;">Import Data (JSON)</button>
          <input type="file" id="adminImportFile" accept=".json" style="display:none;">
          <button class="btn-sm" id="adminViewSiteBtn" style="background:transparent;color:var(--paper-text);border-color:var(--ink-line);width:100%;margin-top:4px;">View live site</button>
          <button class="btn-sm" id="adminLogoutBtn" style="background:transparent;color:var(--paper-text-dim);border-color:var(--ink-line);width:100%;">Log out</button>
        </div>
      </div>
      <div class="admin-main" id="adminMain"></div>
    </div>`}function ne(){document.querySelectorAll(".admin-nav button").forEach(s=>{s.addEventListener("click",()=>{w=s.dataset.tab,document.querySelectorAll(".admin-nav button").forEach(o=>o.classList.toggle("active",o===s)),k()})});const t=document.getElementById("adminViewSiteBtn");t&&t.addEventListener("click",I);const e=document.getElementById("adminLogoutBtn");e&&e.addEventListener("click",()=>{B=!1,x()});const n=document.getElementById("adminExportBtn");n&&n.addEventListener("click",()=>{const s="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(r,null,2)),o=document.createElement("a");o.setAttribute("href",s),o.setAttribute("download",`portfolio_backup_${new Date().toISOString().slice(0,10)}.json`),document.body.appendChild(o),o.click(),o.remove(),f("Backup data exported.")});const i=document.getElementById("adminImportBtn"),a=document.getElementById("adminImportFile");i&&a&&(i.addEventListener("click",()=>a.click()),a.addEventListener("change",s=>{const o=s.target.files[0];if(!o)return;const d=new FileReader;d.onload=async u=>{try{const h=JSON.parse(u.target.result);h&&h.personal?(Object.assign(r,h),await Promise.all([g("site:personal",r.personal),g("site:education",r.education),g("site:experience",r.experience),g("site:projects",r.projects),g("site:competency",r.competency),g("site:blog",r.blog),g("site:contact",r.contact),g("site:admin",r.admin)]),f("Portfolio data restored successfully!"),k()):alert("Invalid portfolio backup file format.")}catch{alert("Error parsing backup JSON file.")}},d.readAsText(o)}))}function k(){const t=document.getElementById("adminMain");if(!t)return;const e={personal:ae,education:L("education"),experience:L("experience"),projects:L("projects"),competency:oe,blog:L("blog"),contact:se};t.innerHTML="",e[w]&&e[w](t)}function c(t,e,n,i="text"){return i==="textarea"?`<div class="a-field"><label>${t}</label><textarea id="${e}">${n||""}</textarea></div>`:`<div class="a-field"><label>${t}</label><input type="${i}" id="${e}" value="${(n||"").toString().replace(/"/g,"&quot;")}"></div>`}function l(t){const e=document.getElementById(t);return e?e.value:""}function ae(t){const e=r.personal,n=e.socials||{};t.innerHTML=`
    <div class="admin-header"><div><span class="mono-label">Section</span><h2>Personal info</h2></div></div>
    <div class="admin-panel-card">
      <h3>Identity & Title</h3>
      <div class="a-grid2">
        ${c("First name","pFirst",e.firstName)}
        ${c("Last name","pLast",e.lastName)}
      </div>
      <div class="a-grid2">
        ${c("Brand / Logo text","pBrand",e.brand||"X. BEK")}
        ${c("Title / role","pTitle",e.title)}
      </div>
      <div class="a-grid2">
        ${c("Availability status","pAvail",e.availability)}
        ${c("Photo URL (leave blank for placeholder)","pPhoto",e.photoUrl)}
      </div>
      ${c("Tagline (shown large on the hero)","pTagline",e.tagline,"textarea")}
    </div>
    <div class="admin-panel-card">
      <h3>About section</h3>
      ${c("Lead sentence (HTML allowed, e.g. <em>)","pLead",e.bioLead,"textarea")}
      ${c("Bio (use a blank line to start a new paragraph)","pBio",e.bio,"textarea")}
      <div class="a-grid2">
        ${c("Location","pLoc",e.location)}
        ${c("Years of experience","pYears",e.yearsExperience)}
      </div>
      <div class="a-grid2">
        ${c("Available for","pAvailFor",e.availableFor)}
        ${c("Languages","pLang",e.languages)}
      </div>
    </div>
    <div class="admin-panel-card">
      <h3>Header & Hero Social / Resume Links</h3>
      <div class="a-grid2">
        ${c("Email","pEmail",e.email)}
        ${c("Phone","pPhone",e.phone)}
      </div>
      <div class="a-grid2">
        ${c("GitHub URL","pGithub",n.github)}
        ${c("LinkedIn URL","pLinkedin",n.linkedin)}
      </div>
      <div class="a-grid2">
        ${c("Telegram URL","pTelegram",n.telegram)}
        ${c("X / Twitter URL","pTwitter",n.twitter)}
      </div>
      <div class="a-grid2">
        ${c("Website URL","pWebsite",n.website)}
        ${c("Resume / CV URL","pResume",n.resume)}
      </div>
    </div>
    <div class="a-actions"><button class="btn-sm primary" id="pSaveBtn">Save changes</button></div>
  `,document.getElementById("pSaveBtn").addEventListener("click",async()=>{r.personal={...r.personal,firstName:l("pFirst"),lastName:l("pLast"),brand:l("pBrand"),title:l("pTitle"),availability:l("pAvail"),tagline:l("pTagline"),photoUrl:l("pPhoto"),bioLead:l("pLead"),bio:l("pBio"),location:l("pLoc"),yearsExperience:l("pYears"),availableFor:l("pAvailFor"),languages:l("pLang"),email:l("pEmail"),phone:l("pPhone"),name:`${l("pFirst")} ${l("pLast")}`.trim(),socials:{github:l("pGithub"),linkedin:l("pLinkedin"),telegram:l("pTelegram"),twitter:l("pTwitter"),email:l("pEmail")?l("pEmail").startsWith("mailto:")?l("pEmail"):"mailto:"+l("pEmail"):"",website:l("pWebsite"),resume:l("pResume")}},await g("site:personal",r.personal),f("Personal info saved.")})}function L(t){return function(e){const n=r[t],i={education:"Education",experience:"Experience",projects:"Projects",blog:"Blog posts"};e.innerHTML=`
      <div class="admin-header">
        <div><span class="mono-label">Section</span><h2>${i[t]}</h2></div>
        <button class="btn-sm primary" id="addNewBtn">+ Add ${t==="blog"?"post":"entry"}</button>
      </div>
      <div id="listWrap"></div>
      <div id="formWrap"></div>
    `,T(t,n),document.getElementById("addNewBtn").addEventListener("click",()=>D(t,null))}}function ie(t,e){if(t==="education")return{title:e.degree,sub:`${e.institution} · ${e.start}–${e.end}`};if(t==="experience")return{title:e.role,sub:`${e.company} · ${e.start}–${e.current?"Present":e.end}`};if(t==="projects")return{title:e.title,sub:(e.tags||[]).join(", ")};if(t==="blog")return{title:e.title,sub:S(e.date)}}function T(t,e){const n=document.getElementById("listWrap");if(n){if(!e.length){n.innerHTML='<p class="a-empty">Nothing here yet — add your first entry.</p>';return}n.innerHTML=e.map(i=>{const{title:a,sub:s}=ie(t,i);return`<div class="admin-list-item" data-id="${i.id}">
      <div><p class="aim-title">${a}</p><p class="aim-sub">${s}</p></div>
      <div class="aim-actions">
        <button class="btn-sm" data-act="edit">Edit</button>
        <button class="btn-sm danger" data-act="delete">Delete</button>
      </div>
    </div>`}).join(""),n.querySelectorAll('[data-act="edit"]').forEach(i=>{i.addEventListener("click",a=>{const s=a.target.closest(".admin-list-item").dataset.id;D(t,r[t].find(o=>o.id===s))})}),n.querySelectorAll('[data-act="delete"]').forEach(i=>{i.addEventListener("click",async a=>{const s=a.target.closest(".admin-list-item").dataset.id;if(!confirm("Delete this entry? This cannot be undone."))return;r[t]=r[t].filter(d=>d.id!==s),await g("site:"+t,r[t]),T(t,r[t]);const o=document.getElementById("formWrap");o&&(o.innerHTML=""),f("Entry deleted.")})})}}function D(t,e){const n=document.getElementById("formWrap");if(!n)return;const i=!e;let a="";if(t==="education"){const o=e||{id:y("e"),degree:"",institution:"",location:"",start:"",end:"",description:""};a=`<div class="admin-panel-card"><h3>${i?"New":"Edit"} education entry</h3>
      ${c("Degree / program","fDegree",o.degree)}
      <div class="a-grid2">${c("Institution","fInst",o.institution)}${c("Location","fLoc",o.location)}</div>
      <div class="a-grid2">${c("Start year","fStart",o.start)}${c("End year","fEnd",o.end)}</div>
      ${c("Description","fDesc",o.description,"textarea")}
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save entry</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`,n.innerHTML=a,s(),document.getElementById("saveItemBtn").addEventListener("click",()=>E("education",o.id,{id:o.id,degree:l("fDegree"),institution:l("fInst"),location:l("fLoc"),start:l("fStart"),end:l("fEnd"),description:l("fDesc")}))}if(t==="experience"){const o=e||{id:y("x"),role:"",company:"",location:"",start:"",end:"",current:!1,description:"",bullets:[]};a=`<div class="admin-panel-card"><h3>${i?"New":"Edit"} experience entry</h3>
      <div class="a-grid2">${c("Role / title","fRole",o.role)}${c("Company","fCompany",o.company)}</div>
      <div class="a-grid2">${c("Location","fLoc",o.location)}${c("Start year","fStart",o.start)}</div>
      <div class="a-grid2">
        ${c("End year (ignored if current)","fEnd",o.end)}
        <div class="a-field"><label>Currently working here?</label>
          <select id="fCurrent"><option value="no" ${o.current?"":"selected"}>No</option><option value="yes" ${o.current?"selected":""}>Yes</option></select>
        </div>
      </div>
      ${c("Short description","fDesc",o.description,"textarea")}
      ${c("Highlights (one per line)","fBullets",(o.bullets||[]).join(`
`),"textarea")}
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save entry</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`,n.innerHTML=a,s(),document.getElementById("saveItemBtn").addEventListener("click",()=>E("experience",o.id,{id:o.id,role:l("fRole"),company:l("fCompany"),location:l("fLoc"),start:l("fStart"),end:l("fEnd"),current:l("fCurrent")==="yes",description:l("fDesc"),bullets:l("fBullets").split(`
`).map(d=>d.trim()).filter(Boolean)}))}if(t==="projects"){const o=e||{id:y("p"),title:"",description:"",metric:"",tags:[],demoUrl:"",repoUrl:"",featured:!1};a=`<div class="admin-panel-card"><h3>${i?"New":"Edit"} project</h3>
      ${c("Project title","fTitle",o.title)}
      ${c("Description","fDesc",o.description,"textarea")}
      ${c("Key metric / result (optional)","fMetric",o.metric)}
      ${c("Tags / tech stack (comma separated)","fTags",(o.tags||[]).join(", "))}
      <div class="a-grid2">${c("Live demo URL","fDemo",o.demoUrl)}${c("Source / repo URL","fRepo",o.repoUrl)}</div>
      <div class="a-field"><label>Featured project?</label>
        <select id="fFeatured"><option value="no" ${o.featured?"":"selected"}>No</option><option value="yes" ${o.featured?"selected":""}>Yes</option></select>
      </div>
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save project</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`,n.innerHTML=a,s(),document.getElementById("saveItemBtn").addEventListener("click",()=>E("projects",o.id,{id:o.id,title:l("fTitle"),description:l("fDesc"),metric:l("fMetric"),tags:l("fTags").split(",").map(d=>d.trim()).filter(Boolean),demoUrl:l("fDemo"),repoUrl:l("fRepo"),featured:l("fFeatured")==="yes"}))}if(t==="blog"){const o=e||{id:y("b"),title:"",date:new Date().toISOString().slice(0,10),tags:[],excerpt:"",content:"",cover:""};a=`<div class="admin-panel-card"><h3>${i?"New":"Edit"} post</h3>
      ${c("Title","fTitle",o.title)}
      <div class="a-grid2">${c("Publish date","fDate",o.date,"date")}${c("Tags (comma separated)","fTags",(o.tags||[]).join(", "))}</div>
      ${c("Cover image URL (optional)","fCover",o.cover)}
      ${c("Excerpt (shown on the blog list)","fExcerpt",o.excerpt,"textarea")}
      ${c("Full content (use a blank line for a new paragraph)","fContent",o.content,"textarea")}
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save post</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`,n.innerHTML=a,s(),document.getElementById("saveItemBtn").addEventListener("click",()=>E("blog",o.id,{id:o.id,title:l("fTitle"),date:l("fDate"),tags:l("fTags").split(",").map(d=>d.trim()).filter(Boolean),cover:l("fCover"),excerpt:l("fExcerpt"),content:l("fContent")}))}function s(){const o=document.getElementById("cancelItemBtn");o&&o.addEventListener("click",()=>{n.innerHTML=""})}}async function E(t,e,n){const i=r[t].findIndex(s=>s.id===e);i>-1?r[t][i]=n:r[t].push(n),await g("site:"+t,r[t]),T(t,r[t]);const a=document.getElementById("formWrap");a&&(a.innerHTML=""),f("Saved.")}function oe(t){const e=r.competency;t.innerHTML=`
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
  `,n(),i();function n(){const a=document.getElementById("hardSkillRows");a&&(a.innerHTML=e.hard.map(s=>`
      <div class="a-field" data-hid="${s.id}">
        <label>Skill name</label>
        <input type="text" class="h-name" value="${s.name.replace(/"/g,"&quot;")}">
        <div class="a-level-row" style="margin-top:8px;">
          <input type="range" min="0" max="100" value="${s.level}" class="h-level">
          <span class="a-level-val">${s.level}%</span>
          <button class="btn-sm danger h-del" type="button">Remove</button>
        </div>
      </div>`).join("")||'<p class="a-empty">No hard skills yet.</p>',document.querySelectorAll(".h-level").forEach(s=>{s.addEventListener("input",o=>{o.target.closest(".a-level-row").querySelector(".a-level-val").textContent=o.target.value+"%"})}),document.querySelectorAll(".h-del").forEach(s=>{s.addEventListener("click",o=>{const d=o.target.closest("[data-hid]").dataset.hid;e.hard=e.hard.filter(u=>u.id!==d),n()})}))}function i(){const a=document.getElementById("softSkillRows");a&&(a.innerHTML=e.soft.map(s=>`
      <div class="a-field" data-sid="${s.id}" style="display:flex; gap:10px; align-items:center;">
        <input type="text" class="s-name" value="${s.name.replace(/"/g,"&quot;")}" style="flex:1;">
        <button class="btn-sm danger s-del" type="button">Remove</button>
      </div>`).join("")||'<p class="a-empty">No soft skills yet.</p>',document.querySelectorAll(".s-del").forEach(s=>{s.addEventListener("click",o=>{const d=o.target.closest("[data-sid]").dataset.sid;e.soft=e.soft.filter(u=>u.id!==d),i()})}))}document.getElementById("addHardBtn").addEventListener("click",()=>{e.hard.push({id:y("h"),name:"New skill",level:70}),n()}),document.getElementById("addSoftBtn").addEventListener("click",()=>{e.soft.push({id:y("s"),name:"New skill"}),i()}),document.getElementById("compSaveBtn").addEventListener("click",async()=>{document.querySelectorAll("#hardSkillRows [data-hid]").forEach(a=>{const s=a.dataset.hid,o=e.hard.find(d=>d.id===s);o&&(o.name=a.querySelector(".h-name").value,o.level=parseInt(a.querySelector(".h-level").value,10))}),document.querySelectorAll("#softSkillRows [data-sid]").forEach(a=>{const s=a.dataset.sid,o=e.soft.find(d=>d.id===s);o&&(o.name=a.querySelector(".s-name").value)}),r.competency=e,await g("site:competency",r.competency),f("Competency saved.")})}function se(t){const e=r.contact,n=e.socials||{};t.innerHTML=`
    <div class="admin-header"><div><span class="mono-label">Section</span><h2>Contact & Security</h2></div></div>
    <div class="admin-panel-card">
      <h3>Contact details</h3>
      ${c("Intro line (shown above the form)","cLead",e.lead,"textarea")}
      <div class="a-grid2">${c("Email","cEmail",e.email)}${c("Phone","cPhone",e.phone)}</div>
      ${c("Location","cLoc",e.location)}
    </div>
    <div class="admin-panel-card">
      <h3>Social & Resume links (contact section)</h3>
      <div class="a-grid2">${c("GitHub URL","cGithub",n.github)}${c("LinkedIn URL","cLinkedin",n.linkedin)}</div>
      <div class="a-grid2">${c("Telegram URL","cTelegram",n.telegram)}${c("X / Twitter URL","cTwitter",n.twitter)}</div>
      <div class="a-grid2">${c("Website URL","cWebsite",n.website)}${c("Resume / CV URL","cResume",n.resume)}</div>
    </div>
    <div class="admin-panel-card">
      <h3>Admin password</h3>
      <p class="a-help">Update your sign-in password for managing your portfolio content.</p>
      ${c("Admin password","cAdminPass",r.admin.password,"password")}
    </div>
    <div class="a-actions"><button class="btn-sm primary" id="contactSaveBtn">Save changes</button></div>
  `,document.getElementById("contactSaveBtn").addEventListener("click",async()=>{r.contact={lead:l("cLead"),email:l("cEmail"),phone:l("cPhone"),location:l("cLoc"),socials:{github:l("cGithub"),linkedin:l("cLinkedin"),telegram:l("cTelegram"),twitter:l("cTwitter"),website:l("cWebsite"),resume:l("cResume")}},r.admin={password:l("cAdminPass")||m.admin.password},await Promise.all([g("site:contact",r.contact),g("site:admin",r.admin)]),f("Contact & Security saved.")})}(async function(){F(),_(),await H(),C(),J()})();
