// TODO: Change Minting process flow:
//  1. User fills out form and uploads image
//  2. Image is uploaded to Firebase Storage and the URL is returned
//  3. Image together with other metadata is uploaded to Pinata and hash is returned
//  4. Hash and metadata is used to mint NFT on Rarible
//  5. NFT is minted and transaction hash is returned
//  6. NFT metadata is saved to Firestore to be displayed on the frontend


import axios from 'axios';
const ethers = require('ethers');
import { Sepolia } from '@thirdweb-dev/chains';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
// import { data } from 'autoprefixer';

// Alchemy imports

import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import { Alchemy, Network } from 'alchemy-sdk'; 
const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const contractAddress = '0xCe6e401D3786Efe354E75BE01BDcAaE5088F87B6';
const contractABI = require('../contract-abi.json');
const web3 = createAlchemyWeb3(alchemyKey);


const settings = {
    apiKey: alchemyKey,
    network: Network.ETH_SEPOLIA
}

const alchemy = new Alchemy(settings);


// async function getContractABI(contractAddress, etherscanApiKey) {
//     const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${etherscanApiKey}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.status === '1') {
//             const contractABI = JSON.parse(data.result);

//             return {
//                 success: true,
//                 contractABI
//             };
//         } else {
//             return {
//                 success: false,
//                 error: 'Failed to fetch contract ABI'
//             };
//         }
//     } catch (error) {
//         console.error(error);

//         return {
//             success: false,
//             error: 'Unexpected error occurred'
//         };
//     }
// }


export const mintNft = async(name, description, price, image) => {

    try {
        const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();

        const sdk = ThirdwebSDK.fromSigner(signer, Sepolia, {
            clientId: '7aeb15e6111d934a94d8f224be536e01',
        });



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
            const uploadData = await response.json();
            console.log(uploadData.url);
            metadata.url = uploadData.url;
            metadata.image = image;
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

        const tokenURI = pinataResponse.pinataUrl;
        metadata.tokenURI = tokenURI;
        metadata.price = price;
        console.log(metadata);
        const contract = await sdk.getContract('0xCe6e401D3786Efe354E75BE01BDcAaE5088F87B6');

        const tx = await contract.erc721.mint(metadata);
        const receipt = tx.receipt;
        const tokenId = tx.id;
        const nft = tx.data();


        // Add error handling here ({success, status})
        const marketplaceContract = await sdk.getContract('0xb0E10cdd991715CF872542B1e14f787dE789cE33')
        try {
            const listing = {
                tokenId: tokenId,
                pricePerToken: price,
                assetContractAddress: contractAddress,
                quantity: 1,
                currencyContractAddress: '0x0000000000000000000000000000000000000000',
                startTimeStamp: Math.floor(Date.now() / 1000),
                endTimeStamp: Math.floor(Date.now() / 1000) + 1000000,
                isReservedListing: false,
            }

            const marketplaceTx = await marketplaceContract.directListings.createListing(listing);
            const marketplaceReceipt = marketplaceTx.receipt;
            const marketplaceListingId = marketplaceTx.id;
        } catch (error) {
            console.error(error);
        }
        return { success: true, status: "Success! NFT minted Successfuly!"};
    } catch (error) {
        return { success: false, status: "Something went wrong: " + error.message};
    }
}

export const mint = async(name, description, price, image) => {

    try {
        const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();

        const sdk = ThirdwebSDK.fromSigner(signer, Sepolia, {
            clientId: '7aeb15e6111d934a94d8f224be536e01',
        });



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
            const uploadData = await response.json();
            console.log(uploadData.url);
            metadata.url = uploadData.url;
            metadata.image = image;
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

        const tokenURI = pinataResponse.pinataUrl;
        metadata.tokenURI = tokenURI;
        metadata.price = price;
        console.log(metadata);
        const contract = await sdk.getContract('0xCe6e401D3786Efe354E75BE01BDcAaE5088F87B6');

        try {
        const tx = await contract.erc721.mint(metadata);
        } catch (error) {
            return { success: false, status: "Something went wrong: " + error.message};
        }
        const receipt = tx.receipt;
        const tokenId = tx.id;
        const nft = tx.data();

        return { success: true, status: "Success! NFT minted Successfuly!"};
    } catch (error) {
        return { success: false, status: "Something went wrong: " + error.message};
    }
}
