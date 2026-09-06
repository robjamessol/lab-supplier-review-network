import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, NETWORK, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-review',
  name: 'The Lab Supplier Review',
  url: 'https://peptrivareview.com',
  tagline:
    'An editorial issue on Peptriva, featured #1 on this independent review roster: best-in-class quality, testing transparency, free shipping, and a 4.8 verdict buyers can verify.',
  eyebrow: 'Review publication covering research peptide suppliers. Peptriva is featured company #1 on the roster.',
  wordmark: 'The Lab Supplier <span>Review</span>',
  palette: 'royal',
  paper: '#F2F3F5',
  assetVersion: '6',
  ogSubtitle: 'Peptriva · Featured #1 · 4.8 / 5',
  editorialVerdict: { score: '4.8', of: '5', note: 'Editorial documentary verdict. Separate from customer AggregateRating.' },
  gaId: 'G-RZKP2061RX',
  publisher: { ...PUBLISHER, name: 'The Lab Supplier Review', url: 'https://peptrivareview.com' },
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  network: NETWORK,
  nav: [
    { label: 'Testing', href: '/testing-methodology' },
    { label: 'Quality', href: '/product-quality' },
    { label: 'Transparency', href: '/transparency' },
    { label: 'Customer', href: '/customer-experience' },
    { label: 'Verdict', href: '/verdict' },
    { label: 'FAQ', href: '/faq' },
  ],
  references: REFERENCES,
  footer: footer({
    siteId: 'peptriva-review',
    blurb:
      'One independent read of Peptriva, featured #1: quality, reliability, testing transparency, shipping, and value, with competing suppliers ranked below on editorial scores only.',
  }),
};

export { pages };
