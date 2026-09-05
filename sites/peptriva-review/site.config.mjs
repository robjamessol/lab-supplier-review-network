import { SUBJECT, REFERENCES } from '../../shared/facts.mjs';
import { PUBLISHER, NETWORK, footer } from '../../shared/chrome.mjs';
import { pages } from './pages.mjs';

export const site = {
  id: 'peptriva-review',
  name: 'The Lab Supplier Review',
  url: 'https://peptrivareview.com',
  tagline:
    'An editorial issue on Peptriva, company #1 on this independent review roster: thirteen lots, one third-party laboratory, one verdict, and a plain account of what the evidence supports.',
  eyebrow: 'Review publication covering research chemical and laboratory suppliers. Peptriva is company #1 on the roster.',
  wordmark: 'The Lab Supplier <span>Review</span>',
  palette: 'royal',
  paper: '#F2F3F5',
  assetVersion: '3',
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
      'One independent read of a research-peptide supplier\'s documentary record, published as an editorial issue in six plates, with the gaps named beside the findings. Peptriva is the subject under review, not the publisher.',
  }),
};

export { pages };
