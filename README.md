<p align="center">
  <img src="assets/banner.png" alt="_PORTFOLIO_ Banner" width="100%">
</p>

# ◈ Personal Portfolio Website

[![CI](https://github.com/ISBANDURAHUMAN-R/CODSOFT_taskno_PORTFOLIO/actions/workflows/ci.yml/badge.svg)](https://github.com/ISBANDURAHUMAN-R/CODSOFT_taskno_PORTFOLIO/actions/workflows/ci.yml)

## ◆ About the Project
This repository contains a multi-page personal developer portfolio built with semantic HTML5, CSS3, and JavaScript during the CodSoft Web Development Internship. It organizes technical projects, programming skills, academic background, and contact channels into an accessible web experience.

## ❖ Key Features
- Modular multi-page structure separating Home, Projects, Skills, Experience, Achievements, and Contact sections.
- Comprehensive technical skills matrix displaying proficiencies in AI, Python, web development, and databases.
- Featured project showcase providing architectural summaries, technology tags, and direct repository links.
- Responsive mobile navigation with CSS styling.

## ◆ System Architecture
```mermaid
graph TD
    subgraph Navigation ["Multi-Page Static Site Architecture"]
        Index["index.html<br/>Hero & Overview"]
        Projects["projects.html<br/>Architecture & Repositories"]
        Skills["skills.html<br/>Full-Stack & AI Matrix"]
        Experience["experience.html<br/>Career Timeline"]
        Achievements["achievements.html<br/>Certifications & Awards"]
        Contact["contact.html<br/>Connect & Social Channels"]
    end

    subgraph ClientCore ["Interactive Client Engine (script.js)"]
        NavRouter["Navigation Controller & Active Link Highlighter"]
        ThemeEngine["Theme Switcher & Preference Store"]
        ScrollObserver["Intersection Observer & Reveal Animations"]
        FormHandler["Client Validation & Contact Link Dispatcher"]
    end

    subgraph StylesheetLayer ["CSS3 Design System (style.css)"]
        Tokens["Design Tokens: Colors • Typography • Spacing"]
        Grid["CSS Grid Layout System"]
        Responsive["Media Query Breakpoints"]
    end

    Index & Projects & Skills & Experience & Achievements & Contact --> NavRouter
    Index & Projects & Skills & Experience & Achievements & Contact --> ThemeEngine
    Index & Projects & Skills & Experience & Achievements & Contact --> ScrollObserver
    Contact --> FormHandler
    Tokens --> Grid --> Responsive
```

## ⬢ Technologies Used
- HTML5
- CSS3
- JavaScript

## § Requirements
- Modern web browser

## ▲ Installation & Execution
```bash
# Open index.html directly or serve locally
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

## ※ Developer
Developer: ISBANDU RAHUMAN R  
GitHub: https://github.com/ISBANDURAHUMAN-R
