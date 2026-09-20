/* ================= DATA ================= */

const PROFILE = {
  name: "Isbandu Rahuman R.",
  email: "r1rahuman@gmail.com",
  github: "https://github.com/ISBANDURAHUMAN-R",
  githubUser: "ISBANDURAHUMAN-R",
  linkedin: "https://www.linkedin.com/in/isbandu-rahuman-r-4b855b396/",
  location: "Tamil Nadu, India",
};

const PROJECTS = [
  {
    name: "TRUVEX", tag: "Featured", year: "2025", status: "Active",
    description: "An AI-powered fact-checking application built to help people evaluate digital claims quickly and transparently.",
    problem: "Misinformation spreads faster than it can be verified, and most people have no quick way to check a claim.",
    solution: "A pipeline that detects claims in a piece of content, generates targeted search queries, gathers web evidence and scores source credibility before presenting an analysis.",
    tech: ["Python", "FastAPI", "Google GenAI", "Next.js", "React", "REST APIs"],
    github: "https://github.com/ISBANDURAHUMAN-R/TRUVEX", demo: null,
  },
  {
    name: "QUANTUM THREAT", tag: "Security", year: "2025", status: "Active",
    description: "A cybersecurity project exploring quantum-related threat modeling and defenses.",
    problem: "Emerging quantum computing capabilities raise questions about the long-term safety of current cryptography.",
    solution: "Research and tooling that examines threat scenarios and how systems might respond to them.",
    tech: ["Python","JSON"], github: "https://github.com/ISBANDURAHUMAN-R/QUANTUM-THREAT", demo: null,
  },
  {
  name: "LIFE_CORE",
  tag: "Productivity",
  year: "2026",
  status: "Active",

  description: "A full-stack personal productivity platform designed to manage goals, habits, tasks, learning, and daily progress through one centralized system.",

  problem: "Managing goals, habits, tasks, and personal development across separate tools can make it difficult to stay organized and consistently track progress.",

  solution: "A full-stack life management system that brings personal productivity and growth into one platform, allowing users to organize their priorities, track activities, manage goals, and monitor their progress.",

  tech: ["HTML", "CSS", "JavaScript", "Python", "Django", "SQL"],
  github: "https://github.com/ISBANDURAHUMAN-R/LIFE_CORE",
  demo: null
},
 {
  name: "VEHIX",
  tag: "Computer Vision",
  year: "2026",
  status: "Active",

  description: "An AI-powered vehicle detection system designed to identify, classify, and count vehicles from images using computer vision.",

  problem: "Manually identifying and counting vehicles from images is time-consuming and difficult to scale, especially when analyzing large amounts of visual data.",

  solution: "A computer vision system that uses YOLO-based object detection to automatically detect vehicles, classify them, count detected objects, and generate annotated visual results through an interactive interface.",

  tech: ["Python", "YOLO", "OpenCV", "FastAPI", "JavaScript", "Tailwind CSS"],
  github: "https://github.com/ISBANDURAHUMAN-R/VEHIX",
  demo: null
},
  
  {
  name: "NEXORA",
  tag: "Skill Development",
  year: "2026",
  status: "Active",

  description: "An interactive skill progression platform that transforms learning into a visual skill tree, helping users discover, develop, and track their technical abilities.",

  problem: "Learning multiple technologies without a structured path can make it difficult to know what to learn next, track progress, and understand how different skills connect.",

  solution: "A full-stack skill development platform that maps technologies and concepts into connected learning paths, allowing users to track their progress, unlock new skills, and build personalized roadmaps toward mastery.",

  tech: [ "Python", "Django", "SQL","HTML", "CSS", "JavaScript"],
  github: "https://github.com/ISBANDURAHUMAN-R/NEXORA",
  demo: null
},
];

const MINI_PROJECTS = [
  {
    name: "PRANK ZONE",
    tag: "Frontend",
    year: "2026",
    github: "https://github.com/ISBANDURAHUMAN-R/PRANK",
    demo: "https://isbandurahuman-r.github.io/PRANK/",
  },
  {
    name: "BIRTHDAY",
    tag: "Frontend",
    year: "2026",
    github: "https://github.com/ISBANDURAHUMAN-R/BIRTHDAY",
    demo: "https://isbandurahuman-r.github.io/BIRTHDAY/",
  },
  {
    name: "CAREER DNA",
    tag: "Frontend",
    year: "2026",
    github: "https://github.com/ISBANDURAHUMAN-R/CAREER-DNA",
    demo: "https://isbandurahuman-r.github.io/CAREER-DNA/",
  },
   {
    name: "BASIC LANDPAGE",
    tag: "Frontend",
    year: "2026",
    github: "https://github.com/ISBANDURAHUMAN-R/FIRST_LANDPAGE",
    demo: "https://isbandurahuman-r.github.io/FIRST_LANDPAGE/",
  },
];

