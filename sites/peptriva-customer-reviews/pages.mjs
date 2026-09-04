// Peptriva Customer Reviews: the customer review record.
//
// Discipline for this file: the owner has not supplied review data yet, so the
// :::reviews and :::ratingSummary blocks render nothing. Every sentence here has
// to read correctly with zero reviews on the page. Nothing on this site states an
// average, a count, a distribution, or a theme drawn from reviews. Where a page
// needs to characterise the record, it characterises the publication policy.

export const pages = [
  {
    path: '/',
    navLabel: 'The record',
    title: 'Peptriva Customer Reviews: the complete review record',
    description:
      'Every customer review Peptriva receives is published here in full, including the critical ones, with the verification method, the redaction rules, and the named limits.',
    h1: 'Every review we receive, published in full',
    kicker: 'THE CUSTOMER REVIEW RECORD / 2026',
    standfirst:
      'Peptriva publishing its own customer reviews: all of them, unedited in substance, each one matched to a real order. The record is young, and this page says so before it says anything else.',
    cover: true,
    cta: [
      { label: 'The complete record', href: '/all-reviews' },
      { label: 'How a review is verified', href: '/how-we-verify' },
    ],
    coverBlocks: `:::stats {"items":[["REVIEWS PUBLISHED","Every one received"],["EDITED FOR SUBSTANCE","None"],["REMOVED ON REQUEST","None"],["VERIFICATION","Matched to an order id"]]}
:::
`,
    body: `## The lead

Peptriva publishes every customer review it receives, favourable or not, and this site is where they go. That is a commitment about process, not a claim about the reviews. The promise on this page is completeness and a stated method: you should be able to judge the reviews rather than take a star average on trust.

Two consequences follow, and both cut against us. The first is that the critical reviews sit on the same pages as the rest, in the same type, with the same badge, and they are collected again on a page of their own. The second is that where a review block on this site is empty, nothing has been received that matches it, and the page will not fill the gap with prose about how customers feel. No aggregate rating is generated while a block is empty either: the site emits an AggregateRating to search engines only when real, owner-supplied reviews stand behind it, so no star figure is ever published that the record cannot support.

## Who publishes this

Peptriva publishes it. This is a first-party record of our own customer reviews, our own testing, and our own terms of sale. It is not an outside assessment, it is not written by a third party, and it does not present itself as one.

That disclosure is not decoration. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, in force since 21 October 2024, governs review authenticity and company-controlled review websites[^8]. A company running a review property about its own products has to say so plainly. We say so on every page, in the bar above the masthead, and in the footer.

## The six rules this record runs on

1. **Every published review is tied to a real order.** A review is matched to an order record before it is published. The method, and what happens when a match cannot be made, is set out in full on the verification page.
2. **Nothing is deleted.** Not on request from a customer, not on request from anyone inside the company. A review can be corrected by its author, and the correction publishes alongside the original.
3. **Substance is never edited.** Redaction is limited to a full name, an email address, or an order number. Obvious typographical errors are fixed. Nothing else changes.
4. **Critical reviews publish on the same terms as the rest.** Same page, same badge, same prominence, plus a dedicated page that collects them.
5. **Nothing is offered in exchange for a review.** No discount, no credit, no free unit, and no request routed only to customers expected to be happy.
6. **Unverified is a badge, not a bin.** A review that cannot be matched to an order is published carrying an unverified badge rather than quietly dropped.

## How is a Peptriva customer review verified?

A review is verified when it can be tied to an order record held in the store system, and the badge on the card says which of the two states applies: verified order, or unverified. Verification tests one thing only, that a real purchase sits behind the words. It says nothing about whether the reviewer's judgement is right, and it cannot test a claim a customer makes about the material itself. That is what the certificates are for. The full method, including what is redacted and why nothing is deleted, is on the [verification page](/how-we-verify).

## The reviews

Reviews appear below newest first, with no rating filter applied. Where the block is empty, no review has yet been published to this record.

:::ratingSummary {}
:::

:::reviews {"limit":8}
:::

The complete set, together with the standing rules of publication, is on [the full record](/all-reviews). The critical reviews are collected separately on [the complaints page](/complaints).

## What a review here does not prove

A customer review is evidence about service: whether the parcel arrived, when it arrived, what the packaging looked like, whether support answered. It is not evidence about what is in the vial. No customer can assess identity, purity, net content, or endotoxin by eye, and this record does not treat a favourable review as if they could.

The evidence that speaks to the material is the certificate ledger, and it carries its own named limits[^1]:

- **One testing round, not a testing history.** The independent certificates on file come from a single submission: samples received 30 June 2026, reported 2 July 2026[^2]. Testing every lot is a rule enforced in the order system, not yet a long record of repeated rounds.
- **A small archive.** Fourteen certificates covering thirteen lots. Established competitors publish hundreds. The claim worth making is coverage rather than volume.
- **No independent vendor-rating listing.** Peptriva does not appear on the listing sites that grade peptide suppliers on certificate cadence and laboratory verification. That is a real absence, and reviews published by the company do not substitute for it.
- **A young company.** The domain was registered on 30 April 2026. Longevity is evidence, and it is evidence Peptriva cannot offer.
- **No accreditation certificate published.** The independent laboratory is named and its certificates are published[^2]. Its accreditation scope is not published, so this record does not assert it.
- **Not sterile, and no sterility assay.** The panel covers identity, purity, net content, endotoxin, and appearance. It does not include a sterility test, and the published terms state the material is not sterile[^3].

## What the reviews sit on top of

A lot cannot enter sellable stock until two certificates are on file. The production facility tests and releases the batch, and that certificate is held on file and is not published. On arrival at the United States distribution facility a sample goes to Freedom Diagnostics of Franklin, Tennessee, an independent third-party laboratory, for a full re-test, and that second certificate is the one published on the ledger[^1][^2]. The rule is expressed in the order system as a gate: a lot clears to sell only when both are present. One exception exists, the lab solvent, where the independent certificate alone clears the lot because no certificate is issued for an off-the-shelf USP solvent.

Every published lot carries the same five-assay panel: identity by LC-MS, purity by HPLC-UV area percent, net content as measured mass in the vial, endotoxin by LAL under USP General Chapter <85> run in duplicate against a specification of 0.05 EU/mL or lower, and appearance[^6].

| Product | Lot | Purity | Net content |
| --- | --- | --- | --- |
| KPV | KPV10-260504 | 99.90% | 11.30 mg |
| CJC-1295 / Ipamorelin | CP10-260428 | 99.86% | Ipamorelin 5.14 mg, CJC-1295 5.26 mg |
| GHK-Cu | CU50-260503 | 99.85% | 57.46 mg |
| TB-500 (Thymosin Beta-4) | TB500(B4)-260428 | 99.80% | 13.28 mg |
| MOTS-c | MS10-260508 | 99.73% | 11.16 mg |
| NAD+ | NJ500-260503 | 99.61% | 527.61 mg |
| GLOW Blend | GLOW70-260504 | 99.60% | GHK-Cu 60.42 mg, BPC-157 11.12 mg, Thymosin Beta-4 11.83 mg |
| BPC-157 | BC10-260504 | 99.58% | 11.24 mg |

The same panel covers every sellable lot, including the restricted tier that is not tabulated here. All of it is on the public ledger[^1].

## What the customer experience consists of

Reviews of a supplier are mostly reviews of these facts, so they are worth stating before anyone rates them. Orders ship to the United States only, including the District of Columbia, with no international shipping[^4]. The carrier is FedEx 2-Day with tracking. Orders placed before 5:00 p.m. ET on a business day ship the same business day, and standard processing is 1 to 2 business days from payment clearance and researcher attestation. Shipping is free on every order and there is no cart minimum. Lyophilized material is stable at ambient temperature in transit and ships in standard parcel packaging; Peptriva does not claim cold-chain shipping for the parcel, only for the distribution facility where the independent re-test happens[^4].

The terms are strict and stated plainly rather than buried: no returns of any kind, opened or unopened[^3]. Four claim routes exist, and they are the ones a complaint actually travels down. They are set out in full on [the complaints page](/complaints).

## Read the rest of the record

:::indexCards {"cards":[{"href":"/all-reviews","title":"The complete record","text":"Every published review, unfiltered, with the standing rules of publication printed alongside them."},{"href":"/how-we-verify","title":"How verification works","text":"How a review is tied to an order, what the two badges mean, what is redacted, and why nothing is deleted."},{"href":"/complaints","title":"Complaints","text":"The critical reviews, published deliberately, and the claim routes a customer actually has under the published terms."},{"href":"/common-themes","title":"What we hear","text":"The categories tracked across reviews, and the honest note that a small base cannot yet support a theme claim."},{"href":"/reviews-elsewhere","title":"Reviews elsewhere","text":"Where else a Peptriva review can be left, and what this first-party record should be weighed against."},{"href":"/faq","title":"Questions","text":"Twenty-three questions about the review record, the method, and the limits, answered in one place."}]}
:::
`,
  },
  {
    path: '/all-reviews',
    navLabel: 'All reviews',
    title: 'All Peptriva customer reviews, unfiltered | Peptriva Reviews',
    description:
      'The complete Peptriva customer review record, published with no rating filter and no minimum star cut, alongside the standing rules that govern what appears here.',
    h1: 'The complete record, unfiltered',
    kicker: 'THE FULL RECORD',
    standfirst:
      'Every review published to this record, newest first, with no rating filter applied and nothing held back for being unflattering. The rules that govern the page are printed underneath it.',
    body: `## The lead

This page applies no filter. There is no minimum star cut, no default sort that pushes low ratings down, and no separate holding area for reviews the company would rather not show. Reviews appear newest first, which is the only ordering rule in force.

That matters more than it sounds. The standard way a company-run review page flatters itself is not by inventing reviews, it is by choosing which real ones to show: a four-star-and-up default, a most-helpful sort that buries the recent complaint, a product filter that quietly excludes the item people are unhappy with. This page is defined by the absence of those choices, and the absence is checkable: the block below is generated from the whole record with no selection arguments applied.

:::ratingSummary {}
:::

:::reviews {}
:::

If nothing appears above, no review has yet been published to this record. The page states that rather than filling the space with a summary of sentiment, because a summary of reviews that are not on the page is exactly the thing this site exists not to do.

## The standing rules of publication

These are the rules the record runs on. They are written down so that a reader can hold the page to them, and so that a future decision to break one would be visible as a change of policy rather than a quiet edit.

1. **Real orders only.** A review is published as verified only when it can be matched to an order record. Anything that cannot be matched is published carrying an unverified badge, with the reason stated on the verification page.
2. **No selection by rating.** A one-star review is published on the same schedule as a five-star review. There is no approval queue that a critical review has to survive.
3. **No deletion.** No review is removed at the request of a customer, a member of staff, or anyone else. If an author wants their words changed, the correction publishes and the original stays.
4. **Redaction is narrow and named.** A full surname, an email address, a telephone number, or an order number is redacted. Substance is not touched.
5. **No incentives.** No discount code, credit, free unit, or entry to anything is offered in exchange for a review, before or after it is written.
6. **No review gating.** Requests for reviews are not routed only to customers predicted to be positive. A gated request produces a flattering page and a worthless one.
7. **Language that Peptriva may not publish is redacted, not laundered.** Peptriva is barred from publishing human-use or medical-outcome language on any surface it controls, and a customer's words are still a Peptriva surface once we print them. Where a review contains such a clause, the clause is redacted and the redaction is marked, or the review is left unpublished with the author told why. The rest of the review is never rewritten to be more favourable.
8. **The rating is the author's.** Star values are taken as given. They are not adjusted, re-weighted, or normalised.

## What the two badges mean

Every card carries one of two badges. **Verified order** means the review has been matched to an order record held in the store system. **Unverified** means it has not, and the reason is usually mundane: a review left from an address that differs from the one on the order, a message forwarded through a third party, or a purchase made under a company name. Unverified is not an accusation and it is not a demotion. It is a statement about what we could confirm.

Neither badge is a judgement about whether the reviewer is right. A verified five-star review from a satisfied buyer and a verified one-star review from a frustrated one are both exactly what they appear to be: one person's account, tied to one order.

## What this page cannot show you

- **It cannot show reviews that were never left.** Most customers of most suppliers never write anything. A review record is a sample of the loudest and the most inconvenienced, not a census.
- **It cannot show the reviews of a company that has been trading for years.** The domain was registered on 30 April 2026. A thin record is what a young company has, and padding it is the one thing that would make it worthless.
- **It cannot tell you what is in the vial.** No reviewer can assess identity, purity, net content, or endotoxin by inspection. The certificate ledger does that, lot by lot, with the accession numbers printed[^1][^2].
- **It cannot establish a theme.** A handful of reviews saying the same thing is an anecdote. The threshold this site applies before it will state a theme is set out on [the themes page](/common-themes).

## Reading a thin record honestly

A reader who lands on a review page is usually trying to answer one question: is this supplier real, and does it do what it says. A short review record cannot answer that on its own, and a long one manufactured to look organic answers it falsely. The material that does carry weight is the paperwork, because it is dated, numbered, and checkable by someone who has never bought anything.

Three things are worth checking before any review here is weighed. The certificate ledger, where every sellable lot has an independent third-party result under a named laboratory and an accession number[^1]. The published terms, which state no returns of any kind, four claim routes, and a claim window of 30 days from delivery[^3]. The shipping policy, which states the carrier, the 5:00 p.m. ET cut-off, and the 1 to 2 business day processing window that most delivery complaints are measured against[^4].

Reviews are then useful for the thing paperwork cannot cover: what happened when something went wrong, and how fast anyone answered.

## Corrections and disputes

An author can correct their own review at any time by writing to support@peptriva.com from the address the review was left from, and the corrected version publishes with the original left in place[^7]. A reader who believes a published review is inaccurate or not from a real customer can dispute it the same way. A dispute that succeeds results in a note published on the review, not a disappearance. The full route, and what to include, is on [the contact page](/contact).
`,
  },
  {
    path: '/how-we-verify',
    navLabel: 'How verified',
    title: 'How Peptriva verifies a customer review | Peptriva Reviews',
    description:
      'How each review is tied to a real order, what the verified and unverified badges mean, what is redacted, why nothing is deleted, and the FTC rule that governs the page.',
    h1: 'How a review here is verified',
    kicker: 'THE METHOD',
    standfirst:
      'Verification tests one thing: that a real order sits behind the words. This page states how the match is made, what the two badges mean, what is redacted, and what verification does not establish.',
    body: `## The lead

A review on this site is verified when it can be matched to an order record held in the store system, and unverified when it cannot. That is the entire meaning of the badge. It is a statement about provenance, not about accuracy, and not about whether the reviewer's conclusion is fair.

The reason to publish the method rather than a badge alone is that a verification badge is the easiest thing on a review page to fake. Almost every company-run review widget prints one. Very few say what it was tested against, who did the testing, or what happens to a review that fails. Below is what ours means, including the part where it fails.

## How is a review tied to a real order?

Every order placed through peptriva.com produces a record: an order id, the email address the order was placed under, the items and lot the order shipped against, and the fulfilment dates. A review arrives with the address it was left from and, where the review came through a post-purchase message, the send token that message carried.

The match is made on the person rather than on a single field, because a person is not one email address. A review is marked verified when the address it was left from matches the address on an order, or the send token resolves to an order, or the author supplies an order number that resolves. Any one of those is sufficient. None of them is inferred from the text of the review itself: a review that mentions a product convincingly is not evidence that its author bought it.

The source of each review is recorded as it comes in, whether direct through the site, by email, or through a post-purchase request, and the source is part of the record even where it is not printed on the card.

## What does the verified badge mean, and what does it not mean?

**Verified order** means: an order record exists, and this review is attached to it.

It does not mean the review was checked for accuracy. It does not mean Peptriva agrees with it. It does not mean the reviewer is a qualified researcher, although every buyer must attest that they are one and must be 21 or over before an order completes[^3]. Most importantly, it does not extend to any claim the review makes about the material in the vial. If a reviewer writes that a product looked or measured a certain way, verification confirms that they bought it, and nothing more. The assay results are the certificate's job: identity by LC-MS, purity by HPLC-UV area percent, net content as measured mass, endotoxin by LAL under USP General Chapter <85>, and appearance[^1][^6].

## What does unverified mean?

Unverified means the match failed. The ordinary reasons are boring: a review left from a personal address when the order was placed on a work address, a message relayed through a forum or a third party, a purchase made under a company name, or an order placed so long before the review that the author no longer has the number.

An unverified review is still published, carrying the unverified badge. Two bad options were available here and both were declined. Dropping unmatched reviews silently would improve the look of the record and hide criticism from anyone whose email did not line up. Publishing them without a badge would flatten a real distinction. The badge keeps the review and keeps the caveat.

## What gets redacted

Redaction is narrow, and it is applied for two reasons only.

**Personal identifiers.** A surname is reduced to an initial, and an email address, a telephone number, a shipping address, or an order number is removed. Authors are displayed as a first name and a last initial. This is done whether or not the author asked.

**Language Peptriva is barred from publishing.** Peptriva may not publish human-use or administration language, or medical-outcome claims, on any surface it controls. A customer's words become such a surface the moment we print them. Where a review contains a clause of that kind, the clause is redacted and marked as redacted, or the review is left unpublished and the author is told why. What is never done is a rewrite: the remaining words are the author's, and a redaction is never used to remove a criticism.

Every published review is screened against that copy rule automatically before it can go live, and a flagged review requires a human read before it publishes.

## Why nothing is deleted

Because deletion is the failure mode that makes every company-run review page worthless, and because a policy of no deletion is the only version of that promise a reader can hold us to.

No review is removed at the request of a customer, and none is removed at the request of anyone inside Peptriva. An author who wants to change their assessment writes a correction, and the correction publishes with the original still visible, so a reader can see that a view changed and when. A dispute that succeeds produces a published note on the review rather than a removal.

There is one bounded exception, and it is stated so it cannot be used as a hole: a review is withdrawn if publishing it would expose a third party's personal information that redaction cannot separate from the text. In that case the withdrawal is logged on the record with the date and the reason, and the rating stays in the record.

## What FTC rule governs a page like this?

The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, effective 21 October 2024[^8]. It is the reason several of the rules above are written the way they are. The rule addresses fake and misattributed reviews, reviews bought with incentives that are not disclosed, insider reviews published without disclosing the connection, the suppression of negative reviews, and company-controlled review websites that hold themselves out as independent.

Peptriva publishes this site about Peptriva and says so in the bar above every masthead, in the footer of every page, and in the first section of the home page. Every rule on [the record page](/all-reviews) maps to something in that list: real orders only, no incentives, no gating, no deletion, and a disclosure that does not need to be hunted for.

## What verification does not establish

- **It does not establish that the record is representative.** Reviews are a self-selected sample, weighted towards the delighted and the aggrieved.
- **It does not establish product quality.** That is the certificate ledger's job, and the ledger carries its own limits: one independent testing round to date, samples received 30 June 2026 and reported 2 July 2026, and fourteen certificates over thirteen lots[^1][^2].
- **It does not establish company longevity.** The domain was registered on 30 April 2026.
- **It does not establish an outside opinion.** No independent vendor-rating listing covers Peptriva yet, and a verification badge issued by the company being reviewed is not a substitute for one.
- **It does not establish accreditation.** The laboratory is named, and its accreditation scope is not published here because Peptriva does not hold that certificate on file.

## The audit trail a reader can check without us

Ask for the certificate that covers a lot, by accession number, and compare it to what is on the ledger[^1]. Compare a delivery complaint to the published shipping terms: FedEx 2-Day with tracking, a 5:00 p.m. ET cut-off for same-business-day despatch, and 1 to 2 business days of standard processing[^4]. Compare a refund complaint to the published claim terms: four claim routes, a window of 30 days from delivery or from the carrier-marked delivery date, claims answered within 5 business days, and approved refunds issued to the original payment method within 7 to 10 business days of approval[^3]. Where a review and a published term disagree, the disagreement is the story, and it stays on the page.
`,
  },
  {
    path: '/common-themes',
    navLabel: 'What we hear',
    title: 'What Peptriva customers say: the theme framework | Reviews',
    description:
      'The categories tracked across Peptriva customer reviews, the threshold a theme must clear before it is stated, and why a small review base cannot yet support one.',
    h1: 'Themes, and the threshold before we claim one',
    kicker: 'READING THE RECORD',
    standfirst:
      'This page does not tell you what Peptriva customers commonly say, because a small review base cannot support that sentence. It sets out the categories tracked and the bar a theme has to clear first.',
    body: `## The lead

No theme is claimed on this page. A theme is a statement that many customers independently reported the same thing, and a review base this young cannot carry that statement honestly. What this page does instead is publish the framework: the categories every review is tagged against, the threshold a category has to clear before a theme is stated in prose, and the facts a reader can use in the meantime.

The temptation this page exists to resist is obvious. Three cheerful reviews about fast delivery become "customers consistently praise our shipping speed", and the sentence survives long after anyone checks. It is a small lie that costs nothing to write and destroys the credibility of the entire record, including the parts that are true and checkable.

## The threshold a theme has to clear

A theme is stated on this site only when all four of the following hold:

1. **At least eight reviews.** Fewer than eight is a set of anecdotes, and anecdotes are published as individual reviews rather than summarised into a finding.
2. **From different orders.** Eight reviews from eight distinct order records, not eight messages from a customer who wrote repeatedly.
3. **Making the same specific point.** Same category and same substance, not eight positive reviews being read as one theme about positivity.
4. **With the count and the window printed.** Any sentence stating a theme also states how many reviews it rests on and the date range they cover, so a reader can see the weight of it immediately.

The same threshold applies to a negative theme. A page that would state "several customers report delays" on three reviews is a page that would state "customers consistently praise delivery" on three, and neither sentence is worth reading.

## The categories tracked

Every published review is tagged against these categories. The tags are what the record is counted on when a theme eventually clears the threshold, and they are chosen to line up with the things a published policy can be checked against.

| Category | What it covers | The published fact it is measured against |
| --- | --- | --- |
| Shipping speed | Time from order to despatch and from despatch to delivery | FedEx 2-Day with tracking, a 5:00 p.m. ET cut-off for same-business-day despatch, and 1 to 2 business days standard processing[^4] |
| Packaging | Condition on arrival, labelling, what was in the box | Lyophilized material ships in standard parcel packaging, stable at ambient temperature in transit; no cold-chain claim is made for the parcel[^4] |
| Certificates | Whether the certificate for the lot received was findable and matched | Every sellable lot has an independent third-party result on the public ledger with an accession number[^1] |
| Support | Response time and usefulness of the answer | Monday to Friday, 9am to 5pm CT, at support@peptriva.com and 1-656-269-7377[^7] |
| Claims and refunds | How a damage, shortage, loss, or out-of-specification claim was handled | Claims answered within 5 business days, approved refunds within 7 to 10 business days of approval[^3] |
| Ordering and attestation | Account creation, the 21-or-over gate, and the researcher attestation step | Buyers must be 21 or over and must attest that they are a qualified researcher[^3] |
| Catalogue and stock | Availability, breadth, and product information | 40 products listed, 13 in stock, and all 13 in-stock lots carry an independent certificate[^1][^5] |
| Pricing | Value judgements about what was paid | Published range from $19.99 to $129.99, with free shipping on every order and no cart minimum[^4][^5] |

## What is already established without any reviews

While the review base is thin, the checkable record is not empty, and it answers several of the questions a reader would otherwise be hoping the reviews answer.

The two-certificate gate is enforced in the order system rather than promised in policy copy: a lot cannot enter sellable stock until both the production certificate and the independent certificate are on file. The published certificate is the second one, from Freedom Diagnostics of Franklin, Tennessee, an independent third-party laboratory[^2]. Fourteen certificates cover thirteen lots, and every lot currently sellable has one behind it[^1].

The eight publishable lots reported purity between 99.58 and 99.90 percent by HPLC-UV area percent, each with a measured net content and an endotoxin result run in duplicate under USP General Chapter <85> against a specification of 0.05 EU/mL or lower[^1][^6]. Net content is the assay most vendor certificates omit: it weighs what is actually in the vial against what the label says.

None of that is a customer's opinion, and none of it needs one.

## Why a small base cannot support a theme

Three structural problems, all of which persist no matter how good the intentions are.

**Self-selection.** People write reviews when something was unusually good or unusually bad. The middle of the distribution, which is where most orders live, writes nothing.

**Recency weighting.** A young record is dominated by whatever happened in the last few weeks, including one-off events like a carrier disruption, and reads them as permanent characteristics.

**Small-number noise.** With a handful of reviews, a single unhappy customer swings a rating by a large fraction of a star, and a single delighted one swings it back. The number moves for reasons that have nothing to do with the supplier.

This is also why no average is printed anywhere on this site while the record is thin, and why the underlying page emits no aggregate rating to search engines unless real reviews stand behind it.

## The limits that survive any number of reviews

- One independent testing round to date: samples received 30 June 2026, reported 2 July 2026[^2]. Reviews cannot substitute for a longer testing history.
- A small archive: fourteen certificates over thirteen lots, against competitors who publish hundreds[^1].
- No independent vendor-rating listing covers Peptriva.
- A young company: the domain was registered on 30 April 2026.
- No accreditation certificate is published, so none is claimed here.
- The panel does not include a sterility assay, and the terms state the material is not sterile[^3].

## When this page changes

When a category clears the threshold, this page will state the theme, the number of reviews behind it, the date range, and whether the theme is favourable or not. Until then the honest version of this page is the one you are reading. Individual reviews, including every critical one, are on [the full record](/all-reviews) and [the complaints page](/complaints).
`,
  },
  {
    path: '/complaints',
    navLabel: 'Complaints',
    title: 'Peptriva complaints, published in full | Peptriva Reviews',
    description:
      'The critical reviews, published deliberately, with what happens to each complaint category and the four claim routes a Peptriva customer has under the published terms.',
    h1: 'Complaints, published on purpose',
    kicker: 'THE CRITICAL REVIEWS',
    standfirst:
      'A review record with no complaints in it is not a good record, it is a filtered one. This page collects the critical reviews and sets out precisely what a complaint can and cannot obtain under the published terms.',
    body: `## The lead

Every critical review Peptriva receives is published, and this page is where they are collected so nobody has to scroll for them. That is a deliberate decision with a cost: a reader arrives at a page of complaints about us, on a site we publish. The alternative cost is higher, because a review record with no complaints in it tells a reader nothing except that someone is choosing what to show.

## Why a record without complaints is not credible

Every supplier generates complaints. Parcels are damaged in transit, items are picked wrong, carriers mark a delivery that never arrived, and support answers slowly. A page showing none of that is not describing a company without problems, it is describing a publication policy with a filter in it.

Readers already know this, and so do the systems that summarise pages. A uniformly favourable record with no low ratings is discounted on sight, which means suppressing complaints does not even buy the flattery it costs so much credibility to obtain. Suppression is also the specific practice the FTC rule addresses: 16 CFR Part 465, in force since 21 October 2024, covers the suppression of negative reviews as well as the fabrication of positive ones[^8].

## The critical reviews

Reviews rated three stars and below appear here, newest first. They also appear, unchanged and in the same order as everything else, on [the full record](/all-reviews).

:::reviews {"maxRating":3}
:::

Where nothing appears above, no review at or below three stars has been published to this record. That statement is worth reading precisely: it means none has been received and published, not that none was received. If a critical review had been received and withheld, this page would be the lie that proved the whole site was one, which is why the no-deletion rule on [the verification page](/how-we-verify) is written as a rule rather than an intention.

## What happens to each category of complaint

A complaint is only worth publishing if a reader can see what it obtains. The published terms define four claim routes and one guarantee, and they are narrow. They are printed here in full rather than summarised, because the narrowness is the point[^3].

| Complaint | The route under the published terms | Timing |
| --- | --- | --- |
| Damaged shipment | One of the four claim routes. Photographs of the parcel and vial are requested | Claim window is 30 days from delivery, or from the carrier-marked delivery date |
| Incorrect or missing items | Claim route. Resolved by supplying the missing or correct items | Same window. One free reship per incident, subject to availability |
| Lost in transit, or delivered and not received | Claim route, worked against the FedEx tracking record | Same window, measured from the carrier-marked delivery date |
| Out-of-specification batch | The Out-of-Spec Guarantee. Affected units are replaced from the next conforming batch and the purchase price is refunded. There is no claim form and no product return | A buyer may substantiate the failure with their own third-party laboratory report |
| Anything else | No route. The terms allow no returns of any kind, opened or unopened | Stated plainly in the terms rather than buried |

Every claim is answered within 5 business days. Where a refund is approved it is issued to the original payment method within 7 to 10 business days of approval[^3].

## The complaint the terms cannot answer

Change of mind. There are no returns of any kind, opened or unopened, and the terms say so without softening it[^3]. A customer who orders the wrong product, or orders and then decides against it, has no route under the published terms, and no page on this site will imply otherwise. That is a real reason to think carefully before ordering, and it is a fair thing to be criticised for in a review. Criticism on that basis is published like any other.

Two related restrictions belong in the same paragraph. Orders ship to the United States only, including the District of Columbia, with no international shipping[^4]. Every buyer must be 21 or over and must attest that they are a qualified researcher before an order completes, and material is sold for in vitro research use only[^3].

## The out-of-specification route in detail

This is the one complaint route that reaches the material rather than the parcel, and it is the one worth understanding before it is needed.

Every published lot carries an independent third-party certificate with an accession number, a purity figure by HPLC-UV area percent, a measured net content, and an endotoxin result under USP General Chapter <85>[^1][^6]. Those figures are the specification. If a shipped batch fails any published specification on that certificate, Peptriva replaces the affected units from the next conforming batch and refunds the purchase price, with no claim form and no product return required. A buyer who wants to establish the failure independently may substantiate it with their own third-party laboratory report[^3].

The unusual part is what it invites: a customer commissioning their own laboratory to check our published numbers, and that result being sufficient. It is also the clause most likely to generate a complaint that this record would then have to publish against itself.

## What is never done with a complaint

- **It is never deleted.** Not on request from the author, and not on request from anyone inside the company.
- **It is never traded.** No refund, credit, replacement, or discount is ever conditioned on removing, softening, or withdrawing a review. A claim is settled on its merits and the review stays exactly where it is.
- **It is never buried.** Critical reviews are not moved to a lower page, sorted down, or excluded from the default view on [the full record](/all-reviews).
- **It is never answered by editing.** A company reply may be published alongside a review. It never replaces or alters the review's words.
- **It is never rewritten.** The only edits are the narrow redactions named on [the verification page](/how-we-verify).

## What this page does not establish

A page of complaints is evidence about how a supplier handles failure, not a measure of how often failure happens. Rates cannot be read off a review record: nobody knows what fraction of orders produced a complaint that was never written down. Nor does the absence of a complaint in a category establish that the category is trouble-free, particularly while the record is young: the domain was registered on 30 April 2026 and the independent testing archive stands at fourteen certificates over thirteen lots from a single submission received on 30 June 2026[^1][^2].

The one thing this page does establish is what a complaint gets, in writing, in advance, with the timings attached. To raise one, [the contact page](/contact) has the routes and what to include.
`,
  },
  {
    path: '/reviews-elsewhere',
    navLabel: 'Elsewhere',
    title: 'Peptriva reviews elsewhere, and how to weigh them | Reviews',
    description:
      'Where else a Peptriva review can be left, why this record is first-party, what that costs it, and the outside evidence a reader should weigh this record against.',
    h1: 'Reviews elsewhere, and what to weigh this against',
    kicker: 'OUTSIDE THE RECORD',
    standfirst:
      'This record is first-party, which is its main weakness. Here is where else a Peptriva review can be left, and the outside evidence a careful reader should be checking alongside it.',
    body: `## The lead

The weakness of this record is structural: Peptriva publishes it, and no amount of method disclosure changes who is holding the pen. The rules on [the verification page](/how-we-verify) constrain what we can do to a review, but a reader still has only our word that a review we never published does not exist. That is the honest position, and the correct response to it is to weigh this record against evidence that does not pass through us.

## Where else can a Peptriva review be left?

There are four kinds of place, and they are worth distinguishing because they carry very different weight.

**Vendor-rating listings.** Sites that grade research-peptide suppliers on certificate cadence, laboratory verification, and fulfilment. Peptriva does not appear on any of them. That is a real absence, not an oversight, and it is one of the named limits of this record: those listings are earned over time and Peptriva has not earned one yet. When one exists, it will carry more weight than this entire site, because whoever writes it is not us.

**General consumer review platforms.** A customer can leave a review of any seller on a public review platform, and nothing about buying from Peptriva restricts that. We do not run a programme that steers customers towards or away from any platform, and we do not offer anything in exchange for a review left anywhere.

**Community discussion.** Forums and community spaces where buyers compare suppliers. Peptriva does not pay for, script, or seed posts in those spaces. Discussion there is unverifiable in both directions: nobody can confirm that an enthusiastic account is a real customer, and nobody can confirm that a hostile one is not a competitor.

**Direct to us.** By email to support@peptriva.com, by telephone on 1-656-269-7377 between 9am and 5pm CT Monday to Friday, or through a post-purchase message[^7]. Those are the reviews that end up here, under the rules on [the full record](/all-reviews).

## Why this record is first-party, and what that costs

Peptriva publishes it because the alternative was not publishing customer reviews at all. The cost is that every structural advantage this record has, verification against real order records, no deletion, no incentives, and no gating, is a promise from an interested party rather than an audited fact.

Some of it is checkable anyway. The disclosure is on every page, so the FTC test for a company-controlled review website is met in public rather than in a policy document nobody reads[^8]. No aggregate star rating is published while no reviews stand behind it, which is verifiable from the page source. The claim windows, the timings, and the certificate figures cited throughout are on peptriva.com in their own words, and any of them can be compared to what a review says[^1][^3][^4].

What is not checkable from outside is the negative: whether a review was received and never published. That one rests on our rules alone. It is stated here so a reader can price it in rather than discover it later.

## What a reader should weigh this against

**The certificate ledger.** The most useful evidence on offer, because it is dated, numbered, and testable by someone who has never bought anything. Fourteen certificates cover thirteen lots; every sellable lot has an independent third-party result behind it, with the accession number printed[^1]. The eight publishable lots reported between 99.58 and 99.90 percent purity by HPLC-UV area percent, with measured net content and an endotoxin result under USP General Chapter <85>[^6].

**The named laboratory.** Freedom Diagnostics, Franklin, Tennessee, is the laboratory of record on every published certificate, and it is a real business with its own web presence that a reader can look at without asking us[^2]. What is not published is its accreditation scope, so this record claims none.

**The published terms.** No returns of any kind, four claim routes, a window of 30 days from delivery, claims answered within 5 business days, approved refunds within 7 to 10 business days, and Cayman Islands governing law with AAA arbitration rules[^3]. A supplier's terms are a better predictor of how a dispute will go than any review of one.

**The corporate facts.** The seller of record is Wayne Ventures SEZC, a Cayman Islands company trading as Peptriva, with a registered office in George Town, Grand Cayman. Orders ship from 14516 Garfield Ave, Paramount, California 90723, United States[^7]. A supplier that publishes an entity name, a registered office, a physical despatch address, and a telephone number can be looked up.

**Time.** The domain was registered on 30 April 2026, and the independent certificates on file come from a single submission received on 30 June 2026 and reported on 2 July 2026[^2]. A reader who wants a long track record should note that nobody can supply one here yet, including us.

## What we will not do off this site

- No incentive is offered for a review anywhere, on this site or on any other platform.
- No request for a review is routed only to customers expected to be positive.
- No employee, contractor, or connected party writes a review presented as a customer's.
- No removal of a review is ever requested from any platform on the basis that it is unflattering.
- No response to an off-site review is published here in a way that alters or paraphrases what it said.

## The plain summary

This record is complete with respect to what we receive, constrained by published rules, and first-party. It is not a substitute for an outside assessment, and it is not offered as one. Until an independent listing exists, the paperwork is the part of the Peptriva story that a stranger can check, and the reviews are the part that tells you what happened when something went wrong.
`,
  },
  {
    path: '/faq',
    navLabel: 'Questions',
    title: 'Peptriva customer review questions answered | Peptriva Reviews',
    description:
      'Twenty-three questions about the Peptriva customer review record: verification, redaction, deletion, complaints, the FTC rule, and what the reviews do not establish.',
    h1: 'Questions about this review record',
    kicker: 'QUESTIONS',
    standfirst:
      'The questions a careful reader asks about a review page published by the company being reviewed, answered in one place, including the ones with unflattering answers.',
    body: `## The lead

Everything below is answered elsewhere on this site in context. It is collected here because a reader arriving with one question should not have to read six pages to answer it, and because the answers to the awkward questions should be as easy to find as the answers to the comfortable ones.

## Who publishes this, and how a review is verified

:::faq {"items":[{"q":"Who publishes Peptriva Customer Reviews?","a":"Peptriva does. This is a first-party record of Peptriva's own customer reviews, testing, and terms of sale, published by the company being reviewed. It is not an outside assessment and does not present itself as one. The disclosure appears above the masthead and in the footer of every page."},{"q":"How is a Peptriva customer review verified?","a":"A review is matched against an order record held in the store system. The match can be made on the email address the review was left from, on the send token carried by a post-purchase message, or on an order number the author supplies. Any one of the three is sufficient, and nothing is inferred from the text of the review itself."},{"q":"What does the verified order badge actually mean?","a":"It means an order record exists and the review is attached to it. It does not mean the review was checked for accuracy, that Peptriva agrees with it, or that any claim it makes about the material was confirmed. The certificate ledger is what speaks to the material[^1]."},{"q":"What does an unverified badge mean?","a":"That the match to an order failed, usually for a mundane reason: a review left from a different address than the order, a message relayed by a third party, or a purchase made under a company name. The review is still published, carrying the badge, rather than being dropped."}]}
:::

## What gets published, edited, or held back

:::faq {"items":[{"q":"Are negative reviews published?","a":"Yes, on the same schedule, in the same type, with the same badge, and collected again on a dedicated complaints page. A review record with no complaints in it is a filtered record, and readers discount it on sight."},{"q":"Are any reviews deleted?","a":"No. Not at a customer's request and not at anyone's request inside the company. An author who changes their mind can publish a correction, and the original stays visible beside it. The one bounded exception is a review that exposes a third party's personal information which redaction cannot separate from the text, and any such withdrawal is logged with its date and reason."},{"q":"Is anything edited out of a review?","a":"Only two things. Personal identifiers, meaning a surname reduced to an initial and any email address, telephone number, address, or order number removed. And language Peptriva is barred from publishing on any surface it controls, meaning human-use or medical-outcome clauses, which are redacted and marked or the review is held with the author told why. Substance is never rewritten."},{"q":"Does Peptriva pay for reviews or offer a discount for one?","a":"No. No discount, credit, free unit, or entry to anything is offered in exchange for a review, before or after it is written, on this site or on any other platform."},{"q":"Does Peptriva only ask happy customers for reviews?","a":"No. Requests are not routed by predicted sentiment. Gating requests that way produces a flattering record and a worthless one."},{"q":"What is the average Peptriva review rating?","a":"This site publishes no average while the record is thin, and the page emits no aggregate rating to search engines unless real customer reviews stand behind it. Where the review blocks on this site are empty, nothing has been published to the record yet, and no summary of sentiment is written in their place."},{"q":"What FTC rule applies to a company publishing reviews of itself?","a":"The Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, effective 21 October 2024[^8]. It covers fake and misattributed reviews, undisclosed incentives, insider reviews, the suppression of negative reviews, and company-controlled review websites that hold themselves out as independent. The publication rules on this site map directly to that list."}]}
:::

## Complaints, claims, and refunds

:::faq {"items":[{"q":"What can a customer complain about and actually get?","a":"The published terms define four claim routes: damaged shipment, incorrect or missing items, lost in transit or delivered and not received, and an out-of-specification batch. The claim window is 30 days from delivery or from the carrier-marked delivery date. Claims are answered within 5 business days and approved refunds are issued to the original payment method within 7 to 10 business days of approval[^3]."},{"q":"Does Peptriva accept returns?","a":"No. The published terms allow no returns of any kind, opened or unopened, and say so plainly rather than burying it[^3]. A change of mind has no route, which is a fair thing to be criticised for and criticism on that basis is published like any other."},{"q":"What happens if a batch fails its published specification?","a":"Under the Out-of-Spec Guarantee, Peptriva replaces the affected units from the next conforming batch and refunds the purchase price. There is no claim form and no product return. A buyer may substantiate the failure with their own third-party laboratory report[^3]."},{"q":"Will a refund be conditioned on removing a review?","a":"No. No refund, credit, replacement, or discount is ever traded for the removal, softening, or withdrawal of a review. Claims are settled on their merits and the review stays where it is."}]}
:::

## Testing, certificates, and delivery

:::faq {"items":[{"q":"Who tests Peptriva products?","a":"Freedom Diagnostics of Franklin, Tennessee, an independent third-party laboratory, is the laboratory of record on every published certificate[^2]. A production facility tests and releases each batch first, and that certificate is held on file and not published. The published one is the independent re-test performed on arrival at the United States distribution facility."},{"q":"How many Peptriva lots have certificates?","a":"Fourteen certificates cover thirteen lots, and every lot currently sellable has an independent third-party certificate behind it[^1]. A lot cannot enter sellable stock until both the production certificate and the independent certificate are on file, which is enforced in the order system rather than promised in policy copy."},{"q":"What is actually tested on each certificate?","a":"Five assays: identity by LC-MS, purity by HPLC-UV area percent, net content as measured mass in the vial, endotoxin by LAL under USP General Chapter <85> run in duplicate against a specification of 0.05 EU/mL or lower, and appearance[^6]. Net content is the assay most vendor certificates omit."},{"q":"How fast does Peptriva ship?","a":"Orders placed before 5:00 p.m. ET on a business day ship the same business day, with standard processing of 1 to 2 business days from payment clearance and researcher attestation. The carrier is FedEx 2-Day with tracking. Shipping is free on every order with no cart minimum, and orders go to the United States only, including the District of Columbia[^4]."}]}
:::

## What this record does not establish

:::faq {"items":[{"q":"Is Peptriva reviewed on independent vendor-rating sites?","a":"Not yet. Peptriva does not appear on the listing sites that grade research-peptide suppliers on certificate cadence and laboratory verification. That absence is real, it is named as a limit throughout this site, and a first-party record is not a substitute for it."},{"q":"Why should anyone trust a review page run by the company being reviewed?","a":"On the negative question, whether a review was received and never published, only our rules stand behind the answer, and that is stated rather than hidden. Everything else is checkable without us: the certificates by accession number[^1], the laboratory[^2], the terms and claim windows[^3], the shipping policy[^4], and the corporate facts on the contact page[^7]."},{"q":"What do these reviews not establish?","a":"They do not establish product quality, because no customer can assess identity, purity, net content, or endotoxin by eye. They do not establish rates of anything, because nobody knows how many orders produced a complaint nobody wrote down. And they cannot substitute for time: the domain was registered on 30 April 2026, and the independent certificates on file come from a single submission received 30 June 2026 and reported 2 July 2026[^2]."}]}
:::

## Leaving, correcting, or disputing a review

:::faq {"items":[{"q":"How do I leave, correct, or dispute a review?","a":"Write to support@peptriva.com from the address the order or the review was left from, or call 1-656-269-7377 between 9am and 5pm CT Monday to Friday[^7]. A correction publishes alongside the original. A dispute that succeeds produces a published note on the review rather than a removal. The contact page sets out what to include."}]}
:::
:::

## Where these answers come from

Every figure above is drawn from a published Peptriva source: the certificate ledger[^1], the laboratory of record[^2], the terms and conditions[^3], the shipping policy[^4], the catalogue[^5], the USP standard the endotoxin assay is run against[^6], the contact page[^7], and the FTC rule that governs review publication[^8]. The full list, with links, is on [the references page](/references).
`,
  },
  {
    path: '/about',
    navLabel: 'About',
    title: 'About this Peptriva review record and its rules | Peptriva',
    description:
      'Who publishes this record, why a company publishes reviews of itself, the rules that govern publication, and how the site is built and corrected.',
    h1: 'About this record',
    kicker: 'PUBLISHER AND METHOD',
    standfirst:
      'Peptriva publishes this site about Peptriva. Here is the disclosure in full, the rules the record runs on, how the pages are built, and how an error gets fixed.',
    body: `## The lead

This site is published by Peptriva, the company whose customers write the reviews on it. Peptriva is the trading name of Wayne Ventures SEZC, a Cayman Islands company with a registered office at 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103, and it is the seller of record for orders placed through peptriva.com[^3][^7].

The disclosure is stated first because a review property run by the company being reviewed has exactly one honest configuration: say who is holding the pen, then publish the rules and the evidence and let a reader test them. 16 CFR Part 465, in force since 21 October 2024, makes a company-controlled review website that presents itself as an outside voice unlawful[^8]. This one presents itself as what it is.

## Why publish reviews of yourself at all

Because the alternative was publishing none, and because the useful part of a review record is not the star average. It is the specific account of what happened when something went wrong, tested against a published policy that says what should have happened. That comparison works whoever hosts the page, provided the page does not choose which reviews to show.

So the design of this record is built around removing the choices that make a self-published review page worthless: no rating filter on the default view, no approval queue for critical reviews, no deletion, no incentives, and no gated requests. Those constraints are printed on [the record page](/all-reviews) so that breaking one would be visible as a change of policy.

## The publication rules, in short

1. Every published review is tied to a real order, or it carries an unverified badge that says the match failed.
2. Substance is never edited. Redaction covers personal identifiers and language Peptriva may not publish anywhere.
3. Nothing is deleted, including at the request of the author or of anyone inside the company.
4. Critical reviews publish on the same terms and are collected again on [the complaints page](/complaints).
5. No incentive is offered for a review, and no request is routed by predicted sentiment.
6. No star average is published, and no aggregate rating is emitted, unless real reviews stand behind it.
7. No theme is claimed until at least eight reviews from different orders make the same specific point, and the sentence that states it also states the count and the date range.

The long form of each, including the failure cases, is on [the verification page](/how-we-verify).

## What this site is made of

Ten pages, each written against a single source file of verified facts, and each fact carrying the published Peptriva document or public standard it came from. Where a fact was not in that source file, it is not on these pages, including several a marketing page would want: no customer count, no order count, no founding story, no accreditation, and no third-party rating.

The build enforces the copy rules mechanically. Language that Peptriva is barred from publishing on any surface it controls, meaning human-use and administration language, medical-outcome claims, branded prescription drug names, accreditation claims with no certificate on file, origin claims, and guarantees that contradict the published terms, fails the build rather than producing a warning. The same gate is applied to the text of customer reviews before they can publish.

## The named limits

These are stated on the pages where they matter and collected here so that no reader has to hunt for them.

- **One independent testing round.** Samples received 30 June 2026, reported 2 July 2026[^2]. Testing every lot is a rule enforced in the order system, not yet a long record of repeated rounds.
- **A small archive.** Fourteen certificates over thirteen lots[^1]. Established competitors publish hundreds. The claim worth making is coverage rather than volume.
- **No independent vendor-rating listing.** Peptriva does not appear on the sites that grade suppliers on certificate cadence and laboratory verification.
- **A young company.** The domain was registered on 30 April 2026.
- **No accreditation certificate published.** The laboratory is named[^2]; its accreditation scope is not published here, so it is not asserted.
- **Not sterile.** The panel covers identity, purity, net content, endotoxin, and appearance. It does not include a sterility assay, and the terms state the material is not sterile[^3].
- **A thin review base.** No average, no distribution, and no theme is stated while the record cannot support one.

## Corrections

An error of fact on any page here is corrected on the page, and where the correction changes the meaning of a sentence a reader may have relied on, the change is stated rather than made silently. Write to support@peptriva.com with the page and the sentence[^7].

A review is corrected only by its author, and the correction publishes alongside the original. A reader who believes a published review is inaccurate or not from a real customer can dispute it, and a successful dispute produces a published note on the review rather than a removal. The routes are on [the contact page](/contact).

## What is sold, and on what terms

Peptriva supplies research peptides to attested qualified researchers for in vitro research use only. The material is not a drug, food, cosmetic, supplement, or device, it is not approved by the FDA, and it is not for human or veterinary use by any route[^3]. Buyers must be 21 or over and must attest that they are a qualified researcher before an order completes.

The catalogue lists 40 products across categories including cytoprotective, GH secretagogues, peptide analogs, mitochondrial, copper peptides, nootropic and neuropeptide, melanocortin, senescence and antioxidant, and lab consumables, with 13 in stock at the time of writing and every in-stock lot carrying an independent certificate[^1][^5]. Published prices run from $19.99 to $129.99, and shipping is free on every order with no cart minimum[^4].

Governing law for the conditions of sale is that of the Cayman Islands, with disputes under AAA arbitration rules[^3].
`,
  },
  {
    path: '/references',
    navLabel: 'References',
    title: 'References for the Peptriva customer review record | Peptriva',
    description:
      'The eight published sources every fact on this Peptriva review record is drawn from, with links, so that any figure on any page can be checked against its origin.',
    h1: 'References',
    kicker: 'SOURCES',
    standfirst:
      'Every numbered marker on this site resolves to one of the eight sources below. Each is a published Peptriva document, the laboratory of record, a public standard, or the federal rule that governs review publication.',
    body: `## How to use this list

Each superscript marker on a page is a link into this list. The list is short on purpose: a review record that cites forty sources nobody opens is doing something other than being checkable. These eight are the documents that a reader would actually use to test a sentence on this site.

Three of them are Peptriva's own published policies, which makes them evidence of what we committed to rather than proof that we did it. The distinction matters, and this record does not blur it. A terms page proves the claim window is 30 days from delivery. It does not prove a claim was answered within 5 business days, and no citation on this site is offered as though it did.

The certificate ledger is different in kind. Each row carries an accession number issued by the independent laboratory, a purity figure, a measured net content, and an endotoxin result, all tied to a lot code that appears on the vial a customer receives. That is the one document here a stranger can use to check us against a physical object.

## The sources

:::references {}
:::

## What each source can settle

| Source | What it settles | What it cannot settle |
| --- | --- | --- |
| Certificate ledger[^1] | Which lots were tested, by whom, on what date, with what result, under an accession number that ties to the lot code on the vial | Whether the lot a particular customer received matched the one certified, which is what the out-of-specification route exists to resolve |
| Freedom Diagnostics[^2] | That the laboratory of record is a real, named third-party business with its own public presence | Its accreditation scope, which is not published here and is therefore not claimed |
| Terms and conditions[^3] | The seller of record, the four claim routes, the 30 day claim window, the 5 business day answer, the 7 to 10 business day refund, the no-returns rule, and the research-use-only conditions | Whether any individual claim was actually handled to those terms |
| Shipping policy[^4] | The carrier, the 5:00 p.m. ET cut-off, the 1 to 2 business day processing window, free shipping with no cart minimum, United States destinations only, and the absence of a cold-chain claim for the parcel | Actual delivery performance, which is what a review can speak to and a policy cannot |
| Catalogue[^5] | What is listed, what is in stock, the mechanism categories, and the published price range | Anything about the material beyond what the certificate for its lot reports |
| USP General Chapter <85>[^6] | The standard the endotoxin assay on every certificate is run against, in duplicate, to a specification of 0.05 EU/mL or lower | Any assay outside endotoxin. Identity, purity, and net content are separate methods on the same certificate |
| Contact page[^7] | The despatch address, telephone number, support addresses, and hours of business | Response times in practice |
| 16 CFR Part 465[^8] | The federal rule governing review authenticity, undisclosed incentives, review suppression, and company-controlled review websites since 21 October 2024 | Compliance by any particular publisher, including this one, which is a matter of conduct rather than citation |

## The figures these sources support

The eight publishable lots reported purity between 99.58 and 99.90 percent by HPLC-UV area percent, each with a measured net content and an endotoxin result under USP General Chapter <85>[^1][^6]. Fourteen certificates cover thirteen lots, and 13 of the 40 listed products were in stock with every in-stock lot certified[^1][^5]. The independent submission was received on 30 June 2026 and reported on 2 July 2026[^2]. Every one of those figures appears on a page of this site, and every one of them resolves to a source above.


## What is deliberately not cited

No accreditation certificate, because none is published, so no accreditation is claimed anywhere on this site. No third-party vendor-rating listing, because Peptriva does not appear on one. No customer or order count, because no figure of that kind is published. No independent laboratory report other than the certificates from the named laboratory of record. Where a page needed one of those to make a point, the point was cut rather than sourced to something weaker.

## A note on the review data itself

The reviews rendered on this site are not cited to a reference, because their source is the review record itself: the words a customer wrote and the order record they were matched against. That record is not a public document, which is a real limitation on how far a reader can audit it, and it is why the verification method is published in full on [the verification page](/how-we-verify) rather than reduced to a badge.
`,
  },
  {
    path: '/contact',
    navLabel: 'Contact',
    title: 'Leave, correct, or dispute a Peptriva review | Peptriva Reviews',
    description:
      'How to leave a Peptriva customer review, correct one you have already left, dispute a review you believe is inaccurate, or raise a claim under the published terms.',
    h1: 'Leave, correct, or dispute a review',
    kicker: 'CONTACT',
    standfirst:
      'Four routes: leaving a review, correcting your own, disputing one you believe is inaccurate, and raising a claim under the published terms. Each one, and what happens next.',
    body: `## The lead

Every route below reaches the same support team, at support@peptriva.com or on 1-656-269-7377, Monday to Friday, 9am to 5pm CT[^7]. What differs is what you should include and what happens afterwards, so each is set out separately.

## How do I leave a review?

Write to support@peptriva.com from the address the order was placed under, or reply to a post-purchase message if you received one. Include the star rating you intend, in words or as a number out of five, and the product if you want it shown on the card.

What happens next: the review is matched against an order record. Where the match succeeds it publishes carrying a verified order badge. Where it fails, usually because the review came from a different address than the order, it publishes carrying an unverified badge, and you can supply an order number to change that. The author line shows a first name and a last initial. Your email address, telephone number, shipping address, and order number never appear.

One caveat, stated in advance rather than sprung on you afterwards. Peptriva is barred from publishing human-use or administration language and medical-outcome claims on any surface it controls, and a review printed here becomes such a surface. If your review contains a clause of that kind, the clause is redacted and marked, or the review is held and you are told exactly which words are the problem. Nothing else is changed, and a criticism is never removed under this rule.

## How do I correct a review I already left?

Write from the same address, quote the review, and say what it should say instead. The corrected version publishes and the original stays visible beside it, so a reader can see that a view changed and when.

This applies in both directions. A customer whose complaint was resolved and who wants to say so gets the same treatment as one who was satisfied at first and is not any more. What is not available is quiet removal, because the no-deletion rule is what makes every other promise on this site worth reading.

## How do I dispute a review someone else left?

Write to support@peptriva.com with the review, the reason you believe it is inaccurate, and anything that supports the point. Two outcomes are possible, and disappearance is not one of them. A dispute that succeeds produces a note published on the review, dated and stating what was established. A dispute that does not succeed leaves the review as it stands, and you are told why.

This route exists for readers and for customers. It does not exist for Peptriva: no review is removed or amended at the request of anyone inside the company.

## How do I raise a claim rather than a review?

A claim is different from a review, and the published terms govern it[^3]. Four routes exist: damaged shipment, incorrect or missing items, lost in transit or delivered and not received, and an out-of-specification batch. The window is 30 days from delivery, or from the carrier-marked delivery date.

Include the order number, photographs of the parcel, the vial, and the label where the complaint concerns damage or the wrong item, and the lot code where it concerns the material. Claims are answered within 5 business days. Approved refunds are issued to the original payment method within 7 to 10 business days of approval, and where a reship is the right remedy, one free reship per incident is available subject to availability.

For an out-of-specification claim there is no claim form and no product return. If a shipped batch fails any specification published on its certificate, the affected units are replaced from the next conforming batch and the purchase price is refunded, and you may substantiate the failure with your own third-party laboratory report[^1][^3].

Two things a claim cannot obtain, said plainly: there are no returns of any kind, opened or unopened, and there is no route for a change of mind. Raising a claim never affects whether a review of yours is published, and settling one never requires you to withdraw it.

## Where the company actually is

| | |
| --- | --- |
| Seller of record | Wayne Ventures SEZC, a Cayman Islands company trading as Peptriva |
| Registered office | 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103, Cayman Islands |
| Orders ship from | 14516 Garfield Ave, Paramount, California 90723, United States |
| Telephone | 1-656-269-7377 |
| Support | support@peptriva.com |
| General enquiries | hello@peptriva.com |
| Hours | Monday to Friday, 9am to 5pm CT |
| Governing law | Cayman Islands, AAA arbitration rules |

Source for the addresses, telephone number, and hours is the published contact page[^7]; for the entity and governing law, the terms and conditions[^3].

## What this page cannot do for you

It cannot get a review taken down. It cannot make a claim succeed outside the four published routes or outside the 30 day window. It cannot supply an outside opinion of Peptriva, because none exists yet: no vendor-rating listing covers the company, and this record is published by the company itself[^8]. And it cannot answer a question about the material by pointing at a review. For that, the certificate for the lot you received is on the public ledger under its accession number[^1].
`,
  },
];
