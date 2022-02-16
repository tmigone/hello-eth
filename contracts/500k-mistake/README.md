# 500k-mistake

Some dude burnt 500k by transfering WETH tokens to the WETH smart contract. This is my attempt at replicating the mistake and testing a potential fix.

**The fix**

Add a require check so we don't allow tokens to be transferred to the WETH smart contract:

```solidity
function transfer(address dst, uint wad) public returns (bool) {
    require(dst != address(this));
    return transferFrom(msg.sender, dst, wad);
}
```

OpenZeppelin ERC20 contract implements [similar checks](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/6fec54f17f0bcdd8d2813ff280c1f385f0796e19/contracts/token/ERC20/ERC20.sol#L226-L246) to prevent sending from/to the zero address, but not to itself probably because there might be legitimate reasons to allow such operations.


References:
- Reddit post: https://www.reddit.com/r/ethereum/comments/sfz4kw/did_i_just_lose_half_a_million_dollars_by_sending/?utm_source=share&utm_medium=ios_app&utm_name=iossmf
- Transaction details: https://etherscan.io/tx/0x96a7155b44b77c173e7c534ae1ceca536ba2ce534012ff844cf8c1737bc54921
- WETH smart contract: https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
- WETH source code: https://github.com/gnosis/canonical-weth/blob/0dd1ea3e295eef916d0c6223ec63141137d22d67/contracts/WETH9.sol
