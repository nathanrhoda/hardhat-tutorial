# hardhat-tutorial
First look at Hardhat


### Note contract addresses referenced in scripts needs to be updated according to you deployed address. This has been intentional hard coded so that you can get comfortable and get a deeper understanding of all the moving parts

## How to run a blockchain with hard hat
_____________________________________

1. npx hardhat node 
    - Run in seperate terminal. 
    - This will generate addresses with test eth and run a local blockchain


## How to build with hardhat
_________________________


- Run in seperate terminal. 

1. npm init 
2. npm install --save-dev hardhat
3. Code contract
4. npx hardhat compile


## Deploy to local network
_______________________

1. npx hardhat run --network localhost .\scripts\deploy.js


## Running a script 
_______________________

npx hardhat run --network localhost .\scripts\1_accounts.js

## Interacting with a deployed smart contract
__________________________________________

npx hardhat console --network localhost

1. Retrieving the smart contract **const myContract = await ethers.getContractAt("MyContract", "\Your contract address\")**
2. To retrieve data from smart contract **await myContract.get()**
3. To set value **await myContract.set("WOOF")**
4. **.exit** to exit console in terminal


