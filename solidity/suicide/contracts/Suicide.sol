// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Suicide {
  receive () external payable {}

  function selfDestruct (address payable _beneficiary) public {
    selfdestruct(_beneficiary);
  }
}