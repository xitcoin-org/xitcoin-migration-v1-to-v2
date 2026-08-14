# Operations guide

## Public availability check

Run from any workstation with network access:

```bash
curl -4fsSIL --connect-timeout 8 --max-time 15 \
  https://migration.xitcoin.org/
```

An HTTP success response confirms that the public entry point answered. It does
not validate wallet interaction or contract behaviour.

## Origin check

Run on the production server as an authorized operator:

```bash
curl -fsS --connect-timeout 5 --max-time 10 \
  http://127.0.0.1:4222/ >/dev/null

ss -ltnp | grep ':4222'
```

These commands are read-only. They verify the local static-site process and its
loopback listener.

## Release discipline

1. Create a feature branch.
2. Run the project validation commands.
3. Open a pull request with Summary, Validation and Scope sections.
4. Review the generated static build.
5. Create a timestamped backup of the active deployment.
6. Deploy through a reviewed, reversible procedure.
7. Repeat the public and origin checks.

## Security

- Never place wallet secrets, private keys, API keys or production credentials
  in Git.
- Do not deploy directly from `legacy-deployment/`.
- Do not modify the migration contract as part of website maintenance.
