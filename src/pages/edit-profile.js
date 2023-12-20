import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/tiny-slider.css';
import '../css/swiper.min.css';
import '../css/style.min.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import InfoIcon from '@mui/icons-material/Info';

const editProfile = () => {

    return (
        <>
        <Navbar />
        <main>
            <section className='home section bg-light'>

                <div className='container'>
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <nav aria-label='breadcrumb'>
                                <ol className='breadcrumb'>
                                    <li className='breadcrumb-item'><a href='/'>Home</a></li>
                                    <li className='breadcrumb-item active' aria-current='page'>Edit Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className='row align-items-center justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='inner-heading text-center'>
                                <div className='mt-4'>
                                    <h1 className='fw-bold'>Edit Profile</h1>
                                </div>
                            </div>

                            <div className='heading-bottom-icon d-flex justify-content-center text-center'>
                                <FilterVintageIcon />
                                <FilterVintageIcon />
                                <FilterVintageIcon />
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <form className='info-box' action='/edit-profile' method='post' id='ContactForm' encType='multipart/form-data'>
                            <div className='row'>
                                <div className='col-lg-5'>
                                    <h4 className='fw-bold'>Account Info 
                                    <InfoIcon className='f-30 align-middle' />
                                    </h4>

                                    <div className='mt-4'>
                                        <div className='mt-3'>
                                            <div className='Name'>
                                                <label className='form-label fw-semibold'>Display Name:
                                                </label>
                                                <input type='text' className='form-control' name='username' placeholder='Enter new Name'></input>
                                            </div>
                                        </div>

                                        <div className='mt-4'>
                                            <div className='Name'>
                                                <div className='d-flex'>
                                                    <label className='form-label fw-semibold'>Bio: 
                                                    </label>
                                                    <textarea className='form-control' name='bio' rows={3}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-4'>
                                        <label className='form-label fw-semibold'>Profile:
                                        </label>
                                        <div className='d-flex align-items-center'>
                                            <div className='flex-shrink-0'>
                                                <div className='avatar'>
                                                    <img src='/images/inner-image/img-1.png' alt='' className='img-fluid rounded-circle avatar-sm'></img>
                                                </div>
                                            </div>
                                            <div className='flex-grow-1 ms-3'>
                                                <div className='d-flex'>
                                                    <div className='button'>
                                                        <input type='file' className='btn btn-dark' name='profileImg'></input>
                                                    </div>
                                                    <button className='btn btn-white shadow ms-3 text-dark'>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className='my-4' />

                                    <div className='submit-button'>
                                        <button className='btn btn-primary' type='submit'>Submit</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>


                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default editProfile;