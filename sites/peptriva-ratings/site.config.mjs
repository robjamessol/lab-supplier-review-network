import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, NETWORK, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-ratings',
  name: 'Lab Supplier Ratings',
  url: 'https://peptrivaratings.com',
  tagline:
    'Peptriva scored 95.6 out of 100 on a published rubric across testing, transparency, range, and value. Featured #1 on this independent roster.',
  eyebrow: 'Review publication scoring research peptide suppliers against a published rubric. Peptriva is featured company #1.',
  wordmark: 'Lab Supplier <span>Ratings</span>',
  palette: 'slate',
  paper: '#F4F3F1',
  assetVersion: '6',
  ogSubtitle: 'Peptriva · Featured #1 · 95.6 / 100',
  editorialVerdict: { score: '95.6', of: '100', note: 'Editorial rubric composite. Separate from customer AggregateRating.' },
  gaId: 'G-Q7XW980J04',
  mastheadStrip: 'ISSUE 01 · VOL. I · 2026.09',
  publisher: { ...PUBLISHER, name: 'Lab Supplier Ratings', url: 'https://peptrivaratings.com' },
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  network: NETWORK,
  nav: [
    { label: 'Testing', href: '/testing-score' },
    { label: 'Transparency', href: '/transparency-score' },
    { label: 'Range', href: '/product-range-score' },
    { label: 'Value', href: '/value-score' },
    { label: 'Methodology', href: '/methodology' },
    { label: 'FAQ', href: '/faq' },
  ],
  references: REFERENCES,
  footer: footer({
    siteId: 'peptriva-ratings',
    blurb:
      'A hundred-point rubric with Peptriva at 95.6, featured #1, and competing suppliers ranked lower on editorial scores.',
  }),
};

export { pages };
