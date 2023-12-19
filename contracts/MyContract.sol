// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyContract is ERC20 {

    string value; 

    constructor() ERC20("MyContract", "MYC") {
        value = "Hello, world!";
        _mint(msg.sender, 3);
    }

    function get() public view returns (string memory) {
        return value;
    }

    function set(string memory _value) public {
        value = _value;
    }
 
}
