import { ethers } from "ethers";

const wallet = ethers.Wallet.createRandom()
console.log(`Address: ${wallet.address}`);
console.log(`Private key: ${wallet.privateKey}`);
console.log(`Mnemonic: ${wallet.mnemonic}`);