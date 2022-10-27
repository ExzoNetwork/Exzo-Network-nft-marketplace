const fs = require('fs');
require('@nomicfoundation/hardhat-toolbox');

const privateKey = fs.readFileSync('.secret').toString().trim();
const { EXZO_NETWORK_RPC } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    exzo_network: {
      url: 'https://testnet.exzo.technology/',
      accounts: [privateKey],
      chainId: 2370,
    },
  },
};

