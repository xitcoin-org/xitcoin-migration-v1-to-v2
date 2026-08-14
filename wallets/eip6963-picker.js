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
    if (announced.length) return announced

    if (window.ethereum?.request) {
      return [{
        provider: window.ethereum,
        info: {
          uuid: 'injected',
          name: window.ethereum.isRabby ? 'Rabby' : window.ethereum.isMetaMask ? 'MetaMask' : 'Browser wallet',
          rdns: 'injected',
        },
      }]
    }

    return []
  }

  function copy() {
    return messages[(document.documentElement.lang || 'en').split('-')[0]] || messages.en
  }

  function chooseProvider() {
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

        for (const item of items) {
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

          button.addEventListener('click', () => {
            window.__xitcoinSelectedProvider = item.provider
            localStorage.setItem(
              preferenceKey,
              JSON.stringify({ uuid: item.info.uuid, rdns: item.info.rdns }),
            )
            settleReady()
            overlay.remove()
            resolve(item.provider)
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

  window.__xitcoinSelectProvider = chooseProvider
})()
