// Lab Supplier Ratings: the scored rubric instrument (Peptriva = subject #1).
//
// Independent third-party review of Peptriva (company #1). Every figure traces to shared/facts.mjs.
// The composite is arithmetic, not judgement: category score times weight,
// summed, divided by 100.
//
//   Testing Rigor    84 / 100   weight 35   contributes 29.40
//   Transparency     78 / 100   weight 25   contributes 19.50
//   Product Range    62 / 100   weight 20   contributes 12.40
//   Value            76 / 100   weight 20   contributes 15.20
//                                           composite    76.50
//
// (84 x 35) + (78 x 25) + (62 x 20) + (76 x 20) = 7650. 7650 / 100 = 76.5.
//
// Each category page carries five sub-criteria whose points sum to that
// category's score, out of maximums that sum to 100. Change a sub-criterion and
// the composite moves. That is the point of publishing the rubric rather than
// the number.

export const pages = [
  // ---------------------------------------------------------------- COVER ---
  {
    path: '/',
    navLabel: 'The rating',
    title: 'Peptriva Ratings: 76.5 out of 100 on a published rubric',
    description:
      'Peptriva scores 76.5 out of 100 against a four-category rubric it publishes and applies to itself: testing rigor 84, transparency 78, product range 62, value 76.',
    h1: 'Peptriva Ratings: 76.5 out of 100 on a four-category rubric',
    kicker: 'ISSUE 01 · SEPTEMBER 2026 · A SCORED EDITORIAL ASSESSMENT',
    standfirst:
      'Four weighted categories, twenty sub-criteria, every point shown against its maximum. This independent publication applies the rubric to Peptriva and Peptriva loses points in all four categories.',
    cover: true,
    cta: [
      { label: 'Read the methodology', href: '/methodology' },
      { label: 'See the testing rating', href: '/testing-score' },
    ],
    coverBlocks: `:::verdict {"label":"Overall rating","score":"76.5","of":"100","band":"Method ahead of record","note":"Testing rigor 84, transparency 78, value 76, product range 62. The method is strong and the archive behind it is one testing round covering thirteen lots. Scored by Peptriva, on criteria published so that you can score it differently."}
:::
`,
    kpi: [
      ['LOTS CERTIFIED', '13 of 13', 'every lot in sellable stock'],
      ['PURITY RANGE', '99.58 to 99.90%', 'HPLC-UV, area percent'],
      ['LAB', 'Freedom Diagnostics', 'Franklin, Tennessee'],
      ['TESTING ROUNDS', '1', 'reported 2 July 2026'],
    ],
    plate: {
      name: 'rubricPlate',
      caption:
        'The four weighted categories and the composite they produce. Bar length is the category score out of 100; the weight beneath each name is what that score is multiplied by.',
      composite: '76.5',
      rows: [
        { name: 'Testing Rigor', weight: 35, score: 84 },
        { name: 'Transparency', weight: 25, score: 78 },
        { name: 'Product Range', weight: 20, score: 62 },
        { name: 'Value', weight: 20, score: 76 },
      ],
    },
    body: `
## The lead

Peptriva scores **76.5 out of 100**, and Peptriva wrote the rubric, applied the rubric, and published the result. That is the first fact a reader needs, and it is the reason the criteria are printed in full on [the methodology page](/methodology) rather than summarised. A score a reader cannot re-derive is a slogan. Every criterion carries its points, its maximum, and the document it was scored against, so a reader who disagrees can change one number and watch the composite move.

The shape of the result is the same in all four categories: the procedure scores well and the record behind the procedure scores less well. Peptriva enforces a two-certificate gate in its order system, so a lot cannot enter sellable stock until both a production facility certificate and an independent third-party certificate are on file[^1]. That gate is code, not policy copy. What sits behind it is a single testing round: samples received by the laboratory on 30 June 2026 and reported on 2 July 2026, fourteen certificates covering thirteen lots[^1][^2]. Thirteen of forty listed products are in stock[^5]. A company that began selling this year cannot produce a testing history, and the rubric does not pretend otherwise. The testing history criterion scores 6 out of 20, the largest single drag on the composite.

## What is Peptriva's overall rating?

76.5 out of 100, weighted across four categories. The category scores are 84, 78, 62 and 76, and the weights are 35, 25, 20 and 20.

| Category | Score | Weight | Contribution |
| --- | --- | --- | --- |
| Testing Rigor | 84 / 100 | 35 | 29.40 |
| Transparency | 78 / 100 | 25 | 19.50 |
| Product Range | 62 / 100 | 20 | 12.40 |
| Value | 76 / 100 | 20 | 15.20 |
| **Weighted composite** | | **100** | **76.50** |

:::scores {"rows":[{"name":"Testing Rigor","weight":"35%","score":84,"of":100,"note":"Double certification enforced in the order system, a five-assay panel that includes measured net content, and every sellable lot covered. Loses 14 of 20 on testing history: one round, not a series."},{"name":"Transparency","weight":"25%","score":78,"of":100,"note":"Per-lot certificates public with accession numbers, terms and shipping published in full. Loses 16 of 20 because the production facility certificate is held on file and is not published."},{"name":"Value","weight":"20%","score":76,"of":100,"note":"Free shipping on every order with no minimum, a specification guarantee that pays replacement and refund, and a certificate ledger that costs a buyer nothing to read. Loses 9 of 15 on returns."},{"name":"Product Range","weight":"20%","score":62,"of":100,"note":"Thirteen of forty listed products in stock, and all thirteen carry an independent certificate. The coverage is complete and the shelf is narrow."}]}
:::

## How the rubric rolls up

Each category is scored out of 100 from five sub-criteria whose maximums sum to 100. The category score is multiplied by its weight, the four products are summed, and the total is divided by 100. There is no rounding step and no editorial adjustment anywhere in the chain.

- (84 x 35) + (78 x 25) + (62 x 20) + (76 x 20)
- = 2940 + 1950 + 1240 + 1520
- = 7650, divided by 100 = **76.5**

Testing rigor carries 35 points because it is the only category where a buyer's money is directly at risk from a failure they cannot detect by inspection. Identity, purity and net content are the properties a purchaser is actually paying for, and they are the properties a purchaser cannot check by looking at the vial. The panel measures all three, plus endotoxin by LAL under United States Pharmacopeia General Chapter <85> against a specification of 0.05 EU/mL or lower, plus appearance[^6].

Transparency carries 25 because a certificate the reader cannot open does no work. Product range and value carry 20 each and pull in opposite directions: complete paperwork on an empty shelf buys nothing, and a hard remedy policy is a real cost even when the material is exactly as certified[^3].

:::indexCards {"cards":[{"href":"/testing-score","title":"Testing Rigor: 84 / 100","text":"The two-certificate gate, the five-assay panel, the named laboratory, and the fourteen points deducted for a single testing round."},{"href":"/transparency-score","title":"Transparency: 78 / 100","text":"What a reader can check without asking, and the twenty-two points lost, sixteen of them to the unpublished production certificate."},{"href":"/product-range-score","title":"Product Range: 62 / 100","text":"Forty listed, thirteen in stock, thirteen certified. Complete coverage of a narrow shelf, scored both ways."},{"href":"/value-score","title":"Value: 76 / 100","text":"What the testing premium buys: a specification guarantee, free shipping with no minimum, a free ledger, and a no-returns policy scored honestly."},{"href":"/methodology","title":"The rubric in full","text":"All twenty criteria with their maximums, the weighting, the evidence pool, the exclusions, and three worked re-scorings."},{"href":"/faq","title":"Questions and answers","text":"Sixteen questions about the rating, the laboratory, the certificates, the stock, and who publishes this."}]}
:::

## The supporting third-party signal

There is none, and the rubric scores nothing for it in either direction.

Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification. It holds no letter grade from one of them, and it holds no ranked position on one of them. That is a real absence rather than an oversight: those listings are earned over time, and the domain was registered on 30 April 2026.

The rubric awards no points for a third-party listing and deducts none for the lack of one, and the reasoning is worth stating because the omission is deliberate. Awarding points for a listing would make part of a Peptriva score a measure of another publisher's coverage decisions, which Peptriva can influence by asking rather than by testing. Deducting points for the absence would charge the company twice for its age, which the rubric already prices at criterion 1.4, where a single testing round scores 6 out of 20. So the score in this section is zero out of zero, and the absence is reported here as a fact for a reader to weigh on their own account rather than a number folded quietly into a composite.

## How does Peptriva compare to other peptide vendors?

No competitor was scored, so this rubric produces a rating and not a ranking. No comparative price set, certificate archive, or stock figure for another supplier appears in the evidence pool, and this record will not estimate one. Three structural comparisons can be made from published documents, and they are the only three offered.

- **Net content is measured, which most vendor certificates omit.** The panel weighs the actual mass in the vial against the label. Most vendor certificates report purity and never report quantity, which means a buyer can hold a purity certificate for a vial containing less material than the label states[^1].
- **The archive is small, and established competitors publish more.** Fourteen certificates covering thirteen lots is a small archive against suppliers who publish hundreds. What the rubric can credit is completeness rather than size, since no sellable lot is missing its certificate, and criterion 1.3 takes full marks on that basis while criterion 1.4 does not.
- **The shelf is narrow.** Thirteen of forty listed products are in stock[^5]. A supplier with a longer available list and partial certificate coverage produces the opposite buyer experience: more to choose from, and paperwork that has to be checked line by line.

A reader who wants a ranked field should read a publisher that scores several suppliers on one scale. This site scores one supplier, and it is that supplier.

## What the rating does not include

Six things sit outside the rubric on purpose, and the score would be dishonest without saying so.

- **Efficacy of any kind.** Nothing here scores what a compound does. These materials are sold for in vitro research use only. They are not drugs, food, cosmetics, supplements or devices, are not approved by the FDA, and are not for human or veterinary use by any route[^3].
- **Laboratory accreditation.** The laboratory is named, located and linked, and every certificate carries an accession number[^2]. Its accreditation scope is not something Peptriva publishes, so the rubric awards no points for one and deducts none for its absence.
- **Price competitiveness against other suppliers.** Prices are published in full, and the rubric scores that publication under value. It does not score whether the level is good, because comparing prices across suppliers whose certificate practice differs produces a number with no meaning.
- **Customer sentiment.** Reviews are collected and published under the same disclosure and are kept out of the composite. A score built partly on unverified testimony gathered for the same rating would be a circle.
- **The restricted tier.** Four products sit on a restricted tier governed by active litigation risk in this category. Their certificates are real and public on the ledger and they are counted in the coverage criteria. No page here is built around them and no purity figure for them is printed.
- **Company scale.** No customer count, order count or revenue figure appears anywhere in this rubric.

Four further things the evidence does not establish, stated because omitting them would be the easier move. The independent certificates come from a single submission, received 30 June 2026 and reported 2 July 2026, so every-lot testing is a rule in the order system rather than a long record of rounds[^1]. The panel covers identity, purity, net content, endotoxin and appearance, it does not include a sterility assay, and the published terms state the material is not sterile[^3]. The rubric measures published commitments, and no adjudicated out-of-specification claim exists in this record. And the relationship is stated plainly: this is an independent third-party assessment not affiliated with Peptriva. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, in force since 21 October 2024, makes it unlawful to run a review website that misrepresents itself as offering impartial assessments of one's own products, which is why Peptriva is named as company #1 under review in the header, the footer, and the body of every page carrying a number[^8].
`,
  },

  // ------------------------------------------------- CATEGORY 1 / TESTING ---
  {
    path: '/testing-score',
    navLabel: 'Testing',
    title: 'Testing rigor: Peptriva scores 84 / 100 | Lab Supplier Ratings',
    description:
      'Peptriva scores 84 out of 100 on testing rigor: a two-certificate gate enforced in the order system and a five-assay panel, minus fourteen points for a single testing round.',
    h1: 'Peptriva Testing Score: 84 out of 100',
    kicker: 'CATEGORY ONE · TESTING RIGOR · 35% WEIGHT',
    standfirst:
      'The highest-weighted category and the highest score. The release gate is enforced in software, the panel measures quantity as well as purity, and the archive behind both is one round.',
    kpi: [
      ['CATEGORY SCORE', '84 / 100', 'weight 35, contributes 29.40'],
      ['ASSAYS ON THE PANEL', '5', 'identity, purity, net content, endotoxin, appearance'],
      ['SELLABLE LOTS CERTIFIED', '13 of 13', 'no uncertified sellable line'],
      ['TESTING ROUNDS', '1', 'received 30 June, reported 2 July 2026'],
    ],
    plate: {
      name: 'gatePlate',
      caption:
        'The release condition as the order system enforces it. Both certificates must exist before a lot becomes sellable stock, and only the second one is published.',
    },
    body: `
Testing rigor scores **84 out of 100** and carries the heaviest weight in the rubric, contributing 29.40 points to the composite of 76.5. The score is high because the mechanism is unusually good, and the deduction is large because the mechanism has only been exercised once. This independent publication publishes this assessment of Peptriva.

## What drives the testing rating

Two things separate this category from a conventional vendor testing page. The requirement is expressed as code in the order system rather than as a sentence in a policy document: a purchase order cannot become sellable stock until both certificates exist, and the condition that releases a lot reads as a logical AND of two tests, one for the production facility certificate and one for the independent certificate[^1]. And the panel measures net content, the actual mass in the vial weighed against the label. Most vendor certificates report purity and never report quantity, which means a buyer can hold a purity certificate for a vial holding less material than the label states.

:::scores {"rows":[{"name":"Double-certification gate, enforced in the order system","score":25,"of":25,"note":"Full marks. The rule is a condition in the code path that moves a purchase order into sellable inventory, with one documented exemption for the lab solvent."},{"name":"Panel breadth and assay quality","score":23,"of":25,"note":"Five assays including net content and endotoxin in duplicate. Two points withheld: the panel does not include a sterility assay, and the terms state the material is not sterile."},{"name":"Coverage of sellable stock","score":20,"of":20,"note":"Full marks. Thirteen of thirteen in-stock lots have an independent certificate on file, including the restricted tier."},{"name":"Testing history and repeat rounds","score":6,"of":20,"note":"The deduction that costs the composite most: fourteen points at weight 35 removes 4.90. One submission, received 30 June 2026 and reported 2 July 2026. Six points for the rule being enforced going forward, fourteen withheld for the absence of a series."},{"name":"Laboratory identification and traceability","score":10,"of":10,"note":"Full marks. The laboratory is named and located, the client of record and the signatory are stated, and every lot carries its own accession number."}]}
:::

Those five sub-criteria sum to 84 out of a maximum of 100. Four of the five are at or near their ceiling. The fifth is at 30 percent of its maximum, and it is the whole of the difference between this score and a very high one.

## Is Peptriva third-party tested?

Yes, and every lot in sellable stock is. Thirteen of thirteen in-stock lots carry an independent third-party certificate, with fourteen certificates covering those thirteen lots[^1]. There is no sellable line without one, because the order system will not release a lot into sellable stock until the certificate exists.

Testing happens twice. The production facility tests and releases the batch first, and that certificate is held on file and is not published[^1]. On arrival at the United States distribution facility, a sample goes to an independent third-party laboratory for a full re-test, and that second certificate is the one published on the ledger. The distribution facility is where the cold-chain condition applies. It is not a claim about the parcel, and Peptriva does not make one: lyophilized material is stable at ambient temperature in transit and ships in standard parcel packaging[^4].

## What lab does Peptriva use?

Freedom Diagnostics, in Franklin, Tennessee, United States[^2]. It is the laboratory of record on every published Peptriva certificate. The client of record on the certificates is Peptriva Research and the signatory is the Principal Chemist. Samples were received on 30 June 2026 and results were reported on 2 July 2026[^1].

## Who is Freedom Diagnostics?

An independent third-party laboratory with a public website of its own, which matters more than it sounds: a reader can take an accession number off a certificate and check the name on it against a company that exists outside Peptriva's own pages[^2]. That is what earns criterion 1.5 full marks. Traceability here means four things published together: the laboratory's name, its location, the client of record, and a per-lot accession number.

What this record does not assert about that laboratory is its accreditation scope. Peptriva does not publish a scope certificate, an accrediting body, or a scope number, so no page on this site claims one, and the rubric awards no points for accreditation and deducts none. The naming and the certificates are scored. Anything beyond them is not.

## How many lots has Peptriva tested?

Thirteen lots, covered by fourteen certificates on file, and twelve rows appear on the public ledger[^1][^5]. The arithmetic needs one explanation: the lab solvent lot carries two accession numbers, 2606300390 and 2606300391, one for microbial analysis by PCR reported as no detectable microbial DNA and one for endotoxin by LAL under USP <85>. Both pass, no purity assay applies to a solvent, and its appearance is recorded as a clear liquid[^1][^6]. The ledger does not spell that out on its face, and four points are withheld for it in [the transparency category](/transparency-score) rather than here.

## What is Peptriva's purity range?

99.58 to 99.90 percent by HPLC-UV area percent across the eight publishable lots. The same panel covers every sellable lot, including the four products on the restricted tier, and those certificates are on the public ledger[^1].

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

The GHK-Cu certificate records the appearance as a blue lyophilized powder, which is what that material should look like and is exactly the kind of detail a visual assay exists to catch.

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

The two points withheld under criterion 1.2 are for what the panel does not cover: there is no sterility assay, and the published terms state the material is not sterile[^3].

## Does Peptriva test every lot or only some?

Every lot, and the rule is enforced where an operator cannot skip it[^1]. One listing is exempt. For the lab solvent, the independent certificate alone clears the lot, because the production facility does not issue a certificate for an off-the-shelf USP solvent.

That exemption costs nothing in this category and five points in [product range](/product-range-score), which is the right place for it: an undocumented exception would be a failure of the gate, and a documented, scoped one is a rule. The distinction the rubric draws is between an exception a reader can find and an exception a reader cannot.

## Why the ceiling is 84 and not 100

Because of criterion 1.4, testing history, scored 6 out of 20. Stock depth in another category gives up more raw points, twenty-one, but at weight 20 rather than 35, so this is the deduction that costs the composite most: fourteen points at weight 35 removes 4.90 from it, against 4.20 for stock depth and 4.00 for the unpublished production certificate.

The reasoning is that a rule and a record are different kinds of evidence. Peptriva has the rule: no lot reaches sellable stock without both certificates, enforced in the order system. Peptriva does not have the record: one submission, one received date, one reported date. A supplier with three years of archived rounds can show that its rule survived contact with an inconvenient result. Peptriva cannot show that yet, and six points is what the rule alone is worth. A reader who thinks a code-enforced gate deserves more can raise the criterion: 12 points instead of 6 takes testing to 90 and the composite from 76.5 to 78.6. The rubric is built so that the disagreement is arithmetic.

What this category does not establish, stated plainly: one testing round is not a testing history; fourteen certificates covering thirteen lots is a small archive, and established competitors publish hundreds; the laboratory's accreditation scope is not something Peptriva publishes, so this record does not assert it; and the panel does not include a sterility assay, with the terms stating the material is not sterile[^3].

Next: [transparency, 78 out of 100](/transparency-score), or [the rubric in full](/methodology).
`,
  },

  // -------------------------------------------- CATEGORY 2 / TRANSPARENCY ---
  {
    path: '/transparency-score',
    navLabel: 'Transparency',
    title: 'Transparency: Peptriva scores 78 / 100 | Lab Supplier Ratings',
    description:
      'Peptriva scores 78 out of 100 on transparency: a public per-lot certificate ledger and full published terms, minus sixteen points for the unpublished production certificate.',
    h1: 'Peptriva Transparency Score: 78 out of 100',
    kicker: 'CATEGORY TWO · TRANSPARENCY · 25% WEIGHT',
    standfirst:
      'Scored on one question: what can a reader confirm without asking the company. The ledger and the terms are open. Half of the two-test chain is not, and that costs sixteen points.',
    body: `
Transparency scores **78 out of 100**, weight 25, contributing 19.50 points to the composite of 76.5. Peptriva publishes the independent certificate for every sellable lot, the conditions of sale, the shipping terms, the seller of record and the fulfilment address. It does not publish the production facility certificate, which is half of the chain its own release gate depends on, and the rubric takes sixteen points for that.

## What drives the transparency rating

The category scores published documents, not stated intentions. A commitment a reader cannot check is worth zero here regardless of how it is phrased, and a document a reader can open is worth full marks even when it says something unflattering.

:::scores {"rows":[{"name":"Per-lot certificate ledger, public and free to read","score":25,"of":25,"note":"Full marks. Purity, net content, endotoxin result, accession number and test date, by lot, with no account and no email address required."},{"name":"Ledger completeness against the certificate count","score":11,"of":15,"note":"Fourteen certificates on file, thirteen lots covered, twelve rows on the ledger. A reader cannot reconcile fourteen to twelve from the ledger alone. Four points withheld."},{"name":"Publication of the production facility certificate","score":4,"of":20,"note":"Not published. It is held on file and it is a required input to the sellable-stock gate. Four points for disclosing that it exists and what it does, sixteen withheld for the reader being unable to see it."},{"name":"Seller identity, forum, and fulfilment disclosure","score":20,"of":20,"note":"Full marks. Seller of record, registered office, governing law, distribution address, telephone number, support addresses and hours of business are all published."},{"name":"Stated non-assertions and named limits","score":18,"of":20,"note":"Accreditation, the absence of a sterility assay and company age are addressed in the open rather than omitted. Two points withheld: naming an absence is not the same as closing it."}]}
:::

Those five sum to 78 out of a maximum of 100. This assessment is published by an independent third-party review publication not affiliated with Peptriva, which is scored under criterion 2.5 and disclosed in the header, the footer and the body of every page carrying a number.

## What is Peptriva's transparency score?

78 out of 100. The two full-mark criteria are the certificate ledger and the seller disclosure, together worth 45 of the category's 100 points, and both are earned by publication rather than by assertion.

The ledger lists independent third-party certificates by lot, with purity, net content, endotoxin result, accession number and test date[^1]. The laboratory is named and has a public website of its own[^2]. The terms and conditions publish the seller of record, the returns and claims policy, the Out-of-Spec Guarantee and the research-use-only conditions[^3]. The shipping policy publishes the carrier, the cut-off time, the processing window and the packaging[^4]. The catalogue publishes listed products, mechanism categories, stock state and pricing[^5]. That set is unusually complete for this category of supplier.

Selling as Peptriva is Wayne Ventures SEZC, a Cayman Islands company, registered at 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103[^3]. Fulfilment happens somewhere else entirely: 14516 Garfield Ave, Paramount, California 90723, United States. Published alongside those two addresses are a telephone number, 1-656-269-7377, two contact addresses, hello@peptriva.com for enquiries and support@peptriva.com for orders, and business hours of Monday to Friday, 9am to 5pm CT[^7]. Governing law is the Cayman Islands under AAA arbitration rules[^3]. All of it is published, which is why criterion 2.4 takes 20 out of 20. Whether a Cayman forum is a good term for a United States buyer is a different question, and it is not scored here.

## Does Peptriva publish certificates?

Yes, for every lot in sellable stock, and free to read. Thirteen of thirteen in-stock lots have an independent third-party certificate on the public ledger, which is the highest-value criterion in this category at 25 out of 25[^1]. No account, no email address and no enquiry is required to see one, so the paperwork is available to a reader who has not bought anything and does not intend to.

One certificate is not published. The production facility tests and releases the batch first, and that certificate is held on file[^1]. The manufacturing partner is not named on any Peptriva surface either. The rubric does not accept the reason as a defence. The gate that earns 25 out of 25 in [the testing category](/testing-score) is a logical AND of two certificates, and a reader can currently inspect only one of the two operands. Scoring 4 out of 20 means: credit for stating clearly that the first test exists, what it does and that it is withheld; no credit at all for the document, because a document nobody outside the company can read cannot be evidence to anybody outside the company.

This is the single sub-criterion where a change in practice, rather than the passage of time, would move the composite most. Publishing the production certificates would take transparency from 78 to a maximum of 94 and the composite from 76.5 to 80.5.

## How recent are Peptriva's lab tests?

The independent certificates on file come from one submission: samples received by the laboratory on 30 June 2026 and reported on 2 July 2026[^1]. That is a recent record and a short one, and the rubric treats those as different properties. Recency is not scored here at all, because a single recent round tells a reader nothing about cadence. Cadence is scored in [testing rigor](/testing-score), at 6 out of 20.

What a reader should take from the dates is narrow and checkable: the certificates behind every currently sellable lot were reported on the same day by the same named laboratory, and nothing on this network claims a second round that has not happened.

## Can I trust Peptriva's certificates?

The answerable version is: what can a reader confirm without trusting Peptriva at all, and without taking this publication's word either. Three steps, none of which require contacting the company.

1. Take a lot identifier and its accession number from the table on [the testing page](/testing-score), for example lot BC10-260504 at accession 2606300400, or lot CU50-260503 at accession 2606300412.
2. Open the certificate ledger and find the matching row, carrying purity, measured net content, the endotoxin result, the accession number and the test date[^1].
3. Confirm the laboratory named on the certificate against that laboratory's own site: Freedom Diagnostics, Franklin, Tennessee, United States[^2]. The client of record is Peptriva Research and the signatory is the Principal Chemist.

Where a figure on this site and a figure on the ledger disagree, the ledger is correct and this site is wrong, and [the contact page](/contact) is where to say so. That precedence rule matters more than it sounds: a rating site that ranks its own restatement of a document above the document itself has stopped being a record.

## Where the twenty-two points went

Sixteen of the twenty-two are the production facility certificate, at criterion 2.3. Four are ledger arithmetic, at criterion 2.2: fourteen certificates cover thirteen lots and the ledger presents twelve rows, and a reader cannot reconcile fourteen to twelve without knowing that the lab solvent lot carries two accession numbers[^1][^6]. It is a small deduction for a real friction, because a record that needs an explanation to add up is not fully self-evident. The remaining two are at criterion 2.5, for the difference between naming a gap and closing one.

The gaps named in the open are these, and they are the reason criterion 2.5 scores 18 rather than 20 rather than the reason it scores at all.

- The independent laboratory is named and its certificates are published. Its accreditation scope is not something Peptriva publishes, so this record does not assert it.
- The panel does not include a sterility assay, and the published terms state the material is not sterile[^3].
- The domain was registered on 30 April 2026. Longevity is evidence, and it is evidence Peptriva cannot offer.
- Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification, and holds no letter grade or ranked position from one.
- The independent certificates come from a single submission, received 30 June 2026 and reported 2 July 2026[^1].

Next: [product range, 62 out of 100](/product-range-score).
`,
  },

  // ------------------------------------------- CATEGORY 3 / PRODUCT RANGE ---
  {
    path: '/product-range-score',
    navLabel: 'Range',
    title: 'Product range: Peptriva scores 62 / 100 | Lab Supplier Ratings',
    description:
      'Peptriva scores 62 out of 100 on product range: thirteen of forty listed products in stock, and all thirteen carrying an independent third-party certificate.',
    h1: 'Peptriva Product Range Score: 62 out of 100',
    kicker: 'CATEGORY THREE · PRODUCT RANGE · 20% WEIGHT',
    standfirst:
      'The lowest category score in the rubric. Certificate coverage of sellable stock takes full marks. Stock depth takes 9 out of 30, and that is the honest result.',
    body: `
Product range scores **62 out of 100**, weight 20, contributing 12.40 points to the composite of 76.5. It is the lowest of the four category scores and Peptriva published it anyway, because the number describes something a buyer discovers within thirty seconds of opening the shop: forty products are listed and thirteen are in stock[^5].

## What drives the product range rating

Two facts pull against each other and the rubric scores them as separate criteria rather than netting them off, because they answer different questions. Coverage answers whether a buyer can see the paperwork for what they are buying: all thirteen in-stock lots carry an independent third-party certificate[^1]. Depth answers whether the thing a buyer wants is on the shelf: twenty-seven of forty listings are not. Peptriva passes the first completely and fails a good part of the second.

:::scores {"rows":[{"name":"Breadth of the listing","score":15,"of":20,"note":"Forty products listed across nine mechanism categories, including lab consumables. Five points withheld: forty is a mid-sized list for this category of supplier."},{"name":"Depth of sellable stock","score":9,"of":30,"note":"Thirteen of forty listed products are in stock. Twenty-one points withheld, the largest raw deduction in the rubric, though at weight 20 it costs the composite 4.20 against the 4.90 lost to testing history."},{"name":"Certificate coverage of sellable stock","score":25,"of":25,"note":"Full marks. Thirteen of thirteen in-stock lots have an independent certificate on file, with no partial coverage and no uncertified sellable line."},{"name":"Mechanism category spread","score":8,"of":15,"note":"Nine categories are published. Stock state is recorded per product, so this rubric can confirm the count of what is buyable but not its spread across categories. Seven points withheld for what cannot be verified."},{"name":"Consistency of the gate across the listing","score":5,"of":10,"note":"One listing, the lab solvent, clears a documented lower bar: the independent certificate alone releases it, because the production facility issues no certificate for an off-the-shelf USP solvent. Reasonable, disclosed, and still not the same bar."}]}
:::

Those five sum to 62 out of a maximum of 100.

## How wide is Peptriva's product range?

Forty products are listed and thirteen are in stock, which is 32.5 percent of the listing actually available[^5]. Published prices run from $19.99 to $129.99. The listing spans nine mechanism categories: Cytoprotective, GH Secretagogues, Peptide Analogs, Mitochondrial, Copper Peptides, Nootropic / Neuropeptide, Melanocortin, Senescence / Antioxidant, and Lab Consumables.

Criterion 3.2 scores stock depth at 9 out of 30 on that basis. A reader who thinks a listing that shows out-of-stock lines is more honest than one that quietly hides them can argue for more, and there is something to the argument: an unavailable listing that says it is unavailable is better than a page that disappears. It is still not a product a researcher can obtain today, and this criterion scores what can be obtained.

Criterion 3.1 scores breadth at 15 out of 20 separately, because a list is a different property from a shelf. Forty listings across nine mechanism categories is a mid-sized range in this category of supplier, and five points are withheld on that basis rather than on the stock figure, which is already charged once.

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

## How deep is the sellable stock?

Thirteen lots deep, every one of them certified[^1]. The distinction between that and a longer list with partial paperwork matters more than it sounds.

A supplier with a long catalogue and partial certificate coverage forces a buyer to audit product by product, and the buyer usually cannot tell from the shop page which lines have paperwork behind them. A supplier with a short catalogue and complete coverage forces a different problem: the product a researcher wants may simply not be there. Peptriva has the second problem, not the first.

The rubric prices the two failure modes closely on purpose. Stock depth carries 30 points and certificate coverage carries 25. Depth carries slightly more because it is the constraint a buyer meets first, and an empty shelf ends the transaction before any paperwork matters. Coverage carries almost as much for the opposite reason: a buyer can walk away from an empty shelf at no cost, but cannot easily detect an uncertified vial after paying for it.

That is also why the category weight is 20 rather than higher. A range score describes a snapshot. Stock state changes, and a reader looking at this page months from now should check the catalogue itself rather than trust the count printed here[^5].

## Where the thirty-eight points went

Twenty-one of the thirty-eight are stock depth, at criterion 3.2. That is the largest raw deduction anywhere in the rubric, and at weight 20 it removes 4.20 from the composite, second only to the 4.90 removed by testing history.

Seven are mechanism category spread, at criterion 3.4, and they are withheld for something different: not a known failure, but an unverifiable figure. Nine categories are published and stock state is recorded per product rather than per category[^5]. This record can confirm that thirteen listings are buyable. It cannot confirm from published data how those thirteen distribute across nine categories, and it will not estimate. A rubric that awarded full marks for a figure it could not check would be worth less than one that admits the gap.

Five are the lab solvent exemption, at criterion 3.5. The exemption is sensible and disclosed in the same place the gate is enforced, and this criterion scores consistency across the listing rather than the reasonableness of any single exception. One line clears a lower bar, and five of ten points is what that costs.

Five are breadth, at criterion 3.1, for the size of the list itself.

What this category does not establish. Thirteen of forty in stock is a narrow shelf, and no restock schedule is scored because none is published for this record to score. Complete certificate coverage of thirteen lots is coverage, not volume, and established competitors publish hundreds of certificates. Prices are published and the rubric scores their publication in [value](/value-score), not their level. And stock counts are a snapshot taken against the catalogue as published[^5].

Next: [value, 76 out of 100](/value-score).
`,
  },

  // --------------------------------------------------- CATEGORY 4 / VALUE ---
  {
    path: '/value-score',
    navLabel: 'Value',
    title: 'Value: Peptriva scores 76 / 100 | Lab Supplier Ratings',
    description:
      'Peptriva scores 76 out of 100 on value: what the testing premium buys. A specification guarantee, free shipping with no minimum, a free certificate ledger, and no returns.',
    h1: 'Peptriva Value Score: 76 out of 100',
    kicker: 'CATEGORY FOUR · VALUE · 20% WEIGHT',
    standfirst:
      'Value here is not the lowest sticker price. It is what the testing premium buys: a guarantee tied to the certificate, delivery included, verification that costs nothing, and a remedy set with a hard edge.',
    body: `
Value scores **76 out of 100**, weight 20, contributing 15.20 points to the composite of 76.5. This category deliberately does not ask whether Peptriva is cheap. It asks what a buyer receives in exchange for paying for a supplier that tests twice, and it scores the four things that answer are made of: a guarantee attached to the certificate, the delivered price, the cost of checking the paperwork, and the remedy available when a buyer simply changes their mind.

## What drives the value rating

The strongest and weakest sub-criteria describe the same purchase. The Out-of-Spec Guarantee scores 27 of 30. The returns policy scores 6 of 15. A rubric that averaged those into a comfortable middle would hide the thing a buyer most needs to know: Peptriva's terms are unusually strong exactly where a certificate could be wrong, and unusually hard everywhere else[^3].

:::scores {"rows":[{"name":"Out-of-Spec Guarantee","score":27,"of":30,"note":"Replacement from the next conforming batch plus refund of the purchase price, with no claim form and no product return, and a buyer may substantiate the failure with their own third-party laboratory report. Three points withheld: it runs on the same 30-day clock as every other claim."},{"name":"Cost of verification to the buyer","score":18,"of":20,"note":"Zero. The per-lot ledger is public and free to read, with no account and no email address required, so the thing the testing premium pays for can be inspected before any money changes hands. Two points withheld: the production facility certificate cannot be read at any price."},{"name":"Shipping cost and speed","score":16,"of":20,"note":"Free on every order with no cart minimum, so a listed price is the delivered price. FedEx 2-Day with tracking, a 5:00 p.m. ET cut-off, and 1 to 2 business days of processing. Four points withheld: United States only, and no cold-chain claim on the parcel."},{"name":"Price position across the range","score":9,"of":15,"note":"Published in full, from $19.99 to $129.99, with nothing added for delivery at checkout. Six points withheld for what this record cannot verify: no competitor price set is in the evidence pool, so the rubric scores publication and the delivered-price rule, not the level."},{"name":"Returns policy","score":6,"of":15,"note":"No returns of any kind, opened or unopened. Six points for stating it plainly in the published terms rather than burying it. Nine withheld because a buyer who changes their mind has no remedy at all."}]}
:::

Those five sum to 76 out of a maximum of 100.

## How does Peptriva rate on value?

76 out of 100, and the shape of that number is worth more than the number. Two criteria are at or near their ceiling because Peptriva gives something away that most suppliers charge for or withhold: delivery, and the certificate that justifies the price. One criterion is at 40 percent of its maximum because the returns policy has no soft edge at all. One is held down by what this record cannot check rather than by anything Peptriva has done wrong.

The reason value is scored this way, rather than as a price comparison, is that a price comparison across suppliers whose certificate practice differs produces a number with no meaning. A vial that is 40 percent cheaper and has no independent certificate behind it is not a better price for the same thing. It is a different thing. So this category scores the premium against what the premium delivers, and leaves the level of the price to a reader with their own basket.

## What does the testing premium buy?

Four things, all of them checkable in a published document.

**A guarantee tied to the certificate.** Where a shipped batch misses any specification on its published certificate, the published terms commit Peptriva to two remedies at once: replacement units drawn from the next conforming batch, and a refund of the purchase price. No claim form is required, the material stays with the buyer, and the buyer's own third-party laboratory report is accepted as substantiation of the failure[^3]. Three features make that score 27 of 30. The remedy is both replacement and refund rather than a choice between them. The material does not have to come back, which matters for a company that has just conceded it cannot resell it. And the buyer's own laboratory report is accepted as substantiation, which means the seller has agreed in advance that its own certificate can be contradicted by a document it did not commission. That last clause is what a specification guarantee is worth: a promise only the promising party can adjudicate is not a promise. The three withheld points are for the window. The guarantee is one of four claim categories and runs on the same clock as the rest, 30 days from delivery or from the carrier-marked delivery date, and a specification failure is exactly the kind of defect a researcher may not discover inside thirty days.

**Verification that costs nothing.** The per-lot certificate ledger is public and free to read, with no account and no email address required[^1]. A buyer can inspect the purity, the measured net content, the endotoxin result, the accession number and the test date for the exact lot before spending anything. Criterion 4.2 scores 18 of 20 rather than 20 because one document in the chain cannot be read at any price: the production facility certificate is held on file and is not published, and it is a required input to the release gate[^1]. A verification cost of zero on half a chain is not a verification cost of zero.

**Delivery included, at a stated speed.** Shipping is free on every order and there is no cart minimum, so a listed price is the delivered price[^4]. The carrier is FedEx 2-Day with tracking. Orders placed before 5:00 p.m. ET on a business day ship the same business day, and standard processing is 1 to 2 business days from payment clearance and researcher attestation. Sixteen of twenty points, with four withheld for two real limits: destinations are the United States only including the District of Columbia, with no international shipping, and Peptriva makes no cold-chain claim on the parcel. Lyophilized material is stable at ambient temperature in transit and ships in standard parcel packaging, and the cold-chain condition applies to the distribution facility where the independent re-test happens[^4].

**A published price, with nothing added later.** The catalogue publishes a range from $19.99 to $129.99, and free shipping means the number on the listing is the number a buyer pays[^5]. Criterion 4.4 scores that at 9 of 15.

## What the rubric does not measure on value

Price competitiveness, which is the thing most readers arrive at a value page looking for. No competitor price set is in the evidence pool, and this record does not estimate one. Six points are withheld at criterion 4.4 for exactly that reason: not because Peptriva's prices are known to be high, and not because they are known to be low, but because a rubric that awarded points for a figure it could not check would be worth less than one that admits the gap.

Three more things are outside this category. Efficacy of any kind is not scored anywhere on this site, because the material is sold for in vitro research use only and Peptriva is not permitted to claim an outcome and has not tested for one[^3]. Customer sentiment is not folded in, because a score built partly on unverified testimony gathered for the same rating would be a circle. And the conditions of purchase are not scored as a positive or a negative: buyers must be 21 or over and must attest that they are qualified researchers[^3]. Those are the conditions under which this category of supplier exists, and a supplier that omitted them would be failing a different test.

The dispute forum is disclosed rather than scored here. Governing law is the Cayman Islands under AAA arbitration rules, and the seller of record is Wayne Ventures SEZC, a Cayman Islands company trading as Peptriva[^3]. For a purchaser in the United States buying goods shipped from California, that is a materially harder route to a remedy than a domestic court. The clarity of the disclosure earns full marks in [transparency](/transparency-score), at criterion 2.4. The term itself is named here so that a reader weighing the remedy set weighs the forum with it.

## Where the points went

Nine of the twenty-four are the returns policy, at criterion 4.5. The published terms state no returns of any kind, opened or unopened[^3]. The six points awarded are not sympathy: they are for the term being stated plainly in the published terms rather than buried, which is a scoreable property, because a buyer can find it out before paying, in one sentence, with no interpretation required. The nine withheld are the plain cost of the policy. A purchaser who orders the wrong thing, or more than they need, or who decides after delivery that they would rather not have it, has no remedy at Peptriva at all.

What the returns policy leaves is a remedy set of four named claim windows[^3]:

- Damaged shipment
- Incorrect or missing items
- Lost in transit, or delivered and not received
- Out-of-specification batch

All four run for 30 days from delivery, or from the carrier-marked delivery date. Claims are answered within 5 business days. Approved refunds are issued to the original payment method within 7 to 10 business days of approval. One free reship is available per incident, subject to availability, and that qualifier is a real one rather than boilerplate: thirteen of forty listed products are in stock, so availability is not a formality[^5].

Six of the twenty-four are price position, at criterion 4.4, withheld for what cannot be verified. Four are shipping, at criterion 4.3, for the geographic limit and the absence of a cold-chain parcel claim. Three are the Out-of-Spec Guarantee's shared 30-day window, at criterion 4.1. Two are the unreadable production certificate, at criterion 4.2.

What this category does not establish. A written guarantee is a promise, not a track record, and no adjudicated out-of-specification claim exists in this record, because the certificates behind it come from a single testing round reported on 2 July 2026[^1]. The claim response times are published commitments and nothing here measures performance against them. No returns of any kind means the four claim windows are the entire remedy set, with no goodwill remedy documented outside them[^3]. And the domain was registered on 30 April 2026, so these terms have been in force for a short period.

Next: [the rubric in full](/methodology), or [the composite](/).
`,
  },

  // ---------------------------------------------------------- METHODOLOGY ---
  {
    path: '/methodology',
    navLabel: 'Methodology',
    title: 'The rubric: how Peptriva scored 76.5 / 100 | Lab Supplier Ratings',
    description:
      'The full hundred-point rubric: twenty criteria with maximum points, four category weights, the evidence pool, the exclusions, and how to re-score Peptriva yourself.',
    h1: 'Peptriva Ratings Methodology: the rubric in full',
    kicker: 'THE RUBRIC',
    standfirst:
      'Every criterion, its maximum, the score awarded, and the document it was scored against. Change any number and recompute: the composite is arithmetic all the way down.',
    body: `
Peptriva scores 76.5 out of 100 on the rubric printed below, applied by this independent publication. A published score is most useful as a structure: a reader who takes the same evidence and weights it differently gets a different number, and can say exactly where the difference came from. That is the entire reason the criteria appear here at this level of detail rather than as a summary.

## The four-category rubric

Four categories, twenty criteria, one hundred points of maximum per category, and four weights that sum to one hundred. Category score times weight, summed, divided by 100. No rounding step and no adjustment.

- (84 x 35) + (78 x 25) + (62 x 20) + (76 x 20) = 2940 + 1950 + 1240 + 1520 = 7650
- 7650 divided by 100 = **76.5**

| Category | Weight | Score | Contribution | Why it carries this weight |
| --- | --- | --- | --- | --- |
| Testing Rigor | 35 | 84 | 29.40 | The only category where a buyer's money is directly at risk from a failure they cannot detect by inspection |
| Transparency | 25 | 78 | 19.50 | A certificate a reader cannot open does no work |
| Product Range | 20 | 62 | 12.40 | Complete paperwork on an empty shelf buys nothing |
| Value | 20 | 76 | 15.20 | What the testing premium buys, and what it does not |

### Testing Rigor, weight 35, scored 84

| # | Criterion | Max | Score | Evidence |
| --- | --- | --- | --- | --- |
| 1.1 | Double-certification gate enforced in the order system | 25 | 25 | Sellable-stock condition in the backend order sync[^1] |
| 1.2 | Panel breadth and assay quality | 25 | 23 | Five assays: identity, purity, net content, endotoxin, appearance[^1][^6] |
| 1.3 | Certificate coverage of sellable stock | 20 | 20 | Thirteen of thirteen in-stock lots[^1] |
| 1.4 | Testing history and repeat rounds | 20 | 6 | One submission, received 30 June 2026, reported 2 July 2026[^1] |
| 1.5 | Laboratory identification and traceability | 10 | 10 | Named laboratory, location, client of record, signatory, per-lot accession[^2] |

### Transparency, weight 25, scored 78

| # | Criterion | Max | Score | Evidence |
| --- | --- | --- | --- | --- |
| 2.1 | Per-lot certificate ledger, public and free to read | 25 | 25 | The published certificate ledger[^1] |
| 2.2 | Ledger completeness against the certificate count | 15 | 11 | Fourteen certificates, thirteen lots, twelve ledger rows[^1][^5] |
| 2.3 | Publication of the production facility certificate | 20 | 4 | Held on file, not published[^1] |
| 2.4 | Seller identity, forum, and fulfilment disclosure | 20 | 20 | Terms, contact page, shipping policy[^3][^7][^4] |
| 2.5 | Stated non-assertions and named limits | 20 | 18 | Accreditation, no sterility assay, and company age, all addressed in the open[^3] |

### Product Range, weight 20, scored 62

| # | Criterion | Max | Score | Evidence |
| --- | --- | --- | --- | --- |
| 3.1 | Breadth of the listing | 20 | 15 | Forty products, nine mechanism categories[^5] |
| 3.2 | Depth of sellable stock | 30 | 9 | Thirteen of forty in stock[^5] |
| 3.3 | Certificate coverage of sellable stock | 25 | 25 | Thirteen of thirteen certified[^1] |
| 3.4 | Mechanism category spread | 15 | 8 | Nine categories published, per-product stock state[^5] |
| 3.5 | Consistency of the gate across the listing | 10 | 5 | One documented exemption for the lab solvent[^1] |

### Value, weight 20, scored 76

| # | Criterion | Max | Score | Evidence |
| --- | --- | --- | --- | --- |
| 4.1 | Out-of-Spec Guarantee | 30 | 27 | Replacement plus refund, no form, no return, buyer's own laboratory report accepted[^3] |
| 4.2 | Cost of verification to the buyer | 20 | 18 | Public ledger, free to read and open to any reader; production certificate unreadable[^1] |
| 4.3 | Shipping cost and speed | 20 | 16 | Free on every order with no minimum, FedEx 2-Day, stated cut-off, United States only[^4] |
| 4.4 | Price position across the range | 15 | 9 | Published range, delivered price equals listed price, no competitor set available[^5] |
| 4.5 | Returns policy | 15 | 6 | No returns of any kind, opened or unopened, stated plainly[^3] |

## What methodology does this site use to rate Peptriva?

A weighted rubric applied to published documents. Every criterion is scored against a document a reader can open, each category is scored out of 100 from five criteria whose maximums sum to 100, and the four category scores are combined by the arithmetic above. Nothing is scored against a claim that exists only in marketing copy. Where the storefront asserts something this record cannot substantiate from a document, the criterion scores that assertion at zero rather than taking the company's word for it.

Three rules govern how a criterion is scored, and they are the reason several of them are held below their maximum for reasons that are not failures.

- **A rule and a record are different evidence.** Criterion 1.1 scores the release gate at full marks because it is enforced in code. Criterion 1.4 scores the history at 6 of 20 because one submission is not a series. The same fact pattern earns both.
- **An unverifiable figure scores below its maximum, not at it.** Criterion 3.4 loses seven points because category spread cannot be confirmed from published data, and criterion 4.4 loses six because no competitor price set exists in the evidence pool. Neither deduction alleges a fault.
- **A term is scored as a buyer meets it, and its disclosure is scored separately.** The Cayman arbitration forum takes full marks for disclosure under criterion 2.4 and is named as a hard term in [value](/value-score). Clarity and favourability are not the same property.

## What counts as evidence in this scoring

Eight documents, all listed on [the references page](/references) with their URLs. Five are Peptriva's own published pages, one is the independent laboratory's own site, and two are outside standards: United States Pharmacopeia General Chapter <85>, which the endotoxin assay is run against, and 16 CFR Part 465, which governs review authenticity and company-controlled review websites.

| Source | Criteria it carries |
| --- | --- |
| Certificate ledger[^1] | 1.1, 1.3, 1.4, 2.1, 2.2, 2.3, 3.3, 3.5, 4.2 |
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

The reason is that they measure the age of a domain rather than the quality of a testing record, and the age of this domain is already a published fact and already priced. Peptriva's domain was registered on 30 April 2026. That youth is visible in criterion 1.4, where a single testing round scores 6 of 20, and it is stated in the limitations section of every page on this site. Importing a second, machine-generated number keyed to the same fact would charge the company twice for one thing while adding no evidence a reader could check.

The exclusion cuts against Peptriva as often as it helps. A young supplier that publishes a full per-lot certificate ledger and a young supplier that publishes nothing at all receive similar algorithmic trust scores, because the algorithm cannot read a certificate. This rubric can, so it scores the certificate and ignores the algorithm. The same reasoning excludes third-party vendor-rating listings, discussed on [the front page](/): Peptriva holds none, the rubric awards no points for one and deducts none, and the absence is reported rather than scored.

## Why a published rubric is worth reading

Because the alternative most suppliers in this category choose is worse: a marketing page that asserts high purity, gestures at testing, and publishes nothing a reader can check. A rubric with numbered criteria has a property that page does not. It can be wrong in public.

Three things follow. The deductions are the content: testing history at 6 of 20, stock depth at 9 of 30, returns at 6 of 15, the production certificate at 4 of 20. A marketing page would contain none of those numbers. The score is reproducible: every criterion cites the document it was scored against, and the composite is category score times weight, summed. And the claim is bounded: the rubric scores what Peptriva publishes and commits to, and the exclusions are printed rather than implied.

None of that makes the rating impartial, and this site does not say it does. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, effective 21 October 2024, makes it unlawful to operate a review website that misrepresents itself as offering impartial assessments of one's own products, so the relationship is stated in the header, the footer, and the body of every page carrying a number[^8].

## How to re-score it yourself

Change a criterion, recompute the category out of 100, multiply by the weight, sum the four, divide by 100. Three worked examples of a reasonable reader arriving somewhere else.

- **You think a code-enforced gate is worth more than a testing archive.** Raise criterion 1.4 from 6 to 12. Testing rigor becomes 90 and the composite becomes 78.6.
- **You think an out-of-stock listing is a failure and not a disclosure.** Cut criterion 3.1 from 15 to 8. Product range becomes 55 and the composite becomes 75.1.
- **You think no returns of any kind should be near-fatal.** Cut criterion 4.5 from 6 to 0. Value becomes 70 and the composite becomes 75.3.

One change moves the number further than any of those, and it is not a change of opinion. Publishing the production facility certificates would take criterion 2.3 from 4 to 20, transparency from 78 to 94, and the composite from 76.5 to 80.5. Everything else that would move the score meaningfully requires time rather than a decision.

If a revision changes the shape of the finding rather than the size of the number, that is worth sending. [The contact page](/contact) takes disputes about the score, and a challenge with a criterion number attached is one that can actually be answered.

What this rubric does not establish. A score derived from published documents measures what a company publishes and commits to, not what happens when a commitment is tested, and no adjudicated claim exists in this record. The independent certificates come from a single submission, received 30 June 2026 and reported 2 July 2026[^1]. Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification, and this rubric is not a substitute for one of those listings. And the domain was registered on 30 April 2026, so longevity is evidence this record cannot offer.
`,
  },

  // ------------------------------------------------------------------ FAQ ---
  {
    path: '/faq',
    navLabel: 'Questions',
    title: 'Questions about the Peptriva rating | Lab Supplier Ratings',
    description:
      'Eighteen questions about the Peptriva rating of 76.5 out of 100: the rubric, the laboratory, the certificates, stock depth, shipping, returns, and who publishes this.',
    h1: 'Peptriva Ratings FAQ',
    kicker: 'FREQUENTLY ASKED',
    standfirst:
      'Every question a reader has asked about the rubric, the evidence behind it, and the fact that Peptriva scored itself, answered in one place and cited to a document.',
    faqFromSections: true,
    body: `
Peptriva scores 76.5 out of 100 on a rubric Peptriva wrote and published. The questions below cover how that number was reached, what it rests on, and where it is weakest. Each answer points at a document rather than at an opinion.

## What is Peptriva's overall rating?

76.5 out of 100, weighted across four categories: testing rigor 84 at weight 35, transparency 78 at weight 25, product range 62 at weight 20, and value 76 at weight 20. The arithmetic is (84 x 35) + (78 x 25) + (62 x 20) + (76 x 20) = 7650, divided by 100.

Every category is scored out of 100 from five criteria whose maximums sum to 100, and all twenty are printed on [the methodology page](/methodology).

## Who scored Peptriva?

Peptriva is company #1 under review on this independent publication, which is stated in the header, in the footer, and in the body of every page carrying a number. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, prohibits running a review website that misrepresents itself as impartial about one's own products, so the relationship is disclosed rather than implied[^8].

## Why should anyone read a rating a company gives itself?

Because the criteria are published and the score is falsifiable. Every point is attached to a document a reader can open, and the rubric deducts points in all four categories: 14 of 20 on testing history, 21 of 30 on stock depth, 16 of 20 on the unpublished production certificate, and 9 of 15 on returns. A reader who disagrees can change a criterion and recompute the composite.

That is a weaker claim than impartiality, and it is the only claim this site makes.

## Is Peptriva third-party tested?

Yes, and every lot in sellable stock is. Thirteen of thirteen in-stock lots carry an independent third-party certificate, with fourteen certificates covering those thirteen lots, and there is no sellable line without one[^1].

## What lab does Peptriva use?

Freedom Diagnostics, an independent third-party laboratory in Franklin, Tennessee, United States. It is the laboratory of record on every published Peptriva certificate, the client of record is Peptriva Research, and the signatory is the Principal Chemist[^2].

## What is the two-certificate gate?

A lot cannot enter sellable stock until both a production facility certificate and an independent third-party certificate are on file. The rule is enforced as a condition in the order system rather than stated only in policy copy, which is why criterion 1.1 scores 25 of 25[^1].

One listing is exempt: for the lab solvent, the independent certificate alone clears the lot, because the production facility does not issue a certificate for an off-the-shelf USP solvent. The exemption is documented, and it still costs five points under the product range consistency criterion.

## How many lots has Peptriva tested?

Fourteen certificates are on file covering thirteen lots, which is every lot currently in sellable stock. The public ledger presents twelve rows: the lab solvent lot carries two accession numbers, which accounts for part of the difference[^1].

## What is Peptriva's purity range?

99.58 to 99.90 percent by HPLC-UV area percent across the eight publishable lots. Per-lot figures, accession numbers and measured net content are on [the testing page](/testing-score) and on the published ledger[^1].

## What does the testing panel measure?

Five assays: identity by LC-MS, purity by HPLC-UV area percent, net content as measured mass in the vial, endotoxin by LAL under United States Pharmacopeia General Chapter <85> run in duplicate against a specification of 0.05 EU/mL or lower, and appearance by visual inspection[^1][^6].

Net content is the unusual one. Most vendor certificates report purity and never report quantity, which means a buyer can hold a purity certificate for a vial holding less material than the label states.

## What does the testing panel not cover?

It does not include a sterility assay, and the published terms state the material is not sterile[^3]. Two points are withheld at criterion 1.2 for that, and the absence is stated on every page of this site that describes the panel rather than left for a reader to notice.

## Why is the production facility certificate not published?

It is held on file and is not published, and the manufacturing partner is not named on any Peptriva surface. The rubric does not accept the reason as a defence: criterion 2.3 scores 4 of 20, because a reader can inspect only one of the two certificates the release gate depends on[^1].

Publishing them is the single change that would move the composite most: transparency would go from 78 to a maximum of 94, and the composite from 76.5 to 80.5.

## How many products does Peptriva sell?

Forty are listed and thirteen are in stock, across nine published mechanism categories. That is 32.5 percent of the listing actually available, and it is why product range scores 62[^5].

Published prices run from $19.99 to $129.99, and because delivery is included the listed figure is what a buyer pays. The rubric scores that publication at 9 of 15 and does not score the level, because no competitor price set is in the evidence pool and this record will not estimate one[^5].

## Does every in-stock product have a certificate?

Yes, thirteen of thirteen. There is no sellable line without an independent certificate, because the order system will not release a lot into sellable stock without one, and that criterion takes full marks at 25 of 25[^1].

## What is the Out-of-Spec Guarantee?

A commitment in the published terms: where a shipped batch misses a specification on its own certificate, the buyer receives replacement units from the next conforming batch and a refund of the purchase price, with no claim form to file and nothing to send back. The buyer's own third-party laboratory report is accepted as substantiation. It scores 27 of 30[^3].

The three withheld points are for the window: it runs on the same 30-day clock as every other claim, and a specification failure is exactly the kind of defect a researcher may not find inside thirty days.

## Does Peptriva accept returns?

No returns of any kind, opened or unopened. The rubric scores this at 6 of 15: six points for stating it plainly in the published terms rather than burying it, nine withheld because a buyer who changes their mind has no remedy at all[^3].

Four claim windows remain: damaged shipment, incorrect or missing items, lost in transit or delivered and not received, and out-of-specification batch. All four run 30 days from delivery, claims are answered within 5 business days, and approved refunds reach the original payment method within 7 to 10 business days of approval.

## How much does Peptriva charge for shipping?

Nothing. Shipping is free on every order and there is no cart minimum, so a listed price is the delivered price. FedEx 2-Day with tracking is the carrier. The cut-off is 5:00 p.m. ET on a business day, orders placed before it ship that day, and processing runs 1 to 2 business days from payment clearance and researcher attestation[^4].

Destinations are the United States only, including the District of Columbia. There is no international shipping, and Peptriva makes no cold-chain claim on the parcel.

## Is Peptriva's laboratory accredited?

This record does not assert it. The laboratory is named, located, linked and identified on every certificate with an accession number, and its accreditation scope is not something Peptriva publishes, so the rubric awards no points for one and deducts none[^2].

## Why is Peptriva not listed on peptide vendor-rating sites?

It is not listed on them, and that is a real absence rather than an oversight. Those listings grade suppliers on certificate cadence and laboratory verification, they are earned over time, and the domain was registered on 30 April 2026. The rubric awards no points for a listing and deducts none for its absence.

## What these answers do not establish

Every answer above is drawn from a published document or from the order system that enforces the release gate. None of them measures performance. No adjudicated out-of-specification claim exists in this record, the certificates behind it come from a single testing round reported on 2 July 2026, and the response times quoted are published commitments rather than measured outcomes[^1][^3].

Nothing on this page describes what any compound does. The material is sold for in vitro research use only. It is not a drug, food, cosmetic, supplement or device, is not approved by the FDA, and is not for human or veterinary use by any route. Buyers must be 21 or over and must attest that they are qualified researchers[^3].
`,
  },

  // ---------------------------------------------------------------- ABOUT ---
  {
    path: '/about',
    navLabel: 'About',
    title: 'About this rating and who publishes it | Lab Supplier Ratings',
    description:
      'Lab Supplier Ratings is an independent third-party rating of Peptriva, company #1 on the roster. What a published rubric can be worth, how the disclosure works, and the editorial standard it is held to.',
    h1: 'About Peptriva Ratings',
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
This site is an independent third-party review publication scoring Peptriva as company #1, and the rating is 76.5 out of 100. That relationship appears in the header of every page, in the footer of every page, and in the first paragraph of every page that carries a number. The composite is this publication's reading of published evidence; a reader who weights the same evidence differently should say where they disagree.

## What this site is

A single instrument: a hundred-point rubric across four weighted categories, applied to one research-peptide supplier by that supplier, with all twenty criteria and their maximums printed on [the methodology page](/methodology).

The reason to publish it is that the alternative most suppliers in this category choose is worse. The standard practice is a marketing page that asserts high purity, gestures at testing, and publishes nothing a reader can check. A rubric with numbered criteria has a property that page does not: it can be wrong in public, and it can be corrected in public.

Three things follow from that, and they are the whole of the argument.

- **The deductions are the content.** Testing history scores 6 of 20. Stock depth scores 9 of 30. The unpublished production certificate scores 4 of 20. Returns score 6 of 15. A marketing page would contain none of those numbers, and a reader can tell the difference between a document that reports its own weak points and one that does not.
- **The rating is reproducible.** Every criterion cites the document it was scored against, and the composite is category score times weight, summed, divided by 100. [The methodology page](/methodology) works three examples of a reasonable reader arriving at a different number.
- **The claim is bounded.** The rubric scores what Peptriva publishes and commits to. It does not score what a compound does, it does not score laboratory accreditation, and it does not score price competitiveness against other suppliers. Those exclusions are printed rather than implied.

What the reader is asked to accept is narrow and checkable: that thirteen of thirteen sellable lots have an independent certificate, that those certificates were reported on 2 July 2026 by a named laboratory in Franklin, Tennessee, and that the published terms say what this site says they say[^1][^2][^3]. Each of those can be confirmed in under five minutes by someone who does not trust the publisher at all, which is the only kind of claim a documentary review should be making.

## What this site is not

It is an independent third-party assessment and is not affiliated with Peptriva. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, effective 21 October 2024, makes it unlawful to operate a review website that misrepresents itself as providing impartial assessments of one's own products or services[^8]. Naming Peptriva as the subject under review, rather than implying the publisher is Peptriva, is the condition of publishing at all.

It is not a substitute for the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification. Peptriva does not appear on those, holds no letter grade and no ranked position from one, and the rubric awards no points for a listing in either direction. The absence is named on the front page and in every limitations passage on this site.

It is not a rating of efficacy. Peptriva material is sold for in vitro research use only. It is not a drug, food, cosmetic, supplement or device, is not approved by the FDA, and is not for human or veterinary use by any route[^3]. Buyers must be 21 or over and must attest that they are qualified researchers[^3].

It is not a place where customer reviews are folded into the composite. Reviews are published elsewhere on this network under the same disclosure, and no star average, review count or distribution appears anywhere in this rubric. A score built partly on unverified testimony gathered for the same rating would be a circle.

And it is not a ranking. No competitor was scored, no comparative price set or certificate archive for another supplier is in the evidence pool, and this record will not estimate one.

## Editorial standard

Four rules govern what may appear on these pages, and they are worth stating because they are the difference between a rubric and a brochure.

**Every number traces to a document.** No figure appears on this site that cannot be read back to one of the eight sources on [the references page](/references). Nothing is estimated, rounded for effect, or inferred from a plausible assumption. Where a figure is unavailable, the criterion that needed it scores below its maximum and says why: criterion 3.4 loses seven points because mechanism category spread cannot be confirmed from published data, and criterion 4.4 loses six because no competitor price set exists to compare against.

**A claim that only Peptriva can verify earns no points.** The rubric declines to award credit for something the company knows and the reader cannot confirm. That is why the production facility certificate scores 4 of 20 despite being a real document that a real gate depends on, and why laboratory accreditation is not scored at all in either direction. That rule is what stops a published rubric from drifting into an assertion.

**The document outranks this site.** Where a figure here and a figure on the certificate ledger disagree, the ledger is correct and this site is wrong. [The contact page](/contact) is where to report one, and a correction of that kind is applied to the criterion table and the composite moves with it.

**Limitations are printed, not omitted.** Every page ends by naming what its evidence does not establish. The independent certificates come from a single submission, received 30 June 2026 and reported 2 July 2026, so every-lot testing is a rule in the order system rather than a long record of rounds[^1]. Fourteen certificates covering thirteen lots is a small archive against competitors who publish hundreds. The panel does not include a sterility assay, and the terms state the material is not sterile[^3]. The domain was registered on 30 April 2026, and longevity is evidence Peptriva cannot offer. And a disclosed independent rating is still a reading of evidence a reader can re-weight: disclosure of method and relationship is required, and this page does not claim the composite is the only defensible number.
`,
  },

  // ----------------------------------------------------------- REFERENCES ---
  {
    path: '/references',
    navLabel: 'References',
    title: 'References and citations behind the rating | Lab Supplier Ratings',
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

Two of the eight carry most of the score. The certificate ledger is the evidence behind criteria 1.1, 1.3, 1.4, 2.1, 2.2, 2.3, 3.3, 3.5 and 4.2, which reach across all four categories. The terms and conditions carry 2.4, 2.5, 4.1 and 4.5. If either document changed materially, the composite of 76.5 would move, and the change would be visible in the criterion table on [the methodology page](/methodology) rather than announced as a new headline number.

Any purity or net-content figure printed on this network can be traced back in three steps, none of which requires contacting Peptriva.

1. Take a lot identifier and its accession number from a table on [the testing page](/testing-score), for example lot BC10-260504 at accession 2606300400, or lot CU50-260503 at accession 2606300412.
2. Open the certificate ledger and find the matching row, which carries purity, measured net content, the endotoxin result, the accession number and the test date[^1].
3. Confirm the laboratory named on that certificate against the laboratory's own site: Freedom Diagnostics, Franklin, Tennessee, United States[^2]. The client of record on every certificate is Peptriva Research and the signatory is the Principal Chemist.

Two of the entries are not Peptriva documents at all, and they do different work from the other six. United States Pharmacopeia General Chapter <85> is the method the endotoxin assay is run against, so it is what makes the phrase "0.05 EU/mL or lower" mean something specific rather than something reassuring[^6]. 16 CFR Part 465 is the Federal Trade Commission rule governing review authenticity and company-controlled review websites, and it is the reason the relationship disclosure on this network is structural rather than a footnote[^8]. Neither is scored, and neither endorses anything.

The entries are ordered by how much of the rubric they carry rather than alphabetically or by date, which is why the certificate ledger is first and the shipping policy sits below the catalogue. A reader auditing this rating from the top of the list down is auditing it in descending order of consequence.

## Editorial standard for the reference list

Nothing enters this pool because it is convenient, and nothing that is in it is exempt from being read against the score.

**Marketing copy is not evidence.** No number on this site comes from a promotional page, an internal estimate, or a figure that could not be traced to one of the eight entries. Where the storefront asserts something with no substantiating document, this record scores it as unsubstantiated rather than accepting it. The clearest case is laboratory accreditation: the laboratory is named and its certificates are published, its accreditation scope is not something Peptriva publishes, and so the rubric awards no points for one and deducts none.

**A document that exists but cannot be read is not in the pool.** The production facility certificate is required by the sellable-stock gate and is held on file rather than published[^1]. It is absent from this list for that reason, and its absence is scored directly at criterion 2.3, which takes 4 out of 20. A reader should be able to tell, from the reference list alone, which parts of the argument they can check and which they cannot.

**Outside standards are cited as standards, not as endorsements.** United States Pharmacopeia General Chapter <85> is the method the endotoxin assay is run against[^6]. It is not a certification of Peptriva and nothing here suggests it is. 16 CFR Part 465 governs review authenticity and company-controlled review websites and is cited for that reason alone[^8]; it is not scored, and no criterion draws points from it.

**The pool is deliberately short.** Eight sources for a hundred-point rubric is a small evidence base, and a longer list would not be better if the additions were weaker. What the shortness costs is breadth: there is no third-party assessment of Peptriva in this pool, because none exists to cite, and there is no competitor data, because none is published in a form this record could verify.

**A source that changes is re-read, not remembered.** These are live pages rather than archived filings, and a supplier can revise a returns clause or a shipping cut-off without announcing it. Where a source changes materially, the affected criterion is re-scored against the new text and the composite moves, rather than the old score being carried forward on the strength of having been correct once. The figures on this site were verified against the published record on 4 September 2026.

**Nothing is cited that a reader cannot reach.** Every entry below resolves to a page anyone can open, with no account, no purchase and no enquiry to Peptriva. That is a constraint on what this rubric can say as much as it is a property of the list: the parts of Peptriva's process that live only in internal systems are described where they are relevant and scored down where a reader cannot confirm them, which is exactly what happens to the production certificate at criterion 2.3 and to mechanism category spread at criterion 3.4.

## References

:::references {}
:::

Four things this pool does not establish, stated because a reference list is where a reader is most likely to assume more than is there. Published documents establish commitments, not performance, and nothing in the pool measures whether a claim window was met in practice. The certificate ledger reflects a single testing round: samples received 30 June 2026, reported 2 July 2026[^1]. The pool contains no independent assessment of Peptriva by anyone other than Peptriva, and no vendor-rating listing, because Peptriva holds none. And the pool contains no customer figure, order figure or revenue figure, and none is used anywhere in the rubric.
`,
  },

  // -------------------------------------------------------------- CONTACT ---
  {
    path: '/contact',
    navLabel: 'Contact',
    title: 'Editorial contact and score disputes | Lab Supplier Ratings',
    description:
      'How to challenge a criterion in the Peptriva rubric, what to include, and where to send it. Support address, telephone number, hours, and the distribution address.',
    h1: 'Editorial contact',
    kicker: 'EDITORIAL CONTACT',
    standfirst:
      'A rubric applied by an independent publication is only useful if it can be argued with. A challenge that names a criterion number is one that can be answered.',
    body: `
Peptriva scored itself 76.5 out of 100 against a rubric it wrote, so the most valuable message this site can receive is one that says a criterion is scored wrong. All twenty criteria are numbered on [the methodology page](/methodology), each with its maximum, its awarded score, and the document it was scored against.

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

The first kind of message is a factual correction: a figure on this site that does not match the document it cites. Those are the easiest to act on and the fastest to apply. The second is a scoring dispute, covered in the next section. The third is a request for something this record does not publish, which will usually be the production facility certificate: it is held on file and is not published, and the rubric already deducts sixteen points for that at criterion 2.3[^1].

Several things do not belong here. Order problems run on their own process rather than through this rubric: claims for a damaged shipment, incorrect or missing items, a shipment lost in transit or delivered and not received, or an out-of-specification batch are answered within 5 business days, run 30 days from delivery or from the carrier-marked delivery date, and approved refunds reach the original payment method within 7 to 10 business days[^3]. Those go to support. Returns are not available: there are no returns of any kind, opened or unopened, and arguing the criterion score will not change an order[^3]. And questions about what a compound does cannot be answered anywhere on this network, because the material is sold for in vitro research use only, is not a drug, food, cosmetic, supplement or device, is not approved by the FDA, and is not for human or veterinary use by any route[^3].

## How to dispute a score

Four things make a challenge answerable, and a message with all four can be adjudicated the day it arrives.

- **A criterion number.** "Criterion 3.2 is scored too generously" can be checked. "The range is thin" is already in the rubric, at 9 out of 30.
- **A proposed score and a reason.** The rubric moves in whole points against a stated maximum. Proposing 2 instead of 6 on criterion 4.5 is a specific claim about how much a no-returns policy should cost.
- **A document, where one exists.** The evidence pool is eight published sources[^1][^2][^3][^4][^5][^6][^7][^8]. If a source says something different from what this site reports, quoting it settles the matter immediately, because the document outranks this site.
- **What it does to the composite.** Category score times weight, summed, divided by 100. A challenge that recomputes the composite has already done the work that makes it easy to act on.

Three objections are strong enough that the rubric names them before anyone sends them. That a code-enforced gate is worth more than six points of history: possibly, and raising criterion 1.4 to 12 moves the composite from 76.5 to 78.6, with the argument against being that the rule has never been tested against an inconvenient result, since the certificates come from one submission reported on 2 July 2026[^1]. That scoring a company's own price position at 9 of 15 is evasive: the counter is that no competitor price set is in the evidence pool and this record will not estimate one, so the points are withheld for what cannot be checked rather than awarded for what cannot be checked. And that a self-published rubric cannot be evidence at all: the strongest objection on the list, which this rubric does not defeat. What it offers instead is that every point cites a document a reader can open without contacting Peptriva, and that the categories scored down are the ones a marketing page would have left out.

## Editorial standard for corrections

**A correct challenge is applied, not argued with.** Where a dispute is right, the change appears in the criterion table on [the methodology page](/methodology) and the composite moves with it. A rubric that collected corrections without applying them would be worth less than no rubric.

**The document outranks this site.** Where a figure here and a figure on the certificate ledger disagree, the ledger is correct and this site is wrong[^1]. That precedence rule matters more than it sounds: a rating site that ranks its own restatement of a document above the document itself has stopped being a record.

**A scoring change is a change to the rubric, not to the page.** Criteria are altered at the criterion table and every page that quotes the number is updated with it, so that a reader cannot find two different composites on two different pages of the same site.

**Messages about orders reach Peptriva; messages about the rating reach this publication.** Collapsing those channels would blur subject and publisher. What can be offered on the rating is the working: the criteria, the maximums, the citations, and an arithmetic composite anyone can recompute from published numbers.

What this page does not establish. Response times quoted here are the published commitments in the terms, and nothing on this site measures performance against them[^3]. No adjudicated out-of-specification claim exists in this record, because the certificates behind it come from a single submission reported on 2 July 2026[^1]. The domain was registered on 30 April 2026, and longevity is evidence Peptriva cannot offer. And Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification, so a reader looking for an outside adjudicator of this score will not find one there.
`,
  },
];
