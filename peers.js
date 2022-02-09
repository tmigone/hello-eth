// const rpc = require('ethrpc')
// const connectionConfiguration = {
//   httpAddresses: ['http://192.168.2.4:8545'], // optional, default empty array
//   wsAddresses: [], // optional, default empty array
//   ipcAddresses: [] // optional, default empty array
// }
// rpc.connect(connectionConfiguration, function (err) {
//   if (err) {
//     console.error('Failed to connect to Ethereum node.')
//     console.log(err)
//   } else {
//     console.log('Connected to Ethereum node!')
//     rpc.raw('admin_peers', undefined, (a, b) => {
//       console.log(a)
//       console.log(b)
//     })
//     console.log(rpc.net.peerCount())
//   }
// })

const Web3 = require('web3')
const web3 = new Web3('http://192.168.2.4:8545')

web3.currentProvider.send({
  method: 'admin_peers',
  params: [],
  jsonrpc: '2.0',
  id: new Date().getTime()
}, function (error, result) {
  if (error) {
    console.log(error)
  } else {
    const peers = result.result.map(r => r.network).map(n => n.remoteAddress).map(p => p.split(':')[0])
    console.log(peers)
    for (const peer of peers) {
      const w3 = new Web3(`http://${peer}:8545`)
      w3.currentProvider.send({
        method: 'admin_peers',
        params: [],
        jsonrpc: '2.0',
        id: new Date().getTime()
      }, function (error, result) {
        if (error) {
          console.log(error)
        } else {
          const peers = result.result.map(r => r.network).map(n => n.remoteAddress).map(p => p.split(':')[0])
          console.log(peers)
        }
      })
    }
  }
})

setTimeout(() => {}, 3000)
