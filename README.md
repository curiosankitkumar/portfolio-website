## 🌐 Live Demo

**[View My Portfolio](https://portfolio-website-kappa-six-11.vercel.app/)**

# Cosmic Portfolio

A cinematic, space-themed developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, GSAP/ScrollTrigger and React Three Fiber (Three.js).

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Making it yours

Almost everything on the site is driven from **one file**:

```
src/data/portfolio.js
```

Edit that file to change:

- Your name, tagline, bio and social links (`profile`)
- Your projects — each one renders as a floating planet (`projects`)
- Reports / certifications list (`reports`, `codingProfiles`)
- Education & experience constellation nodes (`experience`)
- Skills and categories (`skillCategories`)
- Nav labels (`navLinks`)

Drop a profile photo into `public/` (e.g. `public/avatar.jpg`) and set
`profile.avatar = '/avatar.jpg'` in `portfolio.js`.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx        fixed nav, scroll-spy, mobile menu
│   ├── StarField.jsx     ambient canvas starfield background
│   ├── Planet.jsx        shared 3D planet mesh (R3F)
│   ├── Hero.jsx          cinematic intro with 3D planet + parallax
│   ├── About.jsx         bio, info table, socials
│   ├── Projects.jsx      floating planet project grid + modal
│   ├── ProjectPlanet.jsx single project planet card
│   ├── Reports.jsx       achievements / certifications panel
│   ├── Experience.jsx    constellation timeline
│   ├── Skills.jsx        filterable floating skill tags
│   └── Footer.jsx        closing CTA + socials
├── data/
│   └── portfolio.js      <- all editable content lives here
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Notes

- Respects `prefers-reduced-motion` (disables non-essential motion/animation).
- Falls back to a CSS glow if WebGL isn't available.
- Star count and pixel ratio automatically scale down on smaller/mobile screens for performance.
- No external image/texture requests — planets are procedurally shaded, so the site works fully offline once built.
