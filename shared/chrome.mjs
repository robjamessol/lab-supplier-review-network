// Shared site chrome: publisher identity, disclosure, and footer.
//
// The disclosure is the load-bearing part. The network this is modelled on states
// on every About page that it is not affiliated with the company it reviews and
// takes no commission, while promoting that company's own discount codes. These
// sites are Peptriva's, so they say so, above the fold and in the footer of every
// page. The FTC's Rule on the Use of Consumer Reviews and Testimonials (16 CFR
// Part 465, in force since October 2024) makes it an offence to operate a review
// website that misrepresents itself as providing independent reviews of one's own
// products.

import { SUBJECT, REFERENCES } from './facts.mjs';

export const PUBLISHER = {
  name: 'Peptriva',
  url: SUBJECT.url,
  legalName: SUBJECT.entity,
  sameAs: [SUBJECT.url],
  relationshipNote: 'published by Peptriva about its own testing record',
  disclosureShort:
    'Published by Peptriva. This is a first-party record of our own testing, terms, and customer reviews. It is not an independent review of us, and it does not present itself as one.',
  // Rendered in the reading column, directly under the deck, on every page.
  disclosureAboveFold:
    '<strong>Peptriva publishes this site about itself.</strong> It is a first-party record, not an independent review, and no part of it was written by an outside party. Everything here that can be checked without trusting us is sourced so that you can check it.',
};

export const DISCLOSURE_LONG = `<strong>Who publishes this.</strong> This site is published by Peptriva, the company it examines. It is a first-party record: our certificates, our terms, our customer reviews, and a plain statement of what that evidence does and does not establish. It is not an independent review, it is not written by a third party, and nothing here should be read as an outside opinion of Peptriva. Where a claim rests only on our own say-so, the page says so. Independent assessments of Peptriva, when they exist, will be published by people who are not us.`;

export const DISCLOSURE_SHORT = PUBLISHER.disclosureShort;

export function footer({ blurb, extraColumn }) {
  const columns = [
    {
      title: 'The record',
      links: [
        { label: 'Certificate ledger', href: `${SUBJECT.url}/coa` },
        { label: 'Catalogue', href: `${SUBJECT.url}/catalog` },
        { label: 'Terms of sale', href: `${SUBJECT.url}/legal-terms` },
        { label: 'Shipping policy', href: `${SUBJECT.url}/shipping` },
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
    colophon: `© {year} ${SUBJECT.entity}, trading as Peptriva. Research use only. Not for human or veterinary use.`,
  };
}

export const STANDARD_NAV_TAIL = [
  { label: 'Questions', href: '/faq' },
  { label: 'About', href: '/about' },
];

export const SHARED_REFERENCES = REFERENCES;
