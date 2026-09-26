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
    name: "PEKKA AI",
    tag: "Autonomous AI",
    year: "2026",
    status: "Active",
    description: "An autonomous AI-powered monitoring and decision-support system designed to detect abnormal behavior in critical infrastructure, predict potential equipment failures, and recommend preventive actions to human operators.",
    problem: "Critical infrastructure such as power grids and transformer systems continuously generate large volumes of operational data. Equipment degradation can remain unnoticed until it develops into a serious failure, causing service disruptions, financial losses, and safety risks.",
    solution: "PEKKA AI continuously analyzes infrastructure telemetry from virtual or real sensors, engineers operational features, detects abnormal patterns using machine learning, estimates failure risk, and provides explainable preventive recommendations to human operators before potential disruptions become severe.",
    tech: ["Python", "FastAPI", "scikit-learn", "Pandas", "NumPy", "Machine Learning", "Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ISBANDURAHUMAN-R/PEKKA-AI",
    demo: null
  },
  {
    name: "QUANTUM THREAT", tag: "Security", year: "2025", status: "Active",
    description: "A cybersecurity project exploring quantum-related threat modeling and defenses.",
    problem: "Emerging quantum computing capabilities raise questions about the long-term safety of current cryptography.",
    solution: "Research and tooling that examines threat scenarios and how systems might respond to them.",
    tech: ["Python", "JSON"], github: "https://github.com/ISBANDURAHUMAN-R/QUANTUM-THREAT", demo: null,
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

    tech: ["Python", "Django", "SQL", "HTML", "CSS", "JavaScript"],
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

const INTERNSHIPS = [
  {
    org: "Trioz",
    role: "Software Engineering Intern",
    period: "24 Days",
    summary: "Hands-on software engineering immersion focusing on modular code organization, version control workflows, and core backend logic."
  },
  {
    org: "CodSoft",
    role: "Web Development Intern",
    period: "30 Days",
    summary: "Built responsive client-side web interfaces, crafted interactive UI components, and ensured cross-browser performance standards."
  },
  {
    org: "CodSoft",
    role: "Python Developer Intern",
    period: "30 Days",
    summary: "Engineered algorithmic back-end utilities, file automation scripts, and custom data processing modules in Python."
  },
  {
    org: "InternPe",
    role: "Cybersecurity Intern",
    period: "30 Days",
    summary: "Explored vulnerability detection, threat surface modeling, packet inspection protocols, and defensive security baselines."
  },
  {
    org: "ServiceNow",
    role: "Intern — Flows, ATF & CSA",
    period: "30 Days",
    summary: "Orchestrated enterprise workflows using ServiceNow Flow Designer, automated test cases via ATF, and studied Certified System Administrator standards."
  }
];

const ACHIEVEMENTS_SHOWCASE = [
  {
    year: "2026",
    competitions: [
      {
        title: "PECTEAM 2K26 — 2nd Place",
        badge: "2nd Place",
        venue: "Panimalar Engineering College • International Conference",
        description: "Presented research paper in applied AI and data science, securing 2nd place overall among competing collegiate delegations.",
        file: "pecteam-2k26-certificate.pdf"
      },
      {
        title: "NEXT GEN CODERS CLUB — Second Round",
        badge: "Round 2",
        venue: "Panimalar Computing & Coding Guild",
        description: "Successfully cleared round 1 competitive algorithmic challenges to advance into round 2 selection trials."
      },
      {
        title: "Pixel Forge — Poster Competition — 3rd Place",
        badge: "3rd Place",
        venue: "Design & Technology Symposium",
        description: "Awarded third place for designing a technical communication infographic illustrating complex neural network architectures and data pipelines."
      }
    ],
    certificates: [
      {
        title: "PECTEAM 2K26 — 2nd Place Award & Presentation Certificate",
        org: "Panimalar Engineering College",
        year: "2026",
        file: "pecteam-2k26-certificate.pdf"
      },
      {
        title: "ServiceNow Certified Professional Track (Flows, ATF & CSA)",
        org: "ServiceNow University",
        year: "2026",
        file: "servicenow-certificate.pdf"
      },
      {
        title: "Python Developer Internship Credential",
        org: "CODSOFT",
        year: "2026",
        file: "codsoft-python-certificate.pdf"
      },
      {
        title: "Web Development Internship Credential",
        org: "CODSOFT",
        year: "2026",
        file: "codsoft-web-certificate.pdf"
      },
      {
        title: "Cybersecurity Analyst & Threat Mitigation Credential",
        org: "InternPe Cyber Cohort",
        year: "2026",
        file: "internpe-cybersecurity-certificate.pdf"
      }
    ]
  }
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
    if (p < 1) {
      requestAnimationFrame(tick);
    } else {
      if (fill) fill.style.width = "100%";
      if (pct) pct.textContent = "100";
      setTimeout(() => {
        screen.classList.add("hidden");
        setTimeout(() => screen.remove(), 450);
      }, 180);
    }
  }
  requestAnimationFrame(tick);
}

