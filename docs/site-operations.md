# Xitcoin Migration V1 → V2 — Site Operations

## Scope

This guide covers only the public website and its read-only migration-status endpoint. It does not modify the migration contract, submit transactions, request token approvals or handle wallet secrets.

## Production

```text
Public URL: https://migration.xitcoin.org
Service: xitcoin-migration.service
Application root: /srv/kcalb/applications/xitcoin/migration
Local listener: 127.0.0.1:4222
```

## Health check

Run on the production server:

```bash
set -euo pipefail
systemctl is-active xitcoin-migration.service
curl -4fsS https://migration.xitcoin.org/api/migration-status | jq .
curl -4fsSI https://migration.xitcoin.org/ | sed -n '1,12p'
```

Expected result: service `active`, non-zero status values and HTTP 200.

## Rebuild locally

```bash
set -euo pipefail
git switch main
git pull --ff-only origin main
rm -rf site
node --check locales/migration-localization.js
node --check wallets/eip6963-picker.js
node --check tools/build-legacy-status-preview.mjs
node --check tools/migration-status-server.mjs
node tools/build-legacy-status-preview.mjs
PORT=5173 node tools/migration-status-server.mjs
```

Open `http://127.0.0.1:5173` to verify the build, then stop it with `Ctrl+C`.

## Restore from backup

Each controlled deployment stores the preceding static site under `/var/backups/xitcoin-migration/`.

```bash
set -euo pipefail
LIVE=/srv/kcalb/applications/xitcoin/migration
BACKUP=/var/backups/xitcoin-migration/REPLACE_WITH_TIMESTAMP

test -d "$BACKUP/site.previous"
mv "$LIVE/site" "$LIVE/site.failed-$(date -u +%Y%m%dT%H%M%SZ)"
cp -a "$BACKUP/site.previous" "$LIVE/site"
chown -R xitcoin:xitcoin "$LIVE/site"

curl -fsS http://127.0.0.1:4222/api/migration-status | jq .
```

Static-site restoration does not require a restart while the service is already active.
