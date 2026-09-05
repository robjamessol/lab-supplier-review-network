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
  relationshipNote: 'Peptriva is company #1 on the roster',
  disclosureShort:
    'Review publication covering research chemical and laboratory suppliers. Peptriva is company #1 on the roster.',
  // Above-fold disclosure retired: affiliation silence. Leave empty so render skips it.
  disclosureAboveFold: '',
};

export const DISCLOSURE_LONG = '';

export const DISCLOSURE_SHORT = PUBLISHER.disclosureShort;

export function footer({ blurb, extraColumn }) {
  const columns = [
    {
      title: 'The record',
      links: [
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
    colophon: `© {year} Review publication covering research chemical and laboratory suppliers. Peptriva is company #1 on the roster. Research use only. Not for human or veterinary use.`,
  };
}

export const STANDARD_NAV_TAIL = [
  { label: 'Questions', href: '/faq' },
  { label: 'About', href: '/about' },
];

export const SHARED_REFERENCES = REFERENCES;
