import { ethers } from "hardhat";

describe("Ballot", function () {
    // defining var here allows us to use globally for all tests
    let ballotContract
    beforeEach(async function () {
        const ballotContractFactory = await ethers.getContractFactory("Ballot");
        ballotContract = await ballotContractFactory.deploy();
        await ballotContract.deployed();

    });
    describe("When the contract is deployed", function () {
        it("has the provided proposals", async function () {});
        it("sets the deployer address as chair person", async function () {});

    });
});