// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Storage {
    uint256 public storedData;

    function set(uint256 _value) public {
        storedData = _value;
    }
}
