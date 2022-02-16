<template>
  <header>
    <div class="wrapper">
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/ethereum.png"
        width="125"
      />
    </div>
  </header>

  <main>
    <h1><strong>Chain info</strong></h1>
    <div>
      <label for="librarySelect">Choose a library: </label>
      <select
        v-model="chosenLibrary"
        id="librarySelect"
        @change="onLibraryChange"
      >
        <option
          v-for="(library, index) in libraries"
          :key="index"
          :value="library"
        >
          {{ library }}
        </option>
      </select>
    </div>
    <div>
      <label for="providerSelect">Choose a provider: </label>
      <select
        v-model="chosenProvider"
        id="providerSelect"
        @change="onProviderChange"
      >
        <option
          v-for="(provider, index) in providers"
          :key="index"
          :value="provider"
        >
          {{ provider.name }}
        </option>
      </select>
    </div>
    <div>Client version: {{ chain.nodeInfo }}</div>
    <div>Chain name: {{ chain.name }}</div>
    <div>Chain id: {{ chain.id }}</div>
    <div>Is syncing: {{ chain.isSyncing }}</div>
    <div>Is mining: {{ chain.isMining }}</div>
    <div>Last block: {{ chain.blockNumber }}</div>
    <div>Gas price: {{ chain.gasPrice }}</div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Chain } from "@/eth/types";
import { getChainInfo, Web3Lib } from "@/eth/network";
import { PROVIDER_LIST } from "@/eth/providers";

export default defineComponent({
  data() {
    return {
      libraries: Web3Lib,
      chosenLibrary: Web3Lib.Web3js,
      providers: PROVIDER_LIST,
      chosenProvider: PROVIDER_LIST[0],
      chain: {} as Chain,
    };
  },
  async mounted() {
    this.chain = await getChainInfo(
      this.chosenProvider.url,
      this.chosenLibrary
    );
  },
  methods: {
    onProviderChange: async function () {
      this.chain = await getChainInfo(
        this.chosenProvider.url,
        this.chosenLibrary
      );
    },
    onLibraryChange: async function () {
      this.chain = await getChainInfo(
        this.chosenProvider.url,
        this.chosenLibrary
      );
    },
  },
});
</script>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
  display: grid;
  grid-template-columns: 150px auto;
}
</style>
