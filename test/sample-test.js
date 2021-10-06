const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  before(async function () {
    Greeter = await ethers.getContractFactory("Greeter");
  });

  beforeEach(async function () {
    greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();
  });

  it("Should return the new greeting once it's changed", async function () {
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: ["0x075792387092Fd91FffF54DE989B3e67e71Fbe73"],
    });
    const mew = await ethers.getSigner(
      "0x075792387092Fd91FffF54DE989B3e67e71Fbe73"
    );

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter
      .connect(mew)
      .setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
