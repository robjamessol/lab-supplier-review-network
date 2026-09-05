// Shared site chrome: publisher identity, disclosure, and footer.
//
// These sites are an independent third-party review publication covering
// research chemical and laboratory suppliers. Peptriva is the first company on
// the roster, not the publisher. The FTC's Rule on the Use of Consumer Reviews
// and Testimonials (16 CFR Part 465, in force since October 2024) requires that
// relationship to be stated plainly: this publication is not affiliated with
// Peptriva or with other reviewed companies.

import { SUBJECT, REFERENCES } from './facts.mjs';

export const PUBLISHER = {
  name: 'Independent review publication',
  // Per-site configs override name + url with the Lab Supplier * publication identity.
  url: '',
  legalName: null,
  sameAs: [],
  relationshipNote:
    'Peptriva is a reviewed company on this publication\'s roster (company #1), not the publisher',
  disclosureShort:
    'Independent third-party review publication covering research chemical and laboratory suppliers. Not affiliated with Peptriva or other reviewed companies. Peptriva is company #1 on the roster.',
  // Rendered in the reading column, directly under the deck, on every page.
  disclosureAboveFold:
    '<strong>Independent third-party review publication.</strong> This site covers research chemical and laboratory suppliers and is not affiliated with Peptriva or other reviewed companies. Peptriva is company #1 on the roster: a subject under review, not the publisher.',
};

export const DISCLOSURE_LONG = `<strong>Who publishes this.</strong> This site is an independent third-party review publication covering research chemical and laboratory suppliers. It is not affiliated with Peptriva or with other companies on the roster. Peptriva is company #1: a reviewed subject, not the publisher. Where a claim rests only on a company's own say-so, the page says so. Subject-company pages linked in the footer are the company's own public pages, cited as sources, not pages of this publication.`;

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
    colophon: `© {year} Independent review publication covering research chemical and laboratory suppliers. Not affiliated with Peptriva or other reviewed companies. Research use only. Not for human or veterinary use.`,
  };
}

export const STANDARD_NAV_TAIL = [
  { label: 'Questions', href: '/faq' },
  { label: 'About', href: '/about' },
];

export const SHARED_REFERENCES = REFERENCES;
