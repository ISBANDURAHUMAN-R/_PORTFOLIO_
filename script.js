/**
 * Portfolio Core Script - Isbandu Rahuman R.
 * High-performance, zero-latency, accessible architecture.
 */

const PROFILE = {
  name: "Isbandu Rahuman R.",
  email: "r1rahuman@gmail.com",
  github: "https://github.com/ISBANDURAHUMAN-R",
  linkedin: "https://www.linkedin.com/in/isbandu-rahuman-r-4b855b396/",
  location: "Tamil Nadu, India"
};

const PROJECTS = [
  {
    name: "TRUVEX", tag: "Featured", category: "AI", year: "2025", status: "Active",
    description: "An AI-powered fact-checking application built to help people evaluate digital claims quickly and transparently.",
    problem: "Misinformation spreads faster than it can be verified, and most people have no quick way to check a claim.",
    solution: "A pipeline that detects claims in a piece of content, generates targeted search queries, gathers web evidence and scores source credibility before presenting an analysis.",
    tech: ["Python", "FastAPI", "Google GenAI", "Next.js", "React", "REST APIs"],
    github: "https://github.com/ISBANDURAHUMAN-R/TRUVEX", demo: null
  },
  {
    name: "PEKKA AI", tag: "Autonomous AI", category: "AI", year: "2026", status: "Active",
    description: "An autonomous AI-powered monitoring and decision-support system designed to detect abnormal behavior in critical infrastructure, predict potential equipment failures, and recommend preventive actions to human operators.",
    problem: "Critical infrastructure such as power grids and transformer systems continuously generate large volumes of operational data. Equipment degradation can remain unnoticed until it develops into a serious failure, causing service disruptions, financial losses, and safety risks.",
    solution: "PEKKA AI continuously analyzes infrastructure telemetry from virtual or real sensors, engineers operational features, detects abnormal patterns using machine learning, estimates failure risk, and provides explainable preventive recommendations to human operators before potential disruptions become severe.",
    tech: ["Python", "FastAPI", "scikit-learn", "Pandas", "NumPy", "Machine Learning", "Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ISBANDURAHUMAN-R/PEKKA-AI", demo: null
  },
  {
    name: "NINJA JUTSU", tag: "Hand Gesture Recognition", category: "Vision", year: "2026", status: "Active",
    description: "An interactive AI-powered ninja jutsu simulator that uses real-time webcam hand gesture recognition to trigger anime-inspired jutsu effects based on specific hand signs performed by the user.",
    problem: "Anime-inspired hand signs are usually limited to fictional scenes and animations. There is no simple interactive way for users to perform recognizable hand signs in front of a camera and experience corresponding jutsu effects in real time.",
    solution: "A real-time computer vision application that accesses the user's webcam, recognizes predefined ninja hand signs using hand tracking and gesture classification, and triggers corresponding anime-inspired jutsu animations and visual effects.",
    tech: ["Python", "OpenCV", "MediaPipe", "Machine Learning", "FastAPI", "JavaScript", "HTML", "Tailwind CSS"],
    github: "https://github.com/ISBANDURAHUMAN-R/NINJA-ACADEMY", demo: null
  },
  {
    name: "QUANTUM THREAT", tag: "Security", category: "FullStack", year: "2025", status: "Active",
    description: "A cybersecurity project exploring quantum-related threat modeling and defenses.",
    problem: "Emerging quantum computing capabilities raise questions about the long-term safety of current cryptography.",
    solution: "Research and tooling that examines threat scenarios and how systems might respond to them.",
    tech: ["Python", "JSON"],
    github: "https://github.com/ISBANDURAHUMAN-R/QUANTUM-THREAT", demo: null
  },
  {
    name: "LIFE_CORE", tag: "Productivity", category: "FullStack", year: "2026", status: "Active",
    description: "A full-stack personal productivity platform designed to manage goals, habits, tasks, learning, and daily progress through one centralized system.",
    problem: "Managing goals, habits, tasks, and personal development across separate tools can make it difficult to stay organized and consistently track progress.",
    solution: "A full-stack life management system that brings personal productivity and growth into one platform, allowing users to organize their priorities, track activities, manage goals, and monitor their progress.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Django", "SQL"],
    github: "https://github.com/ISBANDURAHUMAN-R/LIFE_CORE", demo: null
  },
  {
    name: "VEHIX", tag: "Computer Vision", category: "Vision", year: "2026", status: "Active",
    description: "An AI-powered vehicle detection system designed to identify, classify, and count vehicles from images using computer vision.",
    problem: "Manually identifying and counting vehicles from images is time-consuming and difficult to scale, especially when analyzing large amounts of visual data.",
    solution: "A computer vision system that uses YOLO-based object detection to automatically detect vehicles, classify them, count detected objects, and generate annotated visual results through an interactive interface.",
    tech: ["Python", "YOLO", "OpenCV", "FastAPI", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ISBANDURAHUMAN-R/VEHIX", demo: null
  },
  {
    name: "NEXORA", tag: "Skill Development", category: "FullStack", year: "2026", status: "Active",
    description: "An interactive skill progression platform that transforms learning into a visual skill tree, helping users discover, develop, and track their technical abilities.",
    problem: "Learning multiple technologies without a structured path can make it difficult to know what to learn next, track progress, and understand how different skills connect.",
    solution: "A full-stack skill development platform that maps technologies and concepts into connected learning paths, allowing users to track their progress, unlock new skills, and build personalized roadmaps toward mastery.",
    tech: ["Python", "Django", "SQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ISBANDURAHUMAN-R/NEXORA", demo: null
  }
];

/* ================= NAVIGATION ================= */
function initNav() {
  const nav = document.querySelector("nav.site-nav");
  const menuBtn = document.getElementById("nav-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    }, { passive: true });
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }
}

/* ================= MOBILE BOTTOM DOCK ================= */
function initMobileDock() {
  const dock = document.querySelector(".mobile-bottom-dock");
  if (!dock) return;

  const currentPath = window.location.pathname;
  const fileName = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";

  dock.querySelectorAll(".dock-item").forEach((item) => {
    const href = item.getAttribute("href");
    if (href === fileName || (fileName === "" && href === "index.html")) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

/* ================= SCROLL REVEAL ================= */
function initReveal() {
  const els = document.querySelectorAll(".reveal:not(.in), .reveal-left:not(.in), .reveal-right:not(.in), .reveal-scale:not(.in)");
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px 50px 0px" });

  els.forEach((el) => observer.observe(el));
}

/* ================= TOAST NOTIFICATION ================= */
function showToast(message = "Copied to clipboard") {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add("show");
  if (window._toastTimeout) clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

/* ================= CERTIFICATE MODAL ================= */
function openCertModal(title, certUrl) {
  let modal = document.getElementById("cert-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "cert-modal";
    modal.innerHTML = `
      <div class="cert-modal-window">
        <div class="cert-modal-header">
          <div class="cert-modal-title-wrap">
            <span class="cert-modal-badge">VERIFIED CREDENTIAL</span>
            <h3 class="cert-modal-title" id="cert-modal-title">Certificate Preview</h3>
          </div>
          <div class="cert-modal-actions">
            <a id="cert-modal-download" class="cert-download-btn" href="CERTIFICATE.pdf" download>Download PDF</a>
            <button class="cert-close-btn" id="cert-modal-close" aria-label="Close modal">&times;</button>
          </div>
        </div>
        <div class="cert-modal-body">
          <iframe id="cert-modal-iframe" class="cert-iframe" src="" title="Certificate Preview"></iframe>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest("#cert-modal-close")) closeCertModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeCertModal();
    });
  }

  const titleEl = document.getElementById("cert-modal-title");
  const iframeEl = document.getElementById("cert-modal-iframe");
  const downloadEl = document.getElementById("cert-modal-download");

  if (titleEl) titleEl.textContent = title || "Certificate Preview";
  if (iframeEl) iframeEl.src = (certUrl || "CERTIFICATE.pdf") + "#toolbar=1";
  if (downloadEl) downloadEl.href = certUrl || "CERTIFICATE.pdf";

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCertModal() {
  const modal = document.getElementById("cert-modal");
  if (!modal) return;
  modal.classList.remove("open");
  const iframeEl = document.getElementById("cert-modal-iframe");
  if (iframeEl) iframeEl.src = "";
  document.body.style.overflow = "";
}

/* ================= PROJECTS PAGE ================= */
function openProjectModal(project) {
  if (!project) return;
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
      ? `<a class="cta-secondary" href="${project.github}" target="_blank" rel="noreferrer">GitHub Repository</a>`
      : `<span class="coming-soon">Repository coming soon</span>`}
      ${project.demo ? `<a class="cta-secondary" href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>` : ""}
    </div>
  `;

  overlay.classList.add("open");
  document.getElementById("modal-close")?.addEventListener("click", closeProjectModal);
  overlay.onclick = (e) => { if (e.target === overlay) closeProjectModal(); };
  document.addEventListener("keydown", escCloseModal);
}

function closeProjectModal() {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) overlay.classList.remove("open");
  document.removeEventListener("keydown", escCloseModal);
}

function escCloseModal(e) {
  if (e.key === "Escape") closeProjectModal();
}

function initProjectsPage() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  const featuredCard = document.getElementById("featured-project");
  const filterPills = document.querySelectorAll("#project-filters .filter-pill");
  const searchInput = document.getElementById("project-search");
  const cards = grid.querySelectorAll(".project-card");

  let activeCategory = "all";
  let searchQuery = "";

  function filterCards() {
    const q = searchQuery.trim().toLowerCase();
    let visibleCount = 0;

    // Featured project (TRUVEX, category: "AI")
    if (featuredCard) {
      const featMatchCat = activeCategory === "all" || activeCategory === "AI";
      const featMatchQuery = !q || "truvex fact-checking claim verification python fastapi google genai react next.js".includes(q);
      const showFeat = featMatchCat && featMatchQuery;
      featuredCard.style.display = showFeat ? "" : "none";
      if (showFeat) visibleCount++;
    }

    // Grid cards
    cards.forEach((card) => {
      const category = card.dataset.category || "";
      const searchData = (card.dataset.search || card.textContent || "").toLowerCase();

      const matchCat = activeCategory === "all" || category === activeCategory;
      const matchQuery = !q || searchData.includes(q);

      if (matchCat && matchQuery) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Empty state
    let emptyMsg = grid.querySelector(".project-empty-state");
    if (visibleCount === 0) {
      if (!emptyMsg) {
        emptyMsg = document.createElement("div");
        emptyMsg.className = "project-empty-state";
        grid.appendChild(emptyMsg);
      }
      emptyMsg.innerHTML = `
        <h4>No matching engineering projects found</h4>
        <p>No project matches "<strong>${escapeHtml(q)}</strong>". Try searching for technologies like Python, FastAPI, YOLO, React, or reset to "All".</p>
      `;
      emptyMsg.style.display = "";
    } else if (emptyMsg) {
      emptyMsg.style.display = "none";
    }
  }

  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.dataset.filter || "all";
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      filterCards();
    });
  }

  if (featuredCard) {
    featuredCard.addEventListener("click", () => openProjectModal(PROJECTS[0]));
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const idx = parseInt(card.dataset.index, 10);
      if (PROJECTS[idx]) openProjectModal(PROJECTS[idx]);
    });
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/[&<>'"]/g, (tag) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[tag] || tag));
}

/* ================= CONTACT PAGE ================= */
function initContact() {
  const footerEmailLinks = document.querySelectorAll('.footer-link[href^="mailto:"]');
  footerEmailLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`;
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
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

/* ================= SCROLL TO TOP ================= */
function initScrollToTop() {
  const btn = document.getElementById("scroll-to-top");
  if (!btn) return;

  const handleScroll = () => {
    btn.classList.toggle("visible", window.scrollY > 260);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ================= GLOBAL LISTENERS ================= */
document.addEventListener("click", (e) => {
  const certBtn = e.target.closest("[data-cert-view]");
  if (certBtn) {
    e.preventDefault();
    openCertModal(certBtn.dataset.certTitle || "Certifications & Credentials", certBtn.dataset.certUrl || "CERTIFICATE.pdf");
    return;
  }

  const copyBtn = e.target.closest("[data-copy-email]");
  if (copyBtn) {
    e.preventDefault();
    navigator.clipboard?.writeText(PROFILE.email).catch(() => {});
    showToast("Email address copied to clipboard");
    return;
  }

  const backToTopBtn = e.target.closest(".footer-back-to-top");
  if (backToTopBtn) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initMobileDock();
  initReveal();
  initProjectsPage();
  initContact();
  initScrollToTop();
});
