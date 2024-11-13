import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb";
import { getContract } from "thirdweb";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

export const client = createThirdwebClient({
    clientId: CLIENT_ID as string,
})

export const chain = defineChain(11155111);

const contractAddress = "0x277F2570811211DD9C44B6BF35D926d184a1b86C"
const contractABI = [
    {
        "inputs": [],
        "name": "count",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "decrement",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "getCount",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "increment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        }
    ] as const;

    export const contract = getContract({
        client: client,
        chain: chain,
        address: contractAddress
    });