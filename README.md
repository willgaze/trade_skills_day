# Trade Skills Day

Lead-generation and booking-request website for 1–2 day trade taster workshops (tiling, plastering, plumbing) in Andover & Marlborough, UK.

## Stack

- **Next.js 14** (App Router, TypeScript, Server Components)
- **Tailwind CSS** + **shadcn/ui** (New York style, Slate base)
- **Zod** for form validation
- **Inter** (body) + **Space Grotesk** (headings) via `next/font`
- **pnpm** package manager

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, featured courses, locations, top FAQs |
| `/courses` | Course list with trade/duration/location filters |
| `/courses/[slug]` | Course detail (statically generated) |
| `/locations` | Andover & Marlborough venue info |
| `/about` | Company story, mission, values |
| `/book` | Booking request form (server action) |
| `/faq` | FAQ accordion with JSON-LD FAQPage schema |
| `/instructors` | Instructor interest form |
| `/legal` | Terms, privacy, safeguarding (anchor sections) |
| `/contact` | Contact info & locations |

## Editing Courses

All courses are defined in `lib/courses.ts`. Each course has:

- `slug` — URL-safe identifier
- `title`, `summary`, `description` — display text
- `trade` — `"tiling"`, `"plastering"`, or `"plumbing"`
- `duration` — `"1 day"` or `"2 days"`
- `locations` — array of `"andover"` and/or `"marlborough"`
- `price` — number in GBP
- `whatYouLearn`, `includes` — bullet point arrays
- `suitableFor` — target audience text

Add or edit courses in this file. Course detail pages are statically generated at build time.

## Form Behaviour

Forms submit via **Next.js Server Actions** and write to JSON files in `/data/`:

- `/data/bookings.json` — booking requests
- `/data/instructor-interest.json` — instructor interest submissions

The `/data/` directory is gitignored. In production, replace the JSON file storage with a database and/or email notification (see TODO comments in `lib/actions.ts`).

## Site Configuration

All site metadata, nav links, footer links, locations and pilot banner settings are in `config/site.ts`.

## SEO

- `generateMetadata` on every page (title, description, OG, Twitter cards)
- JSON-LD schemas: Organization (global), LocalBusiness (home/locations), Course (per course), FAQPage (/faq)
- `sitemap.xml` and `robots.txt` generated automatically
- Semantic HTML, skip-to-content link, `lang="en"`

## Pilot Banner

The sitewide "Pilot Launch" banner is controlled by `siteConfig.pilotBanner.enabled` in `config/site.ts`. Set to `false` to hide it.

## Build & Deploy

```bash
pnpm build    # Production build
pnpm start    # Start production server
```

Vercel-ready — deploy directly from your Git repository.

## TODO

- [ ] Replace JSON file storage with database (Postgres/Supabase)
- [ ] Add email notifications on form submission
- [ ] Add real venue images (WebP, optimised)
- [ ] Payment integration (Stripe)
- [ ] Calendar/date picker for booking
- [ ] Instructor profiles page
- [ ] Blog/news section
- [ ] Analytics (Plausible/Fathom)
