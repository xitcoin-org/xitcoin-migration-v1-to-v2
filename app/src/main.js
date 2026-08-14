import './style.css'
import { CHAIN, CONTRACTS } from './config.js'
import { formatPercent, formatUnits, loadMigrationSnapshot } from './onchain.js'

const app = document.querySelector('#app')

function explorer(address) {
  return `${CHAIN.explorerUrl}/address/${address}`
}

function renderLoading() {
  app.innerHTML = `
    <main class="shell">
      <header class="header"><a class="brand" href="https://xitcoin.org/">Xitcoin</a></header>
      <section class="hero"><p class="eyebrow">Cronos</p><h1>Legacy XTC migration</h1><p>Retrieving public on-chain status…</p></section>
    </main>`
}

function renderError(error) {
  app.innerHTML = `
    <main class="shell">
      <header class="header"><a class="brand" href="https://xitcoin.org/">Xitcoin</a></header>
      <section class="hero"><p class="eyebrow">Cronos</p><h1>Legacy XTC migration</h1>
        <div class="notice error"><strong>On-chain status is temporarily unavailable.</strong><span>${error.message}</span></div>
        <button class="button" id="retry">Retry status check</button>
      </section>
    </main>`
  document.querySelector('#retry').addEventListener('click', refresh)
}

function render(snapshot) {
  const sent = formatUnits(snapshot.sentToDesignatedAddress, snapshot.legacyDecimals, 8)
  const supply = formatUnits(snapshot.legacySupply, snapshot.legacyDecimals, 8)
  const reserve = formatUnits(snapshot.currentReserve, snapshot.currentDecimals, 8)
  const progress = formatPercent(snapshot.sentToDesignatedAddress, snapshot.legacySupply)

  app.innerHTML = `
    <main class="shell">
      <header class="header">
        <a class="brand" href="https://xitcoin.org/">Xitcoin</a>
        <a class="subtle-link" href="${explorer(CONTRACTS.migration)}" target="_blank" rel="noreferrer">View migration contract</a>
      </header>

      <section class="hero">
        <p class="eyebrow">Cronos · one-way migration</p>
        <h1>Migration from legacy XTC to XTC</h1>
        <p class="lead">Legacy XTC submitted through the migration contract is sent to the designated dead address. The corresponding XTC is transferred from the contract’s pre-funded balance.</p>
      </section>

      <section class="metrics" aria-label="On-chain migration status">
        <article class="metric"><span>Total legacy XTC sent to the designated dead address</span><strong>${sent} XTC</strong><a href="${explorer(CONTRACTS.designatedAddress)}" target="_blank" rel="noreferrer">View designated address</a></article>
        <article class="metric"><span>Migration progress</span><strong>${progress}</strong><small>Calculated from live legacy XTC supply</small></article>
        <article class="metric"><span>Current XTC reserve</span><strong>${reserve} XTC</strong><a href="${explorer(CONTRACTS.migration)}" target="_blank" rel="noreferrer">View contract balance</a></article>
      </section>

      <section class="details">
        <h2>Migration reference</h2>
        <dl>
          <div><dt>Legacy XTC</dt><dd>${CONTRACTS.legacyXtc}</dd></div>
          <div><dt>Current XTC</dt><dd>${CONTRACTS.currentXtc}</dd></div>
          <div><dt>Migration contract</dt><dd>${CONTRACTS.migration}</dd></div>
        </dl>
        <button class="button secondary" id="refresh">Refresh on-chain status</button>
      </section>
    </main>`
  document.querySelector('#refresh').addEventListener('click', refresh)
}

async function refresh() {
  renderLoading()
  try {
    render(await loadMigrationSnapshot())
  } catch (error) {
    renderError(error)
  }
}

refresh()
