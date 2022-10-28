const {ethers} = require('hardhat')
const assert = require('assert')
const expect = require('')

describe('My Token', function(){
    it ('initial balance for deployer', async () => {

        const [deployer] = await ethers.getSigners()
        const myTokenFactory = await ethers.getContractFactory("MyToken");
        const myToken = await myTokenFactory.deploy();
        await myToken.deployed();
    
        expect(await myToken.balanceOf(deployer.address)).eq(100)

        myToken.transfer()
    })
})
    