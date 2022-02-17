const Greeter = artifacts.require("Greeter");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Greeter", function (/* accounts */) {
  it("should assert true", async function () {
    await Greeter.deployed();
    return assert.isTrue(true);
  });

  it("should greet us with default greeting", async function () {
    const instance = await Greeter.deployed();
    const greet = await instance.greet();
    assert.equal(greet, "Hello, world!");
  })

  it("should update greeting using setGreeting", async function () {
    const NEW_GREETING = "Goodbye, world!";
    const instance = await Greeter.deployed();
    await instance.setGreeting(NEW_GREETING);
    assert.equal(instance.greeting(), NEW_GREETING);
  })

  it("should greet us with a custom set greeting", async function () {
    const NEW_GREETING = "G'day y'all!";
    const instance = await Greeter.deployed();
    await instance.setGreeting(NEW_GREETING);
    const greet = await instance.greet();
    assert.equal(greet, NEW_GREETING);
  })
});
