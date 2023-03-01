import { ethers } from "hardhat";
import { Ballot } from "../typechain-types";

describe("Ballot", function () {
    // defining var here allows us to use globally for all tests
    let ballotContract: Ballot;
    beforeEach(async function () {
        const ballotContractFactory = await ethers.getContractFactory("Ballot");
        ballotContract = await ballotContractFactory.deploy([ethers.utils.formatBytes32String("Alice"), ethers.utils.formatBytes32String("Bob"), ethers.utils.formatBytes32String("Barli")]);
        console.log("It worked!")
    });
    describe("When the contract is deployed", function () {
        it("has the provided proposals", async function () {});
        it("sets the deployer address as chair person", async function () {});

    });
});