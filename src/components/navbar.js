'use client'

// Desc: This is the navbar component for the website
import React, { useState, useEffect } from "react";
import WalletButton from "../components/ConnectWalletButton";
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';


const Navbar = () =>  {

    const [isSticky, setIsSticky] = useState(false);

    //Scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    } ,[]);

    return(
        <main>
            <nav className={`navbar navbar-expand-lg ${isSticky ? 'fixed-top bg-light' : 'bg-transparent'}`} id="navbar">
                <div className="container-fluid custom-container">
                    <a className="navbar-brand logo f-30 text-dark fw-bold" href="/">
                        <img src="/images/logo-light.png" className="logo-light" alt="logo" height='40'></img>
                        <img src="/images/logo-dark.png" className="logo-dark" alt="logo" height='40'></img>
                    </a>
                    <div>
                    <button className="navbar-toggler me-3" type="button" data-bs-toggle='collapse'
                    data-bs-target='#navbarCollapse' aria-controls='navbarCollapse' aria-label='Toggle navigation'
                    >
                        <MenuIcon className="text-dark" />
                    </button>
                    </div>

                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <ul className='navbar-nav mx-auto navbar-center'>
                            <li className='nav-item'>
                                <a href='/' className='nav-link'>Home</a>
                            </li>

                            <li className='nav-item'>
                                <a href='/collection' className='nav-link'>Collection</a>
                            </li>

                            <li className='nav-item'>
                                <a href='/nfts' className='nav-link'>NFTs</a>
                            </li>

                            <li className='nav-item'>
                                <a href='/mintNFT' className='nav-link'>Mint NFT</a>
                            </li>

                            <li className='nav-item'>
                                <a href='/artists' className='nav-link'>Artists</a>
                            </li>

                            <li className='nav-item dropdown dropdown-hover'>
                                <a className='nav-link dropdown-toggle' href='/' id='homedrop' role='button'
                                data-bs-toggle='dropdown'>Profile</a>
                                <ul className='dropdown-menu dropdown-menu-center' aria-labelledby='homedrop'>
                                    <li><a className='dropdown-item' href='/profile'>
                                    <AccountBoxIcon className='f-20 me-2 align-middle' />Profile    
                                    </a></li>
                                    <li><a className='dropdown-item' href='/edit-profile'>
                                    <FaceRetouchingNaturalIcon className='f-20 me-2 align-middle' />Edit Profile
                                    </a></li>
                                </ul>
                            </li>
                        </ul>
                        < WalletButton />
                    </div>
                </div>
            </nav>
        </main>
    )
}

export default Navbar;