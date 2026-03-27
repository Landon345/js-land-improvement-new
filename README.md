# JS Land Improvement — Website

Marketing website for **JS Land Improvement**, a land clearing, tree removal, excavation, and demolition company based in Fargo, ND.

## Tech Stack

- [Svelte 5](https://svelte.dev/) — UI framework (uses runes: `$state`, `$effect`)
- [Vite 8](https://vite.dev/) — build tool and dev server
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first CSS
- [DaisyUI 5](https://daisyui.com/) — component library (light/dark themes via `theme-change`)
- [svelte-routing](https://github.com/EmilTholin/svelte-routing) — client-side routing
- TypeScript 6

## Pages

| Route | Component | Description |
|---|---|---|
| `/` | `Home.svelte` | Hero video, mission statement, services overview |
| `/services` | `Services.svelte` | Service cards, financing info, getting started steps |
| `/tree-removal` | `TreeRemoval.svelte` | Tree removal service page |
| `/land-clearing-and-forestry-mulching` | `LandClearingAndForestryMulching.svelte` | Land clearing & forestry mulching service page |
| `/excavation-and-demolition` | `ExcavationAndDemolition.svelte` | Excavation & demolition service page |
| `/about-us` | `AboutUs.svelte` | Company story, mission, reviews |
| `/reviews` | `Reviews.svelte` | Customer reviews |
| `/contact-us` | `ContactUs.svelte` | Jobber-embedded contact form |

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server at `http://localhost:5173` |
| `npm run build` | Build for production (output to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run Svelte type-checking |

## Project Structure

```
src/
├── App.svelte          # Root component — router, image prefetching
├── main.ts             # Entry point
├── app.css             # Global styles, Tailwind config, DaisyUI theme overrides
├── assets/             # Images (webp)
├── lib/
│   ├── constants.ts    # Route paths, labels, contact info
│   ├── Header.svelte
│   ├── Footer.svelte
│   ├── Navbar.svelte
│   ├── ServiceBanner.svelte
│   └── ServiceSection.svelte
└── routes/             # One file per page
```

## Themes

Light and dark themes are supported via DaisyUI 5 + `theme-change`. Dark is the default. Brand colors are defined in `app.css` under `[data-theme="light"]` and `[data-theme="dark"]`.

## Deployment

Running `npm run build` produces a static site in `dist/`. Deploy the contents of `dist/` to any static host (Netlify, Vercel, S3, etc.).
