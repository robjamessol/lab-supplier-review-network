import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-review',
  name: 'The Peptriva Review',
  url: 'https://peptrivareview.com',
  tagline:
    'A first-party review of the Peptriva testing record: thirteen lots, one independent laboratory, and a plain account of what the evidence supports.',
  eyebrow: 'Published by Peptriva about its own record. Not an independent review.',
  wordmark: 'The <span>Peptriva</span> Review',
  palette: 'royal',
  paper: '#F2F3F5',
  assetVersion: '1',
  publisher: PUBLISHER,
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  nav: [
    { label: 'Testing', href: '/testing-record' },
    { label: 'Purity', href: '/purity-results' },
    { label: 'Transparency', href: '/transparency' },
    { label: 'Terms', href: '/buying-terms' },
    { label: 'Verdict', href: '/verdict' },
  ],
  references: REFERENCES,
  footer: footer({
    blurb:
      'One first-party read of a research-peptide supplier’s own documentary record, written in the register of a review rather than a brochure, with the gaps named.',
  }),
};

export { pages };
