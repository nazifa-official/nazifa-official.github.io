# Nazifa Tabassum — HR & Administration Portfolio

A premium, single-page personal portfolio website for **Nazifa Tabassum** — HR & Administration Professional.

Modern SaaS-style UI (Indigo + Slate palette), fully responsive, static site — no build process required.

---

## Technology

- HTML5
- CSS3 (vanilla design system, CSS variables — no framework)
- Vanilla JavaScript (no jQuery)
- Font Awesome 6
- AOS (Animate On Scroll)
- Plus Jakarta Sans + Inter (Google Fonts)

## File Structure

```
/
├── index.html
├── note.txt                 ← source content (CV text)
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   └── nazifa-profile.jpg     ← replace with your photo
│   └── cv/
│       └── nazifa-cv.pdf          ← replace with your CV
└── README.md
```

---

## How to Customize

1. **Replace profile image**
   Put your photo at: `assets/images/nazifa-profile.jpg`
   (Recommended: portrait photo, JPG/WebP)

2. **Replace CV**
   Put your CV at: `assets/cv/nazifa-cv.pdf`
   Every "Download CV" button links to this file with the HTML `download`
   attribute, so clicking it downloads the PDF instead of opening it.

3. **Update LinkedIn URL**
   Search `href="#"` next to `LinkedIn` in `index.html` and replace with the real profile URL.

4. **Update contact information**
   Phone, email and address appear in the hero, about panel, contact section and footer.

5. **Update SEO/canonical URL**
   Replace `https://example.com/` in the canonical and Open Graph tags with the deployed URL.

---

## Run Locally

Open `index.html` in a browser, or serve locally:

```bash
node serve2.js          # serves http://localhost:8123
# or
python -m http.server 8000
```

---

## Sections Included

- Sticky glass navbar with Download CV button
- Hero with profile image, availability pill and floating badges
- Professional stats (animated counters)
- Professional Profile (objective) + quick info panel
- Core Expertise (16 HR competencies)
- Professional Experience timeline (4 roles)
- Professional Strengths
- Computer & Software Experience
- Academic Qualifications (6 entries)
- Training & Certification (KPI System)
- Language Proficiency + References
- Contact section with Call / Email / Download CV
- Footer + scroll progress + back-to-top

---

## Accessibility & SEO

- Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Meta description, keywords, robots, canonical, Open Graph + Twitter Card
- Alt text on images, aria-labels on icon buttons
- Visible keyboard focus states, `prefers-reduced-motion` support

---

© 2026 Nazifa Tabassum. All Rights Reserved.
