const { expect } = require("chai");
const { ethers } = require("hardhat");

let suicide;

describe("Suicide", function () {
  beforeEach(async () => {
    const Suicide = await ethers.getContractFactory("Suicide");
    suicide = await Suicide.deploy();
    await suicide.deployed();
  });

  it("should increment beneficiary's balance after suiciding", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const initialAmount = 100;
    const amountToSend = 50;

    await owner.sendTransaction({
      to: suicide.address,
      value: ethers.utils.parseEther(amountToSend.toString()),
    });

    await suicide.selfDestruct(addr1.address);

    expect(await addr1.getBalance()).to.equal(
      ethers.utils.parseEther((initialAmount + amountToSend).toString())
    );
  });
});
