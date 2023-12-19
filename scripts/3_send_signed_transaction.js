const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(`http://localhost:8545`);

const account1 = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' // Your account address 1
const account2 = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8' // Your account address 2

const privateKey1 = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.formatEther(recieverBalanceBefore)}\n`)

    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.parseEther("0.025")
    })

    await tx.wait()
    console.log(tx)

    const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.formatEther(recieverBalanceAfter)}\n`)
}

main()