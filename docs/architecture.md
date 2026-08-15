# Migration Architecture

## Purpose

The Cronos migration converts legacy XTC V1 to current XTC V2. It followed a community-approved transition to an upgradeable proxy architecture, standardized 18-decimal EVM precision and a technical foundation suitable for future Xitcoin ecosystem interoperability.

The migration is not a cross-chain bridge and is independent of the native XTC accounting of the Xitcoin Proof-of-Stake network. See [Why Xitcoin migrated from V1 to V2](migration-rationale.md).

## Transaction flow

1. The holder approves the migration contract to spend a chosen amount of V1.
2. The holder calls `swapTokens(uint256)`.
3. The contract transfers V1 to the designated dead address.
4. The contract normalizes 8-decimal V1 units to 18-decimal V2 units.
5. The contract transfers V2 from its pre-funded reserve to the holder.
6. `SwapExecuted` records the completed conversion.

The displayed-token ratio is 1:1.

## Accounting

A transfer to the designated dead address and an ERC-20 burn are different operations. The migration removes V1 from practical circulation without asserting that the legacy contract's `totalSupply()` decreases.

The public progress value is derived from verifiable Cronos state. It is informational and does not replace direct contract verification.

## Application components

- The preserved frontend baseline provides the migration interface.
- The build script applies reviewed compatibility changes reproducibly.
- EIP-6963 discovers injected wallets.
- WalletConnect is built from the pinned dependency lockfile.
- The status endpoint performs read-only Cronos JSON-RPC calls.
- Localization is loaded independently from the compiled application bundle.

## Trust boundaries

The website prepares wallet requests but cannot move tokens without explicit wallet approval and a signed transaction. Releases must verify network, contract addresses, decimals and requested allowance against the canonical registry.
