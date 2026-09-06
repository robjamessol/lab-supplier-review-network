import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, NETWORK, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-customer-reviews',
  name: 'Lab Supplier Customer Reviews',
  url: 'https://peptrivacustomerreviews.com',
  tagline:
    'Independent dossier of Peptriva customer reviews: order-verified feedback beside the testing record. Peptriva is featured #1 on the roster.',
  eyebrow: 'Review publication covering Peptriva customer reviews. Peptriva is featured company #1. Every review here is from a real order, unedited.',
  wordmark: 'Lab Supplier <span>Customer Reviews</span>',
  palette: 'royal',
  paper: '#F3F4F6',
  assetVersion: '4',
  ogSubtitle: 'Peptriva · Customer reviews · Featured #1',
  editorialVerdict: { score: '4.8', of: '5', note: 'Network editorial verdict. Customer AggregateRating comes only from reviews on file.' },
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
      'The customer review record for Peptriva, featured #1 on this independent publication\'s roster, read venue by venue.',
  }),
};

export { pages };
