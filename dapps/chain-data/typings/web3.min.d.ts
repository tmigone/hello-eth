// node_modules/web3/types/index.d.ts
declare module "web3/dist/web3.min.js" {
  import * as net from "net";
  import { Bzz } from "web3-bzz";
  import { BatchRequest, provider, Providers, Extension } from "web3-core";
  import { Eth } from "web3-eth";
  import { Shh } from "web3-shh";
  import { Utils } from "web3-utils";

  export default class Web3 {
    constructor();
    constructor(provider: provider);
    constructor(provider: provider, net: net.Socket);

    static modules: Modules;
    readonly givenProvider: any;
    static readonly givenProvider: any;
    defaultAccount: string | null;
    defaultBlock: string | number;
    readonly currentProvider: provider;
    setProvider(provider: provider): boolean;
    BatchRequest: new () => BatchRequest;
    static readonly providers: Providers;

    utils: Utils;
    eth: Eth;
    shh: Shh;
    bzz: Bzz;
    version: string;
    static readonly version: string;
    static readonly utils: Utils;
    extend(extension: Extension): any;
  }
}
