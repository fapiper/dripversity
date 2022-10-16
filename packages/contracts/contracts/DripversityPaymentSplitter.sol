// SPDX-License-Identifier: MIT
// Dripversity Contracts v0.0.1
// Creator: Decentum

pragma solidity ^0.8.4;

// @author Decentum
// @title DripversityPaymentSplitter

import "@openzeppelin/contracts/finance/PaymentSplitter.sol";


contract DripversityPaymentSplitter is PaymentSplitter {
  // Amount of payees for payment splitting
  uint256 private payeesAmount;

  constructor (
    address[] memory _payees,
    uint256[] memory _shares
  ) PaymentSplitter(_payees, _shares) payable {
    payeesAmount = _payees.length;
  }

  /**
   * @dev Releases all funds from the contract to the specified payees according to the specified shares
     */
  function releaseAll() external {
    for (uint256 i = 0; i < payeesAmount; i++) {
      release(payable(payee(i)));
    }
  }
}

/**
 * example
 *
 _payees =
 ["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
 "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
 "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c"]
 */

/**
 * example
 *
 _shares =
 [20,
 40,
 40]
 */