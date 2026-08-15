(() => {
  const providers = new Map()
  const preferenceKey = 'xitcoin.wallet.provider'
  const messages = {
    en: { title: 'Choose a wallet', description: 'Select the wallet you want to use for this migration.', cancel: 'Cancel' },
    fr: { title: 'Choisir un portefeuille', description: 'Sélectionnez le portefeuille à utiliser pour cette migration.', cancel: 'Annuler' },
    es: { title: 'Elegir una cartera', description: 'Seleccione la cartera que desea utilizar para esta migración.', cancel: 'Cancelar' },
    pt: { title: 'Escolher uma carteira', description: 'Selecione a carteira que deseja usar nesta migração.', cancel: 'Cancelar' },
    de: { title: 'Wallet auswählen', description: 'Wählen Sie die Wallet aus, die Sie für diese Migration verwenden möchten.', cancel: 'Abbrechen' },
    zh: { title: '选择钱包', description: '请选择要用于此次迁移的钱包。', cancel: '取消' },
    ja: { title: 'ウォレットを選択', description: 'この移行に使用するウォレットを選択してください。', cancel: 'キャンセル' },
    ar: { title: 'اختر محفظة', description: 'اختر المحفظة التي تريد استخدامها لهذه الترحيل.', cancel: 'إلغاء' },
  }

  let resolveReady
  let ready = false

  window.__xitcoinProviderReady = new Promise((resolve) => {
    resolveReady = resolve
  })

  function settleReady() {
    if (!ready) {
      ready = true
      resolveReady()
    }
  }

  function savedPreference() {
    try {
      return JSON.parse(localStorage.getItem(preferenceKey) || 'null')
    } catch {
      return null
    }
  }

  function register(detail) {
    if (!detail?.provider?.request || !detail?.info?.uuid) return

    providers.set(detail.info.uuid, detail)

    const saved = savedPreference()
    if (
      saved &&
      (saved.uuid === detail.info.uuid || saved.rdns === detail.info.rdns)
    ) {
      window.__xitcoinSelectedProvider = detail.provider
    }
  }

  window.addEventListener('eip6963:announceProvider', (event) => register(event.detail))
  window.dispatchEvent(new Event('eip6963:requestProvider'))
  window.setTimeout(settleReady, 350)

  function candidates() {
    const announced = [...providers.values()]
    const items = announced.length
      ? announced
      : window.ethereum?.request
        ? [{
            provider: window.ethereum,
            info: {
              uuid: 'injected',
              name: window.ethereum.isRabby ? 'Rabby' : window.ethereum.isMetaMask ? 'MetaMask' : 'Browser wallet',
              rdns: 'injected',
            },
          }]
        : []

    if (typeof window.__xitcoinConnectWalletConnect === 'function') {
      items.push({
        provider: null,
        info: {
          uuid: 'walletconnect',
          name: 'WalletConnect',
          rdns: 'walletconnect',
        },
      })
    }

    return items
  }

  function copy() {
    return messages[(document.documentElement.lang || 'en').split('-')[0]] || messages.en
  }

  // xitcoin-mobile-walletconnect-direct
  function chooseProvider() {
    if (!window.ethereum?.request && typeof window.__xitcoinConnectWalletConnect === 'function') {
      return window.__xitcoinConnectWalletConnect()
    }
    return new Promise((resolve, reject) => {
      window.dispatchEvent(new Event('eip6963:requestProvider'))

      window.setTimeout(() => {
        const items = candidates()

        if (!items.length) {
          reject(new Error('No EVM wallet detected'))
          return
        }

        const text = copy()
        const overlay = document.createElement('div')
        overlay.setAttribute('role', 'dialog')
        overlay.setAttribute('aria-modal', 'true')
        overlay.style.cssText =
          'position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;padding:20px;background:rgba(0,0,0,.64)'

        const panel = document.createElement('div')
        panel.dir = (document.documentElement.dir || 'ltr')
        panel.style.cssText =
          'width:min(100%,390px);border:1px solid rgba(255,255,255,.14);border-radius:18px;padding:18px;background:#0b0b10;color:#fff;box-shadow:0 24px 80px rgba(0,0,0,.55);font-family:Inter,system-ui,sans-serif'

        const title = document.createElement('h2')
        title.textContent = text.title
        title.style.cssText = 'margin:0 0 8px;font-size:18px'

        const description = document.createElement('p')
        description.textContent = text.description
        description.style.cssText = 'margin:0 0 16px;color:rgba(255,255,255,.62);font-size:14px;line-height:1.45'

        const list = document.createElement('div')
        list.style.cssText = 'display:grid;gap:10px'


// xitcoin-walletconnect-icon
const walletConnectIcon = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#3B99FC"/><path fill="#fff" d="M10 14.5c5.5-5.3 14.5-5.3 20 0l1.2 1.2-2.2 2.2-1.2-1.2c-4.3-4.1-11.3-4.1-15.6 0L11 17.9l-2.2-2.2 1.2-1.2Zm15.4 5.4 2.2 2.2-5.4 5.2a3.1 3.1 0 0 1-4.4 0l-5.4-5.2 2.2-2.2 5.4 5.2 5.4-5.2Z"/></svg>',
)

for (const item of items) {
    if (item.info.uuid === 'walletconnect' && !item.info.icon) item.info.icon = walletConnectIcon
          const button = document.createElement('button')
          button.type = 'button'
          button.style.cssText =
            'display:flex;align-items:center;gap:12px;width:100%;min-height:52px;padding:0 14px;border:1px solid rgba(251,141,0,.55);border-radius:14px;background:rgba(255,255,255,.03);color:#fff;font:700 14px system-ui;text-align:left;cursor:pointer'

          if (item.info.icon) {
            const icon = document.createElement('img')
            icon.src = item.info.icon
            icon.alt = ''
            icon.width = 28
            icon.height = 28
            icon.style.cssText = 'width:28px;height:28px;border-radius:7px;object-fit:contain'
            icon.addEventListener('error', () => icon.remove())
            button.append(icon)
          }

          const label = document.createElement('span')
          label.textContent = item.info.name
          button.append(label)

          button.addEventListener('click', async () => {
            try {
              const selectedProvider = item.info.uuid === 'walletconnect'
                ? await window.__xitcoinConnectWalletConnect()
                : item.provider

              if (!selectedProvider?.request) {
                throw new Error('Selected wallet is unavailable')
              }

              window.__xitcoinSelectedProvider = selectedProvider
              localStorage.setItem(
                preferenceKey,
                JSON.stringify({ uuid: item.info.uuid, rdns: item.info.rdns }),
              )
              settleReady()
              overlay.remove()
              resolve(selectedProvider)
            } catch (error) {
              overlay.remove()
              reject(error)
            }
          })

          list.append(button)
        }

        const cancel = document.createElement('button')
        cancel.type = 'button'
        cancel.textContent = text.cancel
        cancel.style.cssText =
          'margin-top:12px;width:100%;min-height:42px;border:0;background:transparent;color:rgba(255,255,255,.62);font:600 14px system-ui;cursor:pointer'
        cancel.addEventListener('click', () => {
          overlay.remove()
          reject(new Error('Wallet selection cancelled'))
        })

        panel.append(title, description, list, cancel)
        overlay.append(panel)
        document.body.append(overlay)
      }, 250)
    })
  }

  window.__xitcoinClearProviderPreference = () => {
    window.__xitcoinSelectedProvider = null
    localStorage.removeItem(preferenceKey)
  }

  window.addEventListener('xitcoin:wallet-disconnect', () => {
    window.__xitcoinClearProviderPreference()
  })

  window.__xitcoinSelectProvider = chooseProvider
})()
