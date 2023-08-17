require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.9',
  networks: {
    sepolia: {
      url: process.env.NETWORKS_SEPOLIA_URL,
      accounts: [ process.env.NETWORKS_SEPOLIA_ACCOUNT ]
    }
  }
};
