import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/tiny-slider.css';
import '../css/swiper.min.css';
import '../css/style.min.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProfileTab from '../components/ProfileTab';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import Link from 'next/link';
import Image from 'next/image';

const Profile = () => {
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
                {/* Start Breadcrumb */}
                <div className='row mt-4'>
                    <div className='col-lg-12'>
                        <nav aria-label='breadcrumb'>
                            <ol className='breadcrumb default mb-0'>
                                <li className='breadcrumb-item'>
                                    <Link href='/' className='text-muted'>Home</Link>
                                </li>
                                <li className='breadcrumb-item active text-primary' aria-current='page'>Profile</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Start Page */}
                <div className='row align-items-center justify-content-center'>
                    <div className='col-lg-8'>
                        <div className='inner-heading text-center'>
                            <div className='mt-4'>
                                <h1 className='fw-bold'>Your Profile</h1>
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
                                <Image src='/images/inner-image/user/img-7.jpg' alt=''
                                className='img-fluid avatar-xl border border-4 border-white rounded-circle' width={50} height={50}></Image>
                            </div>
                            <div className='profile-name ms-3'>
                                <h6 className='fw-bold'>@mickel_fenn</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-lg-3'>
                        <div className='about-detail'>
                            <h6 className='fw-bold'>About me: </h6>
                            <div className='details-box'>
                                <p className='text-muted f-16'>I am an artist and this is my bio.</p>
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

                        {/* Profile tab start */}
                        <div className='col-lg-9 mt-5'>
                            {/* Heading sufficiently styled showing start of section*/}
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='heading'>
                                    <h5 className='fw-bold'>Your NFTs</h5>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <div className='me-3'>
                                            <Link href='/mintNFT' className='btn btn-primary'>Create NFT</Link>
                                        </div>
                                        <div className='me-3'>
                                            <Link href='/edit-profile' className='btn btn-primary'>Edit Profile</Link>
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
    )
}

export default Profile;