# Xitcoin Migration Site

Private engineering repository for the recovery, maintenance and controlled
reconstruction of `migration.xitcoin.org`.

## Purpose

Following community approval, the migration provides a one-way path from the
legacy XTC token to the current XTC token on Cronos. Legacy XTC submitted
through the migration contract is sent to the designated dead address. The
contract releases the corresponding current XTC from its pre-funded balance.

The current XTC token uses a proxy architecture. This preserves the canonical
token address while allowing implementation maintenance through its established
governance process.

## Repository layout

- `legacy-deployment/` — immutable recovery baseline found on the server on
  2026-08-14.
- `docs/` — architecture, contract references and operational procedures.
- `app/` — future readable application source. It is intentionally absent until
  the reconstruction is implemented and reviewed.

## Engineering policy

- No production deployment is performed from the recovered legacy baseline.
- Changes are reviewed through pull requests.
- Runtime credentials, private keys and wallet secrets do not belong in Git.
- Public wording uses `XTC`, never `$XTC`.

## Current references

- Legacy XTC: `0xDD646291D2fff52c75F27CCDAdD0D4C2A24f37Dd`
- Current XTC proxy: `0xE45FE733BC8617FA6DAC8437FC44B5FFFA949991`
- Migration contract: `0x5A570197e4835d0c2F2F956026981E0cff50A8c9`

See [the contract reference](docs/migration-contract.md) and
[operations guide](docs/operations.md).
