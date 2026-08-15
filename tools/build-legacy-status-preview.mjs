#!/usr/bin/env node
import { createHash } from 'node:crypto'

import { cpSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const baseline = resolve(root, 'legacy-deployment/dist')
const output = resolve(root, 'site')
const bundle = 'assets/index-DqekdNqy.js'
const localization = resolve(root, 'locales/migration-localization.js')
const walletPicker = resolve(root, 'wallets/eip6963-picker.js')
const walletConnectBridge = resolve(root, 'wallets/walletconnect-bridge.js')
const walletConnectBundle = resolve(root, 'wallets/xitcoin-walletconnect-provider.js')

if (!existsSync(resolve(baseline, bundle))) {
  throw new Error(`Legacy bundle not found: ${resolve(baseline, bundle)}`)
}

if (!existsSync(localization)) {
  throw new Error(`Localization source not found: ${localization}`)
}

if (!existsSync(walletPicker)) {
  throw new Error(`Wallet picker source not found: ${walletPicker}`)
}

if (!existsSync(walletConnectBridge) || !existsSync(walletConnectBundle)) {
  throw new Error('WalletConnect assets are missing')
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

const walletButtonGapBefore = 'justify-center gap-0 min-w-[150px] px-1.5 sm:gap-2 sm:px-4'
const walletButtonGapAfter = 'justify-center gap-2 min-w-[150px] px-4'

if (!source.includes(walletButtonGapBefore)) {
  throw new Error('Style du bouton portefeuille introuvable')
}
source = source.replace(walletButtonGapBefore, walletButtonGapAfter)

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

const connectHeader = 'async function OI(){if(!window.ethereum)throw new Error("MetaMask not installed");const n=new lu(window.ethereum);'
const connectHeaderFixed = 'async function OI(){const r=await window.__xitcoinSelectProvider();if(!r)throw new Error("No EVM wallet available");const n=new lu(r);'
const reconnectHeader = 'async function II(){if(!window.ethereum)return null;const n=new lu(window.ethereum),e='
const reconnectHeaderFixed = 'async function II(){await (window.__xitcoinProviderReady||Promise.resolve());const r=window.__xitcoinSelectedProvider||window.ethereum;if(!r)return null;const n=new lu(r),e='
const signerRead = 'const t=await n.getSigner(),s=await t.getAddress();return{provider:n,signer:t,address:s,chainId:C1}'
const signerReadFixed = 'const t=(await n.send("eth_accounts",[]))[0];if(!t)throw new Error("No wallet account available");const s=await n.getSigner(t);return{provider:n,signer:s,address:t,chainId:C1}'
const switchRequest = 'await window.ethereum.request({method:"wallet_switchEthereumChain"'
const switchRequestFixed = 'await (window.__xitcoinSelectedProvider||window.ethereum).request({method:"wallet_switchEthereumChain"'

for (const marker of [connectHeader, reconnectHeader, signerRead, switchRequest]) {
  if (!source.includes(marker)) {
    throw new Error(`Wallet source marker not found: ${marker.slice(0, 36)}`)
  }
}

source = source.replace(connectHeader, connectHeaderFixed)
source = source.replace(reconnectHeader, reconnectHeaderFixed)
source = source.replace(signerRead, signerReadFixed)
source = source.replace(switchRequest, switchRequestFixed)



const tooltipLayoutBefore = 'max-w-[280px] bg-[#0b0b10] border !border-white/10 text-white/80 text-xs overflow-scroll'
const tooltipLayoutAfter = 'w-[min(92vw,420px)] max-w-[420px] max-h-[min(70vh,280px)] bg-[#0b0b10] border !border-white/10 text-white/80 text-xs overflow-x-hidden overflow-y-auto shadow-[0_20px_50px_rgba(0,0,0,.45)]'

if (!source.includes(tooltipLayoutBefore)) {
  throw new Error('Tooltip layout marker not found')
}

source = source.replace(tooltipLayoutBefore, tooltipLayoutAfter)
source = source.replace(
  'className:"text-[#ffaa33] underline"',
  'className:"text-[#ffaa33] underline break-all"'
)

const disconnectState = 'f=()=>{s(null),l(!1),localStorage.removeItem("walletConnected")}'
const disconnectStateFixed = 'f=()=>{window.dispatchEvent(new Event("xitcoin:wallet-disconnect")),s(null),l(!1),localStorage.removeItem("walletConnected")}'
if (!source.includes(disconnectState)) {
  throw new Error('Déconnexion wallet introuvable')
}
source = source.replace(disconnectState, disconnectStateFixed)

if (source.includes('cronos.org/explorer/api?module=account')) {
  throw new Error('Legacy explorer request remains after patch')
}

cpSync(baseline, output, { recursive: true })
writeFileSync(resolve(output, bundle), source)
const appBundleVersion = createHash('sha256')
  .update(source)
  .digest('hex')
  .slice(0, 12)
const walletConnectBridgeSource = readFileSync(walletConnectBridge, 'utf8')
const walletConnectBundleSource = readFileSync(walletConnectBundle, 'utf8')
const walletConnectBridgeVersion = createHash('sha256').update(walletConnectBridgeSource).digest('hex').slice(0, 12)
const walletConnectBundleVersion = createHash('sha256').update(walletConnectBundleSource).digest('hex').slice(0, 12)
const localizationSource = readFileSync(localization, 'utf8')
const walletPickerSource = readFileSync(walletPicker, 'utf8')
const walletPickerVersion = createHash('sha256')
  .update(walletPickerSource)
  .digest('hex')
  .slice(0, 12)

const localizationVersion = createHash('sha256')
  .update(localizationSource)
  .digest('hex')
  .slice(0, 12)

const index = readFileSync(resolve(output, 'index.html'), 'utf8')
if (!index.includes('</head>') || index.includes('xitcoin-localization.js')) {
  throw new Error('Unexpected legacy index: localization injection point unavailable')
}
writeFileSync(
  resolve(output, 'index.html'),
  index.replace(`/${bundle}`, `/${bundle}?v=${appBundleVersion}`).replace('</head>', `    <script>window.__xitcoinWalletConnectAsset="/assets/xitcoin-walletconnect-provider.js?v=${walletConnectBundleVersion}"</script>\n    <script src="/assets/xitcoin-walletconnect-bridge.js?v=${walletConnectBridgeVersion}"></script>\n    <script src="/assets/xitcoin-wallet-picker.js?v=${walletPickerVersion}"></script>\n    <script defer src="/assets/xitcoin-localization.js?v=${localizationVersion}"></script>\n  </head>`),
)
writeFileSync(resolve(output, 'assets/xitcoin-localization.js'), localizationSource)
writeFileSync(resolve(output, 'assets/xitcoin-wallet-picker.js'), walletPickerSource)
writeFileSync(resolve(output, 'assets/xitcoin-walletconnect-bridge.js'), walletConnectBridgeSource)
writeFileSync(resolve(output, 'assets/xitcoin-walletconnect-provider.js'), walletConnectBundleSource)
writeFileSync(resolve(output, 'BUILD-METADATA.json'), JSON.stringify({
  generated_at: new Date().toISOString(),
  source: 'legacy-deployment/dist',
  status_data: 'Cronos JSON-RPC eth_call',
  languages: ['en', 'fr', 'es', 'de', 'pt', 'zh', 'ja', 'ar'],
}, null, 2) + '\n')

console.log(`[OK] Preview build created: ${output}`)
console.log('[OK] Existing design and wallet migration flow retained')
