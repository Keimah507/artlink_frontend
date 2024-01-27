import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/tiny-slider.css';
import '../../css/swiper.min.css';;
import '../../css/style.min.css';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import ProfileTab from '@/components/ProfileTab';
import Link from 'next/link';


export const getStaticProps = async () => {
    const res = await fetch("https://artlink-cf7a7b7b9f96.herokuapp.com/getNFTs?collection=0xCe6e401D3786Efe354E75BE01BDcAaE5088F87B6")
    const data = await res.json()

    return {
        props: {
            nfts: data
        }
    }
}


const NftsPage = ({ nfts }) => {
    if (!nfts || !nfts.data || !nfts.data.nfts) {
        return (
            <div> No NFTS found</div>
        )
    }
    return(
        <>
        <Navbar />
        <main>
            <section className='profile section bg-gray'>
                {/* Start BreadCrumb */}
                <div className='container'>
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <nav aria-label='breadcrumb'>
                                <ol className='breadcrumb default mb-0'>
                                    <li className='breadcrumb-item'><Link href='/' className='text-muted'>Home</Link></li>
                                    <li className='breadcrumb-item active text-primary' aria-current='page'>NFTs</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/* End Breadcrumb */}

                    {/* Start page */}
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='inner-heading text-center'>
                                <div className='mt-4'>
                                    <h1 className='fw-bold'>NFTs</h1>
                                </div>
                            </div>

                            <div className='heading-bottom-icon d-flex justify-content-center text-center'>
                                <FilterVintageIcon />
                                <FilterVintageIcon />
                                <FilterVintageIcon />
                            </div>
                        </div>
                    </div>

                    {/* start grid */}
                    <div className='d-flex flex-column'></div>
                    <div className='position-relative'></div>
                    <div className='row position-absolute'>
                        {nfts.data.nfts.map((item, index) => (
                        <ProfileTab
                        href={`/nfts/${item.tokenId}`}
                        key={item.tokenId}
                        tokenID={item.tokenId}
                        image={item.image.fileUrl || '/images/image_not_found.jpg'}
                        title={item.name}
                        artist={item.mint.mintAddress}
                        />
                        ))}
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default NftsPage;