const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider('https://open-platform.nodereal.io/{{apiKey}}/arbitrum/');


const main = async () => {
  const blockNum = await provider.getBlockNumber();
  console.log('blockNumber: ', blockNum);

  const singer = await provider.getSigner();
  const chainId = await singer.getChainId();
  console.log('chainId: ', chainId)
}

main();
