import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="top-footer">
                    <div className="row">
                         <div className="col-lg-4">
                            <div className="footer-info mt-4">
                                <Link className="logo f-30 text-dark fw-bold" href="/">
                                    <Image src="/images/logo-light.png" className="logo-light" alt="logo" height='40' /> 
                                    <Image src="/images/logo-dark.png" className="logo-dark" alt="logo" height='40' /> 
                                </Link>
                            </div>
                         </div>

                         <div className="col-lg-5">
                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="mt-4">
                                        <h5 className="f-18 fw-bold">Policies</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            <li><a href="">Security & Privacy</a></li>
                                            <li><a href="">Terms of Service</a></li>
                                            <li><a href="">Policies</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="mt-4">
                                        <h5 className="f-18 fw-bold">Company</h5>
                                        <ul className="list-unstyled footer-link mt-3">
                                            <li><a href="">About</a></li>
                                            <li><a href="">Careers</a></li>
                                            <li><a href="">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                         </div>

                         <div className='col-lg-3'>
                            <div className='mt-4 pl-0 pl-lg-4'>
                                <h5 className='f-18 fw-bold'>Follow Us</h5>
                                <ul className='list-inline social-icons-list pt-3'>
                                    <li className='list-inline-item'>
                                        <a href='#'><TwitterIcon/></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='#'><LinkedInIcon/></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='#'><InstagramIcon/></a>
                                    </li>
                                    <li className='list-inline-item'>
                                        <a href='#'><RedditIcon/></a>
                                    </li>
                                </ul>
                            </div>
                         </div>


                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12">
                        <div className="text-center">
                            <p className="my-4 text-muted">© 2023. Artlink</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;