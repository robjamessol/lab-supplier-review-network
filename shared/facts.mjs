// THE EVIDENCE BASE.
//
// Every number that appears on any of the four sites comes from here, and every
// entry carries the repo path or URL it was read from. If a fact is not in this
// file, it does not go on a page. Nothing here is estimated, rounded for effect,
// or inferred.
//
// Verified against /Users/rob/peptriva on 2026-09-04.

export const SUBJECT = {
  name: 'Peptriva',
  url: 'https://peptriva.com',
  coaLedger: 'https://peptriva.com/coa',
  description:
    'A United States research-peptide supplier selling to attested qualified researchers for in vitro research use only.',
  entity: 'Wayne Ventures SEZC',
  entityNote: 'a Cayman Islands company trading as Peptriva, and the seller of record for orders placed through the site',
  registeredOffice:
    '5th Floor, The Piccadilly Centre, 28 Elgin Avenue, George Town, P.O. Box 2575, Grand Cayman KY1-1103, Cayman Islands',
  shipsFrom: '14516 Garfield Ave, Paramount, California 90723, United States',
  phone: '1-656-269-7377',
  emailGeneral: 'hello@peptriva.com',
  emailSupport: 'support@peptriva.com',
  hours: 'Monday to Friday, 9am to 5pm CT',
  domainRegistered: '2026-04-30',
  governingLaw: 'Cayman Islands, AAA arbitration rules',
};

export const LAB = {
  name: 'Freedom Diagnostics',
  location: 'Franklin, Tennessee, United States',
  site: 'https://freedomdiagnosticstesting.com/',
  clientOfRecord: 'Peptriva Research',
  signatory: 'Principal Chemist',
  received: '2026-06-30',
  reported: '2026-07-02',
  // Deliberately NOT claimed: accreditation. The storefront asserts ISO/IEC 17025
  // and ILAC MRA in several places, but no certificate, scope number, or
  // accrediting body exists anywhere in the repo. Until one does, these sites say
  // "independent third-party laboratory" and name it, and claim nothing further.
  accreditationClaimable: false,
};

export const PANEL = [
  { assay: 'Identity', method: 'LC-MS', note: 'Confirms the material is the compound named on the label.' },
  { assay: 'Purity', method: 'HPLC-UV, area percent', note: 'The headline purity figure on each certificate.' },
  {
    assay: 'Net content',
    method: 'Measured mass in the vial',
    note: 'Weighs what is actually in the vial against what the label says. Most vendor certificates report purity but never quantity.',
  },
  {
    assay: 'Endotoxin',
    method: 'LAL, USP <85>, run in duplicate',
    note: 'Specification is 0.05 EU/mL or lower.',
  },
  { assay: 'Appearance', method: 'Visual', note: 'Recorded on every certificate.' },
];

// The gate that is the actual differentiator: enforced in code, not in policy copy.
// apps/backend/src/lib/sync-po-to-medusa.ts:154-161, :168-190, :192-207
export const TWO_CERT_GATE = {
  rule: 'A lot cannot enter sellable stock until both certificates are on file.',
  expression: 'lotClearedToSell = lotHasManufacturerCoa() AND lotHasIndependentCoa()',
  source: 'apps/backend/src/lib/sync-po-to-medusa.ts',
  exemption:
    'One SKU is exempt: the lab solvent, where the independent certificate alone clears the lot, because the production facility does not issue a certificate for an off-the-shelf USP solvent.',
  firstTest:
    'The production facility tests and releases the batch. That certificate is held on file and is not published.',
  secondTest:
    'On arrival at the United States distribution facility, a sample goes to an independent third-party laboratory for a full re-test. That certificate is the one published on the ledger.',
};

