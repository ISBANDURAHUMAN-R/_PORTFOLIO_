/* =========================================================
   JOURNEY ROAD — animated roadmap through the stages below.
   Self-contained: reads #jr-stage + JR_STAGES, no deps.
   ========================================================= */

const JR_STAGES = [
  { key:"html",       title:"HTML",        sub:"Web Foundation" },
  { key:"css",        title:"CSS",         sub:"UI & Layout" },
  { key:"js",         title:"JavaScript",  sub:"Web Interaction" },
  { key:"python",     title:"Python",      sub:"Programming Foundation" },
  { key:"sql",        title:"SQL",         sub:"Database & Data" },
  { key:"java",       title:"Java",        sub:"Core Programming" },
  { key:"django",     title:"Django",      sub:"Backend Development" },
  { key:"aiml",       title:"AI / ML",     sub:"Artificial Intelligence" },
  { key:"projects",   title:"Projects",    sub:"Building Real Applications" },
  { key:"internship", title:"Internship",  sub:"Real-World Experience" },
  { key:"future",     title:"Future",      sub:"Continuous Growth" },
];

(function(){
  const root = document.getElementById("jr-root");
  if (!root) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const stage       = root.querySelector(".jr-stage");
  const svg         = root.querySelector(".jr-svg-layer");
  const trackPath   = root.querySelector(".jr-road-track");
  const glowPath    = root.querySelector(".jr-road-glow");
  const milestonesEl= root.querySelector(".jr-milestones");
  const traveler    = root.querySelector(".jr-traveler");
  const btnStart    = root.querySelector("[data-jr-start]");
  const btnNext     = root.querySelector("[data-jr-next]");
  const btnReset     = root.querySelector("[data-jr-reset]");
  const progressLbl = root.querySelector("[data-jr-progress]");

  let points = [];      // {x,y} per milestone, in SVG coordinate space
  let pathLen = 0;
  let milestoneFrac = []; // fraction along path (0..1) for each milestone
  let currentIndex = -1; // -1 = not started
  let animId = null;
  let autoPlaying = false;
  let stageW = 0, stageH = 0;

  const ROW_H = 220;      // vertical gap between milestones
  const TOP_PAD = 60;
  const AMP_DESKTOP = 0.30; // horizontal swing as fraction of width
  const AMP_MOBILE  = 0.22;

  function isMobile(){ return window.innerWidth <= 820; }

  function buildLayout(){
    stageW = stage.clientWidth || root.clientWidth;
    const amp = isMobile() ? AMP_MOBILE : AMP_DESKTOP;
    const cx = stageW / 2;
    const swing = stageW * amp;

    points = JR_STAGES.map((s, i) => {
      const y = TOP_PAD + i * ROW_H;
      // alternate left/right, start & end centered for a clean cap
      let x;
      if (i === 0 || i === JR_STAGES.length - 1) {
        x = cx;
      } else {
        x = cx + (i % 2 === 0 ? -swing : swing);
      }
      return { x, y, side: x < cx ? "left" : (x > cx ? "right" : "center") };
    });

    stageH = points[points.length - 1].y + TOP_PAD;
    stage.style.minHeight = stageH + "px";
    svg.setAttribute("viewBox", `0 0 ${stageW} ${stageH}`);
    svg.setAttribute("width", stageW);
    svg.setAttribute("height", stageH);

    const d = buildSmoothPath(points);
    trackPath.setAttribute("d", d);
    glowPath.setAttribute("d", d);
    trackPath.setAttribute("pathLength", "1");
    glowPath.setAttribute("pathLength", "1");

    pathLen = glowPath.getTotalLength ? getRealLength(d) : 1;
    milestoneFrac = computeFractions();

    positionMilestones();
    setGlowProgress(currentIndex < 0 ? 0 : milestoneFrac[currentIndex]);
    if (currentIndex >= 0) placeTraveler(milestoneFrac[currentIndex]);
  }

  // Catmull-Rom-ish smooth cubic bezier through points
  function buildSmoothPath(pts){
    if (pts.length < 2) return "";
    let d = `M ${pts[0].x} ${pts[0].y} `;
    for (let i = 0; i < pts.length - 1; i++){
      const p0 = pts[i - 1] || pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;
      const cp1x = p1.x + (p2.x - p0.x) / 5;
      const cp1y = p1.y + (p2.y - p0.y) / 5;
      const cp2x = p2.x - (p3.x - p1.x) / 5;
      const cp2y = p2.y - (p3.y - p1.y) / 5;
      d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y} `;
    }
    return d;
  }

  // Use a hidden real path (glowPath, already in DOM) to measure true length
  function getRealLength(d){
    try { return glowPath.getTotalLength(); } catch(e){ return 1; }
  }

  function computeFractions(){
    // sample the real path to find the length-fraction nearest each milestone's y
    const total = glowPath.getTotalLength();
    const fracs = [];
    let searchStart = 0;
    for (let i = 0; i < points.length; i++){
      const targetY = points[i].y;
      let best = searchStart, bestDiff = Infinity;
      for (let l = searchStart; l <= total; l += Math.max(2, total/600)){
        const pt = glowPath.getPointAtLength(l);
        const diff = Math.abs(pt.y - targetY);
        if (diff < bestDiff){ bestDiff = diff; best = l; }
        if (pt.y > targetY + ROW_H) break;
      }
      fracs.push(best / total);
      searchStart = best;
    }
    fracs[fracs.length - 1] = 1;
    return fracs;
  }

  function positionMilestones(){
    milestonesEl.innerHTML = "";
    JR_STAGES.forEach((s, i) => {
      const p = points[i];
      const el = document.createElement("div");
      const sideClass = isMobile() ? "jr-side-right" : (p.side === "left" ? "jr-side-left" : "jr-side-right");
      el.className = `jr-milestone ${sideClass}`;
      el.style.left = p.x + "px";
      el.style.top = p.y + "px";
      el.dataset.index = i;
      el.innerHTML = `
        <div class="jr-node" tabindex="0" role="button" aria-label="${s.title}">
          <span class="jr-node-index">${String(i+1).padStart(2,"0")}</span>
        </div>
        <div class="jr-card">
          <div class="jr-card-stage">Stage ${String(i+1).padStart(2,"0")}</div>
          <h3 class="jr-card-title">${s.title}</h3>
          <p class="jr-card-sub">${s.sub}</p>
        </div>`;
      const node = el.querySelector(".jr-node");
      node.addEventListener("click", () => goToIndex(i, true));
      node.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); goToIndex(i, true); } });
      milestonesEl.appendChild(el);
    });
    refreshMilestoneStates();
  }

  function refreshMilestoneStates(){
    const els = milestonesEl.querySelectorAll(".jr-milestone");
    els.forEach((el, i) => {
      el.classList.toggle("jr-reached", i <= currentIndex);
      el.classList.toggle("jr-current", i === currentIndex);
    });
  }

  function setGlowProgress(frac){
    glowPath.style.strokeDasharray = "1";
    glowPath.style.strokeDashoffset = String(1 - Math.max(0, Math.min(1, frac)));
  }

  function placeTraveler(frac){
    const total = glowPath.getTotalLength();
    const pt = glowPath.getPointAtLength(Math.max(0, Math.min(1, frac)) * total);
    traveler.style.transform = `translate(${pt.x}px, ${pt.y}px) translate(-50%,-50%)`;
    traveler.classList.add("jr-active");
  }

  function spawnParticle(x, y){
    if (reduceMotion) return;
    const p = document.createElement("div");
    p.className = "jr-particle";
    const dx = (Math.random() - 0.5) * 30;
    const dy = (Math.random() - 0.5) * 30;
    p.style.left = x + "px";
    p.style.top = y + "px";
    milestonesEl.appendChild(p);
    requestAnimationFrame(() => { p.style.transform = `translate(${dx}px, ${dy}px)`; });
    setTimeout(() => p.remove(), 720);
  }

  // Animate the traveler smoothly from fromFrac to toFrac over duration
  function animateTravel(fromFrac, toFrac, duration, onDone){
    cancelAnimationFrame(animId);
    if (reduceMotion){
      setGlowProgress(toFrac);
      placeTraveler(toFrac);
      onDone && onDone();
      return;
    }
    const start = performance.now();
    const total = glowPath.getTotalLength();
    function frame(now){
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const frac = fromFrac + (toFrac - fromFrac) * eased;
      setGlowProgress(frac);
      placeTraveler(frac);
      if (Math.random() < 0.45){
        const pt = glowPath.getPointAtLength(frac * total);
        spawnParticle(pt.x, pt.y);
      }
      if (t < 1){
        animId = requestAnimationFrame(frame);
      } else {
        onDone && onDone();
      }
    }
    animId = requestAnimationFrame(frame);
  }

  function goToIndex(targetIndex, manual){
    if (targetIndex < 0 || targetIndex >= JR_STAGES.length) return;
    if (targetIndex === currentIndex) return;
    autoPlaying = false;
    const fromFrac = currentIndex < 0 ? 0 : milestoneFrac[currentIndex];
    const toFrac = milestoneFrac[targetIndex];
    const distance = Math.abs(targetIndex - Math.max(currentIndex,0)) || 1;
    const duration = Math.min(1800, 500 + distance * 260);
    currentIndex = targetIndex;
    updateButtons();
    animateTravel(fromFrac, toFrac, duration, () => {
      refreshMilestoneStates();
      updateButtons();
      scrollMilestoneIntoView(targetIndex);
    });
    // reveal reached-state immediately for the target's card fade-in timing
    setTimeout(refreshMilestoneStates, Math.max(0, duration - 250));
  }

  function scrollMilestoneIntoView(i){
    const el = milestonesEl.children[i];
    if (!el) return;
    el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
  }

  function startJourney(){
    if (autoPlaying) return;
    autoPlaying = true;
    currentIndex = -1;
    refreshMilestoneStates();
    setGlowProgress(0);
    placeTraveler(0);
    stepAuto(0);
  }

  function stepAuto(i){
    if (!autoPlaying) return;
    if (i >= JR_STAGES.length){ autoPlaying = false; updateButtons(); return; }
    const fromFrac = i === 0 ? 0 : milestoneFrac[i-1];
    const toFrac = milestoneFrac[i];
    currentIndex = i;
    updateButtons();
    animateTravel(fromFrac, toFrac, 1000, () => {
      refreshMilestoneStates();
      scrollMilestoneIntoView(i);
      if (!autoPlaying) return;
      setTimeout(() => stepAuto(i + 1), 850);
    });
  }

  function nextSkill(){
    autoPlaying = false;
    goToIndex(Math.min(currentIndex + 1, JR_STAGES.length - 1), true);
  }

  function resetJourney(){
    autoPlaying = false;
    cancelAnimationFrame(animId);
    currentIndex = -1;
    setGlowProgress(0);
    traveler.classList.remove("jr-active");
    refreshMilestoneStates();
    updateButtons();
    stage.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  function updateButtons(){
    if (btnNext) btnNext.disabled = currentIndex >= JR_STAGES.length - 1;
    if (progressLbl){
      const n = Math.max(0, currentIndex + 1);
      progressLbl.textContent = `${n} / ${JR_STAGES.length} stages`;
    }
  }

  btnStart && btnStart.addEventListener("click", startJourney);
  btnNext && btnNext.addEventListener("click", nextSkill);
  btnReset && btnReset.addEventListener("click", resetJourney);

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildLayout, 150);
  });

  // Reveal the section (fade the whole stage in) once it scrolls into view.
  // Does NOT auto-run the journey — only the visual entrance.
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        root.classList.add("jr-in-view");
        io.disconnect();
      }
    });
  }, { threshold: 0.15 });
  io.observe(root);

  buildLayout();
  updateButtons();
})();
