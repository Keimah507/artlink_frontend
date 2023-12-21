'use client'

import {use, useEffect, useState} from "react";
import Web3 from "web3";

export const connectWallet = async() => {
    if (window.ethereum) {
        try{
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });

            const obj = {
                status: 'Write text message here',
                address: addressArray[0],
            };

            return obj;
        } catch(err) {
            return {
                address: '',
                status: err.message,
            };
        }
    } else {
        return {
            address: '',
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" href={`https://metamask.io/download.html`}>
                            You must install Metamask in your browser.
                        </a>
                    </p>
                </span>
            )
        };
    }
}

export const getWalletAddress = async() => {
    if (window.ethereum) {
        try{
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: 'Write text message here',
                };
            } else {
                return {
                    address: '',
                    status: 'Connect to metamask'
                };
            }
        } catch(err) {
            return {
                address: '',
                status: err.message,
            }
        }
    } else {
        return{
            address: '',
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" href={`https://metamask.io/download.html`}>
                            You must install Metamask in your browser.
                        </a>
                    </p>
                </span>
            )
        };
    }
}

export const GetProvider = () => {
    const [web3Provider, setWeb3Provider] = useState(null);

    useEffect(() => {
        const initWeb3Provider = async() => {
            if (typeof window !== 'undefined' && window.ethereum) {
                const provider = new Web3(window.ethereum);
                await window.ethereum.enable();

                setWeb3Provider(provider);
            } else {
                console.error('Metamask not found');
            }
        };

        initWeb3Provider();
    }, []);

    return web3Provider;
}
