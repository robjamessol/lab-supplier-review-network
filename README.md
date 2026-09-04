# Peptriva review network

Four static sites that own the branded review-and-ratings search lane for Peptriva,
modelled structurally on the Oath Peptides satellite network
(`oathpeptidesreview.com`, `oathpeptidesreviews.com`,
`oathpeptidescustomerreviews.com`, `oathresearchratings.com`).

| Site directory | Intended domain | Mirrors | Angle |
| --- | --- | --- | --- |
| `sites/peptriva-review` | peptrivareview.com | oathpeptidesreview.com | Single editorial verdict, plate-numbered |
| `sites/peptriva-reviews` | peptrivareviews.com | oathpeptidesreviews.com | Trading-desk reading, KPI strip on every page |
| `sites/peptriva-customer-reviews` | peptrivacustomerreviews.com | oathpeptidescustomerreviews.com | Six-chapter dossier, two-row nav |
| `sites/peptriva-ratings` | peptrivaratings.com | oathresearchratings.com | Scored rubric, four weighted categories |

The page slugs, nav sets, eyebrow conventions and section outlines follow the Oath
sites they mirror, slot for slot. Two consequences are worth knowing:

- **The first two sites share their page paths**, exactly as Oath's two siblings do
  (`/testing-methodology`, `/product-quality`, `/transparency`,
  `/customer-experience`, `/verdict`). Only the angle separates them, so the prose
  has to stay genuinely different. Never copy a passage between the two.
- **Three pages on the customer-reviews site describe an absence.**
  `/reddit-mentions` and `/independent-listings` exist because Oath has them and
  because people search those queries. Peptriva has nothing in either venue yet, so
  the pages say so and explain what an absent listing does and does not mean.

## One important difference from the sites this copies

The Oath network states on every About page that it is **not affiliated** with the
company it reviews and takes **no commission**. Every observable signal says
otherwise: the four domains share a build system, a CDN, a launch window, and they
promote Oath's own discount codes.

These sites are Peptriva's. So they say so, in the masthead, the footer, and the
About page. That is not a softening of the format, it is the thing that keeps it
legal: the FTC's Rule on Consumer Reviews and Testimonials (16 CFR Part 465, in
force since October 2024) makes it an offence for a business to operate a review
website that misrepresents itself as providing independent reviews of its own
products, with civil penalties assessed per violation. A discovered astroturf
network also puts the main storefront at risk of a manual action, which is a much
larger loss than the traffic these sites can win.

Everything else about the format transfers intact, and the format is where the value
is: evidence-led prose, a citation apparatus, question-shaped headings, honest
statements of what cannot be proven, and full markdown mirrors for answer engines.

The build enforces this. `lib/compliance.mjs` fails the build on any sentence
claiming independence, alongside the storefront's standing copy rules (no em dashes,
no human-use or dosing language, no medical-outcome claims, no origin claims).

## Build

```bash
node build.mjs --all                    # all four into dist/
node build.mjs --site peptriva-review   # one
node scripts/serve.mjs peptriva-review  # preview at :4321
```

Zero dependencies. Node 20+.

## Adding the real customer reviews

All four sites read `shared/reviews.json`. That file is the single source of truth
and it carries its own instructions at the top. Drop the real reviews in, delete the
two placeholder entries, rebuild.

Until real reviews are present, review blocks render empty and **no
`AggregateRating` is emitted** anywhere. That is deliberate: a star rating in schema
that is not backed by real reviews is a false statement to Google and to the FTC.

## Deploying to Vercel

One Vercel project per domain, all pointing at this repo, differing only in build
command and output directory:

| Project | Build command | Output directory |
| --- | --- | --- |
| peptriva-review | `node build.mjs --site peptriva-review` | `dist/peptriva-review` |
| peptriva-reviews | `node build.mjs --site peptriva-reviews` | `dist/peptriva-reviews` |
| peptriva-customer-reviews | `node build.mjs --site peptriva-customer-reviews` | `dist/peptriva-customer-reviews` |
| peptriva-ratings | `node build.mjs --site peptriva-ratings` | `dist/peptriva-ratings` |

Framework preset: **Other**. Install command: leave empty (no dependencies).

Attach the bought domain to its project, and Vercel issues the certificate.
