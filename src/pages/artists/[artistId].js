import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/tiny-slider.css';
import '../../css/swiper.min.css';;
import '../../css/style.min.css';

import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import ProfileTab from '@/components/ProfileTab';

const ArtistItem = () => {
    const router = useRouter();
    const artistId = router.query.artistId;

    const [artist, setArtist] = useState([]);

    useEffect(() => {
        if (artistId) {
        fetch(` https://artlink-cf7a7b7b9f96.herokuapp.com/user/${artistId}`)
        .then(res => res.json())
        .then(data => {
            if(data.user) {
                setArtist(data.user);
            }
        })
        .catch((err) => {
            console.error(err);
        });
        }
    }, [artistId]);

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


    return (
        <>
        <Navbar />
        <main>
            <section className='profile section bg-light'>
                <div className='container'>
                    {/* Start Breadcrumb */}
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <nav aria-label='breadcrumb'>
                                <ol className='breadcrumb default mb-0'>
                                    <li className='breadcrumb-item'>
                                        <a href='/' className='text-muted'>Home</a>
                                    </li>
                                    <li className='breadcrumb-item active text-primary' aria-current='page'>Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    {/* Start page */}
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='inner-heading text-center'>
                                <div className='mt-4'>
                                    <h1 className='fw-bold'>{artist.username}</h1>
                                </div>
                            </div>

                            <div className='heading-bottom-icon d-flex justify-content-center text-center'>
                                <FilterVintageIcon />
                                <FilterVintageIcon />
                                <FilterVintageIcon />
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5 align-items-center'>
                        <div className='col-lg-12'>
                            <div className='d-flex align-items-center justify-content-start'>
                                <div className='avatar'>
                                    <img src={artist.profileImg} alt='Artist Profile Picture'
                                    className='img-fluid avatar-xl border border-4 border-white rounded-circle'></img>
                                </div>
                                <div className='profile-name ms-3'>
                                    <h6 className='fw-bold'>@{artist.username}</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-lg-3'>
                            <div className='about-detail'>
                                <h6 className='fw-bold'>About me: </h6>
                                <div className='details-box'>
                                    <p className='text-muted f-16'>{artist.Bio}</p>
                                    <div className='row d-flex mt-4'>
                                        <div className='col-lg-6'>
                                            <p className='fw-semibold f-16 mb-0 text-muted'>Collections</p>
                                            <p className='fw-semibold f-18'>10</p>
                                        </div>
                                        <div className='col-lg-6'>
                                            <p className='fw-semibold f-16 mb-0 text-muted'>NFTs</p>
                                            <p className='fw-semibold f-18'>20</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/* Profile Tab Start */}
                    <div className='col-lg-9 mt-5'>
                        {/* Heading sufficiently styled showing start of section*/}
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='heading'>
                                <h5 className='fw-bold'>{artist.username}'s NFTs</h5>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <div className='me-3'>
                                        <a href='/mintNFT' className='btn btn-primary'>Create NFT</a>
                                    </div>
                                    <div className='me-3'>
                                        <a href='/edit-profile' className='btn btn-primary'>Edit Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                        {profileItems.map((item, index) => (
                            <ProfileTab
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
            </section>
        </main>
        <Footer />
        </>
    );
}

export default ArtistItem;