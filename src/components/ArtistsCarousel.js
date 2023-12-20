'use client'
// Component for the carousel of artists on the home page
import dynamic from 'next/dynamic';
import Artists from './Artists';
import '../css/tiny-slider.css';

const ArtistsCarousel = () => {
    
    const artists = [
        {
            imageSrc: '/images/slider/user/img-1.jpg',
            username: '@kristin_watson',
            ethAmount: '1.2',
        },
        {
            imageSrc: '/images/slider/user/img-2.jpg',
            username: '@mazanov_sky',
            ethAmount: '1.75',
        },
        {
            imageSrc: '/images/slider/user/img-3.jpg',
            username: '@jimmy_dale',
            ethAmount: '3.222',
        },
        {
            imageSrc: '/images/slider/user/img-4.jpg',
            username: '@alvin_jonson',
            ethAmount: '2.2',
        },
        {
            imageSrc: '/images/slider/user/img-5.jpg',
            username: '@anna_knowles',
            ethAmount: '1.2',
        },
        {
            imageSrc: '/images/slider/user/img-6.jpg',
            username: '@kevin_stark',
            ethAmount: '1.2',
        },
        {
            imageSrc: '/images/slider/user/img-7.jpg',
            username: '@kristin_watson',
            ethAmount: '4.23',
        }
    ]

    return (
        <div className='row'>
            <div className='col-lg-12'>
                <div className='mt-5' id='team-slider'>
                    <TinySliderWithNoSSR settings={settings}>
                        {artists.map((member, index) => (
                            <Artists
                            key={index}
                            imageSrc={member.imageSrc}
                            username={member.username}
                            ethAmount={member.ethAmount}
                            />
                        ))}
                    </TinySliderWithNoSSR>
                </div>
            </div>
        </div>
    )

}

const settings = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    controls: true,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 4000,
    speed: 900,
    gutter: 40,
    center: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    controlsText: ['&#8592;', '&#8594;'],
    autoplayButtonOutput: false,
    responsive: {

        992: {
            gutter: 40,
            items: 6
        },

        }
};

const TinySliderWithNoSSR = dynamic(() => import('tiny-slider-react'), {
    ssr: false
});

export default ArtistsCarousel;