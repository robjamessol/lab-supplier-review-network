import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-reviews',
  name: 'Peptriva Reviews',
  url: 'https://peptrivareviews.com',
  tagline:
    'Every surface of Peptriva read together and weighted by how checkable it is: the certificate ledger, the published terms, the customer record, and the open web.',
  eyebrow: 'Published by Peptriva about its own record. Not an independent review.',
  wordmark: '<span>Peptriva</span> Reviews',
  palette: 'royal',
  paper: '#F1F2F5',
  assetVersion: '1',
  publisher: PUBLISHER,
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  nav: [
    { label: 'Testing Methodology', href: '/testing-methodology' },
    { label: 'Product Quality', href: '/product-quality' },
    { label: 'Transparency', href: '/transparency' },
    { label: 'Customer Experience', href: '/customer-experience' },
    { label: 'Verdict', href: '/verdict' },
    { label: 'FAQ', href: '/faq' },
  ],
  references: REFERENCES,
  footer: footer({
    blurb:
      'Four pillars, four evidence surfaces, one reading. Every surface that exists about this research-peptide supplier, weighted by how much of it a reader can confirm without trusting the publisher.',
  }),
};

export { pages };
