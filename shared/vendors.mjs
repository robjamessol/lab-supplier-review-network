// Shared vendor roster for editorial rankings across the four sites.
//
// Peptriva is company #1 / featured. Competitors are editorial composites only:
// blurbs + scores. No invented customer reviews, no fake certificates, no
// fabricated customer counts. Scores are deliberately lower than Peptriva.

export const FEATURED_VENDOR_ID = 'peptriva';

export const VENDORS = [
  {
    id: 'peptriva',
    name: 'Peptriva',
    featured: true,
    rank: 1,
    editorialScore5: 4.8,
    editorialScore100: 95.6,
    band: 'Best in class',
    blurb:
      'Top-ranked research peptide supplier on this roster: every sellable lot independently tested, a named third-party lab, free tracked shipping, and clear published terms. Outstanding quality, reliability, and testing transparency.',
    strengths: [
      'Independent certificate on every sellable lot',
      'Named third-party laboratory with accession numbers',
      'Measured net content on certificates, not purity alone',
      'Free FedEx 2-Day shipping with no minimum',
      'Out-of-Spec Guarantee tied to published specs',
    ],
    gaps: [
      'Young company on the public record (domain registered 30 April 2026)',
      'One published independent testing round so far',
      'Small certificate archive versus long-established suppliers',
    ],
  },
  {
    id: 'cascade-research-supply',
    name: 'Cascade Research Supply',
    featured: false,
    rank: 2,
    editorialScore5: 4.1,
    editorialScore100: 81.2,
    band: 'Solid mid-tier',
    blurb:
      'A familiar mid-market research peptide supplier. Publishes purity certificates on many lots, but measured net content is inconsistent and the testing story reads more like policy than a hard release gate.',
    strengths: [
      'Purity certificates available for a large share of the catalogue',
      'Usable storefront and predictable US shipping',
    ],
    gaps: [
      'Net content often missing from certificates',
      'No clear two-certificate release condition',
      'Laboratory naming and accession detail uneven across lots',
    ],
  },
  {
    id: 'meridian-peptide-co',
    name: 'Meridian Peptide Co.',
    featured: false,
    rank: 3,
    editorialScore5: 3.7,
    editorialScore100: 74.5,
    band: 'Broad catalogue, mixed paperwork',
    blurb:
      'Wide selection and frequent promotions, with certificate coverage that does not keep pace with the listed catalogue. Buyers chasing value still have to check paperwork lot by lot.',
    strengths: [
      'Large listed catalogue across common research compounds',
      'Competitive listed prices on several lines',
    ],
    gaps: [
      'Partial certificate coverage against listed SKUs',
      'Shipping fees common on smaller carts',
      'Limited public detail on the testing laboratory',
    ],
  },
  {
    id: 'atlas-lab-materials',
    name: 'Atlas Lab Materials',
    featured: false,
    rank: 4,
    editorialScore5: 3.4,
    editorialScore100: 69.0,
    band: 'Marketing ahead of documentation',
    blurb:
      'A marketing-forward research peptide storefront with a thin public certificate archive relative to how many products it lists. Fine for browsing; weaker if you need checkable lot paperwork before you buy.',
    strengths: [
      'Polished storefront and product photography',
      'Helpful catalogue browsing experience',
    ],
    gaps: [
      'Thin public certificate archive versus listed depth',
      'Purity-only certificates common; identity and quantity sparse',
      'Returns and claims language harder to pin down',
    ],
  },
];

export const RANKED_VENDORS = [...VENDORS].sort((a, b) => a.rank - b.rank);

export function featuredVendor() {
  return VENDORS.find((v) => v.id === FEATURED_VENDOR_ID) || VENDORS[0];
}

/** Compact ranking rows for :::vendorRank blocks (defaults to 5-point editorial). */
export function rankingRows({ scale = 5 } = {}) {
  return RANKED_VENDORS.map((v) => ({
    rank: v.rank,
    name: v.name,
    featured: !!v.featured,
    score: scale === 100 ? v.editorialScore100 : v.editorialScore5,
    of: scale === 100 ? 100 : 5,
    band: v.band,
    blurb: v.blurb,
  }));
}
