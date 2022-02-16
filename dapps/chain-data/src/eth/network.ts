import Web3 from "web3/dist/web3.min.js";
import { ethers } from "ethers";
import type { Chain } from "./types";

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Görli = 5,
  Kovan = 42,
  Local = 1337,
}

export enum Web3Lib {
  Web3js = "Web3.js",
  Ethers = "ethers",
}

export async function getChainInfo(
  provider: any,
  library: Web3Lib
): Promise<Chain> {
  let chainInfo: Chain = {} as Chain;

  if (library === Web3Lib.Web3js) {
    const web3 = new Web3(provider);
    const id = await web3.eth.getChainId();

    chainInfo = {
      id,
      name: ChainId[id],
      nodeInfo: await web3.eth.getNodeInfo(),
      isSyncing: (await web3.eth.isSyncing()) as boolean,
      isMining: await web3.eth.isMining(),
      blockNumber: await web3.eth.getBlockNumber(),
      gasPrice: await web3.eth.getGasPrice(),
    };
  } else if (library === Web3Lib.Ethers) {
    let ethersProvider: ethers.providers.Provider | undefined;
    if (typeof provider === "object") {
      ethersProvider = new ethers.providers.Web3Provider(provider);
    } else if (provider.includes("http")) {
      ethersProvider = new ethers.providers.JsonRpcProvider(provider);
    } else if (provider.includes("infura")) {
      ethersProvider = new ethers.providers.InfuraProvider(provider);
    }

    if (ethersProvider !== undefined) {
      const network = await ethersProvider.getNetwork();
      chainInfo = {
        id: network.chainId,
        name: ChainId[network.chainId],
        blockNumber: await ethersProvider.getBlockNumber(),
        gasPrice: await ethersProvider.getGasPrice(),
      };
    }
  }
  console.log(chainInfo);

  return chainInfo;
}