const ACHIEVEMENTS = [
  { year: "2026", event: "PECTEAM 2K26", result: "2nd Place", note: "Presented my work at PECTEAM 2K26 and secured 2nd place." },
  { year: "2026", event: "Pixel Forge — Poster Competition", result: "3rd Place", note: "Placed third in a poster design competition." },
  { year: "2026", event: "NEXT GEN CODERS CLUB", result: "Second Round", note: "Advanced to the second round of selections for the Next Gen Coders Club." },
];

const EXPERIENCE = [
  { org: "TRIOZ", role: "Intern", period: "24 days", note: "Short-form internship focused on hands-on technical exposure." },
  { org: "CODSOFT", role: "Web Development Intern", period: "30 days", note: "Completed an internship in web development with CODSOFT." },
  { org: "CODSOFT", role: "Python Developer Intern", period: "30 days", note: "Completed a Python developer internship with CODSOFT." },
  { org: "INTERNPE", role: "Cybersecurity Intern", period: "30 days", note: "Completed an internship in cybersecurity with InternPe." },
  { org: "SERVICENOW", role: "Intern — Flows, ATF & CSA", period: "30 days", note: "Completed a ServiceNow internship covering Flows, ATF, and CSA." },
];

/* ================= LOADING SCREEN ================= */

function initLoading() {
  const screen = document.getElementById("loading-screen");
  if (!screen) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) { screen.remove(); return; }

  const fill = document.getElementById("loading-bar-fill");
  const pct = document.getElementById("loading-pct");
  const start = performance.now();
  const duration = 1100;

  function tick(t) {
    const p = Math.min(1, (t - start) / duration);
    const val = Math.floor(p * 100);
    if (fill) fill.style.width = val + "%";
    if (pct) pct.textContent = String(val).padStart(2, "0");
    if (p < 1) requestAnimationFrame(tick);
    else setTimeout(() => { screen.classList.add("hidden"); setTimeout(() => screen.remove(), 500); }, 200);
  }
  requestAnimationFrame(tick);
}

/* ================= CUSTOM CURSOR ================= */

function initCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const cursor = document.getElementById("custom-cursor");
  const glow = document.getElementById("cursor-glow");
  const sparkleContainer = document.getElementById("cursor-sparkles");
  if (!cursor || !glow || !sparkleContainer) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let glowX = 0;
  let glowY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.22;
    cursorY += (mouseY - cursorY) * 0.22;
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  function createSparkle() {
    const sparkle = document.createElement("span");
    sparkle.className = "cursor-spark";
    const offsetX = (Math.random() - 0.5) * 18;
    const offsetY = (Math.random() - 0.5) * 18;
    sparkle.style.left = `${cursorX}px`;
    sparkle.style.top = `${cursorY}px`;
    sparkle.style.setProperty("--x", `${offsetX}px`);
    sparkle.style.setProperty("--y", `${offsetY}px`);
    const size = Math.random() * 3 + 1;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkleContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 700);
  }

  let sparkleTimer = 0;
  function sparkleLoop(time) {
    if (time - sparkleTimer > 65) {
      createSparkle();
      sparkleTimer = time;
    }
    requestAnimationFrame(sparkleLoop);
  }
  requestAnimationFrame(sparkleLoop);

  document.querySelectorAll("a, button, .project-card, input, textarea, select").forEach((element) => {
    element.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
    element.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    glow.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
    glow.style.opacity = "1";
  });
}

/* ================= NAV ================= */

function initNav() {
  const nav = document.querySelector("nav.site-nav");
  const menuBtn = document.getElementById("nav-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  window.addEventListener("scroll", () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
    mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mobileMenu.classList.remove("open")));
  }
}

/* ================= REVEAL ON SCROLL ================= */

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach((el) => io.observe(el));
}

/* ================= HERO TILT ================= */