// Per-lot independent results. RESTRICTED entries are real and on the public
// ledger, but are held off these sites: they sit on the restricted tier where the
// Lilly review governs, and a review property built around them becomes a
// GLP-analogue marketing surface. See RESTRICTED-SKUS.md.
export const LOTS = [
  { product: 'KPV', purity: 99.9, lot: 'KPV10-260504', accession: '2606300404', net: '11.30 mg', restricted: false },
  { product: 'CJC-1295 / Ipamorelin', purity: 99.86, lot: 'CP10-260428', accession: '2606300406', net: 'Ipamorelin 5.14 mg, CJC-1295 5.26 mg', restricted: false },
  { product: 'GHK-Cu', purity: 99.85, lot: 'CU50-260503', accession: '2606300412', net: '57.46 mg', restricted: false, appearance: 'Blue lyophilized powder' },
  { product: 'TB-500 (Thymosin Beta-4)', purity: 99.8, lot: 'TB500(B4)-260428', accession: '2606300398', net: '13.28 mg', restricted: false },
  { product: 'MOTS-c', purity: 99.73, lot: 'MS10-260508', accession: '2606300410', net: '11.16 mg', restricted: false },
  { product: 'NAD+', purity: 99.61, lot: 'NJ500-260503', accession: '2606300392', net: '527.61 mg', restricted: false },
  { product: 'GLOW Blend', purity: 99.6, lot: 'GLOW70-260504', accession: '2606300414', net: 'GHK-Cu 60.42 mg, BPC-157 11.12 mg, Thymosin Beta-4 11.83 mg', restricted: false },
  { product: 'BPC-157', purity: 99.58, lot: 'BC10-260504', accession: '2606300400', net: '11.24 mg', restricted: false },
  { product: 'Tesamorelin', purity: 99.86, lot: 'TSM5-260527', accession: '2606300402', net: '5.57 mg', restricted: true },
  { product: 'Tirzepatide', purity: 99.91, lot: 'T10-260506', accession: '2606300394', net: '10.17 mg', restricted: true },
  { product: 'Retatrutide', purity: 99.77, lot: 'R10-260502', accession: '2606300408', net: '12.49 mg', restricted: true },
  { product: 'Semaglutide', purity: 99.69, lot: 'Dark Blue Cap', accession: '2606300396', net: '16.00 mg', restricted: true },
];

export const PUBLISHABLE_LOTS = LOTS.filter((l) => !l.restricted);

export const SOLVENT_LOT = {
  product: 'Lab solvent (10 mL)',
  lot: 'BA10-260000',
  accessions: ['2606300390', '2606300391'],
  tests: 'Microbial analysis by PCR, reported as no detectable microbial DNA, and endotoxin by LAL under USP <85>. Both pass. No purity assay applies to a solvent.',
  appearance: 'Clear liquid',
};

export const CATALOG = {
  listed: 40,
  inStock: 13,
  certifiedInStock: 13,
  categories: [
    'Cytoprotective',
    'GH Secretagogues',
    'Peptide Analogs',
    'Mitochondrial',
    'Copper Peptides',
    'Nootropic / Neuropeptide',
    'Melanocortin',
    'Senescence / Antioxidant',
    'Lab Consumables',
  ],
  priceLow: '$19.99',
  priceHigh: '$129.99',
  certificatesOnFile: 14,
  lotsCovered: 13,
  ledgerRows: 12,
};

export const FULFILMENT = {
  destinations: 'United States only, including the District of Columbia. No international shipping.',
  carrier: 'FedEx 2-Day with tracking',
  cutoff: 'Orders placed before 5:00 p.m. ET on a business day ship the same business day.',
  processing: 'Standard processing is 1 to 2 business days from payment clearance and researcher attestation.',
  shippingCost: 'Free on every order. There is no cart minimum.',
  packaging:
    'Lyophilized material is stable at ambient temperature in transit and ships in standard parcel packaging. Peptriva does not claim cold-chain shipping. The cold-chain claim applies to the distribution facility where the independent re-test happens, not to the parcel.',
};

