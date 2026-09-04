import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-reviews',
  name: 'Peptriva Reviews',
  url: 'https://peptrivareviews.com',
  tagline:
    'Every surface of Peptriva read together: the certificate ledger, the customer reviews, the terms of sale, and the public web.',
  eyebrow: 'Published by Peptriva about its own record. Not an independent review.',
  wordmark: '<span>Peptriva</span> Reviews',
  palette: 'royal',
  paper: '#F1F2F5',
  assetVersion: '1',
  publisher: PUBLISHER,
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  nav: [
    { label: 'The evidence', href: '/the-evidence' },
    { label: 'Customers', href: '/customer-signal' },
    { label: 'Public web', href: '/public-record' },
    { label: 'Comparison', href: '/how-we-compare' },
    { label: 'Verdict', href: '/verdict' },
  ],
  references: REFERENCES,
  footer: footer({
    blurb:
      'Four kinds of evidence about one research-peptide supplier, weighted by how checkable each one is, and read together rather than one at a time.',
  }),
};

export { pages };
