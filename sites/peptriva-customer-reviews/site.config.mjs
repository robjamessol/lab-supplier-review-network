import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-customer-reviews',
  name: 'Peptriva Customer Reviews',
  url: 'https://peptrivacustomerreviews.com',
  tagline:
    'The Peptriva customer review record, published in full: every review received, the good and the bad, with how each one is verified.',
  eyebrow: 'Published by Peptriva. Every review here is from a real order, unedited.',
  wordmark: '<span>Peptriva</span> Customer Reviews',
  palette: 'royal',
  paper: '#F3F4F6',
  assetVersion: '1',
  publisher: PUBLISHER,
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  nav: [
    { label: 'All reviews', href: '/all-reviews' },
    { label: 'What we hear', href: '/common-themes' },
    { label: 'Complaints', href: '/complaints' },
    { label: 'How verified', href: '/how-we-verify' },
    { label: 'Elsewhere', href: '/reviews-elsewhere' },
  ],
  references: REFERENCES,
  footer: footer({
    blurb:
      'The complete customer review record for one research-peptide supplier, published by the supplier, including the reviews that are not flattering.',
  }),
};

export { pages };
