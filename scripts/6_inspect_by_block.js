const { ethers } = require("ethers");
// const rpcUrl = 'https://cloudflare-eth.com/';
const rpcUrl = 'http://localhost:8545/';
const provider = new ethers.JsonRpcProvider(rpcUrl);

const main = async () => {
    const block = await provider.getBlockNumber()


    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block)
    

    console.log(`Amount of transactions in block: ${blockInfo.transactions.length}`)

    console.log(`\nLogging all transactions in block:\n`)
    for (let i = 0; i < blockInfo.transactions.length; i++) {
        const transaction = await provider.getTransaction(blockInfo.transactions[i])
        console.log(transaction)
    }
}

main()