const { ethers } = require("ethers");
const rpcUrl = 'https://cloudflare-eth.com/';
// const rpcUrl = 'http://localhost:8545/';
const provider = new ethers.JsonRpcProvider(rpcUrl);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address account) view returns (uint256)",
];

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();

    console.log(name, symbol, totalSupply.toString());

    const balanceOf = await contract.balanceOf(address);
    console.log(balanceOf.toString());
}

main();