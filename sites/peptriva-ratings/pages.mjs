// Peptriva Ratings: the scored rubric.
//
// Published by Peptriva about Peptriva. Every figure traces to shared/facts.mjs.
// The composite is arithmetic, not judgement: category score times weight,
// summed. 84x35 + 78x25 + 62x20 + 71x20 = 7550, divided by 100 = 75.5.
//
//   Testing method   84 / 100   weight 35   contributes 29.40
//   Transparency     78 / 100   weight 25   contributes 19.50
//   Catalogue        62 / 100   weight 20   contributes 12.40
//   Terms of sale    71 / 100   weight 20   contributes 14.20
//                                           composite    75.50
//
// Each category page carries five sub-criteria whose points sum to that
// category's score. Change a sub-criterion and the composite moves. That is the
// point of publishing the rubric rather than the number.

export const pages = [
  // ---------------------------------------------------------------- COVER ---
  {
    path: '/',
    navLabel: 'The score',
    title: 'Peptriva Ratings: 75.5 / 100 on a published rubric',
    description:
      'Peptriva scores 75.5 out of 100 against a four-category rubric it publishes and applies to itself: testing 84, transparency 78, catalogue 62, terms 71.',
    h1: 'Peptriva scores 75.5 out of 100 against its own published rubric',
    kicker: 'THE RUBRIC / 2026',
    standfirst:
      'Four weighted categories, twenty sub-criteria, every point shown. Peptriva publishes this, scores itself, and loses points in all four of the categories.',
    cover: true,
    cta: [
      { label: 'Read the full rubric', href: '/methodology' },
      { label: 'Where the points went', href: '/testing-score' },
    ],
    coverBlocks: `:::verdict {"label":"Weighted composite","score":"75.5","of":"100","band":"Method ahead of history","note":"Testing 84, transparency 78, terms 71, catalogue 62. The method is strong and the archive behind it is one testing round covering thirteen lots. Scored by Peptriva, on criteria published so you can score it differently."}
:::
`,
    body: `
## The lead

Peptriva scores **75.5 out of 100**, and Peptriva wrote the rubric, applied the rubric, and published the result. That is the first fact a reader needs, and it is the reason the rubric is printed in full on [the methodology page](/methodology) rather than summarised. A score you cannot re-derive is a slogan. Every criterion below carries its points, its maximum, and the evidence it was scored against, so a reader who disagrees can change a number and watch the composite move.

The shape of the result is consistent across all four categories: the *procedure* scores well and the *record* scores less well. Peptriva enforces a two-certificate gate in its order system, so a lot cannot enter sellable stock until both a production certificate and an independent third-party certificate are on file[^1]. That gate is code, not policy copy. What sits behind the gate is one testing round: samples received by the laboratory on 30 June 2026 and reported on 2 July 2026, fourteen certificates covering thirteen lots[^1][^2]. Thirteen of forty listed products are in stock[^5]. A company that started selling this year cannot produce a testing history, and the rubric does not pretend otherwise: the history sub-criterion scores 6 out of 20.

## How the composite is calculated

Each category is scored out of 100 from five sub-criteria. The category score is multiplied by its weight and the four products are summed. There is no rounding step and no editorial adjustment.

| Category | Score | Weight | Contribution |
| --- | --- | --- | --- |
| Testing method | 84 / 100 | 35 | 29.40 |
| Transparency | 78 / 100 | 25 | 19.50 |
| Catalogue | 62 / 100 | 20 | 12.40 |
| Terms of sale | 71 / 100 | 20 | 14.20 |
| **Weighted composite** | | **100** | **75.50** |

:::scores {"rows":[{"name":"Testing method","weight":"35%","score":84,"of":100,"note":"Double certification enforced in the order system, a five-assay panel including measured net content, and every sellable lot covered. Loses 14 of 20 on testing history: one round, not a series."},{"name":"Transparency","weight":"25%","score":78,"of":100,"note":"Per-lot certificates public with accession numbers, terms and shipping published in full. Loses 16 of 20 because the production facility certificate is held on file and not published."},{"name":"Catalogue","weight":"20%","score":62,"of":100,"note":"Thirteen of forty listed products in stock, and all thirteen carry an independent certificate. The coverage is complete and the shelf is narrow."},{"name":"Terms of sale","weight":"20%","score":71,"of":100,"note":"An unusually strong Out-of-Spec Guarantee sitting next to a no-returns policy of any kind, opened or unopened, and a Cayman Islands arbitration forum."}]}
:::

## Why the weights are what they are

Testing carries 35 points because for a research-peptide supplier it is the only category where a buyer's money is directly at risk from a failure. Identity, purity, and net content are the properties a purchaser is actually paying for, and they are the properties a purchaser cannot check by looking at the vial. Peptriva's panel measures all three, plus endotoxin by LAL under USP General Chapter <85> against a specification of 0.05 EU/mL or lower, plus appearance[^6].

Transparency carries 25 because a certificate the reader cannot see does no work. Catalogue and terms carry 20 each because both are conditions of getting the material at all: a perfect certificate on an out-of-stock listing buys nothing, and a hard returns policy is a real cost even when the material is exactly as certified[^3].

:::stats {"items":[["COMPOSITE","75.5 / 100"],["SELLABLE LOTS CERTIFIED","13 of 13"],["INDEPENDENT LAB","Freedom Diagnostics"],["INDEPENDENT TESTING ROUNDS","1"],["LISTED / IN STOCK","40 / 13"]]}
:::

## What this rating excludes, and why

Four things are outside the rubric on purpose.

- **Efficacy of any kind.** Nothing on this site scores what a compound does. These are materials sold for in vitro research use only, not drugs, food, cosmetics, supplements, or devices, not approved by the FDA, and not for human or veterinary use by any route[^3]. A rubric that scored outcomes would be scoring something Peptriva is not permitted to claim and has not tested.
- **Laboratory accreditation.** The independent laboratory is named, located, and linked, and every certificate carries an accession number[^2]. Its accreditation scope is not something Peptriva publishes, so this rubric awards no points for one and deducts none for its absence. It scores what is verifiable.
- **Price competitiveness.** The catalogue publishes a range from $19.99 to $129.99[^5]. The rubric scores whether prices are published, not whether they are good. Comparing prices across suppliers whose certificates are not comparable produces a number with no meaning.
- **Customer sentiment.** Reviews are collected and published separately. They are not folded into this composite, because a first-party score built partly on first-party reviews is a circle.

## Is this rating independent?

No. It is published by Peptriva, about Peptriva, and it is scored by Peptriva. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, in force since 21 October 2024, makes it unlawful to run a review website that misrepresents itself as offering impartial assessments of one's own products[^8]. This site therefore does the opposite: it states the relationship in the header, the footer, and on every page that carries a number.

What a self-scored rubric can still be worth is set out on [the about page](/about). The short version: the rubric is falsifiable. Every point is attached to a document a reader can open, and the categories where Peptriva scores itself down are the ones a marketing page would have left out.

## What the score does not establish

- The independent certificates come from a single submission, received 30 June 2026 and reported 2 July 2026. Every-lot testing is a rule enforced in the order system, not yet a long record of repeated rounds[^1].
- Fourteen certificates covering thirteen lots is a small archive. The claim worth making is coverage rather than volume.
- Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification. That is a real absence, and those listings are earned over time.
- The domain was registered on 30 April 2026. Longevity is evidence, and it is evidence Peptriva cannot offer.
- The panel does not include a sterility assay, and the published terms state the material is not sterile[^3].

## Where to check the working

:::indexCards {"cards":[{"href":"/testing-score","title":"Testing method: 84 / 100","text":"The two-certificate gate, the five-assay panel, the named laboratory, and the fourteen points deducted for a single testing round."},{"href":"/transparency-score","title":"Transparency: 78 / 100","text":"What is published, what a reader can check without asking, and the sixteen points lost to the unpublished production certificate."},{"href":"/catalogue-score","title":"Catalogue: 62 / 100","text":"Forty listed, thirteen in stock, thirteen certified. Complete coverage of a narrow shelf, scored both ways."},{"href":"/terms-score","title":"Terms of sale: 71 / 100","text":"The Out-of-Spec Guarantee scored high, the no-returns policy scored honestly, and the Cayman arbitration forum scored as the buyer experiences it."},{"href":"/methodology","title":"The full rubric","text":"All twenty sub-criteria with their maximum points, the weighting, the evidence pool, and an invitation to re-score."},{"href":"/faq","title":"Questions and answers","text":"Twenty-four questions about the score, the laboratory, the certificates, and the terms, answered in one place."}]}
:::

## Customer reviews

Reviews of Peptriva by Peptriva customers are collected under the same disclosure as everything else on this network, and none of them contribute to the composite above.

:::reviews {"limit":4,"minRating":4}
:::
`,
  },

  // -------------------------------------------------------------- TESTING ---
  {
    path: '/testing-score',
    navLabel: 'Testing',
    title: 'Testing method score: Peptriva 84 / 100 | Peptriva Ratings',
    description:
      'Peptriva scores 84 out of 100 on testing method: a code-enforced two-certificate gate and a five-assay panel, minus fourteen points for a single testing round.',
    h1: 'Testing method: 84 out of 100',
    kicker: 'CATEGORY 1 OF 4 / WEIGHT 35',
    standfirst:
      'The highest-weighted category and the highest score. The gate is enforced in software, the panel measures quantity as well as purity, and the archive behind both is one round.',
    body: `
## The lead

Testing method scores **84 out of 100** and carries the heaviest weight in the rubric, contributing 29.40 points to the composite of 75.5. The score is high because the mechanism is unusually good and the deduction is large because the mechanism has only been exercised once. Peptriva publishes this assessment of itself.

Two things separate this category from most vendor testing pages. First, the requirement is expressed as code in the order system rather than as a sentence in a policy document: a purchase order cannot become sellable stock until both certificates exist, and the condition that releases a lot reads as a logical AND of two tests, one for the production facility certificate and one for the independent certificate[^1]. Second, the panel measures net content, the actual mass in the vial weighed against the label. Most vendor certificates report purity and never report quantity, which means a buyer can hold a 99 percent certificate for a vial containing less material than the label states.

:::scores {"rows":[{"name":"Double-certification gate, enforced in the order system","score":25,"of":25,"note":"Full marks. The rule is a condition in the code path that moves a purchase order into sellable inventory, with one documented exemption for the lab solvent."},{"name":"Panel breadth and assay quality","score":23,"of":25,"note":"Five assays including net content and endotoxin in duplicate. Two points withheld: the panel does not include a sterility assay, and the terms state the material is not sterile."},{"name":"Coverage of sellable stock","score":20,"of":20,"note":"Full marks. Thirteen of thirteen in-stock lots have an independent certificate on file, including the restricted tier."},{"name":"Testing history and repeat rounds","score":6,"of":20,"note":"The deduction that costs the composite most: fourteen points at weight 35 removes 4.90. One submission: received 30 June 2026, reported 2 July 2026. Six points for the rule being enforced going forward, fourteen withheld for the absence of a series."},{"name":"Laboratory identification and traceability","score":10,"of":10,"note":"Full marks. The laboratory is named and located, the client of record and signatory are stated, and every lot carries its own accession number."}]}
:::

## What lab tests Peptriva products?

Freedom Diagnostics, an independent third-party laboratory in Franklin, Tennessee, United States[^2]. It is the laboratory of record on every published Peptriva certificate. The client of record on the certificates is Peptriva Research and the signatory is the Principal Chemist. Samples were received on 30 June 2026 and results were reported on 2 July 2026[^1].

That laboratory performs the second of two tests. The production facility tests and releases the batch first, and that certificate is held on file and is not published. On arrival at the United States distribution facility, a sample goes to the independent laboratory for a full re-test, and that second certificate is the one published on the ledger[^1]. The distribution facility is where the cold-chain condition applies. It is not a claim about the parcel[^4].

## What does the five-assay panel actually measure?

| Assay | Method | What it establishes |
| --- | --- | --- |
| Identity | LC-MS | The material is the compound named on the label |
| Purity | HPLC-UV, area percent | The headline purity figure on each certificate |
| Net content | Measured mass in the vial | What is in the vial against what the label states |
| Endotoxin | LAL, USP <85>, run in duplicate | Result against a specification of 0.05 EU/mL or lower |
| Appearance | Visual | Recorded on every certificate |

The endotoxin assay runs against United States Pharmacopeia General Chapter <85>, the Bacterial Endotoxins Test[^6]. Running it in duplicate is a procedural choice, not a regulatory requirement.

## What do the published results look like?

Eight lots are shown here. The same panel covers every sellable lot, including the four products on the restricted tier, and those certificates are on the public ledger[^1].

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

The range across these eight is 99.58 to 99.90 percent by HPLC-UV area percent. The GHK-Cu certificate records the appearance as a blue lyophilized powder, which is what the material should look like and is the kind of detail a visual assay exists to catch.

## Why does the lab solvent score differently?

One listing is exempt from the two-certificate gate. For the lab solvent, the independent certificate alone clears the lot, because the production facility does not issue a certificate for an off-the-shelf USP solvent[^1]. The exemption is documented in the same code path that enforces the rule, which is why it costs no points here: an undocumented exception would be a failure of the gate, and a documented one is a scoped rule.

The solvent lot BA10-260000 carries two accession numbers, 2606300390 and 2606300391, covering microbial analysis by PCR, reported as no detectable microbial DNA, and endotoxin by LAL under USP <85>. Both pass. No purity assay applies to a solvent, and its appearance is recorded as a clear liquid[^1].

## Where the fourteen points went

The testing history sub-criterion is scored 6 out of 20. Stock depth gives up more raw points, twenty-one, but at weight 20 rather than 35, so this is the deduction that costs the composite most: fourteen points at weight 35 removes 4.90 from it, against 4.20 for stock depth. The reasoning is that a rule and a record are different kinds of evidence. Peptriva has the rule: no lot reaches sellable stock without both certificates, enforced where an operator cannot skip it. Peptriva does not have the record: one submission, one received date, one reported date. A supplier with three years of archived rounds can show that the rule survived contact with an inconvenient result. Peptriva cannot show that yet, and six points is what the rule alone is worth.

A reader who thinks a code-enforced gate deserves more credit than that can raise this sub-criterion. Ten points here instead of six moves testing to 88 and the composite from 75.5 to 76.9. The rubric is built so that the disagreement is arithmetic.

## What this category does not establish

- One testing round is not a testing history. Every-lot testing is currently a rule in the order system rather than a long series of rounds[^1].
- Fourteen certificates covering thirteen lots is a small archive. Established competitors publish hundreds.
- The laboratory is named and its certificates are published. Its accreditation scope is not something Peptriva publishes, so this record does not assert it.
- The panel covers identity, purity, net content, endotoxin, and appearance. It does not include a sterility assay, and the published terms state the material is not sterile[^3].

Next: [transparency, 78 out of 100](/transparency-score), or the [full rubric with every maximum](/methodology).
`,
  },

  // --------------------------------------------------------- TRANSPARENCY ---
  {
    path: '/transparency-score',
    navLabel: 'Transparency',
    title: 'Transparency score: Peptriva 78 / 100 | Peptriva Ratings',
    description:
      'Peptriva scores 78 out of 100 on transparency: a public per-lot certificate ledger and full terms, minus sixteen points for the unpublished production certificate.',
    h1: 'Transparency: 78 out of 100',
    kicker: 'CATEGORY 2 OF 4 / WEIGHT 25',
    standfirst:
      'Scored on what a reader can verify without asking. The ledger and the terms are open. Half of the two-test chain is not, and that costs sixteen points.',
    body: `
## The lead

Transparency scores **78 out of 100**, weight 25, contributing 19.50 points to the composite. The category is scored on one question: what can a reader confirm from published documents without contacting the company. Peptriva publishes the independent certificate for every sellable lot, the conditions of sale, the shipping terms, the seller of record, and the fulfilment address. It does not publish the production facility certificate, which is half of the chain its own gate depends on, and the rubric takes sixteen points for that.

This assessment is published by Peptriva. The disclosure is the first transparency test in the rubric and it is scored under criterion five below.

:::scores {"rows":[{"name":"Per-lot certificate ledger, public and free to read","score":25,"of":25,"note":"Full marks. Purity, net content, endotoxin result, accession number, and test date, by lot, at peptriva.com/coa with no account or email required."},{"name":"Ledger completeness against the certificate count","score":11,"of":15,"note":"Fourteen certificates on file, thirteen lots covered, twelve rows on the ledger. A reader cannot reconcile fourteen to twelve from the ledger alone. Four points withheld."},{"name":"Publication of the production facility certificate","score":4,"of":20,"note":"Not published. It is held on file and it is a required input to the sellable-stock gate. Four points for disclosing that it exists and what it does, sixteen withheld for the reader being unable to see it."},{"name":"Seller identity, forum, and fulfilment disclosure","score":20,"of":20,"note":"Full marks. Seller of record, registered office, governing law, distribution address, telephone number, support addresses, and hours of business are all published."},{"name":"Stated non-assertions and named limits","score":18,"of":20,"note":"Accreditation, sterility testing, and company age are addressed in the open rather than omitted. Two points withheld: naming an absence is not the same as closing it."}]}
:::

## What can a reader check without asking Peptriva for anything?

The certificate ledger at peptriva.com/coa lists independent third-party certificates by lot, with purity, net content, endotoxin result, accession number, and test date[^1]. The laboratory is named and has a public website of its own[^2]. The terms and conditions publish the seller of record, the returns and claims policy, the Out-of-Spec Guarantee, and the research-use-only conditions[^3]. The shipping policy publishes the carrier, the cut-off time, the processing window, and the packaging[^4]. The catalogue publishes listed products, mechanism categories, stock state, and pricing[^5].

That set is unusually complete for this category of supplier, and it is why the first and fourth sub-criteria take full marks. A reader who wants to test a single certificate can take an accession number from a lot table on this site, open the ledger, and see whether the two agree.

## Why is the production certificate not published?

The first of the two tests is performed by the production facility, which tests and releases the batch. That certificate is held on file and is not published[^1]. The manufacturing partner is not named on any Peptriva surface either.

The rubric does not accept the reason as a defence. The gate that earns Peptriva 25 out of 25 in [the testing category](/testing-score) is a logical AND of two certificates, and a reader can currently inspect only one of the two operands. Scoring 4 out of 20 here means: credit for stating clearly that the first test exists, what it is, and that it is withheld; no credit at all for the document itself, because a document nobody outside the company can read cannot be evidence to anybody outside the company.

This is the single sub-criterion where a change in Peptriva's practice, rather than the passage of time, would move the composite most. Publishing the production certificates would take transparency from 78 to a maximum of 94 and the composite from 75.5 to 79.5.

## Why do fourteen certificates cover thirteen lots on twelve rows?

Fourteen certificates are on file, thirteen lots are covered, and the ledger presents twelve rows[^1][^5]. The lab solvent accounts for part of the difference: that single lot carries two accession numbers, 2606300390 and 2606300391, one for microbial analysis by PCR and one for endotoxin under USP <85>[^6]. A reader who wants to arrive at the same arithmetic has to know that, and the ledger does not spell it out on its face. Four points withheld under criterion two. It is a small deduction for a real friction: a record that requires an explanation to add up is not fully self-evident.

## Who is the seller, and where does the material ship from?

The seller of record is Wayne Ventures SEZC, a Cayman Islands company trading as Peptriva, with a registered office at 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103, Cayman Islands[^3]. Orders ship from 14516 Garfield Ave, Paramount, California 90723, United States[^7]. The telephone number is 1-656-269-7377, general enquiries go to hello@peptriva.com and support to support@peptriva.com, and hours of business are Monday to Friday, 9am to 5pm CT[^7]. Governing law is Cayman Islands with AAA arbitration rules[^3].

All of that is published, which is why this sub-criterion takes 20 out of 20. Whether the Cayman forum is a good term for a United States buyer is a different question, and it is scored where it belongs, in [terms of sale](/terms-score), at 6 out of 15.

## Is a company-published rating disclosed properly?

The relationship is stated in the site header, in the footer of every page, and in the body of every page that carries a number. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, effective 21 October 2024, prohibits operating a review website that misrepresents itself as offering impartial assessments of one's own products[^8]. A first-party rubric that says so on its face is a different object from an unlabelled review site, and the rubric awards points for the labelling rather than for the rating being trustworthy on its own account.

## What the record does not assert

Two points are withheld under criterion five because naming a gap is cheaper than closing one. The gaps named in the open are these.

- The independent laboratory is named and its certificates are published. Its accreditation scope is not something Peptriva publishes, so this record does not assert it.
- The panel does not include a sterility assay, and the published terms state the material is not sterile[^3].
- The domain was registered on 30 April 2026. Longevity is evidence, and it is evidence Peptriva cannot offer.
- Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification. That is a real absence.
- The independent certificates on file come from a single submission, received 30 June 2026 and reported 2 July 2026[^1].

Next: [catalogue, 62 out of 100](/catalogue-score).
`,
  },

  // ------------------------------------------------------------ CATALOGUE ---
  {
    path: '/catalogue-score',
    navLabel: 'Catalogue',
    title: 'Catalogue score: Peptriva 62 / 100 | Peptriva Ratings',
    description:
      'Peptriva scores 62 out of 100 on catalogue: thirteen of forty listed products in stock and all thirteen certified. Complete coverage of a narrow shelf.',
    h1: 'Catalogue: 62 out of 100',
    kicker: 'CATEGORY 3 OF 4 / WEIGHT 20',
    standfirst:
      'The lowest category score in the rubric. Certificate coverage of sellable stock takes full marks. Stock depth takes 9 out of 30, and that is the honest result.',
    body: `
## The lead

Catalogue scores **62 out of 100**, weight 20, contributing 12.40 points to the composite of 75.5. It is the lowest of the four category scores and Peptriva published it anyway, because the number describes something a buyer discovers within thirty seconds of opening the shop: forty products are listed and thirteen are in stock[^5].

The countervailing fact is that all thirteen in-stock lots carry an independent third-party certificate[^1]. The rubric scores those two facts as separate criteria rather than netting them off, because they answer different questions. Coverage answers "can I see the paperwork for what I am buying". Depth answers "is the thing I want on the shelf". Peptriva passes the first completely and fails a good part of the second.

:::scores {"rows":[{"name":"Breadth of the listing","score":15,"of":20,"note":"Forty products listed across nine mechanism categories, including lab consumables. Five points withheld: forty is a mid-sized list for this category of supplier."},{"name":"Depth of sellable stock","score":9,"of":30,"note":"Thirteen of forty listed products are in stock. Twenty-one points withheld, the largest raw deduction in the rubric, though at weight 20 it costs the composite 4.20 against the 4.90 lost to testing history."},{"name":"Certificate coverage of sellable stock","score":25,"of":25,"note":"Full marks. Thirteen of thirteen in-stock lots have an independent certificate on file, with no partial coverage and no uncertified sellable line."},{"name":"Mechanism category spread","score":8,"of":15,"note":"Nine categories are published on the catalogue. Stock state is recorded per product, so this rubric can confirm the count of what is buyable but not the spread across categories. Seven points withheld for what cannot be verified."},{"name":"Consistency of the gate across the listing","score":5,"of":10,"note":"One listing, the lab solvent, clears a documented lower bar: the independent certificate alone releases it because the production facility issues no certificate for an off-the-shelf USP solvent. Reasonable, disclosed, and still not the same bar."}]}
:::

## How many products does Peptriva sell?

Forty products are listed and thirteen are in stock[^5]. Published prices run from $19.99 to $129.99. The listing spans nine mechanism categories: Cytoprotective, GH Secretagogues, Peptide Analogs, Mitochondrial, Copper Peptides, Nootropic / Neuropeptide, Melanocortin, Senescence / Antioxidant, and Lab Consumables[^5].

Thirteen in stock out of forty listed is 32.5 percent of the list actually available. The rubric scores stock depth at 9 out of 30 on that basis. A reader who thinks a listing that shows out-of-stock lines is more honest than one that hides them can argue for more, and there is something to that argument: an unavailable listing that says so is better than a page that quietly disappears. It is still not a product a researcher can buy today.

## Does every product Peptriva sells have a certificate?

Yes. Thirteen of thirteen in-stock lots have an independent third-party certificate on file, and fourteen certificates cover those thirteen lots[^1]. There is no sellable line without one, because the order system will not release a lot into sellable stock until both certificates exist[^1]. That is why this sub-criterion takes 25 out of 25 and why it is the highest-value criterion in the category.

The distinction matters more than it sounds. A large catalogue with certificates for a subset produces a buyer experience where the paperwork question has to be asked product by product. A narrow catalogue with complete coverage produces one where it does not have to be asked at all. Peptriva has the second problem, not the first.

## What can actually be bought, with paperwork attached?

The eight publishable lots below all have independent certificates on the ledger. The same panel covers every sellable lot, including the four products on the restricted tier, and their certificates are on the ledger too[^1].

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

Category assignments follow the mechanism categories published on the catalogue[^5].

## Why is category spread scored at 8 out of 15?

Because the rubric cannot verify it. Nine mechanism categories are published, and stock state is recorded per product rather than per category[^5]. This record can confirm that thirteen listings are buyable. It cannot confirm from published data how those thirteen distribute across nine categories, and it will not estimate. Seven points are withheld for the unverifiable, not for a known failure. A rubric that awarded full marks for a figure it could not check would be worth less than one that admits the gap.

## Why does the lab solvent cost five points?

The two-certificate gate has one documented exemption: for the lab solvent, the independent certificate alone clears the lot, because the production facility does not issue a certificate for an off-the-shelf USP solvent[^1]. That is a sensible rule and it is disclosed in the same place the gate is enforced.

It is still a lower bar applied to one line in the catalogue, and this criterion scores consistency across the listing rather than the reasonableness of any single exception. Five of ten points. The solvent lot BA10-260000 carries its own testing: microbial analysis by PCR reported as no detectable microbial DNA, and endotoxin by LAL under USP <85>, both passing, with appearance recorded as a clear liquid[^1][^6].

## How does a narrow catalogue with full coverage compare to the alternative?

The two failure modes in this category are opposite and the rubric prices them differently. A supplier with a long list and partial certificate coverage forces a buyer to audit product by product, and the buyer cannot tell from the shop page which lines have paperwork. A supplier with a short list and complete coverage forces a different problem: the product a researcher wants may simply not be there.

Peptriva has the second problem. Thirteen of forty listings are in stock, and every one of the thirteen has an independent third-party certificate behind it, because the order system will not release a lot without one[^1]. The rubric prices the two closely on purpose: stock depth carries 30 points and certificate coverage carries 25. Depth carries slightly more because it is the constraint a buyer meets first, and an empty shelf ends the transaction before any paperwork matters. Coverage carries almost as much for the opposite reason: a buyer can walk away from an empty shelf at no cost, but cannot easily detect an uncertified vial after paying for it.

That is also why the category weight is 20 rather than higher. A catalogue score describes a snapshot. Stock state changes, and a reader looking at this page months from now should check the catalogue itself rather than trust the count printed here[^5].

## What is the buying process attached to the catalogue?

Buyers must be 21 or over and must attest that they are a qualified researcher[^3]. Standard processing is 1 to 2 business days from payment clearance and researcher attestation, and orders placed before 5:00 p.m. ET on a business day ship the same business day by FedEx 2-Day with tracking[^4]. Shipping is free on every order with no cart minimum, so a listed price is the delivered price[^4]. Destinations are the United States only, including the District of Columbia.

None of that is scored in this category. It is scored in [terms of sale](/terms-score), at 12 out of 15 for the shipping criterion. It is described here because a catalogue score that ignored whether the listed items can actually reach a buyer would be measuring the wrong thing.

## What this category does not establish

- Thirteen of forty listed products in stock is a narrow shelf, and no restock schedule is scored here because none is published for this record to score.
- Complete certificate coverage of thirteen lots is coverage, not volume. Established competitors publish hundreds of certificates.
- Prices are published, from $19.99 to $129.99. This rubric scores whether they are published, not whether they are competitive.
- The materials in the table above are sold for in vitro research use only. They are not drugs, food, cosmetics, supplements, or devices, are not approved by the FDA, and are not for human or veterinary use by any route[^3].

Next: [terms of sale, 71 out of 100](/terms-score).
`,
  },

  // ---------------------------------------------------------------- TERMS ---
  {
    path: '/terms-score',
    navLabel: 'Terms',
    title: 'Terms of sale score: Peptriva 71 / 100 | Peptriva Ratings',
    description:
      'Peptriva scores 71 out of 100 on terms: a strong Out-of-Spec Guarantee, a no-returns policy of any kind, four claim windows, and a Cayman arbitration forum.',
    h1: 'Terms of sale: 71 out of 100',
    kicker: 'CATEGORY 4 OF 4 / WEIGHT 20',
    standfirst:
      'Strong exactly where a certificate could be wrong, and hard everywhere else. The Out-of-Spec Guarantee scores 27 of 30. The returns policy scores 8 of 20. Both numbers are accurate.',
    body: `
## The lead

Terms of sale scores **71 out of 100**, weight 20, contributing 14.20 points to the composite. Its strongest and weakest sub-criteria describe the same purchase: 27 of 30 on the Out-of-Spec Guarantee, 8 of 20 on returns. That split is the finding: Peptriva's terms are unusually strong exactly where a certificate could be wrong, and unusually hard everywhere else[^3].

A rubric that averaged those two into a comfortable middle would hide the thing a buyer most needs to know. If the material fails its own published specification, Peptriva replaces it and refunds it without a claim form and without a return. If the buyer simply changes their mind, there is no remedy of any kind.

:::scores {"rows":[{"name":"Out-of-Spec Guarantee","score":27,"of":30,"note":"Replacement from the next conforming batch plus refund of the purchase price, no claim form, no product return, and the buyer may substantiate the failure with their own third-party laboratory report. Three points withheld: it runs on the same 30-day window as every other claim."},{"name":"Returns policy","score":8,"of":20,"note":"No returns of any kind, opened or unopened. Eight points for stating it plainly in the published terms rather than burying it. Twelve withheld because a buyer who changes their mind has no remedy at all."},{"name":"Claim handling and response times","score":18,"of":20,"note":"Four named claim windows, 30 days from delivery, claims answered within 5 business days, approved refunds to the original payment method within 7 to 10 business days. Two points withheld for the reship being subject to availability."},{"name":"Shipping terms","score":12,"of":15,"note":"Free on every order with no cart minimum, FedEx 2-Day with tracking, a stated cut-off and processing window. Three points withheld: United States only, and no cold-chain claim on the parcel."},{"name":"Dispute forum and governing law","score":6,"of":15,"note":"Cayman Islands law under AAA arbitration rules, disclosed clearly. This criterion scores the term as a buyer experiences it, not the clarity of its disclosure, and a Cayman arbitration forum is a hard term for a United States purchaser."}]}
:::

## What is the Out-of-Spec Guarantee?

If a shipped batch fails any published certificate specification, Peptriva replaces the affected units from the next conforming batch and refunds the purchase price. There is no claim form and no product return. A buyer may substantiate the failure with their own third-party laboratory report[^3].

Three features make it score 27 out of 30. The remedy is both replacement and refund rather than a choice between them. The material does not have to come back, which matters for a company that has just told you it cannot resell it anyway. And the buyer's own laboratory report is accepted as substantiation, which means the seller has agreed in advance that its own certificate can be contradicted by a document it did not commission. That last clause is what a specification guarantee is worth: a promise that only the promising party can adjudicate is not a promise.

The three withheld points are for the window. The Out-of-Spec Guarantee is one of four claim categories and runs on the same clock as the others: 30 days from delivery, or from the carrier-marked delivery date[^3]. A specification failure is exactly the kind of defect a researcher may not discover inside thirty days.

## Does Peptriva accept returns?

No. The published terms state no returns of any kind, opened or unopened[^3]. That is scored at 8 out of 20.

The eight points are not sympathy. They are awarded for the term being stated plainly in the published terms rather than buried, which is a scoreable property: a buyer can find out before paying, in one sentence, with no interpretation required. The twelve withheld points are the plain cost of the policy. A purchaser who orders the wrong thing, or orders more than they need, or decides after delivery that they would rather not have it, has no remedy at Peptriva at all. The rubric scores that as most of a category failure, because that is what it is.

## What claims can be made, and how fast?

Four claim windows are published[^3]:

- Damaged shipment
- Incorrect or missing items
- Lost in transit, or delivered and not received
- Out-of-specification batch

All four run for 30 days from delivery, or from the carrier-marked delivery date. Claims are answered within 5 business days. Approved refunds are issued to the original payment method within 7 to 10 business days of approval. One free reship is available per incident, subject to availability[^3].

Eighteen of twenty points. The named windows, the stated response time, and the stated refund turnaround are all specific enough to be held against the company later, which is the test. The two withheld points are for "subject to availability", which is a real qualifier rather than boilerplate: thirteen of forty listed products are in stock, so availability is not a formality[^5].

## What are the shipping terms?

Shipping is free on every order and there is no cart minimum[^4]. The carrier is FedEx 2-Day with tracking. Orders placed before 5:00 p.m. ET on a business day ship the same business day, and standard processing is 1 to 2 business days from payment clearance and researcher attestation[^4].

Destinations are the United States only, including the District of Columbia. There is no international shipping. Lyophilized material is stable at ambient temperature in transit and ships in standard parcel packaging: Peptriva does not claim cold-chain shipping, and the cold-chain condition applies to the distribution facility where the independent re-test happens, not to the parcel[^4]. Twelve of fifteen points, with three withheld for the geographic limit and the absence of a cold-chain parcel claim.

## Who can buy, and under what conditions?

Buyers must be 21 or over and must attest that they are a qualified researcher[^3]. Material is sold for in vitro research use only. It is not a drug, food, cosmetic, supplement, or device, is not approved by the FDA, and is not for human or veterinary use by any route[^3]. Those conditions are not scored as a positive or a negative in this rubric. They are the conditions under which the category exists, and a supplier that omitted them would be failing a different test than the one being applied here.

## Where does a dispute get heard?

Governing law is the Cayman Islands, under AAA arbitration rules, and the seller of record is Wayne Ventures SEZC, a Cayman Islands company trading as Peptriva[^3]. This is disclosed clearly, and clarity earns points in [the transparency category](/transparency-score), where the same fact takes full marks.

Here it scores 6 out of 15, because this criterion scores the term rather than its disclosure. For a purchaser in the United States buying goods shipped from California, a Cayman Islands governing law and an arbitration forum is a materially harder route to a remedy than a domestic small-claims court. Peptriva is not going to score itself well on a term that is good for Peptriva.

## What this category does not establish

- A written guarantee is a promise, not a track record. This record contains no adjudicated out-of-specification claim, because the certificates behind it come from a single testing round reported on 2 July 2026[^1].
- The claim response times are the published commitments. Nothing here measures performance against them.
- No returns of any kind means the four claim windows are the entire remedy set. There is no goodwill remedy documented outside them[^3].
- The domain was registered on 30 April 2026, so the terms have been in force for a short period.

Next: [the full rubric](/methodology), or [the composite](/).
`,
  },

  // ------------------------------------------------------------ METHODOLOGY ---
  {
    path: '/methodology',
    navLabel: 'Method',
    title: 'The rubric: how Peptriva scored 75.5 / 100 | Peptriva Ratings',
    description:
      'The full hundred-point rubric: twenty sub-criteria with maximum points, four category weights, the evidence pool, exclusions, and how to re-score it yourself.',
    h1: 'The rubric in full, and how to disagree with it',
    kicker: 'METHOD / TWENTY CRITERIA',
    standfirst:
      'Every criterion, its maximum, the score awarded, and the document it was scored against. Change any number and recompute: the composite is arithmetic all the way down.',
    body: `
## The lead

This page is the whole rubric. Four categories, twenty sub-criteria, one hundred points per category, four weights that sum to one hundred. Peptriva scores **75.5**. The purpose of publishing the criteria at this level of detail is that a first-party score is worthless as an assertion and useful as a structure: a reader who takes the same evidence and weights it differently gets a different number, and can say exactly where the difference came from.

## How the composite is computed

Category score times weight, summed, divided by 100. No rounding step, no adjustment.

- (84 x 35) + (78 x 25) + (62 x 20) + (71 x 20) = 2940 + 1950 + 1240 + 1420 = 7550
- 7550 divided by 100 = 75.5

| Category | Weight | Score | Contribution | Why it carries this weight |
| --- | --- | --- | --- | --- |
| Testing method | 35 | 84 | 29.40 | The only category where a buyer's money is directly at risk from a failure they cannot detect by inspection |
| Transparency | 25 | 78 | 19.50 | A certificate a reader cannot open does no work |
| Catalogue | 20 | 62 | 12.40 | Complete paperwork on an empty shelf buys nothing |
| Terms of sale | 20 | 71 | 14.20 | A hard remedy policy is a real cost even when the material is exactly as certified |

## The twenty criteria

### Testing method, weight 35, scored 84

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
| 2.1 | Per-lot certificate ledger, public and free to read | 25 | 25 | The ledger at peptriva.com/coa[^1] |
| 2.2 | Ledger completeness against the certificate count | 15 | 11 | Fourteen certificates, thirteen lots, twelve ledger rows[^1][^5] |
| 2.3 | Publication of the production facility certificate | 20 | 4 | Held on file, not published[^1] |
| 2.4 | Seller identity, forum, and fulfilment disclosure | 20 | 20 | Terms, contact page, shipping policy[^3][^7][^4] |
| 2.5 | Stated non-assertions and named limits | 20 | 18 | Accreditation scope, the fact that no sterility assay is run, and company age, all addressed in the open[^3] |

### Catalogue, weight 20, scored 62

| # | Criterion | Max | Score | Evidence |
| --- | --- | --- | --- | --- |
| 3.1 | Breadth of the listing | 20 | 15 | Forty products, nine mechanism categories[^5] |
| 3.2 | Depth of sellable stock | 30 | 9 | Thirteen of forty in stock[^5] |
| 3.3 | Certificate coverage of sellable stock | 25 | 25 | Thirteen of thirteen certified[^1] |
| 3.4 | Mechanism category spread | 15 | 8 | Nine categories published, per-product stock state[^5] |
| 3.5 | Consistency of the gate across the listing | 10 | 5 | One documented exemption for the lab solvent[^1] |

### Terms of sale, weight 20, scored 71

| # | Criterion | Max | Score | Evidence |
| --- | --- | --- | --- | --- |
| 4.1 | Out-of-Spec Guarantee | 30 | 27 | Replacement plus refund, no form, no return, buyer's own laboratory report accepted[^3] |
| 4.2 | Returns policy | 20 | 8 | No returns of any kind, opened or unopened, stated plainly[^3] |
| 4.3 | Claim handling and response times | 20 | 18 | Four windows, 30 days, 5 business days to answer, 7 to 10 to refund[^3] |
| 4.4 | Shipping terms | 15 | 12 | Free on every order, FedEx 2-Day, stated cut-off, United States only[^4] |
| 4.5 | Dispute forum and governing law | 15 | 6 | Cayman Islands law, AAA arbitration rules[^3] |

## What is the evidence pool?

Eight documents, all listed on [the references page](/references) with their URLs. In order of how much of the score they carry: the certificate ledger[^1], the terms and conditions[^3], the catalogue[^5], the shipping policy[^4], the laboratory's own site[^2], the contact page[^7], USP General Chapter <85>[^6], and 16 CFR Part 465[^8]. The gate in criterion 1.1 is scored against the order-system condition that releases a lot into sellable stock.

Nothing was scored against a claim that exists only in marketing copy. Where the storefront asserts something this record cannot substantiate from a document, the criterion scores zero for that assertion rather than taking the company's word for it.

## What is excluded from scoring, and why

- **Efficacy, mechanism, and any outcome.** Not scored, not scoreable, and not claimable. The material is sold for in vitro research use only[^3].
- **Laboratory accreditation.** No points awarded and none deducted. The laboratory is named and its certificates are published; its accreditation scope is not something Peptriva publishes, so this record does not assert it.
- **Price competitiveness.** The rubric scores whether prices are published, not their level. Cross-supplier price comparison where certificate practice differs produces a meaningless number.
- **Customer reviews.** Collected and published under the same disclosure, and deliberately kept out of the composite. A first-party score partly derived from first-party reviews is circular.
- **The restricted tier.** Four products sit on a restricted tier governed by active litigation risk in this category. Their certificates are real and public on the ledger and they are counted in the coverage criteria, and no page on this site is built around them and no purity figure for them is printed here.
- **Company scale.** No customer count, order count, or revenue figure appears anywhere in the rubric.

## How to re-score it

The rubric is designed to be argued with at the criterion level. Three worked examples of how a reasonable reader moves the number:

- **You think a code-enforced gate is worth more than a testing archive.** Raise criterion 1.4 from 6 to 12. Testing becomes 90, composite becomes 77.6.
- **You think an out-of-stock listing is a failure and not a disclosure.** Cut criterion 3.1 from 15 to 8. Catalogue becomes 55, composite becomes 74.1.
- **You think no returns of any kind should be near-fatal.** Cut criterion 4.2 from 8 to 2. Terms become 65, composite becomes 74.3.

None of those revisions is unreasonable and none of them changes the shape of the finding, which is that the procedure is ahead of the record. If a revision does change the shape, that is worth telling us: [the contact page](/contact) is for disputes about the score, and a challenge with a criterion number attached is one that can actually be answered.

## What this rubric does not establish

- A score derived from published documents measures what a company publishes and commits to. It does not measure what happens when a commitment is tested, and no adjudicated claim exists in this record.
- The independent certificates come from a single submission. Every-lot testing is a rule in the order system, not yet a long record of rounds[^1].
- Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification. This rubric is not a substitute for one of those listings.
- The domain was registered on 30 April 2026, and longevity is evidence this record cannot offer.
`,
  },

  // ------------------------------------------------------------------ FAQ ---
  {
    path: '/faq',
    navLabel: 'Questions',
    title: 'Peptriva rating questions answered | Peptriva Ratings',
    description:
      'Twenty-four questions about the Peptriva score of 75.5 out of 100: the rubric, the laboratory, the certificates, stock depth, returns, and who publishes this.',
    h1: 'Questions about the score',
    kicker: 'ANSWERS / TWENTY-FOUR',
    standfirst:
      'Every question a reader has asked about the rubric, the evidence behind it, and the fact that Peptriva scored itself, answered in one place with citations.',
    body: `
## The lead

Peptriva scores 75.5 out of 100 on a rubric Peptriva wrote and published. The questions below cover how that number was reached, what it rests on, and where it is weakest. Each answer points at a document rather than at an opinion.

## The score and how it moves

:::faq {"items":[{"q":"What is Peptriva's rating?","a":"75.5 out of 100, weighted across four categories: testing method 84 at weight 35, transparency 78 at weight 25, catalogue 62 at weight 20, and terms of sale 71 at weight 20. The arithmetic is (84x35)+(78x25)+(62x20)+(71x20) = 7550, divided by 100."},{"q":"What would raise the score the most?","a":"Publishing the production certificates. That single change would take transparency from 78 to a maximum of 94 and the composite from 75.5 to 79.5. Everything else that would move the number meaningfully requires time rather than a decision."},{"q":"Why did testing lose fourteen points?","a":"The independent certificates come from one submission: samples received 30 June 2026, reported 2 July 2026. A rule enforced in code and a multi-year archive are different kinds of evidence, and criterion 1.4 scores the rule at 6 of 20 until there is a series behind it.[^1]"},{"q":"Can the score be challenged?","a":"Yes, and a challenge with a criterion number attached is the useful kind. The methodology page lists all twenty criteria with their maximums, and the contact page takes disputes about the score."}]}
:::

## Who publishes this, and who sells the material

:::faq {"items":[{"q":"Who scored Peptriva?","a":"Peptriva. This site is published by the company it scores. The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, prohibits running a review site that misrepresents itself as impartial about one's own products, so the relationship is stated in the header, the footer, and on every page carrying a number.[^8]"},{"q":"Why should anyone read a self-scored rating?","a":"Because the criteria are published and the score is falsifiable. Every point is attached to a document a reader can open, and the rubric deducts points in all four categories, including 14 of 20 on testing history and 21 of 30 on stock depth. A reader who disagrees can change a criterion and recompute."},{"q":"Who is the seller of record?","a":"Wayne Ventures SEZC, a Cayman Islands company trading as Peptriva, with a registered office at 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103. Orders ship from 14516 Garfield Ave, Paramount, California 90723, United States. Governing law is Cayman Islands under AAA arbitration rules.[^3][^7]"}]}
:::

## Testing, the laboratory, and the certificates

:::faq {"items":[{"q":"What lab tests Peptriva products?","a":"Freedom Diagnostics, an independent third-party laboratory in Franklin, Tennessee, United States. It is the laboratory of record on every published Peptriva certificate, the client of record is Peptriva Research, and the signatory is the Principal Chemist.[^2]"},{"q":"How many lots have independent certificates?","a":"Fourteen certificates on file covering thirteen lots, which is every lot currently in sellable stock. The ledger presents twelve rows; the lab solvent lot carries two accession numbers, which accounts for part of the difference.[^1]"},{"q":"What does the testing panel measure?","a":"Five assays: identity by LC-MS, purity by HPLC-UV area percent, net content as measured mass in the vial, endotoxin by LAL under USP General Chapter <85> run in duplicate against a specification of 0.05 EU/mL or lower, and appearance by visual inspection.[^1][^6]"},{"q":"What is the two-certificate gate?","a":"A lot cannot enter sellable stock until both a production facility certificate and an independent third-party certificate are on file. The rule is enforced as a condition in the order system rather than stated only in policy copy, which is why it scores 25 of 25 in the rubric.[^1]"},{"q":"Is any product exempt from the gate?","a":"One. For the lab solvent, the independent certificate alone clears the lot, because the production facility does not issue a certificate for an off-the-shelf USP solvent. The exemption is documented, and it still costs five points under the catalogue consistency criterion.[^1]"},{"q":"What purity do the published certificates report?","a":"Across the eight publishable lots, 99.58 to 99.90 percent by HPLC-UV area percent. Per-lot figures, accession numbers, and measured net content are on the testing score page and on the ledger.[^1]"},{"q":"Why is the production facility certificate not published?","a":"It is held on file and is not published, and the manufacturing partner is not named. The rubric does not accept the reason as a defence: criterion 2.3 scores 4 of 20 because a reader can inspect only one of the two certificates the gate depends on.[^1]"}]}
:::

## The catalogue and what is in stock

:::faq {"items":[{"q":"How many products does Peptriva sell?","a":"Forty are listed and thirteen are in stock, across nine published mechanism categories, with prices from $19.99 to $129.99. That is 32.5 percent of the listing available, and it is why catalogue scores 62.[^5]"},{"q":"Does every in-stock product have a certificate?","a":"Yes, thirteen of thirteen. There is no sellable line without an independent certificate, because the order system will not release a lot into sellable stock without one. That criterion takes full marks, 25 of 25.[^1]"}]}
:::

## Terms, shipping, and claims

:::faq {"items":[{"q":"Does Peptriva accept returns?","a":"No returns of any kind, opened or unopened. The rubric scores this at 8 of 20: eight points for stating it plainly in the published terms rather than burying it, twelve withheld because a buyer who changes their mind has no remedy.[^3]"},{"q":"What is the Out-of-Spec Guarantee?","a":"If a shipped batch fails any published certificate specification, Peptriva replaces the affected units from the next conforming batch and refunds the purchase price. There is no claim form and no product return, and a buyer may substantiate the failure with their own third-party laboratory report. It scores 27 of 30.[^3]"},{"q":"How long is the claim window?","a":"30 days from delivery, or from the carrier-marked delivery date, across all four claim categories: damaged shipment, incorrect or missing items, lost in transit, and out-of-specification batch. Claims are answered within 5 business days.[^3]"},{"q":"How fast are refunds issued?","a":"Approved refunds go to the original payment method within 7 to 10 business days of approval. One free reship is available per incident, subject to availability.[^3]"},{"q":"How does Peptriva ship?","a":"FedEx 2-Day with tracking, free on every order with no cart minimum. Orders placed before 5:00 p.m. ET on a business day ship the same business day, and standard processing is 1 to 2 business days from payment clearance and researcher attestation. United States only, including the District of Columbia.[^4]"}]}
:::

## Gaps this record names out loud

:::faq {"items":[{"q":"Is Peptriva's laboratory accredited?","a":"This record does not assert accreditation. The laboratory is named, located, linked, and identified on every certificate with an accession number, and its accreditation scope is not something Peptriva publishes. The rubric awards no points for accreditation and deducts none.[^2]"},{"q":"Are Peptriva products sterile?","a":"No. The panel covers identity, purity, net content, endotoxin, and appearance, it does not include a sterility assay, and the published terms state the material is not sterile. Products are sold for in vitro research use only and are not for human or veterinary use by any route.[^3]"},{"q":"Why is Peptriva not listed on independent vendor-rating sites?","a":"It is not, and that is a real absence rather than an oversight. Those listings grade suppliers on certificate cadence and laboratory verification and are earned over time. The domain was registered on 30 April 2026."}]}
:::

## What these answers do not establish

Every answer above is drawn from a published document or from the order system that enforces the gate. None of them measures performance: no adjudicated out-of-specification claim exists in this record, the certificates behind it come from a single testing round reported on 2 July 2026, and the company has been trading since a domain registration on 30 April 2026[^1].
`,
  },

  // ---------------------------------------------------------------- ABOUT ---
  {
    path: '/about',
    navLabel: 'About',
    title: 'About Peptriva Ratings and who publishes it | Peptriva Ratings',
    description:
      'Peptriva Ratings is published by Peptriva about Peptriva. What a self-scored rubric can be worth, how the disclosure works, and what it deliberately is not.',
    h1: 'Peptriva publishes this rating of Peptriva',
    kicker: 'DISCLOSURE / PUBLISHER',
    standfirst:
      'The company wrote the rubric, applied it to itself, and printed the criteria so the result can be re-derived or overturned. Here is why that is worth publishing anyway.',
    body: `
## The lead

This site is published by Peptriva, the company it scores, and the score is 75.5 out of 100. That is stated in the header of every page, in the footer of every page, and in the first paragraph of every page that carries a number. Nothing here is an outside assessment of Peptriva, nothing here was written by a third party, and no reader should treat the composite as an impartial verdict.

The Federal Trade Commission's Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, effective 21 October 2024, makes it unlawful to operate a review website that misrepresents itself as providing impartial assessments of one's own products or services[^8]. A first-party rubric that labels itself is a different object from an unlabelled review site, and the labelling is the condition of publishing at all.

## Why publish a rating of yourself?

Because the alternative that most suppliers in this category choose is worse. The standard practice is a marketing page that asserts high purity, gestures at testing, and publishes nothing a reader can check. A published rubric with numbered criteria has a property that page does not: it can be wrong in public.

Three things follow from that.

- **The deductions are the content.** Testing history scores 6 out of 20. Stock depth scores 9 out of 30. Returns score 8 out of 20. The dispute forum scores 6 out of 15. A marketing page would contain none of those numbers, and a reader can tell the difference.
- **The score is reproducible.** Every criterion cites the document it was scored against, and the composite is category score times weight, summed. A reader can recompute it, and [the methodology page](/methodology) shows three worked examples of a reasonable person arriving at a different number.
- **The claim is bounded.** The rubric scores what Peptriva publishes and commits to. It does not score what a compound does, it does not score laboratory accreditation, and it does not score price competitiveness. Those exclusions are printed rather than implied.

## What this site is not

It is not an outside review, and it does not present itself as one. It is not a substitute for the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification: Peptriva does not appear on those, which is a real absence and is named as one in every "what this does not establish" section on this site.

It is not a scoring of efficacy. Peptriva material is sold for in vitro research use only. It is not a drug, food, cosmetic, supplement, or device, it is not approved by the FDA, and it is not for human or veterinary use by any route[^3]. Buyers must be 21 or over and must attest that they are qualified researchers[^3].

It is also not a place where the company's own customer reviews are folded into the score. Reviews are published under the same disclosure and kept out of the composite, because a first-party score built partly on first-party testimony is circular.

:::stats {"items":[["PUBLISHER","Peptriva"],["SUBJECT","Peptriva"],["COMPOSITE","75.5 / 100"],["CATEGORIES SCORED DOWN","4 of 4"],["EVIDENCE DOCUMENTS","8"]]}
:::

## Who is Peptriva?

A United States research-peptide supplier selling to attested qualified researchers for in vitro research use only[^5]. The seller of record is Wayne Ventures SEZC, a Cayman Islands company trading as Peptriva, with a registered office at 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103[^3]. Orders ship from 14516 Garfield Ave, Paramount, California 90723, United States, and support is reachable at support@peptriva.com and 1-656-269-7377, Monday to Friday, 9am to 5pm CT[^7]. The domain was registered on 30 April 2026.

Testing is performed twice. The production facility tests and releases the batch, and that certificate is held on file and not published. On arrival at the United States distribution facility a sample goes to Freedom Diagnostics, an independent third-party laboratory in Franklin, Tennessee, for a full re-test, and that certificate is published on the ledger[^1][^2].

## How the disclosure works in practice

Disclosure on this network is structural rather than a footnote. The relationship appears in four places on every page: the site eyebrow above the masthead, a statement in the reading column under the deck, the body of any section that reports a score, and the footer. None of those is a link the reader has to follow, and none of them is phrased as an apology. The intended reading is: this is the company, this is the paperwork, check it.

What that buys is a narrower and more defensible claim. This site does not ask a reader to accept that Peptriva is good. It asks a reader to accept that thirteen of thirteen sellable lots have an independent certificate, that the certificates were reported on 2 July 2026 by a named laboratory in Franklin, Tennessee, and that the terms say what this site says they say[^1][^2][^3]. Each of those is checkable in under five minutes by someone who does not trust the publisher at all, which is the only kind of claim a first-party publication should be making.

Where the rubric is weakest is exactly where checkability runs out. Criterion 2.3 scores the production facility certificate at 4 out of 20 because a reader cannot open it[^1]. Criterion 3.4 scores mechanism category spread at 8 out of 15 because this record cannot verify the distribution from published data[^5]. In both cases the rubric declines to award points for something Peptriva knows and the reader cannot confirm. That rule is what stops a self-scored rubric from drifting into an assertion.

## How reviews are handled on this network

Customer reviews are collected and published with the same disclosure that governs this rubric, and nothing on this site states a star average or a review count in prose. Where reviews exist they appear below. Where none has been published, this section stands on its own.

:::ratingSummary {}
:::

:::reviews {"limit":6}
:::

## What this page does not establish

- A disclosed first-party rating is honest about its authorship. It is not thereby impartial, and no amount of disclosure makes it so.
- The rubric measures published commitments. No adjudicated out-of-specification claim exists in this record.
- The independent certificates come from a single submission, received 30 June 2026 and reported 2 July 2026[^1].
- Peptriva does not appear on independent vendor-rating listings, and this site does not fill that gap.
- The laboratory's accreditation scope is not something Peptriva publishes, so this record does not assert it.
`,
  },

  // ----------------------------------------------------------- REFERENCES ---
  {
    path: '/references',
    navLabel: 'References',
    title: 'References behind the Peptriva score | Peptriva Ratings',
    description:
      'The eight documents the Peptriva rubric was scored against: the certificate ledger, the laboratory, the terms, the shipping policy, the catalogue, and two standards.',
    h1: 'What the score was scored against',
    kicker: 'EVIDENCE POOL / EIGHT SOURCES',
    standfirst:
      'Every citation marker on this site resolves to one of the eight entries below. Each is a document a reader can open without contacting Peptriva.',
    body: `
## The lead

The rubric scores published documents, so the reference list is the rubric's evidence pool rather than a bibliography. Eight sources carry all one hundred points. Five are Peptriva's own published pages, one is the independent laboratory, and two are outside standards: United States Pharmacopeia General Chapter <85>, which the endotoxin assay is run against, and 16 CFR Part 465, which governs how a company may publish a review site about itself.

Two of the eight carry most of the score. The certificate ledger[^1] is the evidence behind criteria 1.1, 1.3, 2.1, 2.2, and 3.3, which is 110 points of maximum across three categories. The terms and conditions[^3] carry four of the five terms criteria and part of transparency. If either document changed materially, the composite of 75.5 would move.

## What is not in the pool

No number on this site comes from marketing copy, from an internal estimate, or from a figure that could not be traced to one of the eight entries below. Where the storefront asserts something with no substantiating document, this record scores it as unsubstantiated rather than accepting it. The clearest case is laboratory accreditation: the laboratory is named and its certificates are published, its accreditation scope is not something Peptriva publishes, and so the rubric awards no points for one and deducts none for its absence.

The production facility certificate is a document that exists, is required by the sellable-stock gate, and is not in this pool because it is not published[^1]. That absence is scored directly at criterion 2.3, which takes 4 out of 20.

## The eight sources

:::references {}
:::

## How to check a certificate against this site

Any purity or net-content figure printed on this network can be traced back in three steps, and none of them requires contacting Peptriva.

1. Take a lot identifier and its accession number from a table on [the testing score page](/testing-score), for example lot BC10-260504 at accession 2606300400, or lot CU50-260503 at accession 2606300412.
2. Open the certificate ledger and find the matching row, which carries purity, measured net content, the endotoxin result, the accession number, and the test date[^1].
3. Confirm the laboratory named on the certificate against the laboratory's own site: Freedom Diagnostics, Franklin, Tennessee, United States[^2]. The client of record on every certificate is Peptriva Research and the signatory is the Principal Chemist.

Where a figure on this site and a figure on the ledger disagree, the ledger is correct and this site is wrong, and [the contact page](/contact) is where to say so. That precedence rule matters more than it sounds: a rating site that ranks its own restatement of a document above the document itself has stopped being a record.

## Which criteria depend on which source

| Source | Criteria it carries | Maximum points |
| --- | --- | --- |
| Certificate ledger[^1] | 1.1, 1.3, 1.4, 2.1, 2.2, 2.3, 3.3, 3.5 | 160 |
| Terms and conditions[^3] | 2.4, 2.5, 4.1, 4.2, 4.3, 4.5 | 125 |
| Catalogue[^5] | 3.1, 3.2, 3.4 | 65 |
| Shipping policy[^4] | 4.4 | 15 |
| Laboratory site[^2] | 1.5 | 10 |
| USP General Chapter <85>[^6] | 1.2, in part | 25 |
| Contact page[^7] | 2.4, in part | shared |
| 16 CFR Part 465[^8] | Governs publication, not scored | none |

Maximums in the table are per-category maximums before weighting, and some criteria draw on more than one source, so the column does not sum to 400.

## What the pool does not establish

- Published documents establish commitments, not performance. Nothing in the pool measures whether a claim window was met in practice.
- The certificate ledger reflects a single testing round: samples received 30 June 2026, reported 2 July 2026[^1].
- The pool contains no third-party assessment of Peptriva, because none exists to cite. Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification.
- The pool contains no customer or order figures, and none is used anywhere in the rubric.
`,
  },

  // -------------------------------------------------------------- CONTACT ---
  {
    path: '/contact',
    navLabel: 'Contact',
    title: 'Dispute the Peptriva score | Peptriva Ratings',
    description:
      'How to challenge a criterion in the Peptriva rubric, what to include, and where to send it. Support address, telephone number, hours, and the distribution address.',
    h1: 'Disputing the score',
    kicker: 'CONTACT / CHALLENGES',
    standfirst:
      'A rubric published by the company it scores is only useful if it can be argued with. A challenge that names a criterion number is one that can be answered.',
    body: `
## The lead

Peptriva scored itself 75.5 out of 100 against a rubric it wrote, so the most valuable message this site can receive is one that says a criterion is scored wrong. All twenty criteria are numbered on [the methodology page](/methodology), each with its maximum, its awarded score, and the document it was scored against. A dispute that cites a number can be checked, answered, and if correct, applied.

## What makes a challenge answerable

- **A criterion number.** "Criterion 3.2 is scored too generously" can be adjudicated. "The catalogue is thin" is already in the rubric at 9 out of 30.
- **A proposed score and a reason.** The rubric moves in whole points against a stated maximum. A proposal of 4 instead of 8 on criterion 4.2 is a specific claim about how much a no-returns policy should cost.
- **A document, where one exists.** The evidence pool is eight published sources[^1][^2][^3][^4][^5][^6][^7][^8]. If a source says something different from what this site reports, quoting it settles the matter immediately.
- **What it does to the composite.** Category score times weight, summed. A challenge that recomputes the composite has done the work that makes it easy to act on.

## Where to send it

| | |
| --- | --- |
| Support | support@peptriva.com |
| General enquiries | hello@peptriva.com |
| Telephone | 1-656-269-7377 |
| Hours | Monday to Friday, 9am to 5pm CT |
| Ships from | 14516 Garfield Ave, Paramount, California 90723, United States |
| Seller of record | Wayne Ventures SEZC, trading as Peptriva |
| Registered office | 5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103, Cayman Islands |

Contact details are published on the Peptriva contact page[^7]. Governing law for the conditions of purchase is the Cayman Islands under AAA arbitration rules[^3], and that term is itself scored, at 6 out of 15, on [the terms page](/terms-score).

## What this page is not for

- **Order problems.** Claims about a damaged shipment, incorrect or missing items, a shipment lost in transit or delivered and not received, or an out-of-specification batch run on their own process: 30 days from delivery or from the carrier-marked delivery date, answered within 5 business days, with approved refunds issued to the original payment method within 7 to 10 business days[^3]. Those go to support, not to this rubric.
- **Returns.** There are no returns of any kind, opened or unopened[^3]. That policy is scored at 8 out of 20 and arguing the score will not change an order.
- **Questions about what a compound does.** Nothing on this site scores or describes an effect. Material is sold for in vitro research use only, is not a drug, food, cosmetic, supplement, or device, is not approved by the FDA, and is not for human or veterinary use by any route[^3].
- **Requests for the production certificate.** It is held on file and not published, and the rubric already deducts sixteen points for that at criterion 2.3[^1].

## Three challenges already anticipated

Some objections are strong enough that the rubric names them before anyone sends them.

- **"A code-enforced gate is worth more than six points of history."** Possibly. Criterion 1.4 scores the testing history at 6 out of 20, and the argument for raising it is that a rule enforced where an operator cannot bypass it is a structural guarantee, not a promise. The argument against is that a rule has never been tested against an inconvenient result here, because the certificates come from one submission reported on 2 July 2026[^1]. Raising that criterion to 12 moves the composite from 75.5 to 77.6.
- **"Scoring your own dispute forum at 6 out of 15 is theatre."** The seller of record is a Cayman Islands company and governing law is Cayman under AAA arbitration rules, disclosed plainly[^3]. The counter-argument is that the rubric could simply have scored disclosure rather than the term, taken full marks, and moved on. It scores the term because a buyer experiences the term, not the disclosure.
- **"A self-published rubric cannot be evidence at all."** The strongest objection on this list, and the rubric does not defeat it. What it offers instead is that every point cites a document a reader can open without contacting Peptriva, and that the categories scored down are the ones a marketing page would have omitted. That is a weaker claim than independence, and it is the claim this site actually makes.

## A standing note on who is answering

Messages about the score reach the company that wrote the score. That is a limitation of a first-party rubric and no reply from this address cures it. What can be offered is the working: the criteria, the maximums, the citations, and an arithmetic composite that anyone can recompute from the published numbers. Where a challenge is correct, the change will appear in the criterion table on [the methodology page](/methodology) and the composite will move with it.

## What this record does not establish

- No adjudicated out-of-specification claim exists in this record. The certificates behind it come from one submission, reported 2 July 2026[^1].
- Response times on this page are published commitments, not measured performance[^3].
- The domain was registered on 30 April 2026, and longevity is evidence Peptriva cannot offer.
- Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification.
`,
  },
];
