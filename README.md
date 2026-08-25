# Gihan Danushka — Portfolio (Next.js)

A single-page portfolio built from your Word draft and CV. Dark, tech/travel-themed
design: an airport departure-board animation for the name in the hero, a
boarding-pass styled bio card, and a flight-path timeline for work experience.

Images already live in `public/images/` — extracted directly from your Word
document and organized by section — so you don't need to re-export anything.

## Run it locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000. This environment could not run `npm install`
itself (no network access), so please run the two commands above yourself
and let me know if anything doesn't compile — happy to fix it.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
app/
  layout.jsx        Fonts + global <html>/<body>
  page.jsx           Assembles all sections
  globals.css         Design tokens (colors, type, spacing)
components/
  Nav, Hero, About, Skills, Projects, WebSystems,
  Creative, Photography, Experience, Contact, Footer
  SplitFlap.jsx       The departure-board name animation
  Gallery.jsx         Reusable image grid + lightbox (click any photo)
  ProjectCard.jsx     Shared card for web projects & systems
data/
  portfolio.js        ALL your content lives here — edit this file to
                        change any text, tags, dates, or image references
public/images/         Every image from your Word doc, already sorted:
  profile.png
  projects/pelican/            (hero + 4 screenshots)
  projects/tangerine-vacations/(hero + 4 screenshots)
  projects/hotel-booking/      (hero + 4 screenshots)
  social/                      (4 campaign posts)
  video-artworks/              (3 video cover artworks)
  photography/                 (6 photos)
```

## Customizing

- **Text/content:** edit `data/portfolio.js` — one file, no need to touch components.
- **Colors:** edit the CSS variables at the top of `app/globals.css` (`--bg`,
  `--accent`, `--teal`, etc).
- **Add a project:** add an object to `webProjects` or `webSystems` in
  `data/portfolio.js`, with matching images dropped into `public/images/`.
- **Swap/add photos:** replace files in `public/images/photography/` (or any
  other folder) and update the matching path in `data/portfolio.js`.

## Notes

- Built with Next.js 14 (App Router), plain CSS Modules — no Tailwind, no
  component library.
- Fully responsive; the nav collapses to a mobile menu under ~760px.
- Respects `prefers-reduced-motion` (the flip animation and smooth scroll
  are disabled for users who request it).
- The hotel-booking project is marked "In development" per your notes —
  update `status: "Live"` in `data/portfolio.js` once it ships.
