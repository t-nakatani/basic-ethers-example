require('dotenv').config();
const { ethers } = require("ethers");

async function getPendingTxs() {
  // プロバイダーの作成
  const wsProvider = new ethers.providers.WebSocketProvider(process.env.WS_URL);

  wsProvider.on('pending', async (txHash) => {
    console.log("Pending transaction:", txHash);

    // コメントを外すと、トランザクションの詳細を表示
    // RPCを提供してもらっている場合は、全てのtxを処理するとリクエスト上限に達するためwsの接続を切断
    // const tx = await wsProvider.getTransaction(txHash);
    // console.log(tx);
    // wsProvider.removeAllListeners();
    // await wsProvider.destroy();
    // console.log("WebSocket connection closed.");

  });
}

getPendingTxs();
