const { ethers } = require("hardhat");

async function main() {
  const whitelistedContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistedContract.deploy(10);
  await deployedWhitelistContract.deployed();
  console.log("Whitelist Contract Address:", deployedWhitelistContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  // Whitelist Contract Address: 0x12bF1b878077bA5cCFdEED03926798E102b40Ee6
