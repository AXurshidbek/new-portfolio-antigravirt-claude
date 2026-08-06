(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const h={github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>',linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z"/></svg>',twitter:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.5h3.3l-7.2 8.23L23 21.5h-6.63l-5.2-6.8-5.94 6.8H2l7.7-8.8L1.4 2.5h6.8l4.7 6.2 5.34-6.2Zm-1.16 17h1.83L6.98 4.4H5.02l12.06 15.1Z"/></svg>',email:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18v12H3z"/><path d="m3 7 9 6 9-6"/></svg>',website:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.6 3.6 5.7 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.7-3.6-9s1.2-6.4 3.6-9Z"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2.1.8 3a2 2 0 0 1-.5 2.1L8 10.2a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.5c1 .4 2 .7 3 .8a2 2 0 0 1 1.7 2Z"/></svg>',pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'};function j(t){return h[t]||h.website}const p={personal:{name:"Aria Novak",firstName:"Aria",lastName:"Novak",title:"Product Engineer & Systems Designer",tagline:"I build the load-bearing parts of software — the parts that have to hold up when nobody's looking.",availability:"Open to new roles",bioLead:"Seven years of turning ambiguous problems into systems that <em>ship, scale, and stay boring in production.</em>",bio:`I'm a product engineer based in Berlin with a background that splits evenly between backend infrastructure and the interfaces sitting on top of it. Most of my career has been spent inside small, fast-moving teams — first in fintech, then in climate-tech — where I've learned that the hardest part of engineering is rarely the code itself.

Outside of client work, I maintain a couple of open-source tools, mentor early-career engineers, and write occasional field notes on the craft of building reliable software.`,location:"Berlin, Germany",email:"hello@arianovak.dev",phone:"+49 30 1234 5678",photoUrl:"assets/portrait.jpg",yearsExperience:"7+",availableFor:"Freelance & full-time",languages:"English, Romanian, German (B2)",socials:{github:"https://github.com/",linkedin:"https://linkedin.com/in/",twitter:"https://x.com/",email:"mailto:hello@arianovak.dev"}},education:[{id:"e1",degree:"M.Sc. Computer Science",institution:"Technical University of Munich",location:"Munich, DE",start:"2015",end:"2017",description:"Thesis on fault-tolerant consensus protocols for distributed ledgers, advised by the Systems Engineering group."},{id:"e2",degree:"B.Sc. Software Engineering",institution:"University of Bucharest",location:"Bucharest, RO",start:"2011",end:"2015",description:"Focused on algorithms, databases, and a senior project building a peer-to-peer file sync tool."}],experience:[{id:"x1",role:"Senior Product Engineer",company:"Voltgrid",location:"Berlin, DE (remote)",start:"2021",end:"Present",current:!0,description:"Lead engineer on the real-time energy trading platform, owning the matching engine and the trader-facing dashboard.",bullets:["Rebuilt the order-matching engine in Rust, cutting p99 latency from 40ms to 900µs","Led the migration from a monolith to an event-driven architecture on Kafka","Mentored three junior engineers into mid-level roles over two years"]},{id:"x2",role:"Backend Engineer",company:"Ledgerly",location:"Bucharest, RO",start:"2018",end:"2021",current:!1,description:"Built core ledger and reconciliation infrastructure for a payments startup processing multi-currency transactions.",bullets:["Designed an automated reconciliation pipeline that cut manual audit time by 70%","Owned the double-entry ledger service handling 2M+ transactions per month","On-call lead during two major incidents; wrote the postmortems that shaped the on-call rotation"]},{id:"x3",role:"Software Engineer",company:"Pixelwave Studio",location:"Cluj-Napoca, RO",start:"2017",end:"2018",current:!1,description:"First engineering role at a small digital agency, building client web apps end to end.",bullets:["Delivered 6 client projects across e-commerce and internal tooling","Introduced the studio's first shared component library"]}],projects:[{id:"p1",title:"Voltgrid Trading Engine",description:"A rebuilt real-time matching engine for energy trading, designed to handle bursty market volume without missing a tick.",metric:"Latency cut from 40ms to 900µs at p99",tags:["Rust","Kafka","PostgreSQL"],demoUrl:"",repoUrl:"",featured:!0},{id:"p2",title:"Ledgerly Reconciliation Suite",description:"An automated reconciliation system that reduced a two-day manual audit process to a same-day review.",metric:"70% reduction in manual audit hours",tags:["Go","PostgreSQL","Airflow"],demoUrl:"",repoUrl:"",featured:!0},{id:"p3",title:"Fieldnote",description:"An open-source, local-first markdown note app with optional peer-to-peer sync — no account required.",metric:"3,100+ GitHub stars",tags:["TypeScript","CRDT","React"],demoUrl:"",repoUrl:"https://github.com/",featured:!1},{id:"p4",title:"Watershed",description:"A climate-data dashboard built for NGO field teams to track water-quality readings across remote sites.",metric:"In active use by 40+ field teams",tags:["React","Python","Mapbox"],demoUrl:"",repoUrl:"",featured:!1}],competency:{hard:[{id:"h1",name:"Rust",level:90},{id:"h2",name:"System Design",level:92},{id:"h3",name:"TypeScript / React",level:86},{id:"h4",name:"PostgreSQL",level:85},{id:"h5",name:"Event-driven architecture (Kafka)",level:80},{id:"h6",name:"Cloud & DevOps (AWS, CI/CD)",level:76}],soft:[{id:"s1",name:"Technical mentorship"},{id:"s2",name:"Incident command"},{id:"s3",name:"Cross-functional facilitation"},{id:"s4",name:"Written communication"},{id:"s5",name:"Roadmap prioritization"},{id:"s6",name:"Stakeholder negotiation"}]},blog:[{id:"b1",title:"The Latency Budget Nobody Asked For",date:"2026-05-12",tags:["Engineering","Performance"],excerpt:"Every system has a latency budget whether or not anyone wrote it down. Here's what happened when we finally wrote ours.",content:`Every system has a latency budget, whether or not anyone ever wrote it down. Most teams discover theirs by accident — a support ticket, a lost trade, a user who quietly leaves. At Voltgrid, ours showed up as a rounding error in a settlement report that turned out not to be a rounding error at all.

We spent two weeks tracing forty milliseconds through six services before we accepted the uncomfortable truth: nobody owned latency. Every team optimized their own slice and assumed the whole was someone else's problem. So we wrote the budget down. Ten milliseconds for ingestion, two for matching, the rest for everything downstream. Suddenly a vague performance goal became a shared contract, and contracts are much easier to defend in a roadmap meeting than vibes.

The rebuild that followed wasn't really a rewrite of the matching engine — it was a negotiation, formalized in code, about whose milliseconds counted for what. That's the part nobody tells you about performance work: the hardest optimization is organizational, and it happens before you open your profiler.`},{id:"b2",title:"Reconciliation Is a UX Problem",date:"2026-03-02",tags:["Fintech","Product"],excerpt:"The best reconciliation tooling isn't the one with the most automation. It's the one an exhausted analyst can trust at 11pm.",content:`Reconciliation software gets built by engineers and used by analysts, and that gap shows up in almost every tool I've seen, including the ones I've shipped myself. We optimize for throughput — how many transactions can we match per second — when the real bottleneck is trust. An analyst who doesn't trust a match will re-check it by hand anyway, and now you've automated nothing.

The fix that actually moved our audit time from two days to same-day wasn't a smarter matching algorithm. It was showing our work: every automated match came with a one-line reason, in plain language, that a tired analyst could scan and approve without re-deriving the logic themselves. Automation earns trust the same way a person does — by being legible, not just being right.

If I were to start a reconciliation project again, I'd design the explanation before I designed the algorithm.`},{id:"b3",title:"Notes on Running Incidents Calmly",date:"2026-01-18",tags:["Reliability","Leadership"],excerpt:"Calm is a skill, not a personality trait. A few habits that made me a better incident commander.",content:`Nobody is naturally calm at 3am when a payment ledger stops reconciling. Calm, I've learned, is closer to a checklist than a personality trait — a set of small habits that hold up under adrenaline.

The first habit is narrating state out loud, even when it feels unnecessary: 'we've confirmed the queue is backed up, we have not yet confirmed why.' It sounds obvious, but under pressure people quietly conflate what they suspect with what they know, and that's how incidents get longer, not shorter.

The second is protecting exactly one thread of attention for the person actually fixing the problem, and routing everything else — stakeholders, status updates, well-meaning suggestions — through someone else. The third is writing the postmortem's timeline during the incident, not after it, because memory is the first thing adrenaline breaks.

None of this prevents incidents. It just means the fourth one goes faster than the first.`}],contact:{lead:"Reach out directly, or use the form — I read every message myself.",email:"hello@arianovak.dev",phone:"+49 30 1234 5678",location:"Berlin, Germany — remote-friendly",socials:{github:"https://github.com/",linkedin:"https://linkedin.com/in/",twitter:"https://x.com/",website:"https://arianovak.dev"}},admin:{password:"admin123"}},u=t=>JSON.parse(JSON.stringify(t)),r={personal:u(p.personal),education:u(p.education),experience:u(p.experience),projects:u(p.projects),competency:u(p.competency),blog:u(p.blog),contact:u(p.contact),admin:u(p.admin)};async function v(t,e){try{if(window.storage&&typeof window.storage.get=="function"){const a=await window.storage.get(t,!0);if(a&&a.value!==void 0&&a.value!==null)return JSON.parse(a.value)}const o=localStorage.getItem(t);return o!==null?JSON.parse(o):e}catch(o){return console.warn(`Storage get error for ${t}:`,o),e}}async function g(t,e){try{const o=JSON.stringify(e);return localStorage.setItem(t,o),window.storage&&typeof window.storage.set=="function"&&await window.storage.set(t,o,!0),!0}catch(o){return console.error(`Storage set error for ${t}:`,o),!1}}async function P(){const[t,e,o,a,n,s,i,d]=await Promise.all([v("site:personal",u(p.personal)),v("site:education",u(p.education)),v("site:experience",u(p.experience)),v("site:projects",u(p.projects)),v("site:competency",u(p.competency)),v("site:blog",u(p.blog)),v("site:contact",u(p.contact)),v("site:admin",u(p.admin))]);r.personal=t,r.education=e,r.experience=o,r.projects=a,r.competency=n,r.blog=s,r.contact=i,r.admin=d}function y(t){return t+"_"+Math.random().toString(36).slice(2,9)}const $=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"education",label:"Education"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"competency",label:"Skills"},{id:"blog",label:"Blog"},{id:"contact",label:"Contact"}];function D(){const t=document.getElementById("navLinks"),e=document.getElementById("mobileMenu"),o=document.getElementById("sideNav");t&&(t.innerHTML=$.map(a=>`<a href="#${a.id}" data-sec="${a.id}">${a.label}</a>`).join("")),e&&(e.innerHTML=$.map(a=>`<a href="#${a.id}" data-sec="${a.id}">${a.label}</a>`).join("")+'<div class="nav-social" id="mobileSocial"></div>'),o&&(o.innerHTML=$.map(a=>`<a href="#${a.id}" data-sec="${a.id}"><span class="tip">${a.label}</span></a>`).join("")),document.querySelectorAll(".mobile-menu a").forEach(a=>{a.addEventListener("click",()=>{document.getElementById("mobileMenu").classList.remove("open")})})}function U(){const t=r.personal.socials||{},e=["github","linkedin","twitter","email","website"],o=e.filter(m=>t[m]).map(m=>`<a href="${t[m]}" target="_blank" rel="noopener" aria-label="${m}">${j(m)}</a>`).join(""),a=document.getElementById("navSocial"),n=document.getElementById("heroSocials"),s=document.getElementById("mobileSocial");a&&(a.innerHTML=o),n&&(n.innerHTML=o),s&&(s.innerHTML=o);const i=r.contact.socials||{},d=document.getElementById("contactSocials");d&&(d.innerHTML=e.filter(m=>i[m]).map(m=>`<a href="${i[m]}" target="_blank" rel="noopener" aria-label="${m}">${j(m)}</a>`).join(""))}function O(){const t=r.personal,e=document.getElementById("brandName");e&&(e.textContent=(t.name||"Portfolio").split(" ").map((m,b)=>b===0?m[0]+".":m).join(" ").toUpperCase());const o=document.getElementById("availabilityText");o&&(o.textContent=t.availability||"");const a=document.getElementById("heroName");a&&(a.innerHTML=`${t.firstName||""}<br><em>${t.lastName||""}</em>`);const n=document.getElementById("heroRole");n&&(n.innerHTML=`<span>${t.title||""}</span><span class="sep">/</span><span>${t.location||""}</span>`);const s=document.getElementById("heroTagline");s&&(s.textContent=t.tagline||"");const i=document.querySelector(".hero-photo-frame");i&&(t.photoUrl?i.innerHTML=`<img id="heroPhoto" src="${t.photoUrl}" alt="${t.name||"Portrait"}" onerror="this.parentElement.innerHTML='<div class=\\'hero-photo-placeholder\\'>${h.user}<span>Photo unavailable</span></div>'">`:i.innerHTML=`<div class="hero-photo-placeholder">${h.user}<span>${t.name||"Aria Novak"}<br><small style="color:var(--slate-soft);font-size:11px;">Product Engineer</small></span></div>`);const d=document.getElementById("footerNote");d&&(d.textContent=`© ${new Date().getFullYear()} ${t.name||""}. Built sheet by sheet.`)}function F(){const t=r.personal,e=document.getElementById("aboutLead");e&&(e.innerHTML=t.bioLead||"");const o=document.getElementById("aboutBody");o&&(o.innerHTML=(t.bio||"").split(`
`).filter(Boolean).map(s=>`<p>${s}</p>`).join(""));const a=[{k:"Location",v:t.location},{k:"Experience",v:t.yearsExperience?t.yearsExperience+" years":""},{k:"Available for",v:t.availableFor},{k:"Languages",v:t.languages}].filter(s=>s.v),n=document.getElementById("factList");n&&(n.innerHTML=a.map(s=>`<li><span class="k">${s.k}</span><span class="v">${s.v}</span></li>`).join(""))}function q(){const t=document.getElementById("educationList");if(t){if(!r.education.length){t.innerHTML='<p class="a-empty">No education entries yet.</p>';return}t.innerHTML=r.education.map(e=>`
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
        ${e.bullets&&e.bullets.length?`<ul class="t-bullets">${e.bullets.map(o=>`<li>${o}</li>`).join("")}</ul>`:""}
      </div>
    </div>`).join("")}}function G(){const t=document.getElementById("projectsList");if(t){if(!r.projects.length){t.innerHTML='<p class="a-empty">No projects yet.</p>';return}t.innerHTML=r.projects.map((e,o)=>`
    <div class="proj-card">
      <div class="proj-top">
        <span class="proj-idx">${String(o+1).padStart(2,"0")}</span>
        ${e.featured?'<span class="proj-badge">Featured</span>':""}
      </div>
      <h3>${e.title}</h3>
      <p>${e.description||""}</p>
      ${e.metric?`<p class="proj-metric">${e.metric}</p>`:""}
      <div class="proj-tags">${(e.tags||[]).map(a=>`<span class="tag">${a}</span>`).join("")}</div>
      <div class="proj-links">
        ${e.demoUrl?`<a href="${e.demoUrl}" target="_blank" rel="noopener">Live demo ${h.arrow}</a>`:""}
        ${e.repoUrl?`<a href="${e.repoUrl}" target="_blank" rel="noopener">Source ${h.arrow}</a>`:""}
      </div>
    </div>`).join("")}}function J(){const t=r.competency.hard||[],e=r.competency.soft||[],o=document.getElementById("hardSkillsList"),a=document.getElementById("softSkillsList");o&&(o.innerHTML=t.map(n=>`
      <div class="skill-row">
        <div class="sr-top"><span class="name">${n.name}</span><span class="val">${n.level}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${n.level}%"></div></div>
      </div>`).join("")||'<p class="a-empty">No hard skills yet.</p>'),a&&(a.innerHTML=e.map(n=>`<span class="soft-pill">${n.name}</span>`).join("")||'<p class="a-empty">No soft skills yet.</p>')}function S(t){try{return new Date(t+"T00:00:00").toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function H(t){const e=(t||"").trim().split(/\s+/).length;return Math.max(1,Math.round(e/200))+" min read"}function V(){const t=document.getElementById("blogList");if(!t)return;if(!r.blog.length){t.innerHTML='<p class="a-empty">No posts yet.</p>';return}const e=[...r.blog].sort((o,a)=>new Date(a.date)-new Date(o.date));t.innerHTML=e.map((o,a)=>`
    <div class="blog-card" data-blog-id="${o.id}">
      <div class="blog-cover">
        ${o.cover?`<img src="${o.cover}" alt="">`:""}
        <span class="bc-idx">NOTE ${String(a+1).padStart(2,"0")}</span>
      </div>
      <div class="blog-body">
        <div class="blog-meta">${S(o.date)} · ${H(o.content)}</div>
        <h3>${o.title}</h3>
        <p>${o.excerpt||""}</p>
        <span class="blog-read">Read note ${h.arrow}</span>
      </div>
    </div>`).join(""),t.querySelectorAll(".blog-card").forEach(o=>{o.addEventListener("click",()=>Z(o.dataset.blogId))})}function Z(t){const e=r.blog.find(s=>s.id===t);if(!e)return;const o=document.getElementById("boSheetLabel");o&&(o.textContent=e.tags&&e.tags[0]||"Field note");const a=document.getElementById("boContent");a&&(a.innerHTML=`
      <span class="mono-label">${S(e.date)} · ${H(e.content)}</span>
      <h1>${e.title}</h1>
      ${e.cover?`<div class="bo-cover"><img src="${e.cover}" alt=""></div>`:""}
      <div class="bo-body">${(e.content||"").split(`
`).filter(Boolean).map(s=>`<p>${s}</p>`).join("")}</div>
      ${e.tags&&e.tags.length?`<div class="bo-tags">${e.tags.map(s=>`<span class="tag">${s}</span>`).join("")}</div>`:""}
    `);const n=document.getElementById("blogOverlay");n&&n.classList.add("open"),document.body.style.overflow="hidden"}function M(){const t=document.getElementById("blogOverlay");t&&t.classList.remove("open"),document.body.style.overflow=""}function z(){const t=r.contact,e=document.getElementById("contactLead");e&&(e.textContent=t.lead||"");const o=[{k:"Email",v:t.email,href:"mailto:"+t.email},{k:"Phone",v:t.phone,href:"tel:"+(t.phone||"").replace(/\s/g,"")},{k:"Based in",v:t.location,href:null}].filter(n=>n.v),a=document.getElementById("contactInfoList");a&&(a.innerHTML=o.map(n=>`<li><span class="k">${n.k}</span>${n.href?`<a href="${n.href}">${n.v}</a>`:`<span>${n.v}</span>`}</li>`).join(""))}const C=document.getElementById("contactForm");C&&C.addEventListener("submit",t=>{t.preventDefault();const e=document.getElementById("cfName").value,o=document.getElementById("cfEmail").value,a=document.getElementById("cfMessage").value,n=r.contact.email||r.personal.email,s=encodeURIComponent(`Portfolio contact from ${e}`),i=encodeURIComponent(`${a}

— ${e} (${o})`);window.location.href=`mailto:${n}?subject=${s}&body=${i}`,f("Opening your email client…")});let A;function f(t){const e=document.getElementById("toast");e&&(e.textContent=t,e.classList.add("show"),clearTimeout(A),A=setTimeout(()=>e.classList.remove("show"),2600))}function _(){const t=$.map(a=>document.getElementById(a.id)).filter(Boolean),e=a=>{document.querySelectorAll("[data-sec]").forEach(n=>{n.classList.toggle("active",n.dataset.sec===a)})},o=new IntersectionObserver(a=>{a.forEach(n=>{n.isIntersecting&&e(n.target.id)})},{rootMargin:"-40% 0px -55% 0px",threshold:0});t.forEach(a=>o.observe(a))}function Y(){const t=document.getElementById("burgerBtn");t&&t.addEventListener("click",()=>{const a=document.getElementById("mobileMenu");a&&a.classList.toggle("open")});const e=document.getElementById("boCloseBtn");e&&e.addEventListener("click",M);const o=document.getElementById("adminEntryBtn");o&&o.addEventListener("click",Q),window.addEventListener("keydown",a=>{a.key==="Escape"&&(M(),document.body.classList.contains("admin-mode")&&B&&k())})}function N(){O(),F(),q(),W(),G(),J(),V(),z(),U()}let E="personal",B=!1;const K=[{id:"personal",label:"Personal info"},{id:"education",label:"Education"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"competency",label:"Competency"},{id:"blog",label:"Blog"},{id:"contact",label:"Contact & Security"}];function Q(){document.body.classList.add("admin-mode"),window.scrollTo(0,0),x()}function k(){document.body.classList.remove("admin-mode"),N(),window.scrollTo(0,0)}function x(){const t=document.getElementById("adminRoot");t&&(B?(t.innerHTML=te(),ne(),I()):(t.innerHTML=X(),ee()))}function X(){return`
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
    </div>`}function ee(){const t=document.getElementById("adminBackBtn");t&&t.addEventListener("click",k);const e=document.getElementById("adminLoginForm");e&&e.addEventListener("submit",o=>{if(o.preventDefault(),document.getElementById("adminPassInput").value===(r.admin.password||p.admin.password))B=!0,x();else{const n=document.getElementById("adminLoginError");n&&(n.textContent="Incorrect password. Try again.",n.style.display="block")}})}function te(){return`
    <div class="admin-shell">
      <div class="admin-side">
        <div class="admin-brand">PORTFOLIO / ADMIN</div>
        <div class="admin-nav">
          ${K.map(t=>`<button data-tab="${t.id}" class="${t.id===E?"active":""}">${t.label}</button>`).join("")}
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
    </div>`}function ne(){document.querySelectorAll(".admin-nav button").forEach(s=>{s.addEventListener("click",()=>{E=s.dataset.tab,document.querySelectorAll(".admin-nav button").forEach(i=>i.classList.toggle("active",i===s)),I()})});const t=document.getElementById("adminViewSiteBtn");t&&t.addEventListener("click",k);const e=document.getElementById("adminLogoutBtn");e&&e.addEventListener("click",()=>{B=!1,x()});const o=document.getElementById("adminExportBtn");o&&o.addEventListener("click",()=>{const s="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(r,null,2)),i=document.createElement("a");i.setAttribute("href",s),i.setAttribute("download",`portfolio_backup_${new Date().toISOString().slice(0,10)}.json`),document.body.appendChild(i),i.click(),i.remove(),f("Backup data exported.")});const a=document.getElementById("adminImportBtn"),n=document.getElementById("adminImportFile");a&&n&&(a.addEventListener("click",()=>n.click()),n.addEventListener("change",s=>{const i=s.target.files[0];if(!i)return;const d=new FileReader;d.onload=async m=>{try{const b=JSON.parse(m.target.result);b&&b.personal?(Object.assign(r,b),await Promise.all([g("site:personal",r.personal),g("site:education",r.education),g("site:experience",r.experience),g("site:projects",r.projects),g("site:competency",r.competency),g("site:blog",r.blog),g("site:contact",r.contact),g("site:admin",r.admin)]),f("Portfolio data restored successfully!"),I()):alert("Invalid portfolio backup file format.")}catch{alert("Error parsing backup JSON file.")}},d.readAsText(i)}))}function I(){const t=document.getElementById("adminMain");if(!t)return;const e={personal:ae,education:w("education"),experience:w("experience"),projects:w("projects"),competency:oe,blog:w("blog"),contact:se};t.innerHTML="",e[E]&&e[E](t)}function c(t,e,o,a="text"){return a==="textarea"?`<div class="a-field"><label>${t}</label><textarea id="${e}">${o||""}</textarea></div>`:`<div class="a-field"><label>${t}</label><input type="${a}" id="${e}" value="${(o||"").toString().replace(/"/g,"&quot;")}"></div>`}function l(t){const e=document.getElementById(t);return e?e.value:""}function ae(t){const e=r.personal;t.innerHTML=`
    <div class="admin-header"><div><span class="mono-label">Section</span><h2>Personal info</h2></div></div>
    <div class="admin-panel-card">
      <h3>Identity & Title</h3>
      <div class="a-grid2">
        ${c("First name","pFirst",e.firstName)}
        ${c("Last name","pLast",e.lastName)}
      </div>
      <div class="a-grid2">
        ${c("Title / role","pTitle",e.title)}
        ${c("Availability status","pAvail",e.availability)}
      </div>
      ${c("Tagline (shown large on the hero)","pTagline",e.tagline,"textarea")}
      ${c("Photo URL (leave blank for default placeholder avatar)","pPhoto",e.photoUrl)}
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
      <h3>Header & Hero Social Links</h3>
      <div class="a-grid2">
        ${c("Email","pEmail",e.email)}
        ${c("Phone","pPhone",e.phone)}
      </div>
      <div class="a-grid2">
        ${c("GitHub URL","pGithub",e.socials.github)}
        ${c("LinkedIn URL","pLinkedin",e.socials.linkedin)}
      </div>
      <div class="a-grid2">
        ${c("X / Twitter URL","pTwitter",e.socials.twitter)}
        ${c("Website URL","pWebsite",e.socials.website)}
      </div>
    </div>
    <div class="a-actions"><button class="btn-sm primary" id="pSaveBtn">Save changes</button></div>
  `,document.getElementById("pSaveBtn").addEventListener("click",async()=>{r.personal={...r.personal,firstName:l("pFirst"),lastName:l("pLast"),title:l("pTitle"),availability:l("pAvail"),tagline:l("pTagline"),photoUrl:l("pPhoto"),bioLead:l("pLead"),bio:l("pBio"),location:l("pLoc"),yearsExperience:l("pYears"),availableFor:l("pAvailFor"),languages:l("pLang"),email:l("pEmail"),phone:l("pPhone"),name:`${l("pFirst")} ${l("pLast")}`.trim(),socials:{github:l("pGithub"),linkedin:l("pLinkedin"),twitter:l("pTwitter"),website:l("pWebsite"),email:"mailto:"+l("pEmail")}},await g("site:personal",r.personal),f("Personal info saved.")})}function w(t){return function(e){const o=r[t],a={education:"Education",experience:"Experience",projects:"Projects",blog:"Blog posts"};e.innerHTML=`
      <div class="admin-header">
        <div><span class="mono-label">Section</span><h2>${a[t]}</h2></div>
        <button class="btn-sm primary" id="addNewBtn">+ Add ${t==="blog"?"post":"entry"}</button>
      </div>
      <div id="listWrap"></div>
      <div id="formWrap"></div>
    `,T(t,o),document.getElementById("addNewBtn").addEventListener("click",()=>R(t,null))}}function ie(t,e){if(t==="education")return{title:e.degree,sub:`${e.institution} · ${e.start}–${e.end}`};if(t==="experience")return{title:e.role,sub:`${e.company} · ${e.start}–${e.current?"Present":e.end}`};if(t==="projects")return{title:e.title,sub:(e.tags||[]).join(", ")};if(t==="blog")return{title:e.title,sub:S(e.date)}}function T(t,e){const o=document.getElementById("listWrap");if(o){if(!e.length){o.innerHTML='<p class="a-empty">Nothing here yet — add your first entry.</p>';return}o.innerHTML=e.map(a=>{const{title:n,sub:s}=ie(t,a);return`<div class="admin-list-item" data-id="${a.id}">
      <div><p class="aim-title">${n}</p><p class="aim-sub">${s}</p></div>
      <div class="aim-actions">
        <button class="btn-sm" data-act="edit">Edit</button>
        <button class="btn-sm danger" data-act="delete">Delete</button>
      </div>
    </div>`}).join(""),o.querySelectorAll('[data-act="edit"]').forEach(a=>{a.addEventListener("click",n=>{const s=n.target.closest(".admin-list-item").dataset.id;R(t,r[t].find(i=>i.id===s))})}),o.querySelectorAll('[data-act="delete"]').forEach(a=>{a.addEventListener("click",async n=>{const s=n.target.closest(".admin-list-item").dataset.id;if(!confirm("Delete this entry? This cannot be undone."))return;r[t]=r[t].filter(d=>d.id!==s),await g("site:"+t,r[t]),T(t,r[t]);const i=document.getElementById("formWrap");i&&(i.innerHTML=""),f("Entry deleted.")})})}}function R(t,e){const o=document.getElementById("formWrap");if(!o)return;const a=!e;let n="";if(t==="education"){const i=e||{id:y("e"),degree:"",institution:"",location:"",start:"",end:"",description:""};n=`<div class="admin-panel-card"><h3>${a?"New":"Edit"} education entry</h3>
      ${c("Degree / program","fDegree",i.degree)}
      <div class="a-grid2">${c("Institution","fInst",i.institution)}${c("Location","fLoc",i.location)}</div>
      <div class="a-grid2">${c("Start year","fStart",i.start)}${c("End year","fEnd",i.end)}</div>
      ${c("Description","fDesc",i.description,"textarea")}
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save entry</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`,o.innerHTML=n,s(),document.getElementById("saveItemBtn").addEventListener("click",()=>L("education",i.id,{id:i.id,degree:l("fDegree"),institution:l("fInst"),location:l("fLoc"),start:l("fStart"),end:l("fEnd"),description:l("fDesc")}))}if(t==="experience"){const i=e||{id:y("x"),role:"",company:"",location:"",start:"",end:"",current:!1,description:"",bullets:[]};n=`<div class="admin-panel-card"><h3>${a?"New":"Edit"} experience entry</h3>
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
    </div>`,o.innerHTML=n,s(),document.getElementById("saveItemBtn").addEventListener("click",()=>L("experience",i.id,{id:i.id,role:l("fRole"),company:l("fCompany"),location:l("fLoc"),start:l("fStart"),end:l("fEnd"),current:l("fCurrent")==="yes",description:l("fDesc"),bullets:l("fBullets").split(`
