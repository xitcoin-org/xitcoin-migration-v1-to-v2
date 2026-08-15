# Site Operations

## Public checks

```bash
curl -fsSIL   --connect-timeout 8   --max-time 15   https://migration.xitcoin.org/

curl -fsS   --connect-timeout 8   --max-time 15   https://migration.xitcoin.org/api/migration-status |
  jq .
```

An HTTP success response confirms availability. Contract behavior must be verified separately against Cronos.

## Rebuild

```bash
set -euo pipefail

git switch main
git pull --ff-only origin main
rm -rf site
npm ci --prefix wallets/vendor
node tools/build-walletconnect-provider.mjs
node tools/build-legacy-status-preview.mjs
PORT=5173 node tools/migration-status-server.mjs
```

## Deployment model

Serve the generated `site/` directory behind HTTPS. Keep the Node status process on a private listener and route only the required public paths through the reverse proxy.

A deployment should use an atomic directory switch or equivalent release mechanism. Rollback restores the preceding generated directory; it does not alter on-chain state.

## Recovery without the hosted site

The canonical addresses and read-only verification commands are documented in [migration-contract.md](migration-contract.md). Any replacement interface must reproduce the verified 1:1 contract flow and must not substitute unverified addresses.
