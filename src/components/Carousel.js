import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HeroCarousel = () => {

    return (
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoplaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 5,
            partialVisibilityGutter: 40
            },
            mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 2,
            partialVisibilityGutter: 30
            }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        >
            {/* render simple list of items to test with */}
                <div className='item'>
                    <div className='card mx-2'>
                        <div className='header d-flex'>
                            <div className='ms-auto'>
                                <div className='badge rounded pill'>Artwork</div>
                            </div>
                        </div>
                        <div className='card-image mt-3'>
                        <Image src="/images/slider-blog/1.png" alt="" className='img-fluid' width='100' height={100} layout='responsive' />
                        </div>
                        <div className='card-body'>
                            <h6 className='fw-bold mb-0'>Evolved Reality</h6>
                            <p className='f-14 text-orange'>1.2 ETH</p>

                            <div className='profile-content align-items-center d-flex justify-content-start'>
                                <div className='avatar-sm'>
                                    <Image src="/images/inner-image/user/img-5.jpg" alt="" layout='responsive' className='img-fluid rounded-circle' width='50' height={50} />
                                </div>
                                <div className='profile-name'>
                                    <h6 className='fw-bold mb-0 ms-2 f-14'>Kristin Watson</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='item'>
                    <div className='card mx-2'>
                        <div className='header d-flex'>
                            <div className='ms-auto'>
                                <div className='badge rounded pill'>Artwork</div>
                            </div>
                        </div>
                        <div className='card-image mt-3'>
                        <Image src="/images/slider-blog/2.png" alt="" className='img-fluid' width='100' height={100} layout='responsive' />
                        </div>
                        <div className='card-body'>
                            <h6 className='fw-bold mb-0'>Evolved Reality</h6>
                            <p className='f-14 text-orange'>1.2 ETH</p>

                            <div className='profile-content align-items-center d-flex justify-content-start'>
                                <div className='avatar-sm'>
                                    <Image src="/images/inner-image/user/img-5.jpg" alt="" layout='responsive' className='img-fluid rounded-circle' width='50' height={50} />
                                </div>
                                <div className='profile-name'>
                                    <h6 className='fw-bold mb-0 ms-2 f-14'>Kristin Watson</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='item'>
                    <div className='card mx-2'>
                        <div className='header d-flex'>
                            <div className='ms-auto'>
                                <div className='badge rounded pill'>Artwork</div>
                            </div>
                        </div>
                        <div className='card-image mt-3'>
                        <Image src="/images/slider-blog/3.png" alt="" className='img-fluid' layout='responsive' width='100' height={100} />
                        </div>
                        <div className='card-body'>
                            <h6 className='fw-bold mb-0'>Evolved Reality</h6>
                            <p className='f-14 text-orange'>1.2 ETH</p>

                            <div className='profile-content align-items-center d-flex justify-content-start'>
                                <div className='avatar-sm'>
                                    <Image src="/images/inner-image/user/img-5.jpg" alt="" className='img-fluid rounded-circle' layout='responsive' width={50} height={50} />
                                </div>
                                <div className='profile-name'>
                                    <h6 className='fw-bold mb-0 ms-2 f-14'>Kristin Watson</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    

                <div className='item'>
                    <div className='card mx-2'>
                        <div className='header d-flex'>
                            <div className='ms-auto'>
                                <div className='badge rounded pill'>Artwork</div>
                            </div>
                        </div>
                        <div className='card-image mt-3'>
                        <Image src="/images/slider-blog/4.png" alt="" className='img-fluid' layout='responsive' width={100} height={100} />
                        </div>
                        <div className='card-body'>
                            <h6 className='fw-bold mb-0'>Evolved Reality</h6>
                            <p className='f-14 text-orange'>1.2 ETH</p>

                            <div className='profile-content align-items-center d-flex justify-content-start'>
                                <div className='avatar-sm'>
                                    <Image src="/images/inner-image/user/img-5.jpg" alt="" className='img-fluid rounded-circle' width={100} height={100} />
                                </div>
                                <div className='profile-name'>
                                    <h6 className='fw-bold mb-0 ms-2 f-14'>Kristin Watson</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='item'>
                    <div className='card mx-2'>
                        <div className='header d-flex'>
                            <div className='ms-auto'>
                                <div className='badge rounded pill'>Artwork</div>
                            </div>
                        </div>
                        <div className='card-image mt-3'>
                        <Image src="/images/slider-blog/5.png" alt="" className='img-fluid' layout='responsive' width={100} height={100} />
                        </div>
                        <div className='card-body'>
                            <h6 className='fw-bold mb-0'>Evolved Reality</h6>
                            <p className='f-14 text-orange'>1.2 ETH</p>

                            <div className='profile-content align-items-center d-flex justify-content-start'>
                                <div className='avatar-sm'>
                                    <Image src="/images/inner-image/user/img-5.jpg" alt="" className='img-fluid rounded-circle' width={100} height={100} />
                                </div>
                                <div className='profile-name'>
                                    <h6 className='fw-bold mb-0 ms-2 f-14'>Kristin Watson</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Carousel>
    )
};

export default HeroCarousel;