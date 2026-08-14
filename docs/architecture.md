# Architecture

## Boundaries

The legacy Cronos migration is independent from the Xitcoin Proof-of-Stake
network, its native `xtc` denomination and future cross-chain integrations.
It must not be presented as a bridge to Xitcoin PoS or Xitcoin EVM.

## Migration flow

1. A holder authorizes the migration contract to use a specified amount of
   legacy XTC.
2. The holder calls the contract migration function.
3. The legacy XTC is sent to the designated dead address.
4. The contract transfers the corresponding current XTC from its pre-funded
   balance to the holder.

The verified ABI contains token references, decimal metadata and
`swapTokens(uint256)`.

## Frontend reconstruction principles

- Use readable, versioned source code; do not edit compiled JavaScript bundles.
- Query on-chain balances through a controlled RPC adapter with explicit timeout
  and error states.
- Obtain the amount sent to the designated address with
  `balanceOf(designatedAddress)` on the legacy token.
- Obtain the migration percentage from live `totalSupply()` data rather than a
  hard-coded number.
- Use the public wording “sent to the designated dead address”.
- Show a clear technical error state rather than an indefinite loading state.

## Scope

The reconstruction does not change token contracts, token balances or production
deployment without a separate reviewed release.
