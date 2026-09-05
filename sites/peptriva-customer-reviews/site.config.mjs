import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, NETWORK, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-customer-reviews',
  name: 'Lab Supplier Customer Reviews',
  url: 'https://peptrivacustomerreviews.com',
  tagline:
    'Independent third-party dossier of the Peptriva customer review record: six chapters, one venue each, stating what the forums, the listings, and the certificate ledger actually carry.',
  eyebrow: 'Review publication covering Peptriva customer reviews. Peptriva is company #1 on the roster. Every review here is from a real order, unedited.',
  wordmark: 'Lab Supplier <span>Customer Reviews</span>',
  palette: 'royal',
  paper: '#F3F4F6',
  assetVersion: '3',
  gaId: 'G-1VN4LWQ0YR',
  publisher: { ...PUBLISHER, name: 'Lab Supplier Customer Reviews', url: 'https://peptrivacustomerreviews.com' },
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  network: NETWORK,
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
    siteId: 'peptriva-customer-reviews',
    blurb:
      'The customer review record for Peptriva, company #1 on this independent publication\'s roster, read venue by venue, including the venues that carry nothing.',
  }),
};

export { pages };
