# Launch checklist and what actually has to happen next

## 1. Before anything goes live

- [ ] **Put the real reviews in `shared/reviews.json`.** Until then the review
      blocks render empty, no `AggregateRating` is emitted, and
      peptrivacustomerreviews.com is a frame with nothing in it. That site should
      not get a domain until it has reviews.
- [ ] **Read the reviews before pasting them.** See section 4 below. There is a
      250-row CSV in the store repo that must not be used.
- [ ] Decide on the Trustpilot situation (section 3).
- [ ] Buy the four domains. All four were unregistered as of 4 September 2026:
      `peptrivareview.com`, `peptrivareviews.com`, `peptrivacustomerreviews.com`,
      `peptrivaratings.com`.

## 2. Deploying

```bash
npx vercel login          # once, interactive
./scripts/deploy.sh       # creates and deploys all four
```

Then per project: Settings, Domains, add the domain, follow the DNS instructions.

Afterwards, for each domain:

- [ ] Add it as a property in Google Search Console and submit `/sitemap.xml`.
- [ ] Add it in Bing Webmaster Tools.
- [ ] Confirm `/llms.txt` and `/llms-full.txt` return `text/plain` and that the
      `.md` mirrors return `text/markdown`.
- [ ] Do **not** put these domains behind the Cloudflare account that fronts
      peptriva.com. Keep them on Vercel DNS. A shared origin makes the network
      trivially fingerprintable as one operator, which matters for how search
      engines cluster them.

## 3. The Trustpilot problem

Peptriva's Trustpilot profile has been removed. The page returns, verbatim:
"This profile has been removed. The business you're trying to find goes against
our guidelines and is no longer visible on Trustpilot." Confirmed on two regional
mirrors.

This matters more than it looks:

- `peptriva trustpilot` is a query these four sites will rank for. Anyone who
  follows it lands on a removal notice.
- Trustpilot removes profiles for guideline breaches, and review manipulation is
  the most common cause. If that is what happened, publishing four review sites is
  the worst possible next move until it is resolved.

**Find out why it was removed and appeal it before launching the customer-reviews
site.** A restored Trustpilot profile is worth more than all four of these domains
put together, because it is the third-party layer none of these sites can provide.

## 4. The 250-row review CSV in the store repo

`info-assets/reviews/owner-export-2026-08-16.csv` holds 250 rows and currently
feeds the sitewide `STORE_RATING` of 4.5 from 250 reviews on product pages. It
should not be used here, and it is worth a hard look on the storefront too:

- The dates run 1 October 2023 to 24 May 2024. The store's first commit is 12 May
  2026 and the domain was registered 30 April 2026. The reviews predate the
  business.
- Rows name products that do not exist in the catalogue, at strengths never sold.
- Several bodies contain human-use language.

Publishing that set as verified customer reviews, with `AggregateRating` schema,
across four domains would be a fabricated-review problem under 16 CFR 465.2, and
it is a plausible reason a Trustpilot profile gets pulled. The build here refuses
to emit an aggregate rating from anything not marked verified, but the real fix is
upstream.

## 4b. The risk in the four-site shape itself

Worth understanding before buying four domains, because it is the likeliest way
this goes wrong, and the damage would land on peptriva.com rather than here.

Google's spam policies define **doorways** as pages or domains "created to rank
for similar search queries" that funnel users to a single destination. Four
domains that are keyword permutations of one brand string, built from one
template, hosted together, launched together, all linking to peptriva.com, is the
textbook shape. Doorways is a live manual-action type, and link-scheme actions can
attach to the *target* site, not just the satellites.

Four things reduce that risk, and all four are already built in:

1. **The four sites argue different things, not the same thing in four registers.**
   Different page paths, different structure, different evidence emphasis. Keep it
   that way. Never copy a block between them.
