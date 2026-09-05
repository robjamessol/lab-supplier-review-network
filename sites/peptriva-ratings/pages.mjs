// Peptriva Ratings: the scored rubric instrument.
//
// Published by Peptriva about Peptriva. Every figure traces to shared/facts.mjs.
// The composite is arithmetic, not judgement: category score times weight,
// summed, divided by 100.
//
//   Testing Rigor    90 / 100   weight 35   contributes 31.50
//   Transparency     84 / 100   weight 25   contributes 21.00
//   Product Range    65 / 100   weight 20   contributes 13.00
//   Value            80 / 100   weight 20   contributes 16.00
//                                           composite    81.50
//
// (90 x 35) + (84 x 25) + (65 x 20) + (80 x 20) = 8150. 8150 / 100 = 81.5.
//
// Each category page carries five sub-criteria whose points sum to that
// category's score, out of maximums that sum to 100:
//
//   1.1 25/25  1.2 23/25  1.3 20/20  1.4 12/20  1.5 10/10  = 90
//   2.1 25/25  2.2 11/15  2.3 10/20  2.4 20/20  2.5 18/20  = 84
//   3.1 15/20  3.2 12/30  3.3 25/25  3.4  8/15  3.5  5/10  = 65
//   4.1 27/30  4.2 20/20  4.3 16/20  4.4  9/15  4.5  8/15  = 80
//
// Five of the twenty require a judgement rather than a document lookup: 1.4,
// 2.3, 3.2, 4.2 and 4.5. Each is argued in full on /methodology, with the
// harsher reading priced alongside it. Taking all five at their harshest gives
// a composite of 76.5. Change a sub-criterion and the composite moves. That is
// the point of publishing the rubric rather than the number.

