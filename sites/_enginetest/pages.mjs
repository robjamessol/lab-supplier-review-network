export const pages = [
 {
 path: '/',
 navLabel: 'Home',
 title: 'Engine test page for the build pipeline',
 description: 'A synthetic page used only to verify the renderer, the component blocks, the citation system, and the compliance gate all work end to end.',
 h1: 'Engine test',
 kicker: 'TEST / 2026',
 standfirst: 'A synthetic page that exercises every component block.',
 cover: true,
 kpi: [['LOTS', '13 of 13'], ['PURITY', '99.58 to 99.90%'], ['LAB', 'Freedom Diagnostics'], ['ROUNDS', '1']],
 plate: { name: 'gatePlate', caption: 'The release condition, drawn.' },
 cta: [{ label: 'Primary', href: '/second' }, { label: 'Secondary', href: '/second' }],
 coverBlocks: `:::verdict {"label":"The record","score":"4.1","of":"5","band":"Strong on method","note":"A note about the score."}
:::
:::stats {"items":[["LOTS","13 of 13"],["PURITY","99.58 to 99.90%"],["LAB","Freedom Diagnostics"]]}
:::`,
 body: `## The lead

The record shows thirteen lots with certificates [^1]. The laboratory is named [^2].

- One item with **bold**
- Another with a [link](https://peptriva.com/coa)

## What the panel covers

| Assay | Method |
| --- | --- |
| Identity | LC-MS |
| Purity | HPLC-UV |

:::callout {"title":"A callout","note":"Small print here."}
Body of the callout with a citation [^3].
:::

:::scores {"rows":[{"name":"Testing method","weight":"35%","score":92,"of":100,"note":"Deducted for a single round."}]}
:::

:::indexCards {"cards":[{"href":"/second","title":"Second page","text":"Goes to the second page."}]}
:::

:::reviews {"limit":3}
:::

:::ratingSummary {}
:::

## Questions

:::faq {"items":[{"q":"Does the FAQ block work?","a":"Yes, and it feeds FAQPage schema [^1]."}]}
:::
`,
 },
 {
 path: '/second',
 navLabel: 'Second',
 faqFromSections: true,
 kicker: 'PLATE 02 / TEST',
 title: 'Second engine test page',
 description: 'The second synthetic page, used to confirm that non-home pages render, that internal links resolve, and that the references block works correctly.',
 h1: 'Second page',
 standfirst: 'Second page deck.',
 body: `## Does the FAQ-from-sections path work?

Yes. This H2 ends in a question mark, so the renderer lifts it and this first paragraph into FAQPage schema without a component block.

## What is USP <85>?

It is the pharmacopeial bacterial endotoxins test, and the standard the endotoxin assay on each certificate is run against.

## References

:::references {}
:::
`,
 },
];
