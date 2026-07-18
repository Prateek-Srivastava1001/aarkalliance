# Aark Alliance — Website

Marketing website for **Aark Alliance** — interiors, waterproofing, painting,
polishing, flooring, glass films and blinds for hospitality and commercial
spaces across India.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

---

## ✏️ Editing content (no coding needed)

All text and listings live in plain JSON files in **`src/content/`**. Edit these,
save, and the site updates automatically.

| File | Controls |
|------|----------|
| `src/content/site.json` | Company name, tagline, description, contact email/phone/WhatsApp, service areas |
| `src/content/services.json` | The list of services |
| `src/content/projects.json` | The portfolio / projects list |
| `src/content/stats.json` | The "at a glance" numbers |
| `src/content/process.json` | The "how we work" steps |

### Add a new service

Open `src/content/services.json` and copy an existing block. Example:

```json
{
  "id": "false-ceiling",
  "title": "False Ceilings",
  "tagline": "Acoustic & designer ceilings",
  "description": "Gypsum, metal and acoustic ceiling systems ...",
  "icon": "LayoutGrid",
  "image": "/images/services/false-ceiling.jpg",
  "highlights": ["Gypsum & POP", "Acoustic panels", "Cove & designer profiles"],
  "featured": true
}
```

- **`id`** must be unique (also used in the URL anchor).
- **`icon`** is a [Lucide icon](https://lucide.dev/icons) name. If you use a *new*
  icon, add it to `src/components/ui/Icon.tsx` (import it and add to the map).
  Any unknown icon safely falls back to a wrench.
- **`image`** — see below.
- **`featured: true`** shows it in the homepage services grid.

To **remove** a service, just delete its block. To **reorder**, move blocks up/down.

### Add a new project

Open `src/content/projects.json` and copy a block:

```json
{
  "id": "taj-krishna-hyderabad",
  "name": "Taj Krishna, Hyderabad",
  "location": "Hyderabad",
  "brand": "Taj / IHCL",
  "category": "Hospitality",
  "scope": ["Interior Fit-Outs", "Surface Polishing"],
  "description": "Short summary of the work delivered.",
  "image": "/images/projects/taj-krishna-hyderabad.jpg",
  "featured": true
}
```

- **`featured: true`** shows it on the homepage. All projects always appear on `/projects`.
- **`brand`** appears as a chip and drives the filter buttons on the Projects page.
  Use `"Hospitality"` (generic) if it's not a named brand.

---

## 🖼️ Managing images

Images live in **`public/images/`**:

```
public/images/
  hero.webp             ← homepage hero background
  about.webp            ← the "who we are" photo
  services/             ← one image per service (matches the "image" path)
  projects/             ← one image per project (matches the "image" path)
```

Images are served directly (not auto-optimized), so **they must be compressed**.
There's a one-command optimizer for this:

1. Drop your original photos (JPG/PNG, any size) into the right folder under `public/images`.
2. Run **`npm run optimize:images`** — each is resized and converted to compact WebP
   (the original JPG/PNG is removed).
3. Point the matching `image` field in `src/content/*.json` at the new `.webp` file.

> ⚠️ Don't commit large raw phone photos directly — a big uncompressed image will
> make the page load slowly. Always run `npm run optimize:images` first.
> The current images are royalty-free placeholders; replace them with real project photos.

---

## 🧑‍💻 Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## 🚀 Deployment

Hosted on **Vercel**. Every push to the `main` branch on GitHub auto-deploys to
production. Preview deployments are created for other branches / pull requests.

See `DEPLOYMENT.md` for the GoDaddy DNS steps to point **aarkalliance.com** at Vercel.