/* ================= SMOOTH PAGE TRANSITIONS ================= */

function initPageTransitions() {
  // If loading screen is present (entering Home), ensure transition curtain is completely dismissed
  if (document.getElementById("loading-screen")) {
    document.body.classList.remove("is-transitioning");
  }

  // Ensure transition DOM elements exist
  let curtain = document.getElementById("page-transition-curtain");
  if (!curtain) {
    curtain = document.createElement("div");
    curtain.id = "page-transition-curtain";
    curtain.setAttribute("aria-hidden", "true");
    document.body.prepend(curtain);
  }

  let bar = document.getElementById("page-transition-bar");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "page-transition-bar";
    bar.setAttribute("aria-hidden", "true");
    document.body.prepend(bar);
  }

  const main = document.querySelector("main");

  // Entrance animation for page content
  if (main) {
    main.classList.remove("page-exit");
    main.classList.add("page-enter");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        main.classList.add("page-enter-active");
        setTimeout(() => {
          main.classList.remove("page-enter", "page-enter-active");
        }, 360);
      });
    });
  }

  // Laser glow progress bar sweep on arrival
  bar.classList.add("active");
  bar.style.width = "45%";
  setTimeout(() => {
    bar.style.width = "100%";
    setTimeout(() => {
      bar.classList.remove("active");
      setTimeout(() => {
        bar.style.width = "0%";
      }, 250);
    }, 180);
  }, 60);

  // Failsafe & bfcache handler: Always ensure curtain & exit classes are cleared
  const resetTransition = () => {
    document.body.classList.remove("is-transitioning");
    if (main) {
      main.classList.remove("page-exit");
    }
    if (bar) {
      bar.classList.remove("active");
      bar.style.width = "0%";
    }
  };

  window.addEventListener("pageshow", resetTransition);
  window.addEventListener("pagehide", resetTransition);

  // Transition navigation executor
  let isNavigating = false;
  const navigateWithTransition = (targetHref) => {
    if (!targetHref || isNavigating) return;
    isNavigating = true;

    // Trigger visual exit transition
    document.body.classList.add("is-transitioning");
    if (main) {
      main.classList.add("page-exit");
    }
    if (bar) {
      bar.classList.add("active");
      bar.style.width = "80%";
      setTimeout(() => {
        bar.style.width = "100%";
      }, 70);
    }

    // Smooth snappy timing: 140ms
    setTimeout(() => {
      window.location.href = targetHref;
    }, 140);

    // Timeout recovery in case navigation is interrupted
    setTimeout(() => {
      isNavigating = false;
      resetTransition();
    }, 3000);
  };

  // Intercept click on internal navigation links
  document.addEventListener("click", (e) => {
    // Ignore modified clicks (Ctrl, Cmd, Shift, Alt, middle-click)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }

    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    // Ignore anchors, external schemes, downloads, target=_blank, and document files
    if (
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:") ||
      link.target === "_blank" ||
      link.hasAttribute("download") ||
      href.endsWith(".pdf") ||
      href.endsWith(".zip") ||
      link.getAttribute("rel")?.includes("external")
    ) {
      return;
    }

    try {
      const targetUrl = new URL(href, window.location.href);

      // Verify same origin (supporting file:// as well as http/https)
      const isSameOrigin = (window.location.protocol === "file:" && targetUrl.protocol === "file:") ||
                           (targetUrl.origin === window.location.origin);
      if (!isSameOrigin) return;

      // Check current page vs target page
      const currentPath = window.location.pathname.replace(/\/$/, "");
      const targetPath = targetUrl.pathname.replace(/\/$/, "");
      const currentFile = (currentPath.split("/").pop() || "index.html").toLowerCase();
      const targetFile = (targetPath.split("/").pop() || "index.html").toLowerCase();

      // If user clicks the link to current page, smooth scroll to top instead of reloading
      if (currentFile === targetFile && (!targetUrl.hash || targetUrl.hash === "#")) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Internal page navigation
      e.preventDefault();
      navigateWithTransition(link.href);
    } catch (_) {
      // Fallback for relative paths under restricted environments
      const cleanHref = href.split("?")[0].split("#")[0];
      const currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
      if (cleanHref.toLowerCase() === currentFile) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      e.preventDefault();
      navigateWithTransition(href);
    }
  });
}

