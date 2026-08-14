#!/usr/bin/env node

import { createReadStream, existsSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, resolve } from 'node:path'

const port = Number(process.env.PORT || 5173)
const site = resolve(process.cwd(), 'site')
const rpcUrl = process.env.CRONOS_RPC_URL || 'https://evm.cronos.org'
const legacyToken = '0xDD646291D2fff52c75F27CCDAdD0D4C2A24f37Dd'
const designatedAddress = '0x000000000000000000000000000000000000dEaD'
const legacySupply = 21_000_000_000n
const mimeTypes = {
  '.css': 'text/css; charset=utf-8', '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.svg': 'image/svg+xml',
}

async function ethCall(data) {
  const response = await fetch(rpcUrl, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'eth_call', params: [{ to: legacyToken, data }, 'latest'] }),
    signal: AbortSignal.timeout(12_000),
  })
  const payload = await response.json()
  if (!response.ok || !payload.result) throw new Error(payload.error?.message || 'Cronos RPC response missing result')
  return payload.result
}

async function migrationStatus() {
  const address = designatedAddress.slice(2).padStart(64, '0')
  const [balanceHex, decimalsHex] = await Promise.all([
    ethCall(`0x70a08231${address}`),
    ethCall('0x313ce567'),
  ])
  const decimals = BigInt(decimalsHex)
  const scale = 10n ** decimals
  const balance = BigInt(balanceHex)
  const wholeTokens = balance / scale
  const progressBasisPoints = (balance * 1_000_000n) / (legacySupply * scale)
  return {
    total_sent: Number(wholeTokens),
    progress: Number(progressBasisPoints) / 10_000,
    updated_at: new Date().toISOString(),
  }
}

createServer(async (request, response) => {
  const path = new URL(request.url, `http://${request.headers.host}`).pathname
  if (request.method === 'GET' && path === '/api/migration-status') {
    try {
      response.writeHead(200, { 'cache-control': 'no-store', 'content-type': 'application/json; charset=utf-8' })
      response.end(`${JSON.stringify(await migrationStatus())}\n`)
    } catch (error) {
      response.writeHead(502, { 'cache-control': 'no-store', 'content-type': 'application/json; charset=utf-8' })
      response.end(`${JSON.stringify({ error: 'Migration status temporarily unavailable' })}\n`)
      console.error('[migration-status]', error instanceof Error ? error.message : error)
    }
    return
  }

  const requested = path === '/' ? 'index.html' : path.replace(/^\/+/, '')
  const file = resolve(site, requested)
  if (!file.startsWith(`${site}/`) || !existsSync(file)) {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
    response.end('Not found\n')
    return
  }
  response.writeHead(200, { 'content-type': mimeTypes[extname(file)] || 'application/octet-stream' })
  createReadStream(file).pipe(response)
}).listen(port, '127.0.0.1', () => {
  console.log(`[OK] Migration preview available at http://127.0.0.1:${port}`)
})
