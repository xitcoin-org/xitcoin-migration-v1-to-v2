# Xitcoin Reference Material

This directory indexes public documents associated with the Xitcoin V1-to-V2 transition.

## Publications

| Document | Public source | Classification |
| --- | --- | --- |
| Legacy Xitcoin whitepaper | [old-xitcoin-whitepaper-en.pdf](https://xitcoin.org/files/old-xitcoin-whitepaper-en.pdf) | Historical pre-migration publication |
| Xitcoin whitepaper | [xitcoin-whitepaper-en.pdf](https://xitcoin.org/files/xitcoin-whitepaper-en.pdf) | February 2026 publication describing the Cronos V2 transition |

These publications preserve project history. Statements, names, links and technical plans inside them reflect their publication date and may not describe the current implementation.

## Canonical technical records

When a historical publication differs from a current technical record, use the following sources:

1. [`xitcoin-org/contracts`](https://github.com/xitcoin-org/contracts) for Cronos contract addresses, verified source hashes, deployments and audit scope;
2. [`xitcoin-org/pos-chain`](https://github.com/xitcoin-org/pos-chain) for Xitcoin network identity, native XTC, testnet and bridge architecture;
3. this repository for the implemented V1-to-V2 migration flow and interface continuity.

## Audit separation

The whitepapers are publications, not audit reports. The Cyberscope record and its exact V2 source scope are maintained in [`xitcoin-org/contracts/audits`](https://github.com/xitcoin-org/contracts/tree/main/audits). No audit coverage should be inferred from a whitepaper link or project-level score.

## Archival policy

Repository copies must be byte-for-byte downloads from the public source, accompanied by SHA-256 hashes and the retrieval date. A file must not be modified and republished under the same archival filename.
