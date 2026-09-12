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
    name: "TRUVEX", tag: "Featured", year: "2026", status: "Active",
    description: "An AI-powered fact-checking application built to help people evaluate digital claims quickly and transparently.",
    problem: "Misinformation spreads faster than it can be verified, and most people have no quick way to check a claim.",
    solution: "A pipeline that detects claims in a piece of content, generates targeted search queries, gathers web evidence and scores source credibility before presenting an analysis.",
    tech: ["Python", "FastAPI", "Google GenAI", "Next.js", "React", "REST APIs"],
    github: "https://github.com/ISBANDURAHUMAN-R/TRUVEX", demo: null,
  },
  {
    name: "Quantum Threat", tag: "Security", year: "2025", status: "Active",
    description: "A cybersecurity project exploring quantum-related threat modeling and defenses.",
    problem: "Emerging quantum computing capabilities raise questions about the long-term safety of current cryptography.",
    solution: "Research and tooling that examines threat scenarios and how systems might respond to them.",
    tech: ["Python"], github: "https://github.com/ISBANDURAHUMAN-R/QUANTUM-THREAT", demo: null,
  },
  {
    name: "Banking Management System", tag: "Software", year: "2024", status: "Complete",
    description: "A Java-based application for managing core banking operations.",
    problem: "Manual record-keeping for accounts and transactions is slow and error-prone.",
    solution: "A structured Java application that models accounts, transactions and customer records.",
    tech: ["Java"], github: "https://github.com/ISBANDURAHUMAN-R/Banking-Management-System", demo: null,
  },
  {
    name: "Vehicle Detection AI", tag: "Computer Vision", year: "2024", status: "Experiment",
    description: "A computer-vision experiment focused on detecting vehicles in image and video data.",
    problem: "Understanding how object-detection models behave on real-world traffic footage.",
    solution: "Applied an AI/CV pipeline to identify and track vehicles as a hands-on learning project.",
    tech: ["Python", "AI/ML"], github: "https://github.com/ISBANDURAHUMAN-R/VEHICLE-DETECTION-AI", demo: null,
  },
  {
    name: "Interactive Birthday Website", tag: "Frontend", year: "2024", status: "Complete",
    description: "A playful, interaction-heavy frontend project built purely for creative practice.",
    problem: "Wanted to practice animation and interaction design outside of a strictly professional context.",
    solution: "A small interactive site with custom animations and micro-interactions.",
    tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/ISBANDURAHUMAN-R/INTERACTIVE-BIRTHDAY-WEBSITE", demo: null,
  },
  {
    name: "Premium Calculator", tag: "UI/UX", year: "2024", status: "Complete",
    description: "A modern, responsive calculator built with a strong focus on interface polish.",
    problem: "Most calculator clones ignore interaction detail and visual quality.",
    solution: "A calculator app that treats layout, spacing and feedback as first-class design decisions.",
    tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/ISBANDURAHUMAN-R/PREMIUM-CALCULATOR", demo: null,
  },
  {
    name: "Modern Landing Page", tag: "Frontend", year: "2023", status: "Complete",
    description: "A responsive landing-page build focused on layout fundamentals and responsiveness.",
    problem: "Needed practice translating a design concept into a fully responsive page.",
    solution: "A landing page built from scratch with attention to breakpoints and hierarchy.",
    tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/ISBANDURAHUMAN-R/MODERN-LANDING-PAGE", demo: null,
  },
  {
    name: "Personal Portfolio (v1)", tag: "Frontend", year: "2023", status: "Archived",
    description: "An earlier personal portfolio that marks an early step in frontend development.",
    problem: "Needed a first personal site to learn the basics of building and shipping a webpage.",
    solution: "A simple portfolio that laid the groundwork for the site you're looking at now.",
    tech: ["HTML", "CSS"], github: "https://github.com/ISBANDURAHUMAN-R/PERSONAL-PORTFOLIO", demo: null,
  },
  {
    name: "Cybersecurity Lab", tag: "Security", year: "2024", status: "Ongoing",
    description: "A virtualized environment used for hands-on cybersecurity and networking experimentation.",
    problem: "Security concepts are best understood by practicing them in a safe, isolated setup.",
    solution: "A VirtualBox-based lab for testing networking and security scenarios.",
    tech: ["VirtualBox", "Networking"], github: "https://github.com/ISBANDURAHUMAN-R/CYBERSECURITY-LAB", demo: null,
  },
  {
    name: "AI / Data Science Experiment", tag: "AI / Data", year: "2025", status: "In progress",
    description: "An ongoing exploration in applied data science, reserved as the next project to document.",
    problem: "", solution: "",
    tech: ["Python", "Data Science"], github: "https://github.com/ISBANDURAHUMAN-R/AI-DATA-SCIENCE-EXPERIMENT", demo: null,
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
      <a class="project-github-link" href="${p.github}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">GitHub repository ↗</a>
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
  renderExperience();
  renderAchievements();
  initContact();
});