function initHeroTilt() {
  const wrap = document.querySelector(".hero");
  const card = document.querySelector(".hero-portrait-card");
  if (!wrap || !card) return;
  wrap.addEventListener("mousemove", (e) => {
    const rect = wrap.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${py * -6}deg) rotateY(${px * 6}deg)`;
  });
  wrap.addEventListener("mouseleave", () => { card.style.transform = "rotateX(0) rotateY(0)"; });
}

/* ================= PROJECTS PAGE ================= */

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  const rest = PROJECTS.slice(1);
  grid.innerHTML = rest.map((p, i) => `
    <div class="project-card reveal" data-index="${i + 1}" data-cursor="VIEW">
      <div class="project-card-top">
        <span class="project-tag">${p.tag}</span>
        <span>${p.year}</span>
      </div>
      <h3 class="project-name">${p.name}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tech-row">
        ${p.tech.slice(0, 3).map((t) => `<span class="project-tech-tag">${t}</span>`).join("")}
      </div>
      <div class="project-links">
        <a class="project-github-link" href="${p.github}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">GitHub repository ↗</a>
        ${p.demo ? `<a class="project-github-link" href="${p.demo}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Live demo ↗</a>` : ""}
      </div>
      <div class="project-status">${p.status}</div>
    </div>
  `).join("");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openProjectModal(PROJECTS[parseInt(card.dataset.index, 10)]));
  });

  const featuredBtn = document.getElementById("featured-project");
  if (featuredBtn) featuredBtn.addEventListener("click", () => openProjectModal(PROJECTS[0]));

  initReveal();
}

function renderMiniProjects() {
  const grid = document.getElementById("mini-project-grid");
  if (!grid) return;

  grid.innerHTML = MINI_PROJECTS.map((project) => `
    <div class="mini-project-card reveal">
      <div class="project-card-top">
        <span class="project-tag">${project.tag}</span>
        <span>${project.year}</span>
      </div>
      <h3 class="project-name">${project.name}</h3>
      <div class="project-links">
        <a class="project-github-link" href="${project.github}" target="_blank" rel="noreferrer">Repository ↗</a>
        ${project.demo ? `<a class="project-github-link" href="${project.demo}" target="_blank" rel="noreferrer">Live demo ↗</a>` : ""}
      </div>
    </div>
  `).join("");

  initReveal();
}

function openProjectModal(project) {
  const overlay = document.getElementById("modal-overlay");
  const card = document.getElementById("modal-card");
  if (!overlay || !card) return;

  const blocks = [
    ["Overview", project.description],
    ["Problem", project.problem],
    ["Solution", project.solution],
  ].filter(([, v]) => v);

  card.innerHTML = `
    <button class="modal-close" id="modal-close" aria-label="Close">✕</button>
    <span class="project-tag">${project.tag}</span>
    <h3 class="modal-title">${project.name}</h3>
    ${blocks.map(([label, text]) => `
      <div class="modal-block">
        <div class="modal-label">${label}</div>
        <p class="modal-text">${text}</p>
      </div>
    `).join("")}
    <div class="modal-block">
      <div class="modal-label">Technologies</div>
      <div class="project-tech-row">
        ${project.tech.map((t) => `<span class="project-tech-tag">${t}</span>`).join("")}
      </div>
    </div>
    <div class="modal-links">
      ${project.github
        ? `<a class="cta-secondary" href="${project.github}" target="_blank" rel="noreferrer">GitHub ↗</a>`
        : `<span class="coming-soon">Repository coming soon</span>`}
      ${project.demo ? `<a class="cta-secondary" href="${project.demo}" target="_blank" rel="noreferrer">Live demo ↗</a>` : ""}
    </div>
  `;

  overlay.classList.add("open");
  document.getElementById("modal-close").addEventListener("click", closeProjectModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeProjectModal(); });
  document.addEventListener("keydown", escCloseModal);
}

function closeProjectModal() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) overlay.classList.remove("open");
  document.removeEventListener("keydown", escCloseModal);
}

function escCloseModal(e) { if (e.key === "Escape") closeProjectModal(); }

/* ================= EXPERIENCE PAGE ================= */

function renderExperience() {
  const el = document.getElementById("timeline");
  if (!el) return;
  el.innerHTML = EXPERIENCE.map((e) => `
    <div class="timeline-row reveal">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <div class="timeline-top">
          <span class="timeline-org">${e.org}</span>
          <span class="timeline-period">${e.period}</span>
        </div>
        <div class="timeline-role">${e.role}</div>
        <p class="timeline-note">${e.note}</p>
      </div>
    </div>
  `).join("");
  initReveal();
}

/* ================= ACHIEVEMENTS PAGE ================= */

function renderAchievements() {
  const el = document.getElementById("achievements-list");
  if (!el) return;
  el.innerHTML = ACHIEVEMENTS.map((a) => `
    <div class="ach-row reveal">
      <span class="ach-year">${a.year}</span>
      <div>
        <div class="ach-top">
          <span class="ach-event">${a.event}</span>
        </div>
        <p class="ach-note">${a.note}</p>
      </div>
    </div>
  `).join("");
  initReveal();
}

/* ================= CONTACT (index page) ================= */

function initContact() {
  const footerEmailLinks = document.querySelectorAll('.footer-link[href^="mailto:"]');
  footerEmailLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    });
  });

  const copyBtns = document.querySelectorAll("[data-copy-email]");
  copyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      navigator.clipboard?.writeText(PROFILE.email).catch(() => {});
      const original = btn.innerHTML;
      btn.innerHTML = btn.innerHTML.replace(/Copy|✓/i, "✓");
      setTimeout(() => { btn.innerHTML = original; }, 1800);
    });
  });

  const form = document.getElementById("contact-form");
  const note = document.getElementById("form-sent-note");
  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = `Portfolio contact from ${data.get("name")}`;
      const body = [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        "",
        data.get("message"),
      ].join("\n");
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
      form.classList.add("hidden");
      note.classList.add("show");
    });
  }
}

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {
  initLoading();
  initCursor();
  initNav();
  initReveal();
  initHeroTilt();
  renderProjects();
  renderMiniProjects();
  renderExperience();
  renderAchievements();
  initContact();
});
