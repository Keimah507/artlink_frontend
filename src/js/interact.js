// TODO: Change Minting process flow:
//  1. User fills out form and uploads image
//  2. Image is uploaded to Firebase Storage and the URL is returned
//  3. Image together with other metadata is uploaded to Pinata and hash is returned
//  4. Hash and metadata is used to mint NFT on Rarible
//  5. NFT is minted and transaction hash is returned
//  6. NFT metadata is saved to Firestore to be displayed on the frontend


const { ethers } = require("ethers");
import Rareterm from 'rareterm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createRaribleSdk } from '@rarible/sdk';
import Web3 from 'web3';
// require('dotenv').config();
// const alchemyKey = process.env.ALCHEMY_API_KEY;
// const contractABI = process.env.CONTRACT_ABI;
// const contractAddress = process.env.CONTRACT_ADDRESS;
// const rarepress = new Rareterm();
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(alchemyKey);

// export const getSigner = async() => {
//     const provider = new Web3(window.ethereum);
//     const signer = provider.getSigner();
//     return signer;
// }


export const mintNft = async(name, description, price, image) => {


    const provider = new Web3(window.ethereum);
    const sdk = createRaribleSdk(provider, 'development', {apiKey: process.env.RARIBLE_API_KEY});

    if ((name.trim() == '' || description.trim() == '')){
        return {
            success: false,
            status: "Please make sure all fields are Completed before minting"
        }
    }

    console.log(image, name, description, price);

    const metadata = new Object();
    metadata.name = name;
    metadata.description = description;
    // Upload image to Firestore
    try {
        const formDataImage = new FormData();
        formDataImage.append('image', image);
        const response = await fetch('https://artlink-cf7a7b7b9f96.herokuapp.com/uploadImage',
        {
            headers: {
                // Allow CORS
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Authorization, Content-Length, X-Requested-With',
            },
            method: 'POST',
            body: formDataImage,
        });
        console.log(response);
        metadata.image = response.url;
    } catch(err) {
        console.error(err);
    }


    // Put this in a try catch block
    const pinataResponse = await axios.post('https://artlink-cf7a7b7b9f96.herokuapp.com/pinJSONToIPFS',
    metadata,
    {
        headers: {
            pinata_api_key: process.env.PINATA_KEY,
            pinata_secret_api_key: process.env.PINATA_SECRET
        }
    })
    .then(function (response) {
        return {
            success: true,
            pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
        };
    })
    .catch(function (error) {
        return {
            success: false,
            status: "Something went wrong: " + error.message
        };
    });
    console.log(pinataResponse.pinataUrl);



    try {
        const collection = await sdk.apis.collection.getCollectionById({ collection: 'ETHEREUM:0xc9154424B823b10579895cCBE442d41b9Abd96Ed' });
        console.log(collection);
        const mint = await sdk.nft.mint({ collection })
        console.log(mint);
        const result = await mint.submit({
            lazyMint: true,
            supply: 1,
            uri: pinataResponse.pinataUrl,
            creators: [{
                account: window.ethereum.selectedAddress,
                value: 10000
            }]
        })
        console.log(result);
        return {
            success: true,
            status: "Check out your transaction on Etherscan: https://etherscan.io/tx/" + result.transactionHash
        };
    } catch (error) {
        return {
            success: false,
            status: "Something went wrong here: " + error.message
        };
    }

    // Down here is code to use rarepress for lazy minting. It's not working right now, but I'm keeping it here for reference.


    // try{
    // await rarepress.init({ host: "https://eth.rarenet.app/v1" });
    // } catch (error) {
    //     return {
    //         success: false,
    //         status: "Something went wrong here: " + error.message
    //     };
    // }

    // try{
    //     console.log(rarepress.fs);
    //     let cid = await rarepress.fs.add(url);
    //     let token = await rarepress.token.create({
    //         type: "ERC721",
    //         metadata: {
    //             name: name,
    //             description: description,
    //             image: "/ipfs/" + cid,
            
    //         },
    //     })

    //     await rarepress.fs.push(cid);
    //     await rarepress.fs.push(token.tokenURI);
    //     let receipt = await rarepress.token.send(token)
    //     console.log(token, receipt)
    //     return {
    //         token, receipt
    //     }
    // } catch (error) {
    //     return {
    //         success: false,
    //         status: "Something went wrong: " + error.message
    //     };
    // }

    
    // window.contract = await new web3.eth.Contract(contractABI, contractAddress);

    // const transactionParams = {
    //     to: contractAddress,
    //     from: window.ethereum.selectedAddress,
    //     data: window.contract.methods
    //     .mintNFT(window.ethereum.selectedAddress, tokenURI)
    //     .encodeABI()
    // };

    // try {
    //     const txHash = await window.ethereum.request({
    //         method: 'eth_sendTransaction',
    //         params: [transactionParams],
    //     });
    //     return {
    //         success: true,
    //         status: "Check out your transaction on Etherscan: https://etherscan.io/tx/" + txHash
    //     };
    // } catch (error) {
    //     return {
    //         success: false,
    //         status: "Something went wrong: " + error.message
    //     };
    // }
}