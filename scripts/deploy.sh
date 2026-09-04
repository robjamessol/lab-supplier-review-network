#!/usr/bin/env bash
# Create and deploy all four Vercel projects.
#
# Run this yourself once, from an interactive terminal:
#
#   npx vercel login          # one time, opens a browser
#   ./scripts/deploy.sh       # creates + deploys all four
#
# Re-running it redeploys. It is safe to run repeatedly.

set -euo pipefail
cd "$(dirname "$0")/.."

SITES=(peptriva-review peptriva-reviews peptriva-customer-reviews peptriva-ratings)

declare -A DOMAINS=(
  [peptriva-review]=peptrivareview.com
  [peptriva-reviews]=peptrivareviews.com
  [peptriva-customer-reviews]=peptrivacustomerreviews.com
  [peptriva-ratings]=peptrivaratings.com
)

echo "Building all four sites locally first."
node build.mjs --all

for site in "${SITES[@]}"; do
  echo
  echo "=============================================="
  echo "  $site  ->  ${DOMAINS[$site]}"
  echo "=============================================="

  # Each site deploys its own prebuilt static directory, so Vercel runs no build
  # and needs no framework detection.
  npx vercel deploy "dist/$site" \
    --prod \
    --yes \
    --name "$site" \
    --archive=tgz

  echo
  echo "  To attach the real domain once you have bought it:"
  echo "    npx vercel domains add ${DOMAINS[$site]} --scope <your-team>"
  echo "    npx vercel alias set <deployment-url> ${DOMAINS[$site]}"
done

echo
echo "All four deployed."
echo
echo "Next:"
echo "  1. Buy the four domains."
echo "  2. In the Vercel dashboard, open each project, Settings, Domains, add its domain."
echo "  3. Point the registrar's nameservers at Vercel, or add the A/CNAME records it shows."
echo "  4. Add each domain as a property in Google Search Console and submit its sitemap.xml."
