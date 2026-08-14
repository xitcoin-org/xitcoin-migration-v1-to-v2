# Controlled legacy status repair

This utility is for the recovered migration-site baseline only. The original
application sources were not present on the production server, so the utility
creates a separate preview build from the preserved deployment output.

It keeps the historical interface and wallet migration flow intact. It changes
only the public status loader and related wording:

- status values are read server-side through Cronos JSON-RPC `eth_call` requests;
- the browser reads the same-origin `/api/migration-status` endpoint and never
  requests wallet access for public status;
- legacy XTC is described as sent to the designated dead address;
- display symbol is `XTC`.
- status refreshes automatically at page load, on a one-minute interval, and
  immediately after a confirmed migration transaction.
- a compact language selector is injected next to the wallet connection
  control; translations are maintained in `locales/migration-localization.js`.
  A locale is included in the selector only when it covers the complete
  recovered page-message catalog.
- the translation reference notice is displayed at the end of the page. The
  English version remains the reference in case of any discrepancy.

The utility refuses to overwrite an existing preview directory and verifies the
expected legacy loader before writing output. `tools/migration-status-server.mjs`
is the local preview server and the production-server reference; it exposes only
the public status endpoint and static files. It never submits a transaction,
requests an approval, or modifies the migration contract.
