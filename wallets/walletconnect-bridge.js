(() => {
  let provider = null
  let loading = null

  function loadProviderFactory() {
    if (window.__xitcoinCreateWalletConnectProvider) {
      return Promise.resolve(window.__xitcoinCreateWalletConnectProvider)
    }

    if (loading) return loading

    loading = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = window.__xitcoinWalletConnectAsset || '/assets/xitcoin-walletconnect-provider.js'
      script.async = true
      script.onload = () => {
        if (window.__xitcoinCreateWalletConnectProvider) {
          resolve(window.__xitcoinCreateWalletConnectProvider)
        } else {
          reject(new Error('WalletConnect provider failed to initialize'))
        }
      }
      script.onerror = () => reject(new Error('WalletConnect provider could not be loaded'))
      document.head.append(script)
    })

    return loading
  }

  window.__xitcoinConnectWalletConnect = async () => {
    const createProvider = await loadProviderFactory()
    if (!provider) provider = await createProvider()
    if (!provider.session) await provider.connect()
    return provider
  }

  window.addEventListener('xitcoin:wallet-disconnect', () => {
    const active = provider
    provider = null
    loading = null
    if (active?.session) active.disconnect().catch(() => {})
  })
})()


// xitcoin-close-picker-before-walletconnect
{
  const originalConnect = window.__xitcoinConnectWalletConnect
  window.__xitcoinConnectWalletConnect = async (...args) => {
    document.querySelectorAll('[role="dialog"]').forEach((dialog) => dialog.remove())

    document
      .getElementById('xitcoin-mobile-menu-drawer')
      ?.classList.remove('is-open')

    document
      .getElementById('xitcoin-mobile-menu-overlay')
      ?.classList.remove('is-open')

    document
      .getElementById('xitcoin-mobile-menu-toggle')
      ?.setAttribute('aria-expanded', 'false')

    return originalConnect(...args)
  }
}
