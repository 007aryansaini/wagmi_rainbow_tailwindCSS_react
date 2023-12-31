const hre = require("hardhat");

async function main() {
  const lock = await hre.ethers.deployContract("Storage");

  await lock.waitForDeployment();

  console.log("Contract address :", lock.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
