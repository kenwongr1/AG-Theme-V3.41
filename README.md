# Amerigroup International — WordPress Theme v2.0.0
**Source audited:** https://www.amerigroupint.net
**Audit date:** April 2025 — all 6 pages re-scraped and compared line-by-line against v1

---

## 🔍 Full Audit — 14 Discrepancies Found & Fixed

### HOME PAGE
| # | Discrepancy | Fix Applied |
|---|-------------|-------------|
| 1 | Missing second mid-page video (Pexels 854238) between services and feature images | Added full `<video autoplay muted loop>` section with overlay |
| 2 | Missing Unsplash abstract building full-width banner before contact form | Added `.unsplash-banner` section with exact image |
| 3 | Missing "As the urgency of the climate crisis…" paragraph | Restored after intro paragraph |
| 4 | Missing "Leading the Way Through Innovative Policies and Sustainable Practices" bold sub-line under Commitment heading | Added |

### ABOUT US
| # | Discrepancy | Fix Applied |
|---|-------------|-------------|
| 5 | Missing Amerigroup secondary logo strip (asset c843a283) shown below hero | Added `.about-logo-strip` linking to home |
| 6 | Stat label "Years Experience" — live says **"Experience"** | Fixed to `Experience` |
| 7 | Value cards had no photos — live has unique image per value (rocket, clean-energy, multiculture, mountain-top) | Rebuilt as `.value-card-photo` with exact Zyrosite/Unsplash images |

### TECHNOLOGY SOLUTION
| # | Discrepancy | Fix Applied |
|---|-------------|-------------|
| 8 | Missing top intro image (h2-d95g2LPzZOT4zZzz) before first section | Added full-width image at top |
| 9 | Per-section images reused same generic placeholder — each section has a specific asset on live | Fixed: fd770447 → Methanol, b1db89fa → Power Grid, truck-electric → Linear Generator, truck-engine → H2 Reactor, 36f2a920 → LNG Supply Chain |
| 10 | Missing bottom 3-image gallery (lng-vessel + 0-emission + clean-energy-2) with "Innovative Solutions" caption | Added `.tech-gallery` grid |

### PROJECTS
| # | Discrepancy | Fix Applied |
|---|-------------|-------------|
| 11 | Missing "Long-Term Operational Benefits" paragraph in EV Conversion section | Added |

### OUR TEAM
| # | Discrepancy | Fix Applied |
|---|-------------|-------------|
| 12 | Ken Wong's displayed title was "Corporate Vice President & Co-Founder" — live bold title shows **"Corporate Vice President"** only | Fixed title field |
| 13 | Intro text structure differed — live has italic "thrives on individuality…" + bold sentence + italic "Our Team" heading + two bullet points | Rebuilt to match exact structure |

### OUR PARTNERS
| # | Discrepancy | Fix Applied |
|---|-------------|-------------|
| 14 | Page title was "Building Strong Partnerships for Sustainable Energy Success" — live is **"Building Strong Partnerships for SEO Success"** | Fixed |
| 15 | 36th partner logo (ay-c-ae-ae---small) was missing | Added — all 36 unique logos now included |

---

## 📦 Package Contents

```
amerigroup-theme-v2/
├── style.css                      Theme header (v2.0.0) + all CSS including new components
├── functions.php                  Theme setup, CPTs, AJAX contact handler
├── index.php                      WP fallback template
├── front-page.php                 Home page — all 4 fixes applied
├── page.php                       Generic page fallback
├── header.php                     Fixed sticky nav + mobile hamburger
├── footer.php                     4-column footer, dynamic year, 3 office addresses
├── page-about-us.php              3 fixes: logo strip, stat labels, value photo cards
├── page-technology-solution.php   3 fixes: intro image, per-section images, bottom gallery
├── page-projects.php              1 fix: Long-Term Operational Benefits + correct images
├── page-our-team.php              2 fixes: intro structure, Ken Wong title
├── page-our-partners.php          2 fixes: page title, all 36 logos
├── template-parts/
│   └── contact-cta.php            Contact form — labels verified against live
├── assets/
│   └── js/main.js                 Sticky header, mobile nav, scroll animations, AJAX form
└── amerigroup-content-import.xml  WordPress WXR 1.2 — 6 pages + 8 team CPT posts + nav menu
```

### New CSS Components Added in v2
| Class | Purpose |
|-------|---------|
| `.mid-video-section` | Home second video with overlay text |
| `.unsplash-banner` | Home abstract building CTA banner |
| `.value-card-photo` | About value cards with photo + caption |
| `.tech-gallery` | Technology bottom 3-image hover gallery |
| `.about-logo-strip` | About centred secondary logo after hero |

---

## 🚀 Installation

### Step 1 — Upload Theme
**Appearance → Themes → Add New → Upload Theme** → upload the ZIP → **Activate**

### Step 2 — Import Content
**Tools → Import → WordPress** → upload `amerigroup-content-import.xml` → assign to admin → **Submit**

### Step 3 — Set Front Page
**Settings → Reading → Static page → Homepage: Home**

### Step 4 — Navigation Menu
**Appearance → Menus** → assign **Primary Menu** to **Primary Navigation** location

### Step 5 — Assign Page Templates
Edit each page → **Page Attributes → Template**:

| Page | Template |
|------|----------|
| Home | front-page.php |
| About Us | page-about-us.php |
| Technology Solution | page-technology-solution.php |
| Projects | page-projects.php |
| Our Team | page-our-team.php |
| Our Partners | page-our-partners.php |

---

## 🗄️ Custom Post Types

**`ag_team`** → Team → Add New (Job Title + LinkedIn meta, featured image = photo)
**`ag_partner`** → Partners → Add New (featured image = logo)

---

## 📬 Contact Form
AJAX → `wp_mail()` → admin email (Settings → General → Administration Email Address)

---

## 🎨 CSS Variables
```css
--ag-blue:      #0056A0;
--ag-blue-dark: #003d73;
--ag-green:     #2ecc71;
--ag-text:      #1a1a2e;
--ag-muted:     #555c6b;
--ag-offwhite:  #f7f9fc;
```

---

## 🔌 Recommended Plugins
Yoast SEO · WP Rocket · Smush · UpdraftPlus · Contact Form 7

---

Amerigroup International · https://amerigroupint.net · © 2025
# Amerigroup-Theme-V3.4
# kenwongr1-Amerigroup-Theme-V3.4
# amerigroup-theme-v3-4
