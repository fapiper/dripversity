import CollectionConfigInterface from "../utils/types/CollectionConfigInterface";
import { ethereumTestnet, ethereumMainnet } from "../utils/constants";

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME NEW_SYMBOL
  // Please DO NOT change it manually!
  contractName: "Dripversity",
  tokenName: "Dripversity",
  tokenSymbol: "DRIP",
  // from here it can be updated manually in this file, then run yarn configure-contract
  maxSupply: 1000,
  maxReserved: 250,
  whitelistSale: {
    price: 0.00025,
    maxMintAmountPerTx: 100,
  },
  publicSale: {
    price: 0.0005,
    maxMintAmountPerTx: 100,
  },
  printPrice: 0.0001,
  contractMetadata: "ipfs://<<CID>>/",
  tokenBaseUri: "ipfs://<<CID>>/",
  adminAddress: "0x5D972D27b3D89bC9a9df692670034224Eb6De4d3",
  // necessary for splitter contract and nft contract
  payeesShares: [50, 50],
  payeesAdresses: [
    "0xe3bbf29f034fA780407Fd11dac7A0B3938b1bc6a",
    "0xfb98848b723e05d7F60cc2dC8d5157a6A01325Dc",
  ],
  paymentSplitterAddress: "0xd3D3fc71B7B03a2c241d6C0772422fB487c763E6",
  // necessary after contract deployment
  signerAddress: "0x5D972D27b3D89bC9a9df692670034224Eb6De4d3",
  // rest
  contractAddress: "0xdF31d768841d1817E61b13b0496C4E7E74eD66a3",
};

export default CollectionConfig;
