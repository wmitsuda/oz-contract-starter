require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      protocol: "http",
      host: "localhost",
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: "*"
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          "https://mainnet.infura.io/v3/" + process.env.INFURA_PROJECT_ID,
          process.env.ADDRESS_INDEX
        ),
      network_id: "1",
      gasPrice: 2000000000
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          "https://ropsten.infura.io/v3/" + process.env.INFURA_PROJECT_ID,
          process.env.ADDRESS_INDEX
        ),
      network_id: 3
    },
    kovan: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          "https://kovan.infura.io/v3/" + process.env.INFURA_PROJECT_ID,
          process.env.ADDRESS_INDEX
        ),
      network_id: 42
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          "https://rinkeby.infura.io/v3/" + process.env.INFURA_PROJECT_ID,
          process.env.ADDRESS_INDEX
        ),
      network_id: 4
    }
  }
};
