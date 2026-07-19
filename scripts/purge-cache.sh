#!/usr/bin/env bash
#
# purge-cache.sh — Purge the Cloudflare edge cache for bhattaraikapil.com.np.
#
# WHY: Cloudflare caches your pages at the edge for ~1 day (the Cache Rule that
# makes first-load fast). After you rebuild docs/ and push to GitHub, run this so
# visitors see the new version immediately instead of the day-old cached copy.
#
# ── ONE-TIME SETUP ─────────────────────────────────────────────────────────────
#   1. Cloudflare dashboard → top-right profile → "API Tokens" → Create Token.
#      Use a Custom token with:  Permissions → Zone → Cache Purge → Purge
#      Zone Resources → Include → Specific zone → bhattaraikapil.com.np
#   2. Grab the Zone ID from the domain's Overview page (right-hand sidebar).
#   3. Create a file at the repo root named  .env.cloudflare  (already gitignored
#      via the .env* rule — never commit it):
#         CLOUDFLARE_API_TOKEN=your_token_here
#         CLOUDFLARE_ZONE_ID=your_zone_id_here
#      (Or just export those two as environment variables instead of the file.)
#
# ── USAGE ──────────────────────────────────────────────────────────────────────
#   ./scripts/purge-cache.sh
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# Load credentials from .env.cloudflare if present (real env vars win).
ENV_FILE="$REPO_DIR/.env.cloudflare"
if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi

: "${CLOUDFLARE_API_TOKEN:?Missing CLOUDFLARE_API_TOKEN — set it in .env.cloudflare or the environment. See setup notes at the top of this script.}"
: "${CLOUDFLARE_ZONE_ID:?Missing CLOUDFLARE_ZONE_ID — set it in .env.cloudflare or the environment. See setup notes at the top of this script.}"

echo "→ Purging Cloudflare cache for zone ${CLOUDFLARE_ZONE_ID} …"

response="$(curl -sS -X POST \
  "https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache" \
  -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}')"

if echo "$response" | grep -q '"success":true'; then
  echo "✓ Cache purged — the new version is live at https://bhattaraikapil.com.np"
else
  echo "✗ Purge failed. Cloudflare responded:" >&2
  echo "$response" >&2
  exit 1
fi
