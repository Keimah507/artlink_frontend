import 'bootstrap/dist/css/bootstrap.min.css';
import '@iconscout/unicons/css/line.css';
import '../css/tiny-slider.css';
import '../css/swiper.min.css';
import '../css/style.min.css';
import Script from 'next/script';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BrushIcon from '@mui/icons-material/Brush';
import MoodIcon from '@mui/icons-material/Mood';
import CollectionsIcon from '@mui/icons-material/Collections';
import { RestartAlt } from '@mui/icons-material';
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroCarousel from '@/components/Carousel';
import ExploreTab from '@/components/ExploreTab';
import ArtistsCarousel from '@/components/ArtistsCarousel';
import CollectionCard from '@/components/CollectionCard';
import Link from 'next/link';
import Image from 'next/image';

export default function marketplace() {

    const collectionItems = [
        {
          images: {
            topImages: [
              '/images/blog-2/top1.png',
              '/images/blog-2/top2.png',
              '/images/blog-2/top3.png',
            ],
            mainImage: '/images/blog-2/main-1.png',
          },
          title: 'Digital Art Gallery',
          artist: {
            username: 'Artist_1',
            image: '/images/slider/user/img-1.jpg',
          },
          likes: '2.5k',
        },
        {
            images: {
                topImages: [
                    '/images/blog-2/top4.png',
                    '/images/blog-2/top5.png',
                    '/images/blog-2/top6.png',
                ],
                mainImage: '/images/blog-2/main-2.png',
                },
            title: 'Colorful Painting',
            artist: {
                username: 'Artist_2',
                image: '/images/slider/user/img-2.jpg',
            },
            likes: '3k',
        },
        {
            images: {
                topImages: [
                    '/images/blog-2/top7.png',
                    '/images/blog-2/top8.png',
                    '/images/blog-2/top9.png',
                ],
                mainImage: '/images/blog-2/main-3.png',
                },
            title: 'Bubble Art Collection',
            artist: {
                username: 'Artist_3',
                image: '/images/slider/user/img-3.jpg',
            },
            likes: '1.5k',
        }
        // Add more collection items as needed
      ];
    

    return(
        <div>
            <NavBar />
            <main>
                <section className='home-2 overflow-hidden'
                style={{ backgroundImage: 'url(/images/bg-2.png)', backgroundRepeat: 'no-repeat'}} id='home'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='home-content-2 home-heading text-start'>
                                    <h1 className='fw-bold'>See the <span className='text-primary'>Best </span>NFTs and Collections</h1>
                                    <form className='search-form'>
                                        <div className='mb-3 row'>
                                            <div className='col-sm-10'>
                                                <input type='text' className='form-control position-relative' id='search'
                                                placeholder='Search here...'></input>
                                                <div className='search-icon'>
                                                    <SearchIcon />
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    <div className='count-detail'>
                                        <div className='row mt-4'>
                                            <div className='col-lg-4 col-6'>
                                                <div className='counter-box'>
                                                    <div className='d-flex align-items-center justify-content-start'>
                                                        <h6 className='me-1'>Artwork</h6>
                                                        <h6>(<span className='counter_value fw-bold' data-target='310'>0</span>)</h6>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-lg-4 col-6'>
                                                <div className='counter-box'>
                                                    <div className='d-flex align-items-center justify-content-start'>
                                                        <h6 className='me-1'>Collections</h6>
                                                        <h6>(<span className='counter_value fw-bold' data-target='450'>0</span>)</h6>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-lg-4 col-6'>
                                                <div className='counter-box'>
                                                    <div className='d-flex align-items-center justify-content-start'>
                                                        <h6 className='me-1'>Artists</h6>
                                                        <h6>(<span className='counter_value fw-bold' data-target='450'>0</span>)</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <HeroCarousel />
                    </div>
                </section>

                {/* Start explore section */}
                <section className='explore section bg-light px-4' id='explore'>
                    {/* Start container */}
                    <div className='container'>
                        <div className='row position-relative'>
                            <div className='col-lg-12 p-0'>
                                <nav className='mt-5'>
                                    <div className='heading float-start mt-3'>
                                        <h2 className='fw-bold'>Explore</h2>
                                    </div>
                                    <ExploreTab />
                                </nav>
                            </div>


                        </div>
                    </div>
                </section>

                <section className='blog-2 section' id='collection'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h2 className='fw-bold'>Collections</h2>
                            </div>
                            <div className='col-lg-6'>
                                <div className='text-start text-lg-end'>
                                    <Link href='/collection'><button className='btn btn-primary rounded-pill'>View All</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            {collectionItems.map((item, index) => (
                                <CollectionCard
                                key={index}
                                images={item.images}
                                title={item.title}
                                artist={item.artist}
                                likes={item.likes}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className='section team bg-light' id='team'>
                    <div className='container-fluid p-0'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h2 className='fw-bold'>Popular artists</h2>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='text-start text-lg-end'>
                                        <button className='btn btn-primary rounded-pill'>View All</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ArtistsCarousel />
                    </div>
                </section>

                {/* CTA section  */}
                <section className='cta section'>
                    <div className='container'>
                        <div className='row align-items-center justify-content-start'>
                            <div className='col-lg-6'>
                                <h1 className='text-white display-5 fw-bold'>
                                    Discover, Create and Sell Digital artwork.
                                </h1>
                                <button className='btn btn-primary mt-3'>Start collection</button>
                            </div>
                            <div className='col-lg-4 offset-lg-2'>
                                <Image src='/images/cta/img.png' className='img-fluid' alt='CTA Image' layout='responsive' width={100} height={100}></Image>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )

}