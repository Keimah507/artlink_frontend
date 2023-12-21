import { RestartAlt } from '@mui/icons-material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SellIcon from '@mui/icons-material/Sell';
import { data } from 'autoprefixer';
import Image from 'next/image';

const ProfileTab = ({href, image, title, artist, bidInfo}) => {

    return (
            <div className='col-lg-4 mt-4'>
            <div className='tab-box p-4 border-0'>
                <div className='header d-flex align-items-center justify-content-center'>
                    <div className='avatar-xs'>
                        <Image src={artist.image} alt='NFT artist image' className='img-fluid rounded-circle' />
                    </div>
                    <h6 className='mb-0 ms-2 fw-semibold text-muted f-14'>@{artist.username}</h6>
                </div>
                <div className='card-image mt-2 position-relative'>
                    <a href={href}>
                    <Image src={image} alt='NFT Image' className='img-fluid' />
                    <div className='position-absolute top-0 end-0 me-3 mt-3'>
                        <span className='badge rounded-pill bg-white text-dark'>
                            <FavoriteIcon className='f-16 align-middle text-danger' />
                            {bidInfo.likes}
                        </span>
                    </div>
                    </a>
                </div>
                <div className='body-content mt-3'>
                    <h6 className='fw-bold'>{title}</h6>
                    <div className='ms-auto'>
                        <p className='text-success mb-0 fw-semibold'>{bidInfo.price} ETH</p>
                    </div>
                    <hr className='my-3' />

                    <div className='blog-slider-footer'>
                        <h6 className='f-14'>
                            <SellIcon className='f-18 text-primary me-2 align-middle' /> Highest Bid
                            <span className='text-muted ms-2'>{bidInfo.highestBid} ETH</span>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTab;