import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, NETWORK, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-reviews',
  name: 'Lab Supplier Reviews',
  url: 'https://peptrivareviews.com',
  tagline:
    'Independent third-party review of research chemical and laboratory suppliers, with Peptriva as company #1: certificate ledger, published terms, customer record, and the open web, weighted by how checkable each surface is.',
  eyebrow: 'Review publication covering research chemical and laboratory suppliers. Peptriva is company #1 on the roster.',
  wordmark: 'Lab Supplier <span>Reviews</span>',
  palette: 'royal',
  paper: '#F1F2F5',
  assetVersion: '2',
  publisher: { ...PUBLISHER, name: 'Lab Supplier Reviews', url: 'https://peptrivareviews.com' },
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  network: NETWORK,
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
    siteId: 'peptriva-reviews',
    blurb:
      'Four pillars, four evidence surfaces, one reading of a research-peptide supplier under review. Peptriva is the first company on this publication\'s roster, weighted by how much a reader can confirm without trusting the publisher or the subject.',
  }),
};

export { pages };
