'use client'

// Desc: This is the navbar component for the website
import React, { useState, useEffect } from "react";
import WalletButton from "../components/ConnectWalletButton";
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import Link from "next/link";
import Image from "next/image";


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
                    <Link className="navbar-brand logo f-30 text-dark fw-bold" href="/">
                        <Image src="/images/logo-light.png" className="logo-light" alt="logo" height='40' />
                        <Image src="/images/logo-dark.png" className="logo-dark" alt="logo" height='40' />
                    </Link>
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
                                <Link href='/' className='nav-link'>Home</Link>
                            </li>

                            <li className='nav-item'>
                                <Link href='/collection' className='nav-link'>Collection</Link>
                            </li>

                            <li className='nav-item'>
                                <Link href='/nfts' className='nav-link'>NFTs</Link>
                            </li>

                            <li className='nav-item'>
                                <Link href='/mintNFT' className='nav-link'>Mint NFT</Link>
                            </li>

                            <li className='nav-item'>
                                <Link href='/artists' className='nav-link'>Artists</Link>
                            </li>

                            <li className='nav-item dropdown dropdown-hover'>
                                <Link className='nav-link dropdown-toggle' href='/' id='homedrop' role='button'
                                data-bs-toggle='dropdown'>Profile</Link>
                                <ul className='dropdown-menu dropdown-menu-center' aria-labelledby='homedrop'>
                                    <li><Link className='dropdown-item' href='/profile'>
                                    <AccountBoxIcon className='f-20 me-2 align-middle' />Profile    
                                    </Link></li>
                                    <li><Link className='dropdown-item' href='/edit-profile'>
                                    <FaceRetouchingNaturalIcon className='f-20 me-2 align-middle' />Edit Profile
                                    </Link></li>
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