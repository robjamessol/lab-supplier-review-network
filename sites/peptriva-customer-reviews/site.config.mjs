import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-customer-reviews',
  name: 'Peptriva Customer Reviews',
  url: 'https://peptrivacustomerreviews.com',
  tagline:
    'The Peptriva customer review record as a bound dossier: six chapters, one venue each, stating what the forums, the listings, and the certificate ledger actually carry.',
  eyebrow: 'Published by Peptriva. Every review here is from a real order, unedited.',
  wordmark: '<span>Peptriva</span> Customer Reviews',
  palette: 'royal',
  paper: '#F3F4F6',
  assetVersion: '1',
  publisher: PUBLISHER,
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  nav: [
    { label: 'Reddit Mentions', href: '/reddit-mentions' },
    { label: 'Independent Listings', href: '/independent-listings' },
    { label: 'Testing Experience', href: '/testing-experience' },
  ],
  nav2: [
    { label: 'Common Themes', href: '/common-themes' },
    { label: 'Assessment', href: '/assessment' },
    { label: 'FAQ', href: '/faq' },
  ],
  references: REFERENCES,
  footer: footer({
    blurb:
      'The customer review record for one research-peptide supplier, published by the supplier, read venue by venue, including the venues that carry nothing.',
  }),
};

export { pages };
