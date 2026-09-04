// The Peptriva Review: ten pages, one verdict.
//
// Every figure on these pages is traceable to shared/facts.mjs. Nothing is
// estimated, and nothing appears here that is not on a certificate, in the
// published terms, or in the order system.

export const pages = [
  {
    path: '/',
    navLabel: 'Home',
    title: 'Peptriva Review 2026: One Verdict on the Testing Record',
    description:
      'One verdict on the Peptriva record: a two-certificate gate enforced in the order system, eight publishable lots, one named laboratory, and the gaps stated.',
    h1: 'Peptriva, reviewed',
    kicker: 'THE SINGLE VERDICT / 2026',
    standfirst:
      'A first-party review of a research-peptide supplier, written against its own paperwork. One score, justified criterion by criterion, with the weak half of the record named as plainly as the strong half.',
    cover: true,
    cta: [
      { label: 'Read the verdict', href: '/verdict' },
      { label: 'See the purity results', href: '/purity-results' },
    ],
    coverBlocks: `:::verdict {"label":"The record","score":"4.1","of":"5","band":"Strong on method, thin on history","note":"A two-certificate gate enforced as a code condition, over an archive of fourteen certificates and one testing round. The method is better than the category standard. The history is shorter than any competitor worth comparing it to."}
:::

:::stats {"items":[["LOTS IN STOCK","13"],["LOTS WITH AN INDEPENDENT CERTIFICATE","13"],["CERTIFICATES ON FILE","14"],["PURITY RANGE, PUBLISHABLE LOTS","99.58 to 99.90 percent"],["INDEPENDENT LABORATORY","Freedom Diagnostics"],["TESTING ROUNDS ON FILE","1"]]}
:::
`,
    body: `## The lead

Peptriva scores 4.1 out of 5 on this record, and the two halves of that number matter more than the number. The method is stronger than the category standard: a lot cannot enter sellable stock until two separate certificates exist for it, and that condition is enforced as a code condition inside the order system rather than promised in policy copy. The history behind the method is thin. Fourteen certificates cover thirteen lots, and every independent certificate on file comes from a single submission, received on 30 June 2026 and reported on 2 July 2026[^1][^2]. A supplier with years of archived batches has something this record does not have, and no amount of method design fixes that.

## Who publishes this

Peptriva publishes this site about Peptriva. That is the first fact on the page because it changes how everything after it should be read. This is a first-party record, not an outside assessment, and it is not written by a third party. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials treats a company-controlled review website that presents itself as neutral as a deceptive practice, so this one does not present itself as neutral[^8]. What it offers instead is the paperwork, the accession numbers, and the checks a reader can run without taking our word for anything.

## What the query "Peptriva review" is actually asking

Someone typing that phrase wants one thing: is the material what the label says it is, and is the company behind it going to behave when something goes wrong. Those are documentary questions, not opinion questions. The first is answered by certificates and by the rule that decides which lots may be sold. The second is answered by the published terms of sale, which are unusually restrictive in one direction and unusually specific in another. This site answers both in that order, and then says what the answers do not cover.

## What the record contains

- Fourteen certificates on file, covering thirteen lots, with twelve rows on the public ledger[^1].
- Thirteen products in stock, and thirteen of thirteen carrying an independent third-party certificate[^1][^5].
- Forty products listed in the catalogue, most of them not currently in stock[^5].
- One independent laboratory of record, Freedom Diagnostics of Franklin, Tennessee, named on every published certificate[^2].
- One testing round: samples received 30 June 2026, results reported 2 July 2026[^1].
- Purity across the eight publishable lots running from 99.58 percent to 99.90 percent by HPLC-UV, area percent[^1].

## What we examined

We read the certificate ledger row by row, the laboratory's reported values for each lot, the published terms of sale and shipping policy, the catalogue, and the code path in the order system that decides whether a received lot becomes sellable stock. We compared what the storefront claims against what the certificates actually say, and where the storefront claims more than the paperwork supports, this network drops the claim rather than repeating it. The clearest example: the storefront asserts laboratory accreditation in several places, and no certificate, scope number, or accrediting body exists to back it. These pages therefore say "independent third-party laboratory" and name it, and claim nothing further[^2].

## What actually makes this record unusual?

The two-certificate gate. Most vendors in this category promise per-batch testing, which is a policy statement, and policy statements are only as good as the person following them on a bad week. Peptriva expresses the requirement as a condition in the purchase-order sync that moves received inventory into sellable stock: a lot clears only when a production certificate and an independent certificate are both on file for it. In the source it reads as \`lotClearedToSell = lotHasManufacturerCoa() AND lotHasIndependentCoa()\`, in \`apps/backend/src/lib/sync-po-to-medusa.ts\`. The material is tested and released once by the production facility, and tested again by an independent laboratory after it arrives at the United States distribution facility[^1]. One exemption exists, and it is disclosed on this site: the lab solvent clears on the independent certificate alone, because no production certificate is issued for an off-the-shelf USP solvent.

That is a stronger claim than per-batch testing, and it is worth being precise about why. Per-batch testing describes an activity. A gate describes a state a lot must reach before anyone can buy it. The second one is checkable, and the check is the same one a reader can run: every product in stock should have a ledger row, and today thirteen of thirteen do[^1][^5].

## Is Peptriva legitimate?

The company is identifiable, which is more than several of its competitors manage. The seller of record is Wayne Ventures SEZC, a Cayman Islands company trading as Peptriva, with a registered office in George Town and a distribution address at 14516 Garfield Ave, Paramount, California 90723[^3][^7]. Orders ship from that address by FedEx 2-Day with tracking, to United States destinations only[^4]. There is a telephone number, 1-656-269-7377, and support hours of Monday to Friday, 9am to 5pm CT[^7]. The terms of sale name Cayman Islands law and AAA arbitration rules, which is a real disclosure and also a real limitation on a buyer's remedies, and this review records it as both[^3].

Everything sold is for in vitro research use only. It is not a drug, food, cosmetic, supplement, or device, it is not approved by the FDA, and it is not for human or veterinary use by any route[^3]. Buyers must be 21 or over and must attest that they are a qualified researcher before an order completes[^3].

## What this record does not establish

- **One testing round, not a testing history.** Every independent certificate on file comes from the same submission window, received 30 June 2026 and reported 2 July 2026. Every-lot testing is currently a rule in the order system, not a long series of repeated rounds[^1].
- **A small archive.** Fourteen certificates covering thirteen lots. Established competitors publish hundreds. The claim worth making here is coverage, not volume[^1].
- **No outside vendor-rating listing.** Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification. That is a real absence, and those listings are earned over time.
- **A young company.** The domain was registered on 30 April 2026. Longevity is evidence, and it is evidence Peptriva cannot offer.
- **No accreditation certificate published.** The laboratory is named and its certificates are published. Its accreditation scope is not published, so this record does not assert it[^2].
- **Not sterile, and no sterility assay exists.** The five-assay panel covers identity, purity, net content, endotoxin, and appearance. The published terms state the material is not sterile[^3].

## The verdict in one line

Peptriva is a young supplier with an unusually well-designed release rule and an unusually short record of using it, and a buyer who values method over track record will find it convincing while a buyer who values track record will not.

## The five sections of this review

:::indexCards {"cards":[{"href":"/testing-record","title":"The testing record","text":"The two-certificate gate, the named laboratory, the five-assay panel, and what each assay actually catches."},{"href":"/purity-results","title":"The purity results","text":"Eight publishable lots with purity, lot number, accession number, and net content, and what an area percent figure means."},{"href":"/transparency","title":"What is published and what is not","text":"The ledger, the accession numbers a reader can check, the certificate that is held back, and the claims deliberately not made."},{"href":"/buying-terms","title":"The terms a buyer gets","text":"No returns of any kind, four claim windows, the Out-of-Spec Guarantee in full, free shipping, and the age gate."},{"href":"/verdict","title":"The verdict","text":"4.1 out of 5, justified criterion by criterion, with the case for and the case against set out separately."}]}
:::

## What customers say

Customer reviews appear on this network only when they can be matched to an order record and shown with that order attached. Nothing is filtered by rating, nothing is edited for tone, and nothing is written by us. Any reviews that meet those conditions appear below.

:::reviews {"limit":6}
:::

Where nothing appears above, no review has yet cleared that check, and this site will not fill the space with an invented one. The evidence on the rest of these pages stands on certificates rather than on testimony, which is the more useful way round.
`,
  },
  {
    path: '/testing-record',
    navLabel: 'Testing',
    title: 'Peptriva Testing Record: The Two-Certificate Gate | Review',
    description:
      'How Peptriva lots clear for sale: two certificates required in the order system, one named third-party laboratory, a five-assay panel, one testing round.',
    h1: 'The testing record',
    kicker: 'THE METHOD',
    standfirst:
      'A lot cannot enter sellable stock until both a production certificate and an independent certificate exist for it. That rule is the strongest thing in this record, and it has been running for one testing round.',
    body: `## The lead

The differentiator in the Peptriva record is not that batches get tested. Every vendor in this category says that. The differentiator is where the requirement lives: it is a condition in the code that moves received inventory into sellable stock, so a lot with only one certificate cannot be sold even if someone wants to sell it[^1]. That is a structural claim rather than a promise, and it is the reason this review scores the method highly. It is also running over an archive of fourteen certificates from a single submission, which is the reason the review does not score the record highly.

This page is published by Peptriva about its own testing. Read it as the company's account of its own procedure, checked against the certificates it publishes[^1][^8].

## What lab tests Peptriva products?

Freedom Diagnostics, an independent third-party laboratory in Franklin, Tennessee, United States[^2]. It is named on every published certificate, with the client of record given as Peptriva Research and the report signed by the Principal Chemist. Samples for the certificates currently on file were received on 30 June 2026 and reported on 2 July 2026[^1]. The laboratory has its own public web presence, which means the name on the certificate is checkable rather than decorative[^2].

One thing this record does not claim: accreditation. No accreditation certificate, scope number, or accrediting body appears in anything Peptriva publishes, so this review says "independent third-party laboratory" and names it, and stops there. If a scope certificate is published later, that is a material improvement and this page will say so.

## How does the two-certificate gate work?

In two tests, separated by a shipment.

1. **The production release.** The manufacturing facility tests and releases the batch. That certificate is held on file. It is not published, and the reason is given in full on the transparency page.
2. **The arrival re-test.** When the lot reaches the United States distribution facility, a sample goes to the independent laboratory for a full re-test against the same panel. That certificate is the one published on the ledger[^1].
3. **The gate.** Sellable stock is created only when both are present. In the purchase-order sync the condition reads \`lotClearedToSell = lotHasManufacturerCoa() AND lotHasIndependentCoa()\`, in \`apps/backend/src/lib/sync-po-to-medusa.ts\`. A lot missing either certificate stays out of stock.

The second test is the one that matters analytically, because it is the one that could disagree with the first. A production certificate describes material as it left the production facility. An independent certificate describes the same material after it has been packed, shipped, and received somewhere else, tested by a party with no stake in the batch passing.

## Which lots does the gate cover?

Every sellable lot. Thirteen lots are in stock and thirteen carry an independent certificate[^1][^5]. Fourteen certificates cover those thirteen lots, because the lab solvent carries two accession numbers for its two separate tests. Twelve rows appear on the public ledger[^1].

The same panel covers the restricted tier as well as the eight lots this review tables. Those certificates are real and public on the ledger, and this network does not build pages around them or print their purity figures, for reasons set out on the purity page. A reader who wants them can read them at the source[^1].

## The five-assay panel

| Assay | Method | What it establishes |
| --- | --- | --- |
| Identity | LC-MS | The material is the compound named on the label |
| Purity | HPLC-UV, area percent | The headline purity figure on the certificate |
| Net content | Measured mass in the vial | How much material is actually there against what the label says |
| Endotoxin | LAL, USP <85>, run in duplicate | Bacterial endotoxin at or below 0.05 EU/mL[^6] |
| Appearance | Visual | The recorded physical description of the material |

## What each assay catches

**Identity by LC-MS** catches the failure mode that matters most and is discussed least: material that is pure, and pure something else. Purity without identity is a number about an unknown.

**Purity by HPLC-UV** catches contamination and truncated synthesis products, reported as area percent, which is discussed in detail on the purity page because the unit is widely misread.

**Net content** catches short fill. This is the assay most vendor certificates omit entirely, and its absence is why a buyer can receive a vial of genuinely 99 percent material and still be short of what the label promised. Peptriva reports a measured mass on every certificate, including blends, where each component is weighed separately[^1].

**Endotoxin by LAL under USP <85>**, run in duplicate, measures bacterial endotoxin against a specification of 0.05 EU/mL or lower[^6]. It is a contamination measure, not a claim about the material being safe for anything, and this review does not stretch it into one.

**Appearance** is the cheapest assay on the panel and the one a buyer can verify without equipment. The GHK-Cu lot is recorded as a blue lyophilized powder, and blue is what a buyer should see[^1].

## Why is net content the unusual one?

Because it converts a percentage into an amount. Most vendor certificates in this category report purity but never quantity, which means the buyer has a strong claim about composition and no claim at all about mass. A certificate that says 99.61 percent and says nothing about how much is in the vial has answered half a question. The Peptriva certificates report both, and for blends they report each component: the GLOW lot is reported as GHK-Cu 60.42 mg, BPC-157 11.12 mg, and Thymosin Beta-4 11.83 mg on lot GLOW70-260504[^1].

That is also the assay a buyer is most able to hold the company to, because it is a number with a specification attached, and a failure against it triggers the Out-of-Spec Guarantee described in the buying terms.

## The solvent exemption

One product does not go through the two-certificate gate as written: the lab solvent. It clears on the independent certificate alone, because the production facility does not issue a certificate for an off-the-shelf USP solvent. This review treats the exemption as reasonable and discloses it anyway, because an undisclosed exception to a rule is worse than the exception. The solvent lot, BA10-260000, carries two accession numbers, 2606300390 and 2606300391, covering microbial analysis by PCR, reported as no detectable microbial DNA, and endotoxin by LAL under USP <85>. Both pass. No purity assay applies to a solvent, and none is reported[^1][^6].

## What the testing record does not establish

- **That the panel is exhaustive.** It is five assays. It does not include a sterility assay, and the terms of sale state the material is not sterile[^3].
- **That the results are reproducible over time.** One submission window, received 30 June 2026 and reported 2 July 2026, is not a time series. Repeatability is exactly what a single round cannot show[^1].
- **That the laboratory holds any particular accreditation.** It is named, and its certificates are published. Nothing further is claimed[^2].
- **That the production certificate says the same thing as the independent one.** The production certificates are held on file and not published, so a reader cannot compare the two sets. The gate requires both to exist. It does not publish both.
- **Anything about what the material does.** Identity, purity, net content, endotoxin, and appearance are chemistry. They carry no implication about any biological outcome, and this review makes none.

## What would strengthen it

A second independent submission, months after the first, on lots already tested once, published alongside the originals so the two rounds can be compared. That single addition would convert the strongest claim on this page from a design argument into an evidentiary one. Publishing the laboratory's accreditation scope, if one exists, would do the second most. Neither has happened yet, and this review does not score either as though it had.
`,
  },
  {
    path: '/purity-results',
    navLabel: 'Purity',
    title: 'Peptriva Purity Results: Eight Lots, Lab-Reported | Review',
    description:
      'Eight Peptriva lots with purity by HPLC-UV, lot number, laboratory accession number, and measured net content, plus what an area percent figure does not mean.',
    h1: 'The purity results',
    kicker: 'THE NUMBERS',
    standfirst:
      'Eight lots, 99.58 to 99.90 percent by HPLC-UV, each with a lot number, an accession number, and a measured mass. Here is what those figures establish and what they do not.',
    body: `## The lead

Every publishable lot on file reports at or above 99.58 percent purity by HPLC-UV, area percent, and every one reports a measured net content alongside it[^1]. That combination is the useful part. A purity figure alone describes composition and says nothing about quantity, and a large share of certificates in this category stop there. The table below is the complete set of publishable lots, reproduced from the certificate ledger with accession numbers so a reader can pull the source document rather than trust the transcription[^1].

This page is published by Peptriva about its own results. The numbers are the laboratory's, the transcription is ours, and the accession numbers exist so the two can be separated[^8].

## The eight publishable lots

| Product | Purity | Lot | Accession | Net content reported |
| --- | --- | --- | --- | --- |
| KPV | 99.90% | KPV10-260504 | 2606300404 | 11.30 mg |
| CJC-1295 / Ipamorelin | 99.86% | CP10-260428 | 2606300406 | Ipamorelin 5.14 mg, CJC-1295 5.26 mg |
| GHK-Cu | 99.85% | CU50-260503 | 2606300412 | 57.46 mg |
| TB-500 (Thymosin Beta-4) | 99.80% | TB500(B4)-260428 | 2606300398 | 13.28 mg |
| MOTS-c | 99.73% | MS10-260508 | 2606300410 | 11.16 mg |
| NAD+ | 99.61% | NJ500-260503 | 2606300392 | 527.61 mg |
| GLOW Blend | 99.60% | GLOW70-260504 | 2606300414 | GHK-Cu 60.42 mg, BPC-157 11.12 mg, Thymosin Beta-4 11.83 mg |
| BPC-157 | 99.58% | BC10-260504 | 2606300400 | 11.24 mg |

All figures are the independent laboratory's reported values on certificates received 30 June 2026 and reported 2 July 2026[^1][^2]. The GHK-Cu lot is additionally recorded as a blue lyophilized powder under the appearance assay.

## What does an area percent figure actually mean?

It is a ratio of peak areas on a chromatogram, not a mass fraction of the vial. HPLC-UV separates the sample into components, measures the area under each detected peak, and reports the target peak as a percentage of the total detected area. So 99.58 percent on lot BC10-260504 means the target compound accounts for 99.58 percent of what the detector saw, with the remaining 0.42 percent distributed across other detected peaks[^1].

Two consequences follow, and both cut against reading the number too generously. First, anything the ultraviolet detector does not see is not in the denominator: residual water, counter-ions, and salts are not part of an area percent calculation. Second, a purity figure says nothing about which compound is in the main peak. That is why identity by LC-MS sits on the same panel, and why a purity number quoted without an identity assay is a weaker document than it looks.

The practical reading: 99.58 percent and 99.90 percent are both high figures, the gap between them is smaller than it appears, and neither is meaningful without the identity result and the net content on the same page.

## Why net content is on this table

Because it is the number that converts a percentage into an amount, and because most vendor certificates never report it. Net content is a measured mass in the vial, weighed against what the label declares. The NAD+ lot reports 527.61 mg, the GHK-Cu lot 57.46 mg, and the two-component CP10-260428 lot reports each component separately at 5.14 mg and 5.26 mg[^1].

A buyer holding a certificate with purity but no net content has no documentary claim about short fill. A buyer holding one with both has a specification that can fail, and a failure against a published specification is the trigger for the Out-of-Spec Guarantee set out in the buying terms[^3].

## What does the endotoxin result mean?

Every certificate carries a bacterial endotoxin result by LAL, run in duplicate, against United States Pharmacopeia General Chapter <85>, with a specification of 0.05 EU/mL or lower[^1][^6]. That is a contamination measure against a published standard, run twice rather than once.

It is worth being exact about the boundary of that result. Endotoxin testing measures bacterial endotoxin. It is not a sterility assay, no sterility assay appears on this panel, and the published terms state the material is not sterile[^3]. A passing endotoxin result and a sterility claim are different documents, and this review does not treat the first as the second.

## The solvent lot

The lab solvent is tested differently because it is a different kind of product. Lot BA10-260000 carries two accession numbers, 2606300390 and 2606300391, covering microbial analysis by PCR, reported as no detectable microbial DNA, and endotoxin by LAL under USP <85>. Both pass. Appearance is recorded as clear liquid. No purity assay applies to a solvent, so none is reported, and this is the one product cleared to sell on the independent certificate alone[^1][^6].

## Why four compounds are not on this table

Four products sit on a restricted tier where active litigation risk in this category governs how they may be presented. Their certificates are real, public, and on the same ledger under the same panel from the same laboratory. This review does not build tables or examples around them and does not reprint their purity figures, because a review property organised around those four compounds becomes a marketing surface for them, whatever the surrounding text says.

What matters analytically is coverage, and coverage is complete: the same five-assay panel covers every sellable lot including the restricted tier, and every lot in stock has an independent certificate behind it[^1]. A reader who wants those specific figures should read them at the ledger, where they have always been[^1].

## What these numbers do not tell you

- **They do not describe every batch you could ever be shipped.** They describe these lots, tested once, in one submission window. A future lot is covered by the gate, not by this table[^1].
- **They do not establish reproducibility.** No lot here has been tested twice by the independent laboratory, so there is no second figure to compare a first against.
- **They do not carry any biological meaning.** Purity, identity, net content, endotoxin, and appearance are analytical chemistry. Nothing on this page implies an effect of any kind, and the material is sold for in vitro research use only, not for human or veterinary use[^3].
- **They are not sterility results.** No sterility assay was run and the terms state the material is not sterile[^3].
- **They are a transcription.** The certificate is the record; this table is a copy of it. Where the two disagree, the certificate wins and this page is wrong.

## How to check these yourself

Open the certificate ledger, find the row for the product, and match three things: the lot number, the accession number, and the reported net content[^1]. The accession number is the laboratory's own document identifier, which is the field a fabricated table is least likely to get right and the easiest one for a reader to compare against the certificate image. If a product is in stock and has no ledger row, that is the single most damaging fact anyone could find about this record, and it is checkable in under a minute[^1][^5].
`,
  },
  {
    path: '/transparency',
    navLabel: 'Transparency',
    title: 'Peptriva Transparency: What Is Published, What Is Not',
    description:
      'What the Peptriva record publishes, what a reader can verify unaided, which certificate is held back and why, and the claims this review refuses to make.',
    h1: 'What is published, and what is not',
    kicker: 'THE DOCUMENTARY RECORD',
    standfirst:
      'Transparency is not a quantity of documents. It is the ability of a stranger to check a claim without asking the company anything. Here is what passes that test, and what does not.',
    body: `## The lead

Half of the two-certificate gate is published and half is not. The independent certificate for every sellable lot is on the public ledger with a laboratory accession number attached[^1]. The production certificate that also has to exist before a lot clears is held on file and never published. That asymmetry is the single most important thing on this page, because it means one half of the strongest claim in this record rests on our word rather than on a document a reader can open. The reason for it is real and is set out below, and it is still an asymmetry.

## What a reader can check without asking us

- **Every lot in stock has a ledger row.** Thirteen products are in stock and thirteen carry an independent certificate. Twelve rows are published on the ledger, covering fourteen certificates across thirteen lots[^1][^5].
- **Every certificate names the same laboratory.** Freedom Diagnostics, Franklin, Tennessee, with the client of record given as Peptriva Research and the report signed by the Principal Chemist[^1][^2].
- **Every certificate carries an accession number.** The laboratory's own document identifier, not ours: 2606300404, 2606300406, 2606300412, 2606300398, 2606300410, 2606300392, 2606300414, 2606300400 for the eight publishable lots, and 2606300390 and 2606300391 for the solvent[^1].
- **Every certificate carries a date pair.** Received 30 June 2026, reported 2 July 2026, on every independent certificate on file[^1].
- **Every certificate reports the same five assays.** Identity, purity, net content, endotoxin, appearance, with the endotoxin test run in duplicate against USP <85>[^1][^6].
- **The seller of record is named.** Wayne Ventures SEZC, registered at 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103, Cayman Islands, trading as Peptriva, with a United States distribution address at 14516 Garfield Ave, Paramount, California 90723[^3][^7].
- **The terms of sale are published in full**, including the parts that are unfavourable to a buyer[^3].

The accession number is the field worth checking first. It is the identifier a fabricated table is least likely to get right, and matching it against the certificate is the fastest way for a reader to establish that the numbers on this site were copied rather than composed.

## Which certificate is held back, and why?

The production certificate. It is issued by the manufacturing facility, it is required by the gate before a lot can be sold, and it is not published. Two reasons, stated plainly rather than implied.

First, the production certificate identifies the manufacturing facility, and that relationship is not disclosed. Naming a production source in this category invites both direct approach and competitive interference, and Peptriva treats the supply relationship as confidential. This review does not endorse that choice as ideal for the reader. It is a commercial decision, and it costs the record something.

Second, the production certificate is the weaker of the two documents evidentially. It describes material as released by the party with an interest in it passing. The certificate published is the one produced by a party with no stake in the outcome, after the material has been packed, shipped, and received somewhere else. If only one of the two were going to be public, the independent one is the correct choice.

What a reader is left with: they can verify that the independent half of the gate happened for every sellable lot, and they must take our word that the production half happened too. That is where this record asks for trust, and it is better for the page to say so than for the reader to discover it.

## What is deliberately not claimed

This is the shorter list at most vendors and the more informative one. Each item below is a claim Peptriva either makes elsewhere or could easily make, and which this network refuses because the supporting document does not exist.

- **No accreditation claim.** The storefront asserts laboratory accreditation in several places. No certificate, scope number, or accrediting body exists to support it. These pages say "independent third-party laboratory" and name it[^2].
- **No sterility claim.** No sterility assay was run, and the published terms state the material is not sterile[^3].
- **No cold-chain claim for the parcel.** Lyophilized material is stable at ambient temperature in transit and ships in standard parcel packaging. The cold-chain description applies to the distribution facility where the independent re-test happens, not to the box a buyer receives[^4].
- **No origin claim.** This record does not describe the material as United States made. It describes where it is tested and where it ships from, which are different questions[^4][^7].
- **No customer or order count.** No figure exists on these sites for how many people have bought anything, because a number of that kind published by the company selling the goods is worth nothing without an audit.
- **No claim of independence.** Peptriva publishes this site about Peptriva. Under the Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, a company-controlled review site that suggests otherwise is a deceptive practice, and the disclosure appears on every page for that reason[^8].
- **No biological claim of any kind.** Nothing here describes an effect. The material is sold for in vitro research use only, is not approved by the FDA, and is not for human or veterinary use by any route[^3].

## How this compares to the category norm

The common pattern among research-peptide vendors is a certificate page with images and no accession numbers, purity figures without identity or net content, and a laboratory that is either unnamed or named without a verifiable presence. Against that baseline the Peptriva ledger is better on four specific counts: the laboratory is named and checkable[^2], the accession numbers are printed, net content is reported, and the endotoxin test runs against a citable pharmacopeial standard in duplicate[^6].

Against a serious baseline rather than a category baseline, it has one clear gap besides the held-back certificate: the archive is fourteen certificates deep from a single submission window. Depth of archive is the thing established competitors have and this record does not[^1].

## What transparency does not buy

- **It does not make the record long.** Publishing everything from one testing round still leaves one testing round[^1].
- **It does not substitute for outside verification.** Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification. Publishing your own documents is not the same as someone else grading them.
- **It does not make the terms generous.** The published terms include no returns of any kind, and publishing that clearly is honest without being favourable[^3].
- **It does not resolve the confidential half of the gate.** Until the production certificate is published or independently audited, the two-certificate claim is half documented and half asserted.

## The standing rule on this network

Nothing goes on a page here that is not on a certificate, in the published terms, in the shipping policy, in the catalogue, or in the order-system code that governs stock. That rule is what removed the accreditation language, the sterility language, the origin language, and the scale figures that would otherwise have been easy to write. It is also what keeps the limits sections on every page: a record that only flatters is not a record, it is copy.
`,
  },
  {
    path: '/buying-terms',
    navLabel: 'Terms',
    title: 'Peptriva Terms Reviewed: Returns, Claims, Out-of-Spec',
    description:
      'The terms a Peptriva buyer gets: no returns of any kind, four claim windows at 30 days, the Out-of-Spec Guarantee in detail, free shipping, and the age gate.',
    h1: 'The terms a buyer actually gets',
    kicker: 'THE CONDITIONS OF SALE',
    standfirst:
      'Restrictive in one direction and unusually specific in another. No returns of any kind, four narrow claim windows, and one remedy that is stronger than the category norm.',
    body: `## The lead

Peptriva's published terms are more restrictive than most consumer expectations and more specific than most competitor terms, and both of those are true at once[^3]. There are no returns of any kind, opened or unopened. In exchange there are four defined claim windows, a five business day response commitment, and an Out-of-Spec Guarantee that pays out against the published certificate specification without a return and without a claim form. A buyer who reads only the first sentence will think the terms are hostile. A buyer who reads all of them will find the remedy that actually matters in this category is the one that is present.

This page is published by Peptriva about its own terms. The terms themselves are the authority; where this page and the terms differ, the terms govern[^3][^8].

## Are there returns? No.

No returns of any kind, opened or unopened[^3]. That is stated plainly in the published terms rather than buried in a schedule, and this review counts the plainness as a point in its favour and the policy itself as a point against.

The rationale is coherent for the category. Once a vial leaves a controlled distribution facility, nobody can certify what happened to it, and material that comes back cannot re-enter sellable stock under a rule that requires two certificates for anything that does. A vendor that accepts open returns and then resells them has a worse problem than a vendor that refuses them. That does not make the policy generous. It makes it consistent with the rest of the record.

## What are the four claim windows?

Four, each running 30 days from delivery, or from the carrier-marked delivery date[^3]:

1. **Damaged shipment.**
2. **Incorrect or missing items.**
3. **Lost in transit, or delivered and not received.**
4. **Out-of-specification batch.**

Claims are answered within 5 business days. Approved refunds are issued to the original payment method within 7 to 10 business days of approval. Where a reship is the remedy, the terms provide one free reship per incident, subject to availability[^3].

Note what the list excludes, because that is the operative part: there is no window for changing your mind, no window for ordering the wrong product, and no window for a product that arrives exactly as described. The four windows cover failures of the shipment or of the material against its own specification, and nothing else.

## The Out-of-Spec Guarantee in detail

This is the strongest term in the document and the one most worth reading carefully. If a shipped batch fails any published certificate specification, Peptriva replaces the affected units from the next conforming batch and refunds the purchase price. There is no claim form and no product return. A buyer may substantiate the failure with their own third-party laboratory report[^3].

Four things in that paragraph are unusual for the category.

- **The specification is published, so it is falsifiable.** The certificate states purity, net content, endotoxin, identity, and appearance for a named lot. A buyer testing independently has a fixed number to test against, not a marketing adjective[^1].
- **The buyer's own laboratory counts.** The company does not reserve sole authority over whether its own product failed. That is the clause that turns the guarantee from a gesture into a remedy.
- **Replacement and refund, not one or the other.** The remedy is units from the next conforming batch plus the purchase price back.
- **No return required.** A buyer does not have to ship suspect material back to claim, which matters because return shipping is where most guarantees quietly die.

The limits on it are equally clear. It pays against a published specification, so a lot with no published certificate has nothing to fail against, which is precisely why the two-certificate gate exists upstream. It runs on the same 30 day window as the other three claim types[^3]. And it is a commercial remedy from a young company, which is a different thing from a remedy backed by a long record of having been paid out.

## What does shipping cost?

Nothing. Free on every order, with no cart minimum[^4]. Orders ship by FedEx 2-Day with tracking to United States destinations only, including the District of Columbia. There is no international shipping[^4].

Orders placed before 5:00 p.m. ET on a business day ship the same business day. Standard processing is 1 to 2 business days from payment clearance and researcher attestation, so the attestation step is part of the timeline rather than a formality bolted on at checkout[^4].

On packaging, the record says less than a buyer might expect and says it accurately. Lyophilized material is stable at ambient temperature in transit and ships in standard parcel packaging. Peptriva does not claim cold-chain shipping. The cold-chain description applies to the distribution facility where the independent re-test happens, not to the parcel[^4].

## The age gate and the attestation

Buyers must be 21 or over and must attest that they are a qualified researcher before an order completes[^3]. Everything sold is for in vitro research use only. It is not a drug, food, cosmetic, supplement, or device. It is not approved by the FDA, and it is not for human or veterinary use by any route[^3].

An attestation is a self-declaration, and this review is not going to pretend it is a credential check. What it does is make the condition of sale explicit and refusable, which is the part a buyer should notice: the terms state what the material may be used for, and buying under a false attestation is the buyer stepping outside the terms rather than the company failing to mention them.

## Who is the seller, and whose law applies?

The seller of record is Wayne Ventures SEZC, a Cayman Islands company trading as Peptriva, with a registered office at 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103[^3]. Orders ship from 14516 Garfield Ave, Paramount, California 90723, United States[^7]. Support runs Monday to Friday, 9am to 5pm CT, by telephone on 1-656-269-7377 and by email at support@peptriva.com[^7].

The terms name Cayman Islands governing law and AAA arbitration rules[^3]. A buyer should read that as a real constraint on remedies: a dispute that cannot be resolved through the claim windows is an arbitration under a foreign governing law, not a small claims filing down the road. It is disclosed, it is legitimate, and it is not in the buyer's favour. All three are true.

## What the terms do not give you

- **No returns, at all.** Not for change of mind, not for an unopened vial, not for a mistaken order[^3].
- **No window past 30 days.** All four claim types run 30 days from delivery or from the carrier-marked delivery date[^3].
- **No international shipping.** United States destinations only[^4].
- **No cold-chain parcel claim.** Ambient shipping in standard parcel packaging, described as such[^4].
- **No local forum.** Cayman Islands law and AAA arbitration rules govern[^3].
- **No implied fitness for anything.** The material is sold for in vitro research use only, with no representation about any use beyond that[^3].
`,
  },
  {
    path: '/verdict',
    navLabel: 'Verdict',
    title: 'The Peptriva Verdict: 4.1 of 5, Justified in Full',
    description:
      'Peptriva scores 4.1 out of 5 on this record. Six weighted criteria, the case for and the case against set out separately, and who this supplier does not suit.',
    h1: 'The verdict: 4.1 out of 5',
    kicker: 'THE JUDGEMENT',
    standfirst:
      'Strong on method, thin on history. Six criteria, weighted, scored against the documentary record and against nothing else.',
    body: `:::verdict {"label":"The record","score":"4.1","of":"5","band":"Strong on method, thin on history","note":"81.7 of 100 across six weighted criteria. The release rule is better than the category standard. The archive behind it is fourteen certificates from a single testing round."}
:::

## The lead

Peptriva earns 4.1 out of 5 because it does the hard structural thing well and the easy longitudinal thing not at all. The hard thing is the release rule: two certificates required before a lot becomes sellable stock, enforced as a code condition in the order system rather than as a sentence in a policy page, with the independent half published for every lot in stock[^1]. The easy thing, which only time provides, is a run of testing rounds that shows the rule holding over months. Peptriva has one round, received 30 June 2026 and reported 2 July 2026, on an archive of fourteen certificates covering thirteen lots[^1]. A score that ignored either half would be useless.

This verdict is published by Peptriva about Peptriva. It is not an outside opinion and does not stand in for one[^8]. What it can be held to is arithmetic: the criteria, the weights, and the reasons are all on this page, so a reader who disagrees can see exactly which number to argue with.

## The score, criterion by criterion

:::scores {"rows":[{"name":"Testing method and coverage","weight":"35%","score":96,"of":100,"note":"Two certificates required before a lot can be sold, enforced in the order system. Five assays including net content and duplicate endotoxin against USP <85>. Thirteen of thirteen lots in stock carry an independent certificate."},{"name":"Documentary transparency","weight":"20%","score":88,"of":100,"note":"Laboratory named and checkable, accession numbers printed, dates published, terms published in full including the unfavourable parts. Loses points because the production certificate is held back, so half the gate is asserted rather than shown."},{"name":"Buyer terms and remedies","weight":"15%","score":80,"of":100,"note":"An Out-of-Spec Guarantee that pays against a published specification, accepts the buyer's own laboratory report, and requires no return. Set against no returns of any kind, a 30 day ceiling on all four claim windows, and a foreign governing law."},{"name":"Fulfilment and delivery terms","weight":"10%","score":90,"of":100,"note":"FedEx 2-Day with tracking, free on every order with no cart minimum, same business day on orders before 5:00 p.m. ET. United States only, and no cold-chain claim is made for the parcel."},{"name":"Operating history","weight":"10%","score":50,"of":100,"note":"Domain registered 30 April 2026, one testing round on file, fourteen certificates. Nothing here is a failure. It is simply an absence of elapsed time, and elapsed time is evidence."},{"name":"Outside corroboration","weight":"10%","score":45,"of":100,"note":"One genuine outside party appears in the record: the third-party laboratory, named and publicly traceable. No vendor-rating listing, no published accreditation scope, and no audit of the confidential half of the gate."}]}
:::

The weighted total is 81.7 of 100, which is 4.1 out of 5 to one decimal place. Testing carries the largest weight because in this category the identity and content of the material is the question, and everything else is a preference. Operating history and outside corroboration together carry 20 percent, which is the largest single penalty in the sheet and the honest one.

## The case for

**The gate is a structure, not a promise.** Per-batch testing is what everyone says. A condition in the purchase-order sync that refuses to create sellable stock without both a production certificate and an independent certificate is a different kind of claim, because it fails closed. A lot missing either document does not reach the storefront.

**The published half is the harder half.** The certificate Peptriva publishes is the one produced by the outside laboratory after the material was packed, shipped, and received at a different facility. That is the test with the potential to disagree with the production release, which makes it the test worth publishing[^1].

**The panel includes the assay most vendors skip.** Net content, a measured mass in the vial against the label declaration, appears on every certificate, and on blends each component is weighed separately[^1]. Purity without quantity answers half a question and the category mostly answers half.

**The laboratory is named and traceable.** Freedom Diagnostics of Franklin, Tennessee, appears on every certificate with an accession number a reader can match against the source document[^1][^2].

**The terms are specific where it counts.** The Out-of-Spec Guarantee pays against a published specification, accepts a buyer's own third-party laboratory report as substantiation, and requires no product return[^3]. That is a remedy rather than a gesture.

**The claims stop where the documents stop.** No accreditation is claimed on this network, no sterility, no origin, no scale figure. That restraint is checkable and it is unusual.

## The case against

**One testing round is not a testing history.** Every independent certificate on file comes from the same submission window[^1]. Reproducibility is precisely the property a single round cannot demonstrate, and reproducibility is what a buyer is actually buying when they buy testing.

**The archive is small.** Fourteen certificates covering thirteen lots, twelve rows on the ledger[^1]. Established competitors publish hundreds. Coverage is complete; volume is not there.

**Half the gate is confidential.** The production certificate is required, and it is not published. A reader can verify the independent half and must take our word for the other. Until that changes, the strongest claim in the record is half documented.

**The company is four months old on the public record.** The domain was registered on 30 April 2026. Longevity is evidence and it cannot be manufactured.

**No outside grader has looked.** Peptriva does not appear on the peptide vendor-rating sites that assess suppliers on certificate cadence and laboratory verification. That absence is real and this review does not talk around it.

**The terms are restrictive.** No returns of any kind, all four claim windows capped at 30 days from delivery, United States shipping only, Cayman Islands governing law and AAA arbitration rules[^3][^4].

## Who this supplier suits

A buyer whose first question is whether the material matches its label, who will read a certificate, who cares that net content is reported and that the endotoxin test ran in duplicate against USP <85>, and who is prepared to weigh a well-designed release rule more heavily than a long trading history[^1][^6]. It also suits a buyer who values a remedy they can trigger with their own laboratory report over a returns policy they will never use[^3].

## Who it does not suit

A buyer who wants years of archived batches to scroll through. A buyer who wants a vendor already graded by an outside rating body. A buyer who wants to be able to send an unopened vial back, or who needs shipping outside the United States, or who wants a local forum for a dispute[^3][^4]. And anyone looking for a supplier that will describe what its products do, because nothing on this network describes an effect and the material is sold for in vitro research use only, not for human or veterinary use[^3].

## What would move the score

Three things, in order of how much they would move it. A second independent testing round on lots already tested once, published beside the first, would take testing and operating history up together and is the single highest-value addition available. Publishing the accreditation scope of the laboratory, if one exists, would strengthen outside corroboration. Some form of publication or audit of the production certificate, redacted enough to protect the supply relationship, would close the confidential half of the gate. None of the three has happened, and this score is calculated as though none has.

## The verdict

Peptriva has built the release rule a mature supplier would build and has been running it for one testing round. On the documentary record as it stands on 4 September 2026, that is worth 4.1 out of 5: better method than the category, less history than any competitor worth comparing it to, and a set of terms that is restrictive, specific, and published in full[^1][^3].
`,
  },
  {
    path: '/faq',
    navLabel: 'Questions',
    title: 'Peptriva Questions Answered: Testing, Terms, Shipping',
    description:
      'Questions about Peptriva answered from the record: the laboratory, the two-certificate gate, purity figures, returns, claims, shipping, and the named limits.',
    h1: 'Questions, answered from the record',
    kicker: 'THE ANSWERS',
    standfirst:
      'Every answer below is drawn from a certificate, the published terms, the shipping policy, the catalogue, or the order-system rule that decides which lots may be sold.',
    body: `## The lead

These are the questions the rest of this review answers in longer form, collected in one place and answered in the first sentence. Where an answer is unflattering, it is here too, because a question list that only contains easy questions is an advertisement. Peptriva publishes this page about itself, which is why every answer carries a source[^8].

## The company, and who publishes this

Who sells the material, who publishes this page, and the conditions a buyer accepts before an order completes.

:::faq {"items":[{"q":"Is Peptriva legitimate?","a":"The company is identifiable and its documents are checkable, which is the most a documentary record can establish. The seller of record is Wayne Ventures SEZC, a Cayman Islands company trading as Peptriva, shipping from 14516 Garfield Ave, Paramount, California 90723, with a published telephone number and support hours of Monday to Friday, 9am to 5pm CT[^3][^7]. Thirteen of thirteen lots in stock carry an independent third-party certificate on the public ledger[^1][^5]."},{"q":"Who publishes this review?","a":"Peptriva, about Peptriva. It is a first-party record and not an outside assessment, and it does not present itself as one. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials governs company-controlled review websites, which is why the disclosure appears on every page rather than once[^8]."},{"q":"Who can buy, and on what terms?","a":"Buyers must be 21 or over and must attest that they are a qualified researcher. Everything sold is for in vitro research use only. It is not a drug, food, cosmetic, supplement, or device, it is not approved by the FDA, and it is not for human or veterinary use by any route[^3]."},{"q":"Whose law governs a dispute?","a":"Cayman Islands law, under AAA arbitration rules, as stated in the published terms[^3]. That is a real constraint on a buyer's remedies and it is disclosed rather than hidden."},{"q":"How many products does Peptriva sell?","a":"Forty products are listed in the catalogue across categories including cytoprotective, GH secretagogues, peptide analogs, mitochondrial, copper peptides, nootropic and neuropeptide, melanocortin, senescence and antioxidant, and lab consumables. Thirteen are in stock, and listed prices run from $19.99 to $129.99[^5]."}]}
:::

## The laboratory and the two-certificate gate

The laboratory named on every certificate, the rule that decides which lots may be sold, and the assays that rule runs on.

:::faq {"items":[{"q":"What lab tests Peptriva products?","a":"Freedom Diagnostics, an independent third-party laboratory in Franklin, Tennessee, United States[^2]. It is named on every published certificate, with the client of record given as Peptriva Research and the report signed by the Principal Chemist[^1]."},{"q":"Is the laboratory accredited?","a":"This record does not claim it. No accreditation certificate, scope number, or accrediting body is published anywhere in the Peptriva record, so these pages say independent third-party laboratory, name it, and stop there[^2]."},{"q":"How many Peptriva lots have certificates?","a":"Fourteen certificates are on file covering thirteen lots, with twelve rows on the public ledger. Thirteen products are in stock and thirteen of thirteen have an independent certificate behind them[^1][^5]."},{"q":"What is the two-certificate gate?","a":"A lot cannot enter sellable stock until both a production certificate and an independent third-party certificate exist for it. It is enforced as a condition in the purchase-order sync that creates sellable inventory, not as a promise in policy copy, so a lot missing either document never reaches the storefront[^1]."},{"q":"Which tests are on the panel?","a":"Five: identity by LC-MS, purity by HPLC-UV reported as area percent, net content as a measured mass in the vial, bacterial endotoxin by LAL under USP General Chapter <85> run in duplicate against a specification of 0.05 EU/mL or lower, and appearance[^1][^6]."}]}
:::

## Purity, net content, and endotoxin

What the reported figures are, what the units actually mean, and the point at which each one stops saying anything.

:::faq {"items":[{"q":"What purity does Peptriva report?","a":"Across the eight publishable lots, purity runs from 99.58 percent to 99.90 percent by HPLC-UV, area percent, on certificates received 30 June 2026 and reported 2 July 2026[^1]. The full table with lot numbers, accession numbers, and net content is on the purity results page."},{"q":"What does area percent purity actually mean?","a":"It is the target compound's share of the total detected peak area on the chromatogram, not a mass fraction of the vial. Anything the ultraviolet detector does not see is outside the calculation, which is why the identity result and the net content on the same certificate matter as much as the headline figure[^1]."},{"q":"Why does net content matter?","a":"It converts a percentage into an amount. Most vendor certificates in this category report purity and never quantity, which leaves a buyer with a claim about composition and no claim about mass. Peptriva reports a measured mass on every certificate, and on blends each component is weighed separately[^1]."},{"q":"What does the endotoxin result mean?","a":"It is a bacterial endotoxin measurement by LAL under USP General Chapter <85>, run in duplicate, against a specification of 0.05 EU/mL or lower[^1][^6]. It is a contamination measure against a published standard and nothing more."},{"q":"Are Peptriva products sterile?","a":"No. No sterility assay is on the panel and the published terms state the material is not sterile[^3]."},{"q":"How can I verify a certificate myself?","a":"Open the ledger, find the product's row, and match three fields against the certificate: the lot number, the laboratory accession number, and the reported net content[^1]. The accession number is the laboratory's own document identifier and is the field a fabricated table is least likely to get right."}]}
:::

## Returns, claims, and the Out-of-Spec Guarantee

The restrictive half of the published terms, and the one remedy in them that is stronger than the category norm.

:::faq {"items":[{"q":"Does Peptriva accept returns?","a":"No returns of any kind, opened or unopened. That is stated plainly in the published terms rather than buried, and this review counts the plainness in its favour and the policy against it[^3]."},{"q":"What can I claim for, and how long do I have?","a":"Four windows, each running 30 days from delivery or from the carrier-marked delivery date: damaged shipment, incorrect or missing items, lost in transit or delivered and not received, and an out-of-specification batch. Claims are answered within 5 business days, and approved refunds reach the original payment method within 7 to 10 business days of approval[^3]."},{"q":"What is the Out-of-Spec Guarantee?","a":"If a shipped batch fails any published certificate specification, Peptriva replaces the affected units from the next conforming batch and refunds the purchase price. There is no claim form and no product return, and a buyer may substantiate the failure with their own third-party laboratory report[^3]. One free reship per incident applies where a reship is the remedy, subject to availability."}]}
:::

## Shipping and delivery

Carrier, cost, cut-off, processing window, and the packaging claim this record declines to make.

:::faq {"items":[{"q":"How much is shipping?","a":"Nothing on any order, with no cart minimum. Orders go by FedEx 2-Day with tracking to United States destinations only, including the District of Columbia, and there is no international shipping[^4]."},{"q":"How fast do orders ship?","a":"Orders placed before 5:00 p.m. ET on a business day ship the same business day, and standard processing is 1 to 2 business days from payment clearance and researcher attestation[^4]."},{"q":"Is the parcel shipped cold?","a":"No. Lyophilized material is stable at ambient temperature in transit and ships in standard parcel packaging, and Peptriva does not claim cold-chain shipping. The cold-chain description applies to the distribution facility where the independent re-test happens, not to the parcel[^4]."}]}
:::

## The limits of this record

The questions with unflattering answers, which are the half of any question list worth reading.

:::faq {"items":[{"q":"Why are some compounds not discussed on this site?","a":"Four products sit on a restricted tier where active litigation risk in this category governs how they may be presented, so this network does not build pages around them or reprint their purity figures. Their certificates are real, public, and produced under the same five-assay panel by the same laboratory, and a reader who wants those figures can read them on the ledger[^1]."},{"q":"What does this record fail to establish?","a":"Six things, named on every relevant page: one testing round rather than a testing history, a small archive of fourteen certificates, no vendor-rating listing anywhere, a company whose domain was registered on 30 April 2026, no published accreditation scope for the laboratory, and no sterility testing of any kind[^1][^2][^3]."}]}
:::

## What is not answered here

No question on this page has an answer about what any product does, because nothing in the record supports one. The certificates cover identity, purity, net content, endotoxin, and appearance, which are analytical chemistry, and analytical chemistry carries no implication about any biological outcome[^1]. Questions about use are not answered anywhere on this network, and the terms of sale state the conditions under which the material is sold[^3].
`,
  },
  {
    path: '/about',
    navLabel: 'About',
    title: 'About The Peptriva Review: Method and Disclosure',
    description:
      'Who publishes this review of Peptriva, why a company reviewing its own record is worth reading, the method used, and the disclosure under 16 CFR Part 465.',
    h1: 'Who publishes this, and how it was made',
    kicker: 'THE METHOD',
    standfirst:
      'Peptriva publishes this review of Peptriva. That is a disclosure, not an apology. Here is the method, the rule that governs what may appear, and what the arrangement costs the reader.',
    body: `## The lead

This site is published by Peptriva about Peptriva, and every page says so above the fold. It is a first-party record, not an outside assessment, and nothing here should be read as a neutral party's opinion of the company[^8]. What the arrangement buys the reader is access: the certificates, the accession numbers, the release rule inside the order system, and the parts of the terms of sale that are unfavourable to a buyer, all in one place and all sourced. What it costs the reader is the reassurance of a stranger's judgement, and no amount of careful writing replaces that.

## Why read a company's review of itself?

Because of what it can be held to. An opinion published by the company selling the goods is worth very little. A set of accession numbers, lot numbers, measured masses, and dates published by the company selling the goods is worth a great deal, because every one of them can be checked against a document the reader opens themselves, and every one of them is a way for this site to be caught being wrong[^1].

So the test to apply to this network is not whether it flatters Peptriva. It is whether the checkable claims check out, and whether the unflattering facts are present. Six of them are named on the home page, repeated on every page they touch, and reflected in the score: one testing round, a fourteen-certificate archive, no vendor-rating listing, a domain registered on 30 April 2026, no published accreditation scope, and no sterility testing[^1][^2][^3]. If those had been quietly omitted, the rest would deserve no weight.

## The method

1. **Read the ledger row by row.** Every published certificate, with its lot number, laboratory accession number, purity figure, net content, endotoxin result, appearance, and date pair[^1].
2. **Read the source of the release rule.** The purchase-order sync that turns received inventory into sellable stock, to establish that the two-certificate requirement is a code condition rather than a policy sentence.
3. **Read the published terms end to end.** Returns, the four claim windows, the Out-of-Spec Guarantee, the age gate and attestation, the governing law, the research-use-only conditions[^3].
4. **Read the shipping policy and the catalogue.** Carrier, cut-off, processing window, packaging, destinations, listed products, categories, stock state, and prices[^4][^5].
5. **Compare the storefront's claims against the documents.** Where the storefront claims more than the paperwork supports, drop the claim on this network rather than repeat it.
6. **Score six criteria with published weights.** The sheet, the weights, and the reasoning are all on the verdict page, so the arithmetic can be argued with.

## The rule: nothing on a page that is not on a certificate

The standing rule for this network is that a statement of fact must be traceable to a certificate, the published terms, the shipping policy, the catalogue, or the code that governs stock. No estimates, no rounding for effect, no inferred founding date, no inferred order volume, no third-party rating that does not exist.

That rule is what removed four claims that would otherwise have been easy to write, and naming them is more useful than describing the rule again:

- **Laboratory accreditation.** Asserted on the storefront in several places. No certificate, scope number, or accrediting body exists to support it, so this network names the laboratory and claims nothing further[^2].
- **Sterility.** No assay for it exists, and the published terms state the material is not sterile[^3].
- **Cold-chain shipping of the parcel.** The cold-chain description belongs to the distribution facility where the re-test happens, not to the box a buyer receives[^4].
- **Scale.** No customer count, order count, or review average appears anywhere on this network, because a number of that kind published by the seller and unaudited is worth nothing.

## What we refuse to say

Nothing on this network describes what any product does. The panel measures identity, purity, net content, bacterial endotoxin, and appearance, which is analytical chemistry, and no biological claim follows from any of it[^1]. The material is sold for in vitro research use only. It is not a drug, food, cosmetic, supplement, or device. It is not approved by the FDA, and it is not for human or veterinary use by any route[^3].

Four products also sit on a restricted tier where active litigation risk in this category governs how they may be presented. Their certificates are real, public, and produced under the same panel by the same laboratory, and this network neither builds pages around them nor reprints their figures. A reader who wants them reads them at the ledger[^1].

## The disclosure in full

This site is published by Peptriva, the company it examines. It is a first-party record: our certificates, our terms, our customer reviews where they exist, and a plain statement of what that evidence does and does not establish. It is not an outside review, it was not written by a third party, and nothing here should be read as a neutral opinion of Peptriva. Where a claim rests only on our own say-so, the page says so, and the clearest instance is on the transparency page: the production certificate required by the release rule is held on file and is not published.

The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, in force since 21 October 2024, governs company-controlled review websites and the authenticity of reviews[^8]. This network is built to sit inside that rule rather than at its edge: the publisher is named on every page, no claim of neutrality is made anywhere, and no review is written, edited, incentivised, or filtered by rating.

## How customer reviews are handled

Reviews appear on this network only when they can be matched to an order record and are shown with that order attached. None are written by us, none are edited for tone, none are filtered by rating, and nothing is published to fill an empty section. Where a review section renders nothing, no review has yet met those conditions, and the section stays empty rather than being furnished with something invented[^8].

## Corrections

If a figure on this site does not match the certificate, the certificate is right and this site is wrong. Corrections go to hello@peptriva.com and are handled as described on the contact page, which also sets out what this site can and cannot do about a dispute[^7]. A correction to a number changes the number; where a corrected number changes the score, the verdict page changes too, and the change is stated rather than made silently.
`,
  },
  {
    path: '/references',
    navLabel: 'References',
    title: 'References for The Peptriva Review: Sources in Full',
    description:
      'The source list behind this review of Peptriva: the certificate ledger, the third-party laboratory, the terms of sale, shipping policy, catalogue, and USP <85>.',
    h1: 'References',
    kicker: 'THE SOURCES',
    standfirst:
      'Eight sources carry every factual claim on this site. Each one is a document a reader can open without asking us for anything.',
    body: `## The lead

Every numbered citation on this site resolves to one of the eight sources below, and every source is a primary document rather than a summary of one. Four are Peptriva's own: the certificate ledger, the terms of sale, the shipping policy, and the catalogue. Two are outside the company: the third-party laboratory named on every certificate, and the United States Pharmacopeia chapter the endotoxin assay is run against. One is the regulation that governs how a company may publish a review of itself. One is the contact record.

The most load-bearing of them is the first. The certificate ledger is where the purity figures, lot numbers, accession numbers, net content values, endotoxin results, and test dates on every page of this site come from, and where a reader should go to check that this site transcribed them correctly[^1]. Where this site and a certificate disagree, the certificate governs and this site is in error.

## What each source carries

The ledger carries the analytical record. The laboratory reference exists so the name on the certificate can be confirmed as a real testing operation rather than a letterhead[^2]. The terms of sale carry the seller of record, the returns position, the four claim windows, the Out-of-Spec Guarantee, the age gate and attestation, and the research-use-only conditions[^3]. The shipping policy carries the carrier, the cut-off, the processing window, the destinations, and the packaging description this site uses to decline a cold-chain claim for the parcel[^4]. The catalogue carries the listed products, the categories, the stock state, and the price range[^5]. USP General Chapter <85> is the standard the duplicate endotoxin test is run against[^6]. The contact page carries the distribution address, the telephone number, the support addresses, and the hours[^7]. 16 CFR Part 465 is the rule that makes the disclosure on every page of this site mandatory rather than decorative[^8].

## The list

:::references {}
:::
`,
  },
  {
    path: '/contact',
    navLabel: 'Contact',
    title: 'Contact The Peptriva Review: Corrections and Disputes',
    description:
      'How to dispute a fact on this site, how to reach Peptriva by phone or email, the distribution and registered addresses, and what this site cannot do for a buyer.',
    h1: 'Corrections, disputes, and contact',
    kicker: 'THE ROUTES',
    standfirst:
      'This site is published by the company it examines, so a factual dispute goes to the company. Here is where it goes, what happens to it, and what this site has no power to do.',
    body: `## The lead

If a number on this site is wrong, the fastest correction path is to name the page, the figure, and the certificate it should match, and send it to hello@peptriva.com[^7]. Corrections to transcribed figures are the ones this site most wants: every purity value, lot number, accession number, and net content on these pages was copied from a certificate, and copying is exactly where a first-party record is most likely to fail without anyone noticing[^1].

## How to dispute a fact here

State three things: the page, the sentence, and the document that contradicts it. That is enough for a dispute to be resolved without correspondence, because every factual claim on this site is tied to a source in the reference list and a disagreement is therefore a comparison rather than an argument.

Where a certificate and this site disagree, the certificate wins and this site is corrected. Where a correction changes a figure used in the scoring, the verdict page changes with it and the change is stated on the page rather than made quietly. Where a dispute is about judgement rather than fact, for instance about the weight given to operating history, the weights are published on the verdict page precisely so that disagreement has something specific to attach to.

## The real contact routes

- **General and corrections:** hello@peptriva.com[^7]
- **Order support and claims:** support@peptriva.com[^3][^7]
- **Telephone:** 1-656-269-7377[^7]
- **Hours:** Monday to Friday, 9am to 5pm CT[^7]
- **Distribution address, where orders ship from:** 14516 Garfield Ave, Paramount, California 90723, United States[^7]
- **Seller of record and registered office:** Wayne Ventures SEZC, trading as Peptriva, 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103, Cayman Islands[^3]

## Where an order problem should go

Not here. Claims under the four published windows go to support@peptriva.com and are governed by the terms of sale, not by this site[^3]. The four windows are damaged shipment, incorrect or missing items, lost in transit or delivered and not received, and an out-of-specification batch, each running 30 days from delivery or from the carrier-marked delivery date. Claims are answered within 5 business days, and approved refunds reach the original payment method within 7 to 10 business days of approval[^3].

An out-of-specification claim is the one worth stating precisely when you send it: name the lot, name the specification on the published certificate you believe the shipped material failed, and attach your own third-party laboratory report if you have one. The published remedy is replacement of the affected units from the next conforming batch plus a refund of the purchase price, with no claim form and no product return[^3].

## What this site cannot do

- **It cannot process an order, a refund, or a claim.** Those run through support@peptriva.com under the published terms[^3].
- **It cannot give any guidance on use.** Nothing on this network describes what any product does, and the material is sold for in vitro research use only, not for human or veterinary use by any route[^3].
- **It cannot supply the production certificate.** That document is held on file and is not published, for the reasons set out on the transparency page.
- **It cannot present itself as a neutral party.** Peptriva publishes this site about Peptriva, which is stated on every page and is required to be[^8].
- **It cannot publish a review that has not been matched to an order record.** No review on this network is written, edited, incentivised, or filtered by us, and no section is filled with an invented one[^8].
- **It cannot change a certificate.** The laboratory's reported values are the laboratory's. This site transcribes them and corrects its transcriptions, and that is the whole of its authority over them[^1][^2].

## If you would rather not ask us anything

That is the better test, and the record is built for it. Open the certificate ledger, pick a product that is in stock, and check that it has a row, that the lot number matches, that the accession number matches, and that a net content figure is reported alongside the purity figure[^1][^5]. Four checks, no correspondence, and a result that does not depend on trusting the company that wrote this page.
`,
  },
];