export const TERMS = {
  returns:
    'No returns of any kind, opened or unopened. This is stated plainly in the published terms rather than buried.',
  claimWindows: [
    'Damaged shipment',
    'Incorrect or missing items',
    'Lost in transit, or delivered and not received',
    'Out-of-specification batch',
  ],
  claimWindowLength: '30 days from delivery, or from the carrier-marked delivery date',
  claimResponse: 'Claims answered within 5 business days. Approved refunds issued to the original payment method within 7 to 10 business days of approval.',
  outOfSpec:
    'If a shipped batch fails any published certificate specification, Peptriva replaces the affected units from the next conforming batch and refunds the purchase price. There is no claim form and no product return. A buyer may substantiate the failure with their own third-party laboratory report.',
  reship: 'One free reship per incident, subject to availability.',
  ageGate: 'Buyers must be 21 or over and must attest that they are a qualified researcher.',
  ruo: 'Sold for in vitro research use only. Not drugs, food, cosmetics, supplements, or devices. Not approved by the FDA. Not for human or veterinary use by any route.',
};

// What these sites cannot substantiate. Named here so the pages can say so out
// loud rather than quietly omitting it. This is the section that makes the rest
// of the record believable.
export const LIMITS = [
  {
    id: 'single-round',
    title: 'One independent testing round, not a testing history',
    text: 'The independent certificates on file come from a single submission: samples received on 30 June 2026 and reported on 2 July 2026. Every-lot testing is a rule enforced in the order system, not yet a long record of repeated rounds. A vendor with years of archived batches has something Peptriva does not have.',
  },
  {
    id: 'small-archive',
    title: 'A small archive',
    text: 'Fourteen certificates covering thirteen lots. Established competitors publish hundreds. The claim worth making is coverage rather than volume: every lot currently sellable has an independent certificate behind it.',
  },
  {
    id: 'no-third-party-listings',
    title: 'No independent vendor-rating listing yet',
    text: 'Peptriva does not appear on the peptide vendor-rating sites that grade suppliers on certificate cadence and laboratory verification. That is a real absence. Those listings are earned over time and Peptriva has not earned one yet.',
  },
  {
    id: 'young-company',
    title: 'A young company',
    text: 'The domain was registered on 30 April 2026. Longevity is evidence, and it is evidence Peptriva cannot offer.',
  },
  {
    id: 'no-accreditation-published',
    title: 'No accreditation certificate published',
    text: 'The independent laboratory is named and its certificates are published. Its accreditation scope is not something Peptriva publishes, so this record does not assert it.',
  },
  {
    id: 'not-sterile',
    title: 'Not sterile, and not tested for sterility',
    text: 'The panel covers identity, purity, net content, endotoxin, and appearance. It does not include a sterility assay, and the published terms state the material is not sterile.',
  },
];

export const REFERENCES = [
  {
    citation:
      'Peptriva certificate ledger. Independent third-party certificates by lot, with purity, net content, endotoxin result, accession number, and test date.',
    url: 'https://peptriva.com/coa',
  },
  {
    citation:
      'Freedom Diagnostics, the independent third-party laboratory of record on every published Peptriva certificate. Franklin, Tennessee, United States.',
    url: 'https://freedomdiagnosticstesting.com/',
  },
  {
    citation:
      'Peptriva terms and conditions. Seller of record, returns and claims policy, the Out-of-Spec Guarantee, shipping terms, and the research-use-only conditions of sale.',
    url: 'https://peptriva.com/legal-terms',
  },
  {
    citation: 'Peptriva shipping policy. Carrier, cut-off time, processing window, and packaging.',
    url: 'https://peptriva.com/shipping',
  },
  {
    citation: 'Peptriva product catalogue. Listed products, mechanism categories, stock state, and pricing.',
    url: 'https://peptriva.com/catalog',
  },
  {
    citation:
      'United States Pharmacopeia General Chapter <85>, Bacterial Endotoxins Test. The standard the endotoxin assay on each certificate is run against.',
    url: 'https://www.usp.org/',
  },
  {
    citation:
      'Peptriva contact page. Distribution address, telephone number, support addresses, and hours of business.',
    url: 'https://peptriva.com/contact',
  },
  {
    citation:
      'Federal Trade Commission, Rule on the Use of Consumer Reviews and Testimonials, 16 CFR Part 465, effective 21 October 2024. Governs review authenticity and company-controlled review websites.',
    url: 'https://www.ftc.gov/legal-library/browse/rules/rule-consumer-reviews-testimonials',
  },
];

export const refIndex = Object.fromEntries(REFERENCES.map((r, i) => [r.url, i + 1]));
