require('dotenv').config();
import axios from 'axios';
const JWT_SECRET = process.env.PINATA_JWT_SECRET;

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { metadata } = req.body;

        try {
            const pinataResponse = await pinJSONToIPFS(metadata);
            if ( pinataResponse.success ) {
            res.status(200).json({ success: true, pinataUrl: pinataResponse.pinataUrl });
            } else {
                res.status(400).json({ success: false, message: pinataResponse.message });
            }
        
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: error.message });
        }
    }else {
        res.status(400).json({ success: false, message: 'Wrong request method' });
    }
};

const pinJSONToIPFS = async (JSONBody) => {
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

export default handler;