`).map(d=>d.trim()).filter(Boolean)}))}if(t==="projects"){const i=e||{id:y("p"),title:"",description:"",metric:"",tags:[],demoUrl:"",repoUrl:"",featured:!1};n=`<div class="admin-panel-card"><h3>${a?"New":"Edit"} project</h3>
      ${c("Project title","fTitle",i.title)}
      ${c("Description","fDesc",i.description,"textarea")}
      ${c("Key metric / result (optional)","fMetric",i.metric)}
      ${c("Tags / tech stack (comma separated)","fTags",(i.tags||[]).join(", "))}
      <div class="a-grid2">${c("Live demo URL","fDemo",i.demoUrl)}${c("Source / repo URL","fRepo",i.repoUrl)}</div>
      <div class="a-field"><label>Featured project?</label>
        <select id="fFeatured"><option value="no" ${i.featured?"":"selected"}>No</option><option value="yes" ${i.featured?"selected":""}>Yes</option></select>
      </div>
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save project</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`,o.innerHTML=n,s(),document.getElementById("saveItemBtn").addEventListener("click",()=>L("projects",i.id,{id:i.id,title:l("fTitle"),description:l("fDesc"),metric:l("fMetric"),tags:l("fTags").split(",").map(d=>d.trim()).filter(Boolean),demoUrl:l("fDemo"),repoUrl:l("fRepo"),featured:l("fFeatured")==="yes"}))}if(t==="blog"){const i=e||{id:y("b"),title:"",date:new Date().toISOString().slice(0,10),tags:[],excerpt:"",content:"",cover:""};n=`<div class="admin-panel-card"><h3>${a?"New":"Edit"} post</h3>
      ${c("Title","fTitle",i.title)}
      <div class="a-grid2">${c("Publish date","fDate",i.date,"date")}${c("Tags (comma separated)","fTags",(i.tags||[]).join(", "))}</div>
      ${c("Cover image URL (optional)","fCover",i.cover)}
      ${c("Excerpt (shown on the blog list)","fExcerpt",i.excerpt,"textarea")}
      ${c("Full content (use a blank line for a new paragraph)","fContent",i.content,"textarea")}
      <div class="a-actions"><button class="btn-sm primary" id="saveItemBtn">Save post</button><button class="btn-sm" id="cancelItemBtn">Cancel</button></div>
    </div>`,o.innerHTML=n,s(),document.getElementById("saveItemBtn").addEventListener("click",()=>L("blog",i.id,{id:i.id,title:l("fTitle"),date:l("fDate"),tags:l("fTags").split(",").map(d=>d.trim()).filter(Boolean),cover:l("fCover"),excerpt:l("fExcerpt"),content:l("fContent")}))}function s(){const i=document.getElementById("cancelItemBtn");i&&i.addEventListener("click",()=>{o.innerHTML=""})}}async function L(t,e,o){const a=r[t].findIndex(s=>s.id===e);a>-1?r[t][a]=o:r[t].push(o),await g("site:"+t,r[t]),T(t,r[t]);const n=document.getElementById("formWrap");n&&(n.innerHTML=""),f("Saved.")}function oe(t){const e=r.competency;t.innerHTML=`
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
  `,o(),a();function o(){const n=document.getElementById("hardSkillRows");n&&(n.innerHTML=e.hard.map(s=>`
      <div class="a-field" data-hid="${s.id}">
        <label>Skill name</label>
        <input type="text" class="h-name" value="${s.name.replace(/"/g,"&quot;")}">
        <div class="a-level-row" style="margin-top:8px;">
          <input type="range" min="0" max="100" value="${s.level}" class="h-level">
          <span class="a-level-val">${s.level}%</span>
          <button class="btn-sm danger h-del" type="button">Remove</button>
        </div>
      </div>`).join("")||'<p class="a-empty">No hard skills yet.</p>',document.querySelectorAll(".h-level").forEach(s=>{s.addEventListener("input",i=>{i.target.closest(".a-level-row").querySelector(".a-level-val").textContent=i.target.value+"%"})}),document.querySelectorAll(".h-del").forEach(s=>{s.addEventListener("click",i=>{const d=i.target.closest("[data-hid]").dataset.hid;e.hard=e.hard.filter(m=>m.id!==d),o()})}))}function a(){const n=document.getElementById("softSkillRows");n&&(n.innerHTML=e.soft.map(s=>`
      <div class="a-field" data-sid="${s.id}" style="display:flex; gap:10px; align-items:center;">
        <input type="text" class="s-name" value="${s.name.replace(/"/g,"&quot;")}" style="flex:1;">
        <button class="btn-sm danger s-del" type="button">Remove</button>
      </div>`).join("")||'<p class="a-empty">No soft skills yet.</p>',document.querySelectorAll(".s-del").forEach(s=>{s.addEventListener("click",i=>{const d=i.target.closest("[data-sid]").dataset.sid;e.soft=e.soft.filter(m=>m.id!==d),a()})}))}document.getElementById("addHardBtn").addEventListener("click",()=>{e.hard.push({id:y("h"),name:"New skill",level:70}),o()}),document.getElementById("addSoftBtn").addEventListener("click",()=>{e.soft.push({id:y("s"),name:"New skill"}),a()}),document.getElementById("compSaveBtn").addEventListener("click",async()=>{document.querySelectorAll("#hardSkillRows [data-hid]").forEach(n=>{const s=n.dataset.hid,i=e.hard.find(d=>d.id===s);i&&(i.name=n.querySelector(".h-name").value,i.level=parseInt(n.querySelector(".h-level").value,10))}),document.querySelectorAll("#softSkillRows [data-sid]").forEach(n=>{const s=n.dataset.sid,i=e.soft.find(d=>d.id===s);i&&(i.name=n.querySelector(".s-name").value)}),r.competency=e,await g("site:competency",r.competency),f("Competency saved.")})}function se(t){const e=r.contact;t.innerHTML=`
    <div class="admin-header"><div><span class="mono-label">Section</span><h2>Contact & Security</h2></div></div>
    <div class="admin-panel-card">
      <h3>Contact details</h3>
      ${c("Intro line (shown above the form)","cLead",e.lead,"textarea")}
      <div class="a-grid2">${c("Email","cEmail",e.email)}${c("Phone","cPhone",e.phone)}</div>
      ${c("Location","cLoc",e.location)}
    </div>
    <div class="admin-panel-card">
      <h3>Social links (contact section)</h3>
      <div class="a-grid2">${c("GitHub URL","cGithub",e.socials.github)}${c("LinkedIn URL","cLinkedin",e.socials.linkedin)}</div>
      <div class="a-grid2">${c("X / Twitter URL","cTwitter",e.socials.twitter)}${c("Website URL","cWebsite",e.socials.website)}</div>
    </div>
    <div class="admin-panel-card">
      <h3>Admin password</h3>
      <p class="a-help">Update your sign-in password for managing your portfolio content.</p>
      ${c("Admin password","cAdminPass",r.admin.password,"password")}
    </div>
    <div class="a-actions"><button class="btn-sm primary" id="contactSaveBtn">Save changes</button></div>
  `,document.getElementById("contactSaveBtn").addEventListener("click",async()=>{r.contact={lead:l("cLead"),email:l("cEmail"),phone:l("cPhone"),location:l("cLoc"),socials:{github:l("cGithub"),linkedin:l("cLinkedin"),twitter:l("cTwitter"),website:l("cWebsite")}},r.admin={password:l("cAdminPass")||p.admin.password},await Promise.all([g("site:contact",r.contact),g("site:admin",r.admin)]),f("Contact & Security saved.")})}(async function(){D(),Y(),await P(),N(),_()})();
