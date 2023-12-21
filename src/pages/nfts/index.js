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


const NftsPage = () => {

    const profileItems = [
        {
            image: '/images/inner-image/explore/img-2.png',
            title: 'The Golden State',
            artist: {
                image: '/images/inner-image/user/img-7.jpg',
                username: 'mickel_fenn'
            },
            bidInfo: {
                likes: 10,
                price: 0.5,
                highestBid: 0.6
            }
        },
        {
            image: '/images/inner-image/explore/img-1.png',
            title: 'Abstract painting',
            artist: {
                image: '/images/inner-image/user/img-7.jpg',
                username: 'mickel_fenn'
            },
            bidInfo: {
                likes: 10,
                price: 0.5,
                highestBid: 0.6
            }
        },
        {
            image: '/images/inner-image/explore/img-3.png',
            title: 'The Christopher art',
            artist: {
                image: '/images/inner-image/user/img-7.jpg',
                username: 'mickel_fenn'
            },
            bidInfo: {
                likes: 10,
                price: 0.5,
                highestBid: 0.6
            }
        },
        {
            image: '/images/inner-image/explore/img-4.png',
            title: 'The Boy with The Firefly',
            artist: {
                image: '/images/inner-image/user/img-7.jpg',
                username: 'mickel_fenn'
            },
            bidInfo: {
                likes: 10,
                price: 0.5,
                highestBid: 0.6
            }  
        }
    ]


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
                        {profileItems.map((item, index) => (
                        <ProfileTab
                        href={`/nfts/${index}`}
                        key={index}
                        image={item.image}
                        title={item.title}
                        artist={item.artist}
                        bidInfo={item.bidInfo}
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