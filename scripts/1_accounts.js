const { ethers } = require("ethers");
// const rpcUrl = 'https://cloudflare-eth.com/';
const rpcUrl = 'http://localhost:8545/';
const provider = new ethers.JsonRpcProvider(rpcUrl);

// const address = '0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE';
const address = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';

const main = async () => {
    const balance = await provider.getBalance(address);
    console.log("Balance: ", ethers.formatEther(balance.toString()));
}

main();