// Build-time copy gate.
//
// These are the storefront's standing rules, ported so a review-network page can
// never say something peptriva.com itself is forbidden to say. A violation fails
// the build rather than warning: this copy is public-facing, and the store carries
// ad-account, Google Merchant Center and Lilly-review exposure that a single wrong
// sentence about a reviewed supplier can reach.
//
// The negation exemption matters as much as the bans: a line that NEGATES a claim
// ("not for human use", "not approved by the FDA") is allowed to contain the words.

const NEGATORS =
  /\b(?:not|never|no|cannot|can't|without|prohibited|banned|forbidden|barred|refus\w+|excluded?|neither|nor|absence|absent|lacks?|lacking|omits?|omitted|does not include)\b/i;

/** Rules run per line so the negation exemption can be scoped to a sentence. */
export const RULES = [
  {
    id: 'em-dash',
    // Owner rule 2026-08-19, CI-enforced in copy-checks. Rewrite with a period,
    // comma, or colon.
    test: /—/,
    exemptOnNegation: false,
    message: 'Em dash. Owner rule: rewrite with a period, comma, or colon.',
  },
  {
    id: 'human-use',
    // The strictest rule. Banned on every reachable surface: HTML, JS, JSON-LD,
    // llms.txt, metadata. Storage is a property of the material, never a step a
    // buyer performs.
    test: /\b(?:reconstitut\w+|bacteriostatic|bac water|diluent|dilute\w*|multi-?(?:use|dose) vial|aseptic|puncture|spray vial|oral supplement|topical|inject(?:s|ed|ing|ion|ions|able)?|subcutaneous(?:ly)?|intramuscular(?:ly)?|intravenous(?:ly)?|syringe|needle|water for injection|self-?administer\w*|working (?:solution|window)|stack(?:ing|ed|s)?|titrat\w+|protocols?|mcg|mg\/ml|mg\/kg|per week|per day|dose[- ]response|half-?life|use within \d+|use promptly|prepare fresh|same-?day use)\b/i,
    exemptOnNegation: true,
    message: 'Human-use / administration language. Banned on every Peptriva surface.',
  },
  {
    id: 'outcome-claim',
    test: /\b(?:cures?|treats?|prevents?|reverses?|clinically proven|FDA[- ]approved|lose weight|weight loss|burn fat|fat loss|anti-?inflammatory|wound healing|muscle growth|your (?:dose|dosage|results|cycle)|how to take|before and after)\b/i,
    exemptOnNegation: true,
    message: 'Outcome or medical claim. Historically the exact cause of repeated ad-platform rejections.',
  },
  {
    id: 'rx-brand-comparison',
    // The litigation surface. Eli Lilly v. Lone Star Peptide reads intent from the
    // totality of conduct; an RUO disclaimer elsewhere does not cure this.
    test: /\b(?:Ozempic|Wegovy|Mounjaro|Zepbound|Egrifta|Vyleesi|Saxenda|Trulicity)\b/i,
    exemptOnNegation: false,
    message: 'Branded Rx drug name. Never compare, equate, or position a SKU against one.',
  },
  {
    id: 'rx-equivalence',
    test: /\b(?:generic|alternative|equivalent|same as|cheaper than|dupe) (?:to |for |of )?(?:Ozempic|Wegovy|Mounjaro|Zepbound|Egrifta|the brand|prescription)\b/i,
    exemptOnNegation: false,
    message: 'Positions a SKU as an Rx analogue. Prohibited.',
  },
  {
    id: 'maker',
    // Owner rule 2026-08-19. The correct term is "manufacturing facility".
    test: /\bthe maker\b|\bits maker\b|\bmaker of\b/i,
    exemptOnNegation: false,
    message: 'Owner rule: never say "maker". Use "manufacturing facility".',
  },
  {
    id: 'made-in-usa',
    // Requested by the owner and refused on 16 CFR 323 grounds. The supply chain
    // is Shenzhen-sourced.
    test: /\bmade in (?:the )?usa\b|\bUS[- ]manufactured\b|\bmanufactured in the (?:US|United States)\b/i,
    exemptOnNegation: true,
    message: 'Origin claim refused previously (16 CFR 323). The supply chain is not US.',
  },
  {
    id: 'manufacturer-lab-named',
    // Half the two-lab story is confidential. The production lab is never named or
    // linked, and is never described as US-based or accredited.
    test: /\bNorth South Precision\b|\bSNTEK\b|\bpurespeptidelabs\b|\bNST\b(?![a-z])/i,
    exemptOnNegation: false,
    message: 'Names the confidential manufacturing lab. Never name or link it.',
  },
  {
    id: 'unsubstantiated-accreditation',
    // Asserted across the storefront with zero substantiating artifact in the repo:
    // no certificate, no scope number, no accrediting body. It would be the
    // load-bearing proof of the entire testing story, so it does not go up until a
    // scope certificate is on file.
    test: /\bISO[\s/]?(?:IEC[\s/]?)?9001\b|\bISO[\s/]?(?:IEC[\s/]?)?17025\b|\bILAC[- ]MRA\b|\baccredited (?:lab|laboratory|facility)\b|\blab accreditation\b/i,
    exemptOnNegation: true,
    message: 'Accreditation claim with no certificate on file. Say "independent third-party laboratory" and name it.',
  },
  {
    id: 'contradicted-guarantee',
    // Published policy is no returns of any kind, plus four narrow claim windows.
    test: /\b(?:30[- ]day )?risk[- ]free guarantee\b|\bmoney[- ]back guarantee\b|\b30[- ]day returns?\b|\bfree returns\b|\bhassle[- ]free returns\b/i,
    exemptOnNegation: true,
    message: 'Contradicts the published returns policy. Describe the Out-of-Spec Guarantee precisely instead.',
  },
  {
    id: 'unsupported-scale',
    // Backend truth at last check: 232 customer rows, 14 orders, 5 external buyers.
    test: /\b\d[\d,]*\s*k?\+\s*(?:happy\s+)?(?:customers|researchers|orders|labs|buyers)\b|\bthousands of (?:customers|researchers|orders)\b/i,
    exemptOnNegation: false,
    message: 'Scale claim not backed by live data. Do not publish a customer or order count.',
  },
  {
    id: 'sterility',
    // The terms state the products are not sterile, and no USP <71> assay exists on
    // either certificate.
    test: /\bsterile\b|\bsterility\b|\bUSP\s*<?71>?\b/i,
    exemptOnNegation: true,
    message: 'No sterility testing exists and the terms state the products are not sterile.',
  },
  {
    id: 'owner-banned-phrases',
    test: /\bno[- ]account (?:needed|required|necessary)\b/i,
    exemptOnNegation: false,
    message: 'OWNER_BANNED_PHRASES (owner rule 2026-08-18).',
  },
  {
    id: 'first-party-ownership',
    // These sites are an independent third-party review publication. Ban language
    // that claims Peptriva owns, publishes, or scores itself on this network.
    // Independent / not-affiliated language is allowed and expected in disclosure.
    test: /\bPublished by Peptriva\b|\bfirst-party record\b|\bfirst-party reading\b|\bfirst-party claim\b|\bfirst-party score\b|\bfirst-party publisher\b|\bfirst-party publication\b|\bfirst-party instrument\b|\bfirst-party system\b|\bfirst-party testimony\b|\bfirst-party rating\b|\bpublishes this (?:site|issue|review|dossier|rubric|assessment|rating|page) about itself\b|\brating site about itself\b|\breview (?:site|website|property) about itself\b|\bscoring itself\b|\bapplies it to itself\b|\bpublished by the company it examines\b|\bpublished by the company it scores\b|\bpublished by the company being reviewed\b|\bwe publish this about ourselves\b|\bPeptriva publishes this site\b|\bPeptriva publishes this (?:issue|review|dossier|rubric|assessment|rating|page) about\b|\bthe company scoring itself\b|\bself-scored\b/i,
    exemptOnNegation: false,
    message:
      'First-party ownership claim. These sites are an independent third-party review publication; Peptriva is a reviewed subject, not the publisher.',
  },
];

/**
 * Compound names may not share a promotional unit with a price or urgency cue.
 * Checked per line, since a line is the smallest promotional unit that matters.
 */
const COMPOUND_NAMES =
  /\b(?:retatrutide|tirzepatide|semaglutide|cagrilintide|cagrisema|mazdutide|survodutide|bpc-?157|tb-?500|cjc-?1295|tesamorelin|ipamorelin|pt-?141|ghk-?cu|nad\+|5-amino-1mq|mots-?c|ss-?31|epithalon|glutathione|selank|semax|dsip|kpv)\b/i;
const COMMERCIAL_CUE =
  /\$\d|\b\d+%\s*off\b|\bsave \$?\d|\bdiscount code\b|\bbuy now\b|\border now\b|\blimited time\b|\bhurry\b|\bwhile supplies last\b|\bshop now\b|\bdeal\b|\bsale\b/i;

export function checkCopy(text, { where = 'copy' } = {}) {
  const violations = [];
  const lines = String(text).split('\n');

  lines.forEach((line, i) => {
    if (!line.trim()) return;
    const negated = NEGATORS.test(line);

    for (const rule of RULES) {
      if (rule.exemptOnNegation && negated) continue;
      const m = rule.test.exec(line);
      if (m) {
        violations.push({
          rule: rule.id,
          where: `${where}:${i + 1}`,
          match: m[0],
          message: rule.message,
          context: line.trim().slice(0, 150),
        });
      }
    }

    if (COMPOUND_NAMES.test(line) && COMMERCIAL_CUE.test(line)) {
      violations.push({
        rule: 'compound-plus-commercial-cue',
        where: `${where}:${i + 1}`,
        match: `${COMPOUND_NAMES.exec(line)[0]} + ${COMMERCIAL_CUE.exec(line)[0]}`,
        message: 'A compound name may not share a promotional unit with a price, discount, or urgency cue.',
        context: line.trim().slice(0, 150),
      });
    }
  });

  return violations;
}

/**
 * A customer's own words are evidence, not our copy, so the bar is lower. But the
 * text still appears on a review page about Peptriva, so dosing and outcome language
 * has to be redacted or the review dropped.
 */
export function checkReviewBody(body) {
  const strict = new Set(['human-use', 'outcome-claim', 'rx-brand-comparison']);
  const hits = [];
  for (const line of String(body).split('\n')) {
    const negated = NEGATORS.test(line);
    for (const rule of RULES) {
      if (!strict.has(rule.id)) continue;
      if (rule.exemptOnNegation && negated) continue;
      const m = rule.test.exec(line);
      if (m) hits.push({ rule: rule.id, match: m[0], message: rule.message });
    }
  }
  return hits;
}
