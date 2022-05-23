import { Provider, TransactionResponse } from "@ethersproject/abstract-provider";
import { ethers } from "ethers";
import { argv } from "node:process";
import dotenv from 'dotenv'

dotenv.config();

export const hashHexString = (input: string): string =>
  ethers.utils.keccak256(`0x${input.replace(/^0x/, "")}`);

const printCodeHashes = async (provider: Provider, _tx: string) => {
  const tx = await provider.getTransaction(_tx);
  const receipt = await tx.wait();

  const runtimeCode = await provider.getCode(receipt.contractAddress);
  const creationCode = getCreationCode(tx);

  console.log(`address: ${receipt.contractAddress}`);
  console.log(`creationCodeHash: ${hashHexString(creationCode)}`);
  console.log(`runtimeCodeHash: ${hashHexString(runtimeCode)}`);
};

(async () => {
  const address = argv[2];
  const network = argv[3] ?? 'mainnet';
  const provider = new ethers.providers.InfuraProvider(network, process.env.ROPSTEN_INFURA_KEY!); // Add .env file with ROPSTEN_INFURA_KEY

  await printCodeHashes(provider, address);
})();

// This is giga hacky and bound to fail!
const getCreationCode = (tx: TransactionResponse) => {
  const compilerHeader = '64736f6c6343';
  const beforeCompMeta = tx.data.split(compilerHeader)[0];
  const afterCompMeta = tx.data.split(compilerHeader)[1];

  const metaEnd = '0033'
  const afterWithoutParams = afterCompMeta.split(metaEnd)[0];

  return `${beforeCompMeta}${compilerHeader}${afterWithoutParams}${metaEnd}`;
}