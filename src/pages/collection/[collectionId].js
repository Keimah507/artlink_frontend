import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/tiny-slider.css';
import '../../css/swiper.min.css';
import '../../css/style.min.css';
import '../../css/style.css'

import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProfileTab from '@/components/ProfileTab';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import Link from 'next/link';
import Image from 'next/image';

const collectionId = () => {

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
            <section className='profile section bg-light'>
                <div className='container'>
                    {/* Start BreadCrumb */}
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <nav aria-label='breadcrumb'>
                                <ol className='breadcrumb default mb-0'>
                                    <li className='breadcrumb-item'><Link href='/' className='text-muted'>Home</Link></li>
                                    <li className='breadcrumb-item active text-primary' aria-current='page'>Collection</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    {/* Start page */}

                    {/* <div className='row align-items-center justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='inner-heading text-center'>
                                <div className='mt-4'>
                                    <h1 className='fw-bold'>Some name for now</h1>
                                </div>
                            </div>

                            <div className='heading-bottom-icon d-flex justify-content-center text-center'>
                                <FilterVintageIcon />
                                <FilterVintageIcon />
                                <FilterVintageIcon />
                            </div>
                        </div>
                    </div> */}

                    {/* Collection content similar to rarible's individual collection page */}
                    <div className='row mt-4'>
                        <div className='d-flex align-items-stretch'>
                            <div className='mt-4 collection-profile'>
                                <div className='position-relative col-lg-12 overflow-visible'>
                                    <div className='cover-image'>
                                    <Image src='/images/inner-image/explore/img-1.png' alt='Collection Image' className='img-fluid rounded col-lg-12' style={{height: '300px', width: '100%'}}></Image>
                                    </div>
                                    <div className='avatar-box position-absolute'>
                                    <Image src='/images/inner-image/user/img-1.jpg' alt='Avatar' className='img-fluid rounded-circle' width={50} height={50}></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='row row-cols-2 mt-4'>
                            <div className='col d-flex flex-row col-lg-12'>
                                <div className='mt-4 collection-description'>
                                    <div className='justify-content-center'>
                                        <h2 className='fw-bold'>Collection Name</h2>
                                    </div>
                                    <div className='justify-content-start'>
                                        <p className='text-muted'>Created by 0x00...2e4d</p>
                                    </div>
                                    <div className='justify-content-start'>
                                        <span className='fw-semibold'>
                                            Art`s description
                                        </span>
                                    </div>
                                </div>

                                <div className='col offset-6'>
                                    <div className='d-flex col-lg-12 collection-info'>
                                        <div className='flex-column justify-items-start'>
                                            <p className='text-muted'>Floor</p>
                                         <p className='text-muted'>Volume</p>
                                            <p className='text-muted'>Items</p>
                                            <p className='text-muted'>Owners</p>
                                        </div>
                                        <div className='flex-column justify-items-end'>
                                            <p className='text-muted'>0.00 ETH</p>
                                            <p className='text-muted'>0.00 ETH</p>
                                            <p className='text-muted'>0</p>
                                            <p className='text-muted'>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-4'>
                            <div className='d-flex'>
                                <div className='justify-content-center'>
                                    <h2 className='fw-bold'>Collection Items</h2>
                                </div>
                            </div>
                            <hr className='mt-4'></hr>
                        </div>

                        <div className='d-flex flex-column'>
                            <div className='position-relative'>
                                <div className='row'>
                                    {profileItems.map((item, index) => (
                                        <ProfileTab
                                        href={`/nft/${index}`}
                                        key={index}
                                        image={item.image}
                                        title={item.title}
                                        artist={item.artist}
                                        bidInfo={item.bidInfo}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default collectionId;