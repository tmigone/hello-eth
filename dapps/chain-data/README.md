# hello-eth > chain-data

Simple app that displays basic chain information. Connects to various clients with a few web3 libraries:
- libraries: web3.js/ethers
- clients: web3, truffle develop, ganache, infura, local node

## Usage

Install dependencies with `npm run install`, then build with `npm run build` or run in development with `npm run dev`.

**Client setup**

You'll need to setup and start each client individually:
- web3 --> requires installing MetaMask on your browser
- truffle develop --> requires installing truffle and running `truffle develop`
- ganache --> requires installing ganache and starting a blockchain
- infura --> requires creating account, project and setting `VITE_INFURA_ENDPOINT` in `.env` (see `.env.example`).
- local node --> requires running a local node and setting `VITE_LOCAL_NODE_ENDPOINT` in `.env` (see `.env.example`).


