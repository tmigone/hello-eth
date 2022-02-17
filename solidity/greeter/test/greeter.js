const Greeter = artifacts.require("Greeter");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Greeter", function (/* accounts */) {
  it("should deploy contract successfully", async function () {
    const instance = await Greeter.deployed();
    assert(instance, "Not deployed");
  });

  describe("greet()", function () {
    it("should greet us with default greeting", async function () {
      const instance = await Greeter.deployed();
      const expected = "Hello, world!";
      const actual = await instance.greet();

      assert.equal(actual, expected, `greeted with '${expected}'`);
    });
  });
});

// Make sure state changes stay isolated from other tests
contract("Greeter: update greeting", function () {
  describe("setGreeting()", function () {
    it("should greet us with a custom set greeting", async function () {
      const instance = await Greeter.deployed();
      const expected = "G'day y'all!";

      await instance.setGreeting(expected);
      const actual = await instance.greet();

      assert.equal(actual, expected, `greeted with '${expected}'`);
    });
  });
});
