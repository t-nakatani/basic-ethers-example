require('dotenv').config();
const { ethers } = require("ethers");

async function getBlockNumber() {
  // プロバイダーの作成
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

  // 現在のブロックナンバーを取得
  const blockNumber = await provider.getBlockNumber();

  console.log("Current block number:", blockNumber);
}

getBlockNumber();
