pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("Whey Protein Token", "WPT"){
        _mint(msg.sender, 100000);
    }
}