import chalk from 'chalk'
import Common, { Chain } from '@ethereumjs/common'
import { DPT } from '@ethereumjs/devp2p'

const PRIVATE_KEY = 'd772e3d6a001a38064dd23964dd2836239fa0e6cec8b28972a87460a17210fe9'

const config = new Common({ chain: Chain.Mainnet })
const bootstrapNodes = config.bootstrapNodes()
const BOOTNODES = bootstrapNodes.map((node) => {
  return {
    address: node.ip,
    udpPort: typeof node.port === 'string' ? parseInt(node.port) : node.port,
    tcpPort: typeof node.port === 'string' ? parseInt(node.port) : node.port
  }
})

const dpt = new DPT(Buffer.from(PRIVATE_KEY, 'hex'), {
  endpoint: {
    address: '0.0.0.0',
    udpPort: null,
    tcpPort: null
  }
})

/* eslint-disable no-console */
dpt.on('error', (_err) => {})

dpt.on('peer:added', (peer) => {
  const info = `(${peer.id.toString('hex')},${peer.address},${peer.udpPort},${peer.tcpPort})`
  console.log(chalk.green(`New peer: ${info} (total: ${dpt.getPeers().length})`))
})

dpt.on('peer:removed', (peer) => {
  console.log(
    chalk.yellow(`Remove peer: ${peer.id.toString('hex')} (total: ${dpt.getPeers().length})`)
  )
})

// for accept incoming connections uncomment next line
// dpt.bind(30303, '0.0.0.0')

for (const bootnode of BOOTNODES) {
  dpt.bootstrap(bootnode).catch((err) => console.error(chalk.bold.red(err.stack || err)))
}
