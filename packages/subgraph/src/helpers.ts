import {
    Address,
    BigInt,
    Bytes,
    ethereum,
} from "@graphprotocol/graph-ts/index";
import { Token, Transfer, Account, Contract } from "../generated/schema";
import { IERC721 } from "../generated/Dripversity/IERC721";

export const zeroAddress = "0x0000000000000000000000000000000000000000";

export function supportsInterface(
    contract: ethereum.SmartContract,
    interfaceId: String,
    expected: boolean = true
): boolean {
    let result = ethereum.call(
        new ethereum.SmartContractCall(
            contract._name, // '',
            contract._address, // address,
            "supportsInterface", // '',
            "supportsInterface(bytes4):(bool)",
            [ethereum.Value.fromFixedBytes(Bytes.fromHexString(interfaceId as string) as Bytes)]
        )
    );

    return (
        result != null &&
        (result as Array<ethereum.Value>)[0].toBoolean() == expected
    );
}

/**
 * Find or Create a User entity with `id` and return it
 * @param id
 */
export function findOrCreateUser(id: string): Account {
    let user = Account.load(id);

    if (user == null) {
        user = new Account(id);
        user.save();
    }

    return user as Account;
}

export function findOrCreateContract(address: Address): Contract | null {
    let erc721 = IERC721.bind(address);

    if (erc721 !== null) {
        let introspection_01ffc9a7 = supportsInterface(erc721, "01ffc9a7"); // ERC165
        let introspection_80ac58cd = supportsInterface(erc721, "80ac58cd"); // ERC721
        let introspection_00000000 = supportsInterface(erc721, "00000000", false);
        let isERC721 =
            introspection_01ffc9a7 &&
            introspection_80ac58cd &&
            introspection_00000000;
        if (isERC721) {
            let account = new Account(address.toHex());
            let contract = Contract.load(account.id);
            if (contract == null) {
                contract = new Contract(account.id);
                let try_name = erc721.try_name();
                let try_symbol = erc721.try_symbol();
                let try_paused = erc721.try_paused();
                let try_MAX_SUPPLY = erc721.try_MAX_SUPPLY();
                let try_maxReserved = erc721.try_maxReserved();
                let try_totalSupply = erc721.try_totalSupply();
                contract.name = try_name.reverted ? "" : try_name.value;
                contract.symbol = try_symbol.reverted ? "" : try_symbol.value;
                contract.paused = try_paused.reverted ? false : try_paused.value;
                contract.maxSupply = try_MAX_SUPPLY.reverted
                    ? new BigInt(0)
                    : try_MAX_SUPPLY.value;
                contract.totalSupply = try_totalSupply.reverted
                    ? new BigInt(0)
                    : try_totalSupply.value;
                contract.maxReserved = try_maxReserved.reverted
                    ? new BigInt(0)
                    : try_maxReserved.value;
                contract.supportsMetadata = supportsInterface(erc721, "5b5e139f"); // ERC721Metadata
                contract.save();
            }
            return contract as Contract;
        }
    }

    return null;
}

/**
 * Create New Token Entity
 * @param id
 * @param owner
 * @param contract
 * @param creator
 * @param prevOwner
 * @param contentURI
 * @param metadataURI
 * @param createdAtTimestamp
 * @param createdAtBlockNumber
 */
export function createToken(
    id: string,
    contract: Contract,
    transactionHash: string,
    owner: Account,
    creator: Account,
    prevOwner: Account,
    imageURI: string,
    metadataURI: string,
    createdAtTimestamp: BigInt,
    createdAtBlockNumber: BigInt
): Token {
    let token = new Token(id);
    token.owner = owner.id;
    token.contract = contract.id;
    token.transactionHash = transactionHash;
    token.creator = creator.id;
    token.prevOwner = prevOwner.id;
    token.imageURI = imageURI;
    token.metadataURI = metadataURI;
    token.createdAtTimestamp = createdAtTimestamp;
    token.createdAtBlockNumber = createdAtBlockNumber;

    contract.totalSupply = (contract.totalSupply as BigInt).plus(
        BigInt.fromI32(1)
    );
    contract.save();
    token.save();
    return token;
}

/**
 * Create New Transfer Entity
 * @param id
 * @param media
 * @param from
 * @param to
 * @param createdAtTimestamp
 * @param createdAtBlockNumber
 */
export function createTransfer(
    id: string,
    transactionHash: string,
    token: Token,
    from: Account,
    to: Account,
    createdAtTimestamp: BigInt,
    createdAtBlockNumber: BigInt,
    gasPrice: BigInt,
    value: BigInt
): Transfer {
    let transfer = new Transfer(id);
    transfer.token = token.id;
    transfer.transactionHash = transactionHash;
    transfer.from = from.id;
    transfer.to = to.id;
    transfer.createdAtTimestamp = createdAtTimestamp;
    transfer.createdAtBlockNumber = createdAtBlockNumber;
    transfer.gasPrice = gasPrice;
    transfer.value = value;

    transfer.save();
    return transfer;
}
