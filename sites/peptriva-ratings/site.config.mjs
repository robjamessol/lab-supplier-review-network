import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, NETWORK, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-ratings',
  name: 'Lab Supplier Ratings',
  url: 'https://peptrivaratings.com',
  tagline:
    'Peptriva scored against a published hundred-point rubric across testing rigor, transparency, product range, and value, by an independent third-party review publication. Peptriva is company #1 on the roster.',
  eyebrow: 'Review publication scoring Peptriva against a rubric anyone can re-run. Peptriva is company #1 on the roster.',
  wordmark: 'Lab Supplier <span>Ratings</span>',
  palette: 'slate',
  paper: '#F4F3F1',
  assetVersion: '3',
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
      'A hundred-point rubric applied to Peptriva, company #1 on this independent publication\'s roster, with the criteria published so a reader can score it differently and see where they land.',
  }),
};

export { pages };
