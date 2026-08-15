# Migration Contract

## Addresses

| Role | Address |
|---|---|
| Legacy XTC V1 | `0xDD646291D2fff52c75F27CCDAdD0D4C2A24f37Dd` |
| Current XTC V2 proxy | `0xE45FE733BC8617FA6DAC8437FC44B5FFFA949991` |
| Migration contract | `0x5A570197e4835d0c2F2F956026981E0cff50A8c9` |
| Designated dead address | `0x000000000000000000000000000000000000dEaD` |

Canonical verified sources are published in the [Xitcoin contracts repository](https://github.com/xitcoin-org/contracts).

## Accounting

V1 has 8 decimals and V2 has 18 decimals. For an input expressed in V1 atomic units:

```text
v2Amount = v1Amount × 10^(18 - 8)
```

This is a 1:1 conversion of displayed XTC amounts, not a 1:1 conversion of atomic integers.

The contract transfers V1 to the designated dead address. That removes the balance from practical circulation, but it is not a protocol-level burn and does not prove a reduction of V1 `totalSupply`.

## Published interface

```text
fromToken()
fromTokenDecimals()
swapTokens(uint256)
toToken()
toTokenDecimals()
```

The verified interface does not expose an owner, withdrawal, rescue or route-configuration function.

## Read-only verification

```bash
export CRONOS_RPC='https://evm.cronos.org'
export MIGRATION='0x5A570197e4835d0c2F2F956026981E0cff50A8c9'
export V2='0xE45FE733BC8617FA6DAC8437FC44B5FFFA949991'

cast call "$MIGRATION" 'fromToken()(address)' --rpc-url "$CRONOS_RPC"
cast call "$MIGRATION" 'toToken()(address)' --rpc-url "$CRONOS_RPC"
cast call "$MIGRATION" 'fromTokenDecimals()(uint8)' --rpc-url "$CRONOS_RPC"
cast call "$MIGRATION" 'toTokenDecimals()(uint8)' --rpc-url "$CRONOS_RPC"
cast call "$V2" 'balanceOf(address)(uint256)' "$MIGRATION" --rpc-url "$CRONOS_RPC"
```

These commands do not submit transactions. The V2 balance of the migration contract bounds the amount that can still be migrated.

## Audit scope

The published Cyberscope audit matches the current V2 implementation source hash. It does not cover the migration contract unless a separate matching report is explicitly published.
