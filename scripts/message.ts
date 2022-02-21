import dotenv from "dotenv"
import { ethers } from "ethers";

const MESSAGE = "Hello, world! Storing this in the blockchain forever!";

(async () => {
  dotenv.config()

  const provider = new ethers.providers.InfuraProvider('ropsten', process.env.ROPSTEN_INFURA_KEY!); // Add .env file with ROPSTEN_INFURA_KEY
  let wallet = new ethers.Wallet(process.env.ROPSTEN_PRIVATE_KEY!)  // Add .env file with ROPSTEN_PRIVATE_KEY
  wallet = wallet.connect(provider)

  const address = await wallet.getAddress();
  const balance = await wallet.getBalance();

  console.log(`Message: ${MESSAGE}`);
  console.log(`Address: ${address}`);
  console.log(`Balance: ${ethers.utils.formatEther(balance)} Ether`);
  
  const tx = {
    to: ethers.constants.AddressZero,
    data: ethers.utils.hexlify(ethers.utils.toUtf8Bytes(MESSAGE))
  }
  const gasEstimate = await provider.estimateGas(tx)
  console.log(`Gas estimate: ${ethers.utils.formatEther(gasEstimate)} Ether`);

  if (balance.gte(gasEstimate.mul(110).div(100))) {
    const receipt = await wallet.sendTransaction(tx)
    console.log(`Tx hash: ${receipt.hash}`);
    console.log(`See tx: https://ropsten.etherscan.io/tx/${receipt.hash}`);
  } else {
    console.log('Insufficient balance.');
  }
})()

