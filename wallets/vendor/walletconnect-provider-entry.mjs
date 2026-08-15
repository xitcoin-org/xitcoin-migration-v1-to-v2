import EthereumProvider from '@walletconnect/ethereum-provider'

const projectId = '00cc75e5d50cd59d6250bec5bedf7e00'

const metadata = {
  name: 'Xitcoin Migration V1 to V2',
  description: 'Official Xitcoin V1 to V2 migration interface',
  url: 'https://migration.xitcoin.org',
  icons: ['https://migration.xitcoin.org/assets/old-xitcoin-CoHQrge-.png'],
}

window.__xitcoinCreateWalletConnectProvider = async () => {
  return EthereumProvider.init({
    projectId,
    chains: [25],
    optionalChains: [25],
    rpcMap: { 25: 'https://evm.cronos.org' },
    showQrModal: true,
    metadata,
  })
}
