#!/usr/bin/env node

import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const baseline = resolve(root, 'legacy-deployment/dist')
const output = resolve(root, 'site')
const bundle = 'assets/index-DqekdNqy.js'
const localization = resolve(root, 'locales/migration-localization.js')

if (!existsSync(resolve(baseline, bundle))) {
  throw new Error(`Legacy bundle not found: ${resolve(baseline, bundle)}`)
}

if (!existsSync(localization)) {
  throw new Error(`Localization source not found: ${localization}`)
}

if (existsSync(output)) {
  throw new Error(`Refusing to overwrite existing preview output: ${output}`)
}

const originalLoader = 'd=async()=>{l(!0);const m=`https://cronos.org/explorer/api?module=account&action=tokenbalance&contractaddress=${Q4}&address=${G4}`;await fetch(m);const y=await M4();if(y){const E=y;e(E),s(E/V4*100),f(new Date)}l(!1)}'
const replacementLoader = 'd=async()=>{l(!0);try{const m=await fetch("/api/migration-status",{cache:"no-store"}),y=await m.json();if(!m.ok)throw new Error(y.error||"Migration status unavailable");e(y.total_sent),s(y.progress),f(new Date)}catch(m){console.error("Failed to load migration status:",m),e(null),s(null)}finally{l(!1)}}'
const misplacedRefreshControl = 'absolute bottom-4 right-4 w-7 h-7 rounded-lg border border-white/8 bg-white/[.03] flex items-center justify-center text-white/30 hover:text-[#FB8D00] hover:border-[rgba(251,141,0,.35)] transition-all'
const alignedRefreshControl = 'absolute top-4 right-16 w-7 h-7 rounded-lg border border-white/8 bg-white/[.03] flex items-center justify-center text-white/30 hover:text-[#FB8D00] hover:border-[rgba(251,141,0,.35)] transition-all'
const originalAutoRefresh = 'P.useEffect(()=>{d();const m=setInterval(d,6e4);return()=>clearInterval(m)},[])'
const replacementAutoRefresh = 'P.useEffect(()=>{d();const m=setInterval(d,6e4),y=()=>d();return window.addEventListener("xitcoin:migration-confirmed",y),()=>{clearInterval(m),window.removeEventListener("xitcoin:migration-confirmed",y)}},[])'
const completedMigration = 'const U=await z4(e);n('
const completedMigrationReplacement = 'const U=await z4(e);window.dispatchEvent(new Event("xitcoin:migration-confirmed")),n('

let source = readFileSync(resolve(baseline, bundle), 'utf8')
if (!source.includes(originalLoader)) {
  throw new Error('Unexpected legacy bundle: the known status loader was not found')
}

source = source.replace(originalLoader, replacementLoader)
if (!source.includes(misplacedRefreshControl)) {
  throw new Error('Unexpected legacy bundle: the known refresh control was not found')
}
source = source.replace(misplacedRefreshControl, alignedRefreshControl)
source = source.replace(alignedRefreshControl, 'hidden')
if (!source.includes(originalAutoRefresh) || !source.includes(completedMigration)) {
  throw new Error('Unexpected legacy bundle: automatic status refresh anchors were not found')
}
source = source.replace(originalAutoRefresh, replacementAutoRefresh)
source = source.replace(completedMigration, completedMigrationReplacement)

for (const [from, to] of [
  ['permanently burned', 'sent'],
  [' and sent to the ', ' to the designated '],
  ['after the burn is confirmed on-chain', 'after the transaction is confirmed on-chain'],
  ['All burn transactions can be verified on the', 'All migration transactions can be verified on the'],
  ['Old XTC tokens will be sent. You will receive new XTC tokens only after the old tokens are confirmed burned.', 'Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.'],
  ['. Old XTC tokens will be sent. You will receive new XTC tokens only after the old tokens are confirmed burned.', '. Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.'],
  ['Old XTC tokens will be permanently burned. You will receive new $XTC tokens only after the old tokens are confirmed burned.', 'Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.'],
  ['XTC sent to burn address', 'Legacy XTC sent to the designated dead address'],
  ['Total Burned', 'Total legacy XTC sent'],
  ['$XTC', 'XTC'],
]) {
  source = source.split(from).join(to)
}

for (const [from, to] of [
  [
    'This migration is irreversible. Old XTC tokens will be permanently burned. You will receive new XTC tokens only after the old tokens are confirmed burned.',
    'This migration is irreversible. Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.',
  ],
  [
    'This migration is irreversible. Old XTC tokens will be sent. You will receive new XTC tokens only after the old tokens are confirmed burned.',
    'This migration is irreversible. Old XTC is sent to the designated dead address. You receive XTC after the transaction is confirmed on-chain.',
  ],
  [
    'Old XTC tokens are sent and sent to the',
    'Old XTC tokens are sent to the',
  ],
]) {
  source = source.split(from).join(to)
}

if (source.includes('cronos.org/explorer/api?module=account')) {
  throw new Error('Legacy explorer request remains after patch')
}

cpSync(baseline, output, { recursive: true })
writeFileSync(resolve(output, bundle), source)
const index = readFileSync(resolve(output, 'index.html'), 'utf8')
if (!index.includes('</head>') || index.includes('xitcoin-localization.js')) {
  throw new Error('Unexpected legacy index: localization injection point unavailable')
}
writeFileSync(
  resolve(output, 'index.html'),
  index.replace('</head>', '    <script defer src="/assets/xitcoin-localization.js"></script>\n  </head>'),
)
cpSync(localization, resolve(output, 'assets/xitcoin-localization.js'))
writeFileSync(resolve(output, 'BUILD-METADATA.json'), JSON.stringify({
  generated_at: new Date().toISOString(),
  source: 'legacy-deployment/dist',
  status_data: 'Cronos JSON-RPC eth_call',
  languages: ['en', 'fr', 'es', 'de', 'pt', 'zh', 'ja', 'ar'],
}, null, 2) + '\n')

console.log(`[OK] Preview build created: ${output}`)
console.log('[OK] Existing design and wallet migration flow retained')
