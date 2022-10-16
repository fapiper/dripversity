import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

export default class Merkle {
  tree: MerkleTree;

  constructor(addresses: string[]) {
    this.tree = this.createMerkleTree(addresses);
  }

  createMerkleTree(accounts: string[]): MerkleTree {
    const leaves = accounts.map((address) => keccak256(address));
    return new MerkleTree(leaves, keccak256, { sort: true });
  }

  getMerkleRoot(): string {
    return this.tree.getHexRoot();
  }

  getProof(address: string): string[] {
    return this.tree.getHexProof(keccak256(address));
  }
}
