const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const PriceModule = buildModule("PriceModule", (m) => {
  const price = m.contract("PriceConsumerV3");

  return { price };
});

module.exports = PriceModule;