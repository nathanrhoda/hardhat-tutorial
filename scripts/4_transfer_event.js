//  Note before running this you need to do a transfer from contract to a address so that there is a balance
//  Good exercise would be to use the console to do this transfer
//  Figure this out on your own some hints are below
//  const myC = await ethers.getContractAt("MyContract", "0x5fbdb2315678afecb367f032d93f642f64180aa3")
//  const wallet = new ethers.Wallet(pk1, provider)
//  await myC.connect(wall)
//  await myC.balanceOf(addr1)
//  await myC.send(addr1, 1)
//  await myC.balanceOf(addr1)

const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(`http://localhost:8545/`)

const account1 = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8' // Your account address 1
const account2 = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC' // Your account address 2

const privateKey1 = '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d' // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address = '0x5fbdb2315678afecb367f032d93f642f64180aa3'
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}\n`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.connect(wallet)

    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance of sender: ${balanceOfSender}`)
    console.log(`Balance of reciever: ${balanceOfReciever}\n`)
}

main()