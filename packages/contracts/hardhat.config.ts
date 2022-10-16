import * as dotenv from "dotenv";
import fs from "fs";
import { HardhatUserConfig, task } from "hardhat/config";
import CollectionConfig from "./config/CollectionConfig";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import * as path from "path";

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("configure-contract", "Reconfigures the smart contract", async () => {
  const contractFile = path.join(
    __dirname,
    `/contracts/${CollectionConfig.contractName}.sol`
  );

  replaceInFile(
    contractFile,
    "uint256 public constant MAX_SUPPLY = [0-9]*",
    `uint256 public constant MAX_SUPPLY = ${CollectionConfig.maxSupply}`
  );
  replaceInFile(
    contractFile,
    "uint256 public maxReserved = [0-9]*",
    `uint256 public maxReserved = ${CollectionConfig.maxReserved}`
  );
  replaceInFile(
    contractFile,
    "uint256 public maxMint = [0-9]*",
    `uint256 public maxMint = ${CollectionConfig.whitelistSale.maxMintAmountPerTx}`
  );
  replaceInFile(
    contractFile,
    "uint256 public printPrice = [0-9]*.[0-9]*",
    `uint256 public printPrice = ${CollectionConfig.printPrice}`
  );
  replaceInFile(
    contractFile,
    "uint256 public printPrice = [0-9]*.[0-9]*",
    `uint256 public printPrice = ${CollectionConfig.printPrice}`
  );
  replaceInFile(
    contractFile,
    `contractMetadata = "ipfs*://[a-zA-Z0-9]*/"`,
    `contractMetadata = "${CollectionConfig.contractMetadata}"`
  );
  replaceInFile(
    contractFile,
    `address payable private adminAddress = payable[(a-zA-Z0-9)]*`,
    `address payable private adminAddress = payable(${CollectionConfig.adminAddress})`
  );

  console.log(
    `Contract ${CollectionConfig.contractName} successfully reconfigured!`
  );
});

task(
  "rename-contract",
  "Renames the smart contract replacing all occurrences in source files",
  async (taskArgs: { newName: string; newSymbol: string }, hre) => {
    // Validate new name
    if (!/^([A-Z][A-Za-z0-9]+)$/.test(taskArgs.newName)) {
      throw new Error(
        "The contract name must be in PascalCase: https://en.wikipedia.org/wiki/Camel_case#Variations_and_synonyms"
      );
    }

    const oldContractFile = path.join(
      __dirname,
      `/contracts/${CollectionConfig.contractName}.sol`
    );
    const newContractFile = path.join(
      __dirname,
      `/contracts/${taskArgs.newName}.sol`
    );
    const testFile = path.join(__dirname, `test/index.test.ts`);

    const oldSymbol = CollectionConfig.tokenSymbol;
    const oldName = CollectionConfig.tokenName;
    const newSymbol = taskArgs.newSymbol;
    const newTokenName = taskArgs.newName
      // Look for long acronyms and filter out the last letter
      .replace(/([A-Z]+)([A-Z][a-z])/g, " $1 $2")
      // Look for lower-case letters followed by upper-case letters
      .replace(/([a-z\d])([A-Z])/g, "$1 $2")
      // Look for lower-case letters followed by numbers
      .replace(/([a-zA-Z])(\d)/g, "$1 $2")
      .replace(/^./, function (str) {
        return str.toUpperCase();
      })
      // Remove any white space left around the word
      .trim();

    if (!fs.existsSync(oldContractFile)) {
      throw new Error(
        `Contract file not found: "${oldContractFile}" (did you change the configuration manually?)`
      );
    }

    if (fs.existsSync(newContractFile)) {
      throw new Error(
        `A file with that name already exists: "${oldContractFile}"`
      );
    }

    // Replace names in source files
    replaceInFile(
      path.join(__dirname, "/config/CollectionConfig.ts"),
      CollectionConfig.contractName,
      taskArgs.newName
    );
    replaceInFile(
      path.join(__dirname, "/config/CollectionConfig.ts"),
      CollectionConfig.tokenName,
      newTokenName
    );
    replaceInFile(
      path.join(__dirname, "/config/CollectionConfig.ts"),
      CollectionConfig.tokenSymbol,
      newSymbol
    );
    replaceInFile(
      oldContractFile,
      CollectionConfig.contractName,
      taskArgs.newName
    );
    replaceInFile(oldContractFile, oldSymbol, newSymbol);
    replaceInFile(testFile, CollectionConfig.contractName, taskArgs.newName);
    replaceInFile(oldContractFile, oldName, newTokenName);
    replaceInFile(
      path.join(__dirname, "/scripts/flatten.sh"),
      CollectionConfig.contractName,
      taskArgs.newName
    );
    replaceInFile(
      path.join(__dirname, "/utils/contract.ts"),
      CollectionConfig.contractName,
      taskArgs.newName
    );

    // Rename the contract file
    fs.renameSync(oldContractFile, newContractFile);

    console.log(
      `Contract renamed successfully from "${CollectionConfig.contractName}" to "${taskArgs.newName}"!`
    );

    fs.rmdirSync(path.join(__dirname, "/typechain"), { recursive: true });
    fs.rmdirSync(path.join(__dirname, "/artifacts"), { recursive: true });

    // Rebuilding types
    await hre.run("compile");
  }
)
  .addPositionalParam("newName", "The new name")
  .addPositionalParam("newSymbol", "The new symbol");

/**
 * Replaces all occurrences of a string in the given file.
 */
function replaceInFile(file: string, search: string, replace: string): void {
  const fileContent = fs
    .readFileSync(file, "utf8")
    .replace(new RegExp(search, "g"), replace);

  fs.writeFileSync(file, fileContent, "utf8");
}

// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "local",
  networks: {
    polygon: {
      url: process.env.POlYGON_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mumbai: {
      url: process.env.MUMBAI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    local: {
      url: "http://127.0.0.1:8545",
      blockGasLimit: 10000000,
      gas: 10000000,
    },
  },
  gasReporter: {
    enabled: !!process.env.REPORT_GAS,
    currency: "EUR",
    gasPrice: 21,
    coinmarketcap: process.env.COINMARKETCAP,
  },
  etherscan: {
    apiKey: {
      polygon: process.env.POLYGONSCAN_API_KEY || "",
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
    },
  },
};

export default config;
