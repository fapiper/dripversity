import { ethers } from "hardhat";
import ContractArguments from "../config/ContractArguments";
import CollectionConfig from "../config/CollectionConfig";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const Dripversity = await ethers.getContractFactory(
    CollectionConfig.contractName
  );

  const wallet = new ethers.Wallet(process.env.SIGNER_PKEY as string);

  console.log("✨ Signer public key:", wallet.address);
  console.log(
    "🚨 Please save this private key carefully to create vouchers:",
    wallet.privateKey
  );

  const dripversity = await Dripversity.deploy(
    CollectionConfig.paymentSplitterAddress,
    wallet.address,
    ContractArguments[2]
  );

  await dripversity.deployed();

  console.log("✨ Contract address:", dripversity.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
