import { web3 } from "@nomiclabs/buidler";
import { TestHelper } from "@openzeppelin/cli";
import {
  AppProject,
  ProxyAdminProject,
  Contract,
  Contracts,
  ZWeb3
} from "@openzeppelin/upgrades";

import { should } from "chai";
should();

ZWeb3.initialize(web3.currentProvider);

const Test = Contracts.getFromLocal("Test");

describe("Test", function() {
  let proj: AppProject | ProxyAdminProject;
  let test: Contract;

  beforeEach(async function() {
    proj = await TestHelper();
    test = await proj.createProxy(Test, {
      initMethod: "initialize",
      initArgs: ["42"]
    });
  });

  it("should increment correctly", async function() {
    const before = await test.methods.x().call();
    before.should.be.equals("42");

    await test.methods.increment().send();
    const after = await test.methods.x().call();
    after.should.be.equals("43");
  });
});
