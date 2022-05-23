# hello-eth

Simple "Hello, world!" like ethereum related experiments. 


## Contents

__Note__: Projects in this repo are mostly for learning and experimentation, you probably won't see tests, errors being catched, or production ready code, just whatever is needed for me to test the library/tool/etc at hand.

Content is organized in the following way:
- solidity --> noteworthy simple solidity experiments, tutorials with minimal setup
- dapps --> webapps that interact with the ethereum blockchain in some way
- scripts --> random scripts

### Solidity

| Contract  | Description |
| ------------- | ------------- |
| greeter-truffle | Basic greeter contract with truffle devenv and test suite. |
| greeter-hardhat | Basic greeter contract with hardhat devenv and test suite. |
| cryptozombies | My progress on building a zombie army: https://cryptozombies.io/ |
| 500k-mistake | Some dude burnt 500k by transfering WETH tokens to the WETH smart contract. This is my attempt at replicating the mistake and testing a potential fix. |
| suicide | Test balance movements after contract self-destruct (hardhat). |

### Dapps

| Dapp  | Description |
| ------------- | ------------- |
| chain-data  | Simple app that displays basic chain information. Connects to various clients with a few web3 libraries: <ul><li>libraries: web3.js/ethers</li><li>clients: web3, truffle develop, ganache, infura, local node</li>  |

### Scripts

| Script | Description |
| ------------- | ------------- |
| peers.ts | Connect to bootstrap nodes using devp2p protocol and log all peers that we see. Source: https://github.com/ethereumjs/ethereumjs-monorepo/tree/master/packages/devp2p |
| createWallet.ts | Creates a wallet, prints private key to console. |
| message.ts | Store a message in the data field of a transaction. |
| codeHash.ts | Get creationCodeHash and runtimeCodeHash for a given contract creation transaction. |

