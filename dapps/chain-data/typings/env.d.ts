/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INFURA_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
