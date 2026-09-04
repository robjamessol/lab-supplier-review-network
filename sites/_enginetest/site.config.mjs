import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';
export const site = {
  id: '_enginetest', name: 'Engine Test', url: 'https://example.com',
  tagline: 'Engine test.', eyebrow: 'Published by Peptriva about its own record.',
  wordmark: 'Engine <span>Test</span>', palette: 'royal', paper: '#F2F3F5', assetVersion: '1',
  publisher: PUBLISHER,
  subject: { name: SUBJECT.name, url: SUBJECT.url, description: SUBJECT.description },
  nav: [{ label: 'Second', href: '/second' }],
  nav2: [{ label: 'Row two', href: '/second' }],
  mastheadStrip: 'ISSUE 01 · VOL. I · 2026.09',
  references: REFERENCES,
  footer: footer({ blurb: 'Engine test blurb.' }),
};
export { pages };
