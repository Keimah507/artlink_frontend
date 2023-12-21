
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import '@iconscout/unicons/css/line.css';
import '../css/tiny-slider.css';
import '../css/swiper.min.css';
import '../css/style.min.css';
import { useState, useEffect } from 'react';
import { HelpOutline } from '@mui/icons-material';
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { mintNft } from '@/js/interact.js';
import { pinJsonToIPFS } from '@/js/interact.js';

export default function mintNFT(props) {

    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const onMintPressed = async() => {
        event.preventDefault();
        setIsLoading(true);

        try{

            const {success, status} = await mintNft(name, description, price, image);
            setStatus(status);
            if(success){
                setName('');
                setDescription('');
                setImage('');
                setPrice(0);
            }
            else {
                console.log(status);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <NavBar />
            <main className='home section bg-light overflow-hidden'>
                <div className='container'>
                    <div className='row justify-content-xxl-end justify-content-center'>
                        <div className='col-lg-8'>
                            <nav aria-label='breadcrumb'>
                                <ol className='breadcrumb default mb-0'>
                                    <li className='breadcrumb-item'>
                                        <a href='#' className='text-muted'>
                                            Home
                                        </a>
                                    </li>
                                    <li className='breadcrumb-item active text-primary'>mint NFT</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className='row justify-content-xxl-end justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='inner-heading text-start'>
                                <div className='mt-5'>
                                    <h1 className='fw-bold'>Create your NFT</h1>
                                    <p className='text-muted'>Mint your NFT Here</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <form className='info-box' method='post' id='NFTForm' encType='multipart/form-data'>
                            <div className='row justify-content-xxl-end justify-content-center'>
                                <div className='col-lg-8'>
                                    <div className='info-box'>
                                        <h4 className='fw-bold'>NFT Metadata
                                            <HelpOutline />
                                        </h4>
                                        <div className='mt-4'>
                                            <div className='mt-4'>
                                                <div className='Name'>
                                                    <div className='d-flex'>
                                                        <label className='form-label fw-semibold'> NFT Name:</label>
                                                    </div>
                                                    <input type='text' onChange={(event) => setName(event.target.value)} className='form-control' placeholder='Enter your NFT`s name' required name='name'></input>
                                                </div>
                                            </div>

                                            <div className='mt-4'>
                                                <div className='Name'>
                                                    <div className='d-flex'>
                                                        <label className='form-label fw-semibold'> NFT Description:</label>
                                                    </div>
                                                    <input type='text' onChange={(event) => setDescription(event.target.value)} className='form-control' placeholder='Enter your NFT`s description' name='description'></input>
                                                </div>
                                            </div>

                                            {/* <div className='mt-4'>
                                                <div className='Name'>
                                                    <label className='form-label fw-semibold'>url:</label>
                                                    <input type='text' onChange={(event) => setUrl(event.target.url)} className='form-control' placeholder='Enter your url' required name='collectionName'></input>
                                                </div>
                                            </div> */}
                                        </div>

                                        <div className='mt-4'>
                                            <div className='Name'>
                                                <label className='form-label fw-semibold'>Your NFT Price (in ETH):</label>
                                                <input type='number' onChange={(event) => setPrice(event.target.value)} className='form-control' name='price' min={0.0001} step={0.0001} max={1000} required></input>
                                            </div>
                                        </div>

                                        <div className='mt-4'>
                                            <div className='Name'>
                                                <div className='d-flex'>
                                                <label className='form-label fw-semibold'>Upload your NFT:</label>
                                                </div>
                                                <input type='file' onChange={(event) => setImage(event.target.files[0])} className='form-control' name='NFTImage' required></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='submit-button'>
                                        <button id='mintButton' className='btn btn-primary' type='submit' disabled={isLoading} onClick={onMintPressed}>
                                            {isLoading ? 'Minting...' : 'Mint'}
                                            </button>
                                    </div>
                                    <p id='status' style={{color:"red"}}>{status}</p>
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
                </main>
                <Footer />
        </div>
    )
}