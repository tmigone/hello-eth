const { VITE_INFURA_ENDPOINT, VITE_LOCAL_NODE_ENDPOINT } = import.meta.env;

export const PROVIDER_LIST = [
  {
    name: "Web3",
    url: window.ethereum,
  },
  {
    name: "Truffle develop",
    url: "http://localhost:9545",
  },
  {
    name: "Ganache",
    url: "http://localhost:7545",
  },
  {
    name: "Infura",
    url: VITE_INFURA_ENDPOINT,
  },
  {
    name: "Local node",
    url: VITE_LOCAL_NODE_ENDPOINT,
  },
];
