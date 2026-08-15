# Why Xitcoin migrated from V1 to V2

## Community decision

The Xitcoin project initiated the V1-to-V2 migration following a community vote approving the transition to a modernized token architecture. The decision addressed long-term technical requirements while preserving each holder's displayed XTC balance through a 1:1 migration.

This repository records the implemented result. It does not characterize the vote as an on-chain governance proposal unless a corresponding proposal identifier and verifiable record are published.

## Technical reasons

### Upgradeable proxy architecture

V1 was a conventional fixed deployment. V2 introduced an ERC-1967/UUPS proxy so the implementation can evolve without changing the canonical token address used by holders and integrations.

The proxy is intended for reviewed compatibility, security and protocol updates. The current implementation does not expose a public mint function. Upgradeability nevertheless remains a privileged capability and is protected by the approval controls documented in the contracts repository.

### Decimal standardization

V1 uses 8 decimals. V2 uses 18 decimals, aligning the Cronos representation with standard EVM tooling and the native precision selected for Xitcoin EVM.

```text
1.00000000 V1 XTC = 1.000000000000000000 V2 XTC
```

### Preparation for the Xitcoin blockchain

V2 established a more suitable technical base for wallets, applications and future interoperability with the Xitcoin blockchain. This preparation did not itself create a bridge and did not make Cronos XTC the native asset of Xitcoin EVM.

Cross-chain movement requires a separately implemented, reviewed and activated bridge route with explicit accounting controls.

## Holder protection

The migration is one-way:

1. the holder approves only the selected V1 amount;
2. the migration contract receives that amount;
3. V1 is transferred to the designated dead address;
4. the normalized V2 amount is released from the pre-funded reserve;
5. the transaction remains publicly verifiable on Cronos.

The dead-address transfer removes migrated V1 from practical circulation. It is not equivalent to executing burn logic and does not reduce V1 `totalSupply`.

## Canonical references

- [Contract source and deployment registry](https://github.com/xitcoin-org/contracts)
- [Migration contract reference](migration-contract.md)
- [Migration architecture](architecture.md)
- [Cronos explorer: V1](https://explorer.cronos.com/address/0xDD646291D2fff52c75F27CCDAdD0D4C2A24f37Dd)
- [Cronos explorer: V2 proxy](https://explorer.cronos.com/address/0xE45FE733BC8617FA6DAC8437FC44B5FFFA949991)
- [Cronos explorer: migration contract](https://explorer.cronos.com/address/0x5A570197e4835d0c2F2F956026981E0cff50A8c9)
