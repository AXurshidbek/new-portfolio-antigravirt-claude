(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const b={github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z"/></svg>',telegram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 7.78l-2.03 9.56c-.15.68-.55.85-1.12.53l-3.1-2.29-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.17 5.77-5.21c.25-.22-.05-.35-.39-.12l-7.14 4.49-3.07-.96c-.67-.21-.68-.67.14-.99l12.01-4.63c.56-.21 1.05.13.84.94z"/></svg>',twitter:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.5h3.3l-7.2 8.23L23 21.5h-6.63l-5.2-6.8-5.94 6.8H2l7.7-8.8L1.4 2.5h6.8l4.7 6.2 5.34-6.2Zm-1.16 17h1.83L6.98 4.4H5.02l12.06 15.1Z"/></svg>',email:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/></svg>',website:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.6 3.6 5.7 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.7-3.6-9s1.2-6.4 3.6-9Z"/></svg>',resume:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.8 3a2 2 0 0 1-.5 2.1L8 10.2a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.5c1 .4 2 .7 3 .8a2 2 0 0 1 1.7 2Z"/></svg>',pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'};function R(t){return b[t]||b.website}const m={personal:{name:"Xurshidbek Abdubannobov",firstName:"Xurshidbek",lastName:"Abdubannobov",brand:"X. BEK",title:"Backend Developer | Python & Django Engineer",tagline:"I build scalable backend systems, REST APIs, and high-performance web applications using Python, Django, DRF, FastAPI, and PostgreSQL.",availability:"Open to Work",bioLead:"Backend Developer with over 2 years of experience building scalable backend systems, REST APIs, and web applications.",bio:`I'm a Backend Developer with over 2 years of experience building scalable backend systems, REST APIs, and web applications using Python, Django, Django REST Framework, FastAPI, and PostgreSQL. I enjoy solving complex problems, designing clean architectures, and building products that create real value.

Besides software development, I mentor backend students and have helped many aspiring developers improve their programming skills. I have solved 300+ LeetCode problems and actively participate in startup projects and hackathons.`,location:"Fergana, Uzbekistan",email:"abdubannobovx@gmail.com",phone:"+998 90 000 00 00",photoUrl:"assets/logo.jpg",yearsExperience:"2+",availableFor:"Open to Work",languages:"Uzbek, English",socials:{github:"https://github.com/AXurshidbek",linkedin:"https://linkedin.com/in/AXurshidbek",telegram:"https://t.me/A_Xurshidbek",email:"mailto:abdubannobovx@gmail.com",website:"https://www.fargoniy.uz/",resume:""}},education:[{id:"e1",degree:"Bachelor of Digital Economy",institution:"Fergana State Technical University",location:"Fergana, Uzbekistan",start:"2022",end:"2026 (Expected)",description:"Focusing on digital economic systems, software engineering, software architecture, algorithms, and modern backend web technologies."}],experience:[{id:"x1",role:"Backend Developer",company:"Software Development",location:"Fergana, Uzbekistan",start:"2024",end:"Present",current:!0,description:"Building scalable backend architectures, high-throughput REST APIs, and optimized database systems using Python, Django, DRF, FastAPI, and PostgreSQL.",bullets:["Architected scalable RESTful microservices and backend infrastructure using Python, Django REST Framework, and FastAPI","Optimized complex PostgreSQL database queries and schemas for high performance","Configured Redis caching, authentication systems, and Docker containerized deployments"]},{id:"x2",role:"Backend Mentor",company:"Codial IT Academy",location:"Fergana, Uzbekistan",start:"2024",end:"Present",current:!0,description:"Mentoring backend development students and helping aspiring developers master Python, Django, and clean API design.",bullets:["Guided students through real-world backend projects and software architecture best practices","Taught REST API design, database modeling, and Git version control workflows","Evaluated student code reviews and helped developers refine technical problem-solving skills"]},{id:"x3",role:"Mathematics Teacher",company:"Educational Institution",location:"Fergana, Uzbekistan",start:"2023",end:"2024",current:!1,description:"1 year experience teaching mathematics and analytical problem-solving logic.",bullets:["Developed structured mathematical curricula and problem-solving methodologies","Helped students build strong logical reasoning and algorithm fundamentals"]}],projects:[{id:"p1",title:"KarvonSaroy",description:"A comprehensive web platform for logistics and trade management with high-throughput backend architecture.",metric:"Scalable REST APIs & PostgreSQL Integration",tags:["Python","Django","Django REST Framework","PostgreSQL"],demoUrl:"https://example.com/karvonsaroy-demo",repoUrl:"https://github.com/AXurshidbek/karvonsaroy",featured:!0},{id:"p2",title:"CashVision",description:"Financial tracking and analytics system with real-time reporting and secure transaction authorization.",metric:"Real-time Financial Analytics Engine",tags:["FastAPI","Python","PostgreSQL","Redis"],demoUrl:"https://example.com/cashvision-demo",repoUrl:"https://github.com/AXurshidbek/cashvision",featured:!0},{id:"p3",title:"AdVista",description:"Digital advertisement management and targeting engine built for fast API response times.",metric:"High-concurrency RESTful API architecture",tags:["Django","DRF","Redis","Docker"],demoUrl:"https://example.com/advista-demo",repoUrl:"https://github.com/AXurshidbek/advista",featured:!1},{id:"p4",title:"InvestorOS",description:"An investment management platform allowing investors to track assets, returns, and portfolio distributions.",metric:"Secure Multi-tenant Backend System",tags:["Python","FastAPI","PostgreSQL","System Design"],demoUrl:"https://example.com/investoros-demo",repoUrl:"https://github.com/AXurshidbek/investoros",featured:!1},{id:"p5",title:"Multi Store E-commerce Platform",description:"Multi-tenant e-commerce system supporting multiple vendor storefronts, dynamic inventory, and checkout.",metric:"Multi-vendor Architecture & High Availability",tags:["Django REST Framework","PostgreSQL","Redis","Docker"],demoUrl:"https://example.com/multistore-demo",repoUrl:"https://github.com/AXurshidbek/multistore-ecommerce",featured:!1}],competency:{hard:[{id:"h1",name:"Python",level:95},{id:"h2",name:"Django",level:92},{id:"h3",name:"Django REST Framework",level:90},{id:"h4",name:"FastAPI",level:88},{id:"h5",name:"PostgreSQL",level:88},{id:"h6",name:"SQLite",level:85},{id:"h7",name:"Redis",level:82},{id:"h8",name:"Docker",level:80},{id:"h9",name:"Git",level:90},{id:"h10",name:"GitHub",level:90},{id:"h11",name:"Linux",level:85},{id:"h12",name:"REST API",level:92},{id:"h13",name:"Authentication",level:90},{id:"h14",name:"Authorization",level:90},{id:"h15",name:"System Design",level:85}],soft:[{id:"s1",name:"Problem Solving"},{id:"s2",name:"Leadership"},{id:"s3",name:"Communication"},{id:"s4",name:"Mentoring"},{id:"s5",name:"Critical Thinking"},{id:"s6",name:"Fast Learning"},{id:"s7",name:"Teamwork"},{id:"s8",name:"Time Management"}]},blog:[{id:"b1",title:"Solving 300+ LeetCode Problems: Key Backend Insights",date:"2026-06-10",tags:["Algorithms","Problem Solving"],excerpt:"Lessons learned from solving 300+ algorithmic challenges and how data structures directly inform backend system design.",content:`Solving over 300 algorithm problems on LeetCode transformed the way I think about software performance and memory management in production systems.

In backend engineering with Python and Django, understanding time and space complexity isn't just academic — it's the difference between a query taking 5 seconds or 50 milliseconds. Optimized data structures directly improve database index usage, caching strategy, and API response times.`},{id:"b2",title:"Building Scalable REST APIs with Django & FastAPI",date:"2026-04-15",tags:["Backend","Python"],excerpt:"Comparing Django REST Framework and FastAPI for microservices, asynchronous execution, and database ORMs.",content:`When constructing backend systems, choosing between Django REST Framework and FastAPI depends on project requirements, ORM needs, and async concurrency.

While DRF provides rapid scaffolding and powerful built-in ORM tools, FastAPI excels at high-concurrency async endpoints. In multi-tenant systems, combining robust PostgreSQL schema design with Redis caching yields resilient backend architectures.`},{id:"b3",title:"Mentoring Next-Gen Backend Developers",date:"2026-02-20",tags:["Mentoring","Education"],excerpt:"What teaching at Codial IT Academy taught me about clean code, documentation, and engineering leadership.",content:`Teaching backend development at Codial IT Academy reinforced a fundamental principle: if you can't explain a software architecture concept simply, you don't understand it deeply enough.

Helping aspiring engineers master Django, REST APIs, and database migrations improved my own code review standards and communication skills as a developer.`}],contact:{lead:"Reach out directly, or use the form — I read every message myself.",email:"abdubannobovx@gmail.com",phone:"+998 90 000 00 00",location:"Fergana, Uzbekistan — remote-friendly",socials:{github:"https://github.com/AXurshidbek",linkedin:"https://linkedin.com/in/AXurshidbek",telegram:"https://t.me/A_Xurshidbek",email:"mailto:abdubannobovx@gmail.com",website:"https://www.fargoniy.uz/",resume:""}},admin:{password:"admin123"}},p=t=>JSON.parse(JSON.stringify(t)),s={personal:p(m.personal),education:p(m.education),experience:p(m.experience),projects:p(m.projects),competency:p(m.competency),blog:p(m.blog),contact:p(m.contact),admin:p(m.admin)},x="https://kvdb.io/GbEtEsmYpRjAN6ev1PDmcb/portfolio_state";function T(){return localStorage.getItem("site:cloud_endpoint")||x}function D(t){t&&t.trim()?localStorage.setItem("site:cloud_endpoint",t.trim()):localStorage.removeItem("site:cloud_endpoint")}async function U(){const t=T();try{const e=new AbortController,n=setTimeout(()=>e.abort(),3500),a=await fetch(t,{signal:e.signal});if(clearTimeout(n),a.ok){const o=await a.json();if(o&&o.personal&&o.personal.name)return o}}catch(e){console.warn("Cloud fetch warning (using local fallback):",e)}return null}async function j(t){const e=T();try{const n={...t,updatedAt:new Date().toISOString()};return(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok}catch(n){return console.warn("Cloud push error:",n),!1}}async function W(){try{const t=await fetch("data/content.json");if(t.ok){const e=await t.json();if(e&&e.personal&&e.personal.name)return e}}catch{}return null}async function h(t,e){try{if(window.storage&&typeof window.storage.get=="function"){const a=await window.storage.get(t,!0);if(a&&a.value!==void 0&&a.value!==null)return JSON.parse(a.value)}const n=localStorage.getItem(t);return n!==null?JSON.parse(n):e}catch(n){return console.warn(`Storage get error for ${t}:`,n),e}}async function f(t,e){try{const n=JSON.stringify(e);return localStorage.setItem(t,n),window.storage&&typeof window.storage.set=="function"&&await window.storage.set(t,n,!0),!0}catch(n){return console.error(`Storage set error for ${t}:`,n),!1}}async function y(t="Saved."){await Promise.all([f("site:personal",s.personal),f("site:education",s.education),f("site:experience",s.experience),f("site:projects",s.projects),f("site:competency",s.competency),f("site:blog",s.blog),f("site:contact",s.contact),f("site:admin",s.admin)]),v(t+" Syncing to cloud…");const e=await j(s);v(e?t+" Synced live to cloud for all visitors! ☁️":t+" Saved locally (cloud sync offline).")}async function J(){const t=await U();if(t&&t.personal&&!t.personal.name.includes("Aria")){s.personal=t.personal,s.education=t.education||[],s.experience=t.experience||[],s.projects=t.projects||[],s.competency=t.competency||{hard:[],soft:[]},s.blog=t.blog||[],s.contact=t.contact||p(m.contact),s.admin=t.admin||p(m.admin);try{localStorage.setItem("site:schema_version","2.2"),localStorage.setItem("site:personal",JSON.stringify(s.personal)),localStorage.setItem("site:education",JSON.stringify(s.education)),localStorage.setItem("site:experience",JSON.stringify(s.experience)),localStorage.setItem("site:projects",JSON.stringify(s.projects)),localStorage.setItem("site:competency",JSON.stringify(s.competency)),localStorage.setItem("site:blog",JSON.stringify(s.blog)),localStorage.setItem("site:contact",JSON.stringify(s.contact)),localStorage.setItem("site:admin",JSON.stringify(s.admin))}catch{}return}const e=localStorage.getItem("site:schema_version"),[n,a,o,l,i,d,u,E]=await Promise.all([h("site:personal",null),h("site:education",null),h("site:experience",null),h("site:projects",null),h("site:competency",null),h("site:blog",null),h("site:contact",null),h("site:admin",null)]);if(e==="2.2"&&n&&n.name&&!n.name.includes("Aria")){s.personal=n,s.education=a||[],s.experience=o||[],s.projects=l||[],s.competency=i||{hard:[],soft:[]},s.blog=d||[],s.contact=u||p(m.contact),s.admin=E||p(m.admin);return}const g=await W();if(g&&g.personal&&!g.personal.name.includes("Aria")){s.personal=g.personal,s.education=g.education||[],s.experience=g.experience||[],s.projects=g.projects||[],s.competency=g.competency||{hard:[],soft:[]},s.blog=g.blog||[],s.contact=g.contact||p(m.contact),s.admin=g.admin||p(m.admin);return}s.personal=p(m.personal),s.education=p(m.education),s.experience=p(m.experience),s.projects=p(m.projects),s.competency=p(m.competency),s.blog=p(m.blog),s.contact=p(m.contact),s.admin=p(m.admin)}function X(){const t=()=>{const l=localStorage.getItem("site:theme");return l==="dark"||l==="light"?l:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},e=l=>{document.documentElement.setAttribute("data-theme",l);const i=document.querySelector('meta[name="theme-color"]');i&&i.setAttribute("content",l==="dark"?"#0B111E":"#101826")},n=()=>{const i=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";e(i),localStorage.setItem("site:theme",i),v(`Switched to ${i==="dark"?"Dark":"Light"} mode`)};e(t());const a=document.getElementById("themeToggleBtn");a&&a.addEventListener("click",n);const o=document.getElementById("mobileThemeToggleBtn");o&&o.addEventListener("click",n),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",l=>{localStorage.getItem("site:theme")||e(l.matches?"dark":"light")})}function w(t){return t+"_"+Math.random().toString(36).slice(2,9)}const S=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"education",label:"Education"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"competency",label:"Skills"},{id:"blog",label:"Blog"},{id:"contact",label:"Contact"}];function _(){const t=document.getElementById("navLinks"),e=document.getElementById("mobileMenu"),n=document.getElementById("sideNav");if(t&&(t.innerHTML=S.map(a=>`<a href="#${a.id}" data-sec="${a.id}">${a.label}</a>`).join("")),e){e.innerHTML=`<div class="mobile-theme-row">
        <span>Appearance</span>
        <button class="theme-toggle" id="mobileThemeToggleBtn" aria-label="Toggle theme">
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </button>
      </div>`+S.map(o=>`<a href="#${o.id}" data-sec="${o.id}">${o.label}</a>`).join("")+'<div class="nav-social" id="mobileSocial"></div>';const a=document.getElementById("mobileThemeToggleBtn");a&&a.addEventListener("click",()=>{const l=(document.documentElement.getAttribute("data-theme")||"light")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",l),localStorage.setItem("site:theme",l),v(`Switched to ${l==="dark"?"Dark":"Light"} mode`)})}n&&(n.innerHTML=S.map(a=>`<a href="#${a.id}" data-sec="${a.id}"><span class="tip">${a.label}</span></a>`).join("")),document.querySelectorAll(".mobile-menu a").forEach(a=>{a.addEventListener("click",()=>{document.getElementById("mobileMenu").classList.remove("open")})})}function G(){const t=s.personal.socials||{},e=["github","linkedin","telegram","twitter","email","website","resume"],n=e.filter(u=>t[u]).map(u=>`<a href="${t[u]}" target="_blank" rel="noopener" aria-label="${u}">${R(u)}</a>`).join(""),a=document.getElementById("navSocial"),o=document.getElementById("heroSocials"),l=document.getElementById("mobileSocial");a&&(a.innerHTML=n),o&&(o.innerHTML=n),l&&(l.innerHTML=n);const i=s.contact.socials||{},d=document.getElementById("contactSocials");d&&(d.innerHTML=e.filter(u=>i[u]).map(u=>`<a href="${i[u]}" target="_blank" rel="noopener" aria-label="${u}">${R(u)}</a>`).join(""))}function Q(){const t=s.personal,e=document.getElementById("brandName");e&&(e.textContent=t.brand||(t.name||"Portfolio").split(" ").map((u,E)=>E===0?u[0]+".":u).join(" ").toUpperCase());const n=document.getElementById("availabilityText");n&&(n.textContent=t.availability||"");const a=document.getElementById("heroName");a&&(a.innerHTML=`${t.firstName||""}<br><em>${t.lastName||""}</em>`);const o=document.getElementById("heroRole");o&&(o.innerHTML=`<span>${t.title||""}</span><span class="sep">/</span><span>${t.location||""}</span>`);const l=document.getElementById("heroTagline");l&&(l.textContent=t.tagline||"");const i=document.querySelector(".hero-photo-frame");i&&(t.photoUrl?i.innerHTML=`<img id="heroPhoto" src="${t.photoUrl}" alt="${t.name||"Logo"}" onerror="this.parentElement.innerHTML='<div class=\\'hero-photo-placeholder\\'>${b.user}<span>Photo unavailable</span></div>'">`:i.innerHTML=`<div class="hero-photo-placeholder">${b.user}<span>${t.name||"Xurshidbek Abdubannobov"}<br><small style="color:var(--slate-soft);font-size:11px;">Backend Developer</small></span></div>`);const d=document.getElementById("footerNote");d&&(d.textContent=`© ${new Date().getFullYear()} ${t.name||""}. Built sheet by sheet.`)}function V(){const t=s.personal,e=document.getElementById("aboutLead");e&&(e.innerHTML=t.bioLead||"");const n=document.getElementById("aboutBody");n&&(n.innerHTML=(t.bio||"").split(`
`).filter(Boolean).map(l=>`<p>${l}</p>`).join(""));const a=[{k:"Location",v:t.location},{k:"Experience",v:t.yearsExperience?t.yearsExperience+" years":""},{k:"Available for",v:t.availableFor},{k:"Languages",v:t.languages}].filter(l=>l.v),o=document.getElementById("factList");o&&(o.innerHTML=a.map(l=>`<li><span class="k">${l.k}</span><span class="v">${l.v}</span></li>`).join(""))}function Z(){const t=document.getElementById("educationList");if(t){if(!s.education.length){t.innerHTML='<p class="a-empty">No education entries yet.</p>';return}t.innerHTML=s.education.map(e=>`
    <div class="t-item">
      <div class="t-dates">${e.start} — ${e.end}</div>
      <div>
        <h3 class="t-role">${e.degree}</h3>
        <p class="t-org">${e.institution}${e.location?` <span class="loc">— ${e.location}</span>`:""}</p>
        ${e.description?`<p class="t-desc">${e.description}</p>`:""}
      </div>
    </div>`).join("")}}function K(){const t=document.getElementById("experienceList");if(t){if(!s.experience.length){t.innerHTML='<p class="a-empty">No experience entries yet.</p>';return}t.innerHTML=s.experience.map(e=>`
    <div class="t-item">
      <div class="t-dates">${e.start} — ${e.current?"Present":e.end}</div>
      <div>
        <h3 class="t-role">${e.role}</h3>
        <p class="t-org">${e.company}${e.location?` <span class="loc">— ${e.location}</span>`:""}</p>
        ${e.description?`<p class="t-desc">${e.description}</p>`:""}
        ${e.bullets&&e.bullets.length?`<ul class="t-bullets">${e.bullets.map(n=>`<li>${n}</li>`).join("")}</ul>`:""}
      </div>
    </div>`).join("")}}function Y(){const t=document.getElementById("projectsList");if(t){if(!s.projects.length){t.innerHTML='<p class="a-empty">No projects yet.</p>';return}t.innerHTML=s.projects.map((e,n)=>`
    <div class="proj-card">
      <div class="proj-top">
        <span class="proj-idx">${String(n+1).padStart(2,"0")}</span>
        ${e.featured?'<span class="proj-badge">Featured</span>':""}
      </div>
      <h3>${e.title}</h3>
      <p>${e.description||""}</p>
      ${e.metric?`<p class="proj-metric">${e.metric}</p>`:""}
      <div class="proj-tags">${(e.tags||[]).map(a=>`<span class="tag">${a}</span>`).join("")}</div>
      <div class="proj-links">
        ${e.demoUrl?`<a href="${e.demoUrl}" target="_blank" rel="noopener">Live demo ${b.arrow}</a>`:""}
        ${e.repoUrl?`<a href="${e.repoUrl}" target="_blank" rel="noopener">Source ${b.arrow}</a>`:""}
      </div>
    </div>`).join("")}}function ee(){const t=s.competency.hard||[],e=s.competency.soft||[],n=document.getElementById("hardSkillsList"),a=document.getElementById("softSkillsList");n&&(n.innerHTML=t.map(o=>`
      <div class="skill-row">
        <div class="sr-top"><span class="name">${o.name}</span><span class="val">${o.level}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${o.level}%"></div></div>
      </div>`).join("")||'<p class="a-empty">No hard skills yet.</p>'),a&&(a.innerHTML=e.map(o=>`<span class="soft-pill">${o.name}</span>`).join("")||'<p class="a-empty">No soft skills yet.</p>')}function A(t){try{return new Date(t+"T00:00:00").toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function O(t){const e=(t||"").trim().split(/\s+/).length;return Math.max(1,Math.round(e/200))+" min read"}function te(){const t=document.getElementById("blogList");if(!t)return;if(!s.blog.length){t.innerHTML='<p class="a-empty">No posts yet.</p>';return}const e=[...s.blog].sort((n,a)=>new Date(a.date)-new Date(n.date));t.innerHTML=e.map((n,a)=>`
    <div class="blog-card" data-blog-id="${n.id}">
      <div class="blog-cover">
        ${n.cover?`<img src="${n.cover}" alt="">`:""}
        <span class="bc-idx">NOTE ${String(a+1).padStart(2,"0")}</span>
      </div>
      <div class="blog-body">
        <div class="blog-meta">${A(n.date)} · ${O(n.content)}</div>
        <h3>${n.title}</h3>
        <p>${n.excerpt||""}</p>
        <span class="blog-read">Read note ${b.arrow}</span>
      </div>
    </div>`).join(""),t.querySelectorAll(".blog-card").forEach(n=>{n.addEventListener("click",()=>ne(n.dataset.blogId))})}function ne(t){const e=s.blog.find(l=>l.id===t);if(!e)return;const n=document.getElementById("boSheetLabel");n&&(n.textContent=e.tags&&e.tags[0]||"Field note");const a=document.getElementById("boContent");a&&(a.innerHTML=`
      <span class="mono-label">${A(e.date)} · ${O(e.content)}</span>
      <h1>${e.title}</h1>
      ${e.cover?`<div class="bo-cover"><img src="${e.cover}" alt=""></div>`:""}
      <div class="bo-body">${(e.content||"").split(`
`).filter(Boolean).map(l=>`<p>${l}</p>`).join("")}</div>
      ${e.tags&&e.tags.length?`<div class="bo-tags">${e.tags.map(l=>`<span class="tag">${l}</span>`).join("")}</div>`:""}
    `);const o=document.getElementById("blogOverlay");o&&o.classList.add("open"),document.body.style.overflow="hidden"}function N(){const t=document.getElementById("blogOverlay");t&&t.classList.remove("open"),document.body.style.overflow=""}function ae(){const t=s.contact,e=document.getElementById("contactLead");e&&(e.textContent=t.lead||"");const n=[{k:"Email",v:t.email,href:"mailto:"+t.email},{k:"Phone",v:t.phone,href:"tel:"+(t.phone||"").replace(/\s/g,"")},{k:"Based in",v:t.location,href:null}].filter(o=>o.v),a=document.getElementById("contactInfoList");a&&(a.innerHTML=n.map(o=>`<li><span class="k">${o.k}</span>${o.href?`<a href="${o.href}">${o.v}</a>`:`<span>${o.v}</span>`}</li>`).join(""))}const H=document.getElementById("contactForm");H&&H.addEventListener("submit",t=>{t.preventDefault();const e=document.getElementById("cfName").value,n=document.getElementById("cfEmail").value,a=document.getElementById("cfMessage").value,o=s.contact.email||s.personal.email,l=encodeURIComponent(`Portfolio contact from ${e}`),i=encodeURIComponent(`${a}

— ${e} (${n})`);window.location.href=`mailto:${o}?subject=${l}&body=${i}`,v("Opening your email client…")});let F;function v(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),clearTimeout(F),F=setTimeout(()=>e.classList.remove("show"),2600))}function oe(){const t=S.map(a=>document.getElementById(a.id)).filter(Boolean),e=a=>{document.querySelectorAll("[data-sec]").forEach(o=>{o.classList.toggle("active",o.dataset.sec===a)})},n=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&e(o.target.id)})},{rootMargin:"-40% 0px -55% 0px",threshold:0});t.forEach(a=>n.observe(a))}function ie(){const t=document.getElementById("burgerBtn");t&&t.addEventListener("click",()=>{const a=document.getElementById("mobileMenu");a&&a.classList.toggle("open")});const e=document.getElementById("boCloseBtn");e&&e.addEventListener("click",N);const n=document.getElementById("adminEntryBtn");n&&n.addEventListener("click",le),window.addEventListener("keydown",a=>{a.key==="Escape"&&(N(),document.body.classList.contains("admin-mode")&&I&&C())})}function q(){Q(),V(),Z(),K(),Y(),ee(),te(),ae(),G()}let B="personal",I=!1;const se=[{id:"personal",label:"Personal info"},{id:"education",label:"Education"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"competency",label:"Competency"},{id:"blog",label:"Blog"},{id:"contact",label:"Contact & Security"},{id:"cloud",label:"Cloud & Sync ☁️"}];function le(){document.body.classList.add("admin-mode"),window.scrollTo(0,0),P()}function C(){document.body.classList.remove("admin-mode"),q(),window.scrollTo(0,0)}function P(){const t=document.getElementById("adminRoot");t&&(I?(t.innerHTML=de(),me(),$()):(t.innerHTML=re(),ce()))}function re(){return`
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
    </div>`}function ce(){const t=document.getElementById("adminBackBtn");t&&t.addEventListener("click",C);const e=document.getElementById("adminLoginForm");e&&e.addEventListener("submit",n=>{if(n.preventDefault(),document.getElementById("adminPassInput").value===(s.admin.password||m.admin.password))I=!0,P();else{const o=document.getElementById("adminLoginError");o&&(o.textContent="Incorrect password. Try again.",o.style.display="block")}})}function de(){return`
    <div class="admin-shell">
      <div class="admin-side">
        <div class="admin-brand">PORTFOLIO / ADMIN</div>
        <div class="admin-nav">
          ${se.map(t=>`<button data-tab="${t.id}" class="${t.id===B?"active":""}">${t.label}</button>`).join("")}
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
    </div>`}function me(){document.querySelectorAll(".admin-nav button").forEach(i=>{i.addEventListener("click",()=>{B=i.dataset.tab,document.querySelectorAll(".admin-nav button").forEach(d=>d.classList.toggle("active",d===i)),$()})});const t=document.getElementById("adminViewSiteBtn");t&&t.addEventListener("click",C);const e=document.getElementById("adminLogoutBtn");e&&e.addEventListener("click",()=>{I=!1,P()});const n=document.getElementById("adminQuickSyncBtn");n&&n.addEventListener("click",async()=>{n.disabled=!0,n.textContent="Syncing...";const i=await j(s);v(i?"Successfully synced to cloud for all visitors! ☁️":"Sync failed. Please check network connection."),n.disabled=!1,n.textContent="☁️ Sync to Cloud Now"});const a=document.getElementById("adminExportBtn");a&&a.addEventListener("click",()=>{const i="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(s,null,2)),d=document.createElement("a");d.setAttribute("href",i),d.setAttribute("download",`portfolio_backup_${new Date().toISOString().slice(0,10)}.json`),document.body.appendChild(d),d.click(),d.remove(),v("Backup data exported.")});const o=document.getElementById("adminImportBtn"),l=document.getElementById("adminImportFile");o&&l&&(o.addEventListener("click",()=>l.click()),l.addEventListener("change",i=>{const d=i.target.files[0];if(!d)return;const u=new FileReader;u.onload=async E=>{try{const g=JSON.parse(E.target.result);g&&g.personal?(Object.assign(s,g),await y("Portfolio data restored & synced to cloud!"),$()):alert("Invalid portfolio backup file format.")}catch{alert("Error parsing backup JSON file.")}},u.readAsText(d)}))}function $(){const t=document.getElementById("adminMain");if(!t)return;const e={personal:ue,education:L("education"),experience:L("experience"),projects:L("projects"),competency:ge,blog:L("blog"),contact:ve,cloud:he};t.innerHTML="",e[B]&&e[B](t)}function c(t,e,n,a="text"){return a==="textarea"?`<div class="a-field"><label>${t}</label><textarea id="${e}">${n||""}</textarea></div>`:`<div class="a-field"><label>${t}</label><input type="${a}" id="${e}" value="${(n||"").toString().replace(/"/g,"&quot;")}"></div>`}function r(t){const e=document.getElementById(t);return e?e.value:""}function ue(t){const e=s.personal,n=e.socials||{};t.innerHTML=`
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
  `,document.getElementById("pSaveBtn").addEventListener("click",async()=>{s.personal={...s.personal,firstName:r("pFirst"),lastName:r("pLast"),brand:r("pBrand"),title:r("pTitle"),availability:r("pAvail"),tagline:r("pTagline"),photoUrl:r("pPhoto"),bioLead:r("pLead"),bio:r("pBio"),location:r("pLoc"),yearsExperience:r("pYears"),availableFor:r("pAvailFor"),languages:r("pLang"),email:r("pEmail"),phone:r("pPhone"),name:`${r("pFirst")} ${r("pLast")}`.trim(),socials:{github:r("pGithub"),linkedin:r("pLinkedin"),telegram:r("pTelegram"),twitter:r("pTwitter"),email:r("pEmail")?r("pEmail").startsWith("mailto:")?r("pEmail"):"mailto:"+r("pEmail"):"",website:r("pWebsite"),resume:r("pResume")}},await y("Personal info saved.")})}function L(t){return function(e){const n=s[t],a={education:"Education",experience:"Experience",projects:"Projects",blog:"Blog posts"};e.innerHTML=`
      <div class="admin-header">
        <div><span class="mono-label">Section</span><h2>${a[t]}</h2></div>
        <button class="btn-sm primary" id="addNewBtn">+ Add ${t==="blog"?"post":"entry"}</button>
      </div>
      <div id="listWrap"></div>
      <div id="formWrap"></div>
    `,M(t,n),document.getElementById("addNewBtn").addEventListener("click",()=>z(t,null))}}function pe(t,e){if(t==="education")return{title:e.degree,sub:`${e.institution} · ${e.start}–${e.end}`};if(t==="experience")return{title:e.role,sub:`${e.company} · ${e.start}–${e.current?"Present":e.end}`};if(t==="projects")return{title:e.title,sub:(e.tags||[]).join(", ")};if(t==="blog")return{title:e.title,sub:A(e.date)}}function M(t,e){const n=document.getElementById("listWrap");if(n){if(!e.length){n.innerHTML='<p class="a-empty">Nothing here yet — add your first entry.</p>';return}n.innerHTML=e.map(a=>{const{title:o,sub:l}=pe(t,a);return`<div class="admin-list-item" data-id="${a.id}">
      <div><p class="aim-title">${o}</p><p class="aim-sub">${l}</p></div>
      <div class="aim-actions">
        <button class="btn-sm" data-act="edit">Edit</button>
        <button class="btn-sm danger" data-act="delete">Delete</button>
      </div>
    </div>`}).join(""),n.querySelectorAll('[data-act="edit"]').forEach(a=>{a.addEventListener("click",o=>{const l=o.target.closest(".admin-list-item").dataset.id;z(t,s[t].find(i=>i.id===l))})}),n.querySelectorAll('[data-act="delete"]').forEach(a=>{a.addEventListener("click",async o=>{const l=o.target.closest(".admin-list-item").dataset.id;if(!confirm("Delete this entry? This cannot be undone."))return;s[t]=s[t].filter(d=>d.id!==l),await y("Entry deleted."),M(t,s[t]);const i=document.getElementById("formWrap");i&&(i.innerHTML="")})})}}function z(t,e){const n=document.getElementById("formWrap");if(!n)return;const a=!e;let o="";if(t==="education"){const i=e||{id:w("e"),degree:"",institution:"",location:"",start:"",end:"",description:""};o=`<div class="admin-panel-card"><h3>${a?"New":"Edit"} education entry</h3>
      ${c("Degree / program","fDegree",i.degree)}
      <div class="a-grid2">${c("Institution","fInst",i.institution)}${c("Location","fLoc",i.location)}</div>
      <div class="a-grid2">${c("Start year","fStart",i.start)}${c("End year","fEnd",i.end)}</div>
      ${c("Description","fDesc",i.description,"textarea")}
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save entry</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`,n.innerHTML=o,l(),document.getElementById("saveItemBtn").addEventListener("click",()=>k("education",i.id,{id:i.id,degree:r("fDegree"),institution:r("fInst"),location:r("fLoc"),start:r("fStart"),end:r("fEnd"),description:r("fDesc")}))}if(t==="experience"){const i=e||{id:w("x"),role:"",company:"",location:"",start:"",end:"",current:!1,description:"",bullets:[]};o=`<div class="admin-panel-card"><h3>${a?"New":"Edit"} experience entry</h3>
      <div class="a-grid2">${c("Role / title","fRole",i.role)}${c("Company","fCompany",i.company)}</div>
      <div class="a-grid2">${c("Location","fLoc",i.location)}${c("Start year","fStart",i.start)}</div>
      <div class="a-grid2">
        ${c("End year (ignored if current)","fEnd",i.end)}
        <div class="a-field"><label>Currently working here?</label>
          <select id="fCurrent"><option value="no" ${i.current?"":"selected"}>No</option><option value="yes" ${i.current?"selected":""}>Yes</option></select>
        </div>
      </div>
      ${c("Short description","fDesc",i.description,"textarea")}
      ${c("Highlights (one per line)","fBullets",(i.bullets||[]).join(`
`),"textarea")}
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save entry</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`,n.innerHTML=o,l(),document.getElementById("saveItemBtn").addEventListener("click",()=>k("experience",i.id,{id:i.id,role:r("fRole"),company:r("fCompany"),location:r("fLoc"),start:r("fStart"),end:r("fEnd"),current:r("fCurrent")==="yes",description:r("fDesc"),bullets:r("fBullets").split(`
`).map(d=>d.trim()).filter(Boolean)}))}if(t==="projects"){const i=e||{id:w("p"),title:"",description:"",metric:"",tags:[],demoUrl:"",repoUrl:"",featured:!1};o=`<div class="admin-panel-card"><h3>${a?"New":"Edit"} project</h3>
      ${c("Project title","fTitle",i.title)}
      ${c("Description","fDesc",i.description,"textarea")}
      ${c("Key metric / result (optional)","fMetric",i.metric)}
      ${c("Tags / tech stack (comma separated)","fTags",(i.tags||[]).join(", "))}
      <div class="a-grid2">${c("Live demo URL","fDemo",i.demoUrl)}${c("Source / repo URL","fRepo",i.repoUrl)}</div>
      <div class="a-field"><label>Featured project?</label>
        <select id="fFeatured"><option value="no" ${i.featured?"":"selected"}>No</option><option value="yes" ${i.featured?"selected":""}>Yes</option></select>
      </div>
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save project</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`,n.innerHTML=o,l(),document.getElementById("saveItemBtn").addEventListener("click",()=>k("projects",i.id,{id:i.id,title:r("fTitle"),description:r("fDesc"),metric:r("fMetric"),tags:r("fTags").split(",").map(d=>d.trim()).filter(Boolean),demoUrl:r("fDemo"),repoUrl:r("fRepo"),featured:r("fFeatured")==="yes"}))}if(t==="blog"){const i=e||{id:w("b"),title:"",date:new Date().toISOString().slice(0,10),tags:[],excerpt:"",content:"",cover:""};o=`<div class="admin-panel-card"><h3>${a?"New":"Edit"} post</h3>
      ${c("Title","fTitle",i.title)}
      <div class="a-grid2">${c("Publish date","fDate",i.date,"date")}${c("Tags (comma separated)","fTags",(i.tags||[]).join(", "))}</div>
      ${c("Cover image URL (optional)","fCover",i.cover)}
      ${c("Excerpt (shown on the blog list)","fExcerpt",i.excerpt,"textarea")}
      ${c("Full content (use a blank line for a new paragraph)","fContent",i.content,"textarea")}
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save post</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`,n.innerHTML=o,l(),document.getElementById("saveItemBtn").addEventListener("click",()=>k("blog",i.id,{id:i.id,title:r("fTitle"),date:r("fDate"),tags:r("fTags").split(",").map(d=>d.trim()).filter(Boolean),cover:r("fCover"),excerpt:r("fExcerpt"),content:r("fContent")}))}function l(){const i=document.getElementById("cancelItemBtn");i&&i.addEventListener("click",()=>{n.innerHTML=""})}}async function k(t,e,n){const a=s[t].findIndex(l=>l.id===e);a>-1?s[t][a]=n:s[t].push(n),await y("Saved."),M(t,s[t]);const o=document.getElementById("formWrap");o&&(o.innerHTML="")}function ge(t){const e=s.competency;t.innerHTML=`
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
  `,n(),a();function n(){const o=document.getElementById("hardSkillRows");o&&(o.innerHTML=e.hard.map(l=>`
      <div class="a-field" data-hid="${l.id}">
        <label>Skill name</label>
        <input type="text" class="h-name" value="${l.name.replace(/"/g,"&quot;")}">
        <div class="a-level-row" style="margin-top:8px;">
          <input type="range" min="0" max="100" value="${l.level}" class="h-level">
          <span class="a-level-val">${l.level}%</span>
          <button class="btn-sm danger h-del" type="button">Remove</button>
        </div>
      </div>`).join("")||'<p class="a-empty">No hard skills yet.</p>',document.querySelectorAll(".h-level").forEach(l=>{l.addEventListener("input",i=>{i.target.closest(".a-level-row").querySelector(".a-level-val").textContent=i.target.value+"%"})}),document.querySelectorAll(".h-del").forEach(l=>{l.addEventListener("click",i=>{const d=i.target.closest("[data-hid]").dataset.hid;e.hard=e.hard.filter(u=>u.id!==d),n()})}))}function a(){const o=document.getElementById("softSkillRows");o&&(o.innerHTML=e.soft.map(l=>`
      <div class="a-field" data-sid="${l.id}" style="display:flex; gap:10px; align-items:center;">
        <input type="text" class="s-name" value="${l.name.replace(/"/g,"&quot;")}" style="flex:1;">
        <button class="btn-sm danger s-del" type="button">Remove</button>
      </div>`).join("")||'<p class="a-empty">No soft skills yet.</p>',document.querySelectorAll(".s-del").forEach(l=>{l.addEventListener("click",i=>{const d=i.target.closest("[data-sid]").dataset.sid;e.soft=e.soft.filter(u=>u.id!==d),a()})}))}document.getElementById("addHardBtn").addEventListener("click",()=>{e.hard.push({id:w("h"),name:"New skill",level:70}),n()}),document.getElementById("addSoftBtn").addEventListener("click",()=>{e.soft.push({id:w("s"),name:"New skill"}),a()}),document.getElementById("compSaveBtn").addEventListener("click",async()=>{document.querySelectorAll("#hardSkillRows [data-hid]").forEach(o=>{const l=o.dataset.hid,i=e.hard.find(d=>d.id===l);i&&(i.name=o.querySelector(".h-name").value,i.level=parseInt(o.querySelector(".h-level").value,10))}),document.querySelectorAll("#softSkillRows [data-sid]").forEach(o=>{const l=o.dataset.sid,i=e.soft.find(d=>d.id===l);i&&(i.name=o.querySelector(".s-name").value)}),s.competency=e,await y("Competency saved.")})}function ve(t){const e=s.contact,n=e.socials||{};t.innerHTML=`
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
      ${c("Admin password","cAdminPass",s.admin.password,"password")}
    </div>
    <div class="a-actions"><button class="btn-sm primary" id="contactSaveBtn">Save changes</button></div>
  `,document.getElementById("contactSaveBtn").addEventListener("click",async()=>{s.contact={lead:r("cLead"),email:r("cEmail"),phone:r("cPhone"),location:r("cLoc"),socials:{github:r("cGithub"),linkedin:r("cLinkedin"),telegram:r("cTelegram"),twitter:r("cTwitter"),website:r("cWebsite"),resume:r("cResume")}},s.admin={password:r("cAdminPass")||m.admin.password},await y("Contact & Security saved.")})}function he(t){const e=T();t.innerHTML=`
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
        <input type="text" id="cloudEndpointInput" value="${e.replace(/"/g,"&quot;")}" style="font-family:var(--font-mono); font-size:13px;">
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
  `,document.getElementById("cloudPushBtn").addEventListener("click",async()=>{const n=document.getElementById("cloudPushBtn");n.disabled=!0,n.textContent="Pushing to cloud...";const a=await j(s);v(a?"Successfully published all changes to the cloud! Visible to everyone worldwide. 🌍":"Failed to connect to cloud endpoint. Check network connection."),n.disabled=!1,n.textContent="🚀 Push Local Changes to Cloud"}),document.getElementById("cloudPullBtn").addEventListener("click",async()=>{const n=document.getElementById("cloudPullBtn");n.disabled=!0,n.textContent="Fetching from cloud...";const a=await U();a&&a.personal?(Object.assign(s,a),await y("Pulled latest cloud state successfully! ☁️"),$()):v("Could not fetch remote state or cloud store is empty."),n.disabled=!1,n.textContent="⬇️ Pull Latest from Cloud"}),document.getElementById("cloudResetEndpointBtn").addEventListener("click",()=>{D(x),document.getElementById("cloudEndpointInput").value=x,v("Reset endpoint to default global cloud.")}),document.getElementById("cloudEndpointInput").addEventListener("change",n=>{D(n.target.value),v("Cloud endpoint updated.")}),document.getElementById("cloudDownloadJsonBtn").addEventListener("click",()=>{const n="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(s,null,2)),a=document.createElement("a");a.href=n,a.download="content.json",document.body.appendChild(a),a.click(),a.remove(),v("content.json downloaded.")})}(async function(){X(),_(),ie(),await J(),q(),oe()})();
