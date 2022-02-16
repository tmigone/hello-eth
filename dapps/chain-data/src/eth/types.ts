import type { BigNumber } from "ethers";

export interface Chain {
  id: number;
  name: string;
  nodeInfo?: string;
  isSyncing?: boolean;
  isMining?: boolean;
  blockNumber: number;
  gasPrice: string | BigNumber;
}

export interface Provider {
  name: string;
  url: any;
}
