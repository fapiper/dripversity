import { ethers } from "hardhat";
import CollectionConfig from "../config/CollectionConfig";

async function main() {
  const SplitPayments = await ethers.getContractFactory("DripversityPaymentSplitter");

  const splitPayments = await SplitPayments.deploy(
    CollectionConfig.payeesAdresses,
    CollectionConfig.payeesShares
  );

  await splitPayments.deployed();

  console.log("✨ Contract address:", splitPayments.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