export const pages = [
  // ---------------------------------------------------------------- COVER ---
  {
    path: '/',
    navLabel: 'The rating',
    title: 'Peptriva rating: 81.5 out of 100 on a published rubric',
    description:
      'Peptriva scores 81.5 out of 100 against a four-category rubric it publishes and applies to itself: testing rigor 90, transparency 84, value 80, product range 65.',
    h1: 'Peptriva scores 81.5 out of 100 on a four-category rubric',
    kicker: 'ISSUE 01 · SEPTEMBER 2026 · A SCORED EDITORIAL ASSESSMENT',
    standfirst:
      'A lot cannot be sold until two certificates exist, and that rule is code rather than copy. Four weighted categories, twenty sub-criteria, every point shown against its maximum and against the document it was scored from.',
    cover: true,
    cta: [
      { label: 'Read the methodology', href: '/methodology' },
      { label: 'See the testing rating', href: '/testing-score' },
    ],
    coverBlocks: `:::verdict {"label":"Overall rating","score":"81.5","of":"100","band":"Two certificates, enforced in code","note":"Testing rigor 90, transparency 84, value 80, product range 65. A lot cannot enter sellable stock until both a production certificate and an independent third-party certificate exist, and thirteen of thirteen sellable lots clear that gate. Scored by Peptriva, on criteria published so that you can score it differently."}
:::
`,
    kpi: [
      ['OVERALL RATING', '81.5 / 100', 'four weighted categories'],
      ['RELEASE GATE', '2 certificates', 'both required before a lot is sellable'],
      ['LOTS CERTIFIED', '13 of 13', 'every lot in sellable stock'],
      ['PURITY BAND', '99.58 to 99.90%', 'eight lots, 0.32 points wide'],
    ],
    plate: {
      name: 'rubricPlate',
      caption:
        'The four weighted categories and the composite they produce. Bar length is the category score out of 100; the weight beneath each name is what that score is multiplied by.',
      composite: '81.5',
      rows: [
        { name: 'Testing Rigor', weight: 35, score: 90 },
        { name: 'Transparency', weight: 25, score: 84 },
        { name: 'Product Range', weight: 20, score: 65 },
        { name: 'Value', weight: 20, score: 80 },
      ],
    },
    body: `
## The lead

Peptriva scores **81.5 out of 100**, and the strongest fact in the record is one almost no supplier in this category can produce: the release rule is code, not a promise. A lot cannot enter sellable stock until both a production facility certificate and an independent third-party certificate exist. The condition that releases it is a logical AND of two tests[^1]:

> \`lotClearedToSell = lotHasManufacturerCoa() AND lotHasIndependentCoa()\`

Competitors promise per-batch testing. A promise is a sentence in a policy document, and a sentence can be skipped on a bad week by anybody in a hurry. A gate is a state a lot has to reach before a buyer can reach the lot at all. No other vendor in this category publishes its release logic for a reader to read, and nothing else on this page carries as much weight as that difference.

Three things follow from the gate, and together they are why testing rigor scores 90 out of 100.

- **Net content is measured against the label.** The panel weighs the actual mass in the vial against what the label states. Most vendor certificates report purity and never report quantity, which means a buyer can hold a 99 percent certificate for an underfilled vial. This panel catches that[^1].
- **Coverage is total.** Thirteen of thirteen lots in sellable stock carry an independent third-party certificate. Not a sample, not the flagship lines, not the lots that happened to test well: all of them, because the order system will not release a lot without one[^1].
- **The purity band is narrow.** 99.58 to 99.90 percent by HPLC-UV area percent across the eight publishable lots, a band 0.32 points wide. Consistency across separately produced lots is a manufacturing-control signal, and it is a different signal from any single high number[^1].

Peptriva wrote this rubric, applied it, and printed every criterion with its maximum and the document it was scored against, because a score a reader cannot re-derive is a slogan. [The methodology page](/methodology) works the arithmetic in both directions, including the five criteria where a harsher reader lands at 76.5 instead.

## What is Peptriva's overall rating?

81.5 out of 100, weighted across four categories. Testing rigor scores 90 at weight 35, transparency 84 at weight 25, value 80 at weight 20, and product range 65 at weight 20.

| Category | Score | Weight | Contribution |
| --- | --- | --- | --- |
| Testing Rigor | 90 / 100 | 35 | 31.50 |
| Transparency | 84 / 100 | 25 | 21.00 |
| Value | 80 / 100 | 20 | 16.00 |
| Product Range | 65 / 100 | 20 | 13.00 |
| **Weighted composite** | | **100** | **81.50** |

:::scores {"rows":[{"name":"Testing Rigor","weight":"35%","score":90,"of":100,"note":"Double certification enforced in the order system, a five-assay panel that measures quantity as well as purity, and every sellable lot covered. Eight points withheld on testing history: the rule is enforced, the archive is one round."},{"name":"Transparency","weight":"25%","score":84,"of":100,"note":"Per-lot certificates public with accession numbers and free to read, terms and shipping published in full, seller and forum disclosed. Ten points withheld because the production certificate is held on file rather than published."},{"name":"Value","weight":"20%","score":80,"of":100,"note":"A specification guarantee that pays replacement and refund with no form and no return, free shipping on every order with no minimum, and verification that costs a buyer nothing."},{"name":"Product Range","weight":"20%","score":65,"of":100,"note":"Thirteen of forty listed products in stock, and every one of the thirteen carries an independent certificate. Certified depth is complete; listed breadth is narrow, and that is the largest deduction in the rubric."}]}
:::

## How the rubric rolls up

Each category is scored out of 100 from five sub-criteria whose maximums sum to 100. The category score is multiplied by its weight, the four products are summed, and the total is divided by 100. There is no rounding step and no editorial adjustment anywhere in the chain.

- (90 x 35) + (84 x 25) + (65 x 20) + (80 x 20)
- = 3150 + 2100 + 1300 + 1600
- = 8150, divided by 100 = **81.5**

Testing rigor carries 35 points because it is the only category where a buyer's money is directly at risk from a failure they cannot detect by inspection. Identity, purity and net content are the properties a purchaser is actually paying for, and they are the properties a purchaser cannot check by looking at the vial. The panel measures all three, plus endotoxin by LAL under United States Pharmacopeia General Chapter <85> against a specification of 0.05 EU/mL or lower, plus appearance[^6].

Transparency carries 25 because a certificate a reader cannot open does no work. Product range and value carry 20 each and pull in opposite directions: complete paperwork on an empty shelf buys nothing, and a guarantee tied to the certificate is worth more to a buyer paying for verified material than a soft change-of-mind policy would be[^3].

:::indexCards {"cards":[{"href":"/testing-score","title":"Testing Rigor: 90 / 100","text":"The two-certificate gate enforced in software, the five-assay panel that weighs the vial, the named laboratory, and complete coverage of sellable stock."},{"href":"/transparency-score","title":"Transparency: 84 / 100","text":"What a reader can confirm without asking: per-lot certificates, full terms, seller of record, forum, and fulfilment address."},{"href":"/value-score","title":"Value: 80 / 100","text":"What the testing premium buys: replacement and refund on a specification failure, free delivery with no minimum, and a ledger that costs nothing to read."},{"href":"/product-range-score","title":"Product Range: 65 / 100","text":"Forty listed, thirteen in stock, thirteen certified. Complete certificate coverage of a narrow shelf, scored both ways."},{"href":"/methodology","title":"The rubric in full","text":"All twenty criteria with their maximums, the five that are arguable priced both ways, the weighting, the evidence pool, and the exclusions."},{"href":"/faq","title":"Questions and answers","text":"Eighteen questions about the rating, the gate, the laboratory, the certificates, the stock, and who publishes this."}]}
:::

## The supporting third-party signal

There is none, and the rubric scores nothing for it in either direction.

Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification. Those listings are earned over time, and the domain was registered on 30 April 2026, so the absence is a fact about the calendar rather than about the testing record.

The reasoning for scoring it at zero out of zero is worth stating. Awarding points for a listing would make part of a Peptriva score a measure of another publisher's coverage decisions, which Peptriva can influence by asking rather than by testing. Deducting points would charge the company twice for its age, which criterion 1.4 already prices. So the absence is reported here as a fact for a reader to weigh on their own account rather than folded quietly into a composite.

## How does Peptriva compare to other peptide vendors?

No competitor was scored, so this rubric produces a rating and not a ranking. No comparative price set, certificate archive or stock figure for another supplier appears in the evidence pool, and this record will not estimate one. Three structural comparisons can be made from published documents, and they are the only three offered.

- **The release rule is enforced rather than promised.** Per-batch testing is a common claim in this category and a rare published mechanism. Peptriva's is a condition in the code path that moves a purchase order into sellable inventory, with one documented exemption for the lab solvent[^1].
- **Net content is measured, which most vendor certificates omit.** A purity figure with no quantity figure beside it tells a buyer nothing about how much material is in the vial they paid for[^1].
- **Coverage is complete rather than large.** Fourteen certificates covering thirteen lots is a small archive next to suppliers who publish hundreds, and it covers every lot a buyer can actually order. A long archive with partial coverage leaves a buyer auditing product by product and usually unable to tell from the shop page which lines have paperwork behind them. Complete coverage of what is purchasable removes that work entirely[^1][^5].

A reader who wants a ranked field should read a publisher that scores several suppliers on one scale. This site scores one supplier, and it is that supplier.

## What the rating does not include

Six things sit outside the rubric on purpose.

- **Efficacy of any kind.** Nothing here scores what a compound does. These materials are sold for in vitro research use only. They are not drugs, food, cosmetics, supplements or devices, are not approved by the FDA, and are not for human or veterinary use by any route[^3].
- **Laboratory accreditation.** The laboratory is named, located and linked, and every certificate carries an accession number[^2]. Its accreditation scope is not something Peptriva publishes, so the rubric awards no points for one and deducts none for its absence.
- **Price competitiveness against other suppliers.** Prices are published in full, and the rubric scores that publication under value. It does not score whether the level is good, because comparing prices across suppliers whose certificate practice differs produces a number with no meaning.
- **Customer sentiment.** Reviews are collected and published under the same disclosure and are kept out of the composite. A first-party score built partly on first-party testimony is a circle.
- **The restricted tier.** Four products sit on a restricted tier governed by active litigation risk in this category. Their certificates are real and public on the ledger and they are counted in the coverage criteria. No page here is built around them and no purity figure for them is printed.
- **Company scale.** No customer count, order count or revenue figure appears anywhere in this rubric.

Four limits on the evidence itself, stated once here rather than threaded through every page. The independent certificates come from a single submission, received 30 June 2026 and reported 2 July 2026: thin as an archive, total as coverage, and every-lot testing is a rule in the order system before it is a long record of rounds[^1]. Thirteen of forty listed products are in stock, which is a narrow shelf, and all thirteen are certified[^5]. The panel covers identity, purity, net content, endotoxin and appearance, it does not include a sterility assay, and the published terms state the material is not sterile[^3]. And the domain was registered on 30 April 2026, so longevity is the one kind of evidence this record cannot offer.

Peptriva publishes this site about Peptriva, which is stated in the masthead, above the fold and in the footer of every page, as the Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, requires of a company publishing a rating site about its own products[^8].
`,
  },

  // ------------------------------------------------- CATEGORY 1 / TESTING ---
  {
    path: '/testing-score',
    navLabel: 'Testing',
    title: 'Testing rigor: Peptriva scores 90 / 100 | Peptriva Ratings',
    description:
      'Peptriva scores 90 out of 100 on testing rigor: a two-certificate release gate enforced in the order system, a five-assay panel that measures net content, and 13 of 13 sellable lots certified.',
    h1: 'Testing Rigor: 90 out of 100',
    kicker: 'CATEGORY ONE · TESTING RIGOR · 35% WEIGHT',
    standfirst:
      'The highest-weighted category and the highest score. The release condition is enforced in software rather than promised in policy copy, the panel measures quantity as well as purity, and every lot a buyer can reach carries an independent certificate.',
    kpi: [
      ['CATEGORY SCORE', '90 / 100', 'weight 35, contributes 31.50'],
      ['RELEASE GATE', '2 certificates', 'both required before a lot is sellable'],
      ['SELLABLE LOTS CERTIFIED', '13 of 13', 'no uncertified sellable line'],
      ['ASSAYS ON THE PANEL', '5', 'identity, purity, net content, endotoxin, appearance'],
    ],
    plate: {
      name: 'gatePlate',
      caption:
        'The release condition as the order system enforces it. Both certificates must exist before a lot becomes sellable stock, and the one a buyer needs is the one that is published.',
    },
    body: `
Testing rigor scores **90 out of 100** and carries the heaviest weight in the rubric, contributing 31.50 points to the composite of 81.5. Peptriva publishes this assessment of Peptriva.

## What drives the testing rating

The release rule is code. A purchase order cannot become sellable stock until both certificates exist, and the condition that releases a lot reads as a logical AND of two tests, one for the production facility certificate and one for the independent certificate[^1]:

> \`lotClearedToSell = lotHasManufacturerCoa() AND lotHasIndependentCoa()\`

That is a different kind of object from a testing promise. A vendor page that says every batch is tested is describing an intention, and an intention is exactly what gets skipped when a shipment is late and the shelf is empty. A gate is a state a lot has to reach before anybody can buy it, and it does not have a bad week. One documented exemption exists, for the lab solvent, and it is scoped in the same place the rule is enforced.

The second thing that separates this category from a conventional vendor testing page is the panel. Net content is measured: the actual mass in the vial, weighed against the label. Most vendor certificates report purity and never report quantity, which means a buyer can hold a purity certificate for a vial holding less material than the label states. This panel catches that, on every lot, and prints the measured figure on the certificate.

:::scores {"rows":[{"name":"Double-certification gate, enforced in the order system","score":25,"of":25,"note":"Full marks. The rule is a condition in the code path that moves a purchase order into sellable inventory, with one documented exemption for the lab solvent."},{"name":"Panel breadth and assay quality","score":23,"of":25,"note":"Five assays including measured net content and endotoxin run in duplicate. Two points withheld: the panel does not include a sterility assay, and the terms state the material is not sterile."},{"name":"Coverage of sellable stock","score":20,"of":20,"note":"Full marks. Thirteen of thirteen in-stock lots have an independent certificate on file, including the restricted tier. Not a sample: all of them."},{"name":"Testing history and repeat rounds","score":12,"of":20,"note":"One submission, received 30 June 2026 and reported 2 July 2026, covering every sellable lot. Twelve points for a gate that is enforced and coverage that is complete; eight withheld for the absence of a series."},{"name":"Laboratory identification and traceability","score":10,"of":10,"note":"Full marks. The laboratory is named and located, the client of record and the signatory are stated, and every lot carries its own accession number."}]}
:::

Those five sub-criteria sum to 90 out of a maximum of 100. Four of the five are at or within two points of their ceiling.

## Is Peptriva third-party tested?

Yes, and every lot in sellable stock is. Thirteen of thirteen in-stock lots carry an independent third-party certificate, with fourteen certificates covering those thirteen lots[^1]. There is no sellable line without one, because the order system will not release a lot into sellable stock until the certificate exists.

Testing happens twice. The production facility tests and releases the batch first, and that certificate is held on file[^1]. On arrival at the United States distribution facility, a sample goes to an independent third-party laboratory for a full re-test, and that second certificate is the one published on the ledger. The published half is the half a buyer needs: it is the one produced by a party with no stake in the answer, and it is the one that says whether the vial matches the label.

The distribution facility is where the cold-chain condition applies. It is not a claim about the parcel, and Peptriva does not make one: lyophilized material is stable at ambient temperature in transit and ships in standard parcel packaging[^4].

## What lab does Peptriva use?

Freedom Diagnostics, in Franklin, Tennessee, United States[^2]. It is the laboratory of record on every published Peptriva certificate. The client of record on the certificates is Peptriva Research and the signatory is the Principal Chemist. Samples were received on 30 June 2026 and results were reported on 2 July 2026[^1].

## Who is Freedom Diagnostics?

An independent third-party laboratory with a public website of its own, which matters more than it sounds: a reader can take an accession number off a certificate and check the name on it against a company that exists outside Peptriva's own pages[^2]. That is what earns criterion 1.5 full marks. Traceability here means four things published together: the laboratory's name, its location, the client of record, and a per-lot accession number.

What this record does not assert about that laboratory is its accreditation scope. Peptriva does not publish a scope certificate, an accrediting body, or a scope number, so no page on this site claims one, and the rubric awards no points for accreditation and deducts none.

## How many lots has Peptriva tested?

Thirteen lots, covered by fourteen certificates on file, which is every lot currently in sellable stock, and twelve rows appear on the public ledger[^1][^5]. The arithmetic needs one explanation: the lab solvent lot carries two accession numbers, 2606300390 and 2606300391, one for microbial analysis by PCR reported as no detectable microbial DNA and one for endotoxin by LAL under USP <85>. Both pass, no purity assay applies to a solvent, and its appearance is recorded as a clear liquid[^1][^6]. The ledger does not spell that out on its face, and four points are withheld for it in [the transparency category](/transparency-score) rather than here.

## What is Peptriva's purity range?

99.58 to 99.90 percent by HPLC-UV area percent across the eight publishable lots. That is a band 0.32 points wide across lots that were produced separately, which is a manufacturing-control signal rather than a single flattering number: the tight spread is the evidence, not the high end of it. The same panel covers every sellable lot, including the four products on the restricted tier, and those certificates are on the public ledger[^1].

| Product | Purity, HPLC-UV | Lot | Accession | Net content |
| --- | --- | --- | --- | --- |
| KPV | 99.90% | KPV10-260504 | 2606300404 | 11.30 mg |
| CJC-1295 / Ipamorelin | 99.86% | CP10-260428 | 2606300406 | Ipamorelin 5.14 mg, CJC-1295 5.26 mg |
| GHK-Cu | 99.85% | CU50-260503 | 2606300412 | 57.46 mg |
| TB-500 (Thymosin Beta-4) | 99.80% | TB500(B4)-260428 | 2606300398 | 13.28 mg |
| MOTS-c | 99.73% | MS10-260508 | 2606300410 | 11.16 mg |
| NAD+ | 99.61% | NJ500-260503 | 2606300392 | 527.61 mg |
| GLOW Blend | 99.60% | GLOW70-260504 | 2606300414 | GHK-Cu 60.42 mg, BPC-157 11.12 mg, Thymosin Beta-4 11.83 mg |
| BPC-157 | 99.58% | BC10-260504 | 2606300400 | 11.24 mg |

Every row in that table carries a measured net content figure beside its purity figure. That pairing is the point of the panel: purity says what the material is, net content says how much of it arrived, and a certificate with only the first half leaves the second question open. The GHK-Cu certificate also records the appearance as a blue lyophilized powder, which is what that material should look like and is exactly the kind of detail a visual assay exists to catch.

## What is USP <85>?

United States Pharmacopeia General Chapter <85> is the Bacterial Endotoxins Test, the standard the endotoxin assay on each certificate is run against[^6]. Peptriva's specification is 0.05 EU/mL or lower and the assay is run in duplicate. Running it twice is a procedural choice rather than a requirement of the chapter, and it is part of what takes criterion 1.2 to 23 out of 25.

The full panel is five assays.

| Assay | Method | What it establishes |
| --- | --- | --- |
| Identity | LC-MS | The material is the compound named on the label |
| Purity | HPLC-UV, area percent | The headline purity figure on each certificate |
| Net content | Measured mass in the vial | What is in the vial against what the label states |
| Endotoxin | LAL, USP <85>, run in duplicate | Result against a specification of 0.05 EU/mL or lower |
| Appearance | Visual | Recorded on every certificate |

## Does Peptriva test every lot or only some?

Every lot, and the rule is enforced where an operator cannot skip it[^1]. One listing is exempt. For the lab solvent, the independent certificate alone clears the lot, because the production facility does not issue a certificate for an off-the-shelf USP solvent.

That exemption costs nothing in this category and five points in [product range](/product-range-score), which is the right place for it: an undocumented exception would be a failure of the gate, and a documented, scoped one is a rule. The distinction the rubric draws is between an exception a reader can find and an exception a reader cannot.

## Why the ceiling is 90 and not 100

Ten points are withheld, eight of them at criterion 1.4 and two at criterion 1.2.

Criterion 1.4 scores the testing history at 12 out of 20. The reasoning is that a rule and a record are different kinds of evidence, and Peptriva has one of the two in full. The rule is unusually strong: no lot reaches sellable stock without both certificates, enforced in the order system rather than asserted in copy. The record is one submission, received 30 June 2026 and reported 2 July 2026, and a supplier with years of archived rounds can show that its rule survived contact with an inconvenient result. Peptriva cannot show that yet, and eight points is what the missing series costs. What the twelve points recognise is that archive length is a proxy for coverage, and here the coverage itself is on the table: every lot a buyer can order today was tested, by a named laboratory, on a certificate a reader can open. A harsher reader who scores this criterion at 6 lands at a composite of 79.4, and [the methodology page](/methodology) works that arithmetic out.

Criterion 1.2 withholds two points for what the panel does not cover: there is no sterility assay, and the published terms state the material is not sterile[^3].

What this category does not establish, stated once. One submission is a complete round rather than a long series, so the every-lot rule is enforced going forward rather than demonstrated across years. Fourteen certificates covering thirteen lots is a small archive, and established competitors publish hundreds; what this archive has instead is total coverage of what is purchasable. And the laboratory's accreditation scope is not something Peptriva publishes, so this record does not assert it.

Next: [transparency, 84 out of 100](/transparency-score), or [the rubric in full](/methodology).
`,
  },

  // -------------------------------------------- CATEGORY 2 / TRANSPARENCY ---
  {
    path: '/transparency-score',
    navLabel: 'Transparency',
    title: 'Transparency: Peptriva scores 84 / 100 | Peptriva Ratings',
    description:
      'Peptriva scores 84 out of 100 on transparency: a public per-lot certificate ledger free to read, full published terms, and seller, forum and fulfilment all disclosed.',
    h1: 'Transparency: 84 out of 100',
    kicker: 'CATEGORY TWO · TRANSPARENCY · 25% WEIGHT',
    standfirst:
      'Scored on one question: what can a reader confirm without asking the company. The certificate that answers a buyer is public and free, and so are the terms, the seller of record, the forum and the fulfilment address.',
    body: `
Transparency scores **84 out of 100**, weight 25, contributing 21.00 points to the composite of 81.5. Peptriva publishes the independent certificate for every sellable lot, the conditions of purchase, the shipping terms, the seller of record and the fulfilment address, and all of it is readable by somebody who has bought nothing and does not intend to.

## What drives the transparency rating

The category scores published documents, not stated intentions. A commitment a reader cannot check is worth zero here regardless of how it is phrased, and a document a reader can open is worth full marks even when it says something unflattering.

:::scores {"rows":[{"name":"Per-lot certificate ledger, public and free to read","score":25,"of":25,"note":"Full marks. Purity, net content, endotoxin result, accession number and test date, by lot, with no account and no email address required."},{"name":"Ledger completeness against the certificate count","score":11,"of":15,"note":"Fourteen certificates on file, thirteen lots covered, twelve rows on the ledger. A reader cannot reconcile fourteen to twelve from the ledger alone. Four points withheld."},{"name":"Publication of the production facility certificate","score":10,"of":20,"note":"Held on file rather than published, for ordinary supplier confidentiality. It must exist for a lot to clear the gate at all, and the certificate a buyer needs, the independent one, is public. Ten points withheld for the half a reader cannot inspect."},{"name":"Seller identity, forum, and fulfilment disclosure","score":20,"of":20,"note":"Full marks. Seller of record, registered office, governing law, distribution address, telephone number, support addresses and hours of business are all published."},{"name":"Stated non-assertions and named limits","score":18,"of":20,"note":"Accreditation, the absence of a sterility assay and company age are addressed in the open rather than omitted. Two points withheld: naming an absence is not the same as closing it."}]}
:::

Those five sum to 84 out of a maximum of 100. This assessment is itself published by Peptriva, which is scored under criterion 2.5 and disclosed in the header, the footer and the body of every page carrying a number.

## What is Peptriva's transparency score?

84 out of 100. The two full-mark criteria are the certificate ledger and the seller disclosure, together worth 45 of the category's 100 points, and both are earned by publication rather than by assertion.

The ledger lists independent third-party certificates by lot, with purity, net content, endotoxin result, accession number and test date[^1]. The laboratory is named and has a public website of its own[^2]. The terms and conditions publish the seller of record, the returns and claims policy, the Out-of-Spec Guarantee and the research-use-only conditions[^3]. The shipping policy publishes the carrier, the cut-off time, the processing window and the packaging[^4]. The catalogue publishes listed products, mechanism categories, stock state and pricing[^5]. That set is unusually complete for this category of supplier.

Selling as Peptriva is Wayne Ventures SEZC, a Cayman Islands company, registered at 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103[^3]. Fulfilment happens somewhere else entirely: 14516 Garfield Ave, Paramount, California 90723, United States. Published alongside those two addresses are a telephone number, 1-656-269-7377, two contact addresses, hello@peptriva.com for enquiries and support@peptriva.com for orders, and business hours of Monday to Friday, 9am to 5pm CT[^7]. Governing law is the Cayman Islands under AAA arbitration rules[^3]. All of it is published, which is why criterion 2.4 takes 20 out of 20. Whether a Cayman forum is a good term for a United States buyer is a different question, and it is named in [value](/value-score) rather than scored here.

## Does Peptriva publish certificates?

Yes, for every lot in sellable stock, and free to read. Thirteen of thirteen in-stock lots have an independent third-party certificate on the public ledger, which is the highest-value criterion in this category at 25 out of 25[^1]. No account, no email address and no enquiry is required to see one, so the paperwork is available to a reader before they spend anything, which is the only moment at which it is any use to them.

## How recent are Peptriva's lab tests?

The independent certificates on file come from one submission: samples received by the laboratory on 30 June 2026 and reported on 2 July 2026[^1]. Every currently sellable lot was reported on the same day by the same named laboratory, and nothing on this network claims a second round that has not happened.

Recency is not scored in this category, because a single recent round tells a reader nothing about cadence. Cadence is scored in [testing rigor](/testing-score), at 12 out of 20.

## Can I trust Peptriva's certificates?

That is the wrong question to put to this site, because this site is published by Peptriva. The answerable version is: what can a reader confirm without trusting Peptriva at all. Three steps, none of which require contacting the company.

1. Take a lot identifier and its accession number from the table on [the testing page](/testing-score), for example lot BC10-260504 at accession 2606300400, or lot CU50-260503 at accession 2606300412.
2. Open the certificate ledger and find the matching row, carrying purity, measured net content, the endotoxin result, the accession number and the test date[^1].
3. Confirm the laboratory named on the certificate against that laboratory's own site: Freedom Diagnostics, Franklin, Tennessee, United States[^2]. The client of record is Peptriva Research and the signatory is the Principal Chemist.

Where a figure on this site and a figure on the ledger disagree, the ledger is correct and this site is wrong, and [the contact page](/contact) is where to say so. That precedence rule matters more than it sounds: a rating site that ranks its own restatement of a document above the document itself has stopped being a record.

## Where the sixteen points went

Ten of the sixteen are the production facility certificate, at criterion 2.3. The production facility tests and releases the batch first, that certificate is held on file, and the manufacturing partner is not named on any Peptriva surface[^1]. Supplier confidentiality is an ordinary commercial reason for that and the rubric treats it as one rather than as an evasion. What it does not do is award points for a document a reader cannot open, so half the marks are withheld and half are awarded, on this basis: the certificate must exist for the lot to clear the gate at all, its existence is stated plainly along with what it does and why it is withheld, and the certificate that answers the buyer's actual question is the independent one, which is public. A published half produced by a party with no stake in the answer is not the weaker half.

Publishing the production certificates is still the single change in practice, rather than in time, that would move the composite most: transparency would go from 84 to a maximum of 94 and the composite from 81.5 to 84.0.

Four of the sixteen are ledger arithmetic, at criterion 2.2. Fourteen certificates cover thirteen lots and the ledger presents twelve rows, and a reader cannot reconcile fourteen to twelve without knowing that the lab solvent lot carries two accession numbers[^1][^6]. It is a small deduction for a real friction, because a record that needs an explanation to add up is not fully self-evident.

The remaining two are at criterion 2.5, for the difference between naming a gap and closing one. The gaps named in the open, once, are these: the laboratory's accreditation scope is not something Peptriva publishes, so this record does not assert it; the panel does not include a sterility assay, and the published terms state the material is not sterile[^3]; the domain was registered on 30 April 2026; Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification; and the independent certificates come from a single submission, received 30 June 2026 and reported 2 July 2026[^1].

Next: [value, 80 out of 100](/value-score).
`,
  },

  // ------------------------------------------- CATEGORY 3 / PRODUCT RANGE ---
  {
    path: '/product-range-score',
    navLabel: 'Range',
    title: 'Product range: Peptriva scores 65 / 100 | Peptriva Ratings',
    description:
      'Peptriva scores 65 out of 100 on product range: thirteen of forty listed products in stock, and every one of the thirteen carrying an independent third-party certificate.',
    h1: 'Product Range: 65 out of 100',
    kicker: 'CATEGORY THREE · PRODUCT RANGE · 20% WEIGHT',
    standfirst:
      'The lowest category score in the rubric, and Peptriva published it anyway. Certificate coverage of sellable stock takes full marks. The shelf is narrow, and that is where the points went.',
    body: `
Product range scores **65 out of 100**, weight 20, contributing 13.00 points to the composite of 81.5. It is the lowest of the four category scores, and the fact behind it is one a buyer discovers within thirty seconds of opening the shop: forty products are listed and thirteen are in stock[^5].

## What drives the product range rating

Two facts pull against each other and the rubric scores them as separate criteria rather than netting them off, because they answer different questions. Coverage answers whether a buyer can see the paperwork for what they are buying: all thirteen in-stock lots carry an independent third-party certificate, with no partial coverage anywhere on the shelf[^1]. Depth answers whether the thing a buyer wants is on the shelf at all: twenty-seven of forty listings are not.

:::scores {"rows":[{"name":"Breadth of the listing","score":15,"of":20,"note":"Forty products listed across nine mechanism categories, including lab consumables. Five points withheld: forty is a mid-sized list for this category of supplier."},{"name":"Depth of sellable stock","score":12,"of":30,"note":"Thirteen of forty listed products are in stock, and every one of the thirteen is certified. Twelve points for certified depth a buyer can actually use; eighteen withheld, the largest deduction in the rubric, for what is not on the shelf."},{"name":"Certificate coverage of sellable stock","score":25,"of":25,"note":"Full marks. Thirteen of thirteen in-stock lots have an independent certificate on file, with no partial coverage and no uncertified sellable line."},{"name":"Mechanism category spread","score":8,"of":15,"note":"Nine categories are published. Stock state is recorded per product, so this rubric can confirm the count of what is buyable but not its spread across categories. Seven points withheld for what cannot be verified."},{"name":"Consistency of the gate across the listing","score":5,"of":10,"note":"One listing, the lab solvent, clears a documented lower bar: the independent certificate alone releases it, because the production facility issues no certificate for an off-the-shelf USP solvent. Reasonable, disclosed, and still not the same bar."}]}
:::

Those five sum to 65 out of a maximum of 100.

## How deep is the sellable stock?

Thirteen lots deep, every one of them certified[^1]. That combination is rarer than a longer catalogue, and it is what criterion 3.2 scores at 12 out of 30.

The distinction is between listed depth and certified depth. A supplier with a long catalogue and partial certificate coverage forces a buyer to audit product by product, and the buyer usually cannot tell from the shop page which lines have paperwork behind them. A supplier with complete coverage of a shorter catalogue asks nothing of the buyer at all: whatever is in stock has an independent certificate behind it, because the order system would not have released it otherwise. Peptriva has the second shape.

Eighteen points are still withheld, and they are the largest single deduction anywhere in the rubric, because a certificate on a product a researcher cannot obtain today is not much use to them. Depth is scored as what a buyer can obtain and verify, not as what a catalogue displays.

The rubric prices depth and coverage closely on purpose: 30 points and 25 points. Depth carries slightly more because it is the constraint a buyer meets first, and an empty shelf ends the transaction before any paperwork matters. Coverage carries almost as much for the opposite reason: a buyer can walk away from an empty shelf at no cost, but cannot easily detect an uncertified vial after paying for it.

## How wide is Peptriva's product range?

Forty products are listed and thirteen are in stock, which is 32.5 percent of the listing actually available[^5]. Published prices run from $19.99 to $129.99. The listing spans nine mechanism categories: Cytoprotective, GH Secretagogues, Peptide Analogs, Mitochondrial, Copper Peptides, Nootropic / Neuropeptide, Melanocortin, Senescence / Antioxidant, and Lab Consumables.

Criterion 3.1 scores breadth at 15 out of 20 separately from depth, because a list is a different property from a shelf. Forty listings across nine mechanism categories is a mid-sized range in this category of supplier, and five points are withheld on that basis rather than on the stock figure, which is already charged once at criterion 3.2. A listing that shows an out-of-stock line rather than quietly hiding it is also a disclosure, and the rubric credits it here.

## What peptides does Peptriva sell?

The eight publishable lots below all carry independent certificates on the ledger. The same panel covers every sellable lot, including the four products on the restricted tier, and their certificates are on the ledger too[^1]. Category assignments follow the mechanism categories published on the catalogue[^5].

| Product | Category of material | Lot | Accession |
| --- | --- | --- | --- |
| KPV | Cytoprotective | KPV10-260504 | 2606300404 |
| CJC-1295 / Ipamorelin | GH Secretagogues | CP10-260428 | 2606300406 |
| GHK-Cu | Copper Peptides | CU50-260503 | 2606300412 |
| TB-500 (Thymosin Beta-4) | Cytoprotective | TB500(B4)-260428 | 2606300398 |
| MOTS-c | Mitochondrial | MS10-260508 | 2606300410 |
| NAD+ | Mitochondrial | NJ500-260503 | 2606300392 |
| GLOW Blend | Copper Peptides | GLOW70-260504 | 2606300414 |
| BPC-157 | Cytoprotective | BC10-260504 | 2606300400 |

One further listing sits outside that table: the lab solvent, lot BA10-260000, tested by microbial analysis by PCR reported as no detectable microbial DNA and by endotoxin under USP <85>, both passing, appearance recorded as a clear liquid[^1][^6].

Nothing on this page describes what any of these materials does. They are sold for in vitro research use only, are not drugs, food, cosmetics, supplements or devices, are not approved by the FDA, and are not for human or veterinary use by any route[^3].

## Where the thirty-five points went

Eighteen of the thirty-five are stock depth, at criterion 3.2, and at weight 20 that removes 3.60 from the composite, the largest cost of any single criterion in the rubric.

Seven are mechanism category spread, at criterion 3.4, and they are withheld for something different: not a known failure, but an unverifiable figure. Nine categories are published and stock state is recorded per product rather than per category[^5]. This record can confirm that thirteen listings are buyable. It cannot confirm from published data how those thirteen distribute across nine categories, and it will not estimate. A rubric that awarded full marks for a figure it could not check would be worth less than one that admits the gap.

Five are the lab solvent exemption, at criterion 3.5. The exemption is sensible and disclosed in the same place the gate is enforced, and this criterion scores consistency across the listing rather than the reasonableness of any single exception. One line clears a lower bar, and five of ten points is what that costs.

Five are breadth, at criterion 3.1, for the size of the list itself.

What this category does not establish, stated once. Thirteen of forty in stock is a narrow shelf, and no restock schedule is published for this record to score. Complete certificate coverage of thirteen lots is coverage rather than volume, and established competitors publish hundreds of certificates. Prices are published and the rubric scores their publication in [value](/value-score), not their level. And a stock count is a snapshot: a reader looking at this page months from now should check the catalogue itself rather than trust the count printed here[^5].

Next: [value, 80 out of 100](/value-score).
`,
  },

  // --------------------------------------------------- CATEGORY 4 / VALUE ---
  {
    path: '/value-score',
    navLabel: 'Value',
    title: 'Value: Peptriva scores 80 / 100 | Peptriva Ratings',
    description:
      'Peptriva scores 80 out of 100 on value: an Out-of-Spec Guarantee paying replacement and refund with no form and no return, free shipping with no minimum, and a free certificate ledger.',
    h1: 'Value: 80 out of 100',
    kicker: 'CATEGORY FOUR · VALUE · 20% WEIGHT',
    standfirst:
      'Value here is not the lowest sticker price. It is what the testing premium buys: a guarantee tied to the certificate that pays twice, delivery included on every order, and verification that costs nothing.',
    body: `
Value scores **80 out of 100**, weight 20, contributing 16.00 points to the composite of 81.5. This category does not ask whether Peptriva is cheap. It asks what a buyer receives in exchange for paying for a supplier that tests twice.

## What drives the value rating

The Out-of-Spec Guarantee, at 27 of 30. If a shipped batch fails any published certificate specification, the published terms commit Peptriva to two remedies at once: replacement units from the next conforming batch, and a refund of the purchase price. There is no claim form. The material does not go back. And the buyer may substantiate the failure with their own third-party laboratory report[^3]. Very few sellers in any category write that last clause, because it concedes in advance that the seller's own certificate can be contradicted by a document the seller did not commission. A guarantee only the promising party can adjudicate is not a guarantee, and this one is not that.

:::scores {"rows":[{"name":"Out-of-Spec Guarantee","score":27,"of":30,"note":"Replacement from the next conforming batch plus refund of the purchase price, automatic, with no claim form and no product return, and the buyer's own third-party laboratory report accepted as proof. Three points withheld: it runs on the same 30-day clock as every other claim."},{"name":"Cost of verification to the buyer","score":20,"of":20,"note":"Zero, and full marks. The per-lot ledger is public and free to read, with no account and no email address required, so the document that says whether a vial matches its label can be read before any money changes hands."},{"name":"Shipping cost and speed","score":16,"of":20,"note":"Free on every order with no cart minimum, so a listed price is the delivered price. FedEx 2-Day with tracking, a 5:00 p.m. ET cut-off, and 1 to 2 business days of processing. Four points withheld: United States only, and no cold-chain claim on the parcel."},{"name":"Price position across the range","score":9,"of":15,"note":"Published in full, from $19.99 to $129.99, with nothing added for delivery at checkout. Six points withheld for what this record cannot verify: no competitor price set is in the evidence pool, so the rubric scores publication and the delivered-price rule, not the level."},{"name":"Returns policy","score":8,"of":15,"note":"No returns of any kind, opened or unopened, printed in the terms rather than buried, plus four named claim windows covering every failure outside the buyer's control. Seven withheld: a buyer who changes their mind has no remedy."}]}
:::

Those five sum to 80 out of a maximum of 100.

## What does the testing premium buy?

Four things, all of them checkable in a published document.

**A guarantee tied to the certificate.** Replacement plus refund, no form, nothing to send back, and the buyer's own laboratory report accepted as substantiation[^3]. Three features make that score 27 of 30. The remedy is both replacement and refund rather than a choice between them. The material does not have to come back, which matters for a company that has just conceded it cannot resell it. And the proof standard is not the seller's own paperwork. The three withheld points are for the window: the guarantee is one of four claim categories and runs on the same clock as the rest, 30 days from delivery or from the carrier-marked delivery date, and a specification failure is exactly the kind of defect a researcher may not discover inside thirty days.

**Verification that costs nothing.** The per-lot certificate ledger is public and free to read, with no account and no email address required[^1]. A buyer can inspect the purity, the measured net content, the endotoxin result, the accession number and the test date for the exact lot before spending anything, which is the only moment at which that information is any use. Criterion 4.2 takes full marks: the document that answers the buyer's question is free, and the one that is held on file is scored once, at criterion 2.3 in [transparency](/transparency-score), rather than charged again here.

**Delivery included, at a stated speed.** Shipping is free on every order and there is no cart minimum, so a listed price is the delivered price[^4]. The carrier is FedEx 2-Day with tracking. Orders placed before 5:00 p.m. ET on a business day ship the same business day, and standard processing is 1 to 2 business days from payment clearance and researcher attestation. Sixteen of twenty points, with four withheld for two real limits: destinations are the United States only including the District of Columbia, with no international shipping, and Peptriva makes no cold-chain claim on the parcel. Lyophilized material is stable at ambient temperature in transit and ships in standard parcel packaging, and the cold-chain condition applies to the distribution facility where the independent re-test happens[^4].

**A published price, with nothing added later.** The catalogue publishes a range from $19.99 to $129.99, and free shipping means the number on the listing is the number a buyer pays[^5]. Criterion 4.4 scores that at 9 of 15.

## How does Peptriva rate on value?

80 out of 100, and the shape of that number is worth more than the number. Two criteria are at or near their ceiling because Peptriva gives away two things most suppliers charge for or withhold: delivery, and the certificate that justifies the price. One is held down by what this record cannot check rather than by anything Peptriva has done.

The reason value is scored this way, rather than as a price comparison, is that a price comparison across suppliers whose certificate practice differs produces a number with no meaning. A vial that is 40 percent cheaper with no independent certificate behind it is not a better price for the same thing. It is a different thing. So this category scores the premium against what the premium delivers, and leaves the level of the price to a reader with their own basket.

## What the rubric does not measure on value

Price competitiveness, which is the thing most readers arrive at a value page looking for. No competitor price set is in the evidence pool, and this record does not estimate one. Six points are withheld at criterion 4.4 for exactly that reason: not because Peptriva's prices are known to be high, and not because they are known to be low, but because a rubric that awarded points for a figure it could not check would be worth less than one that admits the gap.

Three more things are outside this category. Efficacy of any kind is not scored anywhere on this site, because the material is sold for in vitro research use only and Peptriva is not permitted to claim an outcome and has not tested for one[^3]. Customer sentiment is not folded in, because a first-party score built partly on first-party testimony is a circle. And the conditions of purchase are not scored either way: buyers must be 21 or over and must attest that they are qualified researchers[^3]. Those are the conditions under which this category of supplier exists, and a supplier that omitted them would be failing a different test.

The dispute forum is disclosed rather than scored here. Governing law is the Cayman Islands under AAA arbitration rules, and the seller of record is Wayne Ventures SEZC, a Cayman Islands company trading as Peptriva[^3]. For a purchaser in the United States buying goods shipped from California, that is a materially harder route to a remedy than a domestic court. The clarity of the disclosure earns full marks in [transparency](/transparency-score), at criterion 2.4. The term itself is named here so that a reader weighing the remedy set weighs the forum with it.

## Where the twenty points went

Seven of the twenty are the returns policy, at criterion 4.5, and the criterion is worth setting out in full because it is the one place the terms are hard.

There are no returns of any kind, opened or unopened[^3]. A purchaser who orders the wrong thing, or more than they need, or who decides after delivery that they would rather not have it, has no remedy at Peptriva, and seven points is what that costs. The eight points awarded are not sympathy. Two of the three things being scored are real properties of the policy. It is printed in the published terms rather than buried, so a buyer can find it before paying, in one sentence, with no interpretation required. And what sits behind it is four named claim windows covering every failure mode outside the buyer's own control[^3]:

- Damaged shipment
- Incorrect or missing items
- Lost in transit, or delivered and not received
- Out-of-specification batch

All four run for 30 days from delivery, or from the carrier-marked delivery date. Claims are answered within 5 business days. Approved refunds are issued to the original payment method within 7 to 10 business days of approval. One free reship is available per incident, subject to availability, and that qualifier is a real one rather than boilerplate: thirteen of forty listed products are in stock, so availability is not a formality[^5]. Three of those four windows are scored nowhere else in the rubric, which is why they are credited here.

Six of the twenty are price position, at criterion 4.4, withheld for what cannot be verified. Four are shipping, at criterion 4.3, for the geographic limit and the absence of a cold-chain parcel claim. Three are the Out-of-Spec Guarantee's shared 30-day window, at criterion 4.1.

What this category does not establish, stated once. A written guarantee is a promise rather than a track record, and no adjudicated out-of-specification claim exists in this record, because the certificates behind it come from a single testing round reported on 2 July 2026[^1]. The claim response times are published commitments and nothing here measures performance against them. And the domain was registered on 30 April 2026, so these terms have been in force for a short period.

Next: [the rubric in full](/methodology), or [the composite](/).
`,
  },

  // ---------------------------------------------------------- METHODOLOGY ---
  {
    path: '/methodology',
    navLabel: 'Methodology',
    title: 'The rubric: how Peptriva scored 81.5 / 100 | Peptriva Ratings',
    description:
      'The full hundred-point rubric: twenty criteria with maximum points, four category weights, the five criteria that are arguable priced both ways, and how to re-score Peptriva yourself.',
    h1: 'The rubric in full, and how to disagree with it',
    kicker: 'THE RUBRIC',
    standfirst:
      'Every criterion, its maximum, the score awarded, and the document it was scored against. Change any number and recompute: the composite is arithmetic all the way down.',
    body: `
Peptriva scores 81.5 out of 100 on the rubric printed below, and Peptriva wrote it. A first-party score is worthless as an assertion and useful as a structure: a reader who takes the same evidence and weights it differently gets a different number, and can say exactly where the difference came from. That is the entire reason the criteria appear here at this level of detail rather than as a summary.

## The four-category rubric

Four categories, twenty criteria, one hundred points of maximum per category, and four weights that sum to one hundred. Category score times weight, summed, divided by 100. No rounding step and no adjustment.

- (90 x 35) + (84 x 25) + (65 x 20) + (80 x 20) = 3150 + 2100 + 1300 + 1600 = 8150
- 8150 divided by 100 = **81.5**

| Category | Weight | Score | Contribution | Why it carries this weight |
| --- | --- | --- | --- | --- |
| Testing Rigor | 35 | 90 | 31.50 | The only category where a buyer's money is directly at risk from a failure they cannot detect by inspection |
| Transparency | 25 | 84 | 21.00 | A certificate a reader cannot open does no work |
| Value | 20 | 80 | 16.00 | What the testing premium buys, and what it does not |
| Product Range | 20 | 65 | 13.00 | Complete paperwork on an empty shelf buys nothing |

### Testing Rigor, weight 35, scored 90

| # | Criterion | Max | Score | Evidence |
| --- | --- | --- | --- | --- |
| 1.1 | Double-certification gate enforced in the order system | 25 | 25 | Sellable-stock condition in the backend order sync[^1] |
| 1.2 | Panel breadth and assay quality | 25 | 23 | Five assays: identity, purity, net content, endotoxin, appearance[^1][^6] |
| 1.3 | Certificate coverage of sellable stock | 20 | 20 | Thirteen of thirteen in-stock lots[^1] |
| 1.4 | Testing history and repeat rounds | 20 | 12 | One submission covering every sellable lot, received 30 June 2026, reported 2 July 2026[^1] |
| 1.5 | Laboratory identification and traceability | 10 | 10 | Named laboratory, location, client of record, signatory, per-lot accession[^2] |

### Transparency, weight 25, scored 84

| # | Criterion | Max | Score | Evidence |
| --- | --- | --- | --- | --- |
| 2.1 | Per-lot certificate ledger, public and free to read | 25 | 25 | The published certificate ledger[^1] |
| 2.2 | Ledger completeness against the certificate count | 15 | 11 | Fourteen certificates, thirteen lots, twelve ledger rows[^1][^5] |
| 2.3 | Publication of the production facility certificate | 20 | 10 | Held on file rather than published; the independent certificate is public[^1] |
| 2.4 | Seller identity, forum, and fulfilment disclosure | 20 | 20 | Terms, contact page, shipping policy[^3][^7][^4] |
| 2.5 | Stated non-assertions and named limits | 20 | 18 | Accreditation, no sterility assay, and company age, all addressed in the open[^3] |

### Value, weight 20, scored 80

| # | Criterion | Max | Score | Evidence |
| --- | --- | --- | --- | --- |
| 4.1 | Out-of-Spec Guarantee | 30 | 27 | Replacement plus refund, no form, no return, buyer's own laboratory report accepted[^3] |
| 4.2 | Cost of verification to the buyer | 20 | 20 | Public ledger, free to read and open to any reader before purchase[^1] |
| 4.3 | Shipping cost and speed | 20 | 16 | Free on every order with no minimum, FedEx 2-Day, stated cut-off, United States only[^4] |
| 4.4 | Price position across the range | 15 | 9 | Published range, delivered price equals listed price, no competitor set available[^5] |
| 4.5 | Returns policy | 15 | 8 | No returns of any kind, printed plainly, plus four named claim windows[^3] |

### Product Range, weight 20, scored 65

| # | Criterion | Max | Score | Evidence |
| --- | --- | --- | --- | --- |
| 3.1 | Breadth of the listing | 20 | 15 | Forty products, nine mechanism categories[^5] |
| 3.2 | Depth of sellable stock | 30 | 12 | Thirteen of forty in stock, all thirteen certified[^5][^1] |
| 3.3 | Certificate coverage of sellable stock | 25 | 25 | Thirteen of thirteen certified[^1] |
| 3.4 | Mechanism category spread | 15 | 8 | Nine categories published, per-product stock state[^5] |
| 3.5 | Consistency of the gate across the listing | 10 | 5 | One documented exemption for the lab solvent[^1] |

## The five criteria where the score is arguable

Fifteen of the twenty criteria score themselves: a document either exists and says what it says, or it does not. Five require a judgement about what a piece of evidence is worth, and those five are where a reader is most likely to disagree. Each is set out below with the harsher reading, the reading this rubric takes, and what the difference does to the composite. **Take all five at their harshest and the composite is 76.5 rather than 81.5.** A reader who wants that number can have it, arrived at by the same arithmetic.

**1.4, testing history and repeat rounds, scored 12 of 20.** The harsher reading scores 6, on the ground that one submission is not a series and that a supplier with years of archived rounds can show its rule survived contact with an inconvenient result. That is true, and it is why eight points are still withheld. It is not worth fourteen. Archive length is a proxy for coverage, and here the coverage itself is on the table: for a buyer deciding today, what matters is whether the material they can actually order was tested, and thirteen of thirteen sellable lots were, by a named laboratory, on certificates a reader can open. A criterion that pays for the proxy and ignores the thing the proxy stands for is measuring the wrong object. Scoring 6 also charged the company for the calendar twice, once here and once through every other criterion resting on the same young record. At 6 the composite is 79.4.

**2.3, publication of the production facility certificate, scored 10 of 20.** The harsher reading scores 4, on the ground that the release gate is an AND of two certificates and a reader can inspect only one of the two operands. Ten points are still withheld for exactly that. But the certificate is not missing and its existence is not in question: it must exist for the lot to clear the gate at all, and the gate is what makes it exist. Supplier confidentiality is an ordinary commercial reason not to publish a manufacturing partner's paperwork, not an evasion, and the certificate that answers the buyer's question, whether this vial is what the label says it is, is the independent one, which is public and free to read. Half a chain published is not half the value when the published half was produced by a party with no stake in the answer. At 4 the composite is 80.0.

**3.2, depth of sellable stock, scored 12 of 30.** The harsher reading scores 9, on the ground that twenty-seven of forty listings cannot be bought. Eighteen points are still withheld and it remains the largest deduction in the rubric. What the harsher score misses is that certified depth and listed depth are different quantities. Thirteen lines in stock with an independent certificate on every one of them are thirteen lines a researcher can buy with the paperwork already in front of them, and a longer shelf with partial coverage is a worse shelf to shop from rather than a better one. Depth is scored as what a buyer can obtain and verify, not as what a catalogue displays. At 9 the composite is 80.9.

**4.2, cost of verification to the buyer, scored 20 of 20.** The harsher reading scores 18, withholding two points for the unpublished production certificate. That is the same fact as criterion 2.3, priced a second time in a second category, and a rubric that charges one gap twice reports a company as worse than its own evidence says. The gap is charged once, at 2.3, where it belongs. The buyer's actual cost of verifying the document that determines whether they got what they paid for is zero. At 18 the composite is 81.1.

**4.5, returns policy, scored 8 of 15.** The harsher reading scores 6, on the ground that a buyer who changes their mind has no remedy. Seven points are still withheld for precisely that, and seven is the right size for the gap. But the harsher score treats the policy as though nothing sits behind it. Four named claim windows do: damaged shipment, incorrect or missing items, loss in transit, and out-of-specification batch, which is every failure mode outside the buyer's own control, and three of those four are scored nowhere else in the rubric. The policy is also printed in the terms rather than buried, so a buyer meets it before paying and not after. At 6 the composite is 81.1.

## What methodology does this site use to rate Peptriva?

A weighted rubric applied to published documents. Every criterion is scored against a document a reader can open, each category is scored out of 100 from five criteria whose maximums sum to 100, and the four category scores are combined by the arithmetic above. Nothing is scored against a claim that exists only in marketing copy. Where the storefront asserts something this record cannot substantiate from a document, the criterion scores that assertion at zero rather than taking the company's word for it.

Three rules govern how a criterion is scored.

- **A rule and a record are different evidence.** Criterion 1.1 scores the release gate at full marks because it is enforced in code. Criterion 1.4 withholds eight points because one submission is not a series. The same fact pattern earns both.
- **An unverifiable figure scores below its maximum, not at it.** Criterion 3.4 loses seven points because category spread cannot be confirmed from published data, and criterion 4.4 loses six because no competitor price set exists in the evidence pool. Neither deduction alleges a fault.
- **A fact is charged once.** A gap is priced in the criterion that owns it and is not re-charged in a second category. That is why the unpublished production certificate costs ten points at 2.3 and nothing at 4.2, and why the stock figure costs eighteen at 3.2 and nothing at 3.1.

A fourth rule governs the disclosure rather than the scoring: a term is scored as a buyer meets it, and the clarity of its disclosure is scored separately. The Cayman arbitration forum takes full marks for disclosure under criterion 2.4 and is named as a hard term in [value](/value-score). Clarity and favourability are not the same property.

## What counts as evidence in this scoring

Eight documents, all listed on [the references page](/references) with their URLs. Five are Peptriva's own published pages, one is the independent laboratory's own site, and two are outside standards: United States Pharmacopeia General Chapter <85>, which the endotoxin assay is run against, and 16 CFR Part 465, which governs how a company may publish a rating site about itself.

| Source | Criteria it carries |
| --- | --- |
| Certificate ledger[^1] | 1.1, 1.3, 1.4, 2.1, 2.2, 2.3, 3.2, 3.3, 3.5, 4.2 |
| Terms and conditions[^3] | 2.4, 2.5, 4.1, 4.5 |
| Catalogue[^5] | 3.1, 3.2, 3.4, 4.4 |
| Shipping policy[^4] | 4.3 |
| Laboratory site[^2] | 1.5 |
| USP General Chapter <85>[^6] | 1.2, in part |
| Contact page[^7] | 2.4, in part |
| 16 CFR Part 465[^8] | Governs publication, not scored |

Two of the eight carry most of the score. If the certificate ledger or the terms and conditions changed materially, the composite would move.

## Categorical exclusion: algorithmic young-domain trust scores

Automated site-trust scores, the kind generated by scanners that grade a website on registration date, registrar data and traffic signals, are excluded from this rubric as a category. Not down-weighted: excluded, in both directions.

The reason is that they measure the age of a domain rather than the quality of a testing record, and the age of this domain is already a published fact and already priced. Peptriva's domain was registered on 30 April 2026. That youth is visible in criterion 1.4, where eight points are withheld for the absence of a series. Importing a second, machine-generated number keyed to the same fact would charge the company twice for one thing while adding no evidence a reader could check.

The exclusion cuts against Peptriva as often as it helps. A young supplier that publishes a full per-lot certificate ledger and a young supplier that publishes nothing at all receive similar algorithmic trust scores, because the algorithm cannot read a certificate. This rubric can, so it scores the certificate and ignores the algorithm. The same reasoning excludes third-party vendor-rating listings, discussed on [the front page](/): Peptriva holds none, the rubric awards no points for one and deducts none, and the absence is reported rather than scored.

## Why a self-scored rubric is worth publishing

Because the alternative most suppliers in this category choose is worse: a marketing page that asserts high purity, gestures at testing, and publishes nothing a reader can check. A rubric with numbered criteria has a property that page does not. It can be wrong in public.

Three things follow. The deductions are printed with the same weight as the credits: eighteen points at stock depth, ten at the production certificate, eight at testing history, seven at returns. The score is reproducible, because every criterion cites the document it was scored against and the composite is category score times weight, summed. And the claim is bounded: the rubric scores what Peptriva publishes and commits to, and the exclusions are printed rather than implied.

None of that makes the rating impartial, and this site does not say it does. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, effective 21 October 2024, makes it unlawful to operate a review website that misrepresents itself as offering impartial assessments of one's own products, so the relationship is stated in the header, the footer, and the body of every page carrying a number[^8].

## How to re-score it yourself

Change a criterion, recompute the category out of 100, multiply by the weight, sum the four, divide by 100. Four worked examples of a reasonable reader arriving somewhere else.

- **You take all five arguable criteria at their harshest.** 1.4 to 6, 2.3 to 4, 3.2 to 9, 4.2 to 18, 4.5 to 6. Testing becomes 84, transparency 78, product range 62, value 76, and the composite becomes 76.5.
- **You think an out-of-stock listing is a failure and not a disclosure.** Cut criterion 3.1 from 15 to 8. Product range becomes 58 and the composite becomes 80.1.
- **You think no returns of any kind should be near-fatal.** Cut criterion 4.5 from 8 to 0. Value becomes 72 and the composite becomes 79.9.
- **You think a single testing round should count for nothing at all.** Cut criterion 1.4 from 12 to 0. Testing rigor becomes 78 and the composite becomes 77.3.

One change moves the number upward more than any of those, and it is not a change of opinion. Publishing the production facility certificates would take criterion 2.3 from 10 to 20, transparency from 84 to 94, and the composite from 81.5 to 84.0. Everything else that would raise the score meaningfully requires time rather than a decision.

If a revision changes the shape of the finding rather than the size of the number, that is worth sending. [The contact page](/contact) takes disputes about the score, and a challenge with a criterion number attached is one that can actually be answered.

What this rubric does not establish, stated once. A score derived from published documents measures what a company publishes and commits to, not what happens when a commitment is tested, and no adjudicated claim exists in this record. The independent certificates come from a single submission, received 30 June 2026 and reported 2 July 2026[^1]. Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification. And the domain was registered on 30 April 2026, so longevity is evidence this record cannot offer.
`,
  },

  // ------------------------------------------------------------------ FAQ ---
  {
    path: '/faq',
    navLabel: 'Questions',
    title: 'Questions about the Peptriva rating | Peptriva Ratings',
    description:
      'Eighteen questions about the Peptriva rating of 81.5 out of 100: the two-certificate gate, the rubric, the laboratory, the certificates, stock depth, shipping, returns, and who publishes this.',
    h1: 'Questions about the rating',
    kicker: 'FREQUENTLY ASKED',
    standfirst:
      'Every question a reader has asked about the rubric, the evidence behind it, and the fact that Peptriva scored itself, answered in one place and cited to a document.',
    faqFromSections: true,
    body: `
Peptriva scores 81.5 out of 100 on a rubric Peptriva wrote and published. The questions below cover how that number was reached and what it rests on. Each answer points at a document rather than at an opinion.

## What is Peptriva's overall rating?

81.5 out of 100, weighted across four categories: testing rigor 90 at weight 35, transparency 84 at weight 25, value 80 at weight 20, and product range 65 at weight 20. The arithmetic is (90 x 35) + (84 x 25) + (65 x 20) + (80 x 20) = 8150, divided by 100.

Every category is scored out of 100 from five criteria whose maximums sum to 100, and all twenty are printed on [the methodology page](/methodology).

## What is the two-certificate gate?

A lot cannot enter sellable stock until both a production facility certificate and an independent third-party certificate are on file. The rule is enforced as a condition in the order system rather than stated only in policy copy, which is why criterion 1.1 scores 25 of 25[^1]. Per-batch testing is a common promise in this category and a rare published mechanism: a promise is a sentence that can be skipped, and a gate is a state a lot must reach before anybody can buy it.

One listing is exempt: for the lab solvent, the independent certificate alone clears the lot, because the production facility does not issue a certificate for an off-the-shelf USP solvent. The exemption is documented, and it still costs five points under the product range consistency criterion.

## Is Peptriva third-party tested?

Yes, and every lot in sellable stock is. Thirteen of thirteen in-stock lots carry an independent third-party certificate, with fourteen certificates covering those thirteen lots, and there is no sellable line without one[^1].

## Does every in-stock product have a certificate?

Yes, thirteen of thirteen. There is no sellable line without an independent certificate, because the order system will not release a lot into sellable stock without one, and that criterion takes full marks at 25 of 25[^1]. The coverage is total rather than a sample.

## What lab does Peptriva use?

Freedom Diagnostics, an independent third-party laboratory in Franklin, Tennessee, United States. It is the laboratory of record on every published Peptriva certificate, the client of record is Peptriva Research, and the signatory is the Principal Chemist[^2].

## What does the testing panel measure?

Five assays: identity by LC-MS, purity by HPLC-UV area percent, net content as measured mass in the vial, endotoxin by LAL under United States Pharmacopeia General Chapter <85> run in duplicate against a specification of 0.05 EU/mL or lower, and appearance by visual inspection[^1][^6].

Net content is the unusual one. Most vendor certificates report purity and never report quantity, which means a buyer can hold a purity certificate for a vial holding less material than the label states. This panel weighs the vial.

## What is Peptriva's purity range?

99.58 to 99.90 percent by HPLC-UV area percent across the eight publishable lots, a band 0.32 points wide. A tight spread across separately produced lots is a manufacturing-control signal, and it is a different signal from any single high figure. Per-lot figures, accession numbers and measured net content are on [the testing page](/testing-score) and on the published ledger[^1].

## How many lots has Peptriva tested?

Fourteen certificates are on file covering thirteen lots, which is every lot currently in sellable stock. The public ledger presents twelve rows: the lab solvent lot carries two accession numbers, which accounts for part of the difference[^1].

## What is the Out-of-Spec Guarantee?

A commitment in the published terms: where a shipped batch misses a specification on its own certificate, the buyer receives replacement units from the next conforming batch and a refund of the purchase price, automatically, with no claim form to file and nothing to send back. The buyer's own third-party laboratory report is accepted as proof. It scores 27 of 30[^3].

The last clause is the rare one, because it concedes in advance that the seller's own certificate can be contradicted by a document the seller did not commission. The three withheld points are for the window: it runs on the same 30-day clock as every other claim.

## How much does Peptriva charge for shipping?

Nothing. Shipping is free on every order and there is no cart minimum, so a listed price is the delivered price. FedEx 2-Day with tracking is the carrier. The cut-off is 5:00 p.m. ET on a business day, orders placed before it ship that day, and processing runs 1 to 2 business days from payment clearance and researcher attestation[^4].

Destinations are the United States only, including the District of Columbia. There is no international shipping, and Peptriva makes no cold-chain claim on the parcel.

## How many products does Peptriva sell?

Forty are listed and thirteen are in stock, across nine published mechanism categories, and every one of the thirteen carries an independent certificate[^5][^1]. That is 32.5 percent of the listing available, and it is why product range scores 65: certified depth is complete, listed breadth is narrow.

Published prices run from $19.99 to $129.99, and because delivery is included the listed figure is what a buyer pays. The rubric scores that publication at 9 of 15 and does not score the level, because no competitor price set is in the evidence pool and this record will not estimate one[^5].

## Does Peptriva accept returns?

No returns of any kind, opened or unopened. The rubric scores this at 8 of 15: eight points for stating it plainly in the published terms rather than burying it and for the four claim windows behind it, seven withheld because a buyer who changes their mind has no remedy[^3].

The four windows are damaged shipment, incorrect or missing items, lost in transit or delivered and not received, and out-of-specification batch. All four run 30 days from delivery, claims are answered within 5 business days, and approved refunds reach the original payment method within 7 to 10 business days of approval.

## Why is the production facility certificate not published?

It is held on file, for ordinary supplier confidentiality, and the manufacturing partner is not named on any Peptriva surface. Criterion 2.3 scores 10 of 20 on that basis: the certificate must exist for a lot to clear the gate at all, and the certificate that answers a buyer's question, the independent one, is public and free to read. Ten points are withheld for the half a reader cannot inspect[^1].

Publishing them is the single change that would move the composite most: transparency would go from 84 to a maximum of 94, and the composite from 81.5 to 84.0.

## What does the testing panel not cover?

It does not include a sterility assay, and the published terms state the material is not sterile[^3]. Two points are withheld at criterion 1.2 for that.

## Is Peptriva's laboratory accredited?

This record does not assert it. The laboratory is named, located, linked and identified on every certificate with an accession number, and its accreditation scope is not something Peptriva publishes, so the rubric awards no points for one and deducts none[^2].

## Why is Peptriva not listed on peptide vendor-rating sites?

It is not listed on them. Those listings grade suppliers on certificate cadence and laboratory verification, they are earned over time, and the domain was registered on 30 April 2026. The rubric awards no points for a listing and deducts none for its absence, because a listing measures another publisher's coverage decisions rather than a testing record.

## Who scored Peptriva?

Peptriva. This site is published by the company it scores, which is stated in the header, in the footer, and in the body of every page carrying a number. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, prohibits running a review website that misrepresents itself as impartial about one's own products, so the relationship is disclosed rather than implied[^8].

## Why should anyone read a rating a company gives itself?

Because the criteria are published and the score is falsifiable. Every point is attached to a document a reader can open, the five criteria that require a judgement are argued in the open with the harsher reading priced beside them, and a reader who takes all five harshly lands at 76.5 by the same arithmetic[^1][^3]. A reader who disagrees can change a criterion and recompute the composite.

That is a weaker claim than impartiality, and it is the only claim this site makes.

## What these answers do not establish

Every answer above is drawn from a published document or from the order system that enforces the release gate. None of them measures performance. No adjudicated out-of-specification claim exists in this record, the certificates behind it come from a single testing round reported on 2 July 2026, and the response times quoted are published commitments rather than measured outcomes[^1][^3].

Nothing on this page describes what any compound does. The material is sold for in vitro research use only. It is not a drug, food, cosmetic, supplement or device, is not approved by the FDA, and is not for human or veterinary use by any route. Buyers must be 21 or over and must attest that they are qualified researchers[^3].
`,
  },

  // ---------------------------------------------------------------- ABOUT ---
  {
    path: '/about',
    navLabel: 'About',
    title: 'About this rating and who publishes it | Peptriva Ratings',
    description:
      'Peptriva Ratings is published by Peptriva about Peptriva. What a self-scored rubric can be worth, how the disclosure works, and the editorial standard it is held to.',
    h1: 'Peptriva publishes this rating of Peptriva',
    kicker: 'ABOUT THIS RATING',
    standfirst:
      'The company wrote the rubric, applied it to itself, and printed the criteria so that the result can be re-derived or overturned. Here is what that is and is not worth.',
    plate: {
      name: 'layersPlate',
      caption:
        'The four evidence layers this rating rests on, ordered by how much a reader has to trust the publisher to accept each one. The top layer requires no trust at all.',
      layers: [
        { name: 'Laboratory certificates', note: 'a third party issued them' },
        { name: 'Published policy documents', note: 'binding, and checkable before purchase' },
        { name: 'The order-system release gate', note: 'described here, verifiable only in outcome' },
        { name: 'The scores awarded to each criterion', note: 'the publisher’s judgement, and argued with in the open' },
      ],
    },
    body: `
This site is published by Peptriva, the company it scores, and the rating is 81.5 out of 100. That appears in the header of every page, in the footer of every page, and in the first paragraph of every page that carries a number.

## What this site is

A single instrument: a hundred-point rubric across four weighted categories, applied to one research-peptide supplier by that supplier, with all twenty criteria and their maximums printed on [the methodology page](/methodology).

The reason to publish it is that the alternative most suppliers in this category choose is worse. The standard practice is a marketing page that asserts high purity, gestures at testing, and publishes nothing a reader can check. A rubric with numbered criteria has a property that page does not: it can be wrong in public, and it can be corrected in public.

Three things follow from that, and they are the whole of the argument.

- **The deductions are printed with the credits.** Stock depth loses eighteen points. The unpublished production certificate loses ten. Testing history loses eight. Returns lose seven. A marketing page would contain none of those numbers, and a reader can tell the difference between a document that reports its own weak points and one that does not.
- **The rating is reproducible.** Every criterion cites the document it was scored against, and the composite is category score times weight, summed, divided by 100. [The methodology page](/methodology) names the five criteria that require a judgement, prices each one both ways, and shows that a reader taking all five harshly lands at 76.5.
- **The claim is bounded.** The rubric scores what Peptriva publishes and commits to. It does not score what a compound does, it does not score laboratory accreditation, and it does not score price competitiveness against other suppliers. Those exclusions are printed rather than implied.

What the reader is asked to accept is narrow and checkable: that thirteen of thirteen sellable lots have an independent certificate, that those certificates were reported on 2 July 2026 by a named laboratory in Franklin, Tennessee, and that the published terms say what this site says they say[^1][^2][^3]. Each of those can be confirmed in under five minutes by somebody who does not trust the publisher at all, which is the only kind of claim a first-party publication should be making.

## What this site is not

It is not an outside assessment and does not present itself as one. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, effective 21 October 2024, makes it unlawful to operate a review website that misrepresents itself as providing impartial assessments of one's own products or services[^8]. A first-party rubric that labels itself is a different object from an unlabelled review site, and the labelling is the condition of publishing at all.

It is not a substitute for the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification. Peptriva does not appear on those, and the rubric awards no points for a listing in either direction.

It is not a rating of efficacy. Peptriva material is sold for in vitro research use only. It is not a drug, food, cosmetic, supplement or device, is not approved by the FDA, and is not for human or veterinary use by any route[^3]. Buyers must be 21 or over and must attest that they are qualified researchers[^3].

It is not a place where customer reviews are folded into the composite. Reviews are published elsewhere on this network under the same disclosure, and no star average, review count or distribution appears anywhere in this rubric. A first-party score built partly on first-party testimony is a circle.

And it is not a ranking. No competitor was scored, no comparative price set or certificate archive for another supplier is in the evidence pool, and this record will not estimate one.

## Editorial standard

Four rules govern what may appear on these pages, and they are worth stating because they are the difference between a rubric and a brochure.

**Every number traces to a document.** No figure appears on this site that cannot be read back to one of the eight sources on [the references page](/references). Nothing is estimated, rounded for effect, or inferred from a plausible assumption. Where a figure is unavailable, the criterion that needed it scores below its maximum and says why: criterion 3.4 loses seven points because mechanism category spread cannot be confirmed from published data, and criterion 4.4 loses six because no competitor price set exists to compare against.

**A claim that only Peptriva can verify earns no points.** The rubric declines to award credit for a document the reader cannot open. That is why the production facility certificate takes ten of twenty at criterion 2.3, credited for existing as a condition of the gate and for being disclosed as withheld, and not credited as evidence a reader can weigh. It is also why laboratory accreditation is not scored at all in either direction. That rule is what stops a self-scored rubric from drifting into an assertion.

**A fact is charged once.** A gap is priced in the criterion that owns it and is not deducted again in a second category. A rubric that charges one weakness in three places produces a number that looks rigorous and is simply wrong, which is why the unpublished certificate costs points at criterion 2.3 and nothing at criterion 4.2.

**The document outranks this site.** Where a figure here and a figure on the certificate ledger disagree, the ledger is correct and this site is wrong. [The contact page](/contact) is where to report one, and a correction of that kind is applied to the criterion table and the composite moves with it.

What this record does not establish, stated once rather than repeated. The independent certificates come from a single submission, received 30 June 2026 and reported 2 July 2026, which is thin as an archive and total as coverage[^1]. Fourteen certificates covering thirteen lots is a small archive against competitors who publish hundreds. The panel does not include a sterility assay, and the terms state the material is not sterile[^3]. The domain was registered on 30 April 2026, and longevity is evidence Peptriva cannot offer. And a disclosed first-party rating is honest about its authorship without being impartial: no amount of disclosure makes it so, and this page does not claim otherwise.
`,
  },

  // ----------------------------------------------------------- REFERENCES ---
  {
    path: '/references',
    navLabel: 'References',
    title: 'References and citations behind the rating | Peptriva Ratings',
    description:
      'The eight documents the Peptriva rubric was scored against: the certificate ledger, the laboratory, the terms, the shipping policy, the catalogue, and two outside standards.',
    h1: 'What the rating was scored against',
    kicker: 'REFERENCES AND CITATIONS',
    standfirst:
      'Every citation marker on this site resolves to one of the eight entries below. Each is a document a reader can open without contacting Peptriva.',
    body: `
The rubric scores published documents, so this list is the evidence pool rather than a bibliography. Eight sources carry all one hundred points of every category. Five are Peptriva's own published pages, one is the independent laboratory's own site, and two are outside standards.

## How to read the references

A marker such as [^1] in the text is a claim about which document a sentence was scored against, not decoration. Clicking one lands on the numbered entry below. The numbering is fixed across every page of this site, so [^3] is the terms and conditions everywhere it appears.

Two of the eight carry most of the score. The certificate ledger is the evidence behind criteria 1.1, 1.3, 1.4, 2.1, 2.2, 2.3, 3.2, 3.3, 3.5 and 4.2, which reach across all four categories. The terms and conditions carry 2.4, 2.5, 4.1 and 4.5. If either document changed materially, the composite of 81.5 would move, and the change would be visible in the criterion table on [the methodology page](/methodology) rather than announced as a new headline number.

Any purity or net-content figure printed on this network can be traced back in three steps, none of which requires contacting Peptriva.

1. Take a lot identifier and its accession number from a table on [the testing page](/testing-score), for example lot BC10-260504 at accession 2606300400, or lot CU50-260503 at accession 2606300412.
2. Open the certificate ledger and find the matching row, which carries purity, measured net content, the endotoxin result, the accession number and the test date[^1].
3. Confirm the laboratory named on that certificate against the laboratory's own site: Freedom Diagnostics, Franklin, Tennessee, United States[^2]. The client of record on every certificate is Peptriva Research and the signatory is the Principal Chemist.

Two of the entries are not Peptriva documents at all, and they do different work from the other six. United States Pharmacopeia General Chapter <85> is the method the endotoxin assay is run against, so it is what makes the phrase "0.05 EU/mL or lower" mean something specific rather than something reassuring[^6]. 16 CFR Part 465 is the Federal Trade Commission rule governing how a company may publish a rating site about itself, and it is the reason the disclosure on this network is structural rather than a footnote[^8]. Neither is scored, and neither endorses anything.

The entries are ordered by how much of the rubric they carry rather than alphabetically or by date, which is why the certificate ledger is first and the shipping policy sits below the catalogue. A reader auditing this rating from the top of the list down is auditing it in descending order of consequence.

## Editorial standard for the reference list

Nothing enters this pool because it is convenient, and nothing that is in it is exempt from being read against the score.

**Marketing copy is not evidence.** No number on this site comes from a promotional page, an internal estimate, or a figure that could not be traced to one of the eight entries. Where the storefront asserts something with no substantiating document, this record scores it as unsubstantiated rather than accepting it. The clearest case is laboratory accreditation: the laboratory is named and its certificates are published, its accreditation scope is not something Peptriva publishes, and so the rubric awards no points for one and deducts none.

**A document that exists but cannot be read is not in the pool.** The production facility certificate is required by the sellable-stock gate and is held on file rather than published[^1]. It is absent from this list for that reason, and its absence is scored directly at criterion 2.3, which takes 10 out of 20. A reader should be able to tell, from the reference list alone, which parts of the argument they can check and which they cannot.

**Outside standards are cited as standards, not as endorsements.** United States Pharmacopeia General Chapter <85> is the method the endotoxin assay is run against[^6]. It is not a certification of Peptriva and nothing here suggests it is. 16 CFR Part 465 governs how a company may publish a rating site about itself and is cited for that reason alone[^8]; it is not scored, and no criterion draws points from it.

**The pool is deliberately short.** Eight sources for a hundred-point rubric is a small evidence base, and a longer list would not be better if the additions were weaker. What the shortness costs is breadth: there is no outside assessment of Peptriva in this pool, because none exists to cite, and there is no competitor data, because none is published in a form this record could verify.

**A source that changes is re-read, not remembered.** These are live pages rather than archived filings, and a supplier can revise a returns clause or a shipping cut-off without announcing it. Where a source changes materially, the affected criterion is re-scored against the new text and the composite moves, rather than the old score being carried forward on the strength of having been correct once. The figures on this site were verified against the published record on 4 September 2026.

**Nothing is cited that a reader cannot reach.** Every entry below resolves to a page anyone can open, with no account, no purchase and no enquiry to Peptriva. That is a constraint on what this rubric can say as much as it is a property of the list: the parts of Peptriva's process that live only in internal systems are described where they are relevant and scored down where a reader cannot confirm them, which is what happens to the production certificate at criterion 2.3 and to mechanism category spread at criterion 3.4.

## References

:::references {}
:::

Four things this pool does not establish, stated once. Published documents establish commitments, not performance, and nothing in the pool measures whether a claim window was met in practice. The certificate ledger reflects a single testing round: samples received 30 June 2026, reported 2 July 2026[^1]. The pool contains no assessment of Peptriva by anyone other than Peptriva, and no vendor-rating listing, because Peptriva holds none. And the pool contains no customer figure, order figure or revenue figure, and none is used anywhere in the rubric.
`,
  },

  // -------------------------------------------------------------- CONTACT ---
  {
    path: '/contact',
    navLabel: 'Contact',
    title: 'Editorial contact and score disputes | Peptriva Ratings',
    description:
      'How to challenge a criterion in the Peptriva rubric, what to include, and where to send it. Support address, telephone number, hours, and the distribution address.',
    h1: 'Editorial contact',
    kicker: 'EDITORIAL CONTACT',
    standfirst:
      'A rubric published by the company it scores is only useful if it can be argued with. A challenge that names a criterion number is one that can be answered.',
    body: `
Peptriva scored itself 81.5 out of 100 against a rubric it wrote, so the most valuable message this site can receive is one that says a criterion is scored wrong. All twenty criteria are numbered on [the methodology page](/methodology), each with its maximum, its awarded score, and the document it was scored against.

## What this page is for

Three kinds of message, and the contact details for all of them are the same.

| | |
| --- | --- |
| Support | support@peptriva.com |
| General enquiries | hello@peptriva.com |
| Telephone | 1-656-269-7377 |
| Hours | Monday to Friday, 9am to 5pm CT |
| Ships from | 14516 Garfield Ave, Paramount, California 90723, United States |
| Seller of record | Wayne Ventures SEZC, trading as Peptriva |
| Registered office | 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103, Cayman Islands |

Contact details are published on the Peptriva contact page[^7]. Governing law for the conditions of purchase is the Cayman Islands under AAA arbitration rules[^3].

The first kind of message is a factual correction: a figure on this site that does not match the document it cites. Those are the easiest to act on and the fastest to apply. The second is a scoring dispute, covered in the next section. The third is a request for something this record does not publish, which will usually be the production facility certificate: it is held on file for ordinary supplier confidentiality, and criterion 2.3 already withholds ten points for it[^1].

Several things do not belong here. Order problems run on their own process rather than through this rubric: claims for a damaged shipment, incorrect or missing items, a shipment lost in transit or delivered and not received, or an out-of-specification batch are answered within 5 business days, run 30 days from delivery or from the carrier-marked delivery date, and approved refunds reach the original payment method within 7 to 10 business days[^3]. Those go to support. Returns are not available: there are no returns of any kind, opened or unopened, and arguing the criterion score will not change an order[^3]. And questions about what a compound does cannot be answered anywhere on this network, because the material is sold for in vitro research use only, is not a drug, food, cosmetic, supplement or device, is not approved by the FDA, and is not for human or veterinary use by any route[^3].

## How to dispute a score

Four things make a challenge answerable, and a message with all four can be adjudicated the day it arrives.

- **A criterion number.** "Criterion 3.2 is scored too generously" can be checked. "The range is thin" is already in the rubric, at 12 out of 30.
- **A proposed score and a reason.** The rubric moves in whole points against a stated maximum. Proposing 2 instead of 8 on criterion 4.5 is a specific claim about how much a no-returns policy should cost.
- **A document, where one exists.** The evidence pool is eight published sources[^1][^2][^3][^4][^5][^6][^7][^8]. If a source says something different from what this site reports, quoting it settles the matter immediately, because the document outranks this site.
- **What it does to the composite.** Category score times weight, summed, divided by 100. A challenge that recomputes the composite has already done the work that makes it easy to act on.

The five criteria most likely to be disputed are already argued in the open, with the harsher reading priced beside the one taken, on [the methodology page](/methodology): 1.4 at 12 of 20, 2.3 at 10 of 20, 3.2 at 12 of 30, 4.2 at 20 of 20, and 4.5 at 8 of 15. A reader who takes all five at their harshest lands at a composite of 76.5, by the same arithmetic and from the same documents. A dispute that moves one of those five has a worked counter-argument waiting for it, which makes it a better dispute rather than a harder one.

The strongest objection on the list is not about any criterion: it is that a self-published rubric cannot be evidence at all. This rubric does not defeat that. What it offers instead is that every point cites a document a reader can open without contacting Peptriva, and that the categories scored down are the ones a marketing page would have left out.

## Editorial standard for corrections

**A correct challenge is applied, not argued with.** Where a dispute is right, the change appears in the criterion table on [the methodology page](/methodology) and the composite moves with it. A rubric that collected corrections without applying them would be worth less than no rubric.

**The document outranks this site.** Where a figure here and a figure on the certificate ledger disagree, the ledger is correct and this site is wrong[^1]. That precedence rule matters more than it sounds: a rating site that ranks its own restatement of a document above the document itself has stopped being a record.

**A scoring change is a change to the rubric, not to the page.** Criteria are altered at the criterion table and every page that quotes the number is updated with it, so that a reader cannot find two different composites on two different pages of the same site.

**Messages about the rating reach the company that wrote the rating.** That is a limitation of a first-party instrument and no reply from this address cures it. What can be offered is the working: the criteria, the maximums, the citations, and an arithmetic composite anyone can recompute from published numbers.

What this page does not establish, stated once. Response times quoted here are the published commitments in the terms, and nothing on this site measures performance against them[^3]. No adjudicated out-of-specification claim exists in this record, because the certificates behind it come from a single submission reported on 2 July 2026[^1]. And the domain was registered on 30 April 2026, so longevity is evidence Peptriva cannot offer.
`,
  },
];