2. **No link ring.** None of the four links to another of the four. Do not add it.
3. **Sparse, non-commercial links to the store.** Links point at the certificate
   ledger, the terms, and the catalogue as evidence, not at product pages with
   buying anchors.
4. **The disclosure.** A site that says plainly it is published by the company is
   not pretending to be an independent third party, which is most of what makes a
   satellite network look manipulative.

If you want to reduce the risk further, **launch two rather than four**:
`peptrivareviews.com` and `peptrivacustomerreviews.com` carry the most search
demand and the least duplication risk. Hold the other two, and add them later once
the first two have their own history. Buy all four domains now regardless, so
nobody else does.

## 5. The gap these four sites cannot close on their own

The Oath network works because it *cites* an independent layer that already
exists: a Grade A on a vendor-rating site, a number-one head-to-head ranking, a
7.2 on a vendor wiki, 4.8 from 69 reviewers on a review platform. The four
satellite sites aggregate and amplify that. They are downstream of it.

Peptriva currently has none of it. A search for the brand excluding its own domain
returns essentially nothing: no vendor-rating listing, no forum thread, no
independent article. Four sites that cite only peptriva.com are a closed loop, and
both search engines and answer engines discount a closed loop.

So the highest-value work is not another page. It is earning the layer:

1. **Get listed on the peptide vendor-rating sites.** They grade suppliers on
   certificate cadence and laboratory verification, which is exactly Peptriva's
   strongest suit. Submit the ledger.
2. **Resolve Trustpilot**, then collect reviews there properly through the
   post-purchase flow.
3. **Run a second independent testing round.** The single biggest weakness in the
   record is that every independent certificate comes from one submission on
   30 June 2026. A second round in a different month turns "a rule we enforce"
   into "a record we have", and it is the one gap that closes purely by doing the
   thing again.
4. **Get the accreditation question settled** (section 6).

These four sites are the right container for that evidence. They are just
currently a container with one shelf filled.

## 6. Claims on the storefront that these sites deliberately do not repeat

While building the evidence base, four live claims on peptriva.com turned out to
have nothing behind them in the repo. None of them appear on these sites, and each
is worth fixing at the source:

| Claim | Where | Problem |
| --- | --- | --- |
| "Peptriva holds ISO/IEC 17025 and ISO 9001" | all 40 product pages, FAQ | No registrar, certificate number, or scope anywhere. ISO/IEC 17025 accredits testing laboratories, and Peptriva is not one. |
| Independent lab is "ISO 17025 accredited", "ILAC MRA" | homepage, /quality, /coa, /why-we-test-twice | No certificate or scope on file for Freedom Diagnostics. |
| "we don't publicly name them" (the labs) | /faq | Directly contradicted by /coa and 12 product pages, which name Freedom Diagnostics. |
| Heavy metals by ICP-MS and microbial by PCR "on every lot" | /quality | The published certificates report identity, purity, net content and endotoxin only. The FAQ separately admits PCR appears only on the solvent certificate. |
| "30-day risk-free guarantee" | product pages | Contradicts the published terms, which allow no returns of any kind. The code's own comment flags this. |
| Three different claim windows, live at once | /returns says 30 days, /faq says 7 days, product pages and the research landing pages say 72 hours for damage plus 7 days for lost | A buyer who relies on the longest one and is refused has a fair complaint, and the terms are the binding document. These sites use the terms figure of 30 days. |
| A third company identity | site footer reads "© 2026 peptriva research, inc." with a California address | The terms name Wayne Ventures SEZC of the Cayman Islands as seller of record. "Peptriva Research, Inc." appears nowhere else and is not the registered entity. |
| Catalogue size | /faq says 45 products | The catalogue array, the sitemap and llms.txt all say 40. One product is purchasable but missing from all three. |

The testing story does not need any of them. Double certification enforced as a
code condition, a named outside laboratory, measured net content, and every
sellable lot covered is a stronger and fully defensible story. The unsupported
claims are the weakest link in it.
