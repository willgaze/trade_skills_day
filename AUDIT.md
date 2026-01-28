# Trade Skills Day — Site Audit & Next Steps

**Date:** January 2025
**Site:** [tradeskillsday.co.uk](https://tradeskillsday.co.uk)
**Stack:** Next.js 14.2 (App Router) · TypeScript · Tailwind CSS · Radix UI · Zod

---

## Executive Summary

**Overall readiness score: 4.5 / 10**

The site has strong technical foundations — TypeScript is well-applied (9/10), the responsive layout is solid (8/10), and SEO basics are in place (7/10). The brand voice across the six journal posts and page copy is clear, honest, and well-written.

However, the site is **not production-ready**. There is no payment system, no analytics, no images anywhere on the site, no database, and the phone number is a placeholder. Form submissions are written to a local JSON file that nobody is notified about. The gap between the quality of the writing and the operational readiness of the business infrastructure is the single biggest risk.

**What works well:**
- Clean TypeScript codebase with Zod validation
- Responsive design across all pages
- Structured data (JSON-LD) for Organisation, LocalBusiness, Course, FAQ, Article
- Accessible foundations (skip-to-content link, aria-labels on nav)
- Thoughtful, honest brand voice across 6 journal posts

**What is missing:**
- Payment processing — bookings are accepted with no way to pay
- Email notifications — form submissions are silently stored in a JSON file
- Images — `public/images/` is completely empty
- Database — data stored in local filesystem (`data/bookings.json`)
- Analytics — no tracking of any kind
- Real phone number — `config/site.ts:8` shows `01234 567890`
- Error and loading states — no `app/error.tsx` or `app/loading.tsx`
- Security headers — `next.config.mjs` is effectively empty
- Testing — no test framework configured

---

## Section 1: Business Next Steps

### Quick Wins (this week, no developer needed)

| # | Action | Detail |
|---|--------|--------|
| 1 | **Replace the placeholder phone number** | `config/site.ts:8` currently reads `"01234 567890"`. This propagates to the contact page, JSON-LD schema, and footer. One string change. |
| 2 | **Set up an email workflow** | Right now, booking submissions go to `data/bookings.json` (`lib/actions.ts:62`) and nobody is notified. At minimum, set up a manual check or forward to an inbox until automated emails are built. |
| 3 | **Register social media handles** | Instagram, Facebook, TikTok — all should be secured as `@tradeskillsday` or similar before someone else takes them. The journal content is ready-made for social posts. |
| 4 | **Claim Google Business Profile** | For both Andover (SP10) and Marlborough (SN8). Addresses are already defined in `config/site.ts:61-80`. This is free and critical for local search visibility. |

### Immediate (weeks 1–2)

| # | Action | Detail |
|---|--------|--------|
| 5 | **Implement a payment pathway** | No payment integration exists. The booking form (`components/BookingForm.tsx`) collects details but has no payment step. Options: Stripe Checkout (embedded), Stripe Payment Links (no-code), or a simple bank transfer reference in the confirmation email. Stripe Payment Links can be set up without developer involvement. |
| 6 | **Define cancellation and refund process** | The FAQ (`components/FAQAccordion.tsx:50-53`) promises "a full refund if you cancel at least 7 days before" but there is no operational process to handle this. Document the policy, decide who handles refund requests, and ensure whoever runs payments has authority to process them. |
| 7 | **Establish real contact infrastructure** | The email `hello@tradeskillsday.co.uk` (`config/site.ts:7`) needs to be a monitored inbox with auto-responders. Consider a simple CRM (Tally, Notion, or Airtable) to track enquiries. |
| 8 | **Create a booking management process** | There are no session dates anywhere on the site. Courses list prices and locations but no availability. Decide: when are sessions running? What is the capacity? How are participants confirmed? |

### Short-Term (weeks 3–6)

| # | Action | Detail |
|---|--------|--------|
| 9 | **Collect and publish testimonials** | There is zero social proof on the site. No reviews, no testimonials, no participant quotes. After even one pilot session, gathering written or video testimonials should be a priority. |
| 10 | **Photograph the workshops** | `public/images/` is empty. The OG image referenced at `config/site.ts:6` (`/images/og-default.jpg`) does not exist. Every social share and link preview currently shows nothing. Photograph the workshop space, tools, materials, and (with consent) participants at work. |
| 11 | **Content marketing strategy** | The 6 journal posts (`lib/journal.ts:18-143`) are strong editorial content. Plan a cadence — one post per fortnight covering pilot session reflections, participant stories, trade tips. This feeds social media and SEO simultaneously. |
| 12 | **Gift vouchers and group bookings** | Neither is offered. Experience-day gift vouchers are a proven revenue stream (birthdays, Father's Day, Christmas). Group bookings for corporate team-building or stag/hen activities are another channel. |
| 13 | **Build local partnerships** | Target: Jobcentre Plus (career changers), local colleges (progression pathway), builders' merchants (materials sponsorship, flyer distribution), community centres (promotion). |
| 14 | **Verify insurance and liability** | The journal post on safety (`lib/journal.ts:101-121`) references "public liability insurance" and "risk assessments for each trade" but these should be documented and available on request. Legal page at `/legal` should reference specific policy numbers. |

### Medium-Term (months 2–6)

| # | Action | Detail |
|---|--------|--------|
| 15 | **Calendar and availability system** | Participants currently cannot see when sessions run. This is the single biggest conversion blocker after payment. Even a simple "next available dates" section on each course page would help. |
| 16 | **Instructor profiles page** | `/instructors` is in the navigation (`config/site.ts:27`) and the about page links to it (`app/about/page.tsx:109`), but instructor bios with trade credentials and photos build trust. |
| 17 | **Pricing tiers and bundles** | Current pricing is flat: £149 for 1-day, £279/£289 for 2-day. Consider early-bird pricing, bring-a-friend discounts, or a "try two trades" bundle. |
| 18 | **Geographic expansion planning** | The journal post on locations (`lib/journal.ts:59-79`) discusses demand-driven expansion. Have a framework ready: minimum number of expressions of interest before opening a new venue. |
| 19 | **Progression pathway partnerships** | Partner with formal training providers (local colleges, City & Guilds centres) so that after a taster day, participants have a clear "what next" route. This also adds credibility. |

---

## Section 2: Website Next Steps

### Quick Wins (can be done now)

| # | Action | Files | Detail |
|---|--------|-------|--------|
| 1 | **Add global error boundary** | Create `app/error.tsx` | No custom error UI exists. Users hitting an error see the default Next.js page. Add a "use client" error component with a retry button and contact link. |
| 2 | **Add loading states** | Create `app/loading.tsx` | No custom loading UI exists. Add a skeleton or spinner for page transitions. |
| 3 | **Create the OG image** | Add `public/images/og-default.jpg` | `config/site.ts:6` references this file but it does not exist. Every social share currently has a broken preview. Create a 1200×630px image with the brand name and tagline. |
| 4 | **Add environment variable support** | `next.config.mjs`, `config/site.ts` | No `process.env` usage anywhere in the codebase. At minimum, the site URL, email, and phone should come from environment variables so they can differ between dev/staging/production. |
| 5 | **Fix internal links using next/link** | `app/about/page.tsx:109-114`, `app/contact/page.tsx:69-74` | Two internal links use raw `<a href>` instead of Next.js `<Link>`, which bypasses client-side navigation and causes full page reloads. Replace with `import Link from "next/link"`. |

### Immediate (weeks 1–2)

| # | Action | Files | Detail |
|---|--------|-------|--------|
| 6 | **Replace JSON file storage with a database** | `lib/actions.ts:23-37` | `appendToJsonFile()` writes to `data/bookings.json` and `data/instructor-interest.json` using `fs.writeFile`. This will not work on serverless platforms (Vercel), is not concurrent-safe, and data is not backed up. Migrate to Supabase, Vercel Postgres, or PlanetScale. The TODO is already at `lib/actions.ts:61`. |
| 7 | **Add email notifications on form submission** | `lib/actions.ts:60-67`, `lib/actions.ts:97-104` | When a booking is submitted, nobody is notified. Add Resend or SendGrid to send a confirmation to the participant and a notification to the business email. Both `submitBooking` and `submitInstructorInterest` need this. |
| 8 | **Add rate limiting and spam protection** | `components/BookingForm.tsx`, `lib/actions.ts` | No rate limiting, no CAPTCHA, no honeypot field. The form is currently open to spam bots. Add a honeypot hidden field as a zero-cost first layer, and Cloudflare Turnstile or hCaptcha for stronger protection. Server-side rate limiting in `lib/actions.ts` is also needed. |
| 9 | **Install privacy-respecting analytics** | `app/layout.tsx` | No analytics of any kind. Cannot measure traffic, conversion, or which courses generate interest. Install Plausible or Fathom — both are GDPR-friendly and require no cookie banner. Add the script tag in `app/layout.tsx` around line 58. |
| 10 | **Configure Next.js image optimisation** | `next.config.mjs` | `next.config.mjs` is effectively empty (line 2: `const nextConfig = {};`). When images are added, configure `images.remotePatterns` and formats. Use `next/image` for all photography to get automatic WebP/AVIF conversion, lazy loading, and responsive sizes. |
| 11 | **Add security headers** | `next.config.mjs` | No security headers are configured. Add a `headers()` function to `next.config.mjs` with: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (restrict camera, microphone, geolocation), and a `Content-Security-Policy`. |

### Short-Term (weeks 3–6)

| # | Action | Files | Detail |
|---|--------|-------|--------|
| 12 | **Accessibility improvements** | `components/BookingForm.tsx`, all pages | The form has no `aria-invalid` attributes on error states and no `aria-describedby` linking error messages to their fields (see `BookingForm.tsx:50-52`, `64-66`, `78-80`). Add `aria-describedby` referencing the error `<p>` element's id, and `aria-invalid={true}` when validation fails. No images exist yet, but when added ensure all have meaningful alt text. Check colour contrast on `text-muted-foreground` against white and `bg-slate-50` backgrounds. |
| 13 | **Client-side form validation** | `components/BookingForm.tsx`, `lib/schemas.ts` | Validation only runs server-side via Zod (`lib/schemas.ts:3-20`). Add client-side validation mirroring the Zod schema so users get immediate feedback before submission. Consider `react-hook-form` with `@hookform/resolvers/zod` for a clean integration. |
| 14 | **"What to Expect" day timeline** | `app/courses/[slug]/page.tsx` | Course detail pages describe what you learn and what is included but lack a timeline of the day (e.g., 09:00 Arrival & coffee, 09:30 Safety briefing, 10:00 First practical session…). This reduces anxiety for first-time participants and is a common pattern on experience-day sites. |
| 15 | **Homepage conversion funnel** | `app/page.tsx` | The homepage has three sections: Hero, Featured Courses, Locations, and FAQ. Missing: a clear value proposition section (why Trade Skills Day vs. alternatives), trust signals (testimonials, safety credentials, group size guarantee), a secondary CTA (e.g., "Not sure which course? Take our quiz"), and urgency/scarcity ("Limited to 8 places per session" is buried in the Hero bullet points at `components/Hero.tsx:32`). |
| 16 | **Course comparison table** | `app/courses/page.tsx` | The courses page shows cards but no way to compare side-by-side. A responsive comparison table (trade, duration, price, locations) would help participants choosing between options, especially the 1-day vs. 2-day variants. |
| 17 | **Fix booking form — filter locations by course** | `components/BookingForm.tsx:83-100, 102-121` | The course and location selects are independent. A user can select "Basic Plumbing Skills" (Andover only, per `lib/courses.ts:81`) and then choose "Marlborough" — an invalid combination. Filter the location dropdown based on the selected course's `locations` array. |
| 18 | **Establish testing** | Create `vitest.config.ts`, `playwright.config.ts` | No test framework is configured. No unit tests, no integration tests, no E2E tests. Add Vitest for unit/integration testing (Zod schemas, server actions) and Playwright for E2E (booking flow, navigation). |
| 19 | **Set up CI/CD** | Create `.github/workflows/ci.yml` | No CI/CD pipeline. Add a GitHub Actions workflow that runs lint, type-check, and tests on push/PR. Deploy previews via Vercel (if hosting there). |

### Medium-Term (months 2–6)

| # | Action | Files | Detail |
|---|--------|-------|--------|
| 20 | **CMS for content management** | `lib/courses.ts`, `lib/journal.ts`, `components/FAQAccordion.tsx` | All content is hardcoded in TypeScript files. Course data (`lib/courses.ts:19-188`), journal posts (`lib/journal.ts:18-143`), and FAQ data (`components/FAQAccordion.tsx:13-64`) require a developer to update. Migrate to a headless CMS (Sanity, Contentful, or Keystatic for git-based) so non-developers can add courses, write journal posts, and update FAQs. |
| 21 | **Date/calendar booking system** | New feature | Replace the current "request a booking" flow with real date selection. Show available session dates per course per location. Integrate with a calendar (Cal.com, Calendly, or custom). |
| 22 | **Admin dashboard** | New feature | Build or integrate a simple admin view to see bookings, manage capacity, export participant lists, and send communications. This could be a protected `/admin` route or an external tool (Retool, Airtable). |
| 23 | **Enhanced JSON-LD schemas** | `lib/seo.ts` | Current schemas: Organization (line 5), LocalBusiness (line 17), Course (line 39), FAQPage (line 72), Article (line 89). Missing: `BreadcrumbList` (breadcrumbs exist in UI via `PageHeader` but no structured data), `Review` (when testimonials are added), `Event` (when session dates are added — more appropriate than `CourseInstance` without dates). |
| 24 | **Remove unused `next-themes`** | `package.json:23` | `next-themes` (v0.4.6) is installed but never imported or used anywhere in the codebase. No `<ThemeProvider>` exists. Either remove it (`npm uninstall next-themes`) or implement dark mode. |
| 25 | **Extract duplicated code** | Multiple files | Three patterns are duplicated across the codebase: |
|    | | | **Location capitalisation** — `l.charAt(0).toUpperCase() + l.slice(1)` appears in `lib/seo.ts:61`, `lib/seo.ts:64`, `app/courses/[slug]/page.tsx:143`, `components/CourseCard.tsx:31`. Extract to a `capitalize()` utility in `lib/utils.ts`. |
|    | | | **Orange button styling** — `bg-orange-500 hover:bg-orange-600 text-white` is repeated in `components/Hero.tsx:24`, `components/CourseCard.tsx:41`, `components/SubmitButton.tsx:10`, `app/courses/[slug]/page.tsx:155`, `app/not-found.tsx:20`. Create a named Button variant (e.g., `variant="primary"`) in the Button component. |
|    | | | **FAQ data location** — FAQ data is defined in `components/FAQAccordion.tsx:13-64` rather than in `lib/`. Move to `lib/faq.ts` and import from there. Data should not live inside component files. |

---

## Scoring Table

| Dimension | Current | After Quick Wins | After Immediate | After Short-Term | After Medium-Term |
|-----------|:-------:|:---------:|:---------:|:----------:|:-----------:|
| TypeScript / Code Quality | 9 | 9 | 9 | 9 | 9 |
| Responsive Design | 8 | 8 | 8 | 8 | 8 |
| SEO / Structured Data | 7 | 7 | 7 | 8 | 9 |
| Content Quality | 7 | 7 | 7 | 8 | 9 |
| Accessibility | 5 | 5 | 5 | 7 | 8 |
| Security | 2 | 2 | 6 | 7 | 8 |
| Payment / Commerce | 0 | 0 | 5 | 7 | 8 |
| Analytics / Data | 0 | 0 | 5 | 6 | 7 |
| Visual Design / Images | 1 | 2 | 3 | 6 | 7 |
| Error Handling / UX | 3 | 5 | 6 | 7 | 8 |
| Testing / CI | 0 | 0 | 0 | 6 | 7 |
| Operational Readiness | 1 | 3 | 5 | 7 | 8 |
| **Overall** | **4.5** | **5** | **6** | **7** | **8** |

---

## Implementation Sequence

### Week 1: Foundation

1. Replace phone number in `config/site.ts:8`
2. Create `public/images/og-default.jpg` (1200×630px)
3. Create `app/error.tsx` and `app/loading.tsx`
4. Fix raw `<a>` tags → `<Link>` in `app/about/page.tsx:109` and `app/contact/page.tsx:69`
5. Claim Google Business Profile for Andover and Marlborough
6. Register social media handles
7. Set up monitored email inbox for `hello@tradeskillsday.co.uk`

### Week 2: Data & Notifications

8. Migrate `lib/actions.ts` from JSON files to database (Supabase recommended)
9. Add email notifications via Resend — confirmation to participant, alert to business
10. Add honeypot field and rate limiting to both forms
11. Add security headers in `next.config.mjs`
12. Add environment variable support (`config/site.ts`, `next.config.mjs`)
13. Install Plausible/Fathom analytics in `app/layout.tsx`

### Weeks 3–4: Payment & UX

14. Integrate Stripe Checkout in the booking flow (`components/BookingForm.tsx`)
15. Add client-side form validation mirroring `lib/schemas.ts`
16. Filter booking form locations by selected course (`components/BookingForm.tsx:102-121`)
17. Photograph workshops and add images throughout the site
18. Add `next/image` usage with configured `next.config.mjs`
19. Remove `next-themes` from `package.json` (or implement dark mode)

### Weeks 5–6: Content & Testing

20. Add testimonials section to homepage (`app/page.tsx`)
21. Add "What to Expect" timeline to course detail pages (`app/courses/[slug]/page.tsx`)
22. Add course comparison table to courses listing (`app/courses/page.tsx`)
23. Set up Vitest and Playwright with initial test suites
24. Set up GitHub Actions CI/CD pipeline
25. Extract duplicated code (capitalize utility, button variant, FAQ data)

### Months 2–3: Scale

26. Migrate content to headless CMS
27. Build date/calendar booking system
28. Add instructor profiles page
29. Enhanced JSON-LD (BreadcrumbList, Review, Event)
30. Build admin dashboard

### Months 4–6: Grow

31. Pricing tiers, bundles, early-bird offers
32. Gift voucher system
33. Group booking flow
34. Geographic expansion (new locations)
35. Progression pathway partnerships with training providers

---

## Critical Files Reference

| File | Role | Key Issues |
|------|------|------------|
| `config/site.ts` | Central configuration — name, URL, email, phone, locations, navigation | Placeholder phone `:8`, missing OG image `:6` |
| `lib/actions.ts` | Server actions for form handling | JSON file storage `:23-37`, no email notifications `:61,98`, no rate limiting |
| `lib/schemas.ts` | Zod validation schemas | Server-only validation `:3-20`, no client-side mirroring |
| `lib/courses.ts` | Course data (6 courses) | Hardcoded data `:19-188`, no dates, no capacity |
| `lib/journal.ts` | Journal posts (6 posts) | Hardcoded content `:18-143`, needs CMS |
| `lib/seo.ts` | JSON-LD structured data | Duplicated capitalisation `:61,64`, missing BreadcrumbList/Review/Event schemas |
| `app/layout.tsx` | Root layout — fonts, metadata, structure | No analytics, no theme provider (despite `next-themes` in deps) |
| `app/page.tsx` | Homepage | Missing conversion elements (testimonials, trust signals, urgency) |
| `app/courses/[slug]/page.tsx` | Course detail pages | No timeline, duplicated capitalisation `:143`, no images |
| `app/about/page.tsx` | About page | Raw `<a>` tag `:109` |
| `app/contact/page.tsx` | Contact page | Raw `<a>` tag `:69`, placeholder phone number displayed |
| `components/BookingForm.tsx` | Booking form | No payment `:160`, no location filtering `:102-121`, no client-side validation |
| `components/FAQAccordion.tsx` | FAQ component with embedded data | Data should be in `lib/` not in component `:13-64` |
| `components/Hero.tsx` | Homepage hero | Orange button duplication `:24` |
| `components/SubmitButton.tsx` | Form submit button | Orange button duplication `:10` |
| `components/CourseCard.tsx` | Course listing card | Orange button duplication `:41`, capitalisation duplication `:31` |
| `next.config.mjs` | Next.js configuration | Effectively empty `:2` — no images, no headers, no env vars |
| `package.json` | Dependencies | Unused `next-themes` `:23`, no test/analytics/email/payment packages |

---

*This audit was generated from a full codebase review. All file paths and line numbers reference the codebase as of January 2025.*
