// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Greeter {
  string public greeting;

  constructor(string memory _greeting) public {
    setGreeting(_greeting);
  }

  function greet () public view returns (string memory) {
    return greeting;
  }

  function setGreeting (string memory _greeting) public {
    greeting = _greeting;
  }

}
