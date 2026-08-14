import { CHAIN, CONTRACTS } from './config.js'

const SELECTORS = {
  balanceOf: '70a08231',
  decimals: '313ce567',
  totalSupply: '18160ddd',
}

function paddedAddress(address) {
  return address.toLowerCase().replace(/^0x/, '').padStart(64, '0')
}

async function rpc(method, params) {
  const response = await fetch(CHAIN.rpcUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
  })

  if (!response.ok) throw new Error(`RPC returned HTTP ${response.status}`)

  const payload = await response.json()
  if (payload.error) throw new Error(payload.error.message || 'RPC request failed')
  if (typeof payload.result !== 'string' || !payload.result.startsWith('0x')) {
    throw new Error('RPC returned an invalid value')
  }
  return BigInt(payload.result)
}

function call(address, data) {
  return rpc('eth_call', [{ to: address, data: `0x${data}` }, 'latest'])
}

export function formatUnits(value, decimals, maximumFractionDigits = 6) {
  const base = 10n ** BigInt(decimals)
  const whole = value / base
  const remainder = value % base
  const rawFraction = remainder.toString().padStart(decimals, '0')
  const fraction = rawFraction.slice(0, maximumFractionDigits).replace(/0+$/, '')
  return fraction ? `${whole.toLocaleString("en-US")}.${fraction}` : whole.toLocaleString("en-US")
}

export function formatPercent(part, total) {
  if (total === 0n) return '0.00%'
  const basisPoints = (part * 10_000n) / total
  const whole = basisPoints / 100n
  const fraction = (basisPoints % 100n).toString().padStart(2, '0')
  return `${whole}.${fraction}%`
}

export async function loadMigrationSnapshot() {
  const [legacyDecimals, currentDecimals] = await Promise.all([
    call(CONTRACTS.legacyXtc, SELECTORS.decimals),
    call(CONTRACTS.currentXtc, SELECTORS.decimals),
  ])

  const [sentToDesignatedAddress, legacySupply, currentReserve] = await Promise.all([
    call(CONTRACTS.legacyXtc, `${SELECTORS.balanceOf}${paddedAddress(CONTRACTS.designatedAddress)}`),
    call(CONTRACTS.legacyXtc, SELECTORS.totalSupply),
    call(CONTRACTS.currentXtc, `${SELECTORS.balanceOf}${paddedAddress(CONTRACTS.migration)}`),
  ])

  return {
    legacyDecimals: Number(legacyDecimals),
    currentDecimals: Number(currentDecimals),
    sentToDesignatedAddress,
    legacySupply,
    currentReserve,
  }
}
