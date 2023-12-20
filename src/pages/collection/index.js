import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';
import '@iconscout/unicons/css/line.css';
import '../../css/tiny-slider.css';
import '../../css/swiper.min.css';
import '../../css/style.min.css';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CollectionCard from '@/components/CollectionCard';

export default function Collection() {
  
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
      id: '1',
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
        id: '2',
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
        id: '3',
        artist: {
            username: 'Artist_3',
            image: '/images/slider/user/img-3.jpg',
        },
        likes: '1.5k',
    }
    // Add more collection items as needed
  ];

  return (
      <div>
      <Navbar />
      <main className="profile section bg-light">
        <div className="container">
          <div className="row mt-4">
            <div className='col-lg-12'>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb default mb-0'>
                  <li className='breadcrumb-item'><a href='#' className='text-muted'>Home</a></li>
                  <li className='breadcrumb-item active text-primary' aria-current='page'>Collection</li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8">
              <div className="inner-heading text-center">
                <div className="mt-4">
                  <h1 className="fw-bold">Best Collections</h1>
                  <p className="text-muted">
                    Breathtaking collections from artists all over the world
                    <br /> The height of art
                  </p>
                </div>
              </div>
              <div className="heading-bottom-icon d-flex justify-content-center text-center">
                  <FilterVintageIcon />
                  <FilterVintageIcon />
                  <FilterVintageIcon />
              </div>
            </div>
          </div>
          {/* start row */}
          <div className="row mt-4">
            <div className='col-lg-12 mt-5'>
              <div className='blog'>
                <div className='row'>
                  {collectionItems.map((item, index) => (
                  <CollectionCard
                  href={`collection/${item.id}`}
                  key={index}
                  images={item.images}
                  title={item.title}
                  artist={item.artist}
                  likes={item.likes}
                  />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
