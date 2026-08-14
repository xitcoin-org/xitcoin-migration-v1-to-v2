# Xitcoin Migration — V1 to V2

Operational source and continuity documentation for `migration.xitcoin.org`.

## Purpose

Xitcoin Migration moves holders from the historical XTC contract (**V1**) to the current XTC contract (**V2**) on Cronos.

The migration is one-way at a 1:1 ratio. Legacy XTC submitted through the migration contract is sent to the designated dead address. The corresponding current XTC is released from the migration contract’s pre-funded balance.

## Why V2

V2 retains the canonical current XTC address while using an established proxy architecture. This enables future compatibility and implementation maintenance through the applicable governance process without changing the canonical token address or increasing supply.

The V1 → V2 migration path and V2 architecture were approved by the Xitcoin community.

## References

| Reference | Address |
| --- | --- |
| Legacy XTC — V1 | `0xDD646291D2fff52c75F27CCDAdD0D4C2A24f37Dd` |
| Current XTC — V2 proxy | `0xE45FE733BC8617FA6DAC8437FC44B5FFFA949991` |
| Migration contract | `0x5A570197e4835d0c2F2F956026981E0cff50A8c9` |
| Designated dead address | `0x000000000000000000000000000000000000dEaD` |

## Site behavior

- Wallet access occurs only after a user selects and connects a wallet.
- Public counters use the same-origin `/api/migration-status` endpoint and do not request wallet access.
- The interface supports 30 languages; English remains the reference in case of discrepancy.
- Private keys, seed phrases and wallet credentials are never stored by the site.

## Continuity

The migration contract and its on-chain state remain independent of website availability. A website outage does not alter the contract, token balances or migration state.

See [site operations](docs/site-operations.md) for health checks, local rebuilding and restoration procedures.
