# Sanity CMS

All of the site's content is editable in Sanity Studio, which runs inside this app at **`/studio`**.

- **Project ID:** `x5q8hssf`
- **Dataset:** `production`
- **Studio (local):** http://localhost:3000/studio
- **Studio (live):** https://www.aletheiaintl.com/studio

## What the client can edit

The Studio sidebar has four documents. Each one maps to part of the site.

**Home Page**
- Hero: headline, rotating typed words, text, both buttons
- Services: heading, intro, and the services themselves (title, subtitle, description, deliverable, tags, icon, colour). Each service is a card here and a link in the footer's Services column.
- Methodology: heading, the phases (numbered automatically), the quote
- Client Results: heading, intro, testimonials
- FAQ: heading, intro, question groups, the link to the FAQ page, the call to action
- Contact: heading, text, tags, the form's "I'm interested in" options, the success message
- SEO: overrides the default title and description from Site Settings

**About Page**: hero, the scrolling gold banner, mission, vision, founding story, principles, commitments, industries and methodologies, the call to action, the FAQ link, SEO

**FAQ Page**: hero, the question sections (each section gets a jump link), the call to action, SEO. Every question is also published to Google as FAQ structured data.

**Site Settings**: header links and button, footer text and links, contact email and website, the contact form recipient, the tagline words, the stats (shared by the homepage and the About page), default SEO and the social share image

### Editing conventions

- **Headlines:** wrap words in `*asterisks*` to show them in gold italics. Press Enter for a new line.
  For example, `Five ways *truth*` then a new line, then `becomes your edge.`
- **Colours** are picked from the brand palette (gold, green, blue, red), so new items always match the design.
- **Lists:** drag items to reorder them. The order in the Studio is the order on the site.
- **FAQ answers** are rich text. They can include bold, italic, links, bullet lists, a muted italic note style, and tables (the "+" button).
- Changes go live after **Publish**.

## How it stays safe

Every page reads from Sanity but **falls back to the original copy** in `src/content/defaults.ts` when a field is empty or Sanity can't be reached. The site never renders blank, even mid-edit.

## Setup checklist

### 1. CORS origins

At [sanity.io/manage → project → API → CORS origins](https://www.sanity.io/manage/project/x5q8hssf/api), add:

- `http://localhost:3000`
- `https://www.aletheiaintl.com`, with **Allow credentials** ticked

### 2. Seed the content (once)

This uploads the site's current copy into Sanity. It runs as your logged-in Sanity user, so no API token is needed.

```bash
npx sanity login
npm run seed
```

`npm run seed` only creates documents that don't exist yet, so it never overwrites the client's edits. To reset everything to the original copy, run `npm run seed:replace`.

### 3. Instant updates on Vercel

Pages are cached and refreshed through a webhook, so a publish shows on the live site within seconds.

1. Generate a secret, for example with `openssl rand -hex 32`.
2. In **Vercel → Project → Settings → Environment Variables**, add `SANITY_REVALIDATE_SECRET` with that value, then redeploy.
3. At [sanity.io/manage → API → Webhooks](https://www.sanity.io/manage/project/x5q8hssf/api/webhooks), create a webhook:
   - **URL:** `https://www.aletheiaintl.com/api/revalidate`
   - **Dataset:** `production`
   - **Trigger on:** Create, Update, Delete
   - **Filter:** `_type in ["homePage", "aboutPage", "faqPage", "siteSettings"]`
   - **HTTP method:** POST
   - **Secret:** the same value as `SANITY_REVALIDATE_SECRET`

Without the webhook, changes still appear, but only within an hour.

### 4. Invite the client

At [sanity.io/manage → Members](https://www.sanity.io/manage/project/x5q8hssf/members), invite the client with the **Editor** role. They log in at `/studio`.

## Environment variables

The project ID and dataset are public and have defaults in `src/sanity/env.ts`, so they only need setting to point at a different project or dataset. See `.env.example`.

| Variable | Where | Purpose |
|---|---|---|
| `SANITY_REVALIDATE_SECRET` | Vercel | Verifies the publish webhook |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | optional | Defaults to `x5q8hssf` |
| `NEXT_PUBLIC_SANITY_DATASET` | optional | Defaults to `production` |

## Code map

| Path | What it is |
|---|---|
| `sanity.config.ts` | Studio config (the four documents can't be deleted or duplicated) |
| `src/sanity/schemaTypes/` | What's editable, document by document |
| `src/sanity/content.ts` | Fetches each document and merges it over the defaults |
| `src/content/defaults.ts` | The original copy: fallback and seed source |
| `src/content/types.ts` | Content types used by the components |
| `src/app/api/revalidate/route.ts` | Publish webhook |
| `scripts/seed.ts` | Seed script |
