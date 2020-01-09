pragma solidity 0.5.15;

import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/math/SafeMath.sol";


contract Test is Initializable {

    using SafeMath for uint256;

    uint256 public x;

    function initialize(uint256 _x) public initializer {
        x = _x;
    }

    function increment() public {
        x = x.add(1);
    }

}
