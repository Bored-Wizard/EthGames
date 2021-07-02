// SPDX-License-Identifier: MIT
pragma solidity 0.6.6;

import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";
import "@chainlink/contracts/src/v0.6/Owned.sol";

contract Gamble is VRFConsumerBase, Owned {
    using SafeMathChainlink for uint256;

    uint256 private constant ROLL_IN_PROGRESS = 42;

    bytes32 private s_keyHash;
    uint256 private s_fee;
    mapping(bytes32 => address) private s_rollers;
    mapping(address => uint256) private s_results;

    event DiceRolled(bytes32 indexed requestId, address indexed roller);
    event DiceLanded(bytes32 indexed requestId, uint256 indexed result);

    constructor(address vrfCoordinator, address link, bytes32 keyHash, uint256 fee) public VRFConsumerBase(vrfCoordinator, link) {
        s_keyHash = keyHash;
        s_fee = fee;
    }

    function rollDice(address roller) public onlyOwner returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= s_fee, "Not enough LINK to pay fee");
        requestId = requestRandomness(s_keyHash, s_fee);
        s_rollers[requestId] = roller;
        s_results[roller] = ROLL_IN_PROGRESS;
        emit DiceRolled(requestId, roller);
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        uint256 d20Value = randomness.mod(2).add(1);
        s_results[s_rollers[requestId]] = d20Value;
        emit DiceLanded(requestId, d20Value);
    }

    function house(address player) public view returns (uint256) {
        require(s_results[player] != 0, "Dice not rolled");
        require(s_results[player] != ROLL_IN_PROGRESS, "Roll in progress");
        return s_results[player];
    }

    function withdrawLINK(address to, uint256 value) public onlyOwner {
        require(LINK.transfer(to, value), "Not enough LINK");
    }

    function setFee(uint256 fee) public onlyOwner {
        s_fee = fee;
    }

    function fee() public view returns (uint256) {
        return s_fee;
    }
}
