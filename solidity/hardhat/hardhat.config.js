require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const dotenv = require("dotenv");
dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("deploy-example", "Deploys Example contract", async (_, hre) => {
  await hre.run("compile");
  const Example = await hre.ethers.getContractFactory("Example");
  const example = await Example.deploy();

  await example.deployed();

  console.log("Example deployed to:", example.address);
});

task("deploy-metadata", "Deploys Metadata contract", async (_, hre) => {
  await hre.run("compile");
  const Metadata = await hre.ethers.getContractFactory("Metadata");
  const metadata = await Metadata.deploy();

  await metadata.deployed();

  console.log("Metadata deployed to:", metadata.address);
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.6",
  networks: {
    rinkeby: {
      chainId: 4,
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`,
      gas: "auto",
      gasPrice: "auto",
      accounts: {
        mnemonic: process.env.MNEMONIC ?? "",
      },
    },
  },
};
