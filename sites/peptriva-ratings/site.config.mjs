import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-ratings',
  name: 'Peptriva Ratings',
  url: 'https://peptrivaratings.com',
  tagline:
    'Peptriva scored against a published hundred-point rubric across testing, transparency, catalogue, and terms, with the company scoring itself in the open.',
  eyebrow: 'Published by Peptriva, scoring itself against a rubric anyone can re-run.',
  wordmark: '<span>Peptriva</span> Ratings',
  palette: 'slate',
  paper: '#F4F3F1',
  assetVersion: '1',
  publisher: PUBLISHER,
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  nav: [
    { label: 'Testing', href: '/testing-score' },
    { label: 'Transparency', href: '/transparency-score' },
    { label: 'Catalogue', href: '/catalogue-score' },
    { label: 'Terms', href: '/terms-score' },
    { label: 'Method', href: '/methodology' },
  ],
  references: REFERENCES,
  footer: footer({
    blurb:
      'A hundred-point rubric applied to one research-peptide supplier by that supplier, with the criteria published so a reader can score it differently and see where they land.',
  }),
};

export { pages };
