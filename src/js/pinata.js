// Description: This file contains the functions to pin the JSON metadata to IPFS using Pinata API

import pinataSDK from '@pinata/sdk';
require('dotenv').config();
const key = process.env.PINATA_KEY;
const secret = process.env.PINATA_SECRET;
const JWT_SECRET = process.env.PINATA_JWT_SECRET;
const axios = require('axios');
const pinata = pinataSDK(key, secret);

export const pinJSONToIPFS = async(JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
    .post(url, JSONBody, {
        headers: {
            accept: 'application/json',
            'content_type': 'application/json',
            'Authorization': `Bearer ${JWT_SECRET}`,

        },
    })
    .then(function (response) {
        return {
            success: true,
            pinataUrl: `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`,
        };
    })
    .catch(function (error) {
        console.log(error);
        return {
            success: false,
            message: error.message,
        };
    });
}