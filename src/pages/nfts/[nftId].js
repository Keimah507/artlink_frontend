import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.min.css';
import '@iconscout/unicons/css/line.css';
import '../../css/tiny-slider.css';
import '../../css/swiper.min.css';
import '../../css/style.min.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { FilterVintage } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function NFT() {


    const profileItems = {
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
        }


    return(
        <div>
            <NavBar />
            <main>
                <section className='item-detail section bg-light'>
                {/* start container */}
                <div className='container'>
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <nav aria-label='breadcrumb'>
                                <ol className='breadcrumb default mb-0'>
                                    <li className='breadcrumb-item'>
                                        <a href='#' className='text-muted'>
                                            Home
                                        </a>
                                    </li>
                                    <li className='breadcrumb-item active text-primary' aria-current='page'>
                                        NFT
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    {/* <div className='row align-items-center justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='inner-heading text-center'>
                                <div className='mt-4'>
                                    <h1 className='fw-bold'>{profileItems.title}</h1>
                                </div>
                            </div>

                            <div className='heading-bottom-icon d-flex justify-content-center text-center'>
                                <FilterVintage />
                                <FilterVintage />
                                <FilterVintage />
                            </div>
                        </div>
                    </div> */}

                    <div className='row mt-5 align-items-center'>
                        <div className='col-lg-6'>
                            <div className='back-home-image pe-4 position-relative'>
                                <img src={profileItems.image} alt='' className='image-fill'></img>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='backhome-content mt-4 mt-lg-0'>
                                <h2 className='fw-bold'>{profileItems.title}</h2>
                                <div className='d-flex mt-3 justify-content-center align-items-between'>
                                    <a href=''><span
                                    className='badge rounded-pill bg-white box-shadow text-dark f-16 fw-normal py-2 px-3'>
                                        <FavoriteIcon className='text-danger f-18 me-2 align-middle' />{profileItems.bidInfo.likes}
                                    </span></a>

                                    <a href=''><span
                                    className='badge rounded-pill bg-white box-shadow text-dark f-16 fw-normal py-2 px-3 ms-2'>
                                        <ShareIcon className='text-primary f-18 me-2 align-middle' />Share
                                    </span></a>
                                </div>

                                <hr className='mt-4 mb-5'></hr>

                                <div className='row border rounded-3'>
                                    <div className='mt-2 col-lg-6'>
                                        <h6 className='fw-bold mb-1'>Minimum bid</h6>
                                        <p className='fw-semibold'>{profileItems.bidInfo.highestBid} <span className='text-muted'>ETH</span></p>
                                    </div>

                                    <div className='d-flex mb-4 justify-content-evenly'>
                                        <button className='btn btn-primary'>Buy Now</button>
                                        <button className='btn btn-outline-primary ms-2'>Place Bid</button>
                                    </div>
                                </div>

                                <div className='tab-box my-4'>
                                    <NftDetailTab />
                                </div>



                            </div>
                        </div>
                    </div>

                </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

const NftDetailTab = () => {
    const [value, setValue] = React.useState('1');
    const [nftData, setNftData] = React.useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const nftDetails = async () => {
            const nftData = [
                {
                tabTitle: 'Details',
                title: 'The Golden State',
                },
                {
                    tabTitle: 'History',
                    artist: {
                        image: '/images/inner-image/user/img-7.jpg',
                        username: 'mickel_fenn'
                    },
                    description: "Lorem ipsum dolor sit amet",
                    bidInfo: {
                        likes: 10,
                        price: 0.5,
                        highestBid: 0.6
                    },
                    history: [
                        {
                            user: {
                                image: '/images/inner-image/user/img-1.jpg',
                                username: 'mickel_fenn'
                            },
                            price: 0.5,
                            date: '22/3/23, 10.11 UTC+0'
                        },
                        {
                            user: {
                                image: '/images/inner-image/user/img-5.jpg',
                                username: 'ayoub_fennouni'
                            },
                            price: 1,
                            date: '11/9/22, 19:33 UTC+0'
                        }
                    ]
                }

            ];
            setNftData(nftData);
        }
        nftDetails();
    }, [])

    return(
        <div>
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='NFT Details tab'>
                    {nftData.map((tab, index) => (
                        <Tab key={index} label={tab.tabTitle} value={(index + 1).toString()} />
                    
                    ))}
                </TabList>

                <div className='tab-content mt-4 ps-3'>
                    <TabPanel value='1'>
                        <div className='tab-pane fade show' id='pills-home' role='tabpanel'
                            aria-labelledby='pills-home-tab'>
                            <p className='text-muted'>
                                Some details
                            </p>
                        </div>
                    </TabPanel>
                    <TabPanel value='2'>
                        <div className='tab-pane fade show' id='pills-contact' role='tabpanel'
                        aria-labelledby='pills-contact-tab'>
                            <div className='nav-in-box d-flex align-items-center box-shadow p-4'>
                                <div className='flex-shrink-0'>
                                    <div className='avatar-md'>
                                        <img src='/images/inner-image/user/img-1.jpg' alt='' className='img-fluid rounded-circle'></img>
                                    </div>
                                </div>
                                <div className='flex-grow-1 ms-3'>
                                    <p className='mb-0 text-dark'>Bid accepted by <span className='text-primary fw-bold'>
                                        2.2 ETH</span> <span className='text-muted'>@brodie</span></p>
                                    <p className='mb-0 text-muted'>22/3/23, 10.11 UTC+0</p>
                                </div>
                            </div>

                            <div className='nav-in-box d-flex align-items-center box-shadow p-4 mt-3'>
                                <div className='flex-shrink-0'>
                                    <div className='avatar-md'>
                                        <img src='/images/inner-images/user/img-5.jpg' alt='' className='img-fluid rounded-circle'></img>
                                    </div>
                                </div>
                                <div className='flex-grow-1 ms-3'>
                                    <p className='mb-0 text-dark'>Bid accepted by <span className='text-primary fw-bold'>
                                    1 ETH</span> <span className='text-muted'>@ayoub_fennouni</span></p>
                                    <p className='mb-0 text-muted'>11/9/22, 19:33 UTC+0</p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </div>
        </TabContext>
    </div>
    )
}