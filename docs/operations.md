# Release Operations

## Validation

Run from the repository root:

```bash
set -euo pipefail

npm ci --prefix wallets/vendor
node tools/build-walletconnect-provider.mjs
node --check locales/migration-localization.js
node --check wallets/eip6963-picker.js
node --check wallets/walletconnect-bridge.js
node --check tools/build-legacy-status-preview.mjs
node --check tools/migration-status-server.mjs
node tools/build-legacy-status-preview.mjs
```

The build fails if the preserved baseline no longer matches the reviewed transformation markers or if required wallet assets are missing.

## Local acceptance

```bash
PORT=5173 node tools/migration-status-server.mjs
```

Verify:

- the page loads without a wallet request;
- migration counters return a finite value or a visible error state;
- wallet selection lists available EIP-6963 providers;
- the connected network is Cronos;
- token addresses and decimal values match the verified migration contract;
- the approval amount matches the requested migration amount;
- language changes preserve the selected language and refresh dynamic values.

## Release process

1. Build from a reviewed commit.
2. Record the commit and generated asset hashes.
3. Validate the generated site in an isolated environment.
4. Create a recoverable copy of the currently served static files.
5. Deploy the complete generated `site/` directory atomically.
6. Run HTTP, status-endpoint and wallet acceptance checks.
7. Retain the previous release until the new release is confirmed healthy.

A website release does not change the migration contract or token contracts.
