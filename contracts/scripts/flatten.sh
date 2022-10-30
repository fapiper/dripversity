#! /bin/bash

NFT=Dripversity.sol

OUTPUT=full

cd ..

npx hardhat flatten contracts/$NFT > $OUTPUT/$NFT