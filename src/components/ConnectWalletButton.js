    'use client'

    import {use, useEffect, useState} from "react";
    const ethers = require('ethers')
    import {connectWallet, getWalletAddress} from "../js/WalletController";

   const WalletButton = (props) => {
        const [walletAddress, setWalletAddress] = useState('');
        const [status, setStatus] = useState('');

        // useEffect(async () => {
        //     const {address, status} = await getWalletAddress();

        //     setWalletAddress(address);
        //     setStatus(status);

        //     addWalletListener();
        // }, []);

     

        function addWalletListener() {
            if (window.ethereum) {
                window.ethereum.on('AccountsChanged', (accounts) => {
                    if (accounts.length > 0) {
                        setWalletAddress(accounts[0]);
                        setStatus('Write text message here');
                    } else {
                        setWalletAddress('');
                        setStatus('Connect to metamask');
                    }
                });
            } else {
                setStatus(
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" href={`https://metamask.io/download.html`}>
                            You must install Metamask in your browser.
                        </a>
                    </p>
                )
            }
        }

        const connectWalletPressed = async () => {
            const walletResponse = await connectWallet();
            setStatus(walletResponse.status);
            setWalletAddress(walletResponse.address);

            addWalletListener();
        };


        return (
                <div className="WalletButton">
                    <a onClick={connectWalletPressed} className="btn btn-primary">
                        {walletAddress.length > 0 ? (
                            "Connected: " +
                            String(walletAddress).substring(0, 6) +
                            "..." +
                            String(walletAddress).substring(38)
                        ) : (
                            <span>Connect Wallet</span>
                        )}
                </a>
            </div>
        )
    }

    // const thirdwebConnectButton = () => {
    //     return (
    //         <ThirdwebProvider
    //         activeChain={'mumbai'}
    //         clientId="7aeb15e6111d934a94d8f224be536e01"
    //         locale={en()}
    //         supportedWallets={[
    //             metamaskWallet({recommended: true}),
    //             coinbaseWallet(),
    //             walletConnect(),
    //             localWallet(),
    //             embeddedWallet({
    //                 auth: {
    //                     options: ['email', 'google']
    //                 },
    //             }),
    //         ]}
    //         >
    //             <ConnectWallet
    //             theme={"dark"}
    //             modalSize={"wide"}
    //             welcomeScreen={{
    //                 title:
    //                 "Your gateway to decentralized art"
    //             }}
    //             />
    //         </ThirdwebProvider>
    //     )
    // }

    export default WalletButton;