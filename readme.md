# basic-ethers-example

## usage
はじめに、sample.envをコピーして.envを作成し、適切な値を設定

```sh
docker build -t dex-example .
docker run -it --rm -v $(pwd)/scripts:/work/scripts dex-example /bin/bash
node /work/scripts/getBlockNumber.js
node /work/scripts/getPendingTxs.js
```
