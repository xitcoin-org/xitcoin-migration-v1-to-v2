# Cronos migration contract reference

## Addresses

| Role | Address |
| --- | --- |
| Legacy XTC | `0xDD646291D2fff52c75F27CCDAdD0D4C2A24f37Dd` |
| Current XTC proxy | `0xE45FE733BC8617FA6DAC8437FC44B5FFFA949991` |
| Migration contract | `0x5A570197e4835d0c2F2F956026981E0cff50A8c9` |
| Designated dead address | `0x000000000000000000000000000000000000dEaD` |

## Verified contract interface

The verified `Migration` contract exposes:

```text
fromToken()
fromTokenDecimals()
swapTokens(uint256)
toToken()
toTokenDecimals()
```

It does not expose an owner, withdrawal, rescue or configuration function in
its published ABI.

## Accounting terminology

For public communication, legacy units are described as “sent to the designated
dead address”. This describes their on-chain destination. `totalSupply()` is a
separate ERC-20 accounting value and must not be inferred from address balance.

## Required frontend checks

Validate the live token addresses, decimal values, migration reserve and the
client-side flow against the verified contract interface before a release.
