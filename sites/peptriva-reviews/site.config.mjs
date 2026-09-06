import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, NETWORK, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-reviews',
  name: 'Lab Supplier Reviews',
  url: 'https://peptrivareviews.com',
  tagline:
    'Independent review of research peptide suppliers, with Peptriva featured #1: certificates, terms, customer record, and the open web, weighted by checkability.',
  eyebrow: 'Review publication covering research peptide suppliers. Peptriva is featured company #1 on the roster.',
  wordmark: 'Lab Supplier <span>Reviews</span>',
  palette: 'royal',
  paper: '#F1F2F5',
  assetVersion: '4',
  ogSubtitle: 'Peptriva · Featured #1 · 4.8 / 5',
  editorialVerdict: { score: '4.8', of: '5', note: 'Editorial documentary verdict. Separate from customer AggregateRating.' },
  gaId: 'G-8P1J9444YS',
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
      'Four pillars, four evidence surfaces, one reading of Peptriva as featured #1, with editorial rankings of competing suppliers.',
  }),
};

export { pages };