/* ================= CUSTOM CURSOR & CURSOR GLOW ================= */

function initCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const cursor = document.getElementById("custom-cursor");
  const glow = document.getElementById("cursor-glow");
  const sparkleContainer = document.getElementById("cursor-sparkles");
  if (!cursor || !glow || !sparkleContainer) return;

  // Ensure context-aware badge exists
  let badge = document.getElementById("cursor-badge");
  if (!badge) {
    badge = document.createElement("span");
    badge.id = "cursor-badge";
    badge.className = "cursor-badge";
    cursor.appendChild(badge);
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener("touchstart", () => {
    cursor.style.display = "none";
    glow.style.display = "none";
    sparkleContainer.style.display = "none";
  }, { passive: true });

  document.addEventListener("mousemove", (e) => {
    cursor.style.display = "";
    glow.style.display = "";
    sparkleContainer.style.display = "";
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.24;
    cursorY += (mouseY - cursorY) * 0.24;
    glowX += (mouseX - glowX) * 0.09;
    glowY += (mouseY - glowY) * 0.09;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    glow.style.left = `${glowX}px`;
    glow.style.top = `${glowY}px`;

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  function createSparkle(isGold = false, burstX = null, burstY = null) {
    const sparkle = document.createElement("span");
    sparkle.className = isGold ? "cursor-spark gold-spark" : "cursor-spark";
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 18 + 4;
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;

    sparkle.style.left = `${burstX !== null ? burstX : cursorX}px`;
    sparkle.style.top = `${burstY !== null ? burstY : cursorY}px`;
    sparkle.style.setProperty("--x", `${offsetX}px`);
    sparkle.style.setProperty("--y", `${offsetY}px`);

    const size = Math.random() * 2 + 1;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkleContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  }

  let sparkleTimer = 0;
  function sparkleLoop(time) {
    if (time - sparkleTimer > 200) {
      if (Math.abs(mouseX - cursorX) > 3 || Math.abs(mouseY - cursorY) > 3) {
        createSparkle(Math.random() > 0.75);
      }
      sparkleTimer = time;
    }
    requestAnimationFrame(sparkleLoop);
  }
  requestAnimationFrame(sparkleLoop);

  const interactiveSelector = "a, button, .project-card, .mini-project-card, .featured, .hero-portrait-card, .exp-card, .ach-simple-card, .ach-cert-card, .github-card, input, textarea, select, [data-cursor]";

  document.addEventListener("mouseover", (e) => {
    const el = e.target.closest(interactiveSelector);
    if (el) {
      cursor.classList.add("cursor-hover");
      glow.classList.add("glow-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    const el = e.target.closest(interactiveSelector);
    if (el) {
      cursor.classList.remove("cursor-hover");
      glow.classList.remove("glow-hover");
    }
  });

  document.addEventListener("mousedown", (e) => {
    glow.classList.add("glow-click");
    for (let i = 0; i < 3; i++) {
      createSparkle(i % 2 === 0, e.clientX, e.clientY);
    }
  });

  document.addEventListener("mouseup", () => {
    glow.classList.remove("glow-click");
  });

  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    glow.style.opacity = "0";
    if (badge) badge.classList.remove("visible");
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

/* ================= SCROLL REVEAL ================= */

function initReveal() {
  const containers = document.querySelectorAll(
    ".project-grid, .mini-project-grid, #timeline, #achievements-list, .skill-groups, .hero-labels, .hero-ctas, .about-tags, .contact-info, .skill-group-name"
  );
  containers.forEach((container) => {
    const items = container.querySelectorAll(".reveal, .project-card, .mini-project-card, .timeline-row, .ach-row, .skill-item");
    items.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${(index % 8) * 75}ms`);
    });
  });

  const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setTimeout(() => el.classList.add("in"), 50);
    } else {
      observer.observe(el);
    }
  });
}

/* ================= HOVER TILT WITH GLARE ================= */

function initHoverTilt() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const tiltCards = document.querySelectorAll(
    ".tilt-card, .project-card, .mini-project-card, .featured, .hero-portrait-card, .github-card, .currently-learning"
  );

  tiltCards.forEach((card) => {
    if (card._tiltAttached) return;
    card._tiltAttached = true;

    let glare = card.querySelector(".tilt-glare");
    if (!glare) {
      glare = document.createElement("div");
      glare.className = "tilt-glare";
      card.appendChild(glare);
    }

    let isHovered = false;
    let bounds = null;

    card.addEventListener("mouseenter", () => {
      isHovered = true;
      bounds = card.getBoundingClientRect();
      glare.style.opacity = "0.6";
    });

    card.addEventListener("mousemove", (e) => {
      if (!isHovered || !bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const px = (mouseX / bounds.width) - 0.5;
      const py = (mouseY / bounds.height) - 0.5;

      const maxTilt = card.classList.contains("featured") ? 5 : 7.5;
      const rotX = py * -maxTilt;
      const rotY = px * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(8px) scale3d(1.02, 1.02, 1.02)`;

      glare.style.background = `radial-gradient(circle 300px at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.20) 0%, rgba(128, 188, 220, 0.12) 35%, transparent 70%)`;
    });

    card.addEventListener("mouseleave", () => {
      isHovered = false;
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)";
      glare.style.opacity = "0";
    });
  });
}

/* ================= 3D HERO OBJECT (THREE.JS): ARCTIC GLACIAL CORE ================= */

function init3DHeroObject() {
  const canvas = document.getElementById("hero-3d-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const viewport = canvas.parentElement;
  if (!viewport) return;

  let width = viewport.clientWidth || 360;
  let height = viewport.clientHeight || 300;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 6.2);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  // --- 1. Outer Frost-Silver Crystal Lattice Cage ---
  const cageGeo = new THREE.IcosahedronGeometry(2.05, 1);
  const cageMat = new THREE.MeshStandardMaterial({
    color: 0xD8EDF8,
    wireframe: true,
    transparent: true,
    opacity: 0.42,
    roughness: 0.15,
    metalness: 0.9,
  });
  const cageMesh = new THREE.Mesh(cageGeo, cageMat);
  scene.add(cageMesh);

  // Crystal Node Points at cage vertices
  const cagePtsMat = new THREE.PointsMaterial({
    color: 0xEFF8FC,
    size: 0.08,
    transparent: true,
    opacity: 0.95,
  });
  const cagePts = new THREE.Points(cageGeo, cagePtsMat);
  cageMesh.add(cagePts);

  // --- 2. Primary Faceted Arctic Glacial Prism Core ---
  const prismGeo = new THREE.OctahedronGeometry(1.45, 0);
  const prismMat = new THREE.MeshStandardMaterial({
    color: 0x9FD4EE,
    emissive: 0x122533,
    roughness: 0.12,
    metalness: 0.85,
    flatShading: true,
    transparent: true,
    opacity: 0.88,
  });
  const prismMesh = new THREE.Mesh(prismGeo, prismMat);
  scene.add(prismMesh);

  // Edge highlighting on the core prism for crisp geometric definition
  const prismWireMat = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    wireframe: true,
    transparent: true,
    opacity: 0.65,
  });
  const prismWire = new THREE.Mesh(prismGeo, prismWireMat);
  prismMesh.add(prismWire);

  // --- 3. Inner Glowing Cryo-Nucleus ---
  const nucleusGeo = new THREE.SphereGeometry(0.64, 24, 24);
  const nucleusMat = new THREE.MeshBasicMaterial({
    color: 0x6AD2FF,
    transparent: true,
    opacity: 0.48,
  });
  const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
  prismMesh.add(nucleusMesh);

  // Inner geometric seed crystal
  const seedGeo = new THREE.OctahedronGeometry(0.38, 0);
  const seedMat = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    wireframe: true,
    transparent: true,
    opacity: 0.85,
  });
  const seedMesh = new THREE.Mesh(seedGeo, seedMat);
  nucleusMesh.add(seedMesh);

  // --- 4. Dual Arctic Gimbal Rings ---
  const ring1Geo = new THREE.TorusGeometry(2.42, 0.014, 8, 100);
  const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x8DB8D0, transparent: true, opacity: 0.65 });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1.rotation.x = Math.PI * 0.28;
  ring1.rotation.y = Math.PI * 0.12;
  scene.add(ring1);

  const ring2Geo = new THREE.TorusGeometry(2.7, 0.012, 8, 100);
  const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xD0ECFA, transparent: true, opacity: 0.55 });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.x = -Math.PI * 0.32;
  ring2.rotation.z = Math.PI * 0.22;
  scene.add(ring2);

  // --- 5. Orbiting Glacial Ice Shards ---
  const shardCount = 5;
  const shards = [];
  const shardMat = new THREE.MeshStandardMaterial({
    color: 0xBCE4F7,
    flatShading: true,
    roughness: 0.1,
    metalness: 0.82,
    transparent: true,
    opacity: 0.85,
  });
  const shardGeo = new THREE.TetrahedronGeometry(0.2, 0);

  for (let i = 0; i < shardCount; i++) {
    const shard = new THREE.Mesh(shardGeo, shardMat);
    const radius = 2.15 + (i * 0.2);
    const speed = 0.55 + (i * 0.18);
    const phase = (i / shardCount) * Math.PI * 2;
    const tilt = (i % 2 === 0 ? 1 : -1) * (0.2 + i * 0.15);
    shards.push({ mesh: shard, radius, speed, phase, tilt });
    scene.add(shard);
  }

  // --- 6. Diamond Frost Dust Particle Cloud ---
  const partCount = 160;
  const partPos = new Float32Array(partCount * 3);
  for (let i = 0; i < partCount; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 2.1 + Math.random() * 1.6;
    const sinPhi = Math.sin(phi);
    partPos[i * 3] = r * sinPhi * Math.cos(theta);
    partPos[i * 3 + 1] = r * sinPhi * Math.sin(theta);
    partPos[i * 3 + 2] = r * Math.cos(phi);
  }
  const partGeo = new THREE.BufferGeometry();
  partGeo.setAttribute("position", new THREE.BufferAttribute(partPos, 3));
  const partMat = new THREE.PointsMaterial({
    color: 0xD2ECFA,
    size: 0.048,
    transparent: true,
    opacity: 0.8,
  });
  const partSystem = new THREE.Points(partGeo, partMat);
  scene.add(partSystem);

  // --- 7. Three-Point Arctic Studio Lighting ---
  const ambLight = new THREE.AmbientLight(0x0F1C24, 2.0);
  scene.add(ambLight);

  // Key Light (Crisp frost white)
  const keyLight = new THREE.PointLight(0xEDF6FC, 3.4, 22);
  keyLight.position.set(4, 5, 4);
  scene.add(keyLight);

  // Fill Light (Glacial slate blue)
  const fillLight = new THREE.PointLight(0x5B9FCA, 2.8, 20);
  fillLight.position.set(-4, -3, 3);
  scene.add(fillLight);

  // Rim Light (Vibrant cryo cyan)
  const rimLight = new THREE.PointLight(0x78D5FF, 2.2, 18);
  rimLight.position.set(0, 4, -4);
  scene.add(rimLight);

  // Interactivity state
  let isHovered = false;
  let isDragging = false;
  let prevMousePos = { x: 0, y: 0 };
  let targetRotation = { x: 0, y: 0 };
  let currentRotation = { x: 0, y: 0 };
  let speedMultiplier = 1.0;
  const speedModes = ["Normal", "Turbo", "Pulse"];
  let speedModeIndex = 0;

  viewport.addEventListener("mouseenter", () => { isHovered = true; });
  viewport.addEventListener("mouseleave", () => {
    isHovered = false;
    isDragging = false;
  });

  viewport.addEventListener("pointerdown", (e) => {
    isDragging = true;
    prevMousePos = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener("pointermove", (e) => {
    if (isDragging) {
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      targetRotation.y += deltaX * 0.008;
      targetRotation.x += deltaY * 0.008;
      prevMousePos = { x: e.clientX, y: e.clientY };
    } else if (isHovered) {
      const rect = viewport.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotation.y = px * 0.8;
      targetRotation.x = py * 0.8;
    }
  });

  window.addEventListener("pointerup", () => { isDragging = false; });

  // Speed toggle button
  const speedBtn = document.getElementById("btn-rotate-speed");
  if (speedBtn) {
    speedBtn.addEventListener("click", () => {
      speedModeIndex = (speedModeIndex + 1) % speedModes.length;
      const mode = speedModes[speedModeIndex];
      speedBtn.textContent = `Speed: ${mode}`;
      if (mode === "Normal") speedMultiplier = 1.0;
      else if (mode === "Turbo") speedMultiplier = 2.4;
      else if (mode === "Pulse") speedMultiplier = 1.5;
    });
  }

  // Reset view button
  const resetBtn = document.getElementById("btn-reset-view");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      targetRotation.x = 0;
      targetRotation.y = 0;
      currentRotation.x = 0;
      currentRotation.y = 0;
      cageMesh.rotation.set(0, 0, 0);
      prismMesh.rotation.set(0, 0, 0);
    });
  }

  // Hero switcher (3D model vs profile photo)
  const btn3D = document.getElementById("btn-hero-3d");
  const btnProfile = document.getElementById("btn-hero-profile");
  const panel3D = document.getElementById("hero-3d-panel");
  const panelProfile = document.getElementById("hero-profile-panel");

  if (btn3D && btnProfile && panel3D && panelProfile) {
    btn3D.addEventListener("click", () => {
      btn3D.classList.add("active");
      btnProfile.classList.remove("active");
      panel3D.classList.add("active");
      panelProfile.classList.remove("active");
      onResize();
    });
    btnProfile.addEventListener("click", () => {
      btnProfile.classList.add("active");
      btn3D.classList.remove("active");
      panelProfile.classList.add("active");
      panel3D.classList.remove("active");
    });
  }

  // Responsive resize
  function onResize() {
    if (!viewport || !panel3D.classList.contains("active")) return;
    width = viewport.clientWidth || 360;
    height = viewport.clientHeight || 300;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }
  window.addEventListener("resize", onResize, { passive: true });

  // Animation Loop with visibility checking
  let isVisible = true;
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(heroSection);
  }

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible || (panel3D && !panel3D.classList.contains("active"))) return;

    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    let curSpeed = speedMultiplier;
    if (speedModes[speedModeIndex] === "Pulse") {
      curSpeed = (Math.sin(elapsed * 2.5) + 1.2) * 1.3;
    }
    if (isHovered && !isDragging) curSpeed *= 1.4;

    // Smooth inertia
    currentRotation.x += (targetRotation.x - currentRotation.x) * 0.08;
    currentRotation.y += (targetRotation.y - currentRotation.y) * 0.08;

    // Rotations
    cageMesh.rotation.y += delta * 0.35 * curSpeed;
    cageMesh.rotation.x = currentRotation.x + Math.sin(elapsed * 0.7) * 0.08;
    cageMesh.rotation.z = Math.cos(elapsed * 0.5) * 0.05;

    // Faceted prism spins in opposing direction with faceted refraction
    prismMesh.rotation.y -= delta * 0.55 * curSpeed;
    prismMesh.rotation.x = -currentRotation.x * 0.8 + Math.cos(elapsed * 0.8) * 0.1;
    prismMesh.rotation.z = Math.sin(elapsed * 0.6) * 0.08;

    // Inner seed counter-spin
    seedMesh.rotation.x += delta * 1.2;
    seedMesh.rotation.y += delta * 0.9;

    // Rings
    ring1.rotation.z += delta * 0.28 * curSpeed;
    ring2.rotation.y += delta * 0.22 * curSpeed;
    partSystem.rotation.y += delta * 0.1 * curSpeed;

    // Animate orbiting glacial shards
    for (let i = 0; i < shards.length; i++) {
      const s = shards[i];
      const angle = elapsed * s.speed * curSpeed + s.phase;
      s.mesh.position.x = Math.cos(angle) * s.radius;
      s.mesh.position.z = Math.sin(angle) * s.radius;
      s.mesh.position.y = Math.sin(angle * 1.5) * 0.55 * s.tilt;
      s.mesh.rotation.x += delta * 1.5;
      s.mesh.rotation.y += delta * 2.0;
    }

    // Pulse core
    const scalePulse = 1 + Math.sin(elapsed * 2.4) * 0.06;
    nucleusMesh.scale.set(scalePulse, scalePulse, scalePulse);

    renderer.render(scene, camera);
  }
  animate();
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
        <a class="project-github-link" href="${p.github}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Repository</a>
        ${p.demo ? `<a class="project-github-link" href="${p.demo}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Live Demo</a>` : ""}
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
  initHoverTilt();
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
        <a class="project-github-link" href="${project.github}" target="_blank" rel="noreferrer">Repository</a>
        ${project.demo ? `<a class="project-github-link" href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>` : ""}
      </div>
    </div>
  `).join("");

  initReveal();
  initHoverTilt();
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
      ? `<a class="cta-secondary" href="${project.github}" target="_blank" rel="noreferrer">GitHub Repository</a>`
      : `<span class="coming-soon">Repository coming soon</span>`}
      ${project.demo ? `<a class="cta-secondary" href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>` : ""}
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
  const container = document.getElementById("experience-container") || document.getElementById("timeline");
  if (!container) return;

  container.innerHTML = `
    <!-- Internships -->
    <div class="exp-group reveal">
      <div class="exp-group-header">
        <h2 class="exp-group-title">Internships</h2>
        <span class="exp-group-tag">5 Completed Tracks</span>
      </div>

      <div class="exp-vertical-timeline">
        ${INTERNSHIPS.map((item, idx) => `
          <div class="exp-timeline-node reveal">
            <div class="exp-node-connector">
              <span class="exp-node-dot"></span>
            </div>
            <div class="exp-card" data-cursor="VIEW">
              <div class="exp-card-top">
                <div class="exp-org-wrap">
                  <span class="exp-tree-glyph">${idx === INTERNSHIPS.length - 1 ? "└──" : "├──"}</span>
                  <h3 class="exp-org">${item.org}</h3>
                </div>
                <span class="exp-period">${item.period}</span>
              </div>
              <div class="exp-role">${item.role}</div>
              <p class="exp-desc">${item.summary}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  initReveal();
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

// Global listener for cert preview buttons
document.addEventListener("click", (e) => {
  const certBtn = e.target.closest("[data-cert-view]");
  if (certBtn) {
    e.preventDefault();
    openCertModal(certBtn.dataset.certTitle || "Certifications & Recognitions", certBtn.dataset.certUrl || "CERTIFICATE.pdf");
  }

  const backToTopBtn = e.target.closest(".footer-back-to-top, #scroll-to-top");
  if (backToTopBtn) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

/* ================= ACHIEVEMENTS PAGE ================= */

function renderAchievements() {
  const container = document.getElementById("achievements-list");
  if (!container) return;

  container.innerHTML = ACHIEVEMENTS_SHOWCASE.map(section => `
    <div class="ach-year-section reveal">
      <div class="ach-year-title-row">
        <span class="ach-year-badge">${section.year}</span>
        <div class="ach-year-divider"></div>
      </div>

      <div class="ach-tree-container">
        <!-- Competitions / Milestones -->
        ${section.competitions.map((comp) => `
          <div class="ach-tree-row reveal">
            <div class="ach-tree-branch">
              <span class="ach-tree-node"></span>
              <span class="ach-tree-connector-line"></span>
            </div>
            <div class="ach-simple-card">
              <div class="ach-simple-card-top">
                <h3 class="ach-simple-title">${comp.title}</h3>
                <div style="display:flex; align-items:center; flex-wrap:wrap; gap:8px;">
                  ${comp.badge ? `<span class="ach-award-pill">${comp.badge}</span>` : ""}
                  <span class="ach-simple-venue">${comp.venue}</span>
                </div>
              </div>
              <p class="ach-simple-desc">${comp.description}</p>
              ${comp.file ? `
                <div class="ach-cert-actions" style="margin-top:14px;">
                  <button class="ach-cert-btn preview" onclick="openCertModal('${comp.title.replace(/'/g, "\\'")}', '${comp.file}')">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    <span>View Certificate</span>
                  </button>
                  <a class="ach-cert-btn download" href="${comp.file}" download="pecteam-2k26-certificate.pdf">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    <span>Download Certificate</span>
                  </a>
                </div>
              ` : ""}
            </div>
          </div>
        `).join("")}

        <!-- Certificates -->
        ${section.certificates && section.certificates.length > 0 ? `
          <div class="ach-tree-row reveal">
            <div class="ach-tree-branch">
              <span class="ach-tree-node cert-node"></span>
              <span class="ach-tree-connector-line"></span>
            </div>
            <div class="ach-cert-block">
              <div class="ach-cert-header">
                <span class="ach-cert-header-title">Certificates (${section.year})</span>
              </div>
              <div class="ach-cert-grid">
                ${section.certificates.map(cert => `
                  <div class="ach-cert-card">
                    <div class="ach-cert-info">
                      <h4 class="ach-cert-title">${cert.title}</h4>
                      <div class="ach-cert-meta">
                        <span>${cert.org}</span>
                        <span class="ach-dot">•</span>
                        <span>${cert.year}</span>
                      </div>
                    </div>
                    <div class="ach-cert-actions">
                      <button class="ach-cert-btn preview" onclick="openCertModal('${cert.title.replace(/'/g, "\\'")}', '${cert.file}')">View</button>
                      <a class="ach-cert-btn download" href="${cert.file}" download>Download</a>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        ` : ""}
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
      navigator.clipboard?.writeText(PROFILE.email).catch(() => { });
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

/* ================= FLOATING SCROLL TO TOP ================= */

function initScrollToTop() {
  const btn = document.getElementById("scroll-to-top");
  if (!btn) return;

  const handleScroll = () => {
    if (window.scrollY > 260) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


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

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {
  initPageTransitions();
  initLoading();
  initCursor();
  initNav();
  initMobileDock();
  initReveal();
  initHoverTilt();
  init3DHeroObject();
  renderProjects();
  renderMiniProjects();
  renderExperience();
  renderAchievements();
  initContact();
  initScrollToTop();
});
