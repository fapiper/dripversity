import CollectionConfig from "../config/CollectionConfig";
import { ethers } from "hardhat";
import type { Dripversity } from "../typechain/";

export const getContract = async (): Promise<Dripversity> => {
  if (CollectionConfig.contractAddress === null) {
    throw new Error(
      "Please add the contract address to the configuration before running this command."
    );
  }

  if (
    (await ethers.provider.getCode(CollectionConfig.contractAddress)) === "0x"
  ) {
    throw new Error(
      `Can't find a contract deployed to the target address: ${CollectionConfig.contractAddress}`
    );
  }

  // Attach to deployed contract
  return (await ethers.getContractAt(
    CollectionConfig.contractName,
    CollectionConfig.contractAddress
  )) as Dripversity;
};
