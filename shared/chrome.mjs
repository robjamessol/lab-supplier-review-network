// Shared site chrome: publisher identity and footer.
//
// These sites are a review publication covering research chemical and
// laboratory suppliers. Peptriva is company #1 on the roster.

import { SUBJECT, REFERENCES } from './facts.mjs';

export const PUBLISHER = {
  name: 'Independent review publication',
  // Per-site configs override name + url with the Lab Supplier * publication identity.
  url: '',
  legalName: null,
  sameAs: [],
  relationshipNote: 'Peptriva is featured company #1 on the roster',
  disclosureShort:
    'Review publication covering research peptide suppliers. Peptriva is featured company #1 on the roster.',
  // Above-fold disclosure retired: affiliation silence. Leave empty so render skips it.
  disclosureAboveFold: '',
};

export const DISCLOSURE_LONG = '';

export const DISCLOSURE_SHORT = PUBLISHER.disclosureShort;

/** The four Peptriva review properties. Used for footer and in-page sister links. */
export const NETWORK = [
  {
    id: 'peptriva-review',
    label: 'Peptriva Review',
    href: 'https://peptrivareview.com',
    note: 'Editorial issue, 4.8 verdict, featured #1',
  },
  {
    id: 'peptriva-reviews',
    label: 'Peptriva Reviews',
    href: 'https://peptrivareviews.com',
    note: 'Four-surface review',
  },
  {
    id: 'peptriva-customer-reviews',
    label: 'Peptriva Customer Reviews',
    href: 'https://peptrivacustomerreviews.com',
    note: 'Customer review dossier',
  },
  {
    id: 'peptriva-ratings',
    label: 'Peptriva Ratings',
    href: 'https://peptrivaratings.com',
    note: 'Hundred-point rubric, 95.6',
  },
];

export function footer({ blurb, extraColumn, siteId }) {
  const columns = [
    {
      title: 'The record',
      links: [
        { label: 'Peptriva shop', href: 'https://www.peptriva.com/' },
        { label: 'New customer offer (WELCOME25)', href: 'https://www.peptriva.com/?promo_code=WELCOME25' },
        { label: 'Subject certificate ledger (company page)', href: `${SUBJECT.url}/coa` },
        { label: 'Subject catalogue (company page)', href: `${SUBJECT.url}/catalog` },
        { label: 'Subject terms of sale (company page)', href: `${SUBJECT.url}/legal-terms` },
        { label: 'Subject shipping policy (company page)', href: `${SUBJECT.url}/shipping` },
      ],
    },
    {
      title: 'This site',
      links: [
        { label: 'About and method', href: '/about' },
        { label: 'References', href: '/references' },
        { label: 'Contact', href: '/contact' },
        { label: 'Questions', href: '/faq' },
      ],
    },
    {
      title: 'Related Peptriva reviews',
      links: NETWORK.filter((n) => n.id !== siteId).map((n) => ({ label: n.label, href: n.href })),
    },
    {
      title: 'Machine readable',
      links: [
        { label: 'llms.txt', href: '/llms.txt' },
        { label: 'llms-full.txt', href: '/llms-full.txt' },
        { label: 'Sitemap', href: '/sitemap.xml' },
      ],
    },
  ];
  if (extraColumn) columns.splice(1, 0, extraColumn);
  return {
    blurb,
    columns,
    disclosure: DISCLOSURE_LONG,
    colophon: `© {year} Review publication covering research peptide suppliers. Peptriva is featured company #1 on the roster. Research use only. Not for human or veterinary use.`,
  };
}

export const STANDARD_NAV_TAIL = [
  { label: 'Questions', href: '/faq' },
  { label: 'About', href: '/about' },
];

export const SHARED_REFERENCES = REFERENCES;
