import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

if(web3 !== null)
{
    console.log("Web3 is well installed !")
}
