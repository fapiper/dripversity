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
  maxReserved: 100,
  whitelistSale: {
    price: 0.0001,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.0005,
    maxMintAmountPerTx: 5,
  },
  contractMetadata: "ipfs://bafkreigjpwberxrezvkmvbjqy3tbt7jx3ix7q6qrxqnpqjvm4lsqx24usy/",
  tokenBaseUri: "ipfs://bafybeidrr3dab7gah3mogsouaj2qtb4iwtwsjio54cxylkkkwmt6rpri2u/",
  adminAddress: "0x23479a6877970E5889dfaD779e225aDC08eB8E03",
  // necessary for splitter contract and nft contract
  payeesShares: [60, 40],
  payeesAdresses: [
    "0xF24d5f5BC674639D386c91C498d8D4B052AE4837",
    "0x23479a6877970E5889dfaD779e225aDC08eB8E03",
  ],
  paymentSplitterAddress: "0x7932c7896df0ca18076cc11C0D98e55e34B0408d",
  // necessary after contract deployment
  signerAddress: "0x23479a6877970E5889dfaD779e225aDC08eB8E03",
  // rest
  contractAddress: "0xb2307C3fa7Fc1Dd0816E46F137DC9CbFC6DDaf34",
};

export default CollectionConfig;
