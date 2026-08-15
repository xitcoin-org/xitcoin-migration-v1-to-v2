# Xitcoin Reference Material

This directory preserves public documents associated with the Xitcoin V1-to-V2 transition.

## Archived publications

| Document | Repository copy | Original public source | SHA-256 |
| --- | --- | --- | --- |
| Legacy Xitcoin whitepaper | [old-xitcoin-whitepaper-en.pdf](files/old-xitcoin-whitepaper-en.pdf) | [xitcoin.org](https://xitcoin.org/files/old-xitcoin-whitepaper-en.pdf) | `bea08f5c9d076c079e2fba740cd6706bfdce37238d922911fd0d4d0ba3264efc` |
| Xitcoin whitepaper | [xitcoin-whitepaper-en.pdf](files/xitcoin-whitepaper-en.pdf) | [xitcoin.org](https://xitcoin.org/files/xitcoin-whitepaper-en.pdf) | `331f2ef852026efb42d3c453161b99501b09bbf4adfb5f7f9e21f1322cbd21f4` |

The repository copies are unmodified downloads retained for historical continuity. Their source URLs and retrieval timestamp are recorded in [`SOURCES.txt`](files/SOURCES.txt); their checksums are maintained in [`SHA256SUMS`](files/SHA256SUMS).

Verify the archived files from the repository root:

```bash
cd docs/reference-material/files
sha256sum -c SHA256SUMS
```

On macOS:

```bash
cd docs/reference-material/files
shasum -a 256 -c SHA256SUMS
```

## Interpretation

These documents reflect the project at their respective publication dates. Historical terminology, links and implementation plans may differ from the current system.

The canonical technical records are:

1. [`xitcoin-org/contracts`](https://github.com/xitcoin-org/contracts) for Cronos contract addresses, verified source hashes, deployments, listings and audit scope;
2. [`xitcoin-org/pos-chain`](https://github.com/xitcoin-org/pos-chain) for network identity, native XTC, testnet and bridge architecture;
3. this repository for the implemented V1-to-V2 migration flow and interface continuity.

## Audit records

Whitepapers are project publications, not security audit reports. The Cyberscope record and its exact V2 source scope are maintained in [`xitcoin-org/contracts/audits`](https://github.com/xitcoin-org/contracts/tree/main/audits). Audit coverage must be determined from the referenced report and matching source hash.

## Archival policy

Each archived publication must retain:

- the original public filename;
- the original public source URL;
- the UTC retrieval timestamp;
- a SHA-256 checksum.

Archived files are immutable. A revised publication must be stored as a new file with its own provenance and checksum.
