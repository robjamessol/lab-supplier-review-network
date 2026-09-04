import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-review',
  name: 'The Peptriva Review',
  url: 'https://peptrivareview.com',
  tagline:
    'An editorial issue on the Peptriva record: thirteen lots, one third-party laboratory, one verdict, and a plain account of what the evidence supports.',
  eyebrow: 'Published by Peptriva about its own record. Not an independent review.',
  wordmark: 'The <span>Peptriva</span> Review',
  palette: 'royal',
  paper: '#F2F3F5',
  assetVersion: '1',
  publisher: PUBLISHER,
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  nav: [
    { label: 'Testing', href: '/testing-methodology' },
    { label: 'Quality', href: '/product-quality' },
    { label: 'Transparency', href: '/transparency' },
    { label: 'Customer', href: '/customer-experience' },
    { label: 'Verdict', href: '/verdict' },
  ],
  references: REFERENCES,
  footer: footer({
    blurb:
      'One first-party read of a research-peptide supplier’s own documentary record, published as an editorial issue in six plates, with the gaps named beside the findings.',
  }),
};

export { pages };
