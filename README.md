# Xitcoin Migration V1 to V2

Source code and continuity documentation for the XTC migration on Cronos.

The migration was implemented following a community-approved transition from the legacy V1 contract to the upgradeable V2 proxy architecture. It preserves each holder's displayed XTC amount while converting from 8-decimal V1 units to 18-decimal V2 units.

Read [why Xitcoin migrated from V1 to V2](docs/migration-rationale.md) before reviewing the technical flow.

## Canonical contracts

| Role | Address |
|---|---|
| Legacy XTC V1 | `0xDD646291D2fff52c75F27CCDAdD0D4C2A24f37Dd` |
| Current XTC V2 proxy | `0xE45FE733BC8617FA6DAC8437FC44B5FFFA949991` |
| Migration contract | `0x5A570197e4835d0c2F2F956026981E0cff50A8c9` |
| Designated dead address | `0x000000000000000000000000000000000000dEaD` |

Verified sources, deployment metadata and audit scope are maintained in [`xitcoin-org/contracts`](https://github.com/xitcoin-org/contracts).

## Repository layout

- `legacy-deployment/dist/`: reproducible frontend baseline;
- `locales/`: localization source;
- `wallets/`: EIP-6963 and WalletConnect integration;
- `tools/`: build and local status tooling;
- `docs/`: rationale, architecture, contract and operating references.

The generated `site/` directory is not committed.

## Build

Requirements: Node.js 20 or later and npm.

```bash
npm ci --prefix wallets/vendor
node tools/build-walletconnect-provider.mjs
node --check locales/migration-localization.js
node --check wallets/eip6963-picker.js
node --check wallets/walletconnect-bridge.js
node tools/build-legacy-status-preview.mjs
```

Run locally:

```bash
PORT=5173 node tools/migration-status-server.mjs
```

Open `http://127.0.0.1:5173`.

## Continuity

The migration contract operates independently of the hosted website. If the interface is unavailable, users can verify the contracts and continue through compatible Cronos tooling.

## Documentation

- [Migration rationale](docs/migration-rationale.md)
- [Architecture](docs/architecture.md)
- [Migration contract](docs/migration-contract.md)
- [Release operations](docs/operations.md)
- [Site operations](docs/site-operations.md)
