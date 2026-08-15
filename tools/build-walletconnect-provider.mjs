#!/usr/bin/env node
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const esbuild = resolve(root, 'wallets/vendor/node_modules/.bin/esbuild')
const entry = resolve(root, 'wallets/vendor/walletconnect-provider-entry.mjs')
const output = resolve(root, 'wallets/xitcoin-walletconnect-provider.js')

if (!existsSync(esbuild) || !existsSync(entry)) {
  throw new Error('WalletConnect build dependencies are unavailable')
}

execFileSync(esbuild, [
  entry,
  '--bundle',
  '--format=iife',
  '--platform=browser',
  '--target=es2020',
  '--minify',
  '--legal-comments=none',
  '--outfile=' + output,
], { stdio: 'inherit' })
