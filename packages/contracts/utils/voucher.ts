import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "ethers";

export const signWhitelist = async (
  chainId: number,
  contractAddress: string,
  signerAddress: SignerWithAddress | ethers.Wallet,
  mintingAddress: string,
  name: string,
  version: string
): Promise<string> => {
  const domain = {
    name,
    version,
    chainId,
    verifyingContract: contractAddress
  };

  const types = {
    Minter: [{ name: "wallet", type: "address" }]
  };

  return signerAddress._signTypedData(domain, types, {
    wallet: mintingAddress
  });
};
