import { Token, Contract, Account } from "../generated/schema";
import {
    Approval,
    ApprovalForAll,
    Transfer,
    IERC721,
    Paused as PausedEvent,
    Unpaused as UnpausedEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/Dripversity/IERC721";
import { log, ipfs, json, JSONValue } from "@graphprotocol/graph-ts";
import {
    createToken,
    createTransfer,
    findOrCreateUser,
    findOrCreateContract,
    zeroAddress,
} from "./helpers";

/**
 * Handler called when the `Transfer` Event is called on the Zora Media Contract
 * @param event
 */
export function handleTransfer(event: Transfer): void {
    let fromAddr = event.params.from.toHexString();
    let toAddr = event.params.to.toHexString();
    let tokenId = event.params.tokenId.toString();

    log.info(
        `Starting handler for Transfer Event of tokenId: {}, from: {}. to: {}`,
        [tokenId, fromAddr, toAddr]
    );

    let toUser = findOrCreateUser(toAddr);
    let fromUser = findOrCreateUser(fromAddr);

    if (fromUser.id == zeroAddress) {
        handleMint(event);
        return;
    }

    let token = Token.load(tokenId);
    if (token == null) {
        log.error(`Media is null for token id: {}`, [tokenId]);
    }

    if (token && toUser.id == zeroAddress) {
        token.prevOwner = zeroAddress;
    }

    if (token) {
        token.owner = toUser.id;
        token.approved = null;
        token.save();
    }

    let transferId = tokenId
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toString());

    createTransfer(
        transferId,
        event.transaction.hash.toHexString(),
        token as Token,
        fromUser,
        toUser,
        event.block.timestamp,
        event.block.number,
        event.transaction.gasPrice,
        event.transaction.value
    );

    log.info(
        `Completed handler for Transfer Event of tokenId: {}, from: {}. to: {}`,
        [tokenId, fromAddr, toAddr]
    );
}

/**
 * Handler called when the `Mint` Event is called on the Zora Media Contract
 * @param event
 */
function handleMint(event: Transfer): void {
    let contract = findOrCreateContract(event.address);
    let creator = findOrCreateUser(event.params.to.toHexString());
    let zeroUser = findOrCreateUser(zeroAddress);
    let tokenId = event.params.tokenId;

    let tokenContract = IERC721.bind(event.address);
    let try_tokenURI = tokenContract.try_tokenURI(tokenId);
    let imageURI = "";
    let metadataURI = "";
    if (!try_tokenURI.reverted) {
        metadataURI = try_tokenURI.value;
        if (metadataURI) {
            let metadata = ipfs.cat(metadataURI.substring(7, metadataURI.length));
            if (metadata) {
                let metadataObject = json.fromBytes(metadata).toObject();
                if (metadataObject !== null) {
                    imageURI = (metadataObject.get("image") as JSONValue)
                        .toString()
                        .toString();
                }
            }
        }
    }

    let token = createToken(
        tokenId.toString(),
        contract as Contract,
        event.transaction.hash.toHexString(),
        creator,
        creator,
        creator,
        imageURI,
        metadataURI,
        event.block.timestamp,
        event.block.number
    );

    let transferId = tokenId
        .toString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toString());

    createTransfer(
        transferId,
        event.transaction.hash.toHexString(),
        token,
        zeroUser,
        creator,
        event.block.timestamp,
        event.block.number,
        event.transaction.gasPrice,
        event.transaction.value
    );
}

/**
 * Handler called when the `Approval` Event is called on the Zora Media Contract
 * @param event
 */
export function handleApproval(event: Approval): void {
    let ownerAddr = event.params.owner.toHexString();
    let approvedAddr = event.params.approved.toHexString();
    let tokenId = event.params.tokenId.toString();

    log.info(
        `Starting handler for Approval Event of tokenId: {}, owner: {}, approved: {}`,
        [tokenId, ownerAddr, approvedAddr]
    );

    let token = Token.load(tokenId);
    if (token == null) {
        log.error("Token is null for tokenId: {}", [tokenId]);
    } else {
        if (approvedAddr == zeroAddress) {
            token.approved = null;
        } else {
            let approvedUser = findOrCreateUser(approvedAddr);
            token.approved = approvedUser.id;
        }

        token.save();
    }

    log.info(
        `Completed handler for Approval Event of tokenId: {}, owner: {}, approved: {}`,
        [tokenId, ownerAddr, approvedAddr]
    );
}

/**
 * Handler called when the `ApprovalForAll` Event is called on the Zora Media Contract
 * @param event
 */
export function handleApprovalForAll(event: ApprovalForAll): void {
    let ownerAddr = event.params.owner.toHexString();
    let operatorAddr = event.params.operator.toHexString();
    let approved = event.params.approved;

    log.info(
        `Starting handler for ApprovalForAll Event for owner: {}, operator: {}, approved: {}`,
        [ownerAddr, operatorAddr, approved.toString()]
    );

    let owner: Account = findOrCreateUser(ownerAddr) as Account;
    let operator: Account = findOrCreateUser(operatorAddr) as Account;

    if (owner !== null) {
        if (approved == true) {
            owner.authorizedUsers = (owner.authorizedUsers as string[]).concat([
                operator.id as string,
            ]);
        } else {
            // if authorizedUsers array is null, no-op
            if (!owner.authorizedUsers) {
                log.info(
                    "Owner does not currently have any authorized users. No db changes neccessary. Returning early.",
                    []
                );
                log.info(
                    `Completed handler for ApprovalForAll Event for owner: {}, operator: {}, approved: {}`,
                    [ownerAddr, operatorAddr, approved.toString()]
                );
                return;
            }

            let index = (owner.authorizedUsers as string[]).indexOf(operator.id);
            let copyAuthorizedUsers: string[] = owner.authorizedUsers as string[];
            copyAuthorizedUsers.splice(index, 1);
            owner.authorizedUsers = copyAuthorizedUsers;
        }
        owner.save();
    }

    log.info(
        `Completed handler for ApprovalForAll Event for owner: {}, operator: {}, approved: {}`,
        [ownerAddr, operatorAddr, approved.toString()]
    );
}

export function handleOwnershipTransferred(
    event: OwnershipTransferredEvent
): void {
    let contract = findOrCreateContract(event.address);
    if (contract !== null) {
        contract.save();
    }
}

export function handlePaused(event: PausedEvent): void {
    let contract = findOrCreateContract(event.address);
    if (contract != null) {
        contract.paused = !contract.paused;
        contract.save();
    }
}

export function handleUnpaused(event: UnpausedEvent): void {
    let contract = findOrCreateContract(event.address);
    if (contract != null) {
        contract.paused = !contract.paused;
        contract.save();
    }
}
