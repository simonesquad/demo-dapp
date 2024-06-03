require("@nomicfoundation/hardhat-toolbox");

//require("@nomiclabs/hardhat-ethers")
 require('dotenv').config()

 const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || 
"https://eth-sepolia.g.alchemy.com/v2/demo"
 const PRIVATE_KEY = process.env.PRIVATE_KEY || "-Jm83I6efKyL1Ux2NrxlFuoGFPmcXer7"

 module.exports = {
     defaultNetwork: "sepolia",
     networks: {
         hardhat: {
             // // If you want to do some forking, uncomment this
             // forking: {
             // url: MAINNET_RPC_URL
             // }
         },
         localhost: {
         },
         sepolia: {
             url: SEPOLIA_RPC_URL,
             accounts: [PRIVATE_KEY],
             saveDeployments: true,
         },
     },

  solidity: "0.8.9",
};