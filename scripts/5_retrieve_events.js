const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(`http://localhost:8545`)

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];

const address = '0x5fbdb2315678afecb367f032d93f642f64180aa3' 
const contract = new ethers.Contract(address, ERC20_ABI, provider)

const main = async () => {
    
    const block = await provider.getBlockNumber()

    const transferEvents = await contract.queryFilter('Transfer', 0, block)
    console.log(transferEvents)
}

main